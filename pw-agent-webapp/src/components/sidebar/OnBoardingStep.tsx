import { FaCheckCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";


import "./OnBoarding.css";
import { useState } from "react";
type Props = {
  completed?: boolean;
};

const OnBoardingStep = ({ completed = false }: Props) => {
  const [isHovering, setIsHovering] = useState(false)

  function handleMouseEnter(){
    setIsHovering(true)
  }

  function handleMouseLeave(){
    setIsHovering(false)
  }
  return (
    <>
      {completed ? (
        <div className="bg-[#ecedef] py-[.5rem] px-[1.25rem] cursor-pointer flex justify-between items-center">
          <div>
            <h3 className="leading-[1rem] text-[#424b63] text-sm mb-[6px]">
              Complete organization profile
            </h3>
            <h4 className="leading-[1rem] text-[#a0a5b1] text-[.6875rem]">
              Configure in Account Settings
            </h4>
          </div>
          <div>
            <FaCheckCircle fontSize={"20"} color="#d0d2d8" />
          </div>
        </div>
      ) : (
        <div className={`bg-white py-[.5rem] px-[1.25rem] cursor-pointer border-t border-[#ecedef] flex justify-between items-center ${isHovering ? "onboarding-hover" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div>
            <h3 className="leading-[1rem] text-[#424b63] text-sm mb-[6px]">
              Complete organization profile
            </h3>
            <h4 className="leading-[1rem] text-[#a0a5b1] text-[.6875rem]">
              Configure in Account Settings
            </h4>
          </div>
          <div className="flex items-center gap-[.375rem]">
            <span className="text-[#424b63] text-[.75rem] font-bold">Start</span>
            <FaChevronRight fontSize={"16"} />
          </div>
        </div>
      )}
    </>
  );
};

export default OnBoardingStep;
