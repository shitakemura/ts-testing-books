import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";

const user = userEvent.setup();

test("fieldsetのアクセシブルネームはlegendを引用している", () => {
  render(<InputAccount />);
  expect(
    screen.getByRole("group", { name: "アカウント情報の入力" })
  ).toBeInTheDocument();
});

test("メールアドレス入力欄", async () => {
  render(<InputAccount />);
  // <input type="email" />は暗黙的にtextboxロールを持つ
  const textbox = screen.getByRole("textbox", { name: "メールアドレス" });
  const value = "taro.tanaka@example.com";
  // textboxにvalue値を入力
  await user.type(textbox, value);
  // value値が表示されている要素が存在するか検証
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("パスワード入力欄", () => {
  render(<InputAccount />);
  // <input type="password" />は暗黙的にロールを持たない
  expect(() => screen.getByRole("textbox", { name: "パスワード" })).toThrow();
  expect(() => screen.getByPlaceholderText("8文字以上で入力")).not.toThrow();
});

test("パスワード入力欄", async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText("8文字以上で入力");
  const value = "abcd1234";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
