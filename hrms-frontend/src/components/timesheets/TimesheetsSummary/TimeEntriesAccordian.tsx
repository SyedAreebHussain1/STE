import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  title: string;
  content: string;
  count: string;
};

const TimeEntriesAccordian = ({ title, content, count }: Props) => {
  const [open, setOpen] = useState(false);
  function handleAccordian() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="flex flex-col">
      <button
        onClick={handleAccordian}
        className="flex justify-between items-center font-bold px-[1.75rem] py-[1.25rem] bg-white border border-borderColor"
      >
        <div className="flex flex-col">
          <h4 className="text-left">{title}</h4>
          <p className="text-left text-[#808080] text-[.6875rem]">{content}</p>
        </div>
        <div className="flex gap-12 items-center">
          <span>{count}</span>
          {open ? <IoIosArrowUp size={"24"} /> : <IoIosArrowDown size={"24"} />}
        </div>
      </button>
      <div className={`accordian ${open ? "accordian-show" : " "}`}>
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default TimeEntriesAccordian;
