import { useState } from "react";
import { logo } from "../../../assets";
import {
  linkedinIcon,
  youtubeIcon,
  facebookIcon,
} from "../../../assets/dashboardAssets";
import RoundedButton from "../../../components/button/RoundedButton";
import { websiteLogo } from "../../../assets/website";

const Footer = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="w-full">
      <div className="sm:flex hidden justify-center items-center flex-col sm:w-full  xl:max-w-[1563px]">
        {isLogin ? (
          <div className="bg-green-100 w-full h-[264px] px-[56px] py-[60px] flex justify-center mt-4 heading-s flex-col items-center gap-4">
            <p className="paragraph text-para font-semibold leading-[31.55px]">
              Join Thousands of Entrepreneurs—Plan Your Success with
              VenturePlus!
            </p>

            <img src={websiteLogo} alt="" className="h-[30px] w-[290.08px]" />
            <div className="flex justify-between items-center w-full ml-16">
              <div className="flex justify-center items-center gap-2 flex-col">
                <p className="body-s">Find us on social media</p>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={facebookIcon}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                  <img src={youtubeIcon} alt="" className="w-[30px] h-[30px]" />
                  <img
                    src={linkedinIcon}
                    alt=""
                    className="w-[30px] h-[30px]"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center gap-1 flex-col">
                <p className="body-s text-para">Always happy to help</p>
                <p className="body-s text-para">info@ventureplus.com</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-green-100 w-full h-[264px] px-[56px] py-[60px] flex justify-between mt-4 gap-4">
            <div className="flex flex-col gap-2 justify-start items-start ml-16">
              <img src={websiteLogo} alt="" className="h-[30px]" />
              <p className="paragraph text-para font-semibold leading-[31.55px]">
                Join Thousands of Entrepreneurs—Plan Your Success with
                VenturePlus!
              </p>
              <div className="flex gap-2 text-title font-semibold">
                <p>Features</p>
                <p>Consultants</p>
                <p>Support</p>
                <p>Pricing</p>
                <p>Home</p>
                <p>About</p>
                <p>Example Plans</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-start items-end">
              <p className="paragraph text-title font-semibold leading-[31.55px]">
                Ready to level up your business?
              </p>
              <div className="flex items-center gap-3 mb-6">
                <RoundedButton title={"Log in"} type="secondary" sm />
                <RoundedButton title={"Start trial"} type="primary" sm />
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={facebookIcon} alt="" className="w-[30px] h-[30px]" />
                <img src={youtubeIcon} alt="" className="w-[30px] h-[30px]" />
                <img src={linkedinIcon} alt="" className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex sm:hidden justify-center items-center flex-col sm:w-full  xl:max-w-[1563px]">
        {isLogin ? (
          <div className="bg-green-100 w-full h-[264px] px-[56px] py-[60px] flex justify-center mt-4 heading-s flex-col items-center gap-4">
            <p className="paragraph text-para font-semibold leading-[31.55px]">
              Join Thousands of Entrepreneurs—Plan Your Success with
              VenturePlus!
            </p>

            <img src={websiteLogo} alt="" className="h-[20px] w-[260.08px]" />
            <p className="body-s">Find us on social media</p>
            <div className="flex justify-center items-center gap-2">
              <img src={facebookIcon} alt="" className="w-[30px] h-[30px]" />
              <img src={youtubeIcon} alt="" className="w-[30px] h-[30px]" />
              <img src={linkedinIcon} alt="" className="w-[30px] h-[30px]" />
            </div>
            <div className="flex justify-center items-center gap-1 flex-col">
              <p className="body-s text-para">Always happy to help</p>
              <p className="body-s text-para">info@ventureplus.com</p>
            </div>
          </div>
        ) : (
          <div className="bg-green-100 w-full h-[264px] px-[56px] py-[60px] flex justify-between mt-4 gap-4">
            <div className="flex flex-col gap-2 justify-start items-start ml-16">
              <img src={websiteLogo} alt="" className="h-[30px]" />
              <p className="paragraph text-para font-semibold leading-[31.55px]">
                Join Thousands of Entrepreneurs—Plan Your Success with
                VenturePlus!
              </p>
              <div className="flex gap-2 text-title font-semibold">
                <p>Features</p>
                <p>Consultants</p>
                <p>Support</p>
                <p>Pricing</p>
                <p>Home</p>
                <p>About</p>
                <p>Example Plans</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-start items-end">
              <p className="paragraph text-title font-semibold leading-[31.55px]">
                Ready to level up your business?
              </p>
              <div className="flex items-center gap-3 mb-6">
                <RoundedButton title={"Log in"} type="secondary" sm />
                <RoundedButton title={"Start trial"} type="primary" sm />
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={facebookIcon} alt="" className="w-[30px] h-[30px]" />
                <img src={youtubeIcon} alt="" className="w-[30px] h-[30px]" />
                <img src={linkedinIcon} alt="" className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
