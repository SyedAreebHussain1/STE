import React from "react";
import { calculateTotalAmount } from "../../../../../../utils/utils";
import { useEffect } from "react";
import { useState } from "react";
import { errorMessage } from "../../../../../../utils/message";

const TotalAmount = ({
  onCheckout,
  value,
  data,
  isInteractive,
  discountPer,
}) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    let withOutDiscountPrice = calculateTotalAmount(
      value?.discountPercentage || 0,
      value?.noOfMonth,
      value?.hotListingsAmount,
      value?.userLimitsAmount,
      value?.listingsAmount,
      value?.websiteAmount,
      value?.websiteSetupAmount,
      value?.fixedCommission,
      value?.appointsmentsAmount,
      value?.StandardFee
    );

    if (withOutDiscountPrice !== NaN) {
      setPrice(
        parseInt(
          withOutDiscountPrice - (withOutDiscountPrice / 100) * discountPer
        )
      );
    }
  }, [value, discountPer]);
  return (
    <div className="packages-main-order-summary-total-amount">
      <div className="packages-main-order-summary-total-amount-price">
        <span>Total Amount</span>
        <h4>PKR {price}/-</h4>
      </div>
      <button
        onClick={() => {
          if (price > 120000) {
            // modal
            errorMessage(
              "Please make sure your checkout price is less than 120,000"
            );
            return;
          }
          onCheckout();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default TotalAmount;
