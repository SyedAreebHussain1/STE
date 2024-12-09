import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "antd";
import UsersSearch from "./UsersSearch";
import ColumnsNavigator from "./ColumnsNavigator";
import { TableProps } from "antd/lib";
import moment from "moment";
import dayjs from "dayjs";

interface DataType {
  key: string;
  name: any;
  monday: ReactElement;
  tuesday: ReactElement;
  wednesday: ReactElement;
  thursday: ReactElement;
  friday: ReactElement;
  saturday: ReactElement;
  sunday: ReactElement;
  total: string;
}

const columnss: TableProps<DataType>["columns"] = [
  {
    title: <UsersSearch />,
    dataIndex: "name",
    key: "name",
    width: 700,
  },
  {
    title: <Column title="M" day="1" />,
    dataIndex: "monday",
    key: "monday",
    align: "center",
  },
  {
    title: <Column title="T" day="2" />,
    dataIndex: "tuesday",
    key: "tuesday",
    align: "center",
  },
  {
    title: <Column title="W" day="3" />,
    dataIndex: "wednesday",
    key: "wednesday",
    align: "center",
  },
  {
    title: <Column title="T" day="4" />,
    dataIndex: "thursday",
    key: "thursday",
    align: "center",
  },
  {
    title: <Column title="F" day="5" />,
    dataIndex: "friday",
    key: "friday",
    align: "center",
  },
  {
    title: <Column title="S" day="6" />,
    dataIndex: "saturday",
    key: "saturday",
    align: "center",
  },
  {
    title: <Column title="S" day="7" />,
    dataIndex: "sunday",
    key: "sunday",
    align: "center",
  },
  {
    title: <Column title="Total" />,
    dataIndex: "total",
    key: "total",
    align: "center",
  },
];

