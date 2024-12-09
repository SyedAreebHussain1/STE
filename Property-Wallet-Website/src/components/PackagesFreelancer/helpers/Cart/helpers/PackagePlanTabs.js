import React, { useEffect, useState } from "react";
import PackagePlan from "./PackagePlan";
import { useSelector } from "react-redux";
import { duration } from "moment";
import { calculateTotalAmount } from "../../../../AgencyCatalogue/utils/utils";

const PackagePlanTabs = ({
  title,
  setStateHelper,
  value,
  planIndex,
  setPlanIndex,
}) => {
  // const getAllCustomPackages = useSelector((state) =>
  //   state?.getIn(["getAllCustomPackages"])
  // );
  const getAllCustomPackages = useSelector((state) => state.getAllCustomPackages);

  const plans = {
    MONTHLY: "Monthly",
    QUARTERLY: "Quaterly",
    YEARLY: "Yearly",
    HALFYEARLY: "Half Yearly",
    Monthly: "Monthly",
    Quarterly: "Quarterly",
    Yearly: "Yearly",
    "Half Yearly": "Half Yearly",
  };
  const [items, setItems] = useState([]);
  // const items = [
  //   {
  //       duration: "Monthly",
  //       price: "PKR 12,000"
  //   },
  //   {
  //       duration: "Quartely",
  //       price: "PKR 40,000",
  //       savings: 5
  //   },
  //   {
  //       duration: "Half-Yearly",
  //       price: "PKR 3,000",
  //       savings: 10
  //   },
  //   {
  //       duration: "Annually",
  //       price: "PKR 3,000",
  //       savings: 15
  //   }
  // ]
  function onTabClick(
    index,
    discountPercentage,
    noOfMonth,
    fixedCommision,
    duration,
    data
  ) {
    setPlanIndex(index);
    setStateHelper((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          currentPlan: duration,
          discountPercentage: discountPercentage,
          noOfMonth: noOfMonth,
          fixedCommission: fixedCommision,
          ...data,
        },
      };
    });
  }
  useEffect(() => {
    if (value) {
      const data = value?.plans?.map((item, i) => {
        if (plans[item.title] === "Monthly") {
          if (planIndex === null) {
            setPlanIndex(i);
          }
        }
        if (title === "Custom") {
          return {
            duration: item.title,
            price: calculateTotalAmount(
              item.discountPercentage,
              item.planMonths,
              value.hotListingsAmount,
              value.userLimitsAmount,
              value.listingsAmount,
              value.websiteAmount,
              value.websiteSetupAmount,
              item.fixCommision,
              value.appointsmentsAmount,
              item?.StandardFee
            ),
            discountPercentage: item.discountPercentage,
            noOfMonth: item.planMonths,
            fixCommision: item.fixCommision,
            savings: item.discountPercentage,
          };
        }
        const monthDataCustom = getAllCustomPackages?.data?.data?.plans.filter(
          (val) =>
            val.title.toLowerCase() === item.title.toLowerCase() ||
            val.title.toLowerCase() ===
            item.title
              .toLowerCase()
              .split(" ")
              .join("")
        );
        return {
          duration: item.title,
          price: calculateTotalAmount(
            monthDataCustom?.[0]?.discountPercentage,
            monthDataCustom?.[0]?.planMonths,
            value.hotListingsAmount,
            value.userLimitsAmount,
            value.listingsAmount,
            value.websiteAmount,
            value.websiteSetupAmount,
            monthDataCustom?.[0]?.fixCommision,
            value.appointsmentsAmount,
            monthDataCustom?.[0]?.StandardFee
          ),
          discountPercentage: monthDataCustom?.[0]?.discountPercentage,
          noOfMonth: monthDataCustom?.[0]?.planMonths,
          fixCommision: monthDataCustom?.[0]?.fixCommision,
          savings: monthDataCustom?.[0]?.discountPercentage,
          data: {
            hotListingsAmount: value.hotListingsAmount,
            listingsAmount: value.listingsAmount,
            userLimitsAmount: value.userLimitsAmount,
            appointsmentsAmount: value.appointsmentsAmount,
            websiteAmount: value.websiteAmount,
            websiteSetupAmount: value.websiteSetupAmount,
            noOfMonth: monthDataCustom?.[0]?.planMonths,
            fixedCommission: monthDataCustom?.[0]?.fixCommision,
          },
        };
      });
      setItems(data);
    }
  }, [value, planIndex]);
  return (
    <div className="package-main-plans">
      {items?.length > 0 &&
        items.map((item, i) => {
          return (
            <PackagePlan
              {...item}
              isActive={i === planIndex}
              index={i}
              data={item.data}
              onClick={onTabClick}
            />
          );
        })}
    </div>
  );
};

export default PackagePlanTabs;
