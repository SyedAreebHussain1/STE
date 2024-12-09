import { useState } from "react";
import {
  AudiencesCardhoverImage,
  AudiencesCardImage1,
  websiteLogo,
  EntrepreneursImg,
  FreelanceImg,
  SMEImg,
} from "../../../../../assets/website";
import "./style.css";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { GrMenu } from "react-icons/gr";
import useToggle from "../../../../../hooks/useToggle";
import { Button, Drawer, Space } from "antd";
import { calc } from "antd/es/theme/internal";
import { useLocation, useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../../../utils/storage";

const NavBar = () => {
  const [open, toggle] = useToggle();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAudienceVisible, setIsAudienceVisible] = useState(false);
  const user = getFromStorage("user");

  return (
    <div className="flex justify-center relative bg-[#67a6a921]">
      <div className="w-full max-w-[1300px] relative">
        {/* on lg Screen it's show */}
        <div className=" items-center justify-between px-[30px] hidden lg:flex h-[64px] bg-[#FFFFFF] bg-opacity-75 rounded-full my-[20px] ">
          <div>
            <img
              src={websiteLogo}
              className="w-[200px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-center h-full">
            <div
              className="px-[20px] flex items-center h-full"
              onMouseEnter={() => setIsAudienceVisible(false)}
            >
              <a
                className={`relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer ${
                  location?.pathname == "/" ? "active" : ""
                }`}
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </div>

            <div
              className="px-[20px] flex items-center h-full"
              onMouseEnter={() => setIsAudienceVisible(false)}
            >
              <a
                className={`relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer ${
                  location?.pathname == "/About-us" ? "active" : ""
                }`}
                onClick={() => navigate("/About-us")}
              >
                About
              </a>
            </div>

            <div
              className="px-[20px] flex items-center h-full"
              onMouseEnter={() => setIsAudienceVisible(false)}
            >
              <a
                className={`relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer ${
                  location?.pathname == "/Feature" ? "active" : ""
                }`}
                onClick={() => navigate("/Feature")}
              >
                Features
              </a>
            </div>

            <div
              className="px-[20px] flex items-center h-full"
              onMouseEnter={() => setIsAudienceVisible(true)}
            >
              <a
                className={`relative inline-block px-[10px] py-[2px] cursor-pointer audienceNavBarButton`}
              >
                Solutions
              </a>
            </div>

            {/* commenting resources due to incomplete testing */}
            {/* <div
              className="px-[20px] flex items-center h-full"
              onMouseEnter={() => setIsAudienceVisible(false)}
            >
              <a
                className={`relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer ${
                  location?.pathname == "/Blogs-Website" ? "active" : ""
                }`}
                onClick={() => navigate("/Blogs-Website")}
              >
                Resources
              </a>
            </div> */}

            <div
              className="px-[20px] flex items-center h-full"
              onMouseEnter={() => setIsAudienceVisible(false)}
            >
              <a
                className={`relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer ${
                  location?.pathname == "/Pricing" ? "active" : ""
                }`}
                onClick={() => navigate("/Pricing")}
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {user ? (
              <button
                className="px-[16px] py-[6px] bg-[#CCE1E2] border-[1px] border-[#CCE1E2] rounded-full font-semibold text-[15px]"
                onClick={() => navigate("/login")}
              >
                Go To Dashboard
              </button>
            ) : (
              <>
                <button
                  className="px-[16px] py-[6px] border-[1px] border-[#000] rounded-full font-semibold text-[15px]"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
                <button
                  className="px-[16px] text-[#F8FAFC] py-[6px] bg-[#016A70] border-[1px] border-[#CCE1E2] rounded-full font-semibold text-[15px]"
                  onClick={() => navigate("/signup")}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
        <div
          className={`w-max max-w-full audienceMainContainer  bg-[#E0EBEE] rounded-2xl absolute top-[78px] left-1/2 -translate-x-1/2 z-20 p-[35px] px-[40px]  xs:hidden lg:block ${
            isAudienceVisible ? " opacity-100 z-30" : " opacity-0 -z-10"
          }`}
          onMouseLeave={() => setIsAudienceVisible(false)}
        >
          <h1 className="text-[29px] font-semibold leading-[37.76px]">
            Audiences
          </h1>
          <p className="text-[20px] leading-[29.95px] font-normal max-w-[806px] mt-[10px]">
            Tailored Solutions for Startups, Freelancers, SMEs, Intrapreneurs,
            and Visionaries to Scale and Succeed
          </p>

          <div
            className={`${
              !isAudienceVisible ? "delay-500 invisible" : "visible"
            } flex-wrap gap-3 flex  justify-center w-full`}
          >
            <Cards
              heading={"Aspiring Entrepreneurs"}
              image={AudiencesCardImage1}
              redirectToUrl="/aspiring-entrepreneurs"
            />
            <Cards
              heading={"Freelancers/ Solopreneurs"}
              image={FreelanceImg}
              redirectToUrl="/freelancers"
            />
            <Cards
              heading={"Small and Medium Enterprises"}
              image={SMEImg}
              redirectToUrl="/small-and-medium-enterprises"
            />
            <Cards
              heading={"Business Minded Students"}
              image={EntrepreneursImg}
              redirectToUrl="/students"
            />
            <Cards
              heading={"Startup Founders"}
              image={AudiencesCardImage1}
              redirectToUrl="/startups"
            />
          </div>
        </div>

        {/* on xs Screen it's show */}
        <div className={`flex-col w-full flex lg:hidden bg-[#67a6a921]`}>
          <div className="flex items-center justify-between px-[30px] py-[15px] h-[64px] bg-[#FFFFFF] my-[20px] mx-[10px] rounded-full">
            <div className="cursor-pointer text-[20px]" onClick={toggle}>
              {open ? <RxCross2 /> : <GrMenu />}
            </div>
            <div>
              <img
                src={websiteLogo}
                className="w-[160px]"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
          <div
            className={`bg-[#fff] w-full absolute top-[85px] z-50 WebsiteMenu flex   flex-col  ${
              open ? "WebsiteMenuOpen" : "WebsiteMenuClose"
            }`}
          >
            <div className="flex items-center flex-col mt-[30px] gap-4">
              <div className="px-[20px] flex items-center">
                <a
                  className="relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </div>

              <div className="px-[25px] flex items-center">
                <a
                  className="relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer"
                  onClick={() => navigate("/About-us")}
                >
                  About
                </a>
              </div>
              <div className="px-[25px] flex items-center">
                <a
                  className="relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer"
                  onClick={() => navigate("/Feature")}
                >
                  Features
                </a>
              </div>
              <div className="px-[25px] flex items-center">
                <a
                  className="relative inline-block px-[10px] py-[2px] hover-effect cursor-pointer"
                  onClick={() => navigate("/Pricing")}
                >
                  Pricing
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center mt-[20px]">
              {user ? (
                <button
                  className="px-[16px] py-[6px] bg-[#CCE1E2] border-[1px] border-[#CCE1E2] rounded-full font-semibold text-[15px]"
                  onClick={() => navigate("/login")}
                >
                  Go To Dashboard
                </button>
              ) : (
                <>
                  <button
                    className="px-[16px] py-[6px] border-[1px] border-[#000] rounded-full font-semibold text-[15px]"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                  </button>
                  <button
                    className="px-[16px] py-[6px] bg-[#CCE1E2] border-[1px] border-[#CCE1E2] rounded-full font-semibold text-[15px]"
                    onClick={() => navigate("/signup")}
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
const Cards = ({
  heading,
  image,
  redirectToUrl,
}: {
  heading: string;
  image: string;
  redirectToUrl: string;
}) => {
  const navigator = useNavigate();
  return (
    <div
      className={`bg-[#F8FAFC] w-[210px] h-[210px] flex flex-col rounded-xl p-[24px] border-[1px] border-[#E3E7EF] mt-[20px] audienceCard cursor-pointer `}
      onClick={() => navigator(redirectToUrl)}
    >
      <div className="h-full w-full flex justify-end ">
        <img
          src={AudiencesCardhoverImage}
          className="w-[20px] h-[20px] audienceCardArrow"
        />
      </div>
      <div>
        <img src={image} className="w-[50px] h-[50px]" />
        <p className="text-[#212838] text-[18px] leading-[24px] font-semibold mt-[10px]">
          {heading}
        </p>
      </div>
    </div>
  );
};
