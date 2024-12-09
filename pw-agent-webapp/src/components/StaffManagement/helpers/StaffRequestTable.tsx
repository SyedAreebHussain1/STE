import React, { useEffect, useState } from "react";
import { Table, Switch, Button } from "antd";
import type { TableColumnsType } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAgencyStaffRequestListApi } from "../../../redux/api/StaffManagement";
import AcceptRequestModal from "./AcceptRequestModal";
import RejectRequestModal from "./RejectRequestModal";

import activeIcon from "../../../assets/active.png";
import rejectIcon from "../../../assets/reject.png";

interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  action: any;
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
    title: "Action",
    dataIndex: "action",
  },
];

const StaffRequestTable: React.FC = () => {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any>([]);
  const [acceptOpen, setAcceptOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const acceptStaffRequest = useSelector(
    (state: any) => state.acceptStaffRequest
  );
  const getAgencyStaffRequestList = useSelector(
    (state: any) => state.getAgencyStaffRequestList
  );
  const rejectStaffRequest = useSelector(
    (state: any) => state.rejectStaffRequest
  );

  useEffect(() => {
    getAgencyStaffRequestListApi(dispatch);
  }, [rejectStaffRequest, acceptStaffRequest]);

  useEffect(() => {
    if (getAgencyStaffRequestList?.data?.length > 0) {
      const data = getAgencyStaffRequestList?.data?.map((item: any) => {
        return {
          key: item.id,
          name: (
            <span className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1">
              {item.profile.fullName}
            </span>
          ),
          email: (
            <span className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1">
              {item.email}
            </span>
          ),
          action: item.role.title == "pending" && (
            <>
              <button onClick={() => handleAccept(item)}>
                <img
                  src={activeIcon}
                  alt=""
                  className="w-[30px] h-[30px] rounded-full"
                />
              </button>
              <button onClick={() => handleReject(item)}>
                <img
                  src={rejectIcon}
                  alt=""
                  className="w-[30px] h-[30px] rounded-full"
                />
              </button>
            </>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAgencyStaffRequestList.data]);

  const handleReject = (data: any) => {
    setRejectOpen(true);
    setModalData(data);
  };

  const handleAccept = (data: any) => {
    setAcceptOpen(true);
    setModalData(data);
  };

  return (
    <>
      {acceptOpen && (
        <AcceptRequestModal
          open={acceptOpen}
          setOpen={setAcceptOpen}
          data={modalData}
        />
      )}
      {rejectOpen && (
        <RejectRequestModal
          open={rejectOpen}
          setOpen={setRejectOpen}
          data={modalData}
        />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2  ">
        <Table
          locale={{
            emptyText: (
              <div className="w-full h-[200px] flex items-center justify-center text-[1rem] font-semibold">
                <h1>No staff requests</h1>
              </div>
            ),
          }}
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: true }}
          loading={getAgencyStaffRequestList.loading}
        />
      </div>
    </>
  );
};

export default StaffRequestTable;
