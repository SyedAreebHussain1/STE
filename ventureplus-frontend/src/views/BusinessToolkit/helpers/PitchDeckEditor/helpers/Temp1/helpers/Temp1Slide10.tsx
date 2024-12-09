import React from "react";
import { anonymousAvatar } from "../../../../../../../assets";
import { temp1TeamImg } from "../../../../../../../assets/PicthDeckTemplateAssets";
import SlideTeam from "../../EditableSlideContent/Temp1EditableComponents/SlideTeam";
import StaticComponent from "../../EditableSlideContent/StaticComponent";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide10 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_10`
          ? {
              [`slide_10`]: item[`slide_10`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_10`
            ? {
                [`slide_10`]: item[`slide_10`].map(
                  (innerItem: any, i: number) =>
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
    <div
      id={"Slide#13"}
      className="slide-wrapper overflow-hidden flex flex-col gap-2"
    >
      <SlideTeam
        apiData={slideContent?.[0]}
        slideNo={"slide_10"}
        index={0}
        setSlideContent={setSlideContent}
        onResize={handleResize}
        onDrag={handleDrag}
        minHeight={350}
        minWidth={500}
      />
      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={60}
        minWidth={100}
        index={1}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
          team
        </h1>
      </StaticComponent>
      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={60}
        minWidth={100}
        index={2}
      >
        <img src={temp1TeamImg} alt="" className="h-full" draggable={false} />
      </StaticComponent>
    </div>
  );
};

export default Temp1Slide10;
