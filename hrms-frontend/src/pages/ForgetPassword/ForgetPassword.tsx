import { ReactNode, useState } from "react";
import { Col, Row } from "antd";
import leftSideImg from "../../assets/loginside.png";
import logo from "../../assets/managematelogo.png";
import demoImg from "../../assets/pwdemo.png";
import ForgetPasswordEmail from "./helpers/ForgetPasswordEmail";
import ForgetPasswordOTP from "./helpers/ForgetPasswordOTP";
import ForgetPasswordChangePassword from "./helpers/ForgetPasswordChangePassword";

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
    <div className="h-screen w-full ">
      <Row
        gutter={0}
        className="h-full  !ml-[0px] !mr-[0px] flex justify-center"
      >
        <Col
          xs={24}
          lg={10}
          sm={24}
          md={24}
          className="hidden sm:block bg-gradient-to-b from-blue-700 to-indigo-800 pl-[0px] pr-[0px]"
        >
          <div className=" w-full  h-full flex items-center  justify-end">
            <div>
              <div className="p-[70px]">
                <div>
                  <img src={logo} alt="" />
                </div>
                <div className="mt-[50px]">
                  <p className="font-semibold text-[2.0219rem] text-[#FFFFFF]">
                    Keep tabs on your staff's work hours for payroll, attendance
                    and performance assessment.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-[0px] md:mt-[-90px]">
                <img
                  src={leftSideImg}
                  className="w-full h-auto  md:h-[589.84px] md:w-[792.53px] "
                  alt=""
                />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={14} sm={24} xs={24} md={24}>
          <div className="w-full bg-[white] h-full flex sm:flex justify-center items-center p-[10px] sm:p-[0px]">
            <div>
              <div className="flex sm:hidden justify-center mt-4 mb-4">
                <img src={demoImg} className="w-[40%]" alt="" />
              </div>

              {obj[state]}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ForgetPassword;
