import React from "react";
import { CustomFields, QuestionItem } from "./OnBoardingList";
import { motion, AnimatePresence } from "framer-motion";
import OnBoardingAnswerComponent from "./OnBoardingAnswerComponent";
import { businessLocation } from "../../../assets/onBoardingAssets";
import ImagesComponent from "./ImagesComponent";

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

  const imageVariants = {
    initial: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "50vh" : "-50vh",
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      },
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "-100vh" : "100vh",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    }),
  };

  return (
    <div className="onBoarding-columns flex gap-20  h-full overflow-y-hidden  ">
      <div className="onBoarding-questions-column flex flex-col justify-between w-[60%]">
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
      <div className="h-full flex w-[40%] rounded-md">
        <AnimatePresence initial={false} custom={direction}>
          {questionItems.map((item, index) =>
            index === currentIndex ? (
              <div className="flex w-[100%] rounded-md h-full bg-[#016A70]/[.06] ">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex w-full items-end justify-end"
                >
                  <ImagesComponent
                    key={index}
                    item={item}
                    index={index}
                    value={value}
                    setValue={setValue}
                    customRole={customRole}
                    customIndustry={customIndustry}
                    setCustomIndustry={setCustomIndustry}
                    setCustomRole={setCustomRole}
                  />
                </motion.div>
              </div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnBoardingQuestionAnswerComponent;
