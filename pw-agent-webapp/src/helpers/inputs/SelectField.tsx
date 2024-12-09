import { Form, Select, Button } from "antd";
import { Rule } from "antd/es/form";

type Props = {
  name: string;
  rules: Rule[];
  placeholder?: string;
  options: { label: string; value: any }[];
  className?: string;
  onChange?: (value: any) => void;
  disabled?: boolean;
};

const SelectField = ({
  name,
  rules,
  options,
  placeholder,
  className,
  ...rest
}: Props) => {
  return (
    <Form.Item name={name} rules={rules}>
      <Select
        placeholder={placeholder || "select"}
        className={className || ""}
        size="large"
        {...rest}
      >
        {options?.map((opt: any, i: any) => (
          <Select.Option key={i} value={opt.value}>
            {opt.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export { SelectField };
