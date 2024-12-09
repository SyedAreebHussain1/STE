import React from "react";

type CompaingsContainerProps = {
  title: string;
  subTitle: string;
  extra: React.ReactNode;
  leadCard: React.ReactNode;
  leadByStatus: React.ReactNode;
  compaignsTable: React.ReactNode;
};
const CompaignsContainer = ({
  title,
  subTitle,
  leadCard,
  leadByStatus,
  compaignsTable,
  extra,
}: CompaingsContainerProps) => {
  return (
    <div className=" mb-4">
      <div
        className={`bg-[#FFFFFF] p-[15px] rounded-xl dark:bg-dark-grayprimary`}
      >
        <div
          className={`flex justify-between items-center md:flex-col lg:flex-col xl:flex-row  sm:items-start sm:gap-2`}
        >
          <div>
            <h2 className="text-[#1D2939] dark:text-[#D0D5DD] text-[24px] font-semibold">
              {title}
            </h2>
            <p className="text-[#667085] text-[.8125rem] font-medium dark:text-[#b0b1b4e0]">
              {subTitle}
            </p>
          </div>
          <div>{extra}</div>
        </div>
        <div>{leadCard}</div>
        <div className="bg-[rgb(249,250,251)] dark:bg-dark-grayprimary  min-h-[133px] border rounded-[10px] p-[18px] mt-3">
          {leadByStatus}
        </div>
        <div className="bg-[rgb(249,250,251)] dark:bg-dark-grayprimary min-h-[133px] border rounded-[10px] p-[18px] mt-3">
          <div>{compaignsTable}</div>
        </div>
      </div>
    </div>
  );
};

export default CompaignsContainer;
