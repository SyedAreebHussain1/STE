import { ReactElement } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import UnitsTabs from "./UnitsTabs";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  items: { label: string; component: ReactElement }[];
  activeCompensation: number;
  activeUnits: number;
  handleTabsState: (type: string, value: number) => void;
};
dayjs.extend(customParseFormat);

const CompansationTabs = ({
  items,
  activeCompensation,
  activeUnits,
  handleTabsState,
}: Props) => {
  const activeClasses =
    "bg-light-secondary text-light-primary border border-light-primary  dark:bg-dark-borderColor dark:border-dark-borderColor";
  const borderRadiusForLeftTab = "rounded-tl-lg rounded-bl-lg";
  const borderRadiusForRightTab = "rounded-tr-lg rounded-br-lg";
  return (
    <div className="">
      <div className="gap-2 flex">
        <div className="flex items-center flex-1">
          {items.map((item, i) => {
            return (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabsState("compensation", i);
                }}
                className={`flex-1 py-2 ${
                  i === 0 ? borderRadiusForLeftTab : borderRadiusForRightTab
                } border border-borderColor dark:border-dark-borderColor font-bold  dark:text-white   transition-colors ${
                  activeCompensation === i
                    ? activeClasses
                    : "hover:bg-[#F1F1F1] dark:hover:bg-dark-primary"
                }`}
                key={nanoid()}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        {/* <div className="flex-1">
          <UnitsTabs
            items={[{ label: "Days" }, { label: "Hours" }]}
            activeUnits={activeUnits}
            handleTabsState={handleTabsState}
          />
        </div> */}
      </div>
      <div>{items[activeCompensation].component}</div>
    </div>
  );
};
export default CompansationTabs;
