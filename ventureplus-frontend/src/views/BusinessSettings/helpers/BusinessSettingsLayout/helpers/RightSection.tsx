import { Dispatch, SetStateAction, useState } from "react";
import { SelectedCardType } from "../../..";
import {
  localisationIcon,
  overviewIcon,
  plansIcon,
  UsersIcon,
} from "../../../../../assets/businessSettingsAssets";

interface RightSectionI {
  selectedCard: SelectedCardType;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const menuItems: { title: SelectedCardType; icon: string }[] = [
  {
    title: "Overview",
    icon: overviewIcon,
  },
  {
    title: "Localization",
    icon: localisationIcon,
  },
  {
    title: "Users",
    icon: UsersIcon,
  },
  {
    title: "Plans",
    icon: plansIcon,
  },
];

const RightSection = ({ selectedCard, setSelectedCard }: RightSectionI) => {
  const [selectedMenu, setSelectedMenu] =
    useState<SelectedCardType>(selectedCard);

  return (
    <>
      <div className="border-[1px] border-strokes py-[16px] sm:flex hidden flex-col gap-[10px] rounded-[8px]">
        {menuItems.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: item.title === selectedMenu ? "#CCE1E2" : "",
            }}
            className={`flex gap-[10px] items-center text-title px-[24px] py-2 cursor-pointer hover:bg-green-100 `}
            onClick={() => {
              setSelectedCard(item.title);
              setSelectedMenu(item.title);
            }}
          >
            <img src={item.icon} alt="" />
            <p className="btn-text font-medium leading-[19.58px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex w-full sm:hidden  justify-between mt-1 mb-2">
        {menuItems.map((item, i) => (
          <div
            className="flex justify-between"
            style={{
              backgroundColor: item.title === selectedMenu ? "#CCE1E2" : "",
            }}
            onClick={() => {
              setSelectedCard(item.title);
              setSelectedMenu(item.title);
            }}
          >
            <div className="p-2">
              <img src={item.icon} alt="" className="w-6 h-6  " />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RightSection;
