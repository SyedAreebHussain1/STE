import {
  businessSettings,
  businessToolKit,
  frequentQuestions,
  requestSupport,
} from "../../../assets/dashboardAssets";
import ExpandableCards from "./ExpandableCards";

const leftCards = {
  card1: {
    title1: "Business",
    title2: "Settings",
    description: "Manage your user profile, account and billing details.",
    bgImg: businessSettings,
    bgColor: "#CCE1E2",
    link: "/business-settings",
  },
  card2: {
    title1: "Request",
    title2: "Support",
    description:
      "Get in touch with our support team for technical or account related assistance.",
    bgImg: requestSupport,
    bgColor: "#ECFDF3",
    link: "/request-support",
  },
};

const rightCards = {
  card1: {
    title1: "Frequent",
    title2: "Questions",
    description: "Find answers to common questions and watch tutorial videos.",
    bgImg: frequentQuestions,
    bgColor: "#FFFFF1",
    link: "/faqs",
  },
  card2: {
    title1: "Blogs",
    title2: "Insights",
    description:
      "Business insights are key data-driven understandings that guide decisions and improve performance.",
    bgImg: businessToolKit,
    bgColor: "#F4F3FF",
    link: "/blogs",
  },
};
const AssistancePersonalization = () => {
  return (
    <div className="flex text-center flex-col justify-center items-center bg-[#F6F9FB] w-full rounded-2xl p-6">
      <h1 className="text-body heading-l font-bold leading-[39.17px] mb-2">
        Assistance & Personalization
      </h1>
      <p className="paragraph leading-[32.64px] font-medium text-para mb-8">
        Personalized Solutions Crafted Specifically for Your Unique Needs
      </p>
      <div className="flex gap-2 items-start flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center">
          <ExpandableCards {...leftCards} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <ExpandableCards {...rightCards} />
        </div>
      </div>
    </div>
  );
};

export default AssistancePersonalization;
