import { ReactNode, useState } from "react";
import demoImg from "../../assets/pwdemo.png";
import ForgetPasswordEmail from "./helpers/ForgetPasswordEmail";
import ForgetPasswordOTP from "./helpers/ForgetPasswordOTP";
import ForgetPasswordChangePassword from "./helpers/ForgetPasswordChangePassword";
import AuthSidebar from "../../helpers/Auth/AuthSidebar";

const ForgetPassword = () => {
  const [state, setState] = useState("email");

  const componentChangeHandler = (componentName: string) => {
    if (
      componentName === "email" ||
      componentName === "otp" ||
      componentName === "password"
    ) {
      setState(componentName);
    }
  };

  const obj: {
    [email: string]: ReactNode;
    otp: ReactNode;
    password: ReactNode;
  } = {
    email: <ForgetPasswordEmail componentHandler={componentChangeHandler} />,
    otp: <ForgetPasswordOTP componentHandler={componentChangeHandler} />,
    password: <ForgetPasswordChangePassword />,
  };

  return (
    <AuthSidebar>
      <div className="w-full bg-transparenth-full flex sm:flex justify-center items-center p-[10px] sm:p-[0px]">
        <div>
          <div className="flex sm:hidden justify-center mt-4 mb-4">
            <img src={demoImg} className="w-[40%]" alt="" />
          </div>

          {obj[state]}
        </div>
      </div>
    </AuthSidebar>
  );
};
export default ForgetPassword;
