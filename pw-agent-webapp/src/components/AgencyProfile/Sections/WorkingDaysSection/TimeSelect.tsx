import { Col, Form, Row, TimePicker } from "antd";

type Props = {};

const TimeSelect = (props: Props) => {
  return (
    <div className="w-full flex gap-3 mb-3 mt-1 ">
      <div className="w-[50%]">
        <Form.Item
          name={`workStartTime`}
          rules={[{ required: true }]}
          className="m-[0]"
        >
          <TimePicker
            className="w-full"
            placeholder="Start Time"
            popupClassName="time-picker-button-class"
            size="large"
            use12Hours
            format="h:mm a"
          />
        </Form.Item>
      </div>

      <div className="w-[50%]">
        <Form.Item
          name={`workEndTime`}
          rules={[{ required: true }]}
          className="m-[0]"
        >
          <TimePicker
            className="w-full"
            placeholder="End Time"
            size="large"
            popupClassName={"timePickerButtonClass"}
            use12Hours
            format="h:mm a"
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default TimeSelect;
