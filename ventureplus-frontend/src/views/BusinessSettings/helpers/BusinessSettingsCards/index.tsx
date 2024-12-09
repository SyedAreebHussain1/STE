import { Dispatch, SetStateAction } from "react";
import { SelectedCardType } from "../..";
import {
  localisationBg,
  localisationIcon,
  overviewBg,
  overviewIcon,
  plansBg,
  plansIcon,
  usersBg,
  UsersIcon,
} from "../../../../assets/businessSettingsAssets";
import BusinessSettingsCard from "./helpers/BusinessSettingsCard";

export interface BusinessSettingCardsI {
  title: "Overview" | "Localization" | "Users" | "Plans" | "";
  description: string;
  bgImg: any;
  icon: any;
  bgColor: string;
}

const BusinessSettingCards: BusinessSettingCardsI[] = [
  {
    title: "Overview",
    description: "Comprehensive details about the business",
    bgImg: overviewBg,
    icon: overviewIcon,
    bgColor: "#CCE1E2",
  },
  {
    title: "Localization",
    description: "Tailor your experience with regional settings",
    bgImg: localisationBg,
    icon: localisationIcon,
    bgColor: "#EBE9FE",
  },
  {
    title: "Users",
    description: "Manage and analyze roles, permissions, and user activity",
    bgImg: usersBg,
    icon: UsersIcon,
    bgColor: "#F9EEF7",
  },
  {
    title: "Plans",
    description: "Access and manage the business plans",
    bgImg: plansBg,
    icon: plansIcon,
    bgColor: "#D1FADF",
  },
];

interface DataType {
  selectedCard: "Overview" | "Localization" | "Users" | "Plans" | "";
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const BusinessSettingsCards = ({ selectedCard, setSelectedCard }: DataType) => {
  return (
    <div className="sm:flex block gap-[11px] sm:mt-8 mt-6 flex-wrap">
      {BusinessSettingCards.map((card, i) => (
        <BusinessSettingsCard
          key={i}
          {...card}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      ))}
    </div>
  );
};
export default BusinessSettingsCards;
