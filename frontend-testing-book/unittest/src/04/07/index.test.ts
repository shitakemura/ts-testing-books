import { greetByTime } from ".";

describe("greetByTime", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // jestに偽のタイマーを使用するように指示
  });

  afterEach(() => {
    jest.useRealTimers(); // jestに真のタイマーを使用する（元に戻す）ように指示
  });

  test("朝は「おはよう」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 8, 0, 0)); // 時刻をセット
    expect(greetByTime()).toBe("おはよう");
  });

  test("昼は「こんにちは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 14, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });

  test("夜は「こんばんは」を返す", () => {
    jest.setSystemTime(new Date(2023, 4, 23, 21, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
