import { useEffect, useRef, useState } from "react";
import {
  Company1Image,
  Company2Image,
  Company3Image,
  Company4Image,
} from "../../../../../assets/website";
import { AnimatePresence, motion } from "framer-motion";

const CompaniesThatWorkWithUs = () => {
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
    <div className="w-full flex justify-center">
      <div className="mt-[50px] px-[80px] xs:w-full lg:w-[1300px]">
        <h1 className="heading-xl text-[#212838] font-bold">
          Companies That Work With Us
        </h1>
        <div
          className="flex flex-col items-center w-full h-[470px]"
          ref={elementRef}
        >
          <AnimatePresence>
            {isInView && (
              <motion.div
                key={30940394}
                initial={{
                  opacity: 1,
                  x: -200,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex mt-[30px] justify-between h-[220px] w-[1100px] items-center">
                  <img className="w-[215px] h-full" src={Company1Image} />
                  <img className="w-[140px] " src={Company2Image} />
                  <img className="w-[230px] " src={Company3Image} />
                  <img className="w-[230px] " src={Company4Image} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isInView && (
              <motion.div
                key={30940394}
                initial={{
                  opacity: 1,
                  x: 200,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex mt-[30px] justify-between h-[220px] w-[1100px] items-center">
                  <img className="w-[215px] h-full" src={Company1Image} />
                  <img className="w-[140px] " src={Company2Image} />
                  <img className="w-[230px] " src={Company3Image} />
                  <img className="w-[230px] " src={Company4Image} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default CompaniesThatWorkWithUs;
