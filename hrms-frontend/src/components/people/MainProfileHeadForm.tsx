import React, { useState } from "react";
import { Button, Col, Form, Row, Select } from "antd";
import TextInput from "../../helpers/inputs/TextInput";

type SizeType = Parameters<typeof Form>[0]["size"];

type MainProfileHeadFormProps = {
  setUpdateProfileHead: any;
};

const MainProfileHeadForm: React.FC<MainProfileHeadFormProps> = ({
  setUpdateProfileHead,
}: MainProfileHeadFormProps) => {
  const [, setComponentSize] = useState<SizeType | "default">("default");

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form layout="horizontal" onValuesChange={onFormLayoutChange}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <TextInput placeholder="Full Name" className="w-full  h-[50px] " />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <TextInput placeholder="Preferd Name" className="w-full  h-[50px] " />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Select placeholder="Role" className="w-full  h-[50px] ">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Select
            placeholder="Group"
            className="w-full  h-[50px] mt-[10px] md:mt-[]"
          >
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Select placeholder="Position" className="w-full h-[50px] mt-[13px]">
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Select
            placeholder="Work schedule"
            className="w-full  h-[50px] mt-[13px]"
          >
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Select
            placeholder="Holiday calendar"
            className="w-full h-[50px] mt-[13px]"
          >
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Col>
      </Row>
      <div>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setUpdateProfileHead(false)}
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setUpdateProfileHead(false)}
            type="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default MainProfileHeadForm;
