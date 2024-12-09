interface Props {
  data: {
    id: number;
    title: string;
    value: string;
  };
  bgColor: string;
  bgOpacity: boolean;
}

const ColumnCardForPDF = ({ data, bgColor, bgOpacity }: Props) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`relative  rounded-lg p-4 flex flex-col gap-1 w-full mb-4 bg-[${bgColor}] ${
        bgOpacity ? "bg-opacity-40" : ""
      }`}
    >
      <div className="flex flex-col gap-2 h-full">
        <h1 className="body-s text-body font-medium break-words">
          {data.title}
        </h1>
        <p className="body-xs text-para bg-transparent border-none outline-none break-words custom-scrollbar resize-none">
          {data.value}
        </p>
      </div>
    </div>
  );
};

export default ColumnCardForPDF;
