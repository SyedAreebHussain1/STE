import React, { useState } from "react";
import { Steps } from "antd";
import BusinessInfo from "./helpers/BusinessInfo";
import RoundedButton from "../../../../components/button/RoundedButton";
import YourRoleAndGoal from "./helpers/YourRoleAndGoal";
import { errorMessage } from "../../../../utils/message";
import Signup from "./helpers/SignUp/Signup";
import {
  processicon,
  rocket,
  withbgcheck,
  withoutbgcheck,
  iIcon,
} from "../../../../assets/onboardingnew/index";

const MainSteps: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [businessInfo, setBusinessInfo] = useState({
    businessName: "",
    businessDescription: "",
    industry: "",
    country: null,
    city: "",
    stage: "",
  });
  const [yourRoleAndGoal, setYourRoleAndGoal] = useState({
    userRole: "",
    currency: null,
    language: null,
    category: null,
  });
  const body = {
    ...businessInfo,
    ...yourRoleAndGoal,
  };
  const previous = (e: any) => {
    setCurrent((pre: number) => pre - 1);
  };

  const steps = [
    {
      title: "Business Info",
      description: "Lets Start with your business details",
      stepTitle: "Share your business detail.",
      stepImg: current === 1 || current === 2 ? withbgcheck : processicon,
      conponent: (
        <BusinessInfo state={businessInfo} setState={setBusinessInfo} />
      ),
    },
    {
      title: "Your Role & Goals",
      description: "Let’s Bring Your Business to Life",
      stepTitle: "Share your role and purpose.",
      stepImg:
        current === 0
          ? withoutbgcheck
          : current === 1
          ? processicon
          : withbgcheck,
      conponent: (
        <YourRoleAndGoal
          state={yourRoleAndGoal}
          setState={setYourRoleAndGoal}
        />
      ),
    },
    {
      title: "Sign Up",
      description: "Lets Set Up Your Account to Start Your Business",
      stepTitle: "Join us and start your journey today",
      stepImg:
        current === 0 || current === 1
          ? withoutbgcheck
          : current === 2
          ? processicon
          : withbgcheck,
      conponent: (
        <Signup signUpHandler={(e: any) => previous(e)} value={body} />
      ),
    },
  ];
  const next = () => {
    if (current === 0) {
      if (
        businessInfo?.businessName &&
        businessInfo?.businessDescription &&
        businessInfo?.industry &&
        businessInfo?.country &&
        businessInfo?.city &&
        businessInfo?.stage
      ) {
        setCurrent((pre: number) => pre + 1);
      } else {
        errorMessage("All fields are required");
      }
    } else if (current === 1) {
      if (
        yourRoleAndGoal?.userRole &&
        yourRoleAndGoal?.currency &&
        yourRoleAndGoal?.category &&
        yourRoleAndGoal?.language
      ) {
        setCurrent((pre: number) => pre + 1);
      } else {
        errorMessage("All fields are required");
      }
    }
  };
  return (
    <div className=" sm:p-[20px] p-[10px] min-h-[93vh] sm:min-h-screen">
      <div>
        <div className=" block gap-6 mt-3 sm:flex justify-between w-full">
          <div className=" border-none  sm:w-[40%] w-full">
            <div className="bg-[#eef5f6] sm:block hidden rounded-lg ">
              <div className="p-[30px]">
                <h1 className="text-[#040615] font-semibold text-[2.25rem] ">
                  Welcome to Venture Plus
                </h1>
                <p className="text-[#4A5366] font-semibold text-[1.125rem]">
                  Complete the following steps to get started
                </p>
                <div>
                  {steps.map((item: any, i: number) => {
                    return (
                      <div className="flex items-center mt-12" key={i}>
                        <div>
                          <img src={item?.stepImg} alt="" />
                        </div>
                        <div>
                          <h2 className="text-[#212838] font-semibold text-[1.4375rem]">
                            {item.title}
                          </h2>
                          <p className="text-[#4A5366] font-medium text-[1.125rem]">
                            {item.stepTitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center ">
                <img src={rocket} alt="" />
              </div>
            </div>
            <div className="sm:hidden block rounded-lg bg-[#eff5f7] ">
              <div className="w-full mb-2 flex gap-1 items-center  p-[4px]">
                <div>
                  <img src={iIcon} alt="" />
                </div>
                <h3 className="text-[#212838] font-medium text-[.75rem]">
                  Get started by setting up your business.{" "}
                </h3>
              </div>
              <div className="bg-[#e4eef0]   ">
                <div className="sm:p-[30px] p-[10px]">
                  <div className="flex justify-around items-center">
                    {steps.map((item: any, i: number) => {
                      return (
                        <div key={i} className="block justify-center">
                          <div className=" flex justify-center">
                            <img
                              className="w-[23px] h-[23px]"
                              src={item?.stepImg}
                              alt=""
                            />
                          </div>
                          <h1 className="text-[#212838] text-center font-semibold text-[.75rem]">
                            {item.title}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:p-2 p-0 sm:w-[60%] w-full rounded-lg sm:bg-[#FFFFFF]  bg-none ">
            <div className=" sm:p-3 p-1 !rounded-lg">
              <h1 className="text-[#016A70] sm:block hidden font-medium text-[.75rem]">
                Step {current + 1}/{steps.length}
              </h1>
              <h2 className="text-[#000000] sm:block hidden mt-1 font-medium text-[1.4375rem]">
                {steps[current]?.description}
              </h2>
              {steps[current]?.conponent}
            </div>
            <div className="flex justify-between w-full gap-2 pt-3 pb-1">
              {current + 1 === steps.length ? (
                <></>
              ) : (
                <RoundedButton
                  onClick={previous}
                  disabled={current === 0}
                  title={"Previous"}
                  className={`w-[130px] !bg-[#fff] text-[#016A70]${
                    current === 0 ? " hidden" : "block"
                  }`}
                  sm
                />
              )}
              <div className="flex items-end justify-end w-full">
                {current + 1 === steps.length ? (
                  <></>
                ) : (
                  <RoundedButton
                    onClick={next}
                    title={"Next"}
                    type="primary"
                    className="w-[130px]"
                    sm
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSteps;
