import { Input } from "antd";
import React, { useState } from "react";
import RoundedButton from "../../../../../../../components/button/RoundedButton";
import axios from "axios";

interface Props {
  item: any;
  value: any;
  setValue: any;
}
const OnBoardingBusinessName = ({ state, setState }: any) => {
  const [loading, setLoading] = useState(false);
  const [arr, setArr] = useState<string[]>([]);

  const selectHandler = (val: string) => {
    if (state.businessName == val) {
      setState((pre: any) => ({ ...pre, businessName: null }));
    } else {
      setState((pre: any) => ({ ...pre, businessName: val }));
    }
  };
  const changeHandler = (val: any) => {
    setState((pre: any) => ({ ...pre, businessName: val }));
  };

  async function apiCall() {
    setLoading(true);
    try {
      const result: any = await axios.get(
        `${import.meta.env.VITE_BASE_URL_LAMDA}/enhance_title?description=${
          state.businessDescription
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
      <div className=" rounded-lg">
        <div className="flex mt-[10px] h-[48px] gap-3">
          <Input
            className={" flex-1  h-[48px]"}
            value={state.businessName}
            placeholder="Enter Business Name"
            onChange={(e) =>
              setState((pre: any) => ({ ...pre, businessName: e.target.value }))
            }
          />
          <RoundedButton
            loading={loading}
            type="primary"
            className="h-[48px] text-[13px] rounded-lg"
            title={"Suggest with AI"}
            onClick={clickHandler}
            disabled={loading || state.businessDescription === ""}
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
              item == state.businessName
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
