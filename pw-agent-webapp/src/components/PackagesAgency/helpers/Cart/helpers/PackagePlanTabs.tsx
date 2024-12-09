import { useEffect, useState } from "react";
import PackagePlan from "./PackagePlan";
import { useSelector } from "react-redux";
import { calculateTotalAmount } from "../../../../../utils/utils";

const PackagePlanTabs = ({
  title,
  setStateHelper,
  value,
  planIndex,
  setPlanIndex,
}: any) => {
  const getAllCustomPackages = useSelector((state: any) =>
    state?.getAllCustomPackages
  );
  const plans: any = {
    MONTHLY: "Monthly",
    QUARTERLY: "Quaterly",
    YEARLY: "Yearly",
    HALFYEARLY: "Half Yearly",
    Monthly: "Monthly",
    Quarterly: "Quaterly",
    Yearly: "Yearly",
    "Half Yearly": "Half Yearly",
    Quaterly: "Quaterly",
  };
  const [items, setItems] = useState([]);
  function onTabClick(
    index: any,
    discountPercentage: any,
    noOfMonth: any,
    fixedCommision: any,
    duration: any,
    data: any
  ) {
    setPlanIndex(index);
    setStateHelper((prev: any) => {
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
      const data = value?.plans?.map((item: any, i: number) => {
        if (plans[item.title] === "Quaterly") {
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
          (val: any) =>
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
        items.map((item: any, i) => {
          return (
            <div
              style={{
                display: plans[item.duration] === "Monthly" ? "none" : "block",
              }}
            >
              <PackagePlan
                {...item}
                isActive={i === planIndex}
                index={i}
                data={item.data}
                onClick={onTabClick}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PackagePlanTabs;
