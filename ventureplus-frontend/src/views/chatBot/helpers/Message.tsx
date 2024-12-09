import { useEffect, useRef, useState } from "react";
import { chatbotIcon } from "../../../assets/chatbotAssets";
import { TypewriterForChet } from "../../../components/TypewriterForChet/TypewriterForChet";

interface Props {
  message: {
    message: string;
    isLoggedInUser: boolean;
    createdAt: string;
  };
  lastindex: number;
  index: number;
  animation: boolean;
}
function formatDateTime(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();
  // function getWeekStartAndEnd(date: Date): { weekStart: Date; weekEnd: Date } {
  //   const dayOfWeek = date.getDay();
  //   const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  //   const weekStart = new Date(date.setDate(diff));
  //   weekStart.setHours(0, 0, 0, 0);

  //   const weekEnd = new Date(weekStart);
  //   weekEnd.setDate(weekStart.getDate() + 6);
  //   weekEnd.setHours(23, 59, 59, 999);

  //   return { weekStart, weekEnd };
  // }

  // const { weekStart, weekEnd } = getWeekStartAndEnd(new Date());

  // if (inputDate >= weekStart && inputDate <= weekEnd) {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return inputDate.toLocaleString("en-US", options);
  // } else {
  //   return inputDate.toLocaleString("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: true,
  //   });
  // }
}
const Message = ({ message, lastindex, index, animation }: Props) => {
  const newMessage = message.message
    ?.replace(/#linebreak#/g, "<br/><br/>")
    .replace(/#bold#/g, "<b>")
    .replace(/#endbold#/g, "</b>");

  const containerRef = useRef<any>(null);

  const scrollOnView = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        scrollOnView();
      }
    });

    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [containerRef.current]);

  return (
    <div
      className={`w-full flex ${message.isLoggedInUser ? "justify-end" : ""} `}
    >
      <div
        className={`${
          message.isLoggedInUser
            ? "max-w-[60%] bg-[#FCFCFC] border-[#F2F4F8] border-[1px] rounded-lg"
            : "max-w-[100%]"
        } min-w-[200px] p-2 px-2  `}
        style={{
          boxShadow: message.isLoggedInUser
            ? "0px 4px 8px 1px rgba(0, 42, 45, 0.08) "
            : "none",
        }}
      >
        <div className="flex  items-center">
          {message.isLoggedInUser ? (
            <h1 className="text-[#212838] text-[12px] font-medium">You</h1>
          ) : (
            <div className="flex gap-1 items-center">
              <img src={chatbotIcon} className="w-[15px]" alt="chatbot icon" />
              <h1 className="text-[#212838] text-[12px] font-medium">
                Ventureplus.ai
              </h1>
            </div>
          )}
          <div className="mx-[5px] h-[10px] w-[1px] bg-[#E3E7EF]"></div>
          <h1 className="text-[10px] font-normal text-[#97A1B5] ">
            {formatDateTime(message.createdAt)}
          </h1>
        </div>
        <div
          className={`rounded-lg mt-[10px]  ${
            message.isLoggedInUser ? "text-[#212838] font-large " : "font-large"
          }`}
        >
          {!message.isLoggedInUser && lastindex == index && animation ? (
            <div id="typeWriterForChet" ref={containerRef}>
              <TypewriterForChet text={newMessage} delay={7} />
            </div>
          ) : (
            <span
              dangerouslySetInnerHTML={{
                __html: newMessage,
              }}
            ></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
