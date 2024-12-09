import { useNavigate } from "react-router-dom";
import { checkbgGreen, girlImage } from "../../../../../assets/website";
import RoundedButton from "../../../../../components/button/RoundedButton";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useScroll } from "framer-motion";
import { getFromStorage } from "../../../../../utils/storage";
import SwitchButtons from "../../../../../components/button/SwitcherButton";

const baseURL = import.meta.env.VITE_BASE_URL;
const PricingPlan = () => {
  const [subscriptionPackage, setSubscriptionPackage] = useState([]);
  const [billingCycle, setBillingCycle] = useState<"month" | "year">("month");
  const [showPackage, setShowPackage] = useState([]);
  const ApiCall = async () => {
    const result = await axios?.get(`${baseURL}/package/website/public`);
    setSubscriptionPackage(result?.data?.data);
  };

  useEffect(() => {
    if (subscriptionPackage?.length > 0) {
      setShowPackage(
        subscriptionPackage?.filter(
          (plan: any) => plan.interval === billingCycle
        ) || []
      );
    }
  }, [billingCycle, subscriptionPackage]);

  useEffect(() => {
    setSubscriptionPackage([]);
    ApiCall();
  }, []);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    check ? setBillingCycle("year") : setBillingCycle("month");
  }, [check]);
  return (
    <div className="flex flex-col items-center relative  bg-[#FFFFFF] px-[50px] py-[40px]">
      <div className="flex flex-col items-center gap-[20px] ">
        <h1 className="py-[7px] px-[18px] border border-[#67A6A9] rounded-full bg-[#67a6a91a] text-[#4A5366] text-[15px] font-medium">
          Pricing Plan
        </h1>
        <p className="text-[30px] font-semibold text-center leading-9">
          Choose the plan that fits your business<br></br> and begin your
          journey.{" "}
        </p>
      </div>
      <div className="flex w-full justify-center ">
        <SwitchButtons
          check={check}
          setCheck={setCheck}
          firstText="Monthly"
          secondText="Yearly"
          className={"m-[20px] !bg-[#F8FAFC]"}
        />
      </div>

      <div className="flex gap-7 mt-[40px] w-full flex-wrap justify-center">
        {showPackage?.length > 0 &&
          showPackage?.map((item: any, index: number) => (
            <Cards
              key={index}
              planName={item?.title}
              checkPoint={[
                `${item?.noOfBusinessPlans} Business Plans`,
                `${item?.noOfBusinesses} Businesses`,
                `${item?.noOfchapters || ""} Chapters`,
              ]}
              extraPoint={
                item?.isFree
                  ? []
                  : [
                      "Idea validation",
                      "Pitch",
                      "Business Model Canvas",
                      "Critical Analysis",
                      "Product Promotion",
                      "1 User",
                    ]
              }
              className={`${index == 1 ? " scale-[1.06] " : ""}`}
              price={item?.price}
            />
          ))}
      </div>
    </div>
  );
};
export default PricingPlan;

const Cards = ({ planName, checkPoint, price, extraPoint, className }: any) => {
  const navigate = useNavigate();
  const user = getFromStorage("user");
  return (
    <div className={`w-[350px] ${className}`}>
      <div className="bg-[#E7EBE9] rounded-2xl w-[350px] h-[450px] px-[25px] py-[15px] flex flex-col justify-between ">
        <div>
          <p className="text-[11px] font-semibold text-[#667085]">{planName}</p>
          <h1 className="text-[40px] leading-[48px]">${price}</h1>
          {/* <p className="text-[11px]">
            <span className="text-[#667085]">Save </span>
            {save}+ hours <span className="text-[#667085]"> of reading </span>{" "}
            {comments}
            comments.
          </p> */}
          <div className="mt-[20px] w-full flex flex-col gap-2 overflow-y-auto custom-scrollbar h-[250px]">
            {checkPoint?.map((item: string, index: number) =>
              item ? (
                <div
                  key={planName + index}
                  className="flex bg-[#F2F4F3] items-center gap-2 rounded-2xl p-[4px]"
                >
                  <img src={checkbgGreen} className="w-[22px]" />
                  <p className="text-[14px]">{item}</p>
                </div>
              ) : null
            )}
            {extraPoint?.length > 0 &&
              extraPoint?.map((item: string, index: number) =>
                item ? (
                  <div
                    key={planName + item + index}
                    className="flex bg-[#F2F4F3] items-center gap-2 rounded-2xl p-[4px]"
                  >
                    <img src={checkbgGreen} className="w-[22px]" />
                    <p className="text-[14px]">{item}</p>
                  </div>
                ) : null
              )}
          </div>
        </div>
        <div>
          <RoundedButton
            title={"Lets get you started!"}
            sm
            type="primary"
            className="w-full mb-[10px] mt-[15px]"
            onClick={() =>
              user ? navigate("/subscription-plan") : navigate("/login")
            }
          />
        </div>
      </div>
    </div>
  );
};
