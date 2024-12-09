import React from "react";
import { Row, Col } from "antd";
import Container from "../../../../components/Container";
import InterestedForm from "./InterestedForm";
import InterestedFormMobile from "./InterestedFormMobile";

const GallerySection = () => {
  return (
    <div className=" pt-16 pb-36">
      <Container>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex-grow h-full relative">
            <img
              src="https://placehold.co/156x156"
              alt=""
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[615px] object-cover"
            />
            <div className="absolute top-6 right-8">
              <span className="rounded-[36px] bg-[#FF3A44] text-[1rem] text-white px-[20.5px] py-[2px] ">
                Hot
              </span>
              <span className="rounded-[36px] bg-[#176FEA] text-[1rem] text-white px-[20.5px] py-[2px] ml-[10px] ">
                Rent
              </span>
            </div>
            <div className="absolute bottom-6 right-8">
              <span className="text-[0.875rem] text-[#4A5568] rounded-[49px] font-semibold bg-[#F5F5F5] px-[16px] py-[11px]">
                Residential Plot
              </span>
            </div>
            <div className="hidden md:block">
              <InterestedForm />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-4 h-fit">
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[156px] h-[144.75px] overflow-hidden">
              <img
                src="https://placehold.co/156x144"
                alt=""
                width={156}
                height={144.75}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <InterestedFormMobile />
        </div>
      </Container>
    </div>
  );
};

export default GallerySection;
