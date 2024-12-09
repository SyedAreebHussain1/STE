import { Input, Select } from "antd";
import React, { SetStateAction, useEffect, useState } from "react";
import RoundedButton from "../../../../../../../components/button/RoundedButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getIndustryApi } from "../../../../../../../services/api/onBoardingRoleAndIndustry";
import { RootState } from "../../../../../../../redux/store";

const OnBoardingIndustry = ({ custom, setCustom, setState, state }: any) => {
  const [loading, setLoading] = useState(false);
  const { Option } = Select;
  const [selectItem, setSelectItem] = useState<string | null>(null);
  const [answer, setAnswer] = useState<any>(null);
  const [arr, setArr] = useState<string[]>([]);
  const dispatch = useDispatch();

  const selectHandler = (val: string) => {
    if (selectItem === val) {
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

    if (val == " ") {
      setCustom(false);
    }
  };

  const getonBoardingIndustry = useSelector(
    (state: RootState) => state.getonBoardingIndustry?.data
  );

  async function apiCall() {
    setLoading(true);
    try {
      const result: any = await axios.post(
        `${import.meta.env.VITE_BASE_URL_LAMDA}/industry?des=${
          state.businessDescription
        }`
      );

      const resultArray: string[] = [];
      for (let name in result.data) {
        resultArray.push(result.data[name]);
      }
      setArr(resultArray);
    } finally {
      setLoading(false);
    }
  }

  const clickHandler = () => {
    apiCall();
  };

  useEffect(() => {
    if (!getonBoardingIndustry) getIndustryApi(dispatch);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="rounded-lg">
        <div className="flex mt-[10px] h-[40px] gap-3">
          {!custom ? (
            <Select
              className={"flex-1  h-[48px] onBoardingSelectClassForbg"}
              placeholder={"Enter Business Industry"}
              value={state?.industry !== "" ? state?.industry : null}
              onChange={(e) => setState({ ...state, industry: e })}
              showSearch
              filterOption={(input: any, option: any) =>
                option?.children?.toLowerCase().includes(input.toLowerCase())
              }
              allowClear
              dropdownRender={(menu) => (
                <>
                  <div className="w-full border-b-[#9494944d] border-b-[1px] mb-[2px]">
                    <button
                      className="p-[8px] py-[2px] text-[#016a70] w-full text-left border-[0] shadow-none text-[14px] hover:bg-[#0000000a] rounded-md mb-[4px] font-semibold"
                      onClick={() => {
                        setCustom(true);
                      }}
                    >
                      <span className="text-[16px] mr-2">+</span>Add Custom
                    </button>
                  </div>
                  {menu}
                </>
              )}
            >
              {getonBoardingIndustry?.map((opt: any, i: number) => (
                <Option value={opt?.name} key={i}>
                  {opt?.name}
                </Option>
              ))}
            </Select>
          ) : (
            <Input
              className="flex-1  h-[48px] bg-[#FFFFFF]"
              value={state?.industry}
              placeholder="Enter Business Industry"
              onChange={(e) => setState({ ...state, industry: e.target.value })}
              onBlur={() => {
                if (state?.industry === "") {
                  setCustom(false);
                }
              }}
            />
          )}
          <RoundedButton
            type="primary"
            className=" h-[48px] text-[13px] rounded-lg"
            title={"Suggest with AI"}
            onClick={clickHandler}
            loading={loading}
            disabled={loading || state.businessDescription === ""}
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-3 mt-[16px] min-h-max max-h-[20vh] overflow-y-scroll">
        {arr.map((item, i) => (
          <p
            key={i}
            onClick={() => setState({ ...state, industry: item })}
            className={`border-[1px] rounded-3xl text-[15px] px-[20px] py-[8px] leading-5 h-max cursor-pointer ${
              item === state?.industry
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

export default OnBoardingIndustry;
