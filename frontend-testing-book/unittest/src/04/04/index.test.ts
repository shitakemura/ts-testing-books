import { getMyArticleLinksByCategory } from ".";
import * as Fetchers from "../fetchers";
import { getMyArticleData, httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

// テストで必要なセットアップを切り替え可能にするモック生成関数
function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "getMyArticles")
      .mockRejectedValueOnce(httpError);
  }
  return jest
    .spyOn(Fetchers, "getMyArticles")
    .mockResolvedValueOnce(getMyArticleData);
}

test("指定したタグを持つ記事が一件もない場合、nullが返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("playwright");
  expect(data).toBe(null);
});

test("指定したタグを持つ記事が一件以上ある場合、リンク一覧が返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toMatchObject([
    {
      title: "TypeScriptを使ったテストの書き方",
      link: "/articles/howto-testing-with-typescript",
    },
    {
      title: "JestではじめるReactのコンポーネントテスト",
      link: "/articles/react-component-testing-with-jest",
    },
  ]);
});

test("データ取得に失敗した場合、rejectされる", async () => {
  mockGetMyArticles(500);
  await expect(getMyArticleLinksByCategory("testing")).rejects.toMatchObject({
    err: { message: "internal server error" },
  });
});
