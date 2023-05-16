import { render, screen } from "@testing-library/react";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

describe("過去のお届け先", () => {
  const singleOption = [
    {
      id: "xxx",
      value: "xxx",
      children: "〒167-0051 東京都杉並区荻窪1-00-00",
    },
  ];

  const multiOptions = [
    {
      id: "xxx",
      value: "xxx",
      children: "〒167-0051 東京都杉並区荻窪1-00-00",
    },
    {
      id: "ooo",
      value: "000",
      children: "〒167-0051 東京都杉並区荻窪1-99-99",
    },
  ];

  test("disabled={true}の場合、compoboxも非活性", () => {
    render(<PastDeliveryAddress disabled={true} options={singleOption} />);
    // selectタグのsize属性がない場合(＊今回はこのケースに該当)、またはsize=1の場合の暗黙的ロールはcombobox
    // size属性が2以上の場合、またはmultiple属性がある場合の暗黙的ロールはlistbox
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
