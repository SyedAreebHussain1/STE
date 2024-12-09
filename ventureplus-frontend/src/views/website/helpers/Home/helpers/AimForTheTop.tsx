import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AimForTheTop1,
  AimForTheTop2,
  AimForTheTop3,
  AimForTheTop4,
} from "../../../../../assets/website";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

const AimForTheTop = () => {
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
        threshold: 0.1,
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

  const textRef = useRef<HTMLDivElement>(null);

  let typeSplit: SplitType | null = null;

  const runSplit = () => {
    if (textRef.current) {
      typeSplit = new SplitType(textRef.current, {
        types: "lines,words",
      });

      document.querySelectorAll(".word").forEach((word) => {
        const span = document.createElement("span");
        span.className = "word-span";

        span.textContent = word.textContent;

        word.innerHTML = "";
        word.appendChild(span);
      });

      createAnimation();
    }
  };

  const createAnimation = () => {
    const allSpans = Array.from(document.querySelectorAll(".word-span"));

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".split-word",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.to(allSpans, {
      opacity: 1,
      color: "white",
      duration: 1,
      stagger: 0.5,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    runSplit();

    return () => {
      if (typeSplit) {
        typeSplit.revert();
      }
    };
  }, [isInView]);

  return (
    <div className="w-full flex justify-center websiteLinearGradientGreen mt-[0] md:mt-[50px]">
      <div
        ref={elementRef}
        className=" xs:w-full lg:w-[1300px] h-max relative px-[20px] md:px-[120px] py-[20px] md:py-[80px] overflow-hidden mt-[50px]"
      >
        <div className="min-h-[240px] w-full relative">
          {isInView && (
            <div
              className="split-word text-[20px] md:text-[36px] font-bold text-left lg:text-center text-[#89B3B6]"
              ref={textRef}
            >
              While working on different products and startups our team
              recognized a need for a business planning tool that could create,
              research, and forecast—becoming a co-pilot for entrepreneurship
              success in all different stages.
            </div>
          )}
        </div>

        <div
          className={`flex justify-center flex-wrap mt-[60px] gap-5 mb-[20px] md:mb-0 ${
            isInView && "AimForTheTopContainer"
          }`}
        >
          <div className=" w-[180px] md:w-[250px] h-[180px] md:h-[250px]  flex justify-center items-center">
            <div className="flex flex-col w-[50px] h-[50px] md:w-[90px] md:h-[90px] justify-center items-center text-[#FFFFFF] bg-opacity-[.3]  bg-[#fff] rounded-full p-[20px] border-[1px] border-transparent">
              <div className="flex flex-col justify-center items-center w-full h-full text-center opacity-0">
                <img
                  src={AimForTheTop1}
                  className="w-[37px] md:w-[55px] mb-[10px]"
                />
                <h1 className="text-[12px] md:text-[20px] font-medium leading-5 md:leading-6">
                  Model Accuracy
                </h1>
                <h2 className="text-[20px] md:text-[32px] font-semibold leading-8 md:leading-10 text-center">
                  94%
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[180px] md:w-[250px] h-[180px] md:h-[250px]  flex justify-center items-center">
            <div className="flex flex-col  w-[50px] h-[50px] md:w-[90px] md:h-[90px]  justify-center items-center text-[#FFFFFF] bg-opacity-[.3]  bg-[#fff] rounded-full p-[20px] border-[1px] border-transparent">
              <div className="flex flex-col justify-center items-center w-full h-full text-center opacity-0">
                <img
                  src={AimForTheTop2}
                  className="w-[35px] md:w-[60px] mb-[10px]"
                />
                <h1 className="text-[12px] md:text-[20px] font-medium leading-5 md:leading-6">
                  Business Plans Delivered
                </h1>
                <h2 className="text-[20px] md:text-[32px] font-semibold leading-8 md:leading-10">
                  300+
                </h2>
                <h3 className=" text-[14px] w-[120px] text-center"></h3>
              </div>
            </div>
          </div>
          <div className="w-[180px] md:w-[250px] h-[180px] md:h-[250px]  flex justify-center items-center">
            <div className="flex flex-col   w-[50px] h-[50px] md:w-[90px] md:h-[90px]  justify-center items-center text-[#FFFFFF] bg-opacity-[.3]  bg-[#fff] rounded-full p-[20px] border-[1px] border-transparent">
              <div className="flex flex-col justify-center items-center w-full h-full text-center opacity-0">
                <img
                  src={AimForTheTop3}
                  className="w-[30px] md:w-[50px] mb-[10px]"
                />
                <h1 className="text-[12px] md:text-[20px] font-medium leading-5 md:leading-6">
                  Reduction in Planning Time
                </h1>
                <h2 className="text-[20px] md:text-[32px] font-semibold leading-8 md:leading-10">
                  {`>`}90%
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[180px] md:w-[250px] h-[180px] md:h-[250px]  flex justify-center items-center">
            <div className="flex flex-col  w-[50px] h-[50px] md:w-[90px] md:h-[90px]  justify-center items-center text-[#FFFFFF] bg-opacity-[.3]  bg-[#fff] rounded-full p-[20px] border-[1px] border-transparent">
              <div className="flex flex-col justify-center items-center w-full h-full text-center opacity-0">
                <img
                  src={AimForTheTop4}
                  className="w-[35px] md:w-[60px] mb-[10px]"
                />
                <h1 className="text-[12px] md:text-[20px] font-medium leading-5 md:leading-6">
                  User Expansion
                </h1>
                <h2 className="text-[20px] md:text-[32px] font-semibold leading-8 md:leading-10">
                  200%
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimForTheTop;
