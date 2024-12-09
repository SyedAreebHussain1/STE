import { Dropdown, Input, Spin } from "antd";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import ChatBox from "./helpers/ChatBox";
import LeftSection from "./helpers/LeftSection";
import {
  sendIcon,
  sendIconDisable,
  sparklesIcon,
} from "../../assets/chatbotAssets";
import { useEffect, useRef, useState } from "react";
import { starGrayIcon } from "../../assets";
import {
  getAllChatApi,
  getChatHistoryByChatIdApi,
  getRemainingCreditsApi,
} from "../../services/api/Chatbot";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { io, Socket } from "socket.io-client";
import { getFromStorage } from "../../utils/storage";
import { errorMessage } from "../../utils/message";
import ToneOfVoiceModal from "./helpers/ToneOfVoiceModal";
import useToggle from "../../hooks/useToggle";
import {
  PromptsIcon,
  QuestionsIcon,
  ToneOfVoiceIcon,
} from "../../assets/checkOutAssets";
import { cleanGetChatHistoryByChatId } from "../../redux/slices/Chatbot/getChatHistoryByChatIdSlice";
import TextArea from "antd/lib/input/TextArea";
import ChatBanner from "./helpers/banner";
import OutOfCreditsModal from "./helpers/OutOfCreditsModal";

const SOCKET_SERVER_URL = import.meta.env.VITE_BASE_URL_SOCKET;

export type MessageT = {
  message: string;
  isLoggedInUser: boolean;
  createdAt: string;
};

const writingQuestionIdeas = {
  Blog: [
    "Get a list of blog post ideas",
    "Write a blog post",
    "Write a how-to guide style blog post",
    "Write a listicle style blog post",
    "Write an interview style blog post",
    "Write a product review style blog post",
    "Write an opinion piece style blog post",
    "Write a new update style blog post",
  ],
  Website: [
    "Write a full landing page",
    "Write an about-us page",
    "Write a services section",
    "Write a FAQs section",
    "Write a testimonials section",
  ],
  ECommerce: [
    "Write a product description",
    "Write a category description",
    "Write a buyer guide",
  ],
  Social: [
    "Write a social media post",
    "Write an engaging question",
    "Write a product post",
    "Write an event announcement",
    "Write a contest/giveaway post",
    "Write a poll/question post",
    "Write a motivational quote",
    "Write a customer testimonial & review",
  ],
  Email: [
    "Write a cold email",
    "Write a marketing email",
    "Write a welcome email",
    "Write a promotional/discount offer",
    "Write a newsletter",
    "Write a cart abandonment reminder",
    "Write a product launch announcement",
    "Write a survey/feedback request",
  ],
  Ads: [
    "Write an advertisement",
    "Write a Google ad",
    "Write a Facebook/Instagram ad",
    "Write a banner ad",
    "Write a piece of sponsored content",
    "Write a video script ad",
  ],
  SEO: ["Write a meta description", "Write a title tag"],
  Sales: [
    "Write a sales letter",
    "Write a proposal",
    "Write an elevator pitch",
    "Write a presentation script",
  ],
  CustomerSupport: [
    "Write a response template",
    "Write a trouble ticket response",
    "Write a feedback response",
  ],
  Video: [
    "Write an explainer video script",
    "Write a product demo video script",
    "Write a tutorial video script",
    "Write a brand story video script",
  ],
};

