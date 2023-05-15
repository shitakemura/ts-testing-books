import { timeout, wait } from ".";

describe("Promiseをreturnする書き方", () => {
  test("指定時間待つと、経過時間をもってresolveされる1", () => {
    return wait(50).then((duration) => {
      expect(duration).toBe(50);
    });
  });

  test("指定時間待つと、経過時間をもってresolveされる2", () => {
    return expect(wait(50)).resolves.toBe(50);
  });
});

describe("async/awaitを使った書き方", () => {
  test("指定時間待つと、経過時間をもってresolveされる1", async () => {
    await expect(wait(50)).resolves.toBe(50);
  });
  test("指定時間待つと、経過時間をもってresolveされる2", async () => {
    expect(await wait(50)).toBe(50);
  });
});

describe("Rejectを検証するテスト", () => {
  test("指定時間待つと、経過時間をもってrejectされる1", () => {
    return timeout(30).catch((duration) => {
      expect(duration).toBe(30);
    });
  });

  test("指定時間待つと、経過時間をもってrejectされる2", () => {
    return expect(timeout(30)).rejects.toBe(30);
  });

  test("指定時間待つと、経過時間をもってrejectされる3", async () => {
    await expect(timeout(30)).rejects.toBe(30);
  });

  test("指定時間待つと、経過時間をもってrejectされる4", async () => {
    expect.assertions(1);
    try {
      await timeout(30);
    } catch (err) {
      expect(err).toBe(30);
    }
  });
});
