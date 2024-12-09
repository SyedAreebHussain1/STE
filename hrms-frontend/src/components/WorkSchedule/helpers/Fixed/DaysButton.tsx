import React from "react";
import { daysEnum } from "../AddandEditWorkScheduleDrawer";

type Props = {
  state: daysEnum[];
  setState: React.Dispatch<React.SetStateAction<daysEnum[]>>;
};
const DaysButton = ({ state, setState }: Props) => {
  const activeClasses =
    "bg-light-secondary text-light-primary border border-light-primary dark:text-white dark:bg-dark-borderColor dark:border-dark-borderColor";
  const borderRadiusForLeftTab = "rounded-tl-lg rounded-bl-lg";
  const borderRadiusForRightTab = "rounded-tr-lg rounded-br-lg";

  return (
    <div className="gap-2 flex">
      <div className="flex items-center flex-1">
        {Object.values(daysEnum)?.map((item, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              if (state.includes(item)) {
                const newState = state.filter((itemPrev) => itemPrev !== item);
                setState(newState);
              } else {
                setState((prev) => [...prev, item]);
              }

              // handleTabsState("compensation", 0);
            }}
            className={`flex-1 py-2 ${
              i === 0
                ? borderRadiusForLeftTab
                : i !== Object.values(daysEnum).length - 1
                ? ""
                : borderRadiusForRightTab
            } border border-borderColor font-bold hover:bg-[#F1F1F1] dark:hover:bg-dark-primary transition-colors dark:text-white ${
              state.includes(item) ? activeClasses : ""
            }`}
          >
            {item.substring(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaysButton;
