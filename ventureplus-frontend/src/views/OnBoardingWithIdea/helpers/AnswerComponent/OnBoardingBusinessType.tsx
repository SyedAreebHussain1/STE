import { Input, Select } from "antd";
import React, { SetStateAction, useEffect, useState } from "react";
import RoundedButton from "../../../../components/button/RoundedButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getIndustryApi } from "../../../../services/api/onBoardingRoleAndIndustry";
import { RootState } from "../../../../redux/store";
import { QuestionItem } from "../OnBoardingList";

const OnBoardingBusinessType = ({
  value,
  setValue,
  item,
  custom,
  setCustom,
}: {
  value: any;
  setValue: any;
  item: QuestionItem;
  custom: boolean;
  setCustom: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState(false);

  const { Option } = Select;
  const [selectItem, setSelectItem] = useState<string | null>(
    value[item.keyValue]
  );
  const [answer, setAnswer] = useState(value[item.keyValue]);
  const [arr, setArr] = useState<string[]>([]);
  const dispatch = useDispatch();

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

  const getonBoardingIndustry = useSelector(
    (state: RootState) => state.getonBoardingIndustry?.data
  );

  async function apiCall() {
    setLoading(true);
    try {
      const result: any = await axios.post(
        `${import.meta.env.VITE_BASE_URL_LAMDA}/industry?des=${value.businessDescription
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
  useEffect(() => {
    if (!getonBoardingIndustry) getIndustryApi(dispatch);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-[18px] bg-[#F4F3FF] rounded-lg">
        {/* <h1 className="text-[15px] font-medium">
          Manually select the business Industry:
        </h1>
        <p className="text-[12px] font-medium text-[#4A5366]">
          If you haven't chosen a name, enter a temporary one and change it
          later in the Business Settings.
        </p> */}

        <div className="flex mt-[10px] h-[40px] gap-3">
          {!custom ? (
            <Select
              className={" flex-1 h-full "}
              placeholder={"Enter Business Industry"}
              value={answer !== "" ? answer : null}
              onChange={(e) => selectHandler(e)}
              showSearch
              filterOption={(input: any, option: any) => {
                return option?.children
                  ?.toLowerCase()
                  .includes(input.toLowerCase());
              }}
              dropdownRender={(menu) => (
                <>
                  <div className="w-full border-b-[#9494944d] border-b-[1px] mb-[2px]">
                    <button
                      className="p-[8px] py-[2px] text-[#016a70]  w-full text-left border-[0] shadow-none text-[14px] hover:bg-[#0000000a] rounded-md mb-[4px] font-semibold"
                      onClick={() => setCustom((pre) => !pre)}
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
              className={" flex-1 h-full "}
              value={answer}
              placeholder="Enter Business Industry"
              onChange={(e) => changeHandler(e.target.value)}
            />
          )}
          <RoundedButton
            type="primary"
            className="h-full text-[13px] rounded-lg"
            title={"Suggest with AI"}
            onClick={clickHandler}
            loading={loading}
            disabled={loading}
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
            className={`border-[1px] rounded-3xl text-[15px]  px-[20px] py-[8px] leading-5 h-max cursor-pointer ${item == selectItem
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

export default OnBoardingBusinessType;
