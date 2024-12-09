import { useState } from "react";
import { Col, Row, Tabs, TabsProps } from "antd";
import HolidaysMain from "./helpers/Holidays/HolidaysMain";
import TimeOffPolicies from "./helpers/TimeOffPolicies";
import SpaceWrapper from "../wrappers/SpaceWrapper";

const tabs: TabsProps["items"] = [
  {
    key: "1",
    label: <b>Time Off Policies</b>,
    children: <TimeOffPolicies />,
  },
  // {
  //   key: "2",
  //   label: <b>Holidays</b>,
  //   children: <HolidaysMain />,
  // },
];
const TimeOffAndHolidays = () => {
  return (
    <>
      <SpaceWrapper>
        <Tabs defaultActiveKey="1" items={tabs} size="large" />
      </SpaceWrapper>
    </>
  );
};
export default TimeOffAndHolidays;
