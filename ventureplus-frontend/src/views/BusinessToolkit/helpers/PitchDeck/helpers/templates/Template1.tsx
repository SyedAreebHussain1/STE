import { useEffect, useState } from "react";
import {
  horizontalLine,
  leftHorizontalLine,
  solutionSlideImg,
  temp1BottomImg,
  temp1LeftBottomImg,
  temp1MainImg,
  temp1RightImg,
  temp1Rocket,
  temp1TeamImg,
  temp1TopleftImg,
  verticalLine,
  verticalLineUpsideDown
} from "../../../../../../assets/PicthDeckTemplateAssets";
import AreaChartComponent from "../../../PitchDeckEditor/helpers/EditableSlideContent/charts/AreaChart";
import BarChartComponent from "../../../PitchDeckEditor/helpers/EditableSlideContent/charts/BarChart";
import DonutChartComponent from "../../../PitchDeckEditor/helpers/EditableSlideContent/charts/DonutChart";
import PieChartComponent from "../../../PitchDeckEditor/helpers/EditableSlideContent/charts/PieChart";
import SemiCircleChartComponent from "../../../PitchDeckEditor/helpers/EditableSlideContent/charts/SemiCircleChart";
import SlideDualList from "../../../PitchDeckEditor/helpers/EditableSlideContent/Temp1EditableComponents/SlideDualList";
import SlideList from "../../../PitchDeckEditor/helpers/EditableSlideContent/Temp1EditableComponents/SlideList";
import SlideTeam from "../../../PitchDeckEditor/helpers/EditableSlideContent/Temp1EditableComponents/SlideTeam";
import { ChartTypes } from "../../../PitchDeckEditor/helpers/Temp1/helpers/Temp1Slide3";
import SlideImageForPdf from "../SlideContentForPdf/SlideImageForPdf";
import SlideParagraphForPdf from "../SlideContentForPdf/SlideParagraphForPdf";
import StaticComponentForPdf from "../SlideContentForPdf/StaticComponentForPdf";
import { agenda } from "./templateData";

type Props = {
  data: any;
  slideContent: any[];
};

