import React from "react";

export type TagType =
  | "danger"
  | "info"
  | "success"
  | "purple"
  | "darkPurple"
  | "orange"
  | "yellow"
  | "default"
  | "grey"
  | "primary"
  | "";

const Tag = ({
  color,
  bgColor,
  bgColorDark,
  title,
  bold,
  borderColor,
  borderColorDark,
  className,
  type,
  icon,
  remarks,
  onClick,
}: {
  color?: any;
  bgColor?: any;
  bgColorDark?: any;
  title: any;
  bold?: any;
  borderColor?: any;
  borderColorDark?: any;
  className?: any;
  type?: TagType;
  icon?: string;
  remarks?: string;
  onClick?: any;
}) => {
  const typeStyles = type
    ? type === "danger"
      ? "bg-[#FC4D3A] !text-[#FC4D3A] bg-opacity-5 border-none"
      : type === "info"
      ? "bg-[#F9A600] !text-[#F9A600] bg-opacity-5 border-none"
      : type === "success"
      ? "bg-[#71BC1C] !text-[#71BC1C] bg-opacity-5 border-none"
      : type === "default"
      ? "bg-[#00A5FF] !text-[#00A5FF] bg-opacity-5 border-none"
      : type === "yellow"
      ? "bg-[#FFA800] bg-opacity-[22%] !text-body border-none"
      : type === "purple"
      ? "bg-[#7A5AF8] bg-opacity-[19%] !text-body border-none"
      : type === "orange"
      ? "bg-[#F65800] bg-opacity-[19%] text-orange-900 !text-body border-none"
      : type === "primary"
      ? "bg-primary bg-opacity-5 !text-primary border-none"
      : type === "darkPurple"
      ? "bg-[#7A5AF8] !text-[#fff] border-none"
      : type === "grey"
      ? "bg-gray-100 border-none"
      : ""
    : "";

  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: bgColor ? bgColor : "trasparent" }}
      className={`rounded-full py-2 px-2 border w-fit font-md flex items-center gap-2 ${
        color ? color : "text-black"
      } ${bgColor ? "bg-" + bgColor : ""} ${
        bgColorDark ? "dark:bg-" + bgColorDark : ""
      }  ${borderColorDark ? borderColorDark : ""}  ${
        borderColor ? borderColor : ""
      }${typeStyles} ${className}`}
    >
      {icon && <img src={icon} className="w-[15px] h-[15px]" />}
      <p className={`${bold && "font-bold"}`}>{title}</p>
      {remarks && (
        <span className="ml-1 text-sm rounded-full">{remarks}</span>
      )}
    </div>
  );
};

export default Tag;
