import React from "react";
import Container from "../../../../components/Container";
import AboutImage from "./../../../../assets/images/about.png";

const AboutUsSection = () => {
  return (
    <div className="mt-[11.938rem]">
      <Container>
        <div className="bg-[#F4F4F4] flex flex-col-reverse lg:flex-row">
          <div className="py-20 flex-1 flex justify-center flex-col items-center">
            <div>
              <h2 className="text-[#344054] text-[2.375rem] font-bold mb-2">
                About Us
              </h2>
              <p className="max-w-[512px] text-[#667085] text-xl font-medium leading-[2.044rem]">
                Discover your perfect home with us! As your trusted real estate
                partner, we specialize in turning dreams into addresses.Discover
                your perfect home with us! As your trusted real estate partner,
                we specialize in turning dreams into addresses.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full h-full">
              <img src={AboutImage} alt="" className="object-cover" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSection;