const WeeklyTable = ({ setPageLimit, startDate }: any) => {
  const navigate = useNavigate();
  const days: any = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [datasource, setDatasource] = useState<any[]>([]);
  const companyUserAttendanceManagementList = useSelector(
    (state: any) => state?.companyUserAttendanceManagementList
  );
  function foo(enter: any, out: any) {
    console.log(enter, out);

    if (enter && out) {
      const hoursForCreatedAt = Number(out) - Number(enter);
      const hours = hoursForCreatedAt / (1000 * 60 * 60);
      const roundedHours = Math.floor(hours);

      return roundedHours;
    } else {
      return 0;
    }
  }
  useEffect(() => {
    if (companyUserAttendanceManagementList?.data?.data?.items?.length > 0) {
      const data = companyUserAttendanceManagementList?.data?.data?.items.map(
        (item: any) => {
          let obj: any = {};
          let totalHours = 0;
          let breakHours = 0;
          item?.attendances.map((itemVal: any, i: number) => {
            const checkIn = itemVal?.companyAttendanceLogs?.filter(
              (itemVal1: any) => itemVal1.status === "checkIn"
            );
            const checkOut = itemVal?.companyAttendanceLogs?.filter(
              (itemVal1: any) => itemVal1.status === "checkOut"
            );
            const breakIn = itemVal?.companyAttendanceLogs?.filter(
              (itemVal1: any) => itemVal1.status === "breakIn"
            );
            const BreakOut = itemVal?.companyAttendanceLogs?.filter(
              (itemVal1: any) => itemVal1.status === "BreakOut"
            );

            if (itemVal?.companyAttendanceLogs.length > 0) {
              if (checkIn.length > 0 && checkOut.length > 0) {
                if (
                  moment(itemVal?.attendanceDate).format("YYYY-MM-DD") ==
                    moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") &&
                  moment(itemVal?.attendanceDate).format("YYYY-MM-DD") ==
                    moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
                ) {
                  const x = new Date(checkIn?.[0]?.createdAt);
                  const checkinTime: any = new Date(
                    checkIn?.[0]?.createdAt
                  ).getTime();
                  const checkoutTime: any = new Date(
                    checkOut?.[0]?.createdAt
                  ).getTime();
                  const breakInTime: any = new Date(
                    breakIn?.[0]?.createdAt
                  ).getTime();
                  const BreakOutTime: any = new Date(
                    BreakOut?.[0]?.createdAt
                  ).getTime();
                  // const checkinTime: any = moment(
                  //   checkIn?.[0]?.createdAt
                  // ).format("HH");
                  // const checkoutTime: any = moment(
                  //   checkOut?.[0]?.createdAt
                  // ).format("HH");
                  // const breakInTime: any = moment(
                  //   breakIn?.[0]?.createdAt
                  // ).format("HH");
                  // const BreakOutTime: any = moment(
                  //   BreakOut?.[0]?.createdAt
                  // ).format("HH");
                  const dayIndex = x.getDay();
                  const dayName = days[dayIndex];
                  days.map((itemdays: any) => {
                    if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                      obj = {
                        ...obj,
                        [itemdays?.toLowerCase()]: (
                          <ColumnsNavigator text={0 + "h"} />
                        ),
                      };
                    } else {
                      totalHours += foo(checkinTime, checkoutTime);
                      breakHours += foo(breakInTime, BreakOutTime);
                      obj = {
                        ...obj,
                        [days[dayIndex].toLowerCase()]: (
                          <ColumnsNavigator
                            text={foo(checkinTime, checkoutTime) + "h"}
                            id={checkIn?.[0]?.id}
                          />
                        ),
                      };
                    }
                  });
                } else if (
                  moment(itemVal?.attendanceDate).format("YYYY-MM-DD") ==
                    moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") &&
                  moment(itemVal?.attendanceDate).format("YYYY-MM-DD") ==
                    moment(checkOut?.[0]?.logTime).format("YYYY-MM-DD")
                ) {
                  const x = new Date(checkIn?.[0]?.createdAt);
                  const checkinTime: any = new Date(
                    checkIn?.[0]?.createdAt
                  ).getTime();
                  const checkoutTime: any = new Date(
                    checkOut?.[0]?.logTime
                  ).getTime();
                  const breakInTime: any = new Date(
                    breakIn?.[0]?.createdAt
                  ).getTime();
                  const BreakOutTime: any = new Date(
                    BreakOut?.[0]?.logTime
                  ).getTime();
                  // const checkinTime: any = moment(
                  //   checkIn?.[0]?.createdAt
                  // ).format("HH");
                  // const checkoutTime: any = moment(
                  //   checkOut?.[0]?.logTime
                  // ).format("HH");
                  // const breakInTime: any = moment(
                  //   breakIn?.[0]?.createdAt
                  // ).format("HH");
                  // const BreakOutTime: any = moment(
                  //   BreakOut?.[0]?.logTime
                  // ).format("HH");
                  const dayIndex = x.getDay();
                  const dayName = days[dayIndex];
                  days.map((itemdays: any) => {
                    if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                      obj = {
                        ...obj,
                        [itemdays?.toLowerCase()]: (
                          <ColumnsNavigator text={0 + "h"} />
                        ),
                      };
                    } else {
                      totalHours += foo(checkinTime, checkoutTime);
                      breakHours += foo(breakInTime, BreakOutTime);
                      obj = {
                        ...obj,
                        [days[dayIndex].toLowerCase()]: (
                          <ColumnsNavigator
                            text={foo(checkinTime, checkoutTime) + "h"}
                            id={checkIn?.[0]?.id}
                          />
                        ),
                      };
                    }
                  });
                } else if (
                  moment(itemVal?.attendanceDate).format("YYYY-MM-DD") ==
                    moment(checkIn?.[0]?.logTime).format("YYYY-MM-DD") &&
                  moment(itemVal?.attendanceDate).format("YYYY-MM-DD") ==
                    moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
                ) {
                  const x = new Date(checkIn?.[0]?.createdAt);
                  const checkinTime: any = new Date(
                    checkIn?.[0]?.logTime
                  ).getTime();
                  const checkoutTime: any = new Date(
                    checkOut?.[0]?.createdAt
                  ).getTime();
                  const breakInTime: any = new Date(
                    breakIn?.[0]?.logTime
                  ).getTime();
                  const BreakOutTime: any = new Date(
                    BreakOut?.[0]?.createdAt
                  ).getTime();
                  // const checkinTime: any = moment(checkIn?.[0]?.logTime).format(
                  //   "HH"
                  // );
                  // const checkoutTime: any = moment(
                  //   checkOut?.[0]?.createdAt
                  // ).format("HH");
                  // const breakInTime: any = moment(breakIn?.[0]?.logTime).format(
                  //   "HH"
                  // );
                  // const BreakOutTime: any = moment(
                  //   BreakOut?.[0]?.createdAt
                  // ).format("HH");

                  const dayIndex = x.getDay();
                  const dayName = days[dayIndex];
                  days.map((itemdays: any) => {
                    if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                      obj = {
                        ...obj,
                        [itemdays?.toLowerCase()]: (
                          <ColumnsNavigator text={0 + "h"} />
                        ),
                      };
                    } else {
                      totalHours += foo(checkinTime, checkoutTime);
                      breakHours += foo(breakInTime, BreakOutTime);
                      obj = {
                        ...obj,
                        [days[dayIndex].toLowerCase()]: (
                          <ColumnsNavigator
                            text={foo(checkinTime, checkoutTime) + "h"}
                            id={checkIn?.[0]?.id}
                          />
                        ),
                      };
                    }
                  });
                } else if (
                  moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") ===
                  moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
                ) {
                  const x = new Date(checkIn?.[0]?.createdAt);
                  const checkinTime: any = new Date(
                    checkIn?.[0]?.createdAt
                  ).getTime();
                  const checkoutTime: any = new Date(
                    checkOut?.[0]?.createdAt
                  ).getTime();
                  const breakInTime: any = new Date(
                    breakIn?.[0]?.createdAt
                  ).getTime();
                  const BreakOutTime: any = new Date(
                    BreakOut?.[0]?.createdAt
                  ).getTime();

                  // const checkinTime: any = moment(
                  //   checkIn?.[0]?.createdAt
                  // ).format("HH");
                  // const checkoutTime: any = moment(
                  //   checkOut?.[0]?.createdAt
                  // ).format("HH");
                  // const breakInTime: any = moment(
                  //   breakIn?.[0]?.createdAt
                  // ).format("HH");
                  // const BreakOutTime: any = moment(
                  //   BreakOut?.[0]?.createdAt
                  // ).format("HH");
                  const dayIndex = x.getDay();
                  const dayName = days[dayIndex];
                  days.map((itemdays: any) => {
                    if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                      obj = {
                        ...obj,
                        [itemdays?.toLowerCase()]: (
                          <ColumnsNavigator text={0 + "h"} />
                        ),
                      };
                    } else {
                      totalHours += foo(checkinTime, checkoutTime);
                      breakHours += foo(breakInTime, BreakOutTime);
                      obj = {
                        ...obj,
                        [days[dayIndex].toLowerCase()]: (
                          <ColumnsNavigator
                            text={foo(checkinTime, checkoutTime) + "h"}
                            id={checkIn?.[0]?.id}
                          />
                        ),
                      };
                    }
                  });
                } else {
                  if (
                    checkIn?.[0]?.logTime !== null &&
                    checkOut?.[0]?.logTime !== null
                  ) {
                    const x = new Date(checkIn?.[0]?.logTime);
                    const checkinTime: any = new Date(
                      checkIn?.[0]?.logTime
                    ).getTime();
                    const checkoutTime: any = new Date(
                      checkOut?.[0]?.logTime
                    ).getTime();
                    const breakInTime: any = new Date(
                      breakIn?.[0]?.logTime
                    ).getTime();
                    const BreakOutTime: any = new Date(
                      BreakOut?.[0]?.logTime
                    ).getTime();

                    // const checkinTime: any = moment(
                    //   checkIn?.[0]?.logTime
                    // ).format("HH");
                    // const checkoutTime: any = moment(
                    //   checkOut?.[0]?.logTime
                    // ).format("HH");
                    // const breakInTime: any = moment(
                    //   breakIn?.[0]?.logTime
                    // ).format("HH");
                    // const BreakOutTime: any = moment(
                    //   BreakOut?.[0]?.logTime
                    // ).format("HH");
                    const dayIndex = x.getDay();
                    const dayName = days[dayIndex];
                    days.map((itemdays: any) => {
                      if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                        // console.log(days[dayIndex], foo(checkinTime, checkoutTime), obj, dayName === days[dayIndex], [days[dayIndex].toLowerCase()]);

                        obj = {
                          ...obj,
                          [itemdays.toLowerCase()]: (
                            <ColumnsNavigator text={0 + "h"} />
                          ),
                        };
                      } else {
                        // console.log("run2", item, checkoutTime, checkinTime, foo(checkinTime, checkoutTime));

                        totalHours += foo(checkinTime, checkoutTime);
                        breakHours += foo(breakInTime, BreakOutTime);

                        obj = {
                          ...obj,
                          [days[dayIndex].toLowerCase()]: (
                            <ColumnsNavigator
                              text={foo(checkinTime, checkoutTime) + "h"}
                              id={checkIn?.[0]?.id}
                            />
                          ),
                        };
                        // console.log(days[dayIndex], foo(checkinTime, checkoutTime), obj, dayName === days[dayIndex], [days[dayIndex].toLowerCase()]);
                      }
                    });
                  }
                }
              } else if (checkOut.length == 0 || checkIn.length == 0) {
                const x = new Date(checkIn?.[0]?.createdAt);
                const checkinTime: any = new Date(
                  checkIn?.[0]?.createdAt
                ).getTime();
                const checkoutTime: any = new Date(
                  checkOut?.[0]?.createdAt
                ).getTime();
                const breakInTime: any = new Date(
                  breakIn?.[0]?.createdAt
                ).getTime();
                const BreakOutTime: any = new Date(
                  BreakOut?.[0]?.createdAt
                ).getTime();
                // const checkinTime: any = moment(
                //   checkIn?.[0]?.createdAt
                // ).format("HH");
                // const checkoutTime: any = moment(
                //   checkOut?.[0]?.createdAt
                // ).format("HH");
                // const breakInTime: any = moment(
                //   breakIn?.[0]?.createdAt
                // ).format("HH");
                // const BreakOutTime: any = moment(
                //   BreakOut?.[0]?.createdAt
                // ).format("HH");

                const dayIndex = x.getDay();
                const dayName = days[dayIndex];
                days.map((itemdays: any) => {
                  if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                    // console.log(totalHours, item, obj);
                    totalHours += 0;
                    breakHours += 0;
                    obj = {
                      ...obj,
                      [itemdays?.toLowerCase()]: (
                        <ColumnsNavigator text={0 + "h"} />
                      ),
                    };
                  } else {
                    totalHours += foo(checkinTime, checkoutTime);
                    breakHours += foo(breakInTime, BreakOutTime);
                    obj = {
                      ...obj,
                      [days[dayIndex].toLowerCase()]: (
                        <ColumnsNavigator
                          text={foo(checkinTime, checkoutTime) + "h"}
                          id={checkIn?.[0]?.id}
                        />
                      ),
                    };
                  }
                });
              }
            } else {
              const x = new Date(checkIn?.[0]?.createdAt);
              const checkinTime: any = new Date(
                checkIn?.[0]?.createdAt
              ).getTime();
              const checkoutTime: any = new Date(
                checkOut?.[0]?.createdAt
              ).getTime();
              const breakInTime: any = new Date(
                breakIn?.[0]?.createdAt
              ).getTime();
              const BreakOutTime: any = new Date(
                BreakOut?.[0]?.createdAt
              ).getTime();

              // const checkinTime: any = moment(
              //   checkIn?.[0]?.createdAt
              // ).format("HH");
              // const checkoutTime: any = moment(
              //   checkOut?.[0]?.createdAt
              // ).format("HH");
              // const breakInTime: any = moment(
              //   breakIn?.[0]?.createdAt
              // ).format("HH");
              // const BreakOutTime: any = moment(
              //   BreakOut?.[0]?.createdAt
              // ).format("HH");
              const dayIndex = x.getDay();
              const dayName = days[dayIndex];
              days.map((itemdays: any) => {
                if (itemdays?.toLowerCase() !== dayName?.toLowerCase()) {
                  obj = {
                    ...obj,
                    [itemdays?.toLowerCase()]: (
                      <ColumnsNavigator text={0 + "h"} />
                    ),
                  };
                } else {
                  totalHours += foo(checkinTime, checkoutTime);
                  breakHours += foo(breakInTime, BreakOutTime);
                  obj = {
                    ...obj,
                    [days[dayIndex].toLowerCase()]: (
                      <ColumnsNavigator
                        text={foo(checkinTime, checkoutTime) + "h"}
                        id={checkIn?.[0]?.id}
                      />
                    ),
                  };
                }
              });
            }
          });
          function getNext7Days(dayGet: any) {
            const dates = [];
            for (let i = 0; i < 7; i++) {
              dates.push(dayjs(dayGet).add(i, "days").format("YYYY-MM-DD"));
            }
            return dates;
          }
          const result = Object.keys(obj).map((key) => {
            if (obj[key]) {
              let { props } = obj[key];
              return {
                count: props.text.replace(/\D/g, ""),
                day: key,
                date: getNext7Days(startDate).filter(
                  (item) => moment(item).format("dddd").toLowerCase() === key
                ),
              };
            } else {
              return;
            }
          });

          return {
            key: item.id,
            name: (
              <span
                className="cursor-pointer"
                onClick={() =>
                  navigate(
                    `/timesheets/${
                      startDate ? dayjs(startDate).format("YYYY-MM-DD") : ""
                    }/${item?.companyUserProfile?.companyUserId}`,
                    {
                      state: {
                        companyUserProfile: item?.companyUserProfile,
                        item: result,
                        totalHours: totalHours,
                        breakHours: breakHours,
                      },
                    }
                  )
                }
              >
                {item?.companyUserProfile?.name}
              </span>
            ),
            ...obj,
            total: `${totalHours}h`,
          };
        }
      );
      console.log("data", data);
      setDatasource(data);
    } else {
      setDatasource([]);
    }
  }, [companyUserAttendanceManagementList]);
  return (
    <Table
      columns={columnss}
      dataSource={datasource}
      loading={companyUserAttendanceManagementList.loading}
      pagination={{
        total:
          companyUserAttendanceManagementList?.data?.data?.meta?.totalItems,
        onChange: (total: number, range: number) => {
          setPageLimit({
            page: total,
            limit: range,
          });
        },
      }}
      scroll={{ x: 1300 }}
    />
  );
};

function Column({ title, day }: { title?: string; day?: number | string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[.75rem]">{title}</span>
      <span className="text-[.75rem]">{day}</span>
    </div>
  );
}

export default WeeklyTable;
