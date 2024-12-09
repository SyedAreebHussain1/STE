import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllLeadApi,
  getAllLeadsFollowUpApi,
} from "../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../redux/store";
import AssignLeadDrawer from "./AssignLeadDrawer";
import assignIcon from "../../../assets/assignIcon.png";

export interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  phoneNo?: string;
  status?: string;
  leadsSource?: string;
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
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Leads source",
    dataIndex: "leadsSource",
  },
];

const LeadManagementTable: React.FC<DataType> = () => {
  const navigate: any = useNavigate();
  const [selectedId, setSelectedId] = useState<any>([]);
  const [toggle, setToggle] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any | boolean | string>([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getAllLead = useSelector((state: any) => state?.getAllLead);
  const addNewLead = useSelector((state: any) => state?.addNewLead);
  const assignUserNew = useSelector((state: any) => state?.assignUserNew);

  useEffect(() => {
    getAllLeadApi(dispatch, pageLimit);
    getAllLeadsFollowUpApi(dispatch, { page: 1, limit: 10 });
  }, [dispatch, pageLimit, addNewLead, assignUserNew?.data]);
  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectedId([...selectedRowKeys]);
    },
  };
  const deleteMultiple = () => {
    console.log(selectedId);
  };
  function handleAssignMultiple() {
    setToggle(true);
  }
  useEffect(() => {
    if (getAllLead?.data?.items?.length > 0) {
      const data = getAllLead?.data?.items?.map((item: any) => {
        return {
          key: item?.client?.id,
          name: (
            <span
              onClick={() => navigate(`/lead-management/detail/${item?.id}`)}
              className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1"
            >
              {item?.client?.name}
            </span>
          ),
          email: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item?.client?.email || "-"}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item?.client?.phone}
            </span>
          ),
          status: (
            <div className="mt-1 mb-1">
              <span className="bg-[rgb(243,248,253)] p-[7px] text-[.8125rem] font-medium rounded-full text-[#147AD6] ">
                {item.status}
              </span>
            </div>
          ),
          leadsSource: (
            <div className="mt-1 mb-1 w-full">
              <span className="bg-[#F0F1F3]  w-full text-[.8125rem] font-medium p-[5px] rounded-full text-[#292D35]">
                {item.leadSource}
              </span>
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllLead?.data]);

  return (
    <>
      {toggle && selectedId ? (
        <AssignLeadDrawer
          toggle={toggle}
          setToggle={setToggle}
          selectedId={selectedId}
        />
      ) : (
        <></>
      )}
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={getAllLead?.loading}
        pagination={{
          total: getAllLead?.data?.meta?.totalItems,
          onChange: showTotal,
        }}
        rowSelection={{
          ...rowSelection,
        }}
        scroll={{ x: 1300 }}
      />
      {selectedId.length > 0 && (
        <div className="fixed bottom-10 shadow-lg shadow-black-500/50 z-20 w-[600px] left-[50%] translate-x-[-50%] bg-white  p-[20px] rounded-xl">
          <div className="flex justify-between items-center font-semibold">
            <div className="flex items-center ">
              <span className="text-[1rem] text-[#344054]">
                {selectedId.length} Items Selected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                className="border-[#27A3A3] text-[#27A3A3] flex items-center gap-2"
                onClick={handleAssignMultiple}
              >
                Assign Lead <img src={assignIcon} alt="" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadManagementTable;
