import {
  temp1BottomImg,
  temp1BulletPointIcon,
  temp1RightImg,
  verticalLineUpsideDown,
} from "../../../../../../../assets/PicthDeckTemplateAssets";
import AreaChartComponent from "../../EditableSlideContent/charts/AreaChart";
import BarChartComponent from "../../EditableSlideContent/charts/BarChart";
import DonutChartComponent from "../../EditableSlideContent/charts/DonutChart";
import PieChartComponent from "../../EditableSlideContent/charts/PieChart";
import SemiCircleChartComponent from "../../EditableSlideContent/charts/SemiCircleChart";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import StaticComponent from "../../EditableSlideContent/StaticComponent";
import SlideDualList from "../../EditableSlideContent/Temp1EditableComponents/SlideDualList";
import { ChartTypes } from "./Temp1Slide3";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide4 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_4`
          ? {
              [`slide_4`]: item[`slide_4`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_4`
            ? {
                [`slide_4`]: item[`slide_4`].map((innerItem: any, i: number) =>
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
      <div id={"Slide#5"} className="slide-wrapper flex flex-col ">
        <StaticComponent
          onDrag={handleDrag}
          onResize={handleResize}
          slideContent={slideContent}
          minHeight={60}
          minWidth={100}
          index={4}
        >
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
            Traction
          </h1>
        </StaticComponent>

        <img
          src={temp1RightImg}
          alt=""
          className="absolute bottom-0 right-0 h-[150px]"
          draggable={false}
        />

        <div className="flex-1">
          <SlideParagraph
            apiData={slideContent?.[1]}
            slideNo={"slide_4"}
            index={1}
            setSlideContent={setSlideContent}
            onDrag={handleDrag}
            onResize={handleResize}
          />

          {slideContent?.[0]?.type === ChartTypes.DonutChart ? (
            <DonutChartComponent
              apiData={slideContent?.[0]}
              slideNo={"slide_4"}
              index={0}
              setSlideContent={setSlideContent}
              onDrag={handleDrag}
              onResize={handleResize}
              minWidth={400}
              minHeight={250}
            />
          ) : slideContent?.[0]?.type === ChartTypes.PieChart ? (
            <PieChartComponent
              apiData={slideContent?.[0]}
              slideNo={"slide_4"}
              index={0}
              setSlideContent={setSlideContent}
              onDrag={handleDrag}
              onResize={handleResize}
              minWidth={400}
              minHeight={250}
            />
          ) : slideContent?.[0]?.type === ChartTypes.SemiCircleChart ? (
            <SemiCircleChartComponent
              apiData={slideContent?.[0]}
              slideNo={"slide_4"}
              index={0}
              setSlideContent={setSlideContent}
              onDrag={handleDrag}
              onResize={handleResize}
              minWidth={400}
              minHeight={250}
            />
          ) : slideContent?.[0]?.type === ChartTypes.AreaChart ? (
            <AreaChartComponent
              apiData={slideContent?.[0]}
              slideNo={"slide_4"}
              index={0}
              setSlideContent={setSlideContent}
              onDrag={handleDrag}
              onResize={handleResize}
              minWidth={400}
              minHeight={250}
            />
          ) : slideContent?.[0]?.type === ChartTypes.BarChart ? (
            <BarChartComponent
              apiData={slideContent?.[0]}
              slideNo={"slide_4"}
              index={0}
              setSlideContent={setSlideContent}
              onDrag={handleDrag}
              onResize={handleResize}
              minWidth={400}
              minHeight={250}
            />
          ) : (
            "Chart type error"
          )}

          <SlideDualList
            isLeftEditable={true}
            isRightEditable={true}
            listStyle="Bullet"
            apiData={slideContent?.[2]}
            slideNo={"slide_4"}
            index={2}
            setSlideContent={setSlideContent}
            onDrag={handleDrag}
            onResize={handleResize}
            minWidth={425}
            minHeight={180}
          />
        </div>
      </div>
      <div id={"Slide#6"} className="slide-wrapper flex flex-col gap-2">
        <img
          src={temp1BottomImg}
          alt=""
          className="absolute bottom-0 h-[80px] w-full"
          draggable={false}
        />

        <SlideDualList
          isLeftEditable={true}
          isRightEditable={true}
          listStyle="Horizontal"
          apiData={slideContent?.[3]}
          slideNo={"slide_4"}
          index={3}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={860}
          minHeight={320}
        />
        <StaticComponent
          onDrag={handleDrag}
          onResize={handleResize}
          slideContent={slideContent}
          minHeight={60}
          minWidth={100}
          index={5}
        >
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
            MileStones
          </h1>
        </StaticComponent>
      </div>
    </>
  );
};

export default Temp1Slide4;
