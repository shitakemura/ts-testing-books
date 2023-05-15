import { greet } from "./greet";

jest.mock("./greet"); // ./greet内の関数をモック化

test("挨拶を返さない（本来の実装ではない）", () => {
  expect(greet("Taro")).toBe(undefined); // モック化して戻り値を指定していない場合は、undefinedが返る
});
