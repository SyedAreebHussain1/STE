import React from "react";
import CommissionIcon from "./../../../assets/spend-icon.png";

const ExtraCommission = () => {
  return (
    <div className="packages-main-order-summary-extra-commission">
      <div>
        <img src={CommissionIcon} />
      </div>
      <p>
        To earn Extra commission on PW project, ensure that your total price is
        more over 12500.
      </p>
    </div>
  );
};

export default ExtraCommission;
