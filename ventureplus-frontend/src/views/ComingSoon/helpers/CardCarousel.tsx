import AliceCarousel from "react-alice-carousel";
import {
  automatedReportingIcon,
  consultationIcon,
  customerTempIcon,
  financeModelingIcon,
  insightsIcon,
  intelligenceIcon,
  progressIcon,




  artificialIntelligence,
  businessPresentation,
  pencilOn,
  productCategory,
  productCategoryArrow,
  WritingIdeas,
  research,
  feedback,
  ai
} from "../../../assets/comingSoonAssets";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState } from "react";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
}

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const items = [
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="w-[642px] flex flex-col gap-6 ">
          <div className="glassmorphism h-[157px] flex justify-center gap-3 flex-col w-full">
            <div className="flex gap-3 items-center">
              <img src={ai} alt="" />
              <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
                AI-Driven Business Plan Creation
              </h1>
            </div>
            <p className="body-s leading-[16.32px] -tracking-[1%] text-[#344054]">
              Answer simple questions, and let our AI build your entire business plan—covering everything from strategy to financials—in minutes.
            </p>
          </div>
          <div className="glassmorphism h-[157px] flex justify-center gap-3 flex-col w-full">
            <div className="flex gap-3 items-center">
              <img src={WritingIdeas} alt="" />
              <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
                Refine Your Idea
              </h1>
            </div>
            <p className="body-s leading-[16.32px] -tracking-[1%] text-[#344054]">
              Got an idea but not sure where to start? We help you shape it into something concrete, with guidance at every step.

            </p>
          </div>
        </div>
        
      </div>
    </div>,

    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[219px] w-[371px] flex justify-center gap-3 flex-col">
          <div className="flex gap-3 items-center justify-center">
            <img src={research} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              Market Research Made Easy
            </h1>
          </div>
          <p className="body-s leading-[20px] -tracking-[1%] text-[#344054]">
            Skip the heavy lifting. Our AI gathers market insights and competitor data, so you can focus on your business.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[278px] flex flex-col justify-center items-center w-[340px] text-center">
          <img
            src={feedback}
            alt=""
            className="w-[45px] h-[45px] mb-5"
          />

          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Instant Feedback
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Get real-time suggestions and insights from our AI to improve your business plan as you build it.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[209px] flex flex-col justify-center items-center w-[354px] text-center">
          <img src={productCategoryArrow} alt="" className="w-[45px] h-[45px] mb-5" />

          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Financial Forecasting
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Easily project your cash flow, profits, and expenses with our intuitive financial tools—no spreadsheets needed.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[249px] flex flex-col justify-center  w-[360px] ">
          <img
            src={pencilOn}
            alt=""
            className="w-[45px] h-[45px] mb-5"
          />

          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Edit Anytime
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Your business is always evolving, and so is your plan. Update it anytime, and our AI will help you improve it.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[200px] flex flex-col justify-center  w-[425px] ">
          <img
            src={productCategory}
            alt=""
            className="w-[45px] h-[45px] mb-5"
          />
          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Execution Roadmap
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            We don’t just help you plan—we give you a clear path to follow, with steps to bring your business to life.
          </p>
        </div>
      </div>
    </div>,

    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[273px] w-[306px] flex justify-center gap-3 flex-col">
          <div className="flex gap-5 items-center ">
            <img src={artificialIntelligence} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              AI-Powered Guidance
            </h1>
          </div>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Our AI assistants are with you every step of the way, offering tips and advice as your business grows.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[219px] w-[371px] flex justify-center gap-3 flex-col">
          <div className="flex gap-3 items-center justify-center">
            <img src={businessPresentation} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              Pitch Decks & More
            </h1>
          </div>
          <p className="body-s leading-[20px] -tracking-[1%] text-[#344054]">
            Craft compelling pitch decks, business models, and essential documents effortlessly to present your vision with confidence.
          </p>
        </div>
      </div>
    </div>
  ];
  const itemsForMobile = [
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[219px] w-[371px] flex justify-center gap-3 flex-col">
          <div className="flex gap-3 items-center justify-center">
            <img src={ai} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              AI-Driven Business Plan Creation
            </h1>
          </div>
          <p className="body-s leading-[20px] -tracking-[1%] text-[#344054]">
            Answer simple questions, and let our AI build your entire business plan—covering everything from strategy to financials—in minutes.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[219px] w-[371px] flex justify-center gap-3 flex-col">
          <div className="flex gap-3 items-center justify-center">
            <img src={WritingIdeas} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              Refine Your Idea
            </h1>
          </div>
          <p className="body-s leading-[20px] -tracking-[1%] text-[#344054]">
            Got an idea but not sure where to start? We help you shape it into something concrete, with guidance at every step.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[219px] w-[371px] flex justify-center gap-3 flex-col">
          <div className="flex gap-3 items-center justify-center">
            <img src={research} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              Market Research Made Easy
            </h1>
          </div>
          <p className="body-s leading-[20px] -tracking-[1%] text-[#344054]">
            Skip the heavy lifting. Our AI gathers market insights and competitor data, so you can focus on your business.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[278px] flex flex-col justify-center items-center w-[340px] text-center">
          <img
            src={feedback}
            alt=""
            className="w-[45px] h-[45px] mb-5"
          />

          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Instant Feedback
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Get real-time suggestions and insights from our AI to improve your business plan as you build it.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[209px] flex flex-col justify-center items-center w-[354px] text-center">
          <img src={productCategoryArrow} alt="" className="w-[45px] h-[45px] mb-5" />

          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Financial Forecasting
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Easily project your cash flow, profits, and expenses with our intuitive financial tools—no spreadsheets needed.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[249px] flex flex-col justify-center  w-[360px] ">
          <img
            src={pencilOn}
            alt=""
            className="w-[45px] h-[45px] mb-5"
          />

          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Edit Anytime
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Your business is always evolving, and so is your plan. Update it anytime, and our AI will help you improve it.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[200px] flex flex-col justify-center  w-[425px] ">
          <img
            src={productCategory}
            alt=""
            className="w-[45px] h-[45px] mb-5"
          />
          <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium mb-2">
            Execution Roadmap
          </h1>
          <p className="body-s -tracking-[1%] text-[#344054]">
            We don’t just help you plan—we give you a clear path to follow, with steps to bring your business to life.
          </p>
        </div>
      </div>
    </div>,

    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[273px] w-[306px] flex justify-center gap-3 flex-col">
          <div className="flex gap-5 items-center ">
            <img src={artificialIntelligence} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              AI-Powered Guidance
            </h1>
          </div>
          <p className="body-s -tracking-[1%] text-[#344054]">
            Our AI assistants are with you every step of the way, offering tips and advice as your business grows.
          </p>
        </div>
      </div>
    </div>,
    <div className="w-full px-2">
      <div className="flex items-center justify-center h-full">
        <div className="glassmorphism h-[219px] w-[371px] flex justify-center gap-3 flex-col">
          <div className="flex gap-3 items-center justify-center">
            <img src={businessPresentation} alt="" />
            <h1 className="body-s leading-[16.32px] -tracking-[1%] text-title font-medium">
              Pitch Decks & More
            </h1>
          </div>
          <p className="body-s leading-[20px] -tracking-[1%] text-[#344054]">
            Craft compelling pitch decks, business models, and essential documents effortlessly to present your vision with confidence.
          </p>
        </div>
      </div>
    </div>
  ];
  return (
    <>
      <div className="mt-5 w-full mb-2 md:block hidden">
        <AliceCarousel
          animationDuration={2000}
          items={items}
          activeIndex={activeIndex} autoPlay={true}
          responsive={responsive}
          infinite={true}
          disableDotsControls={true}
          disableButtonsControls={true}
        />
      </div>
      <div className=" w-full mb-2 md:hidden block ">
        <AliceCarousel
          animationDuration={2000}
          items={itemsForMobile}
          activeIndex={activeIndex}
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          disableDotsControls={true}
          disableButtonsControls={true}
        />
      </div>
    </>
  );
};

export default CardCarousel;
