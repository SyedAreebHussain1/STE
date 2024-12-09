import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import AliceCarousel from "react-alice-carousel";
import { useState } from "react";
import CardWhatCientSay from "./CardWhatCientSay";
import clientimage1 from "../../../assets/clientImage1.svg";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3 },
};
const WhatClientSay = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const items = [
    <div className="w-full px-2">
      <CardWhatCientSay
        imageUrl={clientimage1}
        title="Charles William"
        text="They are great. They did exactly what  needed.
Loved working with them."
      />
    </div>,
    <div className="w-full px-2">
      <CardWhatCientSay
        imageUrl={clientimage1}
        title="Charles William"
        text="They are great. They did exactly what  needed.
Loved working with them."
      />
    </div>,
    <div className="w-full px-2">
      <CardWhatCientSay
        imageUrl={clientimage1}
        title="Charles William"
        text="They are great. They did exactly what  needed.
Loved working with them."
      />
    </div>,
    <div className="w-full px-2">
      <CardWhatCientSay
        imageUrl={clientimage1}
        title="Charles William"
        text="They are great. They did exactly what  needed.
Loved working with them."
      />
    </div>,
  ];
  return (
    <div>
      <span className="text-[3.378rem] text-[#FFFFFF] font-semibold ">
        What our Clients say!
      </span>
      <div className="w-[450px] h-[4px] p-0 m-0 flex gap-10">
        <div className="w-[70%] bg-[#CCFE06] h-full" />
        <div className="w-[15%] bg-[#CCFE06] h-full" />
      </div>
      <div>
        <div className="mt-10 relative">
          <AliceCarousel
            animationDuration={2000}
            mouseTracking
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            keyboardNavigation={true}
            renderPrevButton={() => {
              return (
                <div className="absolute top-1/3 -left-20 text-2xl text-white cursor-pointer">
                  {" "}
                  <LeftOutlined />{" "}
                </div>
              );
            }}
            renderNextButton={() => {
              return (
                <div className="absolute top-1/3 -right-20 text-2xl text-white cursor-pointer">
                  {" "}
                  <RightOutlined />
                </div>
              );
            }}
            infinite
          />
        </div>
      </div>
    </div>
  );
};

export default WhatClientSay;
