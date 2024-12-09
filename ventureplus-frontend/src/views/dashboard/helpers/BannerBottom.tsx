import { useNavigate } from "react-router-dom";
import { rightArrowIcon } from "../../../assets";
import {
  businessToolkitBg,
  retentionModuleBg,
} from "../../../assets/dashboardAssets";
import BannerBottomCard, { BannerBottomCardI } from "./BannerBottomCard";

const cardData: BannerBottomCardI[] = [
  {
    title: "Pitch Decks",
    description:
      "Easily create professional, investor-ready pitch decks. Our tool helps you highlight your business’s strengths and tell a compelling story.",
    icon: rightArrowIcon,
    bgImg: businessToolkitBg,
  },
  {
    title: "Business Model Canvas",
    description:
      "Visualize and organize your business model in minutes. Our tool helps you map out every key element to build a clear, actionable business model canvas.",
    icon: rightArrowIcon,
    bgImg: retentionModuleBg,
    link: "/business-toolkit/model-canvas",
  },
];
const BannerBottom = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 2xl:gap-5 p-1 w-full cursor-pointer">
      {cardData.map((card, i) => (
        <BannerBottomCard key={i} {...card} />
      ))}
    </div>
  );
};

export default BannerBottom;
