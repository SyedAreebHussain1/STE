import React from "react";
import { CustomFields, QuestionItem } from "./OnBoardingList";
import { motion, AnimatePresence } from "framer-motion";
import OnBoardingAnswerComponent from "./OnBoardingAnswerComponent";
import CheckedIcon from "../../../assets/blueCheckBox.svg";

interface Props extends CustomFields {
  direction: string;
  questionItems: QuestionItem[];
  currentIndex: number;
  value: any;
  setValue: any;
}

const OnBoardingQuestionAnswerComponent = ({
  direction,
  questionItems,
  currentIndex,
  value,
  setValue,
  customIndustry,
  customRole,
  setCustomIndustry,
  setCustomRole,
}: Props) => {
  const questionVariantsCenter = {
    initial: (direction: "up" | "down") => ({
      opacity: 0.5,
      y: direction === "up" ? "30vh" : "-30vh",
    }),
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0.5,
      y: direction === "up" ? "-30vh" : "30vh",
    }),
  };

  const questionVariantsTop = {
    initial: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "30vh" : "-80vh",
    }),
    animate: {
      opacity: 0.5,
      y: "-20vh",
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "-80vh" : "30vh",
    }),
  };

  const questionVariantsBottom = {
    initial: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "80vh" : "-80vh",
    }),
    animate: {
      opacity: 0.5,
      y: "35vh",
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0.5,
      y: direction === "up" ? "-35vh" : "35vh",
    }),
  };

  return (
    <div className="onBoarding-columns h-full overflow-y-hidden  ">
      <div className="onBoarding-questions-column flex flex-col justify-between border-l-[1px] border-l-[#F2F2F2] pl-[36px] ml-[20px]">
        <AnimatePresence initial={false} custom={direction}>
          {questionItems.map((item, index) =>
            index === currentIndex ? (
              <OnBoardingAnswerComponent
                key={index}
                direction={direction}
                item={item}
                index={index}
                value={value}
                setValue={setValue}
                customRole={customRole}
                customIndustry={customIndustry}
                setCustomIndustry={setCustomIndustry}
                setCustomRole={setCustomRole}
              />
            ) : null
          )}
        </AnimatePresence>
      </div>
      <div className="onBoarding-answers-column overflow-hidden h-full">
        <></>
      </div>
    </div>
  );
};

export default OnBoardingQuestionAnswerComponent;
