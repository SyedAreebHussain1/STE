import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SwitchButtons from "../../../components/button/SwitcherButton";
import { RootState } from "../../../redux/store";
import { getSubscriptionPlanApi } from "../../../services/api/SubscriptionPlan";
import PlanCard from "./PlanCard";

export interface Plan {
  id: number;
  title: string;
  description: string;
  price: number;
  interval: string;
  features: string[];
  subscribed: boolean;
  noOfchapters: number;
  noOfBusinesses: number;
  noOfBusinessPlans: number;
  isFree: boolean;
  creditCounts?: number;
}

const PricingPlansCards: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subscriptions = useSelector(
    (state: RootState) => state?.getSubscriptionPlan
  );

  useEffect(() => {
    getSubscriptionPlanApi(dispatch);
  }, [dispatch]);

  const [billingCycle, setBillingCycle] = useState<"month" | "year">("month");

  const filteredPlans =
    subscriptions?.data?.data?.length > 0
      ? subscriptions?.data?.data?.filter(
          (plan: Plan) => plan.interval === billingCycle || plan.isFree
        )
      : [];

  const subscribedPlans =
    subscriptions?.data?.data?.length > 0
      ? subscriptions?.data?.data?.filter(
          (plan: Plan) => plan.subscribed === true
        )
      : [];

  const [check, setCheck] = useState(
    subscribedPlans[0].interval === "month" ? false : true
  );

  const monthlyPlan =
    subscriptions?.data?.data?.length > 0
      ? subscriptions?.data?.data?.filter(
          (plan: Plan) => plan.interval === "month" || plan.isFree
        )
      : [];
  const { isAuth } = useSelector((state: RootState) => state.user);
  const handleGetStarted = (planId: number, price: number) => {
    isAuth
      ? navigate(`/check-out/${planId}`, { state: { price: price } })
      : navigate("/login");
  };

  useEffect(() => {
    check ? setBillingCycle("year") : setBillingCycle("month");
  }, [check]);
  return (
    <div className="flex flex-col items-center justify-center">
      <SwitchButtons
        check={check}
        setCheck={setCheck}
        firstText="Monthly"
        secondText="Yearly"
        className={"mb-[20px] sm:ml-24 ml-0"}
      />

      {/* pricing cards */}
      <Spin spinning={subscriptions.loading} fullscreen />
      <div className="flex justify-center sm:pl-24 pl-0 items-center gap-4 flex-wrap mb-5">
        {filteredPlans?.length > 0 &&
          filteredPlans
            ?.slice(0, 3)
            ?.map((plan: Plan, i: number) => (
              <PlanCard
                key={plan?.id}
                i={i}
                plan={plan}
                filteredPlans={filteredPlans}
                handleGetStarted={handleGetStarted}
                monthlyPlanPrice={
                  billingCycle == "year"
                    ? monthlyPlan.filter(
                        (value: any) =>
                          value.title.includes(plan.title) ||
                          plan.title.includes(value.title)
                      )[0]?.price
                    : null
                }
              />
            ))}
      </div>
    </div>
  );
};

export default PricingPlansCards;
