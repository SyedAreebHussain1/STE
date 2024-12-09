import React, { useEffect, useRef, useState } from "react";
import { SidebarContent } from "../index";
import { IoIosArrowBack } from "react-icons/io";
type Props = {
  sideContent: SidebarContent[];
  active: SidebarContent | null;
  setActive: React.Dispatch<React.SetStateAction<SidebarContent | null>>;
};
const SideBarForLead = ({ sideContent, active, setActive }: Props) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const componentReplaceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const component = componentRef.current;
    const componentReplacer = componentReplaceRef.current;

    if (component && componentReplacer) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === componentReplacer) {
            const newHeight = component.clientHeight;
            const newWidth = entry.contentRect.width;

            componentReplacer.style.height = `${newHeight}px`;
            component.style.width = `${newWidth}px`;
          }
        }
      });

      resizeObserver.observe(componentReplacer);

      return () => {
        resizeObserver.unobserve(componentReplacer);
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <>
      <div className="px-[8px] pt-[8px] md:pt-[20px] md:px-[20px] w-full fixed z-[9] bg-[#F6F8FB] ">
        <div
          ref={componentRef}
          className={` bg-[#FFFFFF]   pt-[20px]  rounded-xl overflow-hidden`}
        >
          <div className="shadow-[inset_0_-2px_0px_0px_#D0D5DD]">
            <div className="ml-[20px] ">
              <div className="text-[18px] font-medium">
                <div className="text-[0.975rem] flex  items-center font-medium text-[#27A3A3] cursor-pointer ">
                  <span>
                    <IoIosArrowBack
                      className="px-[1px] text-[1rem]"
                      size={25}
                    />
                  </span>
                  Back to Home
                </div>
              </div>
              <p className="text-[#667085] ml-[20px] text-[1rem] mt-[3px] font-medium">
                {active?.title}
              </p>
            </div>

            <div className="sub-headers flex  mt-[32px] overflow-x-auto ">
              {sideContent.map((content) =>
                active?.id === content.id ? (
                  <div
                    key={content.id}
                    className=" text-[#27A3A3] pb-[16px] border-b-[3px] border-[#27A3A3] text-[1rem] font-medium cursor-pointer px-[37.5px] "
                  >
                    {content.title}
                  </div>
                ) : (
                  <div
                    key={content.id}
                    className=" text-[#D0D5DD] pb-[16px]  text-[1rem] font-medium cursor-pointer px-[37.5px] "
                    onClick={() => setActive(content)}
                  >
                    {content.title}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8px] pt-[8px] md:pt-[20px] md:px-[20px] w-full">
        <div ref={componentReplaceRef} className="w-full"></div>
      </div>
    </>
  );
};
export default SideBarForLead;
