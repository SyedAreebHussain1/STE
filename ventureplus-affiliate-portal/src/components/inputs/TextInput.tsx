import React, { ReactNode } from "react";
import { Form, Input, InputProps } from "antd";
import { Rule } from "antd/lib/form";

interface TextInputProps extends InputProps {
  id?: string;
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: number | string;
  allowClear?: boolean;
  prefix?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
  maxLength?: number | undefined;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: Rule[];
  isPassword?: boolean | undefined;
  label?: React.ReactNode | undefined;
  isNumber?: boolean | undefined;
  classNameFormItem?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  isPassword,
  isNumber,
  hidden,
  classNameFormItem,
  ...props
}) => {
  return (
    <Form.Item
      name={props.name}
      rules={props.rules}
      label={props.label}
      hidden={hidden}
      className={classNameFormItem || ""}
    >
      {isPassword ? (
        <Input.Password {...props} hidden={hidden} />
      ) : isNumber ? (
        <Input
          {...props}
          hidden={hidden}
          onKeyPress={(event) => {
            if (!/[0-9,.]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
      ) : (
        <Input {...props} hidden={hidden} />
      )}
    </Form.Item>
  );
};

export default TextInput;
