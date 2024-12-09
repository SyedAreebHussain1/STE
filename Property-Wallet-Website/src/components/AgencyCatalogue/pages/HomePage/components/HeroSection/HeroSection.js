import React, { useRef } from "react";
import { Carousel } from "antd";
import Container from "../../../../components/Container";
import HeroImage from "./../../../../assets/images/hero-image.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";


const HeroSection = ({ data, primaryColor }) => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  const fontColor = useSelector(
    (state) =>
      state.getAgencyDetails.data?.data?.agencyDigitalCatalogue?.fontColor
  );
  const heroRef = useRef();
  function next() {
    heroRef?.current?.next();
  }
  function prev() {
    heroRef?.current?.prev();
  }
  return (
    <div>
      {data?.agencyDigitalCatalogue?.cataloguePhoto?.length > 0 && (
        <Container>
          <div className="relative">
            <Carousel afterChange={onChange} autoplay ref={heroRef}>
              {data?.agencyDigitalCatalogue?.cataloguePhoto?.map((item) => {
                return (
                  <div
                    className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden w-full"
                    key={nanoid()}
                  >
                    <img
                      src={item?.url}
                      className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
                      alt=""
                    />
                  </div>
                );
              })}
            </Carousel>
            {data?.agencyDigitalCatalogue?.cataloguePhoto?.length > 1 && (
              <>
                <div className="absolute top-[50%] translate-y-[-50%] lg:left-[-50px] xs:left-[10px] invisible lg:!visible">
                  <button
                    onClick={prev}
                    style={{
                      background: primaryColor ? `#${primaryColor}` : "#7C47FF",
                    }}
                    className="w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                  >
                    <GrPrevious color={`#${fontColor}`} size={"20px"} />
                  </button>
                </div>
                <div className="absolute top-[50%] translate-y-[-50%] lg:right-[-50px] xs:right-[10px] invisible lg:!visible">
                  <button
                    onClick={next}
                    style={{
                      background: primaryColor ? `#${primaryColor}` : "#7C47FF",
                    }}
                    className=" w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                  >
                    <GrNext color={`#${fontColor}`} size={"20px"} />
                  </button>
                </div>
              </>
            )}
          </div>
        </Container>
      )}
    </div>
  );
};

export default HeroSection;
