import { Checkbox, Form } from "antd";

const LocationFilter = () => {
  return (
    <Form.Item name={"location"}>
      <Checkbox.Group style={{ width: "100%" }}>
        <div className="flex flex-col gap-4">
          <Checkbox
            value="karachi"
            className="text-base text-[#475467] font-medium"
          >
            Karachi
          </Checkbox>
          <Checkbox
            value="lahore"
            className="text-base text-[#475467] font-medium"
          >
            Lahore
          </Checkbox>
          <Checkbox
            value="peshawar"
            className="text-base text-[#475467] font-medium"
          >
            Peshawar
          </Checkbox>
          <Checkbox
            value="islamabad"
            className="text-base text-[#475467] font-medium"
          >
            Islamabad
          </Checkbox>
        </div>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default LocationFilter;
