import { verticalLineUpsideDown } from "../../../../../../../assets/PicthDeckTemplateAssets";
import AreaChartComponent from "../../EditableSlideContent/charts/AreaChart";
import BarChartComponent from "../../EditableSlideContent/charts/BarChart";
import DonutChartComponent from "../../EditableSlideContent/charts/DonutChart";
import PieChartComponent from "../../EditableSlideContent/charts/PieChart";
import SemiCircleChartComponent from "../../EditableSlideContent/charts/SemiCircleChart";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import StaticComponent from "../../EditableSlideContent/StaticComponent";
import SlideDualList from "../../EditableSlideContent/Temp1EditableComponents/SlideDualList";

export enum ChartTypes {
  "PieChart" = "PieChart",
  "DonutChart" = "DonutChart",
  "SemiCircleChart" = "SemiCircleChart",
  "BarChart" = "BarChart",
  "AreaChart" = "AreaChart",
}
interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide3 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_3`
          ? {
              [`slide_3`]: item[`slide_3`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_3`
            ? {
                [`slide_3`]: item[`slide_3`].map((innerItem: any, i: number) =>
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
    <div id={"Slide#4"} className="slide-wrapper flex">
      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={80}
        minWidth={100}
        index={3}
      >
        <div className="flex h-[100px] gap-2 items-end">
          <img
            src={verticalLineUpsideDown}
            alt=""
            className="h-full"
            draggable={false}
          />
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase whitespace-nowrap">
            Market opportunity
          </h1>
        </div>
      </StaticComponent>

      <SlideParagraph
        apiData={slideContent?.[1]}
        slideNo={"slide_3"}
        index={1}
        setSlideContent={setSlideContent}
        onDrag={handleDrag}
        onResize={handleResize}
      />

      {slideContent?.[0]?.type === ChartTypes.DonutChart ? (
        <DonutChartComponent
          apiData={slideContent?.[0]}
          slideNo={"slide_3"}
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
          slideNo={"slide_3"}
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
          slideNo={"slide_3"}
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
          slideNo={"slide_3"}
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
          slideNo={"slide_3"}
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
        isLeftEditable={false}
        isRightEditable={true}
        listStyle="Box"
        apiData={slideContent?.[2]}
        slideNo={"slide_3"}
        index={2}
        setSlideContent={setSlideContent}
        onDrag={handleDrag}
        onResize={handleResize}
        minWidth={420}
        minHeight={155}
      />
    </div>
  );
};

export default Temp1Slide3;
