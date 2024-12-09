import { Input } from "antd";
import React, { useState } from "react";
import RoundedButton from "../../../../components/button/RoundedButton";
import axios from "axios";
import { QuestionItem } from "../OnBoardingList";

interface Props {
  value: any;
  setValue: any;
  item: QuestionItem;
}

const OnBoardingBusinessName = ({ value, setValue, item }: Props) => {
  const [loading, setLoading] = useState(false);
  const [selectItem, setSelectItem] = useState<string | null>(
    value[item.keyValue]
  );
  const [answer, setAnswer] = useState(value[item.keyValue]);
  const [arr, setArr] = useState<string[]>([]);

  const selectHandler = (val: string) => {
    if (selectItem == val) {
      setSelectItem(null);
      changeHandler(null);
    } else {
      setSelectItem(val);
      changeHandler(val);
    }
  };
  const changeHandler = (val: any) => {
    if (val) {
      const exist = arr.includes(val);
      exist ? setSelectItem(val) : selectHandler("");
    }
    setAnswer(val);
    setValue((pre: any) => ({ ...pre, [item?.keyValue]: val }));
  };

  async function apiCall() {
    setLoading(true);
    try {
      const result: any = await axios.get(
        `${import.meta.env.VITE_BASE_URL_LAMDA}/enhance_title?description=${
          value.businessDescription
        }`
      );
      const resultArray: string[] = [];
      for (let name in result.data) {
        resultArray.push(result.data[name]);
      }
      setArr(resultArray);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }
  const clickHandler = () => {
    apiCall();
  };
  return (
    <div className="flex flex-col w-full">
      <div className="p-[18px] bg-[#F4F3FF] rounded-lg">
        <div className="flex mt-[10px] h-[40px] gap-3">
          <Input
            className={" flex-1 h-full "}
            value={answer}
            placeholder="Enter Business Name"
            onChange={(e) => changeHandler(e.target.value)}
          />
          <RoundedButton
            disabled={loading}
            loading={loading}
            type="primary"
            className="h-full text-[13px] rounded-lg"
            title={"Suggest with AI"}
            onClick={clickHandler}
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-3 mt-[16px] min-h-max max-h-[20vh] overflow-y-scroll">
        {arr.map((item, i) => (
          <p
            key={i}
            onClick={() => {
              selectHandler(item);
            }}
            className={`border-[1px] rounded-3xl text-[15px]  px-[20px] py-[8px] leading-5 h-max cursor-pointer ${
              item == selectItem
                ? "border-primary bg-primary text-[#fff]"
                : "text-[#4A5366]"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OnBoardingBusinessName;
