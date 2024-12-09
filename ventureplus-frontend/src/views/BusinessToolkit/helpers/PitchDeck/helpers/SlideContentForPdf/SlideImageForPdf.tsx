import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import RoundedButton from "../../../../../../components/button/RoundedButton";

interface Props {
  apiData: any;
}

const SlideImageForPdf = ({ apiData }: Props) => {
  const resizeDirections = {
    bottom: false,
    bottomLeft: false,
    bottomRight: false,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false,
  };
  return (
    <Rnd
      enableResizing={resizeDirections}
      size={{
        width: apiData?.dimensions?.width,
        height: apiData?.dimensions?.height,
      }}
      position={{
        x: apiData?.position?.x,
        y: apiData?.position?.y,
      }}
      disableDragging={true}
      disableResize
      minWidth={100}
      minHeight={100}
      bounds="parent"
      className="rounded-lg overflow-hidden"
    >
      <div className="relative h-full w-full">
        <img
          draggable={false}
          src={apiData?.data?.image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </Rnd>
  );
};

export default SlideImageForPdf;
