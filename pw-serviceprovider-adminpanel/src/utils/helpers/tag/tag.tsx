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
}: {
  color?: any;
  bgColor?: any;
  bgColorDark?: any;
  title: any;
  bold?: any;
  borderColor?: any;
  borderColorDark?: any;
  className?: any;
  type?: "danger" | "info" | "success" | "default" | "";
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
      : ""
    : "";
  return (
    <div
      className={`rounded-full py-1 px-2 border w-fit font-md ${
        color ? color : "text-black"
      } ${bgColor ? "bg-" + bgColor : "black"} ${
        bgColorDark ? "dark:bg-" + bgColorDark : ""
      } ${bold && "font-bold"} ${borderColorDark ? borderColorDark : ""}  ${
        borderColor ? borderColor : ""
      }${typeStyles} ${className}`}
    >
      {title}
    </div>
  );
};

export default Tag;
