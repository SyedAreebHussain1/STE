import { useState, useEffect, useRef } from "react";
import { arrowDownCircleIcon, arrowUpCircleIcon } from "../../../assets";

interface Props {
  question: string;
  answer: string;
}

const CollapsibleQuestion = ({ question, answer }: Props) => {
  const [isExpand, setIsExpand] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpand ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isExpand]);

  return (
    <div className="flex flex-col gap-2">
      <div className="p-4 rounded-lg bg-foreground flex justify-between items-center">
        <h1 className="body-s font-medium text-body">{question}</h1>
        <img
          src={isExpand ? arrowUpCircleIcon : arrowDownCircleIcon}
          alt=""
          className="w-5 h-5 cursor-pointer"
          onClick={() => setIsExpand(!isExpand)}
        />
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out body-s text-body`}
      >
        <div className={`p-4`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleQuestion;
