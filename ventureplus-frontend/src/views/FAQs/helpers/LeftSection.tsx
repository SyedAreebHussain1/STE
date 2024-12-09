import { rightArrowGreenIcon } from "../../../assets";

type Props = {};

const LeftSection = (props: Props) => {
  const tabs = [
    {
      title: "Getting Started",
      id: "getting-started",
    },
    {
      title: "Features and Functionality",
      id: "features-functionality",
    },
    {
      title: "Pricing and Subscription",
      id: "pricing-subscription",
    },
    {
      title: "Support and Assistance",
      id: "support-assistance",
    },
    {
      title: "Business Planning and Execution",
      id: "business-planning-execution",
    },
    {
      title: "Account and Billing",
      id: "account-billing",
    },
    {
      title: "Security and Data",
      id: "security-data",
    },
  ];
  return (
    <div className="bg-foreground rounded-xl p-4 flex flex-col gap-3 sm:min-w-[200px]  xl:min-w-[320px] sticky h-fit">
      {tabs.map((tab) => (
        <a
          href={`#${tab.id}`}
          key={tab.id}
          className="p-3 flex items-center justify-between bg-[white] rounded-xl cursor-pointer"
        >
          <h1 className="text-body font-medium body-s line-clamp-1 flex-1">
            {tab.title}
          </h1>
          <img src={rightArrowGreenIcon} alt="" />
        </a>
      ))}
    </div>
  );
};

export default LeftSection;
