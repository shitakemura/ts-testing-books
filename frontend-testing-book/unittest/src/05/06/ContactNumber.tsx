export const ContactNumber = () => {
  return (
    <fieldset>
      <legend>連絡先</legend>
      <p>
        <label>
          電話番号
          <input type="tel" name="phoneNumber" />
        </label>
      </p>
      <p>
        <label>
          お名前
          <input type="text" name="name" />
        </label>
      </p>
    </fieldset>
  );
};
