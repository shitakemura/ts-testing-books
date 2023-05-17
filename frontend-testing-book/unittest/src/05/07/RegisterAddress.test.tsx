import { render, screen } from "@testing-library/react";
import { mockPostMyAddress } from "./fetchers/mock";
import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from "./testingUtils";
import { RegisterAddress } from "./RegisterAddress";

jest.mock("./fetchers");

// 入力送信を行うインタラクション関数
async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();

  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();

  return submitValues;
}

// 入力バリデーションでエラーとなるインタラクション関数
async function fillInvalidValuesAndSubmit() {
  const contactNumber = await inputContactNumber({
    phoneNumber: "abc-defg-hijkl",
    name: "田中 太郎",
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

beforeEach(() => {
  jest.resetAllMocks();
});

test("成功時「登録しました」が表示される", async () => {
  // レスポンス: 成功
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("登録しました")).toBeInTheDocument();
});

test("失敗時「登録に失敗しました」が表示される", async () => {
  // レスポンス: 失敗
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("登録に失敗しました")).toBeInTheDocument();
});

test("バリデーションエラー時「不正な入力値が含まれています」が表示される", async () => {
  // Arrange
  render(<RegisterAddress />);
  // Act
  await fillInvalidValuesAndSubmit();
  // Assert
  expect(screen.getByText("不正な入力値が含まれています")).toBeInTheDocument();
});

test("不明なエラー時「不明なエラーが発生しました」が表示される", async () => {
  render(<RegisterAddress />);
  await fillValuesAndSubmit();
  // APIをモック化せずに実行しているのでエラーとなる
  expect(screen.getByText("不明なエラーが発生しました")).toBeInTheDocument();
});
