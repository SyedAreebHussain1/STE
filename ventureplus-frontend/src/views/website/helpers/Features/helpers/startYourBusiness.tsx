import { useEffect, useRef, useState } from "react";
import { startBusinessImage } from "../../../../../assets/website";
import RoundedButton from "../../../../../components/button/RoundedButton";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const StartYourBusiness = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Unobserve if you only want to trigger once
        }
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 10% of the element is in view
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
      <div
        className=" flex justify-between xs:w-full lg:w-[1300px] h-full md:h-[450px] pt-[50px] pb-[20px] md:mb-0 md:pt-[160px] px-[20px] "
        ref={elementRef}
      >
        {" "}
        <AnimatePresence>
          {isInView && (
            <motion.div
              key={30940394}
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-[100%] h-full">
                <h1 className="text-[25px] md:text-[45.78px]   font-bold max-w-[700px] leading-[30px] md:!leading-[50px]">
                  Future-proof your business: Start planning today!
                </h1>
                <p className="max-w-[550px] text-[12px] md:text-[15px] font-medium mt-[5px] ">
                  Join our community of forward-thinking entrepreneurs who are
                  harnessing the power of AI to shape the future of business.
                </p>
                <RoundedButton
                  title={"Lets get you started!"}
                  type="primary"
                  sm
                  className="mt-[20px] px-[70px]"
                  onClick={() => navigate("/login")}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isInView && (
            <motion.div
              key={30944}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-[400px] relative mr-[50px] hidden md:block">
                <img
                  src={startBusinessImage}
                  className="w-full absolute top-[-50px]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default StartYourBusiness;
