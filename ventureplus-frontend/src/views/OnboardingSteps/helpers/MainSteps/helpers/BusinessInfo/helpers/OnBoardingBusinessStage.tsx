import React, { useState } from "react";
import {
  onBoardingBusinessStage1,
  onBoardingBusinessStage2,
  onBoardingBusinessStage3,
  onBoardingBusinessStageSelect1,
  onBoardingBusinessStageSelect2,
  onBoardingBusinessStageSelect3,
} from "../../../../../../../assets/onBoardingAssets";

interface Props {
  setState: any;
  state: any;
}

const OnBoardingBusinessStage: React.FC<Props> = ({ setState, state }) => {
  const answerObj = [
    {
      icons: onBoardingBusinessStage1,
      selectedIcon: onBoardingBusinessStageSelect1,
      heading: "Just an idea",
      selectedClass: "border-[#FDB022] bg-[#ffa8000d]",
      value: "Idea",
    },
    {
      icons: onBoardingBusinessStage2,
      selectedIcon: onBoardingBusinessStageSelect2,
      selectedClass: "border-[#4179FF] bg-[#cfdeff36]",
      heading: "Launching a Startup",
      value: "Startup",
    },
    {
      icons: onBoardingBusinessStage3,
      selectedIcon: onBoardingBusinessStageSelect3,
      selectedClass: "border-[#7A5AF8] bg-[#F4F3FF]",
      heading: "Driving Growth",
      value: "Business",
    },
  ];

  function onClickHandler(val: any) {
    if (state.stage === val) {
      setState((pre: any) => ({ ...pre, stage: null }));
    } else {
      setState((pre: any) => ({ ...pre, stage: val }));
    }
  }

  return (
    <>
      <div className="sm:mb-6 mb-1 sm:mt-2 mt-1">
        <h2 className="text-[#212838] font-semibold text-[1.4375rem]">
          What is the purpose of your business plan?
        </h2>
        <p className="text-[#363F52] text-[.9375rem] font-medium">
          Select the current phase of your business. This could range from an
          idea or concept, to a fully operational business.
        </p>
      </div>
      <div className="w-full flex flex-col gap-5 sm:pb-12 pb-5 sm:h-full  custom-scrollbar">
        {answerObj?.map((opt: any, i: number) => (
          <div
            key={i}
            className={`p-[16px]  rounded-md border-[1.5px] w-full cursor-pointer ${
              opt?.value === state.stage
                ? `${opt?.selectedClass} border-gray-400 border-4 `
                : " border-[#E3E7EF] "
            }`}
            onClick={() => {
              onClickHandler(opt?.value);
            }}
          >
            <div className={`${opt?.icons ? "mt-[10px]" : ""}`}>
              <div className="flex items-center gap-2">
                <img
                  src={
                    opt?.value === state.stage ? opt?.selectedIcon : opt?.icons
                  }
                  alt=""
                  className="w-[40px]"
                />

                <h1 className="text-[20px] font-semibold ">{opt?.heading}</h1>
              </div>
              <p className="pt-[6px] text-[12px]">{opt?.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnBoardingBusinessStage;
