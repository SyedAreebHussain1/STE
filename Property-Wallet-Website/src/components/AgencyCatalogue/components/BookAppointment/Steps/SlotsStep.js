import React from "react";
import {
  Row,
  Col,
  Calendar,
  Form,
  Input,
  Badge,
  Select,
  Typography,
  Radio,
} from "antd";
import { getMeetingListApi } from "../../../redux/api/Appointments";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { convertTimeZone } from "../../../utils/utils";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import dayLocaleData from "dayjs/plugin/localeData";
import { GrNext, GrPrevious } from "react-icons/gr";
dayjs.extend(dayLocaleData);

const SlotsStep = ({
  userId,
  handleBookNowClick,
  selectedMeeting,
  onDateClick,
  selectedDate,
  setSlotData,
  disabledDate,
}) => {
  const getMeetingList = useSelector((state) => state.getMeetingList);
  const dispatch = useDispatch();
  const onPanelChange = (value, mode) => {
    handleBookNowClick(null);
    onDateClick(value);
    if (userId) {
      getMeetingListApi(dispatch, userId, value);
    }
  };
  function checkIfMeetingSelected(item) {
    return (
      selectedMeeting?.meetingStartDateTime === item?.meetingStartDateTime &&
      selectedMeeting?.meetingEndDateTime === item?.meetingEndDateTime
    );
  }

  const color = "#fff";
  return (
    <div>
      <Row gutter={16}>
        <Col xs={24} md={16}>
          <Calendar
            disabledDate={disabledDate}
            onSelect={onPanelChange}
            fullscreen={false}
            headerRender={({ value, type, onChange, onTypeChange }) => {
              const start = 0;
              const end = 12;
              const monthOptions = [];
              let current = value.clone();
              const localeData = value.localeData();
              const months = [];
              for (let i = 0; i < 12; i++) {
                current = current.month(i);
                months.push(localeData.monthsShort(current));
              }
              for (let i = start; i < end; i++) {
                monthOptions.push(
                  <Select.Option key={i} value={i} className="month-item">
                    {months[i]}
                  </Select.Option>
                );
              }
              const year = value.year();
              const month = value.month();
              const options = [];
              for (let i = year - 10; i < year + 10; i += 1) {
                options.push(
                  <Select.Option key={i} value={i} className="year-item">
                    {i}
                  </Select.Option>
                );
              }
              const onPrev = (e) => {
                e.preventDefault();
                const newDate = value.clone().subtract(1, "month");
                onChange(newDate);
              };

              const onNext = (e) => {
                e.preventDefault();
                const newDate = value.clone().add(1, "month");
                onChange(newDate);
              };
              return (
                <div
                  style={{
                    padding: 8,
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <button
                        onClick={onPrev}
                        className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                      >
                        <GrPrevious size={"20px"} />
                      </button>
                    </div>
                    <div>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        className="my-year-select"
                        value={year}
                        onChange={(newYear) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}
                      >
                        {options}
                      </Select>
                      <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        value={month}
                        onChange={(newMonth) => {
                          const now = value.clone().month(newMonth);
                          onChange(now);
                        }}
                      >
                        {monthOptions}
                      </Select>
                    </div>
                    <div>
                      <button
                        onClick={onNext}
                        className="  w-10 h-10 flex justify-center items-center rounded-full border border-[#000]"
                      >
                        <GrNext size={"20px"} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </Col>
        <Col xs={24} md={8}>
          <div>
            {getMeetingList?.data?.data?.map((item) => {
              return (
                <Badge.Ribbon
                  style={{
                    marginTop: "-8px",
                  }}
                  text={
                    <span
                      style={{
                        color: checkIfMeetingSelected(item)
                          ? "#1677ff"
                          : item?.status === "Expired"
                          ? "grey"
                          : item?.status === "Reserved"
                          ? "red"
                          : "green",
                        textAlign: "left",
                      }}
                    >
                      {item?.status}
                    </span>
                  }
                  color="white"
                >
                  <div
                    className="border p-2 mb-2 cursor-pointer"
                    onClick={() => [
                      handleBookNowClick(item),
                      setSlotData(item),
                    ]}
                    style={{
                      borderColor: checkIfMeetingSelected(item)
                        ? color
                        : "#ccc",
                      backgroundColor: checkIfMeetingSelected(item)
                        ? "#1677ff"
                        : item?.status === "Expired"
                        ? "grey"
                        : item?.status === "Reserved"
                        ? "red"
                        : "green",
                    }}
                  >
                    <h4
                      className="text-left"
                      style={{
                        color: checkIfMeetingSelected(item) ? color : "#fff",
                      }}
                    >{`${convertTimeZone(item.meetingStartDateTime)}-${moment(
                      item.meetingEndDateTime
                    ).format("LT")}`}</h4>
                  </div>
                </Badge.Ribbon>
              );
            })}
          </div>
        </Col>
      </Row>
      <Form.Item
        name={"step-2"}
        rules={[
          {
            required: true,
            message: "required",
          },
        ]}
        initialValue={"step-2"}
      >
        <Input type="hidden" />
      </Form.Item>
    </div>
  );
};

export default SlotsStep;
