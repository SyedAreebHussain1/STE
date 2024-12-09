import React, { useRef } from "react";
import Container from "../../../../components/Container";
import { Carousel } from "antd";
import { GrNext, GrPrevious } from "react-icons/gr";
import VideoModal from "./VideoModal";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const VideoSection = ({ data }) => {
  const videoRef = useRef();
  const primaryColor = useSelector(
    (state) =>
      state.getAgencyDetails.data?.data?.agencyDigitalCatalogue?.primaryColor
  );
  const fontColor = useSelector(
    (state) =>
      state.getAgencyDetails.data?.data?.agencyDigitalCatalogue?.fontColor
  );
  function next() {
    videoRef?.current?.next();
  }
  function prev() {
    videoRef?.current?.prev();
  }
  return (
    <div className="mt-[] w-full">
      {data?.agencyDigitalCatalogue?.catalogueVideo?.length > 0 && (
        <Container>
          {/* <div className=" items-center  mb-[3rem]">
            <h1 className="text-[#344054] text-3xl md:text-[2.5rem] font-semibold">
              Featured Videos
            </h1>
          </div> */}
          <div className="relative">
            <Carousel
              style={{ touchAction: "pan-y" }}
              autoplay
              infinite
              ref={videoRef}
            >
              {data?.agencyDigitalCatalogue?.catalogueVideo?.map((item) => {
                return (
                  <div
                    style={{ touchAction: "pan-y" }}
                    className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden w-full"
                    key={nanoid()}
                  >
                    <VideoModal data={item?.url} />
                  </div>
                );
              })}
            </Carousel>
            {data?.agencyDigitalCatalogue?.catalogueVideo?.length > 0 && (
              <div className="mt-[10px]">
                <div className="none md:block absolute top-[50%] translate-y-[-50%] lg:left-[-50px] xs:left-[10px] ">
                  <button
                    onClick={prev}
                    style={{
                      backgroundColor: primaryColor
                        ? `#${primaryColor}`
                        : "#7C47FF",
                    }}
                    className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                  >
                    <GrPrevious color={`#${fontColor}`} size={"20px"} />
                  </button>
                </div>
                <div className="none md:block absolute top-[50%] translate-y-[-50%] lg:right-[-50px] xs:right-[10px] ">
                  <button
                    onClick={next}
                    style={{
                      backgroundColor: primaryColor
                        ? `#${primaryColor}`
                        : "#7C47FF",
                    }}
                    className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                  >
                    <GrNext color={`#${fontColor}`} size={"20px"} />
                  </button>
                </div>
                <div
                  className="block md:hidden absolute  "
                  style={{ left: "100px" }}
                >
                  <button
                    onClick={prev}
                    style={{
                      backgroundColor: primaryColor
                        ? `#${primaryColor}`
                        : "#7C47FF",
                    }}
                    className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                  >
                    <GrPrevious color={`#${fontColor}`} size={"20px"} />
                  </button>
                </div>
                <div
                  className="block md:hidden absolute   "
                  style={{ right: "100px" }}
                >
                  <button
                    onClick={next}
                    style={{
                      backgroundColor: primaryColor
                        ? `#${primaryColor}`
                        : "#7C47FF",
                    }}
                    className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                  >
                    <GrNext color={`#${fontColor}`} size={"20px"} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      )}
    </div>
  );
};
export default VideoSection;
