import { add, sub } from ".";

describe("add", () => {
  test("返り値はは第一引数と第二引数の和である", () => {
    expect(add(50, 50)).toBe(100);
  });

  test("返り値の合計の上限は100である", () => {
    expect(add(70, 80)).toBe(100);
  });
});

describe("sub", () => {
  test("返り値は第一引数と第二引数の差である", () => {
    expect(sub(51, 50)).toBe(1);
  });
  test("返り値の合計の下限は0である", () => {
    expect(sub(70, 80)).toBe(0);
  });
});
