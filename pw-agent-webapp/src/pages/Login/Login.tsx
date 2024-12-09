import React from "react";
import { Link } from "react-router-dom";
import AuthSidebar from "../../helpers/Auth/AuthSidebar";
import SignInForm from "../../components/Auth/SignInForm";

const Login: React.FC = () => {
  return (
    <AuthSidebar>
      <div className="w-full bg-transparent flex sm:flex justify-center items-center p-[10px] sm:p-[0px]">
        <div>
          <div className="flex w-full mt-9 md:mt-0">
            <div>
              <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
                Welcome to Property wallet
              </h1>
              <span className="text-[rgb(128,128,128)] ">
                Don't have an account?{" "}
                <Link
                  to="/create-user"
                  className="text-primary !font-medium text-[.975rem]"
                >
                  Sign up today
                </Link>
              </span>
            </div>
          </div>
          <SignInForm />
        </div>
      </div>
    </AuthSidebar>
  );
};

export default Login;
