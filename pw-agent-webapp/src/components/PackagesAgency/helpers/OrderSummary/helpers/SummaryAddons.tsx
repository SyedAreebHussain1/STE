import React from "react";
import SummaryAddon from "./SummaryAddon";
import { calculateTotalAmount } from "../../../../../utils/utils";
import { useState } from "react";
import { useEffect } from "react";

const SummaryAddons = ({ value, data, isInteractive, discountPer }: any) => {
  const [price, setPrice] = useState<any>(0);
  const [discountAmount, setDiscountAmount] = useState<any>(0);
  useEffect(() => {
    let withOutDiscountPrice: any = calculateTotalAmount(
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

    if (!isNaN(withOutDiscountPrice)) {
      setDiscountAmount((withOutDiscountPrice / 100) * discountPer);
      setPrice(
        withOutDiscountPrice - (withOutDiscountPrice / 100) * discountPer
      );
    }
  }, [value, discountPer]);
  return (
    <div className="packages-main-order-summary-addons">
      <SummaryAddon
        label={"User Limits"}
        count={value?.userLimits || 0}
        price={`PKR ${value?.userLimitsAmount || 0}`}
      />
      <SummaryAddon
        label={"Hot Listings"}
        count={value?.hotListings || 0}
        price={`PKR ${value?.hotListingsAmount || 0}`}
      />
      <SummaryAddon
        label={"General Listings"}
        count={value?.listings || 0}
        price={`PKR ${value?.listingsAmount || 0}`}
      />
      <SummaryAddon
        label={"Appointments"}
        count={value?.appointsments || 0}
        price={`PKR ${value?.appointsmentsAmount || 0}`}
      />
      {value?.StandardFee && (
        <SummaryAddon
          label={"Standard Fee"}
          price={`PKR ${value?.StandardFee || 0}`}
        />
      )}
      {value?.website && (
        <SummaryAddon
          label={"Interactive Online Hub"}
          price={`PKR ${value?.websiteAmount || 0}`}
        />
      )}
      {value?.websiteSetup && (
        <SummaryAddon
          label={"website Setup Amount"}
          price={`PKR ${value?.websiteSetupAmount || 0}`}
        />
      )}
      <div className="packages-main-order-summary-addons-subtotal-discount">
        {discountAmount > 0 && (
          <SummaryAddon label={"Discount"} price={`PKR -${discountAmount}`} />
        )}

        <SummaryAddon label={"Sub Total"} price={`PKR ${price || 0}`} />
      </div>
    </div>
  );
};

export default SummaryAddons;