const writingIdeas = {
  "Business Model and Strategy": [
    "What type of business model should I consider?",
    "How can I differentiate my business from competitors?",
    "What is the best value proposition for my target market?",
    "Should I focus on breadth (variety) or depth (specialization)?",
    "How scalable is my business idea?",
    "How should I price my product/service?",
    "Should I consider a freemium model?",
    "What key activities and resources are critical for my business?",
    "How can I create a sustainable competitive advantage?",
    "Are there any potential pivot opportunities for the business in the future?",
  ],
  "Market Analysis": [
    "How big is my target market?",
    "What's the growth potential of this market?",
    "Who are my primary competitors?",
  ],
  "Market Research": [
    "What are the current market trends?",
    "What are the pain points of my target customers?",
    "What is the demographic profile of my potential customers?",
    "How can I best segment my market?",
    "What is the expected market share I can capture?",
    "Are there any regulatory constraints in my market?",
    "How sensitive is my target market to price changes?",
  ],
  "Marketing and Branding": [
    "How should I brand my business?",
    "Which marketing channels are most effective for my business?",
    "How can I measure the ROI of my marketing efforts?",
    "What should my unique selling proposition (USP) be?",
    "How important is social media marketing for my business?",
    "Should I consider influencer partnerships?",
    "How can I maximize customer lifetime value?",
    "How can I build brand loyalty?",
    "What are the best strategies for customer retention?",
    "Should I consider content marketing and how?",
  ],
  "Operations and Logistics": [
    "What are the key operating processes for my business?",
    "How can I optimize my supply chain?",
    "What technology can assist in streamlining operations?",
    "How do I ensure quality control?",
    "What's the ideal location for my business?",
    "How should I manage inventory?",
    "Are there any potential bottlenecks in my operating flow?",
    "How can I optimize shipping and delivery?",
    "What safety measures should I consider?",
    "How can I make my operations eco-friendly?",
  ],
  "Finance and Funding": [
    "How much startup capital do I need?",
    "What are my potential sources of funding?",
    "How should I manage my cash flow?",
    "What will be my major expenses?",
    "What are the potential revenue streams?",
    "When can I expect to reach the break-even point?",
    "How can I maximize profitability?",
    "Should I consider external investors? If so, when?",
    "What financial risks should I be aware of?",
    "What kind of financial software or tools would be beneficial?",
  ],
  "Legal and Compliance Questions": [
    "What kind of business entity should I form?",
    "What licenses and permits do I need?",
    "How can I protect my intellectual property?",
    "Are there any industry-specific regulations I should be aware of?",
    "How can I ensure data protection and privacy?",
    "What contracts and agreements should I have in place?",
    "How do I handle potential legal disputes?",
    "Should I have a dedicated legal advisor or team?",
    "What are the tax implications for my business?",
    "How can I ensure ethical business practices?",
  ],
  "Human Resources Questions": [
    "How do I build a strong company culture?",
    "What should my hiring strategy be?",
    "How can I attract and retain top talent?",
    "What compensation and benefits package should I offer?",
    "How do I handle employee training and development?",
    "What performance metrics should I track for employees?",
    "How can I foster diversity and inclusion?",
    "Should I consider remote work or flexible hours?",
    "How can I handle conflict resolution within the team?",
    "What steps can I take for employee well-being?",
  ],
  "Technology and Digital Transformation": [
    "What kind of tech infrastructure do I need?",
    "Should I consider cloud solutions?",
    "How can I ensure cybersecurity?",
    "What kind of CRM and ERP systems would be best for my business?",
    "Should I have a dedicated mobile app?",
    "How important is having an e-commerce platform?",
    "How can I use analytics and data to drive decisions?",
    "Which areas of my business can be automated?",
    "What digital marketing tools should I utilize?",
    "How can I keep up with technological trends relevant to my industry?",
  ],
  "Growth and Expansion": [
    "When should I consider expanding my business?",
    "What are potential new markets for expansion?",
    "How can I scale my operations efficiently?",
    "Should I consider franchising?",
    "How do I manage the challenges that come with rapid growth?",
    "Should I consider mergers or acquisitions?",
    "What new product or service lines can I introduce?",
    "How can I maintain company culture during growth?",
    "How do I ensure consistent quality as I expand?",
    "What are the risks associated with international expansion?",
  ],
  "Customer Experience and Feedback": [
    "How do I gather customer feedback effectively?",
    "What strategies can I employ to improve customer satisfaction?",
    "How can I handle negative reviews or feedback?",
    "How important is after-sales service and support?",
    "How can I use feedback for product or service improvement?",
    "How do I track and measure customer satisfaction?",
    "How can I create a seamless customer journey?",
    "What tools can assist in understanding customer behavior?",
    "How can I personalize the customer experience?",
    "What loyalty programs or incentives can I offer to repeat customers?",
  ],
};

