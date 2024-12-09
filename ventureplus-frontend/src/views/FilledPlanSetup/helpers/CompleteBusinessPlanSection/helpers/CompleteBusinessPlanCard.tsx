import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import { getFromStorage } from "../../../../../utils/storage";

interface BusinessPlanCardI {
  data: any;
  index: number;
  chapters: any[];
  locked: boolean;
  unlockChapters: boolean;
  isChaptersComplete?: boolean;
}

const CompleteBusinessPlanCard = ({
  data,
  index,
  chapters,
  locked,
  unlockChapters,
  isChaptersComplete,
}: BusinessPlanCardI) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isCurrentChapterUnlocked = () => {
    //its return true if the card is not disabled
    if (!isChaptersComplete) {
      if (index === 0 || index === 8) {
        const previousChapter = chapters[index];
        return previousChapter?.topics.every(
          (topic: any) => topic.completionStatus
        );
      }
    }
    if (locked) {
      return false;
    }

    // if (!previousChapter) {
    //   return true;
    // }

    return true;
  };

  const handleHover = () => {
    if (!isCurrentChapterUnlocked() && (index == 0 || index == 8)) {
      return;
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        className="relative w-full h-[462px]"
        onHoverStart={handleHover}
        onHoverEnd={handleHover}
        initial={false}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {!isCurrentChapterUnlocked() && (index === 0 || index === 8) && (
          <div className="ribbon absolute -top-1 -left-1 h-40 w-40 overflow-hidden z-10 before:absolute before:top-0 before:right-0 before:z-10 before:border-2 before:border-[#67A6A9] after:absolute after:left-0 after:bottom-0 after:-z-[1] after:border-2 after:border-[#67A6A9]">
            <div className="absolute -left-14 top-[45px] w-60 -rotate-45 bg-gradient-to-br from-[#016A70] to-[#67A6A9] py-2.5 text-center text-[#FFFFFF] shadow-md">
              Complete all chapters
            </div>
          </div>
        )}

        <motion.div
          className={`relative w-full h-full cursor-${
            !isCurrentChapterUnlocked() && (index === 0 || index === 8)
              ? "not-allowed grayscale-[85%] blur-[3px]"
              : "pointer"
          }`}
          initial={false}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Front Card */}
          <motion.div
            className="absolute w-full"
            style={{ backfaceVisibility: "hidden" }}
            initial={{ opacity: 1 }}
            animate={{
              opacity: isFlipped ? 0 : 1,
            }}
            transition={{ duration: 1 }}
          >
            <CardFront
              data={data}
              index={index}
              locked={locked}
              // locked={index === 0 || index === 8 ? locked : false}
              chapters={chapters}
            />
          </motion.div>

          {/* Back Card */}
          <motion.div
            className="absolute w-full"
            style={{ backfaceVisibility: "hidden" }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: isFlipped ? 1 : 0,
              rotateY: isFlipped ? 0 : 180,
            }}
            transition={{ duration: 1 }}
          >
            <CardBack
              data={data}
              index={index}
              // locked={index === 0 || index === 8 ? locked : false}
              locked={locked}
              chapters={chapters}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CompleteBusinessPlanCard;
