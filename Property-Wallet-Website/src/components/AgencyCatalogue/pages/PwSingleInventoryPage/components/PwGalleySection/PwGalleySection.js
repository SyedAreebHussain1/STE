import React from "react";
import Container from "../../../../components/Container";
import PwInterestedForm from "./PwInterestedForm";
import { useModal } from "../../../../hooks/useModal";
import GalleryModal from "../../../SingleInventoryPage/components/GalleryModal/GalleryModal";

const PwGalleySection = ({ data }) => {
  const [visibleGalleryModal, toggleGalleryModal] = useModal();
  return (
    <>
      {visibleGalleryModal && data?.data?.propertyWalletProjectPhoto ? (
        <GalleryModal
          visible={visibleGalleryModal}
          toggle={toggleGalleryModal}
          data={data?.data?.propertyWalletProjectPhoto}
        />
      ) : (
        ""
      )}
      <Container>
        <div className="flex flex-col lg:flex-row pt-16 pb-36 gap-8">
          <div className="flex gap-4 flex-col lg:flex-row w-full">
            <div
              className="h-full relative cursor-pointer"
              onClick={toggleGalleryModal}
            >
              <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[615px] relative">
                <img
                  src={`${data?.data?.propertyWalletProjectPhoto?.[0]?.photo}`}
                  alt=""
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[615px] object-cover"
                />
              </div>
              <div
                //  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 h-fit mt-2 mb-2"
                className="flex-wrap flex   md:justify-start gap-1 h-fit mt-1 mb-1"
              >
                {data?.data?.propertyWalletProjectPhoto.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-[110px] h-[120.75px]  md:w-[156px] md:h-[144.75px] overflow-hidden mt-1 mb-1"
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
            <PwInterestedForm data={data} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PwGalleySection;
