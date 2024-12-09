import { Col, Row, Select } from "antd";
import { ReactElement } from "react";
import leftSideImg from "../../assets/loginside.png";
import FreeMarketingLogo from "../../assets/free-marketing-logo.svg";
import YoutubeIcon from "../../assets/youtube-icon.svg";
import LanguageSelect from "./LanguageSelect";
import PwLogo from "./../../assets/pw-logo.svg";
import loginScreenImage from "../../assets/BackGroundlogin-01.svg";
type Props = {
  children: ReactElement;
};

const AuthSidebar = ({ children }: Props) => {
  return (
    <div
      className={`h-screen w-full`}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${loginScreenImage})`,
        objectFit: "cover",
      }}
    >
      <div className="pt-[2.5rem] px-[4.375rem]">
        <img src={PwLogo} alt="" width={200} />
      </div>
      <Row gutter={0} justify="center">
        <Col lg={14} sm={24} xs={24} md={24} className="bg-transparent">
          <div>{children}</div>
        </Col>
        {/* <Col
          xs={24}
          lg={10}
          sm={24}
          md={24}
          className="hidden sm:block bg-[#EFF5FB]"
        >
          <div className=" flex items-center h-[100vh] overflow-hidden ">
             <img src={loginScreenImage} className="w-full h-full object-fill" /> 
          <div className="w-full">
              <div className="p-[70px] pt-[2.5rem]">
                <div className="w-full flex justify-end">
                  <LanguageSelect />
                </div>
                <div className="mt-[50px]">
                  <p className="font-semibold text-[2.0219rem] text-headingColor max-w-[629px]">
                    Our mission is to provide complete convenience to all estate
                    dealers through a safe.
                  </p>
                </div>
                <div className="mt-[1.875rem] flex">
                  <button className="flex items-center text-[16px] 2xl:text-[1.25rem] font-semibold py-[1.125rem] px-[2rem] gap-[.625rem] bg-white hover:bg-opacity-70 transition-all rounded-full">
                    <span>
                      <img src={FreeMarketingLogo} alt="" />
                    </span>
                    <span>Free Marketing Tools</span>
                  </button>
                  <button className="flex items-center text-[16px] 2xl:text-[1.25rem] font-semibold py-[1.125rem] px-[2rem] gap-[.625rem]">
                    <span>
                      <img src={YoutubeIcon} alt="" />
                    </span>
                    <span>Check our Tutorials</span>
                  </button>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <div>
                  <img src={leftSideImg} className="w-full" alt="" />
                </div>
              </div>
            </div> 
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default AuthSidebar;
