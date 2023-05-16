import { render, screen } from "@testing-library/react";
import { ArticleListItem, ItemProps } from "./ArticleListItem";

const item: ItemProps = {
  id: "howto-testing-with-typescript",
  title: "TypeScriptを使ったテストの書き方",
  body: "テストを書く時、TypeScriptを使うことで、テストの保守性が向上します…",
};

test("IDに紐づいたリンクが表示される", () => {
  render(<ArticleListItem {...item} />);
  // aタグはlinkロールを持つ
  // toHaveAttributeで要素の属性(a要素のhref属性)を調べる
  expect(screen.getByRole("link", { name: "もっと見る" })).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript"
  );
});
