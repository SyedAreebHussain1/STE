import { Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../../redux/store";
import { getCurrenciesApi } from "../../../../../../../services/api/currency";
import { getLanguagesApi } from "../../../../../../../services/api/language";

interface Props {
  setState: any;
  state: any;
}

const OnBoardingCurrencyAndLanguage = ({ setState, state }: Props) => {
  const languagesList = useSelector(
    (state: RootState) => state.getLanguages?.data
  );
  const currenciesList = useSelector(
    (state: RootState) => state.getCurrencies?.data
  );

  const dispatch = useDispatch();

  const { Option } = Select;

  const selectHandler = (val: string, keyVal: string) => {
    setState((prev: any) => ({ ...prev, [keyVal]: val }));
  };
  useEffect(() => {
    if (!currenciesList) getCurrenciesApi(dispatch);
    if (!languagesList) getLanguagesApi(dispatch);
  }, []);

  return (
    <div className="rounded-lg w-full">
      <div className="flex flex-col gap-3">
        <label className="text-[15px] font-medium text-[#212838]">
          Currency
        </label>
        <Select
          className="h-[48px] w-full  onBoardingSelectClassForbg"
          placeholder="Currency"
          value={state.currency}
          onChange={(e) => selectHandler(e, "currency")}
          showSearch
          filterOption={(input: any, option: any) => {
            return option?.children
              ?.toLowerCase()
              .includes(input.toLowerCase());
          }}
        >
          {currenciesList?.map((opt: any, i: number) => (
            <Option value={opt?.id} key={i}>
              {opt?.code}
            </Option>
          ))}
        </Select>
        <label className="text-[15px] font-medium text-[#212838] mt-2">
          {" "}
          Language
        </label>
        <Select
          className={"h-[48px]  w-full  onBoardingSelectClassForbg"}
          placeholder={"Language"}
          value={state.language}
          onChange={(e) => selectHandler(e, "language")}
          showSearch
          filterOption={(input: any, option: any) => {
            return option?.children
              ?.toLowerCase()
              .includes(input.toLowerCase());
          }}
        >
          {languagesList?.map((opt: any, i: number) => (
            <Option value={opt?.id} key={i}>
              {opt?.name}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default OnBoardingCurrencyAndLanguage;
