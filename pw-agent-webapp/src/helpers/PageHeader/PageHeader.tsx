import React from "react";

type PageHeaderProps = {
  title?: any;
  subTitle?: string;
  extra?: React.ReactNode;
  titleHeadBtn?: string;
  route?: string;
  className?: string;
};

export const PageHeader = ({
  title,
  subTitle,
  extra,
  titleHeadBtn,
  route,
  className = "",
}: PageHeaderProps) => {
  function handleNavigate() {}
  return (
    <div
      className={`flex justify-between bg-[#FFFFFF] items-center p-[15px] rounded-xl ${className}`}
    >
      <div>
        {titleHeadBtn && (
          <span className="cursor-pointer" onClick={handleNavigate}>
            <img src={titleHeadBtn} alt="" />
          </span>
        )}
        <h2 className="text-[18px] font-semibold ">{title}</h2>
        <p className="text-textColor">{subTitle}</p>
      </div>
      <div>{extra}</div>
    </div>
  );
};
