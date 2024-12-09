import { Button } from "antd";
import { FaPlus } from "react-icons/fa6";

type AddNewCalenderProps = {
  setIsTrue: (e: boolean) => void;
};

const AddNewCalender = ({ setIsTrue }: AddNewCalenderProps) => {
  return (
    <div className="mt-2 mb-2">
      <Button
        type="text"
        onClick={() => setIsTrue(true)}
        className="text-primary text-[.875rem] border-none h-[40px] font-bold flex gap-2 items-center"
      >
        <FaPlus className="text-[20px]" /> Add new calender
      </Button>
    </div>
  );
};
export default AddNewCalender;
