import React from "react";
import EmptyChat from "./EmptyChat";
import Messages from "./Messages";
import { MessageT } from "..";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { LoadingGIF } from "../../../assets";

interface Props {
  messages: MessageT[];
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
  selectedChatId?: number;
  isSending: boolean;
  animation: boolean;
}

const ChatBox = ({
  selectedChatId,
  messages,
  endOfMessagesRef,
  isSending,
  animation,
}: Props) => {
  const getChatHistoryByChatId = useSelector(
    (state: RootState) => state.getChatHistoryByChatId
  );
  return getChatHistoryByChatId?.loading ? (
    <Spin
      spinning={getChatHistoryByChatId?.loading}
      indicator={
        <img src={LoadingGIF} style={{ width: "220px", height: "150px" }} />
      }
      className="w-full h-full flex justify-center items-center"
    ></Spin>
  ) : (
    <div
      className={`flex flex-col relative justify-end px-4 py-1 h-full overflow-x-hidden`}
    >
      {selectedChatId || messages?.length > 0 ? (
        <div className={` w-full h-max overflow-y-auto  custom-scrollbar `}>
          <Messages
            messages={messages}
            endOfMessagesRef={endOfMessagesRef}
            isSending={isSending}
            animation={animation}
          />
        </div>
      ) : (
        <div className={`w-full h-full flex flex-col justify-center `}>
          <EmptyChat />
        </div>
      )}
    </div>
  );
};

export default ChatBox;
