import { useEffect, useState } from "react";
import DaysButton from "./DaysButton";
import TimeSelect from "./TimeSelect";
import { Col, Row } from "antd";
import SectionContainer from "../../SectionContainer";
import { useSelector } from "react-redux";

export enum daysEnum {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Saturday",
  Sun = "Sunday",
}

type Props = {
  days: any;
  setDays: any;
};

const WorkingDays = ({ days, setDays }: Props) => {
  return (
    <SectionContainer
      title="Working days"
      subtitle="Set your office working days
      and hours."
    >
      <Col xs={24} lg={10}>
        <span className="text-[#667085] font-medium ">Days of The Week</span>
        <DaysButton state={days} setState={setDays} />
      </Col>
      <Col xs={24} lg={8}>
        <span className="text-[#667085] font-medium ">Working Hours</span>
        <TimeSelect />
      </Col>
    </SectionContainer>
  );
};

export default WorkingDays;