const Template1 = ({ data, slideContent }: Props) => {
  const [content, setContent] = useState<any>([]);

  useEffect(() => {
    if (data) setContent(data[0]?.content);
  }, [data]);

  console.log(slideContent?.[1]?.slide_2?.[2]);

  const slides = [
    //coverpage
    <div id={"Slide1"}
      className="slide-wrapper break-after-page flex items-center justify-center flex-col gap-6 overflow-hidden "
    >
      <img src={temp1MainImg} alt="" className="absolute left-0 top-0 h-full" />
      <h1 className="text-[#3F2305] font-extrabold heading-xl uppercase">
        Company name
      </h1>
      <h1 className="text-[#3F2305] font-extrabold heading-xl uppercase">
        Pitch deck
      </h1>
      <div className="flex absolute bottom-0 right-6 h-[100px] gap-2">
        <div className="flex flex-col items-end">
          <p className="text-[#3F2305] font-medium body-s">
            www.reallygreatsite.com
          </p>
          <p className="text-[#3F2305] font-medium body-s">
            hello@reallygreatsite.com
          </p>
          <p className="text-[#3F2305] font-medium body-s">
            123 Anywhere Street., Any City
          </p>
        </div>
        <img src={verticalLine} alt="" />
      </div>
    </div>,
    //agenda
    <div id={"Slide2"} className="slide-wrapper break-after-page flex items-end overflow-hidden">
      <div className="flex absolute top-0 left-6 h-[100px] gap-2 items-end">
        <img src={verticalLineUpsideDown} alt="" className="h-full" />
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
          Agenda
        </h1>
      </div>
      <div className="w-full flex justify-between px-6">
        <div className="flex flex-col justify-between p-4 gap-3 mb-5">
          {agenda.slice(0, 5).map((item, i) => (
            <div key={i} className="flex gap-2 items-center">
              <div className="bg-[#776B5D] rounded-full h-10 w-10 flex items-center justify-center font-semibold text-[white] paragraph">
                {i + 1}
              </div>
              <p className="text-[#3F2305] font-medium uppercase whitespace-nowrap body-s">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between p-4 gap-3 mb-5">
          {agenda.slice(5).map((item, i) => (
            <div className="flex gap-2 items-center">
              <div className="bg-[#776B5D] rounded-full h-10 w-10 flex items-center justify-center font-semibold text-[white] paragraph">
                {i + 6}
              </div>
              <p className="text-[#3F2305] font-medium uppercase body-s">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    //slide#01
    <div id={"Slide3"} className="slide-wrapper break-after-page flex gap-2 ">
      {/* the index will be same as apidata's index no. */}
      <SlideImageForPdf apiData={slideContent?.[0]?.slide_1?.[0]} />

      <SlideParagraphForPdf apiData={slideContent?.[0]?.slide_1?.[1]} />

      <StaticComponentForPdf
        slideContent={slideContent?.[0]?.slide_1?.[2]}
        index={2}
      >
        <div className="flex bottom-0 right-[320px] h-[80px] gap-2">
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
            introduction
          </h1>
          <img src={verticalLine} alt="" />
        </div>
      </StaticComponentForPdf>
    </div>,
    //slide#02
    <div id={"Slide4"} className="slide-wrapper break-after-page flex flex-col">
      <img
        src={temp1TopleftImg}
        alt=""
        className="absolute top-0 left-0 h-[150px]"
        draggable={false}
      />
      <div className="flex-1 flex">
        <div className="flex-1 flex gap-2 h-full p-4">
          {/* rocket image */}
          <StaticComponentForPdf
            slideContent={slideContent?.[1]?.slide_2?.[2]}
            index={2}
          >
            <img
              src={temp1Rocket}
              alt=""
              className=" object-cover"
              draggable={false}
            />
          </StaticComponentForPdf>

          <div className="flex flex-1 justify-center items-center gap-2 mt-6 mr-6">
            <SlideParagraphForPdf apiData={slideContent?.[1]?.slide_2?.[0]} />
          </div>
        </div>
      </div>
      <StaticComponentForPdf
        slideContent={slideContent?.[1]?.slide_2?.[3]}
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
      </StaticComponentForPdf>
    </div>,
    <div id={"Slide5"} className="slide-wrapper break-after-page flex flex-col gap-2">
      <StaticComponentForPdf
        slideContent={slideContent?.[1]?.slide_2?.[4]}
        index={4}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Our Innovative Solutions
        </h1>
      </StaticComponentForPdf>

      <StaticComponentForPdf
        slideContent={slideContent?.[1]?.slide_2?.[5]}
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
      </StaticComponentForPdf>

      <div className="flex-1">
        <SlideParagraphForPdf apiData={slideContent?.[1]?.slide_2?.[1]} />
      </div>
    </div>,
    //slide#03
    <div id={"Slide6"} className="slide-wrapper break-after-page flex">
      <StaticComponentForPdf
        slideContent={slideContent?.[2]?.slide_3?.[3]}
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
      </StaticComponentForPdf>

      <SlideParagraphForPdf apiData={slideContent?.[2]?.slide_3?.[1]} />

      {slideContent?.[2]?.slide_3?.[0]?.type === ChartTypes.DonutChart ? (
        <DonutChartComponent
          apiData={slideContent?.[2]?.slide_3?.[0]}
          index={0}
          viewOnly
        />
      ) : slideContent?.[2]?.slide_3?.[0]?.type === ChartTypes.PieChart ? (
        <PieChartComponent
          apiData={slideContent?.[2]?.slide_3?.[0]}
          index={0}
          viewOnly
        />
      ) : slideContent?.[2]?.slide_3?.[0]?.type ===
        ChartTypes.SemiCircleChart ? (
        <SemiCircleChartComponent
          apiData={slideContent?.[2]?.slide_3?.[0]}
          index={0}
          viewOnly
        />
      ) : slideContent?.[2]?.slide_3?.[0]?.type === ChartTypes.AreaChart ? (
        <AreaChartComponent
          apiData={slideContent?.[2]?.slide_3?.[0]}
          index={0}
          viewOnly
        />
      ) : slideContent?.[2]?.slide_3?.[0]?.type === ChartTypes.BarChart ? (
        <BarChartComponent
          apiData={slideContent?.[2]?.slide_3?.[0]}
          index={0}
          viewOnly
        />
      ) : (
        "Chart type error"
      )}

      <SlideDualList
        listStyle="Box"
        isLeftEditable={false}
        isRightEditable={true}
        apiData={slideContent?.[2]?.slide_3?.[2]}
        index={2}
        viewOnly
      />
    </div>,
    //slide#04
    <div id={"Slide7"} className="slide-wrapper break-after-page flex flex-col ">
      <StaticComponentForPdf
        slideContent={slideContent?.[3]?.slide_4?.[4]}
        index={4}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Traction
        </h1>
      </StaticComponentForPdf>

      <img
        src={temp1RightImg}
        alt=""
        className="absolute bottom-0 right-0 h-[150px]"
        draggable={false}
      />

      <div className="flex-1">
        <SlideParagraphForPdf apiData={slideContent?.[3]?.slide_4?.[1]} />

        {slideContent?.[3]?.slide_4?.[0]?.type === ChartTypes.DonutChart ? (
          <DonutChartComponent
            apiData={slideContent?.[3]?.slide_4?.[0]}
            index={0}
            viewOnly
          />
        ) : slideContent?.[3]?.slide_4?.[0]?.type === ChartTypes.PieChart ? (
          <PieChartComponent
            apiData={slideContent?.[3]?.slide_4?.[0]}
            index={0}
            viewOnly
          />
        ) : slideContent?.[3]?.slide_4?.[0]?.type ===
          ChartTypes.SemiCircleChart ? (
          <SemiCircleChartComponent
            apiData={slideContent?.[3]?.slide_4?.[0]}
            index={0}
            viewOnly
          />
        ) : slideContent?.[3]?.slide_4?.[0]?.type === ChartTypes.AreaChart ? (
          <AreaChartComponent
            apiData={slideContent?.[3]?.slide_4?.[0]}
            index={0}
            viewOnly
          />
        ) : slideContent?.[3]?.slide_4?.[0]?.type === ChartTypes.BarChart ? (
          <BarChartComponent
            apiData={slideContent?.[3]?.slide_4?.[0]}
            index={0}
            viewOnly
          />
        ) : (
          "Chart type error"
        )}

        <SlideDualList
          isLeftEditable={true}
          isRightEditable={true}
          listStyle="Bullet"
          apiData={slideContent?.[3]?.slide_4?.[2]}
          index={2}
          viewOnly
        />
      </div>
    </div>,
    <div id={"Slide8"} className="slide-wrapper break-after-page flex flex-col gap-2">
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
        apiData={slideContent?.[3]?.slide_4?.[3]}
        slideNo={"slide_4"}
        index={3}
        viewOnly
      />
      <StaticComponentForPdf
        slideContent={slideContent?.[3]?.slide_4?.[5]}
        index={5}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          MileStones
        </h1>
      </StaticComponentForPdf>
    </div>,
    //slide#05
    <div id={"Slide9"} className="slide-wrapper break-after-page flex gap-2 overflow-hidden">
      <SlideList apiData={slideContent?.[4]?.slide_5?.[0]} index={0} viewOnly />
      <SlideList apiData={slideContent?.[4]?.slide_5?.[1]} index={1} viewOnly />
    </div>,
    //slide#06
    <div id={"Slide10"} className="slide-wrapper break-after-page flex flex-col gap-2">
      <img
        src={temp1BottomImg}
        alt=""
        className="absolute bottom-0 h-[80px] w-full"
        draggable={false}
      />
      <StaticComponentForPdf
        slideContent={slideContent?.[5]?.slide_6?.[1]}
        index={1}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Business Model
        </h1>
      </StaticComponentForPdf>

      <SlideParagraphForPdf apiData={slideContent?.[5]?.slide_6?.[0]} />
    </div>,
    //slide#07
    <div id={"Slide11"} className="slide-wrapper break-after-page flex flex-col gap-2">
      <img
        src={temp1BottomImg}
        alt=""
        className="absolute bottom-0 h-[80px] w-full"
        draggable={false}
      />
      <StaticComponentForPdf
        slideContent={slideContent?.[6]?.slide_7?.[2]}
        index={2}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Customer Acquisition STRATEGY
        </h1>
      </StaticComponentForPdf>

      <SlideParagraphForPdf apiData={slideContent?.[6]?.slide_7?.[0]} />
    </div>,

    <div id={"Slide12"} className="slide-wrapper break-after-page flex flex-col gap-2">
      <img
        src={temp1BottomImg}
        alt=""
        className="absolute bottom-0 h-[80px] w-full"
        draggable={false}
      />
      <StaticComponentForPdf
        slideContent={slideContent?.[6]?.slide_7?.[3]}
        index={3}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Scaling Strategy
        </h1>
      </StaticComponentForPdf>

      <SlideDualList
        isLeftEditable={true}
        isRightEditable={true}
        listStyle="Horizontal"
        apiData={slideContent?.[6]?.slide_7?.[1]}
        index={1}
        viewOnly
      />
    </div>,
    //slide#08
    <div id={"Slide13"} className="slide-wrapper break-after-page flex flex-col gap-2">
      <StaticComponentForPdf
        slideContent={slideContent?.[7]?.slide_8?.[3]}
        index={3}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase mx-auto">
          Financial projections
        </h1>
      </StaticComponentForPdf>

      <SlideParagraphForPdf apiData={slideContent?.[7]?.slide_8?.[0]} />

      {slideContent?.[7]?.slide_8?.[1]?.type === ChartTypes.DonutChart ? (
        <DonutChartComponent
          apiData={slideContent?.[7]?.slide_8?.[1]}
          index={1}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[1]?.type === ChartTypes.PieChart ? (
        <PieChartComponent
          apiData={slideContent?.[7]?.slide_8?.[1]}
          index={1}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[1]?.type ===
        ChartTypes.SemiCircleChart ? (
        <SemiCircleChartComponent
          apiData={slideContent?.[7]?.slide_8?.[1]}
          index={1}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[1]?.type === ChartTypes.AreaChart ? (
        <AreaChartComponent
          apiData={slideContent?.[7]?.slide_8?.[1]}
          index={1}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[1]?.type === ChartTypes.BarChart ? (
        <BarChartComponent
          apiData={slideContent?.[7]?.slide_8?.[1]}
          index={1}
          viewOnly
        />
      ) : (
        "Chart type error"
      )}

      {slideContent?.[7]?.slide_8?.[2]?.type === ChartTypes.DonutChart ? (
        <DonutChartComponent
          apiData={slideContent?.[7]?.slide_8?.[2]}
          index={2}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[2]?.type === ChartTypes.PieChart ? (
        <PieChartComponent
          apiData={slideContent?.[7]?.slide_8?.[2]}
          index={2}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[2]?.type ===
        ChartTypes.SemiCircleChart ? (
        <SemiCircleChartComponent
          apiData={slideContent?.[7]?.slide_8?.[2]}
          index={2}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[2]?.type === ChartTypes.AreaChart ? (
        <AreaChartComponent
          apiData={slideContent?.[7]?.slide_8?.[2]}
          index={2}
          viewOnly
        />
      ) : slideContent?.[7]?.slide_8?.[2]?.type === ChartTypes.BarChart ? (
        <BarChartComponent
          apiData={slideContent?.[7]?.slide_8?.[2]}
          index={2}
          viewOnly
        />
      ) : (
        "Chart type error"
      )}
    </div>,
    //slide#09
    <div id={"Slide14"}
      className="slide-wrapper break-after-page flex flex-col overflow-hidden"
    >
      <img
        src={temp1LeftBottomImg}
        alt=""
        className="absolute bottom-0 left-0 h-[150px]"
        draggable={false}
      />
      <StaticComponentForPdf
        slideContent={slideContent?.[8]?.slide_9?.[2]}
        index={2}
      >
        <div className="flex w-full pl-4 h-[100px] gap-2 items-end">
          <img
            src={verticalLineUpsideDown}
            alt=""
            className="h-full"
            draggable={false}
          />
          <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
            use of funds
          </h1>
        </div>
      </StaticComponentForPdf>

      <SlideParagraphForPdf apiData={slideContent?.[8]?.slide_9?.[0]} />

      <SlideDualList
        isLeftEditable={false}
        isRightEditable={true}
        listStyle="Box"
        apiData={slideContent?.[8]?.slide_9?.[1]}
        index={1}
        viewOnly
      />
    </div>,
    //slide#10
    <div id={"Slide15"}
      className="slide-wrapper break-after-page overflow-hidden flex flex-col gap-2"
    >
      <SlideTeam
        apiData={slideContent?.[9]?.slide_10?.[0]}
        index={0}
        viewOnly
      />
      <StaticComponentForPdf
        slideContent={slideContent?.[9]?.slide_10?.[1]}
        index={1}
      >
        <h1 className="text-[#3F2305] font-extrabold heading-l uppercase">
          team
        </h1>
      </StaticComponentForPdf>
      <StaticComponentForPdf
        slideContent={slideContent?.[9]?.slide_10?.[2]}
        index={2}
      >
        <img src={temp1TeamImg} alt="" className="h-full" draggable={false} />
      </StaticComponentForPdf>
    </div>,
    <div id={"Slide16"}
      className="slide-wrapper break-after-page overflow-hidden flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-[rgb(63,35,5)] font-extrabold heading-xl uppercase mb-2">
        Thankyou
      </h1>
      <h1 className="text-[rgb(63,35,5)] font-bold heading-s uppercase">
        for Your Time and Attention
      </h1>
      <h1 className="text-[rgb(63,35,5)] font-bold paragraph uppercase">
        Present by Neil Tran
      </h1>
    </div>,
  ];

  return (
    <div className="flex flex-col gap-4 p-4 border-l flex-1">
      {slides.map((slide, i) => slide)}
    </div>
  );
};

export default Template1;
