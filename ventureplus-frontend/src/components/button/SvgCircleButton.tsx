import React, { ReactNode } from "react";
import { Button, Form } from "antd";

interface SvgCircleButtonProps {
  id?: string;
  name?: string;
  icon?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void | undefined;
  htmlType?: "submit" | "button" | "reset" | undefined;
  type?: "primary" | "secondary" | "dark" ;
  danger?: boolean;
  size?: "large" | "middle" | "small" | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  ghost?: boolean;
  block?: boolean;
  sm?: any;
  xs?: any;
  bold?: any;
}

const SvgCircleButton: React.FC<SvgCircleButtonProps> = ({
  onClick,
  className,
  htmlType,
  sm,
  xs,
  loading = false,
  disabled = false,
  bold,
  icon,
  type,
}: any) => {
  return (
    <Button
      loading={loading}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full ${
        bold ? "font-bold" : "font-medium"
      } !h-[60px] !w-[60px]  ${sm ? "!h-[50px] !w-[50px]" : ""} ${
        xs ? "!h-[40px] !w-[40px]" : ""
      } ${
        type === "primary"
          ? "!bg-primary border-primary hover:!bg-primaryHover"
          : type === "primary"
          ? "!bg-secondary border-secondary hover:!bg-secondary" : "!bg-black border-black hover:!bg-black"
      } !border-none disabled:bg-gray-200 disabled:!text-gray-500 disabled:!border-none hover:disabled:!bg-gray-200 ${className} `}
      htmlType={htmlType ? htmlType : "button"}
    >
      <img
        src={icon}
        alt=""
        className="w-[24px] h-[24px] xl:w-[50.53px] xl:h-[50.53px]"
      />
    </Button>
  );
};

export default SvgCircleButton;
