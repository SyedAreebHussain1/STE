import { mobileScreenUnavailable } from "../../assets";
import { websiteLogo } from "../../assets/website";

const BusinessPlannerUnavailable = () => {
  return (
    <div className="flex flex-col items-center bg-[#67a6a921] h-screen px-[10px]">
      <div className="flex w-full justify-center mt-[24px] h-max">
        <img src={websiteLogo} className="w-[230px]" />
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <img src={mobileScreenUnavailable}></img>
        <h1 className="text-[29px] text-[#212838] font-semibold text-center leading-[35px] mt-[24px]">
          Venture Plus is coming soon to your phones!
        </h1>
        <p className="text-[#212838] text-[18px] font-normal text-center mt-[13px] leading-[27px]">
          We apologize for the inconvenience. For the best experience, please
          switch to a desktop device to use our Business Planner.
        </p>
      </div>
    </div>
  );
};
export default BusinessPlannerUnavailable;
