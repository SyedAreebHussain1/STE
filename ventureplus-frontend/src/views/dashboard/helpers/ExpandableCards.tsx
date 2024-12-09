import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SvgCircleButton from "../../../components/button/SvgCircleButton";
import { whiteNextIcon } from "../../../assets/dashboardAssets";
import { useNavigate } from "react-router-dom";

interface ExpandableCardsI {
  card1: {
    title1: string;
    title2: string;
    description: string;
    bgImg: string;
    bgColor: string;
    link: string;
  };
  card2: {
    title1: string;
    title2: string;
    description: string;
    bgImg: string;
    bgColor: string;
    link: string;
  };
}

const ExpandableCards = ({ card1, card2 }: ExpandableCardsI) => {
  const [hoveredCard, setHoveredCard] = useState<null | "top" | "bottom">(null);
  const [isExpand, setIsExpand] = useState(false);
  const navigate = useNavigate();

  const handleHover = (position: null | "top" | "bottom") => {
    setIsExpand(!isExpand);
    if (position === "top") {
      setHoveredCard(position);
      return;
    } else if (position === "bottom") {
      setHoveredCard(position);
      return;
    }
    setHoveredCard(position);
  };

  return (
    <AnimatePresence initial={false}>
      <div className="flex flex-col items-center h-[450px] gap-2">
        <motion.div
          style={{
            backgroundColor: card1.bgColor,
          }}
          className="sm:w-[400px] w-[350px] rounded-[30px] overflow-hidden p-6 relative"
          onHoverStart={() => handleHover("top")}
          onHoverEnd={() => handleHover(null)}
          initial={false}
          animate={{
            height:
              hoveredCard === "top"
                ? "270px"
                : hoveredCard === "bottom"
                ? "110px"
                : "200px",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={card1.bgImg} alt="" className="absolute inset-y-1/4" />
          <div className="flex flex-col items-start text-start">
            <h2 className="heading-m font-semibold leading-[25.02px] text-title">
              {card1.title1}
            </h2>
            <h2 className="heading-l font-bold leading-[39.17px] text-title mb-[18px]">
              {card1.title2}
            </h2>
            <p className="paragraph 2xl:heading-m text-paraLight h-[50px] mb-11">
              {card1.description}
            </p>
          </div>

          <div className="flex justify-end">
            <SvgCircleButton
              icon={whiteNextIcon}
              type="primary"
              onClick={() => {
                card1.link && navigate(card1.link);
              }}
            />
          </div>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: card2.bgColor,
          }}
          className="sm:w-[400px] w-[350px]  rounded-[30px] overflow-hidden p-6 relative"
          onHoverStart={() => handleHover("bottom")}
          onHoverEnd={() => handleHover(null)}
          initial={false}
          animate={{
            height:
              hoveredCard === "bottom"
                ? "270px"
                : hoveredCard === "top"
                ? "110px"
                : "200px",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={card2.bgImg} alt="" className="absolute inset-y-1/4" />
          <div className="flex flex-col items-start  text-start">
            <h2 className="heading-m font-semibold leading-[25.02px] text-title">
              {card2.title1}
            </h2>
            <h2 className="heading-l font-bold leading-[39.17px] text-title mb-[18px]">
              {card2.title2}
            </h2>
            <p className="paragraph 2xl:heading-m text-paraLight h-[50px] mb-11">
              {card2.description}
            </p>
          </div>

          <div className="flex justify-end">
            <SvgCircleButton
              icon={whiteNextIcon}
              type="primary"
              onClick={() => {
                card2.link && navigate(card2.link);
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExpandableCards;
