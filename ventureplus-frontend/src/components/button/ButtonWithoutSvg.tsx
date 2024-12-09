import React, { ReactNode } from "react";
import { Button, Form } from "antd";

interface ButtonWithoutSvgProps {
  id?: string;
  name?: string;
  icon?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: any | undefined;
  htmlType?: "submit" | "button" | "reset" | undefined;
  type?: "primary" | "secondary" | "dark" | "transparent";
  danger?: boolean;
  size?: "large" | "middle" | "small" | undefined;
  shape?: "default" | "circle" | "round" | undefined;
  ghost?: boolean;
  block?: boolean;
  title?: any;
  xs?: boolean;
  sm?: any;
  bold?: any;
  circled?: any;
  iconStyles?: any;
  isLeft?: boolean;
}

const ButtonWithoutSvg: React.FC<ButtonWithoutSvgProps> = ({
  icon,
  title,
  onClick,
  xs,
  sm,
  htmlType,
  bold,
  className,
  circled,
  iconStyles,
  type,
  isLeft,
  disabled = false,
}: any) => {
  return (
    <Button
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-full p-4 ${
        type === "primary"
          ? "p-btn"
          : type === "secondary"
          ? "s-btn "
          : type === "dark"
          ? "dark-btn "
          : type === "transparent"
          ? "trans-btn"
          : "d-btn "
      } ${className ? className : ""}${sm ? " !h-[38px] " : " h-[46px] "} ${
        xs ? " !h-[30px] " : " h-[46px]"
      } ${bold ? " font-bold " : ""}`}
    >
      {!isLeft && title}
      {isLeft && title}
    </Button>
  );
};

export default ButtonWithoutSvg;
