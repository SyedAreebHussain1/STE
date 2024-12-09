import { Button, Select, Tooltip } from "antd";
import React, { useEffect, useRef, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getTotalLeadLogsByAgencyApi } from "../../../../../redux/api/Campaigns";
import { AppDispatch } from "../../../../../redux/store";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import { getStaffApi } from "../../../../../redux/api/StaffManagement";
import SelectFieldWithLoadMore from "../../../../../helpers/inputs/SelectFieldWithLoadMore";
import { duration } from "moment";
import { getFromStorage } from "../../../../../utils/storage";

const LeadsByCompaigns = () => {
  const dispatch: AppDispatch = useDispatch();
  const totalLeads = useSelector((state: any) => state?.getTotalLeadLogs?.data);
  const [staff, setStaff] = useState<any[]>([]);
  const [reset, setReset] = useState<boolean>(false);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [selectedField, setSelectedField] = useState<any>({
    userId: 0,
    duration: "Today",
  });

  let data: any[] | undefined = [];
  useEffect(() => {
    if (userRole !== "agentStaff") {
      getStaffApi(dispatch, { page: 1, limit: 10 }, onSuccess);
    }
  }, []);
  const {userId}:any= getFromStorage('user');

  useEffect(() => {
    if (selectedField.userId == 0 && selectedField.duration === "Today") {
      setReset(false);
    } else {
      setReset(true);
    }
    getTotalLeadLogsByAgencyApi(dispatch, selectedField);
  }, [selectedField]);
  const getAllStaff = useSelector((state: any) => state.getAllStaff);
  const userRole = getFromStorage("user")?.role;

  if (totalLeads) {
    data = Object.entries(totalLeads).map(([key, value]) => ({
      subject: key.includes("appointment")
        ? key
            .replace("appointment", "appt")
            .replace(/Count$/, "")
            .toLowerCase()
        : key === "statusChangeCount"
        ? "status"
        : key.replace(/Count$/, "").toLowerCase(),
      Logs: value,
    }));
  }
  const onSuccess = (res: any) => {
    if (res?.items?.length > 0) {
      setStaff([...res?.items]);
    }
  };

  const onLoadSuccess = (res: any) => {
    if (res?.items?.length > 0) {
      setStaff((pre: any) => [...pre, ...res?.items]);
    }
  };

  const onLoadMore = () => {
    getStaffApi(
      dispatch,
      { page: pageLimit.page + 1, limit: 10 },
      onLoadSuccess
    );
    setPageLimit((pre: any) => ({ ...pre, page: pre.page + 1 }));
  };
  return (
    <div className="bg-white rounded-xl p-[20px]">
      <div className="flex flex-row items-center justify-between   ">
        <div>
          <h1 className="text-neutral-800 font-semibold text-[1rem]">
            Agency Lead Logs
          </h1>
          <p className="text-[0.813rem] text-[#667085] font-medium">
            Summary of calls/whatsapp etc.
          </p>
        </div>
        <div className="gap-3 !flex !flex-row">
          <div className="flex items-center">
            <button
              className="text-[red] disabled:text-[gray] disabled:cursor-not-allowed font-semibold"
              disabled={!reset}
              onClick={() => {
                setSelectedField({
                  userId: 0,
                  duration: "Today",
                });
              }}
            >
              Reset
            </button>
          </div>
          {userRole !== "agentStaff" && (
            <Select
              className="h-[36px] min-w-[150px]"
              placeholder="Select a User"
              optionFilterProp="children"
              value={selectedField.userId}
              onChange={(e) => {
                setSelectedField((pre: any) => ({
                  ...pre,
                  userId: e,
                }));
              }}
              options={[
                {
                  value: 0,
                  label: "All",
                },
                {
                  value: userId,
                  label: 'My Logs',
                },
                ...staff?.map((item: any) => ({
                  value: item?.id,
                  label: item?.profile?.fullName,
                })),
              ]}
              dropdownRender={(menu) => {
                return (
                  <>
                    {menu}
                    <div className="flex justify-center items-center">
                      <Button
                        className="custom-btn mt-2 mb-2"
                        loading={getAllStaff?.loading}
                        onClick={onLoadMore}
                      >
                        Load More
                      </Button>
                    </div>
                  </>
                );
              }}
            />
          )}
          <Select
            className="h-[36px] min-w-[120px]"
            placeholder="Select"
            optionFilterProp="children"
            value={selectedField.duration}
            onChange={(e) => {
              setSelectedField((pre: any) => ({
                ...pre,
                duration: e,
              }));
            }}
            options={[
              {
                value: "Today",
                label: "Today",
              },
              {
                value: "This Week",
                label: "This Week",
              },
              {
                value: "This Month",
                label: "This Month",
              },
            ]}
          />
        </div>
      </div>
      <div className=" mt-[10px] 2xl:mt-[20px] flex justify-center h-[340px]  ">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart width={160} height={200} data={data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              tick={(e) => {
                return (
                  <text
                    cx={e.cx}
                    cy={e.cy}
                    orientation={e.orientation}
                    radius={e.radius}
                    stroke={e.stroke}
                    x={e.x}
                    y={e.y - e.cy > 0 ? e.y : e.y - 20}
                    className="recharts-text recharts-polar-angle-axis-tick-value"
                    fill="#808080"
                    textAnchor={e.textAnchor}
                    height={60}
                  >
                    <tspan
                      x={e.x}
                      dy="0em"
                      className="text-[0.743rem] text-[#667085] font-normal"
                    >
                      {e.payload.value}
                    </tspan>
                    <tspan
                      x={e.x}
                      y={e.y - e.cy > 0 ? e.y + 20 : e.y}
                      dy="0em"
                      className="font-semibold text-[0.829rem] text-[#000000] "
                    >
                      {
                        data?.filter(
                          (item: any) => item.subject == e.payload.value
                        )[0].Logs
                      }
                    </tspan>
                  </text>
                );
              }}
            />
            <Radar
              name="Mike"
              dataKey="Logs"
              stroke="#00A5FF"
              fill="#00A5FF"
              fillOpacity={0.3}
            />
          </RadarChart>
        </ResponsiveContainer>{" "}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <XAxis dataKey="subject" fontSize={"12px"} />
            <YAxis dataKey="Logs" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Logs"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadsByCompaigns;
