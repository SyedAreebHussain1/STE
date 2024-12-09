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
  type?:
    | "primary"
    | "secondary"
    | "danger"
    | "dark"
    | "grey"
    | "transparent"
    | "white"
    | "danger"
    | "default"
    | "green"
    | "transparent-black";
  danger?: boolean;
  size?: "large" | "middle" | "small" | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  ghost?: boolean;
  block?: boolean;
  title: any;
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
  type,
}: any) => {
  return (
    <Button
      loading={loading}
      onClick={onClick}
      disabled={disabled}
      style={{
        boxShadow: type === "dark" ? "0px 4px 9.7px 0px #002A2D29" : "",
      }}
      className={`rounded-full cursor-pointer ${bold ? "font-bold" : "font-medium"}  ${
        sm ? "!h-[38px]" : "h-[46px]"
      } ${xs ? "!h-[30px]" : "h-[46px]"} ${
        type === "primary"
          ? "p-btn"
          : type === "secondary"
          ? "s-btn"
          : type === "danger"
          ? "danger-btn"
          : type === "dark"
          ? "dark-btn"
          : type === "grey"
          ? "grey-btn"
          : type === "white"
          ? "white-btn"
          : type === "danger"
          ? "danger-btn"
          : type === "transparent"
          ? "trans-btn"
          : type === "transparent-black"
          ? "trans-black-btn"
          : type === "green"
          ? "green-btn"
          : "d-btn"
      }  hover:disabled:!bg-gray-200 ${className}`}
      htmlType={htmlType ? htmlType : "button"}
    >
      {title}
    </Button>
  );
};

export default RoundedButton;
