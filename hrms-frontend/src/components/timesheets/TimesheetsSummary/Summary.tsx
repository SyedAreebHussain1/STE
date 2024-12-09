import { useSelector } from "react-redux";
import WorkSchedule from "./WorkSchedule";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import moment from "moment";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

const Summary = ({ stateData }: any) => {
  const [endDate, setEndDate] = useState("");
  const { date }: any = useParams();
  const dateValue = new Date(date);
  const offsetInMinutes = dateValue.getTimezoneOffset();
  const offsetHours = Math.abs(Math.floor(offsetInMinutes / 60));
  const offsetMinutes = Math.abs(offsetInMinutes % 60);
  const offsetSign = offsetInMinutes > 0 ? "-" : "+";
  const offsetString = `${offsetSign}${String(offsetHours).padStart(
    2,
    "0"
  )}:${String(offsetMinutes).padStart(2, "0")}`;
  const localDate = dateValue.toLocaleString("en-US");
  const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    setEndDate(stateData?.item.reverse()[0].date[0]);
  }, []);

  return (
    <div className="bg-[#FAFAFA] border border-borderColor h-screen">
      <div className="px-[1.75rem] py-[1rem] border-b border-borderColor">
        <h2 className="text-base font-bold">Weekly Summary</h2>

        <span>
          {" "}
          {date ? moment(date).format("DD MMM") : "-"} -{" "}
          {endDate ? moment(endDate).format("DD MMM") : "-"}
        </span>
      </div>
      <div className="px-[1.75rem] py-[1rem]  border-b border-borderColor flex items-center gap-2">
        <div className="w-[50px] h-[30px] bg-gray-400 items-center flex justify-center font-medium !rounded-full">
          {stateData?.companyUserProfile?.name?.[0]?.toUpperCase()}
        </div>
        <div>
          <h4 className="text-[.875rem] font-bold">
            {stateData?.companyUserProfile?.name}
          </h4>
          <span className="text-[#808080] text-[.75rem] font-medium">
            Clocked from GMT{offsetString}
          </span>
        </div>
      </div>
      <div className="px-[1.75rem] py-[1rem] flex flex-col gap-2 border-b border-borderColor">
        <div className="flex flex-col">
          <h4 className="text-[#808080] text-[.6875rem]">Timesheet Timezone</h4>
          <span className="text-[.6875rem] font-bold">
            {`(${timeZoneName}) GMT${offsetString}`}
          </span>
        </div>
        {/* <WorkSchedule /> */}
      </div>
      <div className="px-[1.75rem] py-[1rem] border-b border-borderColor flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-[#1A1A1A] text-sm font-bold">Total hours</span>
          <span className="text-[#1A1A1A] text-sm font-bold">
            {stateData?.totalHours}h
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#808080] text-sm font-bold">Break hours</span>
          <span className="text-[#808080] text-sm font-bold">
            {stateData?.breakHours}h
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
