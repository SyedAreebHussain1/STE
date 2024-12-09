import React, { useState } from "react";

import demoImg from "../../assets/pwdemo.png";
import { Link } from "react-router-dom";
import AuthSidebar from "../../helpers/Auth/AuthSidebar";
import SignupForm from "../../components/Auth/SignupForm";
import OtpForm from "../../components/Auth/OtpForm";
import { useSelector } from "react-redux";

const SignUp: React.FC = () => {
  const [isOtp, setIsOtp] = useState<boolean>(false);
  const createUser = useSelector((state: any) => state.createUser);
  if (isOtp) {
    return (
      <AuthSidebar>
        <div className="w-full bg-transparent h-full flex justify-center md:justify-start items-center px-[20px] md:px-[82px]">
          <div>
            <div className="flex w-full mt-9 md:mt-0">
              <div>
                <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
                  OTP Verification
                </h1>
                <div>
                  <span className="text-[#667085] text-[1rem] font-medium">
                    We have sent a verification code to your Provided email
                    <b className="font-semibold text-[rgb(77,88,105)]">
                      {" "}
                      {createUser?.data?.email}
                    </b>{" "}
                    and Phone No{" "}
                    <b className="font-semibold text-[rgb(77,88,105)]">
                      {" "}
                      {createUser?.data?.phoneNo}
                    </b>{" "}
                  </span>
                </div>
              </div>
            </div>
            <OtpForm setIsOtp={setIsOtp} />
          </div>
        </div>
      </AuthSidebar>
    );
  }
  return (
    <AuthSidebar>
      <div className="w-full bg-transparent h-full flex justify-center md:justify-start items-center px-[20px] md:px-[82px]">
        <div>
          <div className="flex w-full mt-9 md:mt-0">
            <div>
              <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
                Create an Account
              </h1>
              <span className="text-[rgb(128,128,128)] ">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="text-primary !font-medium text-[.975rem]"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </div>
          <SignupForm setIsOtp={setIsOtp} />
        </div>
      </div>
    </AuthSidebar>
  );
};

export default SignUp;
