import { useState } from "react";
import { Rnd } from "react-rnd";
import { temp1BulletPointIcon } from "../../../../../../../assets/PicthDeckTemplateAssets";
import RoundedButton from "../../../../../../../components/button/RoundedButton";
import useToggle from "../../../../../../../hooks/useToggle";
import DualListModal from "../DualListModal";

interface Props {
  listStyle: ListStyleT;
  isLeftEditable: boolean;
  isRightEditable: boolean;
  apiData: any;
  setSlideContent?: any;
  slideNo?: string;
  index: number;
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
}

type ListStyleT = "Box" | "Bullet" | "Horizontal";

export const disableDirections = {
  bottom: false,
  bottomLeft: false,
  bottomRight: false,
  left: false,
  right: false,
  top: false,
  topLeft: false,
  topRight: false,
};

export const enableDirections = {
  bottom: true,
  bottomLeft: true,
  bottomRight: true,
  left: true,
  right: true,
  top: true,
  topLeft: true,
  topRight: true,
};

const SlideDualList = ({
  listStyle,
  isLeftEditable,
  isRightEditable,
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
  const [descriptiveInput, setDescriptiveInput] = useState(false);
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
    }

    toggle();
  };

  return (
    <>
      {open && !viewOnly && (
        <DualListModal
          data={apiData.data}
          open={open && !viewOnly}
          toggle={toggle}
          saveModalData={saveModalData}
          isLeftEditable={isLeftEditable}
          isRightEditable={isRightEditable}
          descriptiveInput={descriptiveInput}
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
        disableDragging={viewOnly || hold}
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
        enableResizing={viewOnly ? disableDirections : enableDirections}
        minWidth={minWidth ? minWidth : 100}
        minHeight={minHeight ? minHeight : 100}
        bounds="parent"
        className={`rounded-lg overflow-hidden bg-[white] p-2 ${
          !viewOnly ? "hover:border hover:border-primary" : ""
        }`}
      >
        <div
          className="relative w-full h-full"
          onMouseEnter={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
        >
          {listStyle !== "Horizontal" ? (
            <div
              className={`flex gap-2 flex-col w-full rounded-xl overflow-hidden justify-center relative z-20 bg-[white] ${
                viewOnly
                  ? "cursor-default"
                  : hold
                  ? "cursor-pointer"
                  : "cursor-move"
              } `}
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
              {listStyle === "Box"
                ? apiData?.data?.map((item: any, i: number) => (
                    <div key={i} className="flex gap-2 items-center w-full">
                      <div className="bg-[#3F2305] px-4 py-2 w-[70%] ">
                        <p className="text-[white] font-medium body-s text-center whitespace-nowrap overflow-hidden w-full text-ellipsis">
                          {item.left}
                        </p>
                      </div>
                      <div className="bg-[#B0A695] px-4 py-2 h-full flex  w-[30%] items-center justify-center overflow-hidden">
                        <p className="text-[#3F2305] font-medium body-s whitespace-nowrap overflow-hidden w-[130px] text-ellipsis">
                          {item.right}
                        </p>
                      </div>
                    </div>
                  ))
                : apiData?.data?.map((item: any, i: number) => (
                    <div key={i} className="flex gap-2 items-center">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#B0A695] rounded-full flex items-center justify-center w-12 h-12 min-w-12 min-h-12 overflow-hidden">
                          <p className="text-[white] font-medium body-s text-center">
                            {item.left}
                          </p>
                        </div>

                        <p className="text-[#3F2305] font-semibold tracking-widest body-s w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.right}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          ) : (
            <div
              className={`flex p-2 rounded-xl overflow-hidden w-fit relative ${
                viewOnly
                  ? "cursor-default"
                  : hold
                  ? "cursor-pointer"
                  : "cursor-move"
              }`}
            >
              {!viewOnly && showEditButton && (
                <RoundedButton
                  title={"Edit"}
                  xs
                  bold
                  onClick={() => {
                    toggle();
                    setDescriptiveInput(true);
                  }}
                  className="!absolute top-2 right-2"
                />
              )}
              {apiData?.data?.map((item: any, i: number) => (
                <div key={i} className="flex flex-col gap-2 items-center p-3">
                  <img
                    src={temp1BulletPointIcon}
                    alt=""
                    className="h-20 mb-4"
                    draggable={false}
                  />
                  <h1 className="text-[#3F2305] paragraph font-bold">
                    {item.left}
                  </h1>
                  <p className="body-s font-light text-[#3F2305] text-center">
                    {item.right}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Rnd>
    </>
  );
};

export default SlideDualList;
