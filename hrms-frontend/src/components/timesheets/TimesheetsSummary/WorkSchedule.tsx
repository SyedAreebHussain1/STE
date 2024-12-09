import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const WorkSchedule = () => {
  const [open, setOpen] = useState(false);
  function handleAccordian() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="flex flex-col">
      <span className="text-[#808080] text-[.6875rem]">Work schedule</span>
      <button
        onClick={handleAccordian}
        className="flex items-center justify-between text-[.6875rem] font-bold"
      >
        Default Work Schedule
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <div className={`${open ? "accordian-show" : " accordian"}`}>
        <p className=" text-[.6875rem] font-bold py-2">Fixed</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#808080] text-[.6875rem]">Mon</span>
            <span className="text-[.6875rem] font-bold">9:00 am - 5:00 pm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#808080] text-[.6875rem]">Mon</span>
            <span className="text-[.6875rem] font-bold">9:00 am - 5:00 pm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#808080] text-[.6875rem]">Mon</span>
            <span className="text-[.6875rem] font-bold">9:00 am - 5:00 pm</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#808080] text-[.6875rem]">Mon</span>
            <span className="text-[.6875rem] font-bold">9:00 am - 5:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSchedule;
