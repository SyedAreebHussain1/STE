import { ReactElement, useEffect, useState } from "react";
import WeeklyTable from "./WeeklyTable";
import MonthlyTable from "./MonthlyTable";
import DailyTable from "./DailyTable";
import { DatePicker, Select } from "antd";
import { attendanceDataByMonthApi, companyUserAttendanceManagementListApi } from "../../redux/api/TimeSheet/index";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { clearCompanyUserAttendanceManagement } from "../../redux/slices/TimeSheet/companyUserAttendanceManagementListSlice";

interface tableOptionType {
  Weekly: ReactElement;
  Daily: ReactElement;
}
const Timesheets = ({
  pageLimit,
  setPageLimit,
  setEndDate,
  endDate,
  setStartDate,
  startDate,
}: any) => {
  const dispatch = useDispatch();
  const [currentOption, setCurrentOption] = useState("Daily");
  const tables: tableOptionType = {
    Weekly: (
      <WeeklyTable
        startDate={startDate}
        pageLimit={pageLimit}
        setPageLimit={setPageLimit}
      />
    ),
    Daily: (
      <DailyTable
        startDate={startDate}
        pageLimit={pageLimit}
        setPageLimit={setPageLimit}
      />
    ),
  };


  // const disabledEndDate = (endDateDis: any) => {
  //   return endDateDis && endDateDis < startDate;
  // };
  useEffect(() => {
    dispatch(clearCompanyUserAttendanceManagement());
    if (currentOption === "Daily") {
      companyUserAttendanceManagementListApi(
        dispatch,
        pageLimit,
        currentOption,
        { startDate }
      );
    }
    if (currentOption === "Weekly" && startDate && endDate) {
      companyUserAttendanceManagementListApi(
        dispatch,
        pageLimit,
        currentOption,
        { startDate, endDate }
      );
    }
  }, [currentOption, startDate, endDate]);
  const disabledEndDate = (current: any) => {
    if (!startDate) {
      return false;
    }
    const start = dayjs(startDate);
    const end = start.add(6, "day");
    return (
      current && (current.isBefore(start, "day") || current.isAfter(end, "day"))
    );
  };
  return (
    <>
      <div className="flex gap-2 ">
        <Select
          onChange={(value) => {
            setCurrentOption(value);
          }}
          value={currentOption}
          className="w-[100px]"
          options={[
            { label: "Weekly", value: "Weekly" },
            { label: "Daily", value: "Daily" },
          ]}
        />
        <div className="flex items-center gap-2">
          <DatePicker
            value={startDate}
            onChange={(event) => setStartDate(event)}
            placeholder="Start Date "
            allowClear={false}
            disabled={endDate}
            suffixIcon={null}
            className="dark:disabled:!text-white dark-input"
          />{" "}
          {currentOption === "Weekly" && (
            <DatePicker
              value={endDate}
              onChange={(event) => setEndDate(event)}
              disabledDate={disabledEndDate}
              placeholder="End Date"
              disabled={!startDate}
              suffixIcon={null}
              className="dark:disabled:!text-white dark-input"
            />
          )}
        </div>
      </div>
      <div className="mt-[20px]">
        {tables[currentOption as keyof tableOptionType]}
      </div>
    </>
  );
};

export default Timesheets;
