import React from "react";
import SummaryAddons from "./helpers/SummaryAddons";
import ExtraCommission from "./helpers/ExtraCommission";
import DiscountContainer from "./helpers/DiscountContainer";
import RefCodeContainer from "./helpers/RefCodeContainer";
import PaymentMethodsTabs from "./helpers/PaymentMethodsTabs";
import TotalAmount from "./helpers/TotalAmount";

const OrderSummary = ({
  data,
  value,
  handleDiscount,
  isInteractive,
  setDiscountCode,
  discountCode,
  discountPer,
  setUserData,
  userData,
  onCheckout,
}) => {
  return (
    <div className="packages-main-order-summary">
      <h2 className="packages-main-order-summary-title">Order Summary</h2>
      <SummaryAddons
        value={value}
        data={data}
        isInteractive={isInteractive}
        discountPer={discountPer}
      />
      <DiscountContainer
        handleDiscount={handleDiscount}
        setDiscountCode={setDiscountCode}
        discountCode={discountCode}
      />
      {/* <ExtraCommission /> */}
      <RefCodeContainer state={{ ...userData, setState: setUserData }} />
      <PaymentMethodsTabs state={{ ...userData, setState: setUserData }} />
      <TotalAmount
        onCheckout={onCheckout}
        value={value}
        data={data}
        isInteractive={isInteractive}
        discountPer={discountPer}
      />
    </div>
  );
};

export default OrderSummary;
