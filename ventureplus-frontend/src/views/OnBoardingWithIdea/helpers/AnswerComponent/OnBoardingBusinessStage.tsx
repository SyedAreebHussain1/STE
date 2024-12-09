import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionItem } from "../OnBoardingList";

interface Props {
  item: QuestionItem;
  index: number;
  value: any;
  setValue: any;
}

const OnBoardingBusinessStage: React.FC<Props> = ({
  item,
  index,
  value,
  setValue,
}) => {
  const [answer, setAnswer] = useState(value[item?.keyValue]);

  const navigate = useNavigate()

  function onClickHandler(val: any) {
    if (val === "Idea") {
      navigate("/on-boarding-idea", {state : value})
    } else {
      if (answer === val) {
        setAnswer(null);
        setValue((pre: any) => ({ ...pre, [item?.keyValue]: null }));
      } else {
        setAnswer(val);
        setValue((pre: any) => ({ ...pre, [item?.keyValue]: val }));
      }
    }
  }

  const answerObj = [
    {
      icons: "",
      heading: "Idea",
      paragraph:
        "To transform a business concept or idea into a structured plan, ensuring that the venture is both feasible and profitable.",
      value: "Idea",
    },
    {
      icons: "",
      heading: "Launch Startup",
      paragraph:
        "To create a roadmap for launching, scaling or funding a new business, including detailed objectives, strategies and forecast.",
      value: "Startup",
    },
    {
      icons: "",
      heading: "Drive Growth",
      paragraph:
        "To develop strategies for expanding operations, entering new markets, or optimising resources for success and increased profitability.",
      value: "Business",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2">
      {answerObj?.map((opt: any, i: number) => (
        <div
          key={i}
          className={`p-[18px] rounded-md border-[1.5px] w-full ${
            opt?.value === answer
              ? "border-[rgba(1, 106, 112, 0.07)] bg-[#016a7031]"
              : "border-[#E3E7EF]"
          }`}
          onClick={() => {
            onClickHandler(opt?.value);
          }}
        >
          {opt?.icon && (
            <div>
              <img src={opt?.icon} alt="" />
            </div>
          )}
          <div className={`${opt?.icon ? "mt-[16px]" : ""}`}>
            <h1 className="text-[23px] font-semibold">{opt?.heading}</h1>
            <p className="pt-[8px] body-s">{opt?.paragraph}</p>
          </div>
        </div>
      ))}
 
   
    </div>
  );
};

export default OnBoardingBusinessStage;
