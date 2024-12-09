import React, { useEffect, useState } from "react";
import { bannerGif } from "../../../../../assets/website";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(1);
  const [prevCheckpoint, setPrevCheckpoint] = useState(1);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const sections = [1, 2, 3, 4];

  const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.clientHeight;
    const totalHeight = sections.length * windowHeight;
    const scrollPercent = (scrollPosition / (totalHeight - windowHeight)) * 100;

    let checkpointIndex = 1;
    for (let i = 0; i < sections.length; i++) {
      const checkpointValue = (i / sections.length) * 100;
      if (scrollPercent >= checkpointValue) {
        checkpointIndex = i + 1;
      }
    }

    if (checkpointIndex !== activeCheckpoint) {
      setDirection(checkpointIndex > activeCheckpoint ? "down" : "up");
      setPrevCheckpoint(activeCheckpoint);
      setActiveCheckpoint(checkpointIndex);
    }

    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCheckpoint]);

  const content = [
    <div className="flex flex-col gap-[10px] ">
      <h1 className="font-semibold text-[35px] text-[white]">
        Your Co-Pilot to Entrepreneurial Success
      </h1>
      <p className="text-[#ffffffa9] text-[20px]">
        From navigating the complexities of business planning to a suite of
        entrepreneur tools we’re here to help you make informed decisions,
        mitigate risks, and steer your venture to success.
      </p>
    </div>,
    <div className="flex flex-col gap-[10px] ">
      <h1 className="font-semibold text-[35px] text-[white]">
        Setup like a walk in the park
      </h1>
      <p className="text-[#ffffffa9] text-[20px] ">
        Get guided through each area of state compliance and identify any gaps.
      </p>
    </div>,
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-semibold text-[35px] text-[white]">
        Automate it away
      </h1>
      <p className="text-[#ffffffa9] text-[20px]">
        Use Mosey to register, embed notices, receive mail, and calculate your
        due dates.
      </p>
    </div>,
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-semibold text-[35px] text-[white]">
        Monitor like a pro
      </h1>
      <p className="text-[#ffffffa9] text-[20px]">
        Receive alerts when it’s time to take action on changes to your
        compliance
      </p>
    </div>,
  ];

  const variants = {
    initial: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "-60vh" : "30vh",
    }),
    animate: {
      opacity: 1,
      y: "-15px",
    },
    exit: (direction: "up" | "down") => ({
      opacity: 0,
      y: direction === "up" ? "60vh" : "-30vh",
    }),
  };

  return (
    <div className="websiteLinearGradientGreen h-[400vh] relative xs:pr-[20px] xs:pl-[30px] lg:px-[50px] ">
      <div className="sticky flex flex-col h-[100vh] top-0 py-[30px] overflow-hidden">
        <div className=" xs:h-[100vh] lg:h-[85vh] flex justify-center gap-3">
          <div className="xs:w-[100%] lg:w-[70%] flex flex-col justify-center h-full ">
            <AnimatePresence initial={true}>
              <motion.div
                key={30940394}
                initial={{
                  opacity: 0,
                  x: -200,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeCheckpoint}
                    custom={direction}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {content[activeCheckpoint - 1]}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* on xs screen it's hide */}
          <div className="w-[100%] flex items-center justify-center xs:hidden lg:flex">
            <AnimatePresence initial={true}>
              <motion.div
                key={309403934564}
                initial={{
                  opacity: 0,
                  x: 200,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center w-full">
                  <img src={bannerGif} className="w-[80%]" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* on lg screen it's hide */}
          <div className="flex-1 flex items-center xs:flex lg:hidden w-[20px]   ">
            <div className="w-[20px]  ">
              <AnimatePresence initial={true}>
                <motion.div
                  key={3094039453}
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-[20px]  h-[90vh]  ">
                    <div className="w-[1px] bg-[#fff] h-full absolute left-1/2 -translate-x-1/2"></div>
                    <div
                      className="w-[10px] bg-[#fff] rounded-full relative left-1/2 -translate-x-1 "
                      style={{
                        height: `${scrollPercentage}%`,
                        maxHeight: "100%",
                      }}
                    >
                      <div className="absolute bottom-[-10px] text-[#fff] text-[20px] -left-[35px]">
                        0{activeCheckpoint}
                      </div>
                    </div>

                    {/* Checkpoints */}
                    {sections.map((_, index) =>
                      index !== 0 ? (
                        <div
                          key={index}
                          style={{
                            position: "absolute",
                            left: "-6px",
                            top: `${(index / sections.length) * 100}%`,
                            height: "1px",
                            width: "16px",
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                          }}
                        />
                      ) : null
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* on xs screen it's hide */}

        <div className="flex-1 flex items-center xs:hidden lg:flex">
          <div className="w-full">
            <AnimatePresence initial={true}>
              <motion.div
                key={30940394}
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
                <div className="relative ">
                  <div className="h-[1px] bg-[#fff] w-full absolute top-1/2 -translate-y-1/2"></div>
                  <div
                    className="h-[10px] bg-[#fff] rounded-full relative"
                    style={{
                      width: `${scrollPercentage}%`,
                      maxWidth: "100%",
                    }}
                  >
                    <div className="absolute right-0 text-[#fff] text-[20px] -top-[35px]">
                      0{activeCheckpoint}
                    </div>
                  </div>

                  {/* Checkpoints */}
                  {sections.map((_, index) =>
                    index !== 0 ? (
                      <div
                        key={index}
                        style={{
                          position: "absolute",
                          top: "-10px",
                          left: `${(index / sections.length) * 100}%`,
                          width: "1px",
                          height: "16px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                          transform: "translateX(-50%)",
                        }}
                      />
                    ) : null
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
