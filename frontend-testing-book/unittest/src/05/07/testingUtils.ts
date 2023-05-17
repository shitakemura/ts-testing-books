// インタラクション関数群
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

export function getGroupByName(name: string) {
  return screen.getByRole("group", { name });
}

export async function inputContactNumber(
  inputValues = {
    phoneNumber: "000-0000-0000",
    name: "田中 太郎",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "電話番号" }),
    inputValues.phoneNumber
  );
  await user.type(
    screen.getByRole("textbox", { name: "お名前" }),
    inputValues.name
  );
  return inputValues;
}

export async function inputDeliveryAddress(
  inputValues = {
    postalCode: "167-0051",
    prefecture: "東京都",
    municipality: "杉並区荻窪1",
    streetNumber: "00-00",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "郵便番号" }),
    inputValues.postalCode
  );
  await user.type(
    screen.getByRole("textbox", { name: "都道府県" }),
    inputValues.prefecture
  );
  await user.type(
    screen.getByRole("textbox", { name: "市区町村" }),
    inputValues.municipality
  );
  await user.type(
    screen.getByRole("textbox", { name: "番地番号" }),
    inputValues.streetNumber
  );
  return inputValues;
}

export async function clickSubmit() {
  await user.click(
    screen.getByRole("button", { name: "注文内容の確認へ進む" })
  );
}
