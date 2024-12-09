import React, { useEffect, useState } from "react";
import { LeadbyStatusField } from "../../..";
import { Select } from "antd";

type Props = {
  fields: LeadbyStatusField[];
  totalLeadsByStatus: number;
};

const LeadByStatus = ({ fields, totalLeadsByStatus }: Props) => {
  return (
    <div className="bg-white dark:bg-dark-grayprimary rounded-lg p-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#1D2939] font-semibold text-[1rem] dark:text-[#D0D5DD]">
          Lead by Status
        </h1>
      </div>

      <div className="mt-[16px]">
        <div className="flex justify-between text-[#344054] dark:text-[#D0D5DD]">
          <h2 className="text-[.813rem] font-semibold">Status</h2>
          <span className="text-[.813rem] font-normal">
            {totalLeadsByStatus}
          </span>
        </div>

        <div className="mt-[6px] w-full h-[7px] bg-[#F2F4F7] rounded-[5px] overflow-hidden flex">
          {fields.map((item, i) => (
            <div
              key={i}
              style={{
                background: item?.color,
                width: `${
                  (Number(item?.value) /
                    fields?.reduce((a: number, b: any) => a + b.value, 0)) *
                  100
                }%`,
                height: "100%",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto ",
          gap: "2",
        }}
      >
        {fields.map((item) => (
          <div
            key={item?.id}
            style={{
              marginTop: "24px",
            }}
          >
            <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  overflow: "hidden",
                  background: item?.color,
                  borderRadius: "4px",
                }}
              ></div>
              <h3 className="text-[.813rem] text-[#667085] font-normal dark:text-[#D0D5DD] ">
                {item?.title}
              </h3>
            </div>
            <p className="text-[1rem] text-[#344054] font-normal dark:text-white ">
              {item?.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadByStatus;
