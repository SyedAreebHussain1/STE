import React from "react";
import { daysEnum } from "./WorkingDays";

type Props = {
  state: any;
  setState: any;
};
const DaysButton = ({ state, setState }: Props) => {
  const activeClasses = "bg-secondary text-primary border !border-primary";
  const borderRadiusForLeftTab =
    "border-t-borderColor border-b-borderColor border-l-borderColor rounded-tl-lg rounded-bl-lg pl-1 ";
  const borderRadiusForRightTab =
    "border-t-borderColor border-b-borderColor border-r-borderColor rounded-tr-lg rounded-br-lg pr-1 ";

  const daysArray = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div className="gap-2 flex mb-3 mt-1">
      <div className="flex items-center flex-1">
        {Object?.values(daysEnum)?.map((item, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.preventDefault();
              let day = item?.substring(0, 3).toLocaleUpperCase();

              if (state.includes(day)) {
                setState(state?.filter((val: any) => day !== val));
              } else {
                setState(
                  daysArray?.filter(
                    (val: any) => (state?.includes(val) || day == val) && val
                  )
                );
              }
            }}
            className={`flex-1 py-2  border  border-borderColor font-medium hover:bg-[#F1F1F1] transition-colors ${i === 0
                ? borderRadiusForLeftTab
                : i !== Object?.values(daysEnum)?.length - 1
                  ? "border-l-transparent border-r-transparent "
                  : borderRadiusForRightTab
              } ${state?.includes(item?.substring(0, 3)?.toLocaleUpperCase())
                ? activeClasses
                : ""
              }`}
          >
            {item?.substring(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaysButton;
