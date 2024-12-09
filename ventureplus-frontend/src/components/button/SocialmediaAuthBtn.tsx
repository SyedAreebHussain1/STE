import React, { ReactNode } from "react";
import { Button, Form } from "antd";

interface ButtonWithSvgProps {
  id?: string;
  name?: string;
  icon?: ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: any | undefined;
  htmlType?: "submit" | "button" | "reset" | undefined;
  type?: "primary" | "secondary" | "dark" | "transparent" | "white";
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

const SocialmediaAuthBtn: React.FC<ButtonWithSvgProps> = ({
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
  loading,
}: any) => {
  return (
    <Button
      loading={loading}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      className={`!flex !items-center !justify-center !gap-2  p-4 ${
        type === "primary"
          ? " p-btn "
          : type === "secondary"
          ? " s-btn "
          : type === "dark"
          ? " dark-btn "
          : type === "transparent"
          ? " trans-btn "
          : type === "default"
          ? "white"
          : "white-btn-border-light"
      } ${sm ? " !h-[38px]" : " h-[46px]"} ${xs ? " !h-[30px]" : " h-[46px]"} ${
        bold ? " font-bold" : ""
      } ${className ? className : ""} `}
    >
      {!isLeft && title}
      {circled ? (
        <div className={` circle-icon w-[24px] h-[24px] ${iconStyles}`}>
          <img src={icon} alt="" />
        </div>
      ) : (
        <img
          src={icon}
          alt=""
          className={` w-[20px] h-[20px]  ${iconStyles}`}
        />
      )}
      {isLeft && title}
    </Button>
  );
};

export default SocialmediaAuthBtn;
