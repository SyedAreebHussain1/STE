import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  items: { label: string }[];
  activeUnits: number;
  handleTabsState: (type: string, value: number) => void;
};
dayjs.extend(customParseFormat);

const UnitsTabs = ({ items, activeUnits, handleTabsState }: Props) => {
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
                  handleTabsState("units", i);
                }}
                className={`flex-1 py-2 ${
                  i === 0 ? borderRadiusForLeftTab : borderRadiusForRightTab
                } border border-borderColor dark:border-dark-borderColor font-bold hover:bg-[#F1F1F1] dark:text-white transition-colors ${
                  activeUnits === i
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
      </div>
    </div>
  );
};
export default UnitsTabs;
