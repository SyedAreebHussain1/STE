import {
  businessBg,
  businessBlackIcon,
  communicationBg,
  communicationIcon,
  profileBg,
  profileIcon,
  securityBg,
  securityIcon,
  subscriptionBg,
  subscriptionIcon,
} from "../../assets/accountSettingsAssets";
import { bannerBg } from "../../assets/businessSettingsAssets";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import AccountSettingsCard from "./helpers/AccountSettingsCard";

export interface accSettingsCardT {
  icon: string;
  bgImg: string;
  title: string;
  desc: string;
  link: string;
}

const accSettingsCard: accSettingsCardT[] = [
  {
    icon: subscriptionIcon,
    bgImg: subscriptionBg,
    title: "Subscriptions Management",
    desc: "Manage your plan details and billing information",
    link: "subscription",
  },
  {
    icon: profileIcon,
    bgImg: profileBg,
    title: "Profile",
    desc: "Update your personal information and preferences",
    link: "profile",
  },
  {
    icon: securityIcon,
    bgImg: securityBg,
    title: "Security",
    desc: "Configure your account's security settings and access controls",
    link: "security",
  },
  {
    icon: businessBlackIcon,
    bgImg: businessBg,
    title: "Business",
    desc: "Oversee company details, classifications, and operational settings",
    link: "business",
  },
  {
    icon: communicationIcon,
    bgImg: communicationBg,
    title: "Communication",
    desc: "Set up notification preferences and communication channels",
    link: "communication",
  },
];

const AccountSettings = () => {
  return (
    <PageContainer>
      {" "}
      <div className="h-[150px] w-full rounded-[10px] relative bg-primary overflow-hidden text-[#fff] flex px-[35px] py-[54px] items-center ">
        <div className="h-full w-full absolute top-0 left-0 opacity-20">
          <img src={bannerBg} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col gap-1 relative z-10">
          <h1 className="font-medium heading-l ">Account Settings</h1>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap mt-4 items-center">
        {accSettingsCard.map((card, i) => (
          <AccountSettingsCard key={i} card={card} />
        ))}
      </div>
    </PageContainer>
  );
};

export default AccountSettings;
