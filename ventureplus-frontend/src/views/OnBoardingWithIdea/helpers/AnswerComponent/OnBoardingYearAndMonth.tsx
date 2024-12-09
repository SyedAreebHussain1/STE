import { Input } from "antd";
import { useEffect, useState } from "react";
import { QuestionItem } from "../OnBoardingList";

interface Props{
  value : any,
  setValue : any,
  item : QuestionItem
}

const OnBoardingYearAndMonth = ({ value, setValue, item }: Props) => {
  const [answer, setAnswer] = useState<{ month: number; year: number }>({
    month: value.month,
    year: value.year,
  });

  const selectHandler = (val: string, keyVal: keyof typeof answer) => {
    if (val && keyVal == "month") {
      const numberVal = Number(val);
      if (numberVal > 12) {
        setAnswer((prev) => ({ ...prev, [keyVal]: 12 }));
        setValue((prev: any) => ({ ...prev, [keyVal]: 12 }));
      } else {
        setAnswer((prev) => ({ ...prev, [keyVal]: numberVal }));
        setValue((prev: any) => ({ ...prev, [keyVal]: numberVal }));
      }
    } else if (val) {
      const numberVal = Number(val);
      setAnswer((prev) => ({ ...prev, [keyVal]: numberVal }));
      setValue((prev: any) => ({ ...prev, [keyVal]: numberVal }));
    } else {
      setAnswer((prev) => ({ ...prev, [keyVal]: 0 }));
      setValue((prev: any) => ({ ...prev, [keyVal]: 0 }));
    }
  };

  useEffect(() => {
    if (answer.year || answer.month) {
      setValue((prev: any) => ({ ...prev, [item.keyValue]: true }));
    } else {
      setValue((prev: any) => ({ ...prev, [item.keyValue]: false }));
    }
  }, [answer.month, answer.year]);

  return (
    <div className="p-[18px] bg-[#F4F3FF] rounded-lg">
      <h1 className="text-[13px] font-medium text-[#4A5366]">
        Please specify the duration, in months and years, that the
        business/startup has been operating.
      </h1>
      <div className="flex mt-[10px] h-[40px] gap-3">
        <div className="flex w-full items-center gap-2">
          <label className="text-[]">Months</label>
          <Input
            className={" flex-1 h-full "}
            placeholder="Months"
            value={answer.month}
            onKeyPress={(event) => {
              if (!/[0-9,.]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => selectHandler(e.target.value, "month")}
          />
        </div>
        <div className="flex w-full items-center gap-2">
          <label className="text-[] ">Year</label>
          <Input
            className={" flex-1 h-full "}
            placeholder="Year"
            value={answer.year}
            onKeyPress={(event) => {
              if (!/[0-9,.]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => selectHandler(e.target.value, "year")}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoardingYearAndMonth;
