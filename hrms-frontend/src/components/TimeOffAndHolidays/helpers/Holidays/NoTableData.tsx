import { Button } from "antd";
import React from "react";

interface NoTableDataProps {
  text?: string;
  handleOnClick?: any;
  buttonText?: string;
}

const NoTableData: React.FC<NoTableDataProps> = ({
  text,
  handleOnClick,
  buttonText,
}) => {
  return (
    <>
      <div className="flex justify-center items-center p-[50px]">
        <div>
          <div>
            <p className="font-bold text-[1rem] text-[rgb(77,77,77)]">{text}</p>
          </div>
          <div>
            <p className="font-normal text-[.875rem] text-[rgba(0,0,0,0.38)]">
              Remember to take some time off!
            </p>
            <div className="flex justify-center text-center m-[15px]">
              <Button
                className="font-bold py-[10px] px-[25px] flex items-center justify-center text-[#FFFFFF] text-[.875rem] leading-[18px] dark:bg-dark-primary bg-light-primary rounded-[8px]  gap-[10px]"
                onClick={handleOnClick}
              >
                <span>{buttonText}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoTableData;
