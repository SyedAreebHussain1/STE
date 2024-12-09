import React from "react";
import SuccessImg from "./success.png";

const PaymentSuccess = () => {
  return (
    <div className="billing-main">
      <div className="billing-container">
        <div className="billing-success">
          <img src={SuccessImg} alt="" />
          <p>
            payment has been successfully received by Property Wallet
            Management. We would like to extend our heartfelt appreciation for
            your promptness and commitment in fulfilling your financial
            obligations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
