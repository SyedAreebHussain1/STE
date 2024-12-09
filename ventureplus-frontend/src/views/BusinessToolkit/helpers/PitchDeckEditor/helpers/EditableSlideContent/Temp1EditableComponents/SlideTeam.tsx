import { Rnd } from "react-rnd";
import { anonymousAvatar } from "../../../../../../../assets";
import SlideTeamModal from "../SlideTeamModal";
import useToggle from "../../../../../../../hooks/useToggle";
import { useState } from "react";
import RoundedButton from "../../../../../../../components/button/RoundedButton";
import { disableDirections, enableDirections } from "./SlideDualList";

interface Props {
  apiData: any;
  setSlideContent?: any;
  slideNo?: string;
  index: number;
  minWidth?: number;
  minHeight?: number;
  onResize?: (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => void;
  onDrag?: (e: any, data: any, index: number) => void;
  viewOnly?: boolean;
}

const SlideTeam = ({
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
  const [newUserImages, setNewUserImages] = useState<any>({});

  const saveModalData = (modalData: any) => {
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
  };

  return (
    <>
      {open && (
        <SlideTeamModal
          data={apiData?.data}
          open={open}
          saveModalData={saveModalData}
          toggle={toggle}
          newUserImages={newUserImages}
          setNewUserImages={setNewUserImages}
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
        enableResizing={viewOnly ? disableDirections : enableDirections}
        onDragStop={(e, data) => onDrag && onDrag(e, data, index)}
        onResizeStop={(e, data, ref, delta, position) =>
          onResize && onResize(e, data, ref, delta, position, index)
        }
        minWidth={minWidth ? minWidth : 100}
        minHeight={minHeight ? minHeight : 100}
        bounds="parent"
        className={`p-2 rounded-lg overflow-hidden bg-[white] ${
          !viewOnly ? "hover:border hover:border-primary" : ""
        }`}
      >
        <div
          className={`flex flex-col justify-evenly relative h-full w-[${
            apiData?.dimensions?.width
          }] ${viewOnly ? "cursor-default" : "!cursor-move"}`}
          onMouseEnter={() => setShowEditButton(true)}
          onMouseLeave={() => setShowEditButton(false)}
        >
          {!viewOnly && showEditButton && (
            <RoundedButton
              title={"Edit"}
              xs
              bold
              onClick={() => toggle()}
              className="!absolute top-2 right-2"
            />
          )}

          <div className="flex justify-around flex-wrap m-2">
            {apiData?.data?.map((member: any, i: number) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center gap-1"
              >
                <img
                  src={
                    newUserImages[i.toString()]
                      ? newUserImages[i.toString()]
                      : member?.imgURL
                  }
                  alt=""
                  className="w-24 h-24 rounded-full object-cover"
                  draggable={false}
                />
                <h1 className="text-body paragraph font-semibold">
                  {member?.name}
                </h1>
                <p className="text-body body-s font-medium">
                  {member?.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default SlideTeam;
