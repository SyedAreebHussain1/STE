import React, { useState } from "react";
import {
  DriveGrowth,
  IdeaBulb,
  StartUp,
  Freelancer,
  Student,
  QuestionMark,
} from "../../../../../../../assets/onBoardingAssets";
interface Props {
  setState: any;
  state: any;
}

const OnBoardingCategory: React.FC<Props> = ({ setState, state }) => {
  //   const [answer, setAnswer] = useState(value[item?.keyValue]);

  function onClickHandler(val: any) {
    if (state.category === val) {
      //   setAnswer(null);
      setState((pre: any) => ({ ...pre, category: null }));
    } else {
      //   setAnswer(val);
      setState((pre: any) => ({ ...pre, category: val }));
    }
  }

  const answerObj = [
    {
      icons: IdeaBulb,
      heading: "Aspiring Entrepreneur",
      paragraph:
        "To transform a business concept or idea into a structured plan, ensuring that the venture is both feasible and profitable.",
      value: "Aspiring Entrepreneur",
    },
    {
      icons: StartUp,
      heading: "Startup Founder",
      paragraph:
        "To create a roadmap for launching, scaling or funding a new business, including detailed objectives, strategies and forecast.",
      value: "Startups Founder",
    },
    {
      icons: DriveGrowth,
      heading: "SME Founder",
      paragraph:
        "To develop strategies for expanding operations, entering new markets, or optimising resources for success and increased profitability.",
      value: "SMEsFounder",
    },
    {
      icons: Freelancer,
      heading: "Freelancer",
      paragraph:
        "To develop strategies for expanding operations, entering new markets, or optimising resources for success and increased profitability.",
      value: "Freelancer",
    },
    {
      icons: Student,
      heading: "Student",
      paragraph:
        "To develop strategies for expanding operations, entering new markets, or optimising resources for success and increased profitability.",
      value: "Student",
    },
    {
      icons: QuestionMark,
      heading: "Other",
      paragraph: "Select this if none of the given options above apply to you!",
      value: "Other",
    },
  ];

  return (
    <>
      <div className="sm:mb-6 mb-1 sm:mt-2 mt-1">
        <h2 className="text-[#212838] font-semibold text-[1.4375rem]">
          Which of these best describes you?
        </h2>
      </div>
      <div className="w-full flex flex-col gap-[8px] sm:h-full  custom-scrollbar">
        {answerObj?.map((opt: any, i: number) => (
          <div
            key={i}
            className={`p-[7px] rounded-md border-[1.5px] cursor-pointer flex items-center ${
              opt?.value === state?.category
                ? "border-[#016A70] border-4 bg-[#016a7014]"
                : "border-[#E3E7EF]"
            }`}
            onClick={() => {
              onClickHandler(opt?.value);
            }}
          >
            {opt?.icons && (
              <div>
                <img src={opt?.icons} alt="" />
              </div>
            )}
            <div className={`w-full ${opt?.icons ? "ml-[10px]" : ""}`}>
              <h1 className="text-[15px] ">{opt?.heading}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OnBoardingCategory;
