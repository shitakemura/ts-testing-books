import { useState } from "react";
import { ContactNumber } from "./ContactNumber";
import { RegisterDeliveryAddress } from "./RegisterDeliveryAddress";
import { DeliveryAddress } from "./DeliveryAddress";
import { PastDeliveryAddress } from "./PastDeliveryAddress";

// MEMO: https://zenn.dev/takepepe/articles/atoms-type-definitions#react.componentprops-%E5%9E%8B%E3%82%92%E4%BD%BF%E3%81%86
export type AddressOption = React.ComponentProps<"option"> & { id: string };

export type Props = {
  deliveryAddresses?: AddressOption[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = (props: Props) => {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(
    undefined
  );
  return (
    <form onSubmit={props.onSubmit}>
      <h2>お届け先情報の入力</h2>
      <ContactNumber />
      {props.deliveryAddresses?.length ? (
        <>
          <RegisterDeliveryAddress onChange={setRegisterNew} />
          {registerNew ? (
            <DeliveryAddress title="新しいお届け先" />
          ) : (
            <PastDeliveryAddress
              disabled={registerNew === undefined}
              options={props.deliveryAddresses}
            />
          )}
        </>
      ) : (
        <DeliveryAddress />
      )}
      <hr />
      <div>
        <button>注文内容の確認へ進む</button>
      </div>
    </form>
  );
};
