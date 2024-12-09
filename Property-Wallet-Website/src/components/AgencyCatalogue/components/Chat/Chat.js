import React, { useEffect, useState } from "react";
import ChatIcon from "./../../assets/images/chat-icon.png";
import Chatbox from "./Chatbox";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
  const chat = useSelector((state) => state.chat);

  const [isChatBoxOpened, setIsChatBoxOpened] = useState(false);
  function toggleChatBox() {
    setIsChatBoxOpened((prev) => !prev);
  }
  const getAgencyDetails = useSelector((state) => state.getAgencyDetails);
  useEffect(() => {
    if (chat?.data?.by === "click") {
      setIsChatBoxOpened(true);
    }
  }, [chat?.data]);
  return (
    <div className="fixed right-0 sm:right-10 bottom-10 z-[999]">
      <div
        style={{
          backgroundColor: `#${
            getAgencyDetails?.data?.data?.agencyDigitalCatalogue
              ?.primaryColor || "6c47ff"
          }`,
        }}
        onClick={toggleChatBox}
        className="w-[68px] h-[68px] rounded-full flex justify-center items-center cursor-pointer"
      >
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.875 0.75C2.187 0.75 0 2.937 0 5.625V22.0884C0 22.8099 0.399469 23.4621 1.04297 23.7891C1.31747 23.9293 1.61466 23.9971 1.91016 23.9971C2.30466 23.9971 2.6963 23.8746 3.0293 23.6323L9.73975 18.75H19.125C21.813 18.75 24 16.563 24 13.875V5.625C24 2.937 21.813 0.75 19.125 0.75H4.875ZM7.125 6H16.875C17.496 6 18 6.50325 18 7.125C18 7.74675 17.496 8.25 16.875 8.25H7.125C6.504 8.25 6 7.74675 6 7.125C6 6.50325 6.504 6 7.125 6ZM25.5 7.51904V13.875C25.5 17.3902 22.6402 20.25 19.125 20.25H10.229L6.57129 22.9102C7.39179 24.4499 9.01275 25.5 10.875 25.5H20.2603L26.9707 30.3809C27.3037 30.6239 27.6953 30.7471 28.0898 30.7471C28.3853 30.7471 28.6825 30.6778 28.957 30.5376C29.5998 30.2106 30 29.5584 30 28.8369V12.375C30 9.81375 28.0133 7.71179 25.5 7.51904ZM7.125 11.25H14.625C15.246 11.25 15.75 11.7533 15.75 12.375C15.75 12.9967 15.246 13.5 14.625 13.5H7.125C6.504 13.5 6 12.9967 6 12.375C6 11.7533 6.504 11.25 7.125 11.25Z"
            fill={`#${getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.fontColor}`}
          />
        </svg>
      </div>
      <Chatbox
        toggleChatBox={toggleChatBox}
        visible={isChatBoxOpened}
        color={
          getAgencyDetails?.data?.data?.agencyDigitalCatalogue?.primaryColor
        }
      />
    </div>
  );
};

export default Chat;
