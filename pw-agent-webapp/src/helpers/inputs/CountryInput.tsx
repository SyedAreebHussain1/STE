import { Form, FormInstance, Input } from "antd";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
type CountryInputProps = {
  name: string;
  value?: any;
  setValue?: any;
  form: FormInstance;
};
const CountryInput: React.FC<CountryInputProps> = ({
  name,
  form,
}: CountryInputProps) => {
  const [value, setValue] = useState<any>();
  useEffect(() => {
    if (form) {
      form.setFieldValue(name, value);
    }
  }, [value]);
  return (
    <>
      <PhoneInput
        value={value}
        onChange={setValue}
        limitMaxLength={true}
        country="PK"
        name={name}
        className="h-[48px] p-[9px] border border-[#D0D5DD] rounded-[8px] mb-5"
        defaultCountry="PK"
        international
      />
      <Form.Item name={name} rules={[{ required: true }]} hidden={true}>
        <Input hidden />
      </Form.Item>
    </>
  );
};
export default CountryInput;
