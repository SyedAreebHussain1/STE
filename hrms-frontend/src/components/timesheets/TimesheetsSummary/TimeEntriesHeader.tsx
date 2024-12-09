import { Button } from "antd";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AddTimeEntryDrawer } from "./AddTimeEntryDrawer";
import { useNavigate } from "react-router-dom";

const TimeEntriesHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  function toggle() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="flex justify-between items-center">
      {open && <AddTimeEntryDrawer open={open} onClose={toggle} />}
      <div className="px-[1.75rem] py-[1rem] border-b border-borderColor flex items-center gap-2">
        <button
          className="w-9 h-9 flex justify-center items-center hover:bg-[rgba(0,0,0,.05)] transition-colors"
          onClick={() => navigate(-1)}
        >
          <FaLongArrowAltLeft />
        </button>
        <div>
          <h2 className="text-sm font-bold">Time Entries</h2>
          <span className="text-[.75rem]">
            Detailed list of clocked work hours and breaks
          </span>
        </div>
      </div>
      <div className="pr-4">
        <Button
          className="text-[.9rem] font-bold bg-dark:bg-dark-primary bg-light-primary text-white h-[28px] flex justify-center items-center"
          onClick={toggle}
        >
          Add Time Entry
        </Button>
      </div>
    </div>
  );
};

export default TimeEntriesHeader;
