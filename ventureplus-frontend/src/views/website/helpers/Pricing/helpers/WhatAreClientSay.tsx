import { useState } from "react";
import {
  reviewBgWebsite,
  WhatAreClientSayCardBgImage1,
  WhatAreClientSayCardBgImage2,
  WhatAreClientSayImage1,
  WhatClientSayArrowImage,
} from "../../../../../assets/website";

const WhatAreClientSay = () => {
  const [current, setCurrent] = useState(2);
  const [position, setPosition] = useState<string | null>("right");
  function pre() {
    setCurrent((pre) => (pre <= 1 ? 3 : pre - 1));
    setPosition("left");
  }
  function next() {
    setCurrent((pre) => (pre >= 3 ? 1 : pre + 1));
    setPosition("right");
  }
  return (
    <div
      className="h-[780px] w-full flex justify-center bg-[#FFFFDD]"
      style={{
        backgroundImage: `url(${reviewBgWebsite})`,
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[1300px] h-full flex flex-col relative items-center px-[20px]">
        <div className="flex flex-col items-center mt-[70px]">
          <h1 className="heading-xl  font-bold !leading-[55px]">
            What our Clients say!
          </h1>
          <div className="flex justify-center gap-[26px]">
            <div className="h-[3px] w-[280px] bg-[#34888D] rounded-[10px] ml-[25px]"></div>
            <div className="h-[3px] w-[35px] bg-[#34888D] rounded-[10px]"></div>
          </div>
        </div>
        <div className="relative  w-full h-full flex justify-between items-center">
          <div onClick={pre} className="w-[60px] rotate-180 cursor-pointer">
            <img src={WhatClientSayArrowImage} />
          </div>
          <div className="relative w-[400px] h-[450px]">
            <Cards
              className={
                current == 1 && position == "right"
                  ? "card1 z-[1]"
                  : current == 1 && position == "left"
                  ? "card1 z-[5]"
                  : current == 3 && position == "left"
                  ? "card3 z-[2]"
                  : current == 3 && position == "right"
                  ? "card3 z-[5]"
                  : "card2 z-[3]"
              }
              heading={"Sarah Patel"}
              heading2={"E-commerce business owner"}
              image={WhatAreClientSayImage1}
              para={
                "As an e-commerce business owner, refining strategies and setting financial goals was challenging. The AI-driven business plan from Venture Plus helped me create a compelling pitch and achieve faster growth than I expected with my business!"
              }
            />
            <Cards
              className={
                current == 1
                  ? "card2 z-[2]"
                  : current == 2 && position == "right"
                  ? "card3 z-[5]"
                  : current == 2 && position == "left"
                  ? "card3 z-[2]"
                  : current == 3 && position == "left"
                  ? "card1 z-[5]"
                  : "card1"
              }
              heading={"Ahmed Khan"}
              heading2={" Tech Startup - CEO"}
              image={WhatAreClientSayImage1}
              para={
                "When we needed to validate our ideas and secure funding, Venture Plus was there to guide us. From idea validation to pitch creation and financial projections, it saved us hours of work and played a key role in securing our first round of funding."
              }
            />
            <Cards
              className={
                current == 1 && position == "right"
                  ? "card3 z-[2]"
                  : current == 1 && position == "left"
                  ? "card3 z-[1]"
                  : current == 2 && position == "left"
                  ? "card1 z-[6]"
                  : current == 2 && position == "right"
                  ? "card1 z-[1]"
                  : "card2 z-[2]"
              }
              heading={"Lisa Thompson"}
              heading2={"Accounting Services"}
              image={WhatAreClientSayImage1}
              para={
                "For my accounting firm, having a scalable business plan and a professional pitch deck was critical. With the roadmap feature of Venture Plus, we stayed on track with our growth goals, making it an invaluable tool for service-based businesses like ours."
              }
            />
          </div>
          <div onClick={next} className="w-[60px] cursor-pointer">
            <img src={WhatClientSayArrowImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAreClientSay;

const Cards = ({
  className,
  heading,
  heading2,
  image,
  para,
}: {
  className: string;
  heading: string;
  heading2: string;
  image: string;
  para: string;
}) => {
  return (
    <div
      className={`w-[400px] h-[450px] rounded-3xl  px-[32px] pt-[50px] ${className}`}
    >
      <div className="relative w-full">
        <img src={image} className="w-[102] h-[102]" />
        <img
          src={WhatAreClientSayCardBgImage1}
          className="w-[131.42px] h-[103.78px] absolute -right-3 -top-[20px] cardBgImage1"
        />
        <img
          src={WhatAreClientSayCardBgImage2}
          className="w-[131.42px] h-[103.78px] absolute -right-3 -top-[20px] cardBgImage2"
        />

        <h1 className=" CardWhatAreClientH1 text-[24.26px] leading-[26.4px] font-semibold mt-[16px]">
          {heading}
        </h1>
        <h2 className="text-[17.01px]  CardWhatAreClientH2 leading-[18.51px] font-normal">
          {heading2}
        </h2>
      </div>
      <p className="mt-[16px] text-[19.23px] CardWhatAreClientp leading-[23.85px]  font-normal">
        {para}
      </p>
    </div>
  );
};
