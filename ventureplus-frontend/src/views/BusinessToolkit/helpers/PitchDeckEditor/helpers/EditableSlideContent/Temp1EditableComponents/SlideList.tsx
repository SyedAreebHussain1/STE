import React, { useState } from "react";
import { Rnd } from "react-rnd";
import RoundedButton from "../../../../../../../components/button/RoundedButton";
import useToggle from "../../../../../../../hooks/useToggle";
import SlideListModal from "../SlideListModal";
import { disableDirections, enableDirections } from "./SlideDualList";

type Props = {
  apiData: any;
  slideNo?: string;
  setSlideContent?: React.Dispatch<React.SetStateAction<any[]>>;
  index?: any;
  onResize?: (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => void;
  onDrag?: (e: any, data: any, index: number) => void;
  minWidth?: number;
  minHeight?: number;
  viewOnly?: boolean;
};

const SlideList = ({
  apiData,
  setSlideContent,
  slideNo,
  index,
  onResize,
  onDrag,
  minWidth,
  minHeight,
  viewOnly,
}: Props) => {
  const [open, toggle] = useToggle();
  const [hold, sethold] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);

  const saveModalData = (modalData: any) => {
    if (setSlideContent) {
      setSlideContent((prevData: any) =>
        prevData.map((item: any) =>
          Object.keys(item)[0] === slideNo
            ? {
                [slideNo]: item[slideNo].map((innerItem: any, i: number) =>
                  i === index ? { ...innerItem, data: modalData } : innerItem
                ),
              }
            : item
        )
      );

      toggle();
    }
  };
  return (
    <>
      {open && !viewOnly && (
        <SlideListModal
          data={apiData?.data}
          open={open && !viewOnly}
          saveModalData={saveModalData}
          toggle={toggle}
        />
      )}

      <Rnd
        size={{
          width: apiData?.dimensions?.width,
          height: apiData?.dimensions?.height,
        }}
        position={{
          x: apiData?.position?.x,
          y: apiData?.position?.y,
        }}
        enableResizing={viewOnly ? disableDirections : enableDirections}
        disableDragging={hold || viewOnly}
        onDragStop={(e, data) => {
          if (onDrag) {
            onDrag(e, data, index);
          }
        }}
        onResizeStop={(e, data, ref, delta, position) => {
          if (onResize) {
            onResize(e, data, ref, delta, position, index);
          }
        }}
        minWidth={minWidth ? minWidth : 100}
        minHeight={minHeight ? minHeight : 100}
        bounds="parent"
        className={` rounded-lg overflow-hidden bg-[white] ${
          !viewOnly ? "hover:border hover:border-primary" : ""
        } `}
      >
        <div
          className="w-full flex gap-2 justify-between"
          onMouseEnter={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
        >
          <div
            className={`flex gap-6 flex-col  p-2 rounded-xl ${
              !viewOnly ? "cursor-move " : "cursor-default"
            }`}
          >
            {showEditButton && !viewOnly && (
              <RoundedButton
                title={"Edit"}
                xs
                bold
                onClick={() => toggle()}
                className="!absolute top-2 right-2"
              />
            )}
            <div className="bg-[#3F2305] px-4 py-2 w-full mb-4">
              <p className="text-[white] font-medium body-s text-center tracking-widest uppercase">
                {apiData?.data?.heading}
              </p>
            </div>
            {apiData?.data?.items?.map((item: any, i: number) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="min-w-7 min-h-7 bg-[#3F2305] rounded-full"></div>
                <p className="body-s font-medium tracking-wider text-[#3F2305]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default SlideList;
