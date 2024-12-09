import React, { useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";

type Props = {
  hourVal: number;
  setHourVal: React.Dispatch<React.SetStateAction<number>>;
  minVal: number;
  setMinVal: React.Dispatch<React.SetStateAction<number>>;
};

const HourAndMinInputField = ({
  hourVal,
  setHourVal,
  minVal,
  setMinVal,
}: Props) => {
  const minutesInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);

  const handleHourChange = () => {
    minutesInputRef?.current?.focus();
  };
  return (
    <div
      className="flex justify-between items-center h-[50px] rounded-md border"
      onClick={() => {
        hourInputRef?.current?.focus();
      }}
    >
      <div className="flex item-center gap-2 pl-[10px]">
        <div className="flex items-center">
          <input
            ref={hourInputRef}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleHourChange();
              }
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                return;
              }
              if (hourVal > 9) {
                setMinVal(parseInt(event.key));
                handleHourChange();
              }
            }}
            value={hourVal}
            onChange={(e) => {
              const number = parseInt(e.target.value);
              if (number == 0) {
                handleHourChange();
              } else if (number > 24) {
                setHourVal(24);
                handleHourChange();
              } else if (number > 10) {
                setHourVal(number);
                handleHourChange();
              } else if (number > 0) {
                setHourVal(number);
              } else if (number !== 0) {
                setHourVal(0);
              }
            }}
            maxLength={2}
            className="w-[20px] !border-[0] !outline-none p-[0] text-right  focus:border-[0] mx-[2px]"
          ></input>
          <span className="font-bold text-[#00000050]">h</span>
        </div>
        <div className="flex items-center">
          <input
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") minutesInputRef?.current?.blur();
              if (event.key === "Backspace" && minVal == 0) {
                event.preventDefault();
                hourInputRef?.current?.focus();
              }
            }}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            value={minVal}
            onChange={(e) => {
              const number = parseInt(e.target.value);
              if (number > 59) {
                setMinVal(59);
              } else if (number > 0) {
                setMinVal(number);
              } else if (number !== 0) {
                setMinVal(0);
              }
            }}
            ref={minutesInputRef}
            maxLength={2}
            className="w-[20px] !border-[0] !outline-none p-[0] text-right focus:border-[0] mx-[2px]"
          ></input>
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleHourChange();
            }}
            className="font-bold text-[#00000050]"
          >
            m
          </span>
        </div>
      </div>
      <div className=" px-[10px] text-[#00000070] text-[1rem]">
        <IoTimeOutline />
      </div>
    </div>
  );
};
export default HourAndMinInputField;
