import React from "react";
import AuthSidebar from "../../../utils/helpers/Auth/AuthSidebar";
import ForgotPasswordForm from "./helper/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
    return (
        <AuthSidebar>
            <div className="w-full bg-transparent flex sm:flex justify-center items-center ">
                <div className="w-[100%] md:w-[50%]">
                    <div className="w-full ">
                        <div>
                            <h1 className="font-extrabold text-[2.25rem] text-[#040615] ">
                                Forgot Password?
                            </h1>
                            <p className="font-semibold text-[.9375rem] text-[#4A5366]">No worries, we’ll send you reset instructions</p>
                        </div>
                    </div>
                    <ForgotPasswordForm />
                </div>
            </div>
        </AuthSidebar>
    );
};

export default ForgotPassword;
