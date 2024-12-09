import { useEffect, useRef, useState } from "react";
import founderImage from "../../../assets/founderImage.svg";

const Founders = () => {
  const myRef: any = useRef(null);
  const myRefforPosition: any = useRef(null);
  const parentComponentRef: any = useRef(null);
  const childComponentRef: any = useRef(null);

  const componentVisible: any = useRef(false);
  const point: any = useRef(false);
  const [componentShow, setComponentShow] = useState(1);

  function checkScreenPosition() {
    if (myRef.current) {
      const rect = myRef.current.getBoundingClientRect();

      if (rect?.height == 2100) {
        return;
      }
      // Check if the top of the component is within the viewport
      if (rect.top <= 0 && !componentVisible.current) {
        componentVisible.current = true;
        point.current = window.scrollY; // Save current scroll position
      }
    }

    // Example: Perform action when scrolled past a point
    if (point.current > 0) {
      const hightScreen = window.innerHeight > 670 ? 670 : window.innerHeight;
      if (
        point.current < window.scrollY &&
        point.current + hightScreen > window.scrollY &&
        myRefforPosition.current != 1
      ) {
        setComponentShow(1);
        myRefforPosition.current = 1;
      } else if (
        point.current < window.scrollY &&
        point.current + hightScreen < window.scrollY &&
        point.current + hightScreen * 2 > window.scrollY &&
        myRefforPosition.current != 2
      ) {
        setComponentShow(2);
        myRefforPosition.current = 2;
      } else if (
        point.current + hightScreen < window.scrollY &&
        point.current + hightScreen * 2 < window.scrollY &&
        point.current + hightScreen * 3 > window.scrollY &&
        myRefforPosition.current != 3
      ) {
        setComponentShow(3);
        myRefforPosition.current = 3;
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScreenPosition);
    checkScreenPosition(); // Check position on initial render

    return () => {
      window.removeEventListener("scroll", checkScreenPosition);
    };
  }, []);

  useEffect(() => {
    if (componentShow) {
      const scrollto = parentComponentRef?.current?.clientHeight;
      if (componentShow == 1) {
        childComponentRef.current.style.top = "0px";
      } else if (componentShow == 2) {
        childComponentRef.current.style.top = -scrollto + "px";
      } else if (componentShow == 3) {
        childComponentRef.current.style.top = -scrollto * 2 + "px";
      }
    }
  }, [componentShow]);
  return (
    <div className=" w-full lg:h-[400vh] 2xl:h-[2100px] relative">
      <div
        ref={myRef}
        className="lg:h-[100vh]  2xl:h-[2100px]  w-[100%]   sticky  top-0 left-0  py-[10px]"
      >
        <div className="rounded-3xl  h-[100%]  w-[100%] flex flex-col overflow-hidden">
          <div className="w-[28%] bg-white pt-[10px] founderComponentClipPath text-center pr-[50px]">
            <h1 className="text-[2.238rem] font-semibold ">FOUNDERS</h1>
          </div>
          <div
            ref={parentComponentRef}
            className="flex-1 bg-white rounded-tr-3xl overflow-hidden "
          >
            <div
              className="relative h-full transition-all duration-500 px-[24px]"
              ref={childComponentRef}
            >
              <div className="h-full 2xl:h-[670px] pb-[34px] flex justify-between items-center">
                <div className="w-[400px] h-[400px] overflow-hidden rounded-full ">
                  <img
                    src={founderImage}
                    alt="founder Image"
                    className="w-[400px] h-[400px] object-contain"
                  />
                </div>
                <div className="w-[657px] ">
                  <h1 className="text-[3.861rem] leading-[3.5rem] font-semibold founderTextColor">
                    Description about the founders.
                  </h1>
                  <p className="pt-[23px] text-[1.875rem] font-normal leading-8">
                    Introduction of the founders along with their
                    accomplishments etc
                  </p>
                </div>
              </div>
              <div className="h-full 2xl:h-[670px]  pt-[64px]">
                <div className="h-full pb-[34px] flex justify-between items-center">
                  <div className="w-[400px] h-[400px] overflow-hidden rounded-full ">
                    <img
                      src={founderImage}
                      alt="founder Image"
                      className="w-[400px] h-[400px] object-contain"
                    />
                  </div>
                  <div className="w-[657px] ">
                    <h1 className="text-[3.861rem] leading-[3.5rem] font-semibold founderTextColor">
                      Description about.
                    </h1>
                    <p className="pt-[23px] text-[1.875rem] font-normal leading-8">
                      Introduction of the founders along with their
                      accomplishments etc
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full  2xl:h-[670px] pt-[64px]">
                <div className="h-full pb-[34px] flex justify-between items-center">
                  <div className="w-[400px] h-[400px] overflow-hidden rounded-full ">
                    <img
                      src={founderImage}
                      alt="founder Image"
                      className="w-[400px] h-[400px] object-contain"
                    />
                  </div>
                  <div className="w-[657px] ">
                    <h1 className="text-[3.861rem] leading-[3.5rem] font-semibold founderTextColor">
                      Description .
                    </h1>
                    <p className="pt-[23px] text-[1.875rem] font-normal leading-8">
                      Introduction of the founders along with their
                      accomplishments etc
                    </p>
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

export default Founders;
