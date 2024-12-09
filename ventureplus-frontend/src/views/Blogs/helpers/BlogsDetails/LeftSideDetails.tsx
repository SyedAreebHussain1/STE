import { useEffect, useState } from "react";
import moment from "moment";
import HTMLParser from "./HtmlParser";

const LeftSideDetail = ({
  blogsArray,
  blogsSocialArray,
}: {
  blogsArray: any;
  blogsSocialArray: any;
}) => {
  const [idArray, setIdArray] = useState<any>([]);
  const sentences = blogsArray?.blog
    ?.split('"')
    .filter((sentence: string) => sentence.trim() !== "");

  const heading = sentences?.map((headings: string, index: number) => {
    return headings?.split(" ").slice(0, 2).join(" ");
  });

  useEffect(() => {
    if (blogsArray) {
      const idarr = heading.map((item: any, index: number) => index);
      setIdArray(idarr);
    }
  }, [blogsArray]);
  return (
    <>
      <h3 className="font-semibold text-[36px]  text-[#212838] mt-[5px]  leading-[39.17px]">
        {blogsArray?.blogCategory?.title}
      </h3>
      <p className="text-[18px] font-semibold text-[#4A5366] mt-[3px]">
        {blogsArray?.title}
      </p>
      <div className="flex gap-[15px] items-center mt-[20px]">
        <span className="bg-[#016a700d] text-[12px] text-[#016A70] px-[20px] py-[10px] rounded-full font-medium">
          Presented By {blogsArray?.author}
        </span>
        <p className="text-[#4A5366] text-[12px] font-medium pl-[15px] border-l-[2px] border-[#EAECF0]">
          Presented By {blogsArray?.author}
        </p>
        <p className="text-[#4A5366] text-[12px] font-medium pl-[15px] border-l-[2px] border-[#EAECF0]">
          {moment(blogsArray?.createdAt).format("MMMM Do YYYY")}
        </p>
      </div>
      <div className="flex mt-[20px] gap-3">
        {blogsSocialArray?.map((item: any, key: number) => (
          <a
            key={key}
            className="flex justify-center items-center border-[1px] border-[#CDD4DF] rounded-lg p-[10px]"
            style={{ boxShadow: "0 1px 2px 0px rgba(1, 106, 112, 0.1)" }}
            href={item?.link}
          >
            <img src={item?.icon} className="w-[28px] h-[28px]" />
          </a>
        ))}
      </div>
      <div className="w-full mt-[25px] flex flex-col gap-5">
        <img
          src={
            blogsArray?.blogPictures[0]?.url
              ? blogsArray?.blogPictures[0]?.url
              : "https://www.aristocracy.london/wp-content/uploads/2019/08/the-81-rules-of-handshake-etiquette.jpg"
          }
          className="w-full h-[530px] rounded-xl"
        />
        <HTMLParser htmlString={blogsArray?.blog} />
        {/* <div>
          {sentences?.map((sen: string, index: number) => (
            <div
            key={index}
              id={index + ""}
            >
              <h1 className="text-[#014043] text-[18px] font-semibold">
                <span className="mr-[5px]">{index + 1}.</span>{" "}
                {sen?.split(" ").slice(0, 2).join(" ")}
              </h1>
              <p
                className={`text-[15px] font-semibold text-[#4A5366] leading-[26px]`}
              >
                {sen}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};
export default LeftSideDetail;
