import { useId, useState } from "react";
import { InputAccount } from "./InputAccount";
import { Agreement } from "./Agreement";

export const Form = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId(); // MEMO: https://ja.legacy.reactjs.org/blog/2022/03/29/react-v18.html#useid

  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>新規アカウント登録</h2>
      <InputAccount />
      <Agreement
        onChange={(event) => {
          setChecked(event.currentTarget.checked);
        }}
      />
      <div>
        <button disabled={!checked}>サインアップ</button>
      </div>
    </form>
  );
};
