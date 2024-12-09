import React, { ReactNode } from "react";
import { Button, Form } from "antd";

interface RoundedButtonProps {
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
  title?: any;
  sm?: any;
  xs?: any;
  bold?: any;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  title,
  onClick,
  className,
  htmlType,
  sm,
  xs,
  loading = false,
  disabled = false,
  bold,
}: any) => {
  return (
    <Button
      loading={loading}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full ${bold ? "font-bold" : "font-medium"} ${
        sm ? "!h-[38px]" : "h-[46px]"
      } ${
        xs ? "!h-[30px]" : "h-[46px]"
      } ${className} dark:hover:!bg-dark-secondary dark:hover:!text-black disabled:!bg-gray-500 disabled:!border-gray-500  dark:disabled:hover:!bg-gray-500 disabled:hover:!bg-gray-500 disabled:text-white `}
      htmlType={htmlType ? htmlType : "button"}
    >
      {title}
    </Button>
  );
};

export default RoundedButton;
