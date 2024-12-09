import { Carousel, Modal } from "antd";
import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const GalleryModal = ({ visible, toggle, data }) => {
  const galleryRef = useRef();
  function next() {
    galleryRef?.current?.next();
  }
  function prev() {
    galleryRef?.current?.prev();
  }
  return (
    <Modal
      className="GalleryModal"
      //   title={<h3 className="text-[18px] font-semibold">Book Appointment</h3>}
      open={visible}
      onCancel={toggle}
      footer={null}
      centered={true}
      width={719}
    >
      <div className="relative">
        <Carousel ref={galleryRef}>
          {data?.map((item) => {
            return (
              <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden w-full" key={nanoid()}>
                <img
                  src={item?.photo}
                  className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]"
                  alt=""
                />
              </div>
            );
          })}
        </Carousel>
        {data?.length > 1 && (
          <>
            <div className="absolute top-[50%] translate-y-[-50%] lg:left-[-50px] xs:left-[10px] invisible lg:!visible">
              <button
                onClick={prev}
                className="bg-[#000]  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
              >
                <GrPrevious color="#fff" size={"20px"} />
              </button>
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] lg:right-[-50px] xs:right-[10px] invisible lg:!visible">
              <button
                onClick={next}
                className="bg-[#000]  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
              >
                <GrNext color="#fff" size={"20px"} />
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default GalleryModal;
