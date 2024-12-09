import React, { useEffect, useState } from "react";
import { Table, Switch, Button } from "antd";
import type { TableColumnsType } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMultipleStaffApi,
  getStaffApi,
  patchActiveUserApi,
  patchDeactiveUserApi,
} from "../../../redux/api/StaffManagement";
import { getFromStorage } from "../../../utils/storage";

interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  phoneNo?: string;
  designation?: string;
  img?: string;
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
    title: "Phone No",
    dataIndex: "phoneNo",
  },
  {
    title: "Designation",
    dataIndex: "designation",
  },
];

const StaffManagementTable: React.FC = () => {
  const navigate: any = useNavigate();
  const [dataSource, setDataSource] = useState<any>([]);
  const [selectedId, setSelectedId] = useState<any>([]);

  const dispatch = useDispatch();
  const getAllStaff = useSelector((state: any) => state.getAllStaff);
  const CreateStaff = useSelector((state: any) => state.CreateStaff);
  const deactiveUser = useSelector((state: any) => state.deactiveUser);
  const activeUser = useSelector((state: any) => state.activeUser);
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const acceptStaffRequest = useSelector(
    (state: any) => state.acceptStaffRequest
  );
  const deletemultipleStaff = useSelector(
    (state: any) => state.deletemultipleStaff
  );

  const rowSelection = {
    hideSelectAll: true,
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectedId([...selectedRowKeys]);
    },
  };
  useEffect(() => {
    getStaffApi(dispatch, { page: 1, limit: 10 });
    setPageLimit({ page: 1, limit: 10 });
  }, [
    CreateStaff,
    activeUser,
    deactiveUser,
    acceptStaffRequest,
    deletemultipleStaff,
  ]);

  const fetchRecords = (page: any, pageSize: any) => {
    getStaffApi(dispatch, { page: page, limit: pageSize });
  };

  useEffect(() => {
    if (getAllStaff?.data?.items?.length > 0) {
      const data = getAllStaff?.data?.items.map((item: any) => {
        return {
          key: item.id,
          name: (
            <span
              onClick={() =>
                navigate(`/staff-management/${item.id}`, { state: item })
              }
              className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1"
            >
              {/* <span className="w-[30px] h-[30px] rounded-full bg-gray-500 text-center text-[white] align-middle pt-[3px]">
                {item?.profile?.fullName?.substring(0, 1).toUpperCase()}
              </span> */}
              {item.profile.fullName}
            </span>
          ),
          email: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {" "}
              {item.email}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item.phone}
            </span>
          ),
          designation: (
            <div className="mt-1 mb-1">
              <span className="bg-[rgb(238,248,248)] p-[10px] text-[1rem] font-medium rounded-full text-[#27A3A3] h-[]">
                {item?.role?.title
                  ? item?.role?.title?.replace("agent", "")
                  : ""}
              </span>
            </div>
          ),
          action: (
            <Switch
              style={{ backgroundColor: item?.isDisabled ? "#27A3A3" : "gray" }}
              checked={!item?.isDisabled}
              onChange={() => {
                if (item?.isDisabled) {
                  patchActiveUserApi({ userId: item?.id }, dispatch);
                } else {
                  patchDeactiveUserApi({ userId: item?.id }, dispatch);
                }
              }}
            />
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllStaff]);
  const deleteMultiple = () => {
    deleteMultipleStaffApi({ userId: selectedId }, dispatch);
  };

  return (
    <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2  ">
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        locale={{
          emptyText: (
            <div className="w-full h-[200px] flex items-center justify-center text-[1rem] font-semibold">
              <h1>No staff management requests</h1>
            </div>
          ),
        }}
        columns={
          getFromStorage("user").role === "agentManager"
            ? columns
            : [...columns, {
              title: "Active/Inactive",
              dataIndex: "action",
              align: "center",
            }]
        }
        dataSource={dataSource}
        scroll={{ x: true }}
        loading={activeUser.loading || deactiveUser.loading}
        pagination={{
          total: getAllStaff?.data?.meta?.totalItems,
          pageSize: pageLimit.limit,
          onChange: (page, pageSize) => {
            fetchRecords(page, pageSize);
          },
        }}
      />
      {selectedId.length > 0 && (
        <div className="fixed bottom-10 shadow-lg shadow-black-500/50 z-20 w-[600px] left-[50%] translate-x-[-50%] bg-white  p-[20px] rounded-xl">
          <div className="flex justify-between items-center font-semibold">
            <div className="flex items-center ">
              <span className="text-[1rem] text-[#344054]">
                {selectedId.length} Items Selected
              </span>
            </div>
            <div className="flex items-center">
              <Button
                className="border-[#F04438] text-[#F04438]"
                onClick={deleteMultiple}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffManagementTable;
