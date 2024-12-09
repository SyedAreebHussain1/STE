import { Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getCurrenciesApi } from "../../../../services/api/currency";
import { getLanguagesApi } from "../../../../services/api/language";
import { QuestionItem } from "../OnBoardingList";
import { setInStorage } from "../../../../utils/storage";

interface Props {
  item: QuestionItem;
  value: any;
  setValue: any;
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
    <div className="rounded-lg w-full">
      <div className="flex flex-col gap-3 mt-[10px]">
        <label className="text-[15px] font-medium">Select Currency</label>
        <Select
          className="h-[40px] w-full  onBoardingSelectClassForbg"
          placeholder="Currency"
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
        <label className="text-[15px] font-medium">Select Language</label>
        <Select
          className={" h-[40px]  w-full  onBoardingSelectClassForbg"}
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
