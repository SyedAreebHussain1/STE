import { ReactElement, useEffect, useRef, useState } from "react";

import "./style.css";
import {
  girlImage,
  girlimage2,
  girlimage3,
  boyimage1,
} from "../../../../../assets/website";

const Review = () => {
  const containerRef: any = useRef(null);
  const reviewAnimationRef: any = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth - 80);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full flex justify-start md:justify-center mb-[50px] px-[20px] md:px-0">
      <div className="flex flex-col items-center relative mt-[50px] w-full lg:w-[1300px] overflow-hidden">
        <div className="flex flex-col items-center w-full gap-[10px]">
          <h1 className="py-[7px] min-w-[200px] mb-[10px] text-center border border-[#67A6A9] rounded-full bg-[#67a6a91a] text-[#4A5366] text-[15px] font-medium">
            Customer Reviews
          </h1>
          <p className="text-[24px] md:text-[30px] font-semibold text-left md:text-center  leading-7 md:leading-30">
            Trusted by innovative entrepreneurs and visionary business owners
          </p>
          <a className="text-[15px] md:text-[20px] font-semibold text-left md:text-center text-[#01555A]">
            See what our customers are saying about their experience with
            Venture Plus{" "}
          </a>
        </div>
        <div className="w-[100%] overflow-hidden xs:px-[45px] lg:px-[100px] mt-[50px]">
          <div
            className="overflow-y-scroll px-[35px]  no-scrollbar"
            ref={containerRef}
          >
            <div
              className="reviewAnimation "
              ref={reviewAnimationRef}
              style={
                {
                  "--container-width": `${containerWidth}px`,
                } as React.CSSProperties
              } // Set the CSS variable here
            >
              <div>
                <div className="w-[300px] h-[360px] firstDiv bg-[#CCE1E2] rounded-[25px] p-[20px] py-[15px] flex flex-col justify-between">
                  <div>
                    <div className="rounded-3xl text-[11px] font-bold bg-[#016a7033] text-[#212838] w-max px-[15px] py-[7px]">
                      1 of 4
                    </div>
                    <div className="mt-[30px] text-[15px]">
                      <p>
                        "As an e-commerce business owner, refining strategies
                        and setting financial goals was challenging. The
                        AI-driven business plan from Venture Plus helped me
                        create a compelling pitch and achieve faster growth than
                        I expected with my business!"
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-t-[#fff]  ">
                    <div className="flex gap-2 mt-[10px] items-center">
                      <div>
                        <img
                          src={girlImage}
                          className="w-[40px] rounded-full"
                        />
                      </div>
                      <div className=" text-[11px]">
                        <h1 className=" text-[#212838] font-semibold">
                          Sarah Patel
                        </h1>
                        <p className="text-[#363F52] font-medium">
                          E-commerce business owner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[300px] h-[360px] firstDiv bg-[#CCE1E2] rounded-[25px] p-[20px] py-[15px] flex flex-col justify-between">
                  <div>
                    <div className="rounded-3xl text-[11px] font-bold bg-[#016a7033] text-[#212838] w-max px-[15px] py-[7px]">
                      2 of 4
                    </div>
                    <div className="mt-[30px] text-[15px]">
                      <p>
                        "When we needed to validate our ideas and secure
                        funding, Venture Plus was there to guide us. From idea
                        validation to pitch creation and financial projections,
                        it saved us hours of work and played a key role in
                        securing our first round of funding."
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-t-[#fff]  ">
                    <div className="flex gap-2 mt-[15px] items-center">
                      <div>
                        <img
                          src={boyimage1}
                          className="w-[40px] rounded-full"
                        />
                      </div>
                      <div className=" text-[11px]">
                        <h1 className=" text-[#212838] font-semibold">
                          Ahmed Khan
                        </h1>
                        <p className="text-[#363F52] font-medium">
                          Tech Startup CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[300px] h-[360px] firstDiv bg-[#CCE1E2] rounded-[25px] p-[20px] py-[15px] flex flex-col justify-between">
                  <div>
                    <div className="rounded-3xl text-[11px] font-bold bg-[#016a7033] text-[#212838] w-max px-[15px] py-[7px]">
                      3 of 4
                    </div>
                    <div className="mt-[30px] text-[15px]">
                      <p>
                        "For my accounting firm, having a scalable business plan
                        and a professional pitch deck was critical. With the
                        roadmap feature of Venture Plus, we stayed on track with
                        our growth goals, making it an invaluable tool for
                        service-based businesses like ours."
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-t-[#fff]  ">
                    <div className="flex gap-2 mt-[15px] items-center">
                      <div>
                        <img
                          src={girlimage2}
                          className="w-[40px] rounded-full"
                        />
                      </div>
                      <div className=" text-[11px]">
                        <h1 className=" text-[#212838] font-semibold">
                          Lisa Thompson
                        </h1>
                        <p className="text-[#363F52] font-medium">
                          Accounting Services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-[300px] h-[360px] firstDiv bg-[#CCE1E2] rounded-[25px] p-[20px] py-[15px] flex flex-col justify-between">
                  <div>
                    <div className="rounded-3xl text-[11px] font-bold bg-[#016a7033] text-[#212838] w-max px-[15px] py-[7px]">
                      4 of 4
                    </div>
                    <div className="mt-[30px] text-[15px]">
                      <p>
                        "Venture Plus transformed how we plan our agricultural
                        business. The AI tools helped us map out operational
                        strategy, build a strong pitch, and create financial
                        forecasts, giving us a clear path for expansion."
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-t-[#fff]  ">
                    <div className="flex gap-2 mt-[15px] items-center">
                      <div>
                        <img
                          src={girlimage3}
                          className="w-[40px] rounded-full"
                        />
                      </div>
                      <div className=" text-[11px]">
                        <h1 className=" text-[#212838] font-semibold">
                          Zhang Wei
                        </h1>
                        <p className="text-[#363F52] font-medium">
                          AgriTech Co-Founder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
