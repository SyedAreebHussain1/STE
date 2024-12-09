import { Select, Tooltip } from "antd";

import { LeadsStatisticsChart } from "../../..";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import { useState } from "react";

type Props = { data: LeadsStatisticsChart[] };

const LeadsStatistics = ({ data }: Props) => {
  const [calander, setCalander] = useState(0);
  return (
    <div className="bg-white rounded-xl p-[20px] mt-[16px] xl:mt-0">
      <div className="flex items-center justify-between flex-row lg:flex-col lg:gap-2 lg:items-start 2xl:items-center 2xl:justify-between 2xl:flex-row">
        <div>
          <h1 className="text-neutral-800 font-semibold text-[1rem]">
            Leads Statistics
          </h1>
          <p className="text-[0.813rem] text-[#667085] font-medium">
            Analyze lead details with the time period.
          </p>
        </div>
        <div>
          <div className="border gap-2 bg-[rgb(249,250,251)] flex justify-between items-center rounded-[5px] text-[.75rem] font-medium border-[#EAECF0] border-solid h-[36px] p-1  ">
            {["All", "Weekly", "Monthly", "Yearly"].map(
              (item: string, i: number) => {
                return (
                  <button
                    key={i}
                    className={
                      calander === i
                        ? `text-[#27A3A3] !h-[30px] ml-[3px]  mr-[3px] `
                        : `text-[#667085] !h-[30px] ml-[3px]  mr-[3px] `
                    }
                    onClick={() => setCalander(i)}
                  >
                    <span
                      className={
                        calander === i
                          ? `!bg-[#FFFFFF] p-[5px] rounded-sm `
                          : "p-[5px] rounded-sm"
                      }
                    >
                      {item}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className=" mt-[20px] 2xl:mt-[50px] flex justify-center  ">
        <AreaChart
          width={500}
          height={270}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDashoffset="4 "
            vertical={false}
            strokeWidth={0.5}
          />
          <XAxis
            dataKey="name"
            height={40}
            axisLine={false}
            tickLine={false}
            label={{
              value: "Months",
              offset: 0,
              position: "insideBottom",
              height: 40,
            }}
          ></XAxis>
          <YAxis
            tickLine={false}
            axisLine={false}
            label={{
              value: "Leads Generated",
              angle: -90,
              position: "insideLeft",
              height: 40,
            }}
          ></YAxis>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#27A3A3"
            fill="#27A3A320"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default LeadsStatistics;
