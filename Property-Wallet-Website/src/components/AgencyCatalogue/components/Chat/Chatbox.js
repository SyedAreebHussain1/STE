import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Input, Select, Rate, Dropdown } from "antd";
import Button from "../Buttons/Button";
import { IoSend } from "react-icons/io5";
import CountryPhoneInput, { ConfigProvider } from "antd-country-phone-input";
import en from "world_countries_lists/data/countries/en/world.json";
import {
  getUserMessagesApi,
  getUsersToChatApi,
  initiateChatApi,
  sendChatMessageApi,
} from "../../redux/api/Chat";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage } from "../../utils/message";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { socket } from "../../utils/socket";
import { removeChatData, setChatData } from "../../redux/slice/Chat/chatSlice";
import NotificationSound from "../../assets/audio/audio.wav";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { useParams } from "react-router-dom";

const Chatbox = ({ toggleChatBox, visible, color }) => {
  const containerRef = useRef();
  const timerRef = useRef();
  const [selectedUser, setSelectedUser] = useState("");
  const [userCode, setUserCode] = useState(getFromStorage("userCode") || "");
  const [state, setState] = useState({
    phone: {
      code: "+92",
      short: "PK",
      phone: getFromStorage("userPhone") || "",
    },
  });
  const params = useParams();
  const dispatch = useDispatch();
  const audioPlayer = useRef();
  const chat = useSelector((state) => state.chat);
  const initiateChat = useSelector((state) => state.initiateChat);
  const [isInitiationSuccess, setInitiationSuccess] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userNameErr, setUserNameErr] = useState("");
  const [phoneNoErr, setPhoneNoErr] = useState("");
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getUsersToChat = useSelector((state) => state.getUsersToChat);

  function onSuccess(code) {
    setInitiationSuccess(true);
    setUserCode(code);
    setInStorage("userPhone", state.phone.phone);
    setInStorage("userCode", userCode);
    setPhoneNoErr("");
    setUserNameErr("");
  }
  function onSuccessSendMessage(data) {
    // set Last Message to messages state array
    setMessages((prev) => [...prev, data]);
    const container = containerRef?.current;
    setTimeout(() => {
      container.scrollTo({
        top: container.scrollHeight - container.clientHeight,
        behavior: "smooth",
      });
    }, 300);
  }

  function sendMessage(message, clearInput) {
    if (!message) {
      errorMessage("Please Enter the Message");
      return;
    }
    const body = {
      publicConversationId: initiateChat?.data?.data?.id,
      userCode: userCode,
      message: message,
    };
    function onSuccessInputMessage(data) {
      onSuccessSendMessage(data);
      clearInput();
    }
    sendChatMessageApi(dispatch, body, onSuccessInputMessage);
  }
  useEffect(() => {
    if (isInitiationSuccess) {
      const timeout = setTimeout(() => {
        setIsWait(true);
      }, 3000);
      timerRef.current = timeout;
    }
  }, [isInitiationSuccess]);
  function handleClick() {
    if (!chat?.data) {
      errorMessage("Please Select Team Member!");
      return;
    }
    if (state.phone.phone === "" && userCode === "") {
      setPhoneNoErr("Please enter phone no");
      setUserNameErr("Please enter name");
    } else if (state.phone.phone === "") {
      setPhoneNoErr("Please enter phone no");
      setUserNameErr("");
    } else if (userCode === "") {
      setUserNameErr("Please enter name");
      setPhoneNoErr("");
    } else {
      const phone = String(state.phone.code).startsWith("+")
        ? String(state.phone.code).substring(1)
        : String(state.phone.code);
      const code = userCode.trim() + phone + state.phone.phone;
      const body = {
        userId: chat?.data?.id,
        userCode: code,
        name: userCode,
        phone: state.phone.code.toString().includes("+")
          ? `${state.phone.code}${state.phone.phone}`
          : `+${state.phone.code}${state.phone.phone}`,
      };
      initiateChatApi(dispatch, body, onSuccess);
    }
  }
  function onSuccessGetMessages(data) {
    if (data?.data?.items?.length) {
      setMessages((prev) =>
        [...[...prev].reverse(), ...data?.data?.items].reverse()
      );
    }
  }

  useEffect(() => {
    if (userCode && initiateChat.data && isInitiationSuccess) {
      const body = {
        id: initiateChat?.data?.data?.id,
        userCode: userCode,
      };
      getUserMessagesApi(dispatch, pageLimit, body, onSuccessGetMessages);
    }
  }, [userCode, initiateChat.data, pageLimit, isInitiationSuccess]);

  function onConnect(data) {
    //play
    clearTimeout(timerRef.current);
    setIsWait(false);
    audioPlayer.current.play();
    setMessages((prev) => [...prev, data.data]);
    const container = containerRef?.current;
    setTimeout(() => {
      container.scrollTo({
        top: container.scrollHeight - container.clientHeight,
        behavior: "smooth",
      });
    }, 300);
    const timeout = setTimeout(() => {
      setIsWait(true);
    }, 3000);
    timerRef.current = timeout;
  }

  useEffect(() => {
    if (isInitiationSuccess) {
      socket.connect();

      const eventListenerName = `pchat-pubuser-${userCode}-${initiateChat?.data?.data?.id}`;
      // console.log(eventListenerName);
      socket.on(eventListenerName, onConnect);

      return () => {
        // socket.disconnect();
        socket.off(eventListenerName, onConnect);
      };
    }
  }, [socket, userCode, initiateChat?.data?.data?.id, isInitiationSuccess]);

  function scrollFunc(e) {
    if (containerRef?.current?.scrollTop === 0) {
      setPageLimit((prev) => {
        return {
          page: prev.page + 1,
          limit: prev.limit,
        };
      });
    }
  }

  useEffect(() => {
    containerRef?.current?.addEventListener("scroll", scrollFunc);
    return () => {
      containerRef?.current?.removeEventListener("scroll", scrollFunc);
    };
  }, [messages]);

  useEffect(() => {
    if (messages?.length <= 10) {
      const container = containerRef?.current;
      if (container) {
        container.scrollTo({
          top: container.scrollHeight - container.clientHeight,
          behavior: "smooth",
        });
      }
    }
  }, [messages]);
  useEffect(() => {
    if (visible) {
      getUsersToChatApi(dispatch, { page: 1, limit: 999 }, params?.id);
    }
    setPhoneNoErr("");
    setUserNameErr("");
  }, [visible]);

  const items = getUsersToChat?.data?.data?.items
    ?.filter((item) => !item?.isDisabled)
    ?.map((item, i) => {
      return {
        label: (
          <div
            className="flex gap-2 items-center"
            onClick={() => {
              setSelectedUser(item?.profile?.fullName);
              dispatch(
                setChatData({
                  image:
                    item?.profile?.profile_picture_url ||
                    "https://placehold.co/107x107",
                  name: item?.profile?.fullName,
                  id: item?.id,
                })
              );
            }}
          >
            <div className="w-[40px] h-[40px] object-cover rounded-full overflow-hidden">
              <img
                src={
                  item?.profile?.profile_picture_url ||
                  "https://placehold.co/23x23"
                }
                alt=""
                className="w-[40px] h-[40px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span style={{ marginTop: "10px" }}>
                {item?.profile?.fullName}
              </span>
              <span style={{ marginTop: "-5px" }}>
                {item?.role?.title === "agentOwner"
                  ? "Agency Owner"
                  : item?.role?.title === "agentManager"
                  ? "Agency Manager"
                  : "Agent"}
              </span>
              <Rate
                style={{ fontSize: "10px", marginTop: "-20px" }}
                value={
                  item?.agentReview?.length > 0
                    ? Math.round(
                        item?.agentReview
                          ?.map((item) => item.rateStar)
                          ?.reduce((prev, curr) => prev + curr) /
                          item?.agentReview?.length
                      )
                    : "0"
                }
                disabled={true}
              />
            </div>
          </div>
        ),
        key: i,
      };
    });

  return (
    <div
      className="absolute bottom-20 w-[359px] bg-white rounded-lg shadow-2xl agency-catalogue"
      style={{
        left: visible ? "-18.25rem" : "200%",
        transition: "all .3s ease",
      }}
    >
      <audio ref={audioPlayer} src={NotificationSound} />
      <div
        style={{ backgroundColor: `#${color || "6C47FF"}` }}
        className="flex p-3 rounded-t-lg items-center justify-between"
      >
        <h3 className="text-lg text-white">Live Chat</h3>
        <button onClick={toggleChatBox}>
          <RxCross1 color="#fff" size="20" />
        </button>
      </div>

      {/* CHAT BODY */}
      {isInitiationSuccess ? (
        <>
          <div className="flex gap-2 items-center p-4 bg-[#fff]">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
              <img src={chat.data.image} alt="" width={28} height={28} />
            </div>
            <h4 className="text-xs font-semibold">{chat.data.name}</h4>
          </div>
          <div
            className="p-4 bg-[#fff] h-[240px]  overflow-y-auto"
            ref={containerRef}
          >
            <ChatMessages isWait={isWait} messages={messages} />
          </div>
          <ChatInput sendMessage={sendMessage} />
        </>
      ) : (
        <div className="p-4 bg-[#00000014] h-[331px]  overflow-y-auto">
          {chat?.data?.by === "click" && (
            <Input
              placeholder="Enter your name"
              value={chat?.data?.name}
              disabled
              className="bg-[#fff] px-4 py-3 mb-[2%]"
              onChange={(e) => setUserCode(e.target.value)}
            />
          )}
          {chat?.data?.by === undefined && (
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              overlayClassName="max-h-[400px] overflow-auto"
            >
              <Input
                placeholder="Select Team Member"
                className="cursor-pointer"
                value={selectedUser}
                classNames={"bg-[#fff] px-4 py-3"}
              />
            </Dropdown>
          )}

          <div className="mt-[2%]">
            <Input
              placeholder="Enter your name"
              className="bg-[#fff] px-4 py-3"
              onChange={(e) => setUserCode(e.target.value)}
              value={userCode}
            />
            <p className="text-[red]">{userNameErr && userNameErr}</p>
          </div>
          <div style={{ marginTop: "2%" }}>
            <ConfigProvider locale={en}>
              <CountryPhoneInput
                inline
                placeholder="Enter your phone No."
                disabled={state?.isCheck}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                maxLength={20}
                value={state.phone}
                onChange={(e) =>
                  setState({
                    ...state,
                    phone: e,
                  })
                }
                defaultValue={{
                  short: "PK",
                }}
              />
            </ConfigProvider>
            <p className="text-[red]">{phoneNoErr && phoneNoErr}</p>
          </div>
          <p className="text-xs text-[#4A5568]  px-2 py-3 leading-5">
            <span className="font-semibold">
              Please remember these details,
            </span>
            these details can be use again for your chat history and can use
            live chat feature with Agent.
          </p>
          <div className="flex justify-center items-center">
            <Button
              variant={"filled-inverse"}
              label={"Chat Now"}
              className={"!text-[0.813rem] !px-[0.813rem] !py-2"}
              onClick={handleClick}
              loading={initiateChat.loading}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
