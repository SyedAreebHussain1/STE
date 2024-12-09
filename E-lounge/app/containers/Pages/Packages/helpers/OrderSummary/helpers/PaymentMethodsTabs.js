import React, { useState } from "react";
import PayMob from "./../../../assets/paymob-icon.png";
import Blinq from "./../../../assets/blinq-icon.png";
import Wallet from "./../../../assets/wallet-icon.png";

const PaymentMethodsTabs = ({ state }) => {
  const [active, setActive] = useState(false);
  const paymentMethods = ["paymob", "blinq", "wallet"]
  const items = [
    <img src={PayMob} />,
    <img src={Blinq} />,
  ];
  return (
    <div className="packages-main-order-summary-payment-method">
      <h2>Payment Method <span style={{ color: 'red' }}>*</span></h2>
      <div className="packages-main-order-summary-payment-method-tabs">
        {items.map((item, i) => {
          return (
            <div
              className={`packages-main-order-summary-payment-method-tab ${
                active === i
                  ? "packages-main-order-summary-payment-method-tab-active"
                  : ""
              }`}
              onClick={() => {
                setActive(i)
                state.setState(prev => {
                  return {
                    ...prev,
                    paymentMethod: paymentMethods[i]
                  }
                })
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentMethodsTabs;
