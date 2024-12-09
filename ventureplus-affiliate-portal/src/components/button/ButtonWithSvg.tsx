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
  bold?: any;
  circled?: any;
  iconStyles?: any;
}

const ButtonWithSvg: React.FC<ButtonWithSvgProps> = ({
  icon,
  title,
  onClick,
  sm,
  htmlType,
  bold,
  className,
  circled,
  iconStyles,
}: any) => {
  return (
    <Button
      htmlType={htmlType}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 p-4 dark:text-black ${
        className ? className : "dark:bg-dark-secondary"
      } ${sm ? "h-[38px]" : "h-[46px]"} ${bold ? "font-bold" : ""}`}
    >
      {title}
      {circled ? (
        <div className={`circle-icon w-[24px] h-[24px] ${iconStyles}`}>
          <img src={icon} alt="" />
        </div>
      ) : (
        <img src={icon} alt="" className="w-[24px] h-[24px]" />
      )}
    </Button>
  );
};

export default ButtonWithSvg;
