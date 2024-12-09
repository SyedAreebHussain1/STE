import { Checkbox, Form } from "antd";

const CategoryFilter = () => {
  return (
    <Form.Item name={"category"}>
      <Checkbox.Group style={{ width: "100%" }}>
        <div className="flex flex-col gap-4">
          <Checkbox
            value="Home"
            className="text-base text-[#475467] font-medium"
          >
            Home
          </Checkbox>
          <Checkbox
            value="Plots"
            className="text-base text-[#475467] font-medium"
          >
            Plots
          </Checkbox>
          <Checkbox
            value="Commercial"
            className="text-base text-[#475467] font-medium"
          >
            Commercial
          </Checkbox>
        </div>
      </Checkbox.Group>
    </Form.Item>
  );
};

export default CategoryFilter;
