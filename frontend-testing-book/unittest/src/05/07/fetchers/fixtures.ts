// モック関数で使用するレスポンスデータ
import type { HttpError, Result } from "./type";

export const httpErrorMock: HttpError = {
  err: { message: "internal server error" },
};

export const postMyAddressMock: Result = {
  result: "ok",
};
