import { useEffect, useRef, useState } from "react";
import {
  cardSuccessfulBusinessimage,
  FasterPlan,
  UsersReport,
  EntrepreneursValid,
} from "../../../../../assets/website";

const SuccessfulBusinessPlan = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.7,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const successfulCard1 = document.getElementById(
        "successfulCard1"
      ) as HTMLElement | null;
      const successfulCard2 = document.getElementById(
        "successfulCard2"
      ) as HTMLElement | null;
      const successfulCard3 = document.getElementById(
        "successfulCard3"
      ) as HTMLElement | null;

      if (successfulCard1) {
        successfulCard1.style.left = "25%";
        successfulCard1.style.top = "30px";
      }
      if (successfulCard3) {
        successfulCard3.style.left = "75%";
        successfulCard3.style.top = "70px";
      }
    }
  }, [isInView]);

  return (
    <div className="w-full flex justify-center overflow-hidden">
      {/* for pc md screen */}
      <div
        className="mt-[50px] h-[500px] relative w-[1200px] hidden md:block"
        ref={elementRef}
      >
        <Card
          heading="90%"
          para="Faster business plan creation compared to traditional methods."
          image={FasterPlan}
          id={"successfulCard1"}
          className="bg-[#EBE9FE] text-[#121627]"
        />
        <Card
          heading="70%"
          para="Users reported improved financial forecasting accuracy with AI-powered insights."
          image={UsersReport}
          id={"successfulCard2"}
          className="bg-[#016A70] text-[white]"
        />
        <Card
          heading="85%"
          para="Entrepreneurs successfully validated their business ideas using Venture Plus's market research tools."
          image={EntrepreneursValid}
          id={"successfulCard3"}
          className="bg-[#EBE9FE] text-[#121627]"
        />
      </div>
      {/* for mobile screen or smaller then md */}
      <div className="mt-[50px] flex flex-col gap-4  relative w-full  md:hidden px-[30px] ">
        <CardForMobile
          heading="90%"
          para="Faster business plan creation compared to traditional methods."
          image={FasterPlan}
          className="bg-[#EBE9FE] text-[#121627]"
        />
        <CardForMobile
          heading="70%"
          para="Users reported improved financial forecasting accuracy with AI-powered insights."
          image={UsersReport}
          className="bg-[#016A70] text-[white]"
        />
        <CardForMobile
          heading="85%"
          para="Entrepreneurs successfully validated their business ideas using Venture Plus's market research tools."
          image={EntrepreneursValid}
          className="bg-[#EBE9FE] text-[#121627]"
        />
      </div>
    </div>
  );
};
export default SuccessfulBusinessPlan;

const Card = ({
  heading,
  para,
  image,
  id,
  className,
}: {
  heading: string;
  para: string;
  image: string;
  id: string;
  className: string;
}) => {
  return (
    <div
      className={`w-[400px] h-[420px]  successfulBusinessPlanCard px-[95px] py-[60px] absolute ${className}`}
      id={id}
    >
      <img className="w-[66px] h-[66px]" src={image} />
      <h1 className="heading-xl font-bold  !leading-10 mt-[30px]">{heading}</h1>
      <p className="text-[20px]  mt-[30px]">{para}</p>
    </div>
  );
};

const CardForMobile = ({
  heading,
  para,
  image,
  className,
}: {
  heading: string;
  para: string;
  image: string;
  className: string;
}) => {
  return (
    <div
      className={`w-full  successfulBusinessPlanCard  px-[30px] py-[50px]  ${className}`}
    >
      <img className="w-[40px] h-[40px]" src={image} />
      <h1 className="text-[30px] font-bold  !leading-10 mt-[15px]">
        {heading}
      </h1>
      <p className="text-[15px]  mt-[15px]">{para}</p>
    </div>
  );
};
