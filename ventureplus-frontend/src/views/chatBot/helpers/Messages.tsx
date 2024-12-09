import { useEffect, useRef } from "react";
import { MessageT } from "..";
import { loadingEditPlan } from "../../../assets/viewPlanAssets";
import Message from "./Message";

interface Props {
  messages: MessageT[];
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
  isSending: boolean;
  animation: boolean;
}

const Messages = ({
  messages,
  endOfMessagesRef,
  isSending,
  animation,
}: Props) => {
  const containerRef = useRef<any>(null);

  const scrollToLatestMessage = () => {
    endOfMessagesRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isSending) {
      const timeoutId = setTimeout(() => {
        scrollToLatestMessage();
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [isSending, containerRef.current]);

  return (
    <div className=" p-4 flex flex-col h-max w-full" ref={containerRef}>
      <div className="flex flex-col gap-5 pr-4">
        {messages.map((message, i) => (
          <Message
            key={i}
            message={message}
            lastindex={messages?.length - 1}
            index={i}
            animation={animation}
          />
        ))}
      </div>
      {isSending ? (
        <div>
          <img src={loadingEditPlan} className="py-[10px] w-14" />
        </div>
      ) : null}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default Messages;
