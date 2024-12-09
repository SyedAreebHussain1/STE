import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { SubScriptionImageforBlogs } from "../../../../assets/blogs";
import RoundedButton from "../../../../components/button/RoundedButton";

const RightSideDetails = ({ blogsArray }: { blogsArray: any }) => {
  const [topElementId, setTopElementId] = useState<null | string>(null);
  const [idArray, setIdArray] = useState<string[]>([]);

  const elementRefs = useRef<Record<string, HTMLElement>>({});

  const sentences = blogsArray?.blog
    ?.split('"')
    .filter((sentence: string) => sentence.trim() !== "");

  const heading = sentences?.map((headings: string, index: number) => {
    return headings?.split(" ").slice(0, 2).join(" ");
  });

  useEffect(() => {
    // if (heading?.length>0) {
    //   const idarr = heading.map(
    //     (item: any, index: number) => index
    //   );
    //   setIdArray(idarr);
    // }
  }, [heading]);

  useEffect(() => {
    if (idArray.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleElements = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            );

          if (visibleElements.length > 0) {
            setTopElementId(visibleElements[0].target.id);
          }
        },
        { threshold: 1 }
      );

      idArray.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          elementRefs.current[id] = element as HTMLElement;
        }
      });

      return () => {
        idArray.forEach((id) => {
          const element = elementRefs.current[id];
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }
  }, [idArray]);

  return (
    <div className=" w-full h-max">
      <div className="flex gap-3 items-center">
        <LuMenu className="text-[#4A5366] font-semibold text-[20px]" />
        <h1 className="text-[#4A5366] font-semibold text-[15px]">
          On this page
        </h1>
      </div>

      <div className="flex gap-4 w-full h-full mt-[10px]">
        <div className="w-[4px] rounded-full h-[auto] bg-[#E3E7EF]"></div>
        <div className="flex flex-col gap-2">
          {heading?.map((item: any, index: number) => (
            <SideMenuTitle
              key={index}
              id={index + ""}
              heading={item}
              topElementId={topElementId}
            />
          ))}
        </div>
      </div>
      <div className="mt-[20px] w-full">
        <div
          className="h-[250px] w-full overflow-hidden rounded-xl px-[20px] flex items-end py-[30px]"
          style={{
            backgroundImage: `url(${SubScriptionImageforBlogs})`,
          }}
        >
          <div>
            <h1 className="text-[29px] text-[#FFFFFF] font-bold leading-8">
              Manage your Growth
            </h1>
            <p className="text-[12px] font-medium text-[#fff]">
              Keep up with the latest industry trends to stay competitive.
            </p>
            <RoundedButton
              title={"Subscribe Now"}
              type="white"
              className="mt-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSideDetails;

const SideMenuTitle = ({
  id,
  heading,
  topElementId,
}: {
  id: string;
  heading: string;
  topElementId: string | null;
}) => {
  return (
    <a
      href={`#${id}`}
      className="flex w-full h-[28px] items-center relative cursor-pointer"
    >
      <div
        className={`w-[4px]  h-[28px]  absolute top-0 -left-[20px] rounded-full ${
          topElementId && topElementId == id ? " bg-[#016A70]" : ""
        }`}
      ></div>
      <button className="text-[#4A5366] text-[15px] font-semibold">
        {heading}
      </button>
    </a>
  );
};