const ChatBot = () => {
  const apiFirstCall = useRef(false);
  const [messages, setMessages] = useState<MessageT[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [selectedChatId, setSelectedChatId] = useState<number>(0);
  const [newChat, setNewChat] = useState(false);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const [toneOfVoice, setToneOfVoice] = useState("");
  const [chatHistoryExist, setChatHistoryExist] = useState(false);
  const [animation, setAnimation] = useState(false);
  const getAllChat = useSelector((state: RootState) => state.getAllChat);
  const [errorMessageOfChat, setErrorMessageOfChat] = useState("");

  const [open, toggle] = useToggle();
  const [outOfCreditsOpen, outOfCreditstoggle] = useToggle();

  const getChatHistoryByChatId = useSelector(
    (state: RootState) => state.getChatHistoryByChatId
  );
  const getRemainingCredits = useSelector(
    (state: RootState) => state.getRemainingCredits
  );
  let isSentingMessage = useRef(false);

  useEffect(() => {
    const newSocket: Socket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }
    if (selectedChatId) {
      socket.on(`getUpdatedChat${selectedChatId}`, (data: any) => {
        if (isSentingMessage.current) {
          isSentingMessage.current = false;

          if (data?.error) {
            return setErrorMessageOfChat(data?.error);
          }
          setRemainingCredit(data?.latestCounts);
          if (data.newChat) {
            setNewChat(true);
          }
          const dataObj: MessageT = {
            isLoggedInUser: false,
            message: data.message,
            createdAt: data.dateAndTime,
          };

          setMessages((prevMessages) => [...prevMessages, dataObj]);
        }
      });
    } else {
      socket.on(`getUpdatedChat`, (data: any) => {
        if (isSentingMessage.current) {
          isSentingMessage.current = false;

          if (data?.error) {
            return setErrorMessageOfChat(data?.error);
          }

          setRemainingCredit(data?.latestCounts);
          if (data.newChat) {
            setNewChat(true);
          }
        } else {
          return;
        }
      });
    }
  }, [selectedChatId, socket]);

  useEffect(() => {
    if (errorMessageOfChat) {
      errorMessage(errorMessageOfChat);
      setErrorMessageOfChat("");
    }
  }, [errorMessageOfChat]);

  const sendMessage = () => {
    if (remainingCredit <= 0) {
      outOfCreditstoggle();
      return;
    }
    if (isSentingMessage.current) return;
    setAnimation(true);
    isSentingMessage.current = true;

    const currentDateTime = new Date();
    const newMessage: MessageT = {
      message: messageInput,
      isLoggedInUser: true,
      createdAt: currentDateTime.toString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (messageInput.trim() && socket) {
      const user = getFromStorage("user");
      const business = getFromStorage("business");

      let dataobj: any = {
        message: messageInput,
        userId: user?.companyUser?.id,
        businessId: business?.id,
      };

      if (selectedChatId) {
        dataobj.chatId = selectedChatId;
      } else {
        dataobj.title = messageInput;
        dataobj.toneOfVoice =
          "Bold, energetic, enthusiastic, engaging, vibrant writing style with a lively, passionate, and inviting tone.";
      }

      socket.emit("userchatwithChatBot", dataobj);
      setMessageInput("");
    }
  };

  useEffect(() => {
    if (messages.length > 0) scrollToLatestMessage();
  }, [messages]);

  const scrollToLatestMessage = () => {
    endOfMessagesRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (getChatHistoryByChatId?.data?.data?.userChat?.toneOfVoice) {
      setToneOfVoice(getChatHistoryByChatId?.data?.data?.userChat?.toneOfVoice);
    } else {
      setToneOfVoice("");
    }
    if (getChatHistoryByChatId?.data?.data?.chatData?.length > 0) {
      setMessages(
        getChatHistoryByChatId?.data?.data?.chatData?.map((item: any) => ({
          isLoggedInUser: item?.MessageBy == "User",
          message: item?.message,
          createdAt: item?.createdAt,
        }))
      );
    } else {
      setMessages([]);
    }
  }, [getChatHistoryByChatId?.data?.data]);

  const itemsQuestions: any = Object.entries(writingQuestionIdeas).map(
    ([category, ideas]) => ({
      key: category,
      type: "group",
      label: <h1 className="text-[#212838]">{category}</h1>,
      children: ideas.map((idea, index) => ({
        key: `${category}-${index}`,
        label: (
          <button
            className="py-[2px] px-[5px] text-[#4A5366]"
            disabled={isSentingMessage.current}
            onClick={() => setMessageInput(idea)}
          >
            {idea}
          </button>
        ),
      })),
    })
  );
  const itemsPrompts: any = Object.entries(writingIdeas).map(
    ([category, ideas]) => ({
      key: category,
      type: "group",
      label: <h1 className="text-[#212838]">{category}</h1>,
      children: ideas.map((idea, index) => ({
        key: `${category}-${index}`,
        label: (
          <button
            className="py-[2px] px-[5px] text-[#4A5366]"
            disabled={isSentingMessage.current}
            onClick={() => setMessageInput(idea)}
          >
            {idea}
          </button>
        ),
      })),
    })
  );

  useEffect(() => {
    getRemainingCreditsApi(dispatch);
  }, []);

  useEffect(() => {
    if (getRemainingCredits?.data?.data) {
      setRemainingCredit(getRemainingCredits?.data?.data);
    } else {
      setRemainingCredit(0);
    }
  }, [getRemainingCredits]);

  useEffect(() => {
    setMessageInput("");
    if (selectedChatId) {
      apiFirstCall.current = false;
    }
    if (!apiFirstCall.current && selectedChatId) {
      apiFirstCall.current = true;
      getChatHistoryByChatIdApi(dispatch, selectedChatId);
    }
    return () => {
      dispatch(cleanGetChatHistoryByChatId());
    };
  }, [selectedChatId]);

  useEffect(() => {
    getAllChatApi(dispatch, () => {});
  }, []);

  useEffect(() => {
    if (getAllChat?.data?.data?.length && !chatHistoryExist) {
      setChatHistoryExist(true);
    }
  }, [getAllChat]);
  return (
    <div className="max-w-[1836px] w-full h-full">
      {open && (
        <ToneOfVoiceModal
          open={open}
          onClose={toggle}
          toneOfVoice={toneOfVoice}
          setToneOfVoice={setToneOfVoice}
          selectedChatId={selectedChatId}
        />
      )}
      {outOfCreditsOpen && (
        <OutOfCreditsModal
          open={outOfCreditsOpen}
          onClose={outOfCreditstoggle}
        />
      )}

      <div className="flex h-full ">
        <LeftSection
          selectedChatId={selectedChatId}
          setSelectedChatId={setSelectedChatId}
          setMessageInput={setMessageInput}
          setMessages={setMessages}
          newChat={newChat}
          setNewChat={setNewChat}
          isSending={isSentingMessage.current}
          remainingCredit={remainingCredit}
          setAnimation={setAnimation}
        />

        <div
          className=" flex flex-col  w-full h-full   relative "
          style={{
            background:
              "linear-gradient(to right,rgba(1, 106, 112, 0) 20%,rgba(1, 106, 112, 0.08))",
          }}
        >
          <div className="w-full h-full flex flex-col justify-end  overflow-y-auto custom-scrollbar  ">
            {remainingCredit == 0 && getAllChat?.data?.data?.length <= 0 ? (
              <div className="h-max px-[15px] pt-[20px]">
                <ChatBanner />
              </div>
            ) : null}

            <ChatBox
              selectedChatId={selectedChatId}
              messages={messages}
              endOfMessagesRef={endOfMessagesRef}
              isSending={isSentingMessage.current}
              animation={animation}
            />
          </div>
          <div className="px-[20px] h-max pb-[20px] ">
            <div className="p-4 pt-[10px] h-max flex flex-col gap-2 bg-[#fff] rounded-lg">
              <div className="  h-max  ">
                <TextArea
                  name="message"
                  autoSize={{ minRows: 2, maxRows: 4 }}
                  disabled={isSentingMessage.current}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Ask Anything"
                  className="w-full !bg-[#fff] custom-scrollbar !border-[0px] !outline-none !shadow-none text-[#4A5366] "
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (messageInput.trim()) {
                        sendMessage();
                      }
                    }
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  <Dropdown
                    menu={{ items: itemsQuestions }}
                    className="cursor-pointer"
                    overlayClassName="max-h-[250px] w-[400px] overflow-y-auto custom-scrollbar border-[1px] border-[#9392925c] p-[10px] custom-dropdown-title custom-dropdown-content custom-dropdown rounded-[8px] bg-[#fff]  "
                    trigger={["click"]}
                    placement="topLeft"
                  >
                    <div
                      className={`p-3 rounded-lg bg-icon  flex items-center justify-center  gap-2 w-max  `}
                    >
                      <img src={QuestionsIcon} alt="" className="w-[18px]" />
                      <h1 className="text-[#016A70] font-medium text-[15px]">
                        Questions
                      </h1>
                    </div>
                  </Dropdown>
                  <Dropdown
                    menu={{ items: itemsPrompts }}
                    className="cursor-pointer"
                    overlayClassName="max-h-[250px] w-[500px] overflow-y-auto custom-scrollbar border-[1px] border-[#9392925c] p-[10px] custom-dropdown  custom-dropdown-title custom-dropdown-content rounded-[8px] bg-[#fff]  "
                    trigger={["click"]}
                    placement="topLeft"
                  >
                    <div
                      className={`p-3 rounded-lg bg-icon flex items-center justify-center gap-2 w-max `}
                    >
                      <img src={PromptsIcon} alt="" className="w-[18px]" />
                      <h1 className="text-[#016A70] text-[15px] font-medium">
                        Prompts
                      </h1>
                    </div>
                  </Dropdown>
                  {selectedChatId ? (
                    <button>
                      <div
                        className={`p-3 rounded-lg bg-icon flex items-center justify-center gap-2 w-max `}
                        onClick={toggle}
                      >
                        <img
                          src={ToneOfVoiceIcon}
                          alt=""
                          className="w-[18px]"
                        />
                        <h1 className="text-[#016A70] font-medium text-[15px]">
                          Tone of voice
                        </h1>
                      </div>
                    </button>
                  ) : null}
                </div>
                <img
                  src={
                    isSentingMessage.current || !messageInput.trim()
                      ? sendIconDisable
                      : sendIcon
                  }
                  alt=""
                  className={` ${
                    isSentingMessage.current || !messageInput
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (isSentingMessage.current || !messageInput) {
                      return;
                    }

                    sendMessage();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
