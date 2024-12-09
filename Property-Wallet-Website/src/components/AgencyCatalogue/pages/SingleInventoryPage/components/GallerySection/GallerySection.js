import React from "react";
import Container from "../../../../components/Container";
import InterestedForm from "./InterestedForm";
import BookAppointment from "./../../../../components/BookAppointment/BookAppointment";
import { useModal } from "./../../../../hooks/useModal";
import GalleryModal from "../GalleryModal/GalleryModal";

const GallerySection = ({ data }) => {
  const [visible, toggle] = useModal();
  const [visibleGalleryModal, toggleGalleryModal] = useModal();
  return (
    <>
      {visible && (
        <BookAppointment
          visible={visible}
          toggle={toggle}
          id={data?.data?.profile?.userId}
        />
      )}
      {visibleGalleryModal && data?.data?.projectPhotos ? (
        <GalleryModal
          visible={visibleGalleryModal}
          toggle={toggleGalleryModal}
          data={data?.data?.projectPhotos}
        />
      ) : (
        ""
      )}
      <Container>
        <div className="flex flex-col lg:flex-row pt-16 pb-36 gap-8">
          <div className="w-full">
            <div className="w-full relative cursor-pointer">
              <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[615px] relative">
                <img
                  onClick={toggleGalleryModal}
                  src={`${data?.data?.projectPhotos?.[0]?.photo}`}
                  alt=""
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[615px] object-cover"
                />
                <div className="absolute top-6 right-8">
                  {data?.data?.inventory?.[0]?.hotListing?.length > 0 && (
                    <span className="rounded-[36px] bg-[#FF3A44] text-[1rem] text-white px-[20.5px] py-[2px] ">
                      Hot
                    </span>
                  )}

                  <span className="rounded-[36px] bg-[#176FEA] text-[1rem] text-white px-[20.5px] py-[2px] ml-[10px] ">
                    {data?.data?.inventory?.[0]?.inVentoryType == "ForSell"
                      ? "For Sell"
                      : "For Rent"}
                  </span>
                </div>

                <div className="absolute bottom-6 right-7">
                  <span className="text-[0.875rem] text-[#4A5568] rounded-[49px] font-semibold bg-[#F5F5F5] px-[16px] py-[11px]">
                    {data?.data?.inventory?.[0]?.projectSubType?.title}
                  </span>
                </div>
              </div>
              <div
                className="flex-wrap flex  md:justify-start gap-1 h-fit mt-1 mb-1"
                // className="flex-wrap flex justify-between  md:justify-start gap-1 h-fit mt-1 mb-1"
                // className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:!grid-cols-4 lg:grid-cols-4 gap-1 h-fit mt-2 mb-2"
              >
                {data?.data?.projectPhotos.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="  w-[110px] h-[120.75px]  md:w-[156px] md:h-[144.75px] overflow-hidden mt-1 mb-1"
                      onClick={toggleGalleryModal}
                    >
                      <img
                        src={`${item?.photo && item?.photo}`}
                        alt=""
                        className="w-[110px] h-[120.75px]  md:w-[156px] md:h-[144.75px]"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full">
            <InterestedForm data={data} toggle={toggle} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default GallerySection;
