import { ReactNode, useState } from "react";
import { Col, Row } from "antd";
import { websiteLogo } from "../../assets/website";
import ForgetPasswordChangePassword from "./helpers/ForgetPasswordChangePassword";
import ResetPasswordSuccessScreen from "./helpers/ResetPasswordSuccessScreen";

const ResetNewPassword = () => {
  const [state, setState] = useState("password");

  const componentChangeHandler = (componentName: string) => {
    if (
      componentName === "password" ||
      componentName === "passwordSuccessScreen"
    ) {
      setState(componentName);
    }
  };

  const obj: {
    [password: string]: ReactNode;
    passwordSuccessScreen: ReactNode;
  } = {
    password: (
      <ForgetPasswordChangePassword componentHandler={componentChangeHandler} />
    ),
    passwordSuccessScreen: <ResetPasswordSuccessScreen />,
  };

  return (
    <div className="h-screen w-full ">
      <Col sm={24}>
        <div className="w-full bg-[white] h-screen flex flex-col  p-[10px] sm:p-[0px]">
          <div className="flex  mt-8 mb-4 sm:ml-[60px] ml-2 h-max">
            <img src={websiteLogo} className="w-[150px]" alt="" />
          </div>
          <div className="w-full h-full sm:flex   items-center justify-center">
            {obj[state]}
          </div>
        </div>
      </Col>
    </div>
  );
};
export default ResetNewPassword;
