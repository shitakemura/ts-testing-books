import * as Fetchers from ".";
import { httpErrorMock, postMyAddressMock } from "./fixtures";

// Web APIクライアント(POSTリクエスト)のモック関数
export function mockPostMyAddress(status = 201) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "postMyAddress")
      .mockRejectedValueOnce(httpErrorMock);
  }
  return jest
    .spyOn(Fetchers, "postMyAddress")
    .mockResolvedValueOnce(postMyAddressMock);
}
