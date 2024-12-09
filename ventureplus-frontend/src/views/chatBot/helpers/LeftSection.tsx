import React, { useEffect } from "react";
import { addIcon } from "../../../assets";
import {
  doubleRightArrowIcon,
  leftSectionBottomImg,
  newChatbotIcon,
} from "../../../assets/chatbotAssets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { getAllChatApi } from "../../../services/api/Chatbot";
import { useDispatch, useSelector } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";
import { RootState } from "../../../redux/store";
import { clearGetAllChat } from "../../../redux/slices/Chatbot/getAllChatSlice";
import { MessageT } from "..";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const LeftSection = ({
  selectedChatId,
  setSelectedChatId,
  setMessageInput,
  setMessages,
  newChat,
  setNewChat,
  isSending,
  remainingCredit,
  setAnimation,
}: {
  selectedChatId: number;
  setSelectedChatId: React.Dispatch<React.SetStateAction<number>>;
  setMessageInput: React.Dispatch<React.SetStateAction<string>>;
  setMessages: React.Dispatch<React.SetStateAction<MessageT[]>>;
  newChat: boolean;
  setNewChat: React.Dispatch<React.SetStateAction<boolean>>;
  isSending: boolean;
  remainingCredit: number;
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const getAllChat = useSelector((state: RootState) => state.getAllChat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getAllChatApi(dispatch, onSuccess);
    return () => {
      dispatch(clearGetAllChat());
    };
  }, [newChat]);

  const onSuccess = (dataobj: any) => {
    if (newChat && dataobj?.data?.[0]?.id) {
      setSelectedChatId(dataobj?.data[0].id);
      setNewChat(false);
    }
  };

  return (
    <div className="border-[0px] border-r-[1px] border-strokes h-full flex flex-col w-[25%] bg-[#F8FAFC] ">
      <div className="bg-[#016A70] text-[#FFFFDD] flex items-center gap-2 py-[12px] px-[20px] h-max">
        <FaStar className="text-[18px] " />
        <h2 className="text-[18px] font-medium leading-[20px]">
          Remaining Credits:
          <span className="font-semibold"> {remainingCredit}</span>
        </h2>
      </div>
      <div className="w-full h-full flex flex-col gap-2  py-4  overflow-hidden">
        <div className="px-4 w-full h-max ">
          <button
            disabled={isSending}
            className="flex items-center text-[#016A70]  gap-2 border-b-[1px] pb-[10px] pl-[10px] w-full "
            onClick={() => {
              setMessageInput("");
              setMessages([]);
              setSelectedChatId(0);
            }}
          >
            <img src={newChatbotIcon} />
            <span className="text-[18px] leading-4">New Chat</span>
          </button>
        </div>
        <div className="w-full h-full overflow-y-auto custom-scrollbar px-4 flex flex-col gap-1">
          {getAllChat?.data?.data?.length > 0
            ? getAllChat?.data?.data.map((chat: any, i: number) => {
                const chatDate = new Date(chat?.createdAt);
                const today = new Date();
                const tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);

                let dateLabel;
                if (
                  chatDate.getDate() === today.getDate() &&
                  chatDate.getMonth() === today.getMonth() &&
                  chatDate.getFullYear() === today.getFullYear()
                ) {
                  dateLabel = "Today";
                } else if (
                  chatDate.getDate() === tomorrow.getDate() &&
                  chatDate.getMonth() === tomorrow.getMonth() &&
                  chatDate.getFullYear() === tomorrow.getFullYear()
                ) {
                  dateLabel = "Tomorrow";
                } else {
                  dateLabel = chatDate.toLocaleDateString(); // format as needed
                }

                // Track last shown date to only show once
                const shouldShowDateLabel =
                  i === 0 ||
                  new Date(
                    getAllChat.data.data[i - 1]?.createdAt
                  ).toLocaleDateString() !== chatDate.toLocaleDateString();

                return (
                  <div key={i} className="w-full">
                    {shouldShowDateLabel && (
                      <div className="text-[15px] w-full  text-[#98A2B3] mb-[5px] mt-[5px]">
                        {dateLabel}
                      </div>
                    )}
                    <Button
                      disabled={isSending}
                      onClick={() => {
                        setSelectedChatId(chat?.id);
                        setAnimation(false);
                      }}
                      className={` text-[#212838] rounded-sm px-[10px] flex justify-start py-[14px] cursor-pointer border-[0] outline-none shadow-none w-full `}
                      style={{
                        background:
                          selectedChatId == chat?.id
                            ? "rgba(204, 225, 226, 0.3)"
                            : "transparent",
                      }}
                    >
                      <h1 className="w-[180px] text-[15px] font-medium cursor-pointer text-ellipsis text-left overflow-hidden whitespace-nowrap">
                        {chat?.title}
                      </h1>
                    </Button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
