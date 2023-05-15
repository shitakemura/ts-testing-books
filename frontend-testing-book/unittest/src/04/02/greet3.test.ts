import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"), // greet関数は実装を使う
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装通り）", () => {
  expect(greet("Taro")).toBe("Hello! Taro."); // greet関数は正しい戻り値を返す
})

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you."); // goodBye関数はモックで指定した戻り値を返す
});
