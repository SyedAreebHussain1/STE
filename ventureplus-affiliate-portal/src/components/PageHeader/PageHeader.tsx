import React from "react";
type PageHeaderProps = {
  title?: any;
  subTitle?: string;
  extra?: React.ReactNode;
  titleHeadBtn?: string;
  route?: string;
  className?: string;
  subTitleElement?: any;
  bgImg?: any;
};
const PageHeader = ({
  title,
  subTitle,
  extra,
  titleHeadBtn,
  route,
  className = "",
  subTitleElement,
  bgImg,
}: PageHeaderProps) => {
  function handleNavigate() { }
  return (
    <div
      style={{ backgroundImage: "url(" + { bgImg } + ")" }}
      className={`flex justify-between bg-[#FFFFFF] dark:bg-dark-grayprimary dark:bg-opacity-20 dark:text-white items-center p-[15px] !relative !z-50 rounded-xl ${className}`}
    >
      <div>
        {titleHeadBtn && (
          <span className="cursor-pointer" onClick={handleNavigate}>
            <img src={titleHeadBtn} alt="" />
          </span>
        )}
        <h2 className="text-[18px] font-semibold">{title}</h2>
        <p className="text-textColor">{subTitle}</p>
        {subTitleElement}
      </div>
      {extra}
    </div>
  );
};
export default PageHeader