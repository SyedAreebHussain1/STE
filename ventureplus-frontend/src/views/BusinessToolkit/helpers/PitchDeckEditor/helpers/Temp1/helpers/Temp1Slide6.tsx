import React from "react";
import { temp1BottomImg } from "../../../../../../../assets/PicthDeckTemplateAssets";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import StaticComponent from "../../EditableSlideContent/StaticComponent";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide6 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_6`
          ? {
              [`slide_6`]: item[`slide_6`].map((innerItem: any, i: number) =>
                i === index
                  ? {
                      ...innerItem,
                      position: { x: data.x, y: data.y },
                    }
                  : innerItem
              ),
            }
          : item
      )
    );
  };

  const handleResize = (
    e: any,
    data: any,
    ref: any,
    delta: any,
    position: any,
    index: number
  ) => {
    {
      setSlideContent((prevData: any) =>
        prevData.map((item: any) =>
          Object.keys(item)[0] === `slide_6`
            ? {
                [`slide_6`]: item[`slide_6`].map((innerItem: any, i: number) =>
                  i === index
                    ? {
                        ...innerItem,
                        dimensions: {
                          width:
                            delta.width === 0
                              ? innerItem.dimensions.width
                              : innerItem.dimensions.width + delta.width,
                          height:
                            delta.height === 0
                              ? innerItem.dimensions.height
                              : innerItem.dimensions.height + delta.height,
                        },
                        position,
                      }
                    : innerItem
                ),
              }
            : item
        )
      );
    }
  };

  return (
    <div id={"Slide#8"} className="slide-wrapper flex flex-col gap-2">
      <img
        src={temp1BottomImg}
        alt=""
        className="absolute bottom-0 h-[80px] w-full"
        draggable={false}
      />
      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={60}
        minWidth={100}
        index={1}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Business Model
        </h1>
      </StaticComponent>

      <SlideParagraph
        apiData={slideContent?.[0]}
        slideNo={"slide_6"}
        index={0}
        setSlideContent={setSlideContent}
        onResize={handleResize}
        onDrag={handleDrag}
      />
    </div>
  );
};

export default Temp1Slide6;
