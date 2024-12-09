import React, { useEffect } from "react";
import AuthSidebar from "../../../utils/helpers/Auth/AuthSidebar";
import ResetPasswordForm from "./helper/ResetPasswordForm";
import { decodeUrlApi } from "../../../services/api/auth";

const ResetPassword: React.FC = () => {


    return (
        <AuthSidebar>
            <div className="w-full bg-transparent flex sm:flex justify-center items-center ">
                <div className="w-[100%] md:w-[50%]">
                    <div className="w-full ">
                        <div className="text-center">
                            <h1 className="font-bold text-[2.25rem] text-[#040615] ">
                                Reset New Password
                            </h1>
                            <p className="font-semibold text-[.9375rem] text-[#97A1B5]">Enter your new password</p>
                        </div>
                    </div>
                    <ResetPasswordForm />
                </div>
            </div>
        </AuthSidebar>
    );
};

export default ResetPassword;
