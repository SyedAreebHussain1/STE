import { Carousel } from "antd";
import React, { useState } from "react";
import FlipCard from "./FlipCard";

interface Props {
  form: any;
  previewImg: any;
  customPrintRef: any;
  logoURL: any;
}

const BusinessCardCarousel: React.FC<Props> = ({
  form,
  previewImg,
  customPrintRef,
}: any) => {
  const [currSlide, setCurrSlide] = useState(0);

  const onChange = (currentSlide: number) => {
    setCurrSlide(currentSlide);
  };

  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <Carousel afterChange={onChange}>
        {[1, 2, 3].map((card, index) => (
          <FlipCard
            key={index}
            form={form}
            index={index}
            previewImg={previewImg}
            customPrintRef={customPrintRef}
            currSlide={currSlide}
          />
        ))}
      </Carousel>
      <p className="text-center mt-8 text-[#27a3a3]">Click to flip the card</p>
    </div>
  );
};

export default BusinessCardCarousel;
