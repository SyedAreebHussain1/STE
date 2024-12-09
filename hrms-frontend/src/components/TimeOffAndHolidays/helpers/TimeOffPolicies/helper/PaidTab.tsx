import { useState } from "react";
import { Col, Row, Form, Checkbox, Tooltip, Select } from "antd";
import TextInput from "../../../../../helpers/inputs/TextInput";
import circlenotsignIcon from "../../../../../assets/circlenotsignicon.svg";
import { DatePicker } from "antd";

enum ScheduleOfAccuralEnum {
  None = "None",
  Annually = "Annually",
}
export enum AccuralDateTypeEnum {
  None = "None",
  Custom = "Custom",
  JoinedDate = "JoinedDate",
}
const PaidTab = ({
  accuralDateType,
}: {
  activeUnits: number;
  accuralDateType: AccuralDateTypeEnum;
}) => {

  return (
    <>
      <Row gutter={16}>
        <Col xs={24} lg={24} sm={24} md={24}>
          <div className="mt-4">
            <Form.Item
              name="scheduleOfAccural"
              rules={[{ required: true }]}
              label={
                <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                  Schedule of Accural
                </span>
              }
            >
              <Select
                placeholder="Schedule of Accural"
                className="h-[48px] w-full mt-[5px]"
              >
                <Select.Option value={ScheduleOfAccuralEnum.Annually}>
                  {ScheduleOfAccuralEnum.Annually}
                </Select.Option>
                <Select.Option value={ScheduleOfAccuralEnum.None}>
                  {ScheduleOfAccuralEnum.None}
                </Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="mt-4">
            <Form.Item
              name="accuralDateType"
              rules={[{ required: true }]}
              label={
                <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                  Accural Date Type
                </span>
              }
            >
              <Select
                placeholder="Accural Date Type"
                className="h-[48px] w-full mt-[5px]"
              >
                <Select.Option value={AccuralDateTypeEnum.Custom}>
                  {AccuralDateTypeEnum.Custom}
                </Select.Option>
                <Select.Option value={AccuralDateTypeEnum.JoinedDate}>
                  {AccuralDateTypeEnum.JoinedDate}
                </Select.Option>
                <Select.Option value={AccuralDateTypeEnum.None}>
                  {AccuralDateTypeEnum.None}
                </Select.Option>
              </Select>
            </Form.Item>
          </div>
          {accuralDateType === AccuralDateTypeEnum.Custom && (
            <div className="mt-4">
              <Form.Item
                name="waitDate"
                rules={[{ required: true }]}
                label={
                  <span className=" text-[rgb(0,0,0)] text-[.875rem] font-normal dark-input-label">
                    Wait Date
                  </span>
                }
              >
                <DatePicker
                  className="h-[48px] w-full mt-[5px] dark-input"
                  placeholder="Wait Date"
                />
              </Form.Item>
            </div>
          )}
        </Col>
        <Col lg={24} sm={24} md={24}>
          <Row gutter={16} className="flex items-center">
            <Col lg={12} sm={24} md={24}>
              <div className="">
                <h4 className="mt-[-10px] text-[rgb(0,0,0)] text-[.875rem] font-normal hidden md:flex dark-input-label">
                Number of Leaves
                </h4>{" "}
                <div className="flex gap-2">
                  <TextInput
                    className=" w-full md:w-[120px] dark-input"
                    placeholder="leaves"
                    name="entitled"
                    value={"0"}
                    rules={[{ required: true }]}
                    size="large"
                     isNumber
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default PaidTab;
