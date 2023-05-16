export const InputAccount = () => {
  return (
    <fieldset>
      <legend>アカウント情報の入力</legend>
      <p>
        <label>
          メールアドレス
          <input type="email" placeholder="example@test.com" />
        </label>
      </p>
      <p>
        <label>
          パスワード
          <input type="password" placeholder="8文字以上で入力" />
        </label>
      </p>
    </fieldset>
  );
};
