import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import UsersSearch from "../UsersSearch";
import dayjs from "dayjs";
import { Column } from "@ant-design/plots";
import { TableProps } from "antd";
import { attendanceLogsByUserIdApi } from "../../../redux/api/TimeSheet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

interface TabProp {
  date: string;
  day: string;
  count: string;
}

const data: TabProp[] = [
  {
    date: "2024-02-19",
    day: "Mon",
    count: "18h 36m",
  },
  {
    date: "2024-02-20",
    day: "Tue",
    count: "0h 0m",
  },
  {
    date: "2024-02-21",
    day: "Wed",
    count: "0h 0m",
  },
  {
    date: "2024-02-22",
    day: "Thu",
    count: "0h 0m",
  },
  {
    date: "2024-02-23",
    day: "Fri",
    count: "0h 0m",
  },
  {
    date: "2024-02-24",
    day: "Sat",
    count: "0h 0m",
  },
  {
    date: "2024-02-25",
    day: "Sun",
    count: "0h 0m",
  },
];
const DateTabs = ({ stateData }: any) => {
  const dispatch = useDispatch();
  const { companyUserId, date } = useParams();
  const [dataSource, setDataSource] = useState<any>([]);
  const [selectedDate, setSelectedDate] = useState("");
  function setDateTab(dates: string) {
    setSelectedDate(dates);
    attendanceLogsByUserIdApi(dispatch, companyUserId, dates);
  }
  useEffect(() => {
    if (stateData) {
      const data = stateData?.item?.map((item: any, i: number) => {
        return {
          id: item?.date.toString(),
          date: item?.date.toString(),
          day: item?.day,
          count: item?.count,
        };
      });
      setDataSource(data);
    }
  }, [stateData]);
  useEffect(() => {
    if (date) {
      setDateTab(date);
    }
  }, []);
  return (
    <div className="relative px-4 flex items-center gap-6 border-b border-borderColor overflow-auto">
      <button className=" pt-11">
        <SlArrowLeft />
      </button>
      {dataSource?.map((item: any, i: any) => {
        return (
          <DateTab
            key={i}
            id={item?.id}
            date={item.date}
            day={item.day}
            count={item.count}
            setDateTab={setDateTab}
            selectedDate={selectedDate}
          />
        );
      })}
      <button className=" pt-11">
        <SlArrowRight />
      </button>
    </div>
  );
};

interface DateTabProp extends TabProp {
  setDateTab: (date: string) => void;
  selectedDate: string;
}

function DateTab({ count, date, day, setDateTab, selectedDate }: any) {
  const dateSelectedClass = [
    "text-primary",
    "dark:bg-dark-primary bg-light-primary",
    "border-b-[4px] border-primary",
  ];
  return (
    <div
      className={`flex px-4 flex-1 justify-center items-center pt-11 pb-2 cursor-pointer ${
        selectedDate == date ? dateSelectedClass[2] : ""
      }`}
      onClick={() => setDateTab(date)}
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h4
          className={`text-[#333333] text-sm font-bold ${
            selectedDate == date ? dateSelectedClass[0] : ""
          }`}
        >
          {day[0].toUpperCase() + day.substring(1, 3)}, {date.split("-")[2]}
        </h4>
        <span
          className={`text-[#333333] text-[.6875rem] ${
            selectedDate == date ? dateSelectedClass[0] : ""
          }`}
        >
          {count}
        </span>
      </div>
    </div>
  );
}

export default DateTabs;
