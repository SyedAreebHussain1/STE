import { CustomFields, QuestionItem } from "./OnBoardingList";
import { motion } from "framer-motion";
import AnswerComponent from "./AnswerComponent";
import { useState } from "react";

interface Props extends CustomFields {
  direction: string;
  item: QuestionItem;
  index: number;
  value: any;
  setValue: any;
}

const answerVariants = {
  initial: (direction: "up" | "down") => ({
    opacity: 0,
    y: direction === "up" ? "50vh" : "-50vh",
  }),
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: "up" | "down") => ({
    opacity: 0,
    y: direction === "up" ? "-50vh" : "50vh",
  }),
};

const OnBoardingAnswerComponent = ({
  direction,
  item,
  index,
  value,
  setValue,
  customIndustry,
  customRole,
  setCustomIndustry,
  setCustomRole,
}: Props) => {
  return (
    <motion.div
      key={index}
      custom={direction}
      variants={answerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="onBoarding-answer-item w-full h-full flex flex-col items-start gap-3 mt-24"
    >
      <h1 className="heading-l leading-[46.8px] font-bold text-[#212838] ">
        {item.question}
      </h1>
      {item.questionChildOption?.map((options, index) => (
        <p className="bosy-s pb-[5px]" key={index}>
          <span className="font-semibold text-[#363F52]">
            {options?.example}
          </span>
          {options?.exampleDiscription}
        </p>
      ))}
      <AnswerComponent
        item={item}
        index={index}
        value={value}
        setValue={setValue}
        customRole={customRole}
        setCustomRole={setCustomRole}
        customIndustry={customIndustry}
        setCustomIndustry={setCustomIndustry}
      />
    </motion.div>
  );
};

export default OnBoardingAnswerComponent;
