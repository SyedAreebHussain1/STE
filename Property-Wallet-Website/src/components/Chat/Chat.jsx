import React, { useEffect, useState } from "react";
import { Launcher } from "popup-chat-react";
import "./Chat.css";
import { useWs } from "../AgencyCatalogue/utils/hooks/useWs";
function Chat({ isChatBot }) {
  const [ready, val, send] = useWs(process.env.REACT_APP_WEBSOCKET_URL)
  const [state, setState] = useState({
    messageList: [],
    newMessagesCount: 0,
    isOpen: false,
    fileUpload: false,
  });
  const [newText, setNewText] = useState("")
  function onMessageWasSent(message) {
    setState((state) => ({
      ...state,
      messageList: [...state.messageList, message],
    }));
      send(message.data.text)
  }

  useEffect(() => {
    if(val){
      const parsedVal = JSON.parse(val)
      const text = parsedVal?.data?.[0]?.answer
      // setNewText(text.substring(1))
      const message = {
        type: "text",
        author: "them",
        data: { text: text },
      }
      setState((state) => ({
        ...state,
        messageList: [...state.messageList, message],
      }));
      
    }
  }, [val])

  // useEffect(() => {
  //   if(newText){
  //     const newTextArr = newText.split("")
  //     const letterToShow = newTextArr.shift()
  //     setTimeout(() => {
  //       const newMessageList = state.messageList.map((item, i) => {
  //         if(i === state.messageList.length - 1){
  //           return {
  //             ...item,
  //             data: { text: item.data.text + letterToShow }
  //           }
  //         }
  //         return item
  //       })
  //       setState((state) => ({
  //         ...state,
  //         messageList: [...newMessageList],
  //       }));
        
  //     setNewText(newTextArr.join(""))
  //     }, 10)
  //   }
  // }, [newText])

  //modify its acutally get message from bot
  function sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = state.isOpen
        ? state.newMessagesCount
        : state.newMessagesCount + 1;

      setState((state) => ({
        ...state,
        newMessagesCount: newMessagesCount,
        messageList: [
          ...state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      }));
    }
  }

  function onClick() {
    // console.log('running onclick');
    setState((state) => ({
      ...state,
      isOpen: !state.isOpen,
      newMessagesCount: 0,
    }));
  }

  return (
    <>
    {isChatBot && <Launcher
      agentProfile={{
        teamName: <span style={{ fontSize: "18px" }}>Property Wallet</span>,
        imageUrl: require("./header.png"),
      }}
      onMessageWasSent={onMessageWasSent}
      messageList={state.messageList}
      newMessagesCount={state.newMessagesCount}
      onClick={onClick}
      isOpen={state.isOpen}
      onPinMessage={(value) => console.log(value)}
      placeholder="Type here..."
    />}
    
    </>
  );
}

export default Chat;
