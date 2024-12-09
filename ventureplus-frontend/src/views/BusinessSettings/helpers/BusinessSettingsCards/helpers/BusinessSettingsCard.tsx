import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./businessSettingCard.css";

export interface BusinessSettingCardI {
  title: "Overview" | "Localization" | "Users" | "Plans" | "";
  description: string;
  bgImg: any;
  icon: any;
  bgColor: string;
  setSelectedCard: any;
  selectedCard: "Overview" | "Localization" | "Users" | "Plans" | "";
}

const BusinessSettingsCard = ({
  title,
  description,
  bgImg,
  icon,
  bgColor,
  selectedCard,
  setSelectedCard,
}: BusinessSettingCardI) => {
  const [onHover, setOnHover] = useState(false);
  const [clickAnimation, setClickAnimation] = useState(false);

  const handleOnHover = () => {
    setOnHover(!onHover);
  };

  const handleClickAnimation = () => {
    setClickAnimation(!clickAnimation);

    setTimeout(() => {
      setSelectedCard(title);
      setClickAnimation(!clickAnimation);
    }, 300);
  };

  useEffect(() => {
    setOnHover(false);
  }, []);

  return (
    <div
      onClick={handleClickAnimation}
      className={`${
        clickAnimation
          ? "scale-[10] bg-[#fff] z-10 "
          : `${bgColor} scale-[1] z-1`
      } relative h-[261px] w-[261px] mt-2 flex justify-center items-center px-[26px] py-[96px] cursor-pointer overflow-hidden businessSettingCardClass`}
    >
      <div className={`${clickAnimation ? "opacity-0" : "opacity-100"} `}>
        <div className="absolute top-0 left-0">
          <img src={bgImg} alt="bgImage" className="w-[full] h-full bg-cover" />
        </div>
        <div className="flex flex-col gap-4 relative z-10 items-center justify-center text-center">
          <div className="flex gap-2">
            <h1 className="heading-xs font-medium leading-[25.02px] text-title">
              {title}
            </h1>
            <img src={icon} alt="" />
          </div>
          <p className="text-[12px] text-para">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default BusinessSettingsCard;
