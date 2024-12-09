import { ReactNode, useState } from "react";
import { Col } from "antd";
import ForgetPasswordEmail from "./helpers/ForgetPasswordEmail";
import { websiteLogo } from "../../assets/website";
import ForgetPasswordChangePassword from "./helpers/ForgetPasswordChangePassword";

const ForgetPassword = () => {
  const [state, setState] = useState("email");

  const componentChangeHandler = (componentName: string) => {
    if (componentName === "email" || componentName === "sendEmailScreen") {
      setState(componentName);
    }
  };

  const obj: {
    [email: string]: ReactNode;
    sendEmailScreen: ReactNode;
  } = {
    email: <ForgetPasswordEmail componentHandler={componentChangeHandler} />,
    sendEmailScreen: <ForgetPasswordChangePassword />,
  };

  return (
    <div className="h-screen w-full ">
      <Col sm={24}>
        <div className="w-full bg-[white] h-screen flex flex-col  p-[10px] sm:p-[0px]">
          <div className="flex  mt-8 mb-4 sm:ml-[60px] ml-2 h-max">
            <img src={websiteLogo} className="w-[150px]" alt="" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            {obj[state]}
          </div>
        </div>
      </Col>
    </div>
  );
};
export default ForgetPassword;
