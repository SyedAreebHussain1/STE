import { useState } from "react";
import {
  horizontalLine,
  leftHorizontalLine,
  solutionSlideImg,
  temp1Rocket,
  temp1TopleftImg,
} from "../../../../../../../assets/PicthDeckTemplateAssets";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import StaticComponent from "../../EditableSlideContent/StaticComponent";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide2 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_2`
          ? {
              [`slide_2`]: item[`slide_2`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_2`
            ? {
                [`slide_2`]: item[`slide_2`].map((innerItem: any, i: number) =>
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
    <>
      {/* problem statement */}
      <div id={"Slide#2"} className="slide-wrapper flex flex-col">
        <img
          src={temp1TopleftImg}
          alt=""
          className="absolute top-0 left-0 h-[150px]"
          draggable={false}
        />
        <div className="flex-1 flex">
          <div className="flex-1 flex gap-2 h-full p-4">
            {/* rocket image */}
            <StaticComponent
              onDrag={handleDrag}
              onResize={handleResize}
              slideContent={slideContent}
              minHeight={100}
              minWidth={100}
              index={2}
            >
              <img
                src={temp1Rocket}
                alt=""
                className=" object-cover"
                draggable={false}
              />
            </StaticComponent>

            <div className="flex flex-1 justify-center items-center gap-2 mt-6 mr-6">
              <SlideParagraph
                apiData={slideContent?.[0]}
                slideNo={"slide_2"}
                index={0}
                setSlideContent={setSlideContent}
                onDrag={handleDrag}
                onResize={handleResize}
              />
            </div>
          </div>
        </div>
        <StaticComponent
          onDrag={handleDrag}
          onResize={handleResize}
          slideContent={slideContent}
          minHeight={80}
          minWidth={100}
          index={3}
        >
          <div className="relative h-full w-full">
            <h1 className="text-[#3F2305] font-extrabold heading-l uppercase pl-10">
              Problem Statement
            </h1>
            <img
              src={horizontalLine}
              alt=""
              className="w-[70%] absolute right-0"
              draggable={false}
            />
          </div>
        </StaticComponent>
      </div>
      {/* solution */}
      <div id={"Slide#3"} className="slide-wrapper flex flex-col gap-2">
        <StaticComponent
          onDrag={handleDrag}
          onResize={handleResize}
          slideContent={slideContent}
          minHeight={60}
          minWidth={100}
          index={4}
        >
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
            Our Innovative Solutions
          </h1>
        </StaticComponent>

        <StaticComponent
          onDrag={handleDrag}
          onResize={handleResize}
          slideContent={slideContent}
          minHeight={80}
          minWidth={100}
          index={5}
        >
          <div className="flex  items-center justify-between w-full">
            <img
              src={leftHorizontalLine}
              alt=""
              className="w-[40%]"
              draggable={false}
            />

            <div className="rounded-full flex justify-center items-center p-2 border border-[#3F2305]">
              <img
                src={solutionSlideImg}
                alt=""
                className="h-20 w-20"
                draggable={false}
              />
            </div>

            <img
              src={leftHorizontalLine}
              alt=""
              className="w-[40%] rotate-180"
              draggable={false}
            />
          </div>
        </StaticComponent>

        <div className="flex-1">
          <SlideParagraph
            apiData={slideContent?.[1]}
            slideNo={"slide_2"}
            index={1}
            setSlideContent={setSlideContent}
            onDrag={handleDrag}
            onResize={handleResize}
          />
        </div>
      </div>
    </>
  );
};

export default Temp1Slide2;
