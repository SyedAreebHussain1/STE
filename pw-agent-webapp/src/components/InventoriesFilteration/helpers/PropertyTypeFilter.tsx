import { Checkbox, Form } from "antd";

const PropertyTypeFilter = () => {
  return (
    <Form.Item name={"propertyType"}>
      <Checkbox.Group style={{ width: "100%" }}>
        <div className="flex flex-col gap-4">
          <Checkbox
            value="Office"
            className="text-base text-[#475467] font-medium"
          >
            Office
          </Checkbox>
          <Checkbox
            value="Warehouse"
            className="text-base text-[#475467] font-medium"
          >
            Warehouse
          </Checkbox>
          <Checkbox
            value="Shop"
            className="text-base text-[#475467] font-medium"
          >
            Shop
          </Checkbox>
          <Checkbox
            value="Factory"
            className="text-base text-[#475467] font-medium"
          >
            Factory
          </Checkbox>
          <Checkbox
            value="House"
            className="text-base text-[#475467] font-medium"
          >
            House
          </Checkbox>
          <Checkbox
            value="Others"
            className="text-base text-[#475467] font-medium"
          >
            Others
          </Checkbox>
        </div>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default PropertyTypeFilter;
