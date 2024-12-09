import { useNavigate } from "react-router-dom";
import { checkbgGreen, girlImage } from "../../../../../assets/website";
import RoundedButton from "../../../../../components/button/RoundedButton";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useScroll } from "framer-motion";
import { getFromStorage } from "../../../../../utils/storage";
import SwitchButtons from "../../../../../components/button/SwitcherButton";
import PricingPlansCards from "../../../../SubscriptionPlan/helpers/PricingPlansCards";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import {
  checkIcon,
  dollarIcon,
} from "../../../../../assets/subscriptionAssets";

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
interface Props {
  plan: Plan;
  i: number;
  handleGetStarted: (planId: any, price: number) => void;
  monthlyPlanPrice: null | number;
  filteredPlans: any;
}

const baseURL = import.meta.env.VITE_BASE_URL;

const PricingPlan = () => {
  const [subscriptionPackage, setSubscriptionPackage] = useState<Plan[]>([]);
  const [billingCycle, setBillingCycle] = useState<"month" | "year">("month");
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: RootState) => state.user);
  const ApiCall = async () => {
    const result = await axios?.get(`${baseURL}/package/website/public`);
    setSubscriptionPackage(result?.data?.data);
  };

  useEffect(() => {
    setSubscriptionPackage([]);
    ApiCall();
  }, []);

  useEffect(() => {
    check ? setBillingCycle("year") : setBillingCycle("month");
  }, [check]);

  const subscriptions = useSelector(
    (state: RootState) => state?.getSubscriptionPlan
  );

  const filteredPlans = subscriptionPackage
    ?.filter((plan: Plan) => plan.interval === billingCycle || plan.isFree)
    ?.sort((a: any, b: any) => (b.price > a.price ? -1 : 1));

  const monthlyPlan =
    subscriptionPackage?.filter(
      (plan: Plan) => plan.interval === "month" || plan.isFree
    ) || [];

  const handleGetStarted = (planId: any, price: number) => {
    localStorage.setItem("planId", planId);
    isAuth
      ? navigate(`/check-out/${planId}`, { state: { price: price } })
      : navigate("/login");
  };

  useEffect(() => {
    check ? setBillingCycle("year") : setBillingCycle("month");
  }, [check]);
  return (
    <div className="flex flex-col items-left md:items-center  relative  bg-[#F3F1EC] px-[20px] md:px-[50px] py-[40px] w-full">
      <div className="flex flex-col items-center gap-[20px] mb-5">
        <h1 className="py-[7px] w-[200px] text-center border border-[#67A6A9] rounded-full bg-[#67a6a91a] text-[#4A5366] text-[15px] font-medium">
          Pricing Plans
        </h1>
        <p className="text-[20px] md:leading-8 md:text-[30px] font-semibold text-left md:text-center leading-9">
          Choose the plan that fits your business<br className="hidden"></br>{" "}
          and begin your journey.{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <SwitchButtons
          check={check}
          setCheck={setCheck}
          firstText="Monthly"
          secondText="Yearly"
          className={"mb-[20px] "}
        />

        {/* pricing cards */}
        <Spin spinning={subscriptions.loading} fullscreen />
        <div className="flex justify-center  items-center gap-4 flex-wrap mb-5">
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
    </div>
  );
};
export default PricingPlan;

const PlanCard = ({
  plan,
  i,
  handleGetStarted,
  monthlyPlanPrice,
  filteredPlans,
}: Props) => {
  const perks = [
    "Idea validation: 1",
    "Pitch Decks",
    "Business Model Canvas",
    "Critical Analysis",
    "Product Promotions",
  ];
  const [filtering, setFiltering] = useState(
    filteredPlans
      ?.filter((item: any) => item.price < plan.price)
      ?.sort((a: any, b: any) => (a.price > b.price ? -1 : 1)) || []
  );
  return (
    <div
      key={plan?.id}
      className={` w-[320px] rounded-[20px] p-[5px] ${
        i === 1 ? "h-[600px] animated-gradient" : "h-[552px]"
      }`}
    >
      <div
        className={`w-full h-full rounded-[20px] bg-[#fff] p-5  ${
          i === 1 ? "" : "bg-opacity-[56%]"
        }`}
      >
        <div className="flex flex-col h-full">
          <h3 className="heading-s font-bold">{plan?.title}</h3>
          <p className="body-s text-para leading-5 mb-8">
            {plan?.description
              ? plan?.description
              : "Perfect for professionals and small businesses in need of significant AI integration"}
          </p>

          <div className="relative  flex items-baseline">
            <img src={dollarIcon} alt="" className="absolute top-0" />

            <h1 className="heading-xl font-bold relative ml-6 mt-3">
              {monthlyPlanPrice ? Math.ceil(plan?.price / 12) : plan?.price}
            </h1>
            <h2 className="text-[#97A1B5] text-[24px]">/month</h2>
          </div>
          {monthlyPlanPrice !== 0 && monthlyPlanPrice ? (
            <div className="flex text-[#97A1B5] text-[23px] font-normal">
              <span>$</span>
              <span className="line-through">{monthlyPlanPrice}</span>
            </div>
          ) : null}

          <RoundedButton
            title={plan?.subscribed ? "Subscribed" : "Get Started"}
            bold
            sm
            type={i === 1 ? "primary" : "white"}
            onClick={() => handleGetStarted(plan.id, plan.price)}
            disabled={plan?.price == 0 ? true : false}
            className="!mb-8 mt-5"
          />

          <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
            {filtering?.length > 0 ? (
              <div className="flex p-3 border-b border-strokes gap-2 items-center text-left">
                <h1 className="text-[16px] font-medium text-[#212838]">
                  Everything Included In
                  <br /> {`${filtering?.[0]?.title} Plus: `}
                </h1>
              </div>
            ) : null}
            {/* free plan */}
            {filtering.length <= 0 && (
              <Perks text={`Validate 1 business idea `} />
            )}
            {filtering.length <= 0 && (
              <>
                <div className="flex p-3 border-b border-strokes gap-2 items-center text-left">
                  <h1 className="text-[15px] font-medium text-[#212838]">
                    Access to 1 chapter:
                  </h1>
                </div>
                <Perks text={`Business Overview`} />
              </>
            )}
            {/* pro plan */}
            {filtering?.length == 1 && (
              <Perks
                text={`Full business plan access (market research, financials, operations and more)`}
              />
            )}
            {filtering?.length == 1 && (
              <Perks text={`Custom AI business assistant`} />
            )}
            {filtering?.length == 1 && (
              <Perks text={`Multiple Pitch deck creations`} />
            )}
            {filtering?.length == 1 && <Perks text={`Business model canvas`} />}
            {filtering?.length == 1 && (
              <Perks text={`Product promotion in the community`} />
            )}
            {/* other then pro,free plan */}

            {filtering?.length == 2 && plan?.noOfBusinesses > 0 && (
              <Perks text={`Manage up to ${plan?.noOfBusinesses} businesses`} />
            )}

            {filtering?.length == 2 && plan?.noOfBusinessPlans > 0 && (
              <Perks
                text={`Create up to ${plan?.noOfBusinessPlans} business plans`}
              />
            )}
            {filtering?.length == 2 && (
              <Perks text={`Promote and plan multiple businesses`} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Perks = ({ text }: { text: string }) => {
  return (
    <div className="flex p-3 border-b border-strokes gap-2 items-center">
      <img src={checkIcon} alt="" />
      <h1 className="body-s font-medium text-[#212838]">{text}</h1>
    </div>
  );
};
