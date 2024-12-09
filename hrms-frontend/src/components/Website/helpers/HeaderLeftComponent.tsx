import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const HeaderLeftComponent = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="w-[731px] rounded-3xl overflow-hidden flex flex-col">
      <div className="h-[80px] relative">
        <div
          className={`w-[45%] bg-[#7C4BDE] h-[110px] flex justify-center item-center text-[white] gap-[1px] pr-[8%] absolute headerLeftComponentfirstButtonClipPath ${
            active == 1 ? "z-[3]" : "z-[1]"
          } `}
          onClick={() => {
            setActive(1);
          }}
        >
          <h1 className="text-[1.569rem] font-semibold pt-[26px] pb-[23px] ">
            HR
          </h1>
          <div className="flex items-center h-[80px] pt-[2px]">
            <FaPlus className="w-[19px] h-[19px]" />
          </div>
        </div>
        <div
          className={`w-[50%] bg-[#CCFE06] h-[110px] flex justify-center item-center text-[#1E1E1E] absolute left-[25%] headerLeftComponentsecondButtonClipPath ${
            active == 2 ? "z-[3]" : "z-[2]"
          } `}
          onClick={() => {
            setActive(2);
          }}
        >
          <h1 className="text-[1.569rem] font-bold pt-[26px] pb-[23px]">
            SALES
          </h1>
          <div className="flex items-center h-[80px] pt-[2px]">
            <FaPlus className="w-[19px] h-[19px]" />
          </div>
        </div>
        <div
          className={`w-[45%] bg-[#3ED0D6] h-[110px] flex justify-center item-center text-[#1E1E1E] gap-[1px] absolute left-[55.5%] pl-[70px] headerLeftComponentthiredButtonClipPath ${
            active == 3 ? "z-[3]" : "z-[1]"
          } `}
          onClick={() => {
            setActive(3);
          }}
        >
          <h1 className="text-[1.569rem] font-bold pt-[26px] pb-[23px]">
            VENTURE
          </h1>
          <div className="flex items-center h-[80px] pt-[2px]">
            <FaPlus className="w-[19px] h-[19px]" />
          </div>
        </div>
      </div>
      <div className={`flex-1 w-full relative rounded-3xl overflow-hidden`}>
        {/* //first */}

        <div
          className={` h-full w-full absolute  ${
            active == 1 ? "z-[3]" : "z-[1]"
          } `}
        >
          <div className=" bg-[#7C4BDE] h-full w-full flex flex-col justify-between">
            <div> ////</div>
            <div className="px-[38px]">
              <div className="pb-[26px] flex justify-between items-center pt-[20px] ">
                <div className="flex items-center gap-[6px] text-white">
                  <h1 className="text-[2.978rem] ">10Y+</h1>
                  <p className="text-[0.881rem] w-[180px] leading-[1.057rem] pt-[2px] ">
                    OF DESIGN-DRIVEN PRODUCT DEVELOPMENT
                  </p>
                </div>
                <div>
                  <h2 className="text-[0.881rem] font-semibold py-[10px] px-[31px] bg-white rounded-full">
                    LETS CHAT
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //second */}
        <div
          className={` h-full w-full absolute ${
            active == 2 ? "z-[3]" : "z-[2]"
          } `}
        >
          <div className=" bg-[#CCFE06]  h-full w-full flex flex-col justify-between">
            <div> ////</div>
            <div className="px-[38px]">
              <div className="pb-[26px] flex justify-between items-center pt-[20px] ">
                <div className="flex items-center gap-[6px] text-[#1E1E1E]">
                  <h1 className="text-[2.978rem] ">10Y+</h1>
                  <p className="text-[0.881rem] w-[180px] leading-[1.057rem] pt-[2px] ">
                    OF DESIGN-DRIVEN PRODUCT DEVELOPMENT
                  </p>
                </div>
                <div>
                  <h2 className="text-[0.881rem] font-semibold py-[10px] px-[31px] bg-white rounded-full">
                    LETS CHAT
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //thired */}
        <div
          className={`  h-full absolute w-full ${
            active == 3 ? "z-[3]" : "z-[1]"
          } `}
        >
          <div className=" bg-[#3ED0D6]  h-full w-full flex flex-col justify-between">
            <div> ////</div>
            <div className="px-[38px]">
              <div className="pb-[26px] flex justify-between items-center pt-[20px] ">
                <div className="flex items-center gap-[6px] text-[#1E1E1E]">
                  <h1 className="text-[2.978rem] ">10Y+</h1>
                  <p className="text-[0.881rem] w-[180px] leading-[1.057rem] pt-[2px] ">
                    OF DESIGN-DRIVEN PRODUCT DEVELOPMENT
                  </p>
                </div>
                <div>
                  <h2 className="text-[0.881rem] font-semibold py-[10px] px-[31px] bg-white rounded-full">
                    LETS CHAT
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeftComponent;
