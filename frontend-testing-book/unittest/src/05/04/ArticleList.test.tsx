import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

test("タイトルの表示", () => {
  render(<ArticleList items={items} />);
  // h2要素は暗黙的にheadingロールを持つ
  expect(screen.getByRole("heading", { name: "記事一覧" })).toBeInTheDocument();
});

test("itemsの数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  // li要素は暗黙的にlistitemロールを持つ
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("itemsの数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  // ul要素は暗黙的にlistロールを持つ
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  // ul要素内のlistitemロールの要素の件数を検証
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("一覧アイテムが空のとき「投稿記事がありません」が表示される", () => {
  // 一覧表示がない状態で描画
  render(<ArticleList items={[]} />);
  // 存在しないことを確認する場合queryByRoleを使う(getByRoleだとエラーとなる)
  const list = screen.queryByRole("list");
  // listは存在しないことを検証
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  // 投稿記事がありませんが表示されていることを検証
  expect(screen.getByText("投稿記事がありません")).toBeInTheDocument();
});
