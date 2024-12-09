import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CircularProgressBar from "./CircularProgressBar";

const CardOfOfferOfServices = (props: any) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative w-full  h-[734px] rounded-[2rem] overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-full  h-full rounded-3xl pt-[45px] pb-[30px] px-[50px] ${
          props.styling.backColor
        }  absolute z-10 transition-all duration-500 ${
          hover ? "opacity-0" : "opacity-[100%]"
        }`}
      >
        <div>
          <p className="w-max  opacity-[70%] text-[1.578rem] font-semibold tracking-[70%] text-white pb-[30px] border-[rgba(217, 217, 217, 0.54)] border-b-[2px]">
            {props.count}
          </p>
        </div>
        <div
          className={`mt-[53px] w-[122px] h-[122px] border-4 ${props.styling.CircleBorder} rounded-full flex items-center justify-center`}
        >
          <img src={props?.image} alt="services image" />
        </div>
        <div className="mt-[52px]">
          <h1 className="text-[2.748rem] font-semibold text-white">
            {props.title}
          </h1>
          <p className="mt-[20px] text-[#CCFE06] text-[1.111rem] tracking-[5px] ">
            Learn more
          </p>
        </div>
      </div>
      <div
        className={`w-full h-full relative transition-all  duration-500 ${
          hover ? "  opacity-[100%]" : "opacity-[0%] "
        }`}
      >
        <div
          className="w-full h-full pt-[45px] pb-[30px] px-[50px] object-contain flex flex-col justify-between"
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
          <div>
            <div>
              <p
                className={`w-max text-[1.578rem]  font-semibold tracking-[70%] text-white pb-[30px] border-[rgba(217, 217, 217, 0.54)] border-b-[2px]  transition-all duration-300 z-20 ${
                  hover ? "  pr-[15px] opacity-[100%]" : "opacity-[70%] "
                }`}
              >
                {props.count}
              </p>
            </div>
            <div
              className={`mt-[53px] w-[122px] h-[122px] border-4 ${
                props.styling.CircleBorder
              } rounded-full flex items-center justify-center relative ${
                hover ? "serviceWeProvideProgressBar" : ""
              }`}
            >
              <CircularProgressBar total={10} obtain={10} />
              <img src={props?.image} alt="services image" />
            </div>
            <div className="mt-[52px]">
              <h1 className="text-[2.748rem] font-semibold text-white">
                {props.title}
              </h1>
              <p className="mt-[20px] text-white text-[1.076rem] font-semibold  ">
                {props.explanation}
              </p>
              <div className="text-white text-[1.076rem]  font-semibold mt-[20px]">
                <ul className="list-disc list-inside ">
                  {props.bulletPoints &&
                    props.bulletPoints.map((item: any, i: any) => (
                      <li className="leading-[1.612rem]  " key={i}>
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`border-[2px] border-[#FFFFFF]  flex justify-between text-white ${
              hover ? "  z-30" : "z-0 "
            }`}
          >
            <p className="flex-1 text-[0.968rem] font-semibold text-center py-[15px]">
              LEARN MORE
            </p>
            <button
              className="bg-[#ffffff7d] px-[30px] text-[1rem]"
              onClick={() => {
                console.log("hello");
              }}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOfOfferOfServices;
