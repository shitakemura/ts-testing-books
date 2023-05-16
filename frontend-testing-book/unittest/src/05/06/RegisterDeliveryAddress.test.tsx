import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";

const user = userEvent.setup();

describe("新しいお届け先を登録しますか？", () => {
  test("ラジオボタンをクリックすると、コールバックハンドラが呼ばれる", async () => {
    const mockFn = jest.fn();
    render(<RegisterDeliveryAddress onChange={mockFn} />);

    await user.click(screen.getByRole("radio", { name: "いいえ" }));
    expect(mockFn).toHaveBeenCalledWith(false);

    await user.click(screen.getByRole("radio", { name: "はい" }));
    expect(mockFn).toHaveBeenCalledWith(true);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
