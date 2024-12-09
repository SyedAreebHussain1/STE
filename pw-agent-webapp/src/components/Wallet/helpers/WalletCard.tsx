import { Button, Col } from "antd";
import React from "react";
type Props = {
  create: React.ReactNode;
  value: string;
  title: string;
};

const WalletCard = (props: Props) => {
  return (
    <div className="flex justify-between items-center border rounded-xl px-6 py-6 bg-[#176262]  text-[#fff] text-[1rem] font-medium ">
      <div>
        <div className="mb-5">{props.create}</div>
        <div className="text-2xl mb-1">
          <h2 className="font-medium">{props?.value}</h2>
        </div>
        <div className="">
          <h2>{props?.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
