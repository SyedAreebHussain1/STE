import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import React, { useEffect } from "react";
import { QuestionItem } from "../OnBoardingList";

interface Props {
  item: QuestionItem;
  value: any;
  setValue: any;
}
const OnBoardingBusinessDescription = ({ value, setValue, item }: Props) => {
  const handleChange = (val: any) => {
    setValue((pre: any) => ({ ...pre, [item.keyValue]: val }));
  };

  return (
    <div className="w-[98%] h-[25vh]">
      <label className="text-[15px] font-medium mb-5">Enter Your Answer</label>
      <TextArea
        placeholder="Enter Answer"
        className="max-h-[25vh] bg-[#FFFFFF] mt-3"
        value={value[item.keyValue]}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default OnBoardingBusinessDescription;
