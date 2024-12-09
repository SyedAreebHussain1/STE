import React, { useEffect, useRef, useState } from "react";
import { SidebarContent } from "../index";
import { IoIosArrowBack } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
type Props = {
  sideContent: SidebarContent[];
  active: SidebarContent | null;
  setActive: React.Dispatch<React.SetStateAction<SidebarContent | null>>;
};
const SideBarForLead = ({ sideContent, active, setActive }: Props) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const componentReplaceRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

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
      <div className="px-[8px] pt-[8px] md:pt-[20px] md:px-[20px] w-full fixed z-[9] bg-[#F6F8FB]  dark:bg-dark-primary ">
        <div
          ref={componentRef}
          className={` bg-[#FFFFFF] dark:bg-dark-grayprimary  pt-[20px]  rounded-xl overflow-hidden`}
        >
          <div className="shadow-[inset_0_-2px_0px_0px_#D0D5DD]">
            <div className="ml-[20px] ">
              <div className="text-[18px] font-medium">
                <div className="text-[0.975rem] flex  items-center font-medium text-black dark:text-white cursor-pointer "  onClick={() => navigate(-1)}>
                  <span>
                    <IoIosArrowBack
                      className="px-[1px] text-[1rem]"
                      size={20}
                    />
                  </span>
                  Back to Home
                </div>
              </div>
              <p className="text-black dark:text-dark-secondary ml-[20px] text-[1rem] mt-[3px] font-medium">
                {active?.title}
              </p>
            </div>

            <div className="flex  mt-[32px] overflow-x-auto ">
              {sideContent.map((content) =>
                active?.id === content.id ? (
                  <div
                    key={content.id}
                    className="text-light-primary dark:text-dark-borderColor border-light-primary dark:border-dark-borderColor pb-[16px] border-b-[2px]  text-[1rem] font-medium cursor-pointer px-[37.5px] "
                  >
                    {content.title}
                  </div>
                ) : (
                  <div
                    key={content.id}
                    className=" text-[#D0D5DD] dark:text-white  pb-[16px]  text-[1rem] font-medium cursor-pointer px-[37.5px] "
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
