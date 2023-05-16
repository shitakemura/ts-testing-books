export const DeliveryAddress = ({ title = "お届け先" }: { title?: string }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <p>
        <label>
          郵便番号
          <input type="text" name="postalCode" placeholder="167-0051" />
        </label>
      </p>
      <p>
        <label>
          都道府県
          <input type="text" name="prefecture" placeholder="東京都" />
        </label>
      </p>
      <p>
        <label>
          市区町村
          <input type="text" name="municipality" placeholder="杉並区荻窪1" />
        </label>
      </p>
      <p>
        番地番号
        <input type="text" name="streetNumber" placeholder="00-00" />
      </p>
    </fieldset>
  );
};
