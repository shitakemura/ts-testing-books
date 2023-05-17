import { useState } from "react";
import { Form } from "../06/Form";
import { handleSubmit } from "./handleSubmit";
import { ValidationError, checkPhoneNumber } from "./validations";
import { postMyAddress } from "./fetchers";

export const RegisterAddress = () => {
  const [postResult, setPostResult] = useState("");

  const handleFormSubmit = () => {
    handleSubmit((values) => {
      try {
        checkPhoneNumber(values.phoneNumber);
        postMyAddress(values)
          .then(() => {
            setPostResult("登録しました");
          })
          .catch(() => {
            setPostResult("登録に失敗しました");
          });
      } catch (err) {
        if (err instanceof ValidationError) {
          setPostResult("不正な入力値が含まれています");
          return;
        }
        setPostResult("不明なエラーが発生しました");
      }
    });
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      {postResult && <p>{postResult}</p>}
    </div>
  );
};
