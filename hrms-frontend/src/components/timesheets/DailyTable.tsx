import { Table } from "antd";
import type { TableProps } from "antd";
import UsersSearch from "./UsersSearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import moment from "moment";

interface DataType {
  name: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  total: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: <UsersSearch />,
    dataIndex: "name",
    key: "name",
    width: 700,
  },
  {
    title: "Check in",
    dataIndex: "firstIn",
    key: "firstIn",
  },
  {
    title: "Check Out",
    dataIndex: "lastOut",
    key: "lastOut",
  },
  {
    title: "Hours worked",
    dataIndex: "hoursWorked",
    key: "hoursWorked",
  },
];
const DailyTable = ({ setPageLimit, startDate }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState<any>([]);
  const companyUserAttendanceManagementList = useSelector(
    (state: any) => state.companyUserAttendanceManagementList
  );

  function foo(enter: any, out: any) {
    if (enter && out) {
      const hoursForCreatedAt = Number(out) - Number(enter);
      return hoursForCreatedAt;
    } else {
      return 0;
    }
  }
  useEffect(() => {
    if (companyUserAttendanceManagementList?.data?.data?.items?.length > 0) {
      const data: any = companyUserAttendanceManagementList?.data?.data?.items.map(
        (item: any) => {
          const checkIn = item?.attendances?.[0]?.companyAttendanceLogs?.filter(
            (itemVal1: any) => itemVal1.status === "checkIn"
          );
          const checkOut = item?.attendances?.[0]?.companyAttendanceLogs?.filter(
            (itemVal1: any) => itemVal1.status === "checkOut"
          );
          if (item?.attendances?.[0]?.companyAttendanceLogs.length > 0) {
            if (
              moment(item?.attendances?.[0]?.attendanceDate).format("YYYY-MM-DD") ==
              moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") &&
              moment(item?.attendances?.[0]?.attendanceDate).format("YYYY-MM-DD") ==
              moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
            ) {
              const checkinTime: any = moment(
                checkIn?.[0]?.createdAt
              ).format("HH");
              const checkoutTime: any = moment(
                checkOut?.[0]?.createdAt
              ).format("HH");
              return {
                name: (
                  <span
                  >
                    {item?.companyUserProfile?.name}
                  </span >
                ),
                firstIn: moment(checkIn?.[0]?.createdAt).format("hh:mm a"),
                lastOut: checkOut?.[0]?.createdAt
                  ? moment(checkOut?.[0]?.createdAt).format("hh:mm a")
                  : "-",
                hoursWorked: foo(checkinTime, checkoutTime),
              }
            }
            else if (
              moment(item?.attendances?.[0]?.attendanceDate).format("YYYY-MM-DD") ==
              moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") &&
              moment(item?.attendances?.[0]?.attendanceDate).format("YYYY-MM-DD") ==
              moment(checkOut?.[0]?.logTime).format("YYYY-MM-DD")
            ) {
              const checkinTime: any = moment(
                checkIn?.[0]?.createdAt
              ).format("HH");
              const checkoutTime: any = moment(
                checkOut?.[0]?.logTime
              ).format("HH");
              return {
                name: (
                  <span
                  >
                    {item?.companyUserProfile?.name}
                  </span>
                ),
                firstIn: moment(checkIn?.createdAt).format("hh:mm a"),
                lastOut: checkOut?.createdAt
                  ? moment(checkOut?.createdAt).format("hh:mm a")
                  : "-",
                hoursWorked: foo(checkinTime, checkoutTime),
              };

            } else if (
              moment(item?.attendances?.[0]?.attendanceDate).format("YYYY-MM-DD") ==
              moment(checkIn?.[0]?.logTime).format("YYYY-MM-DD") &&
              moment(item?.attendances?.[0]?.attendanceDate).format("YYYY-MM-DD") ==
              moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
            ) {
              const checkinTime: any = moment(checkIn?.[0]?.logTime).format(
                "HH"
              );
              const checkoutTime: any = moment(
                checkOut?.[0]?.createdAt
              ).format("HH");
              return {
                key: item.id,
                name: (
                  <span
                  >
                    {item?.companyUserProfile?.name}
                  </span>
                ),
                firstIn: moment(checkIn?.createdAt).format("hh:mm a"),
                lastOut: moment(checkOut?.createdAt).format("hh:mm a"),
                hoursWorked: foo(checkinTime,
                  checkoutTime),
              };
            }

            else if (
              moment(checkIn?.[0]?.createdAt).format("YYYY-MM-DD") ===
              moment(checkOut?.[0]?.createdAt).format("YYYY-MM-DD")
            ) {
              const checkinTime: any = moment(
                checkIn?.[0]?.createdAt
              ).format("HH");
              const checkoutTime: any = moment(
                checkOut?.[0]?.createdAt
              ).format("HH");
              return {
                key: item.id,
                name: (
                  <span

                  >
                    {item?.companyUserProfile?.name}
                  </span>
                ),
                firstIn: moment(checkIn?.createdAt).format("hh:mm a"),
                lastOut: moment(checkOut?.createdAt).format("hh:mm a"),
                hoursWorked: foo(checkinTime,
                  checkoutTime),
              }
            }
          }
          else {
            if (
              checkIn?.[0]?.logTime !== null &&
              checkOut?.[0]?.logTime !== null
            ) {
              const checkinTime: any = moment(
                checkIn?.[0]?.logTime
              ).format("HH");
              const checkoutTime: any = moment(
                checkOut?.[0]?.logTime
              ).format("HH");
              return {
                key: item.id,
                name: (
                  <span
                  >
                    {item?.companyUserProfile?.name}
                  </span>
                ),
                firstIn: moment(checkIn?.createdAt).format("hh:mm a"),
                lastOut: moment(checkOut?.createdAt).format("hh:mm a"),
                hoursWorked: foo(checkinTime,
                  checkoutTime),
              }
            }
          }
        });
      setDataSource(data)
    } else {
      setDataSource([])
    }
  }, [companyUserAttendanceManagementList]);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={companyUserAttendanceManagementList.loading}
      pagination={{
        total:
          companyUserAttendanceManagementList?.data?.data?.meta?.totalItems,
        onChange: (total: number, range: number) => {
          setPageLimit({
            page: total,
            limit: range,
            // limit: range,
          });
        },
      }}
      scroll={{ x: 1300 }}
    />
  );
};

export default DailyTable;
