import React, { useState } from "react";
import { Plan } from "./PricingPlansCards";
import { checkIcon, dollarIcon } from "../../../assets/subscriptionAssets";
import RoundedButton from "../../../components/button/RoundedButton";

interface Props {
  plan: Plan;
  i: number;
  handleGetStarted: (planId: number, price: number) => void;
  monthlyPlanPrice: null | number;
  filteredPlans: any;
}

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
            title={plan?.subscribed ? "Subscribed" : "Buy Now"}
            bold
            sm
            type={i === 1 ? "primary" : "white"}
            onClick={() => handleGetStarted(plan.id, plan.price)}
            disabled={plan?.price == 0 || plan?.subscribed ? true : false}
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

            {/* {plan?.noOfBusinesses > 0 &&
              filtering?.[0]?.noOfBusinesses !== plan?.noOfBusinesses && (
                <Perks text={`No of Businesses: ${plan?.noOfBusinesses} `} />
              )}
            {plan?.noOfBusinessPlans > 0 &&
              filtering?.[0]?.plan?.noOfBusinessPlans !==
                plan?.noOfBusinessPlans && (
                <Perks
                  text={`No of Business Plans: ${plan?.noOfBusinessPlans} `}
                />
              )}
            {plan?.noOfchapters > 0 &&
              filtering?.[0]?.noOfchapters !== plan?.noOfchapters && (
                <Perks text={`No of Chapters: ${plan?.noOfchapters} `} />
              )}
            {plan?.creditCounts &&
              filtering?.[0]?.creditCounts !== plan?.creditCounts && (
                <Perks text={`No of Credits: ${plan?.creditCounts} `} />
              )}

            {filtering?.length == 1 &&
              !plan.isFree &&
              perks.map((perk, i) => <Perks key={i} text={perk} />)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

const Perks = ({ text }: { text: string }) => {
  return (
    <div className="flex p-3 border-b border-strokes gap-2 items-center">
      <img src={checkIcon} alt="" />
      <h1 className="body-s font-medium text-[#212838]">{text}</h1>
    </div>
  );
};
