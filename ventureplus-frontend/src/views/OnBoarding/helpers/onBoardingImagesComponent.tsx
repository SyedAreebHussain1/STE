import { CustomFields, QuestionItem } from "./OnBoardingList";
import { motion } from "framer-motion";
import ImagesComponent from "./ImagesComponent";

interface Props extends CustomFields {
  direction: string;
  item: QuestionItem;
  index: number;
  value: any;
  setValue: any;
}

const imageVariants = {
    initial: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "50vh" : "-50vh",
      x: -100, 
    }),
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" }, 
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "-50vh" : "50vh",
      x: 100, 
      transition: { duration: 0.7, ease: "easeInOut" },
    }),
  };
  
  const OnBoardingImagesComponent = ({
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
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex w-full"
      >
        <div>
          <ImagesComponent
            item={item}
            index={index}
            value={value}
            setValue={setValue}
            customRole={customRole}
            setCustomRole={setCustomRole}
            customIndustry={customIndustry}
            setCustomIndustry={setCustomIndustry}
          />
        </div>
    </motion.div>
    );
  };
  

export default OnBoardingImagesComponent;
