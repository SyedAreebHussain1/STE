import type { TabsProps } from "antd";
import { DatePicker, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timesheets from "../../../components/timesheets/Timesheets";
import SpaceWrapper from "../../../components/wrappers/SpaceWrapper";
import { clearCompanyUserAttendanceManagement } from "../../../redux/slices/TimeSheet/companyUserAttendanceManagementListSlice";
import { attendanceDataByMonthApi } from "../../../redux/api/TimeSheet";
import MonthlyAttendanceSheet from "../../../components/timesheets/MonthlyAttendanceSheet";
import DownLoadPdf from "../../../components/timesheets/DownLoadPdf";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [monthDate, setMonthDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const attendanceDataByMonth = useSelector(
    (state: any) => state?.attendanceDataByMonth
  );
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Timesheets</b>,
      children: (
        <Timesheets
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
          setEndDate={setEndDate}
          endDate={endDate}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      ),
    },
  ];
  function handleChange() {
    dispatch(clearCompanyUserAttendanceManagement());
    setPageLimit({
      page: 1,
      limit: 10,
    });
  }

  useEffect(() => {
    if (monthDate) {
      attendanceDataByMonthApi(dispatch, monthDate);
    }
  }, [monthDate]);
  return (
    <SpaceWrapper>
      <div>
        <DatePicker
          value={monthDate}
          onChange={(event) => setMonthDate(event)}
          placeholder="Month Date"
          allowClear={false}
          suffixIcon={null}
          className="dark:disabled:!text-white dark-input"
        />
        <MonthlyAttendanceSheet data={attendanceDataByMonth?.data} />
        <DownLoadPdf />
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={handleChange}
          size="large"
        />
      </div>
    </SpaceWrapper>
  );
};

export default Index;
