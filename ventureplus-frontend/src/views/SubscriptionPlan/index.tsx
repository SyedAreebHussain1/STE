import { subPlanBg } from "../../assets/subscriptionAssets";
import GrowBusinessSection from "./helpers/GrowBusinessSection";
import PricingPlansCards from "./helpers/PricingPlansCards";

const SubscriptionPlan = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${subPlanBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
      className="py-6 flex flex-col justify-center items-center w-full min-h-screen"
    >
      <h1 className="gradient-text heading-l font-bold sm:ml-24 ml-0">
        Choose Your Plan
      </h1>
      <p className="heading-m font-bold mb-6 text-body sm:ml-24 ml-0">
        Unlock Endless Possibilities
      </p>
      <PricingPlansCards />
      <GrowBusinessSection />
    </div>
  );
};

export default SubscriptionPlan;
