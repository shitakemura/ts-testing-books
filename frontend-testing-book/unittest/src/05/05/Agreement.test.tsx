import { render, screen } from "@testing-library/react";
import { Agreement } from "./Agreement";

test("fieldsetのアクセシブルネームは、legendを引用している", () => {
  render(<Agreement />);
  // fieldset要素は暗黙的にgroupロールを持つ
  expect(
    screen.getByRole("group", { name: "利用規約の同意" })
  ).toBeInTheDocument();
});

test("チェックボックスはチェックが入っていない", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

test("利用規約へのリンクがある", () => {
  render(<Agreement />);
  expect(screen.getByRole("link", { name: "利用規約" })).toHaveAttribute(
    "href",
    "/terms"
  );
});
