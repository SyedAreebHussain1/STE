import { Col, Row, TimePicker } from "antd";
import { Form } from "antd";
import { daysEnum } from "../AddandEditWorkScheduleDrawer";
import { useState } from "react";

const DaysTimingComponent = ({
  name,
  isRest,
  required,
}: {
  name: daysEnum;
  isRest: boolean;
  required: boolean;
}) => {
  const [startTime, setStartTime] = useState<any>(null);
  const [endTime, setEndTime] = useState<any>(null);
  const [form] = Form.useForm();

  const handleStartTimeChange = (time: any) => {
    setStartTime(time);
    if (endTime && time && time.isAfter(endTime)) {
      setEndTime(null); // Clear end time if it's before the new start time
    }
  };

  const handleEndTimeChange = (time: any) => {
    setEndTime(time);
  };

  const disableEndHours = () => {
    if (!startTime) return [];
    const startHour = startTime.hour();
    const startMin = startTime.minute();
    const hours = [];
    for (let i = 0; i < startHour; i++) {
      hours.push(i);
    }
    if (startMin == 59) {
      hours.push(hours?.length);
    }
    return hours;
  };

  const disableEndMinutes = (selectedHour: any) => {
    if (
      !startTime ||
      (selectedHour !== startTime.hour() && startTime.minute() != 59)
    )
      return [];
    const startMinute = startTime.minute();
    const minutes = [];
    for (let i = 0; i <= startMinute; i++) {
      minutes.push(i);
    }
    return minutes;
  };

  return (
    <div className="mt-[15px]">
      <Row gutter={10} align={"middle"}>
        <Col xs={8}>
          <h1 className="text-[1rem] text-[#667085] dark:text-[#D0D5DD]">
            {name}
          </h1>
        </Col>
        {isRest ? (
          <Col xs={16}>
            <h2 className="text-[0.813rem] text-[#667085] dark:text-white">
              Rest Day
            </h2>
          </Col>
        ) : (
          <>
            <Col xs={8}>
              <Form.Item
                name={`${name}-workStartTimes`}
                rules={[{ required: required }]}
                className="m-[0]"
              >
                <TimePicker
                  className="dark-input"
                  popupClassName="time-picker-button-class dark-input"
                  size="large"
                  use12Hours
                  value={startTime}
                  onChange={handleStartTimeChange}
                  format="h:mm a"
                  placeholder="Start Time"
                />
              </Form.Item>
            </Col>

            <Col xs={8}>
              <Form.Item
                name={`${name}-workEndTimes`}
                rules={[{ required: required }]}
                className="m-[0]"
              >
                <TimePicker
                  size="large"
                  disabled={!startTime}
                  className="dark-input"
                  popupClassName={"timePickerButtonClass"}
                  use12Hours
                  format="h:mm a"
                  placeholder="End Time"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  disabledHours={disableEndHours}
                  disabledMinutes={disableEndMinutes}
                />
              </Form.Item>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default DaysTimingComponent;
