import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAttendanceApi } from "../../../../redux/api/Dashboard";
import { RootState } from "../../../../redux/store";
import moment from "moment";

const InAndOut = () => {
  interface DataType {
    key: React.Key;
    name: string;
    checkin: any;
    break: any;
    hours: any;
  }
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 5,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getAttendanceApi(dispatch, pageLimit);
  }, [dispatch, pageLimit]);
  const GetAttandence = useSelector((state: RootState) => state.GetAttandence);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    if (GetAttandence?.data?.data?.items?.length > 0) {
      const data: any = GetAttandence?.data?.data?.items?.map(
        (item: any, i: any) => {
          return {
            key: i,
            name: (
              <p className="whitespace-nowrap text-xs w-[80px] text-ellipsis overflow-hidden">
                {item?.companyUserProfile?.name || "-"}
              </p>
            ),

            totalBreakhours: (
              <p className="whitespace-nowrap text-xs">
                {item?.totalBreakHours || "-"}
              </p>
            ),
            totalTimehours: (
              <p className="whitespace-nowrap text-xs">
                {item?.totalTimeHours || "-"}
              </p>
            ),
            checkin: (
              <p className="whitespace-nowrap text-xs">
                {moment(
                  item?.attendances?.[0]?.companyAttendanceLogs?.[0]?.createdAt
                ).format("h:mm A") || "-"}
              </p>
            ),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [GetAttandence?.data]);

  const getAttendanceRecords = (page: any, pageSize: any) => {
    getAttendanceApi(dispatch, { page: page, limit: pageSize });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "Checkin",
      dataIndex: "checkin",
    },
    {
      title: "Break",
      dataIndex: "totalBreakhours",
    },
    {
      title: "Working hours",
      dataIndex: "totalTimehours",
    },
  ];
  return (
    <div className="mt-32 md:mt-0  dark:text-dark-secondary dark:bg-dark-grayprimary bg-white rounded-md flex flex-col overflow-hidden w-full h-[512px]">
      <h1 className="mt-4 flex float-start font-bold text-[20px] mb-4 p-5">
        Attendance
      </h1>
      <Table
        pagination={{
          total: GetAttandence?.data?.data?.meta?.totalItems,
          pageSize: pageLimit.limit,
          responsive: true,
          simple: true,
          showSizeChanger: false,
          onChange: (page, pageSize) => {
            getAttendanceRecords(page, pageSize);
          },
        }}
        columns={columns}
        className={`px-[25px] mt-[0px]  overflow-auto  w-full h-full    rounded-md `}
        dataSource={dataSource}
      />
    </div>
  );
};

export default InAndOut;
