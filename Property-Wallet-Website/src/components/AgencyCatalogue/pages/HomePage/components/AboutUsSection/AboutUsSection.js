import React from "react";
import Container from "../../../../components/Container";
import AboutImage from "./../../../../assets/images/about-bg.svg";
import VideoSection from "../VideoSection/VideoSection";

const AboutUsSection = ({ data, primaryColor }) => {
  if (data?.agencyDigitalCatalogue?.catalogueVideo?.length > 0) {
    return (
      <div
        className="mt-[5rem] bg-[#C806060D]  py-[4.375rem] sm:mt-[3rem] relative overflow-hidden"
        id="about"
        style={{
          backgroundColor: `#${primaryColor}0D`,
        }}
      >
        <img
          alt=""
          src={AboutImage}
          className="absolute right-0 bottom-0 lg:h-full -z-10 lg:w-[50%]"
        />
        <Container>
          <div
            className=" flex items-center flex-col lg:flex-row"
            style={{ justifyContent: "space-around" }}
          >
            <div className="py-20 flex-1 flex justify-center flex-col items-center">
              <div className=" px-3">
                <h2 className="text-[#344054]  text-[2.375rem] font-bold mb-2 text-center lg:text-left">
                  About Us
                </h2>
                <p className="max-w-[512px] text-[#667085] text-xl font-medium leading-[2.044rem]  text-center lg:text-left">
                  {data?.agencyDigitalCatalogue?.aboutAgency}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full lg:w-[50%] p-[5px]  lg:p-[30px] mr-[0px] lg:mr-[5px]">
              <div className="w-full h-full">
                <VideoSection data={data} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div
      className="mt-[5rem] bg-[#C806060D] py-[4.375rem]  sm:mt-[3rem]  relative overflow-hidden"
      id="about"
      style={{
        backgroundColor: `#${primaryColor}0D`,
      }}
    >
      <img
        alt=""
        src={AboutImage}
        className="absolute right-0 bottom-0 lg:h-full -z-10 lg:w-[50%]"
      />
      <Container>
        <div
          className=" flex flex-col lg:flex-row"
          style={{ justifyContent: "space-around" }}
        >
          <div className="py-20 flex-1 flex justify-center flex-col items-center">
            <div className=" px-3">
              <h2 className="text-[#344054]  text-[2.375rem] font-bold mb-2">
                About Us
              </h2>
              <p className="max-w-[512px] text-[#667085] text-xl font-medium leading-[2.044rem]">
                {data?.agencyDigitalCatalogue?.aboutAgency &&
                  data?.agencyDigitalCatalogue?.aboutAgency}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
