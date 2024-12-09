import React, { ReactNode } from "react";
import { Button, Form } from "antd";

interface InputButtonProps {
  id?: string;
  name?: string;
  icon?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void | undefined;
  htmlType?: "submit" | "button" | "reset" | undefined;
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  danger?: boolean;
  size?: "large" | "middle" | "small" | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  ghost?: boolean;
  block?: boolean;
}

const InputButton: React.FC<InputButtonProps> = (props) => {
  return (
    <Form.Item>
      <Button {...props}>{props.name}</Button>
    </Form.Item>
  );
};

export default InputButton;
