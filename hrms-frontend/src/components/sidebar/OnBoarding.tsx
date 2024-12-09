import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./OnBoarding.css";
import OnBoardingStep from "./OnBoardingStep";

const OnBoarding = () => {
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="relative">
      <div
        className="bg-[#424B63] px-[1rem] flex items-center gap-2 h-[40px] rounded-[.5rem] cursor-pointer"
        onClick={toggleOpen}
      >
        <span className="text-white text-[.6875rem] font-bold">Onboarding</span>
        <div className="bg-white w-[140px] h-[8px] rounded-[.5rem]">
          <div className="dark:bg-dark-primary bg-light-primary h-[8px] w-[40%] rounded-[.5rem]"></div>
        </div>
        <span className="text-white text-[.6875rem] font-bold invisible sm:visible">
          4 of 7
        </span>
        <BsChevronDown color="#fff" size="18" />
      </div>
      <div
        className={`absolute z-10 left-0 top-[114%] w-full rounded-[.5rem] bg-red-600 shadow-lg onboarding-container ${
          open && "onboarding-container-active"
        }`}
      >
        <OnBoardingStep completed />
        <OnBoardingStep />
        <OnBoardingStep />
      </div>
    </div>
  );
};

export default OnBoarding;
