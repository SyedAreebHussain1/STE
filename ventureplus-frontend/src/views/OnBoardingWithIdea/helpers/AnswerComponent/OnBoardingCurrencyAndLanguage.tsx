import { Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getCurrenciesApi } from "../../../../services/api/currency";
import { getLanguagesApi } from "../../../../services/api/language";
import { QuestionItem } from "../OnBoardingList";

interface Props {
  value: any;
  setValue: any;
  item: QuestionItem;
}

const OnBoardingCurrencyAndLanguage = ({ value, setValue, item }: Props) => {
  const [answer, setAnswer] = useState<{ currency: string; language: string }>({
    currency: value.currency,
    language: value.language,
  });
  const languagesList = useSelector(
    (state: RootState) => state.getLanguages?.data
  );
  const currenciesList = useSelector(
    (state: RootState) => state.getCurrencies?.data
  );

  const dispatch = useDispatch();

  const { Option } = Select;

  const selectHandler = (val: string, keyVal: keyof typeof answer) => {
    setAnswer((prev) => ({ ...prev, [keyVal]: val }));
    setValue((prev: any) => ({ ...prev, [keyVal]: val }));
  };

  useEffect(() => {
    if (answer.currency && answer.language) {
      setValue((prev: any) => ({ ...prev, [item.keyValue]: true }));
    } else {
      setValue((prev: any) => ({ ...prev, [item.keyValue]: false }));
    }
  }, [answer.currency, answer.language]);

  useEffect(() => {
    if (!currenciesList) getCurrenciesApi(dispatch);
    if (!languagesList) getLanguagesApi(dispatch);
  }, []);

  return (
    <div className="p-[18px] bg-[#F4F3FF] rounded-lg">
      {/* <h1 className="text-[13px] font-medium text-[#4A5366]">
        Please provide your full name and describe your position or affiliation
        with the business.
      </h1> */}
      <div className="flex mt-[10px] h-[40px] gap-3">
        <Select
          className={" flex-1 h-full "}
          placeholder={"Currency"}
          value={answer.currency}
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

        <Select
          className={" flex-1 h-full "}
          placeholder={"Language"}
          value={answer.language}
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
