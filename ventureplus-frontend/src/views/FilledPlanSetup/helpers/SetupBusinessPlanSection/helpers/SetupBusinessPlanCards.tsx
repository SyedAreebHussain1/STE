import { Row } from "antd";
import SetupBusinessPlanCard from "./SetupBusinessPlanCard";
import {
  briefcaseBgImg,
  settingsBgImg,
} from "../../../../../assets/filledPlanSetupAssets";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

export interface CardDataI {
  title: string;
  description: string;
  btnTitle: string;
  link?: string;
  bgImg: string;
  unlockChapters?: any;
}

const cardsData: CardDataI[] = [
  {
    title: "Business Settings",
    description:
      "Modify fundamental details such as the business name, location and language.",
    btnTitle: "Business Settings",
    link: "/business-settings",
    bgImg: settingsBgImg,
  },
  {
    title: "Business Plan Setup",
    description:
      "Setup your initial plan so that you can move forwad with your business plan.",
    btnTitle: "Plan Setup",
    link: "/business-plan-setups",
    bgImg: briefcaseBgImg,
  },
];

const SetupBusinessPlanCards = () => {
  const [unlockChapters, setUnlockChapters] = useState(false);
  const dispatch = useDispatch();

  const getBusinessPlanInfo = useSelector(
    (state: RootState) => state.getBusinessPlanInfo
  );

  useEffect(() => {
    if (getBusinessPlanInfo?.data) {
      //check if services, equity, staffing or products is empty
      setUnlockChapters(!checkAllArraysNotEmpty(getBusinessPlanInfo?.data));
    }
  }, [getBusinessPlanInfo, dispatch]);

  const checkAllArraysNotEmpty = (obj: { [key: string]: any }) => {
    const { staffing, equity, product, services } = obj;

    const staffingAndEquityValid =
      Array.isArray(staffing) &&
      staffing.length > 0 &&
      Array.isArray(equity) &&
      equity.length > 0;

    const productsOrServicesValid =
      (Array.isArray(product) && product.length > 0) ||
      (Array.isArray(services) && services.length > 0);

    return staffingAndEquityValid && productsOrServicesValid;
  };

  return (
    <Row gutter={[10, 20]} className="mt-6">
      <SetupBusinessPlanCard {...cardsData[0]} />
      <SetupBusinessPlanCard
        unlockChapters={unlockChapters}
        {...cardsData[1]}
      />
    </Row>
  );
};

export default SetupBusinessPlanCards;
