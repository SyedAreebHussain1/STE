import React, { useState } from "react";
import {
  DriveGrowth,
  IdeaBulb,
  StartUp,
  Freelancer,
  Student,
  QuestionMark,
} from "../../../../assets/onBoardingAssets";
import { QuestionItem } from "../OnBoardingList";

interface Props {
  item: QuestionItem;
  index: any;
  value: any;
  setValue: any;
}

const OnBoardingCategory: React.FC<Props> = ({
  item,
  index,
  value,
  setValue,
}) => {
  const [answer, setAnswer] = useState(value[item?.keyValue]);

  function onClickHandler(val: any) {
    if (answer === val) {
      setAnswer(null);
      setValue((pre: any) => ({ ...pre, [item?.keyValue]: null }));
    } else {
      setAnswer(val);
      setValue((pre: any) => ({ ...pre, [item?.keyValue]: val }));
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
    <div className="w-full flex flex-col gap-[8px] h-full overflow-y-auto custom-scrollbar">
      {answerObj?.map((opt: any, i: number) => (
        <div
          key={i}
          className={`p-[7px] rounded-md border-[1.5px] cursor-pointer flex items-center ${
            opt?.value === answer
              ? "border-[#016A70] border-4 bg-[#016a7014]"
              : "border-[#E3E7EF]"
          }`}
          onClick={() => {
            onClickHandler(opt?.value);
          }}
        >
          {opt?.icons && (
            <div>
              <img src={opt?.icons} alt="" className="" />
            </div>
          )}
          <div className={`w-full ${opt?.icons ? "ml-[10px]" : ""}`}>
            <h1 className="text-[15px] ">{opt?.heading}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnBoardingCategory;
