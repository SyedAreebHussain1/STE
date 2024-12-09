import React, { useState } from "react";
import { Button, Form, Row, Col } from "antd";
import { DatePicker } from "antd";
import TextInput from "../../helpers/inputs/TextInput";

type SizeType = Parameters<typeof Form>[0]["size"];

type EmplomentInformationFormProps = {
  setEmplomentInformation: any;
};

const EmplomentInformationForm: React.FC<EmplomentInformationFormProps> = ({
  setEmplomentInformation,
}: EmplomentInformationFormProps) => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Row gutter={16}>
        <Col xs={24} sm={24} lg={12} md={12}>
          <TextInput placeholder="Member Code" className="w-full  h-[50px] " />
        </Col>
        <Col xs={24} sm={24} lg={12} md={12}>
          <TextInput
            placeholder="Billable Rate"
            className="w-full  h-[50px] "
          />
        </Col>
        <Col xs={24} sm={24} lg={12} md={12} className="mb-[15px] md:mb-[0px]">
          <DatePicker className="w-full  h-[50px] " placeholder="Join date" />
        </Col>
        <Col xs={24} sm={24} lg={12} md={12}>
          <TextInput placeholder="Kiosk PIN " className="w-full  h-[50px] " />
        </Col>
      </Row>
      <div>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setEmplomentInformation(false)}
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setEmplomentInformation(false)}
            type="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default EmplomentInformationForm;
