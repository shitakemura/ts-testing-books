// フィクスチャー(fixture): レスポンスを再現するテスト用のデータ
import { Articles, HttpError } from "./type";

export const httpError: HttpError = {
  err: { message: "internal server error" },
};

export const getMyArticleData: Articles = {
  articles: [
    {
      id: "howto-testing-with-typescript",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing"],
      title: "TypeScriptを使ったテストの書き方",
      body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します…",
    },
    {
      id: "nextjs-link-component",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["nextjs"],
      title: "Next.jsのLink コンポーネント",
      body: "Next.jsの画面遷移には、Link コンポーネントを使用します…",
    },
    {
      id: "react-component-testing-with-jest",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing", "react"],
      title: "JestではじめるReactのコンポーネントテスト",
      body: "Jestは単体テストとして、UIコンポーネントのテストが可能です…",
    },
  ],
};
