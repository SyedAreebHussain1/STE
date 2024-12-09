import React, { ReactNode } from "react";
import "./AnimateButton.css";

interface AnimateButtonProps {
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
}

const AnimateButton: React.FC<AnimateButtonProps> = ({
  icon,
  title,
  onClick,
  sm,
}: any) => {
  return (
    <button
      className={`${sm
          ? "sm hover:bg-light-primary dark:border-dark-secondary dark:hover:bg-dark-secondary dark:hover:text-dark-primary border"
          : "button"
        } dark:text-black dark:bg-white`}
      onClick={onClick}
    >
      <span className="icon">{icon}</span>
      <span className="text">{title}</span>
    </button>
  );
};

export default AnimateButton;
