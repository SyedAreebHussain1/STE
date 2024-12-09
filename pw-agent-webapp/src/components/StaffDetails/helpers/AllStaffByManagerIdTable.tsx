import React, { useEffect, useState } from "react";
import { Table, Switch, Button } from "antd";
import type { TableColumnsType } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getStaffByManagerIDApi } from "../../../redux/api/StaffManagement";
import stafficon from "../../../assets/staffIcon.svg";

interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  phone?: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
];

const AllStaffByManagerIdTable = ({ data }: { data: any }) => {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  const getStaffByManagerID = useSelector(
    (state: any) => state.getStaffByManagerID
  );

  useEffect(() => {
    getStaffByManagerIDApi(dispatch, data?.id, pageLimit);
  }, []);

  useEffect(() => {
    if (getStaffByManagerID?.data?.items?.length > 0) {
      const data = getStaffByManagerID?.data?.items?.map((item: any) => {
        return {
          key: item.id,
          name: (
            <span className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1">
              {item?.profile?.fullName}
            </span>
          ),
          email: (
            <span className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1">
              {item?.email ? item?.email : "-"}
            </span>
          ),
          phone: (
            <span className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1">
              {item?.phone ? item?.phone : "-"}
            </span>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getStaffByManagerID.data]);
  function showTotal(total: number, range: number) {
    getStaffByManagerIDApi(dispatch, data?.id, { page: total, limit: range });
    setPageLimit({
      page: total,
      limit: range,
    });
  }

  return (
    <>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2  ">
        <div className="flex items-center gap-1 pt-[10px] pb-[20px]">
          <img src={stafficon} className="w-[25px] h-[25px]" />
          <h1 className="text-[1rem] font-medium">Staff List</h1>
        </div>
        <Table
          locale={{
            emptyText: (
              <div className="w-full h-[200px] flex items-center justify-center text-[1rem] font-semibold">
                <h1>No staff</h1>
              </div>
            ),
          }}
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: true }}
          loading={getStaffByManagerID.loading}
          pagination={{
            total: getStaffByManagerID?.data?.meta?.totalItems,
            onChange: showTotal,
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
};

export default AllStaffByManagerIdTable;
