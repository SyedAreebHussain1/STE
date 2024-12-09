import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import {
  GoalImage,
  WebPageAnimation,
  StarsSvg,
  AWSsvg,
  ProductHuntSvg,
} from "../../../../../assets/website";
import RoundedButton from "../../../../../components/button/RoundedButton";

const Banner2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-[30px] pb-[30px] md:pb-[0] md:pt-[50px] bg-[#67a6a921] flex justify-center overflow-hidden">
      <div className="pl-[0] md:pl-[50px] w-full max-w-[1400px]">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <div className="w-full md:w-[80%] flex flex-col items-center md:items-start">
            <div className="text-[34px] md:text-[60px] px-[20px] md:p-[0px] font-semibold text-[#212838] leading-tight text-center md:text-left">
              Business Planning Made Easier!
              {/* <br />{" "}
          <p className="text-[#016A70] text-[20px]">Powered by AI.</p> */}
            </div>
            <p className="text-[18px] md:text-[25px] px-[20px] md:px-[0] leading-[20px] md:leading-[53px] text-[#212838] font-medium max-w-[760px] text-center md:text-left">
              Join 100+ entrepreneurs planning their next successful startup!
              <br />
              Just answer the questions, we will do the rest!{" "}
            </p>
          </div>
          <div className="w-full md:w-[20%] flex justify-center md:justify-end">
            <img src={StarsSvg} className="w-[100%] md:block hidden" />
          </div>
        </div>

        <div className="flex w-[100%] mt-[8px] px-[20px] md:p-[0] md:mt-[2px] ">
          <div className="flex flex-col md:w-[30%] w-[100%] z-20 items-center">
            <RoundedButton
              title={"Plan Your Business Today!"}
              type="primary"
              className="px-[55px] py-[20px] md:py-[24px] w-fit md:w-full text-[15px] md:text-[20px] mt-[20px] md:mt-0 !cursor-pointer "
              sm
              onClick={() => navigate("/signup")}
            />
            <div className="flex flex-col h-full gap-8">
              <div className="flex mt-20 w-full ml-5 justify-center">
                <h2 className="text-[#4A5366] font-bold text-lg pl-5 mr-11">
                  Featured on
                </h2>
              </div>
              <div className="flex  w-full">
                <div className="pb-4 border-b-2 w-full items-center flex flex-col justify-center">
                  <div>
                    <img src={AWSsvg} />
                  </div>
                  <span className="text-[#040615] font-medium">
                    AWS startups
                  </span>
                </div>
                <div className="pl-4 pb-4 border-l-2 border-b-2 w-full flex flex-col items-center  ">
                  <div className="pb-[15px]">
                    <img src={ProductHuntSvg} />
                  </div>
                  <span className="text-[#040615] font-medium ">
                    Product Hunt
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-center">
                <div>
                  <Rate
                    allowHalf
                    defaultValue={4.8}
                    style={{ color: "#016A70" }}
                  />
                </div>
                <span className="text-[#040615] text-sm font-semibold">
                  4.8
                </span>
                <span className="text-[#667085] font-semibold text-sm">
                  Average user rating
                </span>
              </div>
            </div>
          </div>
          <div className="w-[70%] hidden md:block">
            <img
              src={WebPageAnimation}
              className="pl-28 md:w-[95%]  hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner2;
