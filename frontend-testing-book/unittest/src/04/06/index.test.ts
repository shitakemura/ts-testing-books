import { checkLength } from ".";
import * as Fetchers from "../fetchers";
import { postMyArticle } from "../fetchers";
import { httpError, postMyArticleData } from "../fetchers/fixtures";
import { ArticleInput } from "../fetchers/type";

// モック生成関数
function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }

  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValueOnce({ ...postMyArticleData, ...input }); // ベースのレスポンスを入力値で更新
  } catch (err) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
}

// 送信する値を動的に作成するファクトリー関数
function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: ["testing"],
    title: "TypeScriptを使ったテストの書き方",
    body: "テストを書く時、TypeScriptを使うことで、テストの保守性が向上します。",
    ...input,
  };
}

test("バリデーションに成功した場合、成功レスポンスが返る", async () => {
  // バリデーションに通過する入力値を用意
  const input = inputFactory();
  //  入力値を含んだ成功レスポンスが返るよう、モックを作成
  const mock = mockPostMyArticle(input);
  // API実行
  const data = await postMyArticle(input);
  // レスポンスに入力値が含まれているか検証
  expect(data).toMatchObject(expect.objectContaining(input));
  // モック関数が呼び出されたか検証
  expect(mock).toHaveBeenCalled();
});

test("バリデーションに失敗した場合、rejectされる", async () => {
  expect.assertions(2);
  // バリデーションに通過しない入力値を用意
  const input = inputFactory({ title: "", body: "" });
  //  入力値を含んだ成功レスポンスが返るよう、モックを作成
  const mock = mockPostMyArticle(input);
  // API実行して、rejectされたか検証
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({
      err: { message: expect.anything() },
    });
    expect(mock).toHaveBeenCalled();
  });
});

test("データ取得に失敗した場合、rejectされる", async () => {
  expect.assertions(2);
  // バリデーションを通過する入力値を用意
  const input = inputFactory();
  // 失敗レスポンスが返るようにモックを作成
  const mock = mockPostMyArticle(input, 500);
  // APIを実行して、rejectされたか検証
  await postMyArticle(input).catch((err) => {
    expect(err).toMatchObject({
      err: { message: expect.anything() },
    });
    expect(mock).toHaveBeenCalled();
  });
});
