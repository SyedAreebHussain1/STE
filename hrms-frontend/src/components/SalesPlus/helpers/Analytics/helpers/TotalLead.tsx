import React from "react";

type Props = {
  leadCount: number | string;
};

const TotalLead = ({ leadCount }: Props) => {
  return (
    <div className="bg-white h-[100px] rounded-xl p-[20px] dark:bg-dark-grayprimary">
      <h1 className="text-neutral-800 font-semibold text-[1rem] dark:text-[#D0D5DD]">
        Total Leads
      </h1>
      <p className="mt-[2px] text-[1.44rem] font-semibold text-[#104141] dark:text-white ">
        {leadCount}
      </p>
    </div>
  );
};

export default TotalLead;
