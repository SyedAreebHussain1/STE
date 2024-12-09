import React from "react";
import SignInForm from "./helpers/SigninForm";
import AuthSidebar from "../../../utils/helpers/Auth/AuthSidebar";

const Sigin: React.FC = () => {
    return (
        <AuthSidebar>
            <div className="w-full bg-transparent flex sm:flex justify-center items-center ">
                <div>
                    <div className="w-full mt-11 md:mt-10">
                        <div>
                            <h1 className="font-semibold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
                                Let's Get Started
                            </h1>
                            <p className="font-medium text-[.975rem] text-[#344054]">Welcome back please enter your credentials.</p>
                        </div>
                    </div>
                    <SignInForm />
                </div>
            </div>
        </AuthSidebar>
    );
};

export default Sigin;
