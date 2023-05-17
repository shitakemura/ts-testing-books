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

beforeEach(() => {
  jest.resetAllMocks();
});

test("成功時「登録しました」が表示される", async () => {
  // レスポンス: 成功
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("登録しました"));
});

test("失敗時「登録に失敗しました」が表示される", async () => {
  // レスポンス: 失敗
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("登録に失敗しました"));
});
