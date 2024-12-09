import React, { useState } from "react";
import { Button, Form, Select } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];
type DateAndTimeFormProps = {
  setDateAndTime: any;
};

const DateAndTimeForm: React.FC<DateAndTimeFormProps> = ({
  setDateAndTime,
}: DateAndTimeFormProps) => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 20 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Select
        placeholder="Timezone"
        className="w-full sm:w-[350px] h-[50px] mt-[20px]"
      >
        <Select.Option value="demo">Demo</Select.Option>
      </Select>
      <Select
        placeholder="Timesheet Timezone"
        className="w-full sm:w-[350px] h-[50px] mt-[20px]"
      >
        <Select.Option value="demo">Demo</Select.Option>
      </Select>

      <div>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setDateAndTime(false)}
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setDateAndTime(false)}
            type="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default DateAndTimeForm;
