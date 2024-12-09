import { ReactElement } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { nanoid } from "@reduxjs/toolkit";

type Props = {
  items: { label: string; component: ReactElement }[];
  activeCompensation: number;
  handleTabsState: (value: number) => void;
};
dayjs.extend(customParseFormat);

const CompansationWorkScheduleTabs = ({
  items,
  activeCompensation,
  handleTabsState,
}: Props) => {
  const activeClasses =
    "bg-light-secondary text-light-primary border border-light-primary dark:text-white dark:bg-dark-borderColor dark:border-dark-borderColor";
  const borderRadiusForLeftTab = "rounded-tl-lg rounded-bl-lg";
  const borderRadiusForRightTab = "rounded-tr-lg rounded-br-lg";
  return (
    <div className="">
      <div className="gap-2 flex">
        <div className="flex items-center flex-1 ">
          {items.map((item, i) => {
            return (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleTabsState(i);
                }}
                className={`flex-1 py-2 ${
                  i === 0 ? borderRadiusForLeftTab : borderRadiusForRightTab
                } border border-borderColor font-bold hover:bg-[#F1F1F1] dark:hover:bg-dark-primary transition-colors  dark:text-white${
                  activeCompensation === i ? activeClasses : ""
                }`}
                key={nanoid()}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className={`${activeCompensation === i ? "block" : "hidden"}`}
            >
              {item.component}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CompansationWorkScheduleTabs;
