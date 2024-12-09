import React, { useState } from "react";
import { Input, Spin } from "antd";
import { IoSend } from "react-icons/io5";
import { useSelector } from "react-redux";
const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");
  function clearInput() {
    setMessage("");
  }
  const sendChatMessage = useSelector((state) => state.sendChatMessage);

  return (
    <div className="relative flex">
      <Input
        placeholder="Send Message"
        className="!bg-[#34405414] text-sm !h-14 w-[85%] border-none"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onPressEnter={() => {
          if(!sendChatMessage.loading){
            sendMessage(message, clearInput)
          }
        }}
      />
      <div className="w-[15%] flex items-center justify-center bg-[#34405414]">
        <Spin spinning={sendChatMessage.loading}>
          <IoSend
            color="#6C47FF"
            className="cursor-pointer"
            size={"20"}
            onClick={() => sendMessage(message, clearInput)}
          />
        </Spin>
      </div>
    </div>
  );
};

export default ChatInput;
