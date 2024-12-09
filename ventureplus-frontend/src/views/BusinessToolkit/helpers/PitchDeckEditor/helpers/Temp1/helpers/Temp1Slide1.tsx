import React, { useState } from "react";
import useToggle from "../../../../../../../hooks/useToggle";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import {
  temp1IntroImg,
  verticalLine,
} from "../../../../../../../assets/PicthDeckTemplateAssets";
import SlideImage from "../../EditableSlideContent/SlideImage";
import { Rnd } from "react-rnd";
import { Button } from "antd";
import StaticComponent from "../../EditableSlideContent/StaticComponent";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide1 = ({ slideContent, setSlideContent }: Props) => {
  const [open, toggle] = useToggle();
  const [hold, setHold] = useState(false);

  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_1`
          ? {
              [`slide_1`]: item[`slide_1`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_1`
            ? {
                [`slide_1`]: item[`slide_1`].map((innerItem: any, i: number) =>
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
    <div id={"Slide#1"} className="slide-wrapper flex gap-2 ">
      {/* the index will be same as apidata's index no. */}
      <SlideImage
        apiData={slideContent?.[0]}
        slideNo={"slide_1"}
        index={0}
        setSlideContent={setSlideContent}
        onResize={handleResize}
        onDrag={handleDrag}
      />

      <SlideParagraph
        apiData={slideContent?.[1]}
        slideNo={"slide_1"}
        index={1}
        setSlideContent={setSlideContent}
        onResize={handleResize}
        onDrag={handleDrag}
      />

      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={80}
        minWidth={100}
        index={2}
      >
        <div className="flex bottom-0 right-[320px] h-[80px] gap-2">
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
            introduction
          </h1>
          <img src={verticalLine} alt="" />
        </div>
      </StaticComponent>
    </div>
  );
};

export default Temp1Slide1;
