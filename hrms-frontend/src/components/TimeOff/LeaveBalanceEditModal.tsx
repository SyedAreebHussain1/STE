import { useState } from "react";
import { Button, Input, Modal } from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";

interface props {
  troggle: () => void;
  open: boolean;
  type: string;
}
const LeaveBalanceEditModal = ({ troggle, open, type }: props) => {
  const [count, setCount] = useState<number>(0);
  const handleCountIncr = () => {
    setCount((pre) => pre + 1);
  };
  const handleCountDec = () => {
    setCount((pre) => pre - 1);
  };
  const stylingClass = ["cursor-pointer ", "cursor-not-allowed"];

  return (
    <>
      <Modal
        title={
          <div className="  flex justify-between items-center ">
            <span className="text-[1.5rem] m-[0] p-[0] font-bold">
              Amend Leave Balance
            </span>
            <button
              className="text-[1.8rem] hover:bg-slate-200 rounded-full font-light p-[5px]"
              onClick={troggle}
            >
              <IoCloseOutline />
            </button>
          </div>
        }
        closeIcon={false}
        onCancel={troggle}
        open={open}
        width={600}
        footer={
          <div className="flex justify-end gap-1 mt-[20px]">
            <Button
              onClick={troggle}
              className="text-[black]  font-semibold  border-[0] text-[1rem] shadow-none h-[40px]"
            >
              Cancel
            </Button>
            <Button
              className="dark:bg-dark-primary bg-light-primary text-[white] font-semibold px-4 w-[100px] text-[1rem]  h-[40px]"
              htmlType="submit"
              disabled={true}
            >
              Submit
            </Button>
          </div>
        }
      >
        <div>
          <div>
            <span className="text-[#00000099] text-[.8rem]  leading-5">
              {type} Leave amendments
            </span>
          </div>
          <div className="flex  items-center  mt-[5px]">
            <div className="flex items-center border border-[#00000060] rounded-[8px] h-[45px] w-[250px]">
              <span className=" h-[40px] flex items-center ">
                <Input
                  className="border-[0] !shadow-none text-[.9rem] caret-primary"
                  value={count}
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  onChange={(e) => {
                    parseInt(e.target.value) > 0
                      ? setCount(parseInt(e.target.value))
                      : setCount(0);
                  }}
                  suffix={
                    <span className="text-[#00000099] text-[.9rem] leading-0">
                      days
                    </span>
                  }
                />
              </span>
              <button
                onClick={handleCountDec}
                disabled={count == 0}
                className={` border-l-[1px] border-r-[1px] border-[#00000060]  h-[100%] flex items-center justify-center w-[50px] ${
                  count == 0 ? stylingClass[1] : stylingClass[0]
                }`}
              >
                <FaMinus />
              </button>
              <button
                onClick={handleCountIncr}
                className=" h-[100%]  flex items-center justify-center w-[50px] cursor-pointer"
              >
                <FaPlus />
              </button>
            </div>
            <div>
              <span className="font-bold pl-[20px] text-primary">
                Total: {count} days
              </span>
            </div>
          </div>

          <div className="mt-[40px] ">
            <span className="text-[#00000099] text-[.8rem]  leading-5">
              Reason for change
            </span>
            <div className="w-[100%] mt-[5px]">
              <TextArea
                className="w-[100%] h-[70px]"
                rows={4}
                placeholder="Why are you making this changes? (Required)"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LeaveBalanceEditModal;
