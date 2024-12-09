import React from "react";
import AuthSidebar from "../../helpers/Auth/AuthSidebar";
import SetupAgencySelections from "../../components/OnBoarding/SetupAgency/SetupAgencySelections";

const SetupAgency: React.FC = () => {
  return (
    <AuthSidebar>
      <div className="w-full bg-transparent flex sm:flex justify-center items-center p-[10px]  px-[20px] md:px-[82px]">
        <div className="w-full">
          <div className="flex w-full mt-9 md:mt-0">
            <div>
              <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
                Set Up Agency
              </h1>
              <p className="text-subHeadingColor text-[1.125rem] max-w-[574px]">
                Welcome to our real estate platform! Are you interested in
                pursuing a career in the Real Estate industry
              </p>
            </div>
          </div>

          <div className=" max-w-[574px] setup-agency">
            <SetupAgencySelections />
          </div>
        </div>
      </div>
    </AuthSidebar>
  );
};

export default SetupAgency;
