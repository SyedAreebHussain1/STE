import AreaChartComponent from "../../EditableSlideContent/charts/AreaChart";
import BarChartComponent from "../../EditableSlideContent/charts/BarChart";
import DonutChartComponent from "../../EditableSlideContent/charts/DonutChart";
import PieChartComponent from "../../EditableSlideContent/charts/PieChart";
import SemiCircleChartComponent from "../../EditableSlideContent/charts/SemiCircleChart";
import SlideParagraph from "../../EditableSlideContent/SlideParagraph";
import StaticComponent from "../../EditableSlideContent/StaticComponent";
import { ChartTypes } from "./Temp1Slide3";

interface Props {
  slideContent: any;
  setSlideContent: any;
}

const Temp1Slide8 = ({ slideContent, setSlideContent }: Props) => {
  const handleDrag = (e: any, data: any, index: number) => {
    let updatedPosition = slideContent;
    updatedPosition = updatedPosition.map((content: any, i: number) => {
      if (i === index) {
        return { ...content, position: { x: data.x, y: data.y } };
      } else return content;
    });

    setSlideContent((prevData: any) =>
      prevData.map((item: any) =>
        Object.keys(item)[0] === `slide_8`
          ? {
              [`slide_8`]: item[`slide_8`].map((innerItem: any, i: number) =>
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
          Object.keys(item)[0] === `slide_8`
            ? {
                [`slide_8`]: item[`slide_8`].map((innerItem: any, i: number) =>
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
    <div id={"Slide#11"} className="slide-wrapper flex flex-col gap-2">
      <StaticComponent
        onDrag={handleDrag}
        onResize={handleResize}
        slideContent={slideContent}
        minHeight={60}
        minWidth={100}
        index={3}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Financial projections
        </h1>
      </StaticComponent>

      <SlideParagraph
        apiData={slideContent?.[0]}
        slideNo={"slide_8"}
        index={0}
        setSlideContent={setSlideContent}
        onResize={handleResize}
        onDrag={handleDrag}
      />

      {slideContent?.[1]?.type === ChartTypes.DonutChart ? (
        <DonutChartComponent
          apiData={slideContent?.[1]}
          slideNo={"slide_8"}
          index={1}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[1]?.type === ChartTypes.PieChart ? (
        <PieChartComponent
          apiData={slideContent?.[1]}
          slideNo={"slide_8"}
          index={1}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[1]?.type === ChartTypes.SemiCircleChart ? (
        <SemiCircleChartComponent
          apiData={slideContent?.[1]}
          slideNo={"slide_8"}
          index={1}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[1]?.type === ChartTypes.AreaChart ? (
        <AreaChartComponent
          apiData={slideContent?.[1]}
          slideNo={"slide_8"}
          index={1}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[1]?.type === ChartTypes.BarChart ? (
        <BarChartComponent
          apiData={slideContent?.[1]}
          slideNo={"slide_8"}
          index={1}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : (
        "Chart type error"
      )}

      {slideContent?.[2]?.type === ChartTypes.DonutChart ? (
        <DonutChartComponent
          apiData={slideContent?.[2]}
          slideNo={"slide_8"}
          index={2}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[2]?.type === ChartTypes.PieChart ? (
        <PieChartComponent
          apiData={slideContent?.[2]}
          slideNo={"slide_8"}
          index={2}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[2]?.type === ChartTypes.SemiCircleChart ? (
        <SemiCircleChartComponent
          apiData={slideContent?.[2]}
          slideNo={"slide_8"}
          index={2}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[2]?.type === ChartTypes.AreaChart ? (
        <AreaChartComponent
          apiData={slideContent?.[2]}
          slideNo={"slide_8"}
          index={2}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : slideContent?.[2]?.type === ChartTypes.BarChart ? (
        <BarChartComponent
          apiData={slideContent?.[2]}
          slideNo={"slide_8"}
          index={2}
          setSlideContent={setSlideContent}
          onDrag={handleDrag}
          onResize={handleResize}
          minWidth={400}
          minHeight={250}
        />
      ) : (
        "Chart type error"
      )}
    </div>
  );
};

export default Temp1Slide8;
