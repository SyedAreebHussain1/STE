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
  function handleNavigate() { }
  return (
    <div className={`flex justify-between ${className}`}>
      <div className="pb-[20px] md:pb-[55px]">
        {titleHeadBtn && (
          <span className="cursor-pointer" onClick={handleNavigate}>
            <img src={titleHeadBtn} alt="" />
          </span>
        )}
        <h2 className="text-[18px] text-textcolor2 font-semibold">{title}</h2>
        <p className="text-textColor">{subTitle}</p>
      </div>
      {extra}
    </div>
  );
};
