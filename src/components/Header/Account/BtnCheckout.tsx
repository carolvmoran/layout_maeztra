import React from "react";
import { itemsAccount } from "./itemsAccount";

import bag from "../../../assets/icon-shoppingbag.png";

interface deviceProps {
  device: string;
}
const BtnCheckout = (props: deviceProps) => {
  const { device } = props;
  return (
    <>
      {itemsAccount && itemsAccount[2] ? (
        <a
          className={`${device && `btn-checkout__${device}`}`}
          href={itemsAccount[2].url}
          title={itemsAccount[2].name}
        >
          {itemsAccount[2].icon && <img src={bag} alt={itemsAccount[2].name} />}
        </a>
      ) : (
        <></>
      )}
    </>
  );
};

export { BtnCheckout };
