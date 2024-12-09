import { CustomFields, QuestionItem } from "./OnBoardingList";
import { motion } from "framer-motion";
import AnswerComponent from "./AnswerComponent";

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
      className="onBoarding-answer-item w-full  h-full flex items-center pl-[50px]"
    >
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
