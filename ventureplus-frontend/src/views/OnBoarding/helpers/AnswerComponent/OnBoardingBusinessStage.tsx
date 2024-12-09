import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { QuestionItem } from "../OnBoardingList";
import {
  onBoardingBusinessStage1,
  onBoardingBusinessStage2,
  onBoardingBusinessStage3,
  onBoardingBusinessStageSelect1,
  onBoardingBusinessStageSelect2,
  onBoardingBusinessStageSelect3,
} from "../../../../assets/onBoardingAssets";

interface Props {
  item: QuestionItem;
  index: any;
  value: any;
  setValue: any;
}

const OnBoardingBusinessStage: React.FC<Props> = ({
  item,
  index,
  value,
  setValue,
}) => {
  const [answerObj, setAnswerObj] = useState([
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
  ]);
  const [answer, setAnswer] = useState(value[item?.keyValue]);

  const navigate = useNavigate();

  // function onClickHandler(val: any) {
  //   if (val === "Idea") {
  //     navigate("/on-boarding-idea", { state: value });
  //   } else {
  //     if (answer === val) {
  //       setAnswer(null);
  //       setValue((pre: any) => ({ ...pre, [item?.keyValue]: null }));
  //     } else {
  //       setAnswer(val);
  //       setValue((pre: any) => ({ ...pre, [item?.keyValue]: val }));
  //     }
  //   }
  // }
  //commenting for future use

  function onClickHandler(val:any){
    if (answer === val) {
            setAnswer(null);
            setValue((pre: any) => ({ ...pre, [item?.keyValue]: null }));
          } else {
            setAnswer(val);
            setValue((pre: any) => ({ ...pre, [item?.keyValue]: val }));
          }
  }

  return (
    <div className="w-full flex flex-col gap-5 pb-20 h-full overflow-y-auto custom-scrollbar">
      {answerObj?.map((opt: any, i: number) => (
        <div
          key={i}
          className={`p-[16px]  rounded-md border-[1.5px] w-full cursor-pointer ${
            opt?.value === answer
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
                src={opt?.value === answer ? opt?.selectedIcon : opt?.icons}
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
  );
};

export default OnBoardingBusinessStage;
