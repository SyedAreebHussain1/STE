import React from "react";
import SignInForm from "./helpers/SigninForm";
import AuthSidebar from "../../../utils/helpers/Auth/AuthSidebar";

const Sigin: React.FC = () => {
  return (
    <AuthSidebar>
      <div className="w-full bg-transparent flex sm:flex justify-center items-center ">
        <div className="w-[100%] md:w-[50%]">
          <div className="w-full ">
            <div>
              <h1 className="font-extrabold text-[2.25rem] text-[#040615] ">
                Log in to your account
              </h1>
              <p className="font-semibold text-[.9375rem] text-[#4A5366]">
                Welcome Back!
              </p>
            </div>
          </div>
          <SignInForm />
        </div>
      </div>
    </AuthSidebar>
  );
};

export default Sigin;
