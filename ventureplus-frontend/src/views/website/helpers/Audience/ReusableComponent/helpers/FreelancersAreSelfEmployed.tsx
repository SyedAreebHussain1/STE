import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

const FreelancersAreSelfEmployed = ({ title }: { title: string }) => {
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
      color: "black",
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
  }, []);

  return (
    <div className="w-full flex justify-center bg-[#F3F1EC]">
      <div className="flex  justify-center relative py-[100px] px-[20px] md:px-[80px] w-full lg:w-[1300px] gap-[80px] overflow-hidden">
        <h1
          className="split-word text-[20px] leading-[30px] md:text-[48px] md:leading-[62px] text-[#B8B9BA] text-center font-semibold"
          ref={textRef}
        >
          “ {title} “
        </h1>
      </div>
    </div>
  );
};
export default FreelancersAreSelfEmployed;
