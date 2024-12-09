import React, { useEffect, useState, Fragment } from "react";
import { isFunction } from "../../utils/utils";
import Button from "../inputs/Button";
import { BsArrowLeft } from "react-icons/bs";

export type StepsItemsType = {
  label: string;
  component: (currentStep: number, formInstance: any) => JSX.Element;
  formInstance: any;
}[];

const Steps = ({
  items,
  current,
  next,
  prev,
}: {
  items: StepsItemsType;
  current: number;
  next: () => void;
  prev: () => void;
}) => {
  const [steps, setSteps] = useState(items);

  useEffect(() => {
    const changeActiveStep = steps.map((step: any, i: any) => {
      if (i === current) {
        return {
          ...step,
          status: "active",
        };
      } else if (i > current) {
        return {
          ...step,
          status: "pending",
        };
      } else if (i < current) {
        return {
          ...step,
          status: "completed",
        };
      }
      return step;
    });
    setSteps(changeActiveStep);
  }, [current]);

  return (
    <>
      <div className="flex items-center justify-between border-b border-[#E0E2E7] bg-white mt-3 rounded-xl p-6">
        <div className="flex items-center gap-[12px] ">
          {steps.map((item: any, i: any) => (
            <Fragment key={`${item.label}${i}`}>
              {i !== 0 ? (
                <div className="w-[80px] h-[1px] bg-[#667085] " />
              ) : (
                ""
              )}
              <div className="flex items-center gap-[8px] flex-shrink-0">
                {item.status === "active" ? (
                  <div className="bg-[#fff] border-2 border-[#79C7C7] w-[16px] h-[16px] rounded-full relative">
                    <div className="w-[9px] h-[9px] bg-[#27A3A3] rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
                  </div>
                ) : item.status === "pending" ? (
                  <div className="bg-transparent border-2 border-[#A3A9B6] w-[16px] h-[16px] rounded-full relative" />
                ) : (
                  <div className="bg-[#27A3A3] border-2 border-[#27A3A3] w-[16px] h-[16px] rounded-full relative" />
                )}

                <span
                  style={{
                    color:
                      item.status === "active"
                        ? "#1D2939"
                        : item.status === "pending"
                        ? "#98A2B3"
                        : "#1D2939",
                  }}
                  className="text-base font-medium"
                >
                  {item.label}
                </span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className=" bg-white mt-3 rounded-xl p-6">
        {steps.map((step: any, i: any) => (
          <div key={i} style={{ display: current === i ? "block" : "none" }}>
            {isFunction(step?.component)
              ? step?.component(current, items[current]?.formInstance)
              : step?.component}
          </div>
        ))}
      </div>
    </>
  );
};

export default Steps;
