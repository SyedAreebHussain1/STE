import React, { useState } from "react";
import { Button, Form } from "antd";
import TextInput from "../../helpers/inputs/TextInput";

type SizeType = Parameters<typeof Form>[0]["size"];
type MainProfileHeadFormProps = {
  setContactInformation: any;
};

const ContactInformationForm: React.FC<MainProfileHeadFormProps> = ({
  setContactInformation,
}: MainProfileHeadFormProps) => {
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
      <TextInput
        placeholder="Email"
        className="w-full sm:w-[350px] h-[50px] "
      />
      <TextInput
        placeholder="Phone number"
        className="w-full sm:w-[350px] h-[50px] "
      />

      <div>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setContactInformation(false)}
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setContactInformation(false)}
            type="primary"
          >
            Save
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ContactInformationForm;
