import { useEffect, useRef, useState } from "react";
import {
  HowWeStartedImage1,
  HowWeStartedImage2,
  HowWeStartedImage3,
} from "../../../../../assets/website";

const HowWeStarted = () => {
  return (
    <div className="w-full justify-center flex">
      {/* for pc screen or md screen */}
      <div className="mt-[50px] w-full lg:w-[1300px] hidden md:block">
        <HowWeStartedContain
          heading="How We Started"
          para="While working on different products and startups our team recognized a need for a business planning tool that could create, research, and forecast—becoming a co-pilot for entrepreneurship success in all different stages. And as we explored solutions, we saw AI's potential to transform entrepreneurship by delivering clear actionable insights and accurate forecasts tailored for every type of business."
          image={HowWeStartedImage1}
          lineClassName="h-[70%] top-[30%]"
        />
        <HowWeStartedContain
          heading="Our Mission"
          para="At Venture Plus, our mission is to equip entrepreneurs with the essential tools and expert guidance they need to transform their ideas into reality. We believe that every great idea deserves a chance to succeed, especially when only 8% of entrepreneurs regret starting their business."
          image={HowWeStartedImage2}
          lineClassName="h-full "
        />
        <HowWeStartedContain
          heading="Our Vision"
          para="With the knowledge that, 90% of startups fail within the five years due to insufficient support, we envisioned a powerful tool designed to empower entrepreneurs from every walk of life, be it a student researching innovative ventures or seasoned entrepreneurs trying out something new, we envision a world where every aspiring entrepreneur has access to a platform focusing on their success."
          image={HowWeStartedImage3}
          lineClassName="h-[70%] bottom-[30%]"
        />
      </div>
      {/* for mobile screen */}
      <div className="mt-[30px] w-full  block md:hidden">
        <HowWeStartedContainForMobile
          heading="How We Started"
          para="While working on different products and startups our team recognized a need for a business planning tool that could create, research, and forecast—becoming a co-pilot for entrepreneurship success in all different stages. And as we explored solutions, we saw AI's potential to transform entrepreneurship by delivering clear actionable insights and accurate forecasts tailored for every type of business."
        />
        <HowWeStartedContainForMobile
          heading="Our Mission"
          para="At Venture Plus, our mission is to equip entrepreneurs with the essential tools and expert guidance they need to transform their ideas into reality. We believe that every great idea deserves a chance to succeed, especially when only 8% of entrepreneurs regret starting their business."
        />
        <HowWeStartedContainForMobile
          heading="Our Vision"
          para="With the knowledge that, 90% of startups fail within the five years due to insufficient support, we envisioned a powerful tool designed to empower entrepreneurs from every walk of life, be it a student researching innovative ventures or seasoned entrepreneurs trying out something new, we envision a world where every aspiring entrepreneur has access to a platform focusing on their success."
        />
      </div>
    </div>
  );
};
export default HowWeStarted;

const HowWeStartedContain = ({
  heading,
  para,
  image,
  lineClassName,
}: {
  heading: string;
  para: string;
  image: string;
  lineClassName: string;
}) => {
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
        threshold: 0.5,
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

  return (
    <div className="flex items-center h-[300px] w-full" ref={elementRef}>
      <div className="w-full h-full flex justify-center items-center">
        <h1
          className={`${
            isInView ? "" : "scale-75"
          }  text-[54.37px] text-[#212838]  leading-[81.01px] w-[450px] font-bold HowWeStartedH1 text-center `}
        >
          {heading}
        </h1>
      </div>
      <div className="w-[80px]  h-full flex justify-center items-center relative ">
        <div
          className={`bg-[#016A70] w-[1px] absolute left-1/2 -translate-x-1/2 ${lineClassName}`}
        ></div>
        <img src={image} className="w-[70px] h-[70px] bg-[white] z-10" />
      </div>
      <div className="w-full  h-full flex justify-center items-center">
        <p
          className={`${
            isInView ? "" : "scale-[.8]"
          } text-[17.81px] leading-[26.54px] font-medium w-[420px] HowWeStartedH1`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

const HowWeStartedContainForMobile = ({
  heading,
  para,
}: {
  heading: string;
  para: string;
}) => {
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
        threshold: 0.2,
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

  return (
    <div
      className="flex flex-col  w-full px-[20px] mb-[20px] gap-2"
      ref={elementRef}
    >
      <div className="w-full h-full flex justify-center ">
        <h1
          className={`${
            isInView ? "" : "scale-75"
          }  text-[30px] text-[#212838]  leading-[35px] w-[450px] font-bold HowWeStartedH1 text-left `}
        >
          {heading}
        </h1>
      </div>

      <div className="w-full  h-full flex justify-center items-center">
        <p
          className={`${
            isInView ? "" : "scale-[.8]"
          } text-[16px] leading-[15px] font-medium w-[420px] HowWeStartedH1`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};
