import { render, screen } from "@testing-library/react";
import { ContactNumber } from "./ContactNumber";

describe("連絡先", () => {
  test("タイトル", () => {
    render(<ContactNumber />);
    expect(screen.getByRole("group", { name: "連絡先" })).toBeInTheDocument();
  });
  test("電話番号", () => {
    render(<ContactNumber />);
    expect(
      screen.getByRole("textbox", { name: "電話番号" })
    ).toBeInTheDocument();
  });

  test("お名前", () => {
    render(<ContactNumber />);
    expect(screen.getByRole("textbox", { name: "お名前" })).toBeInTheDocument();
  });
});
