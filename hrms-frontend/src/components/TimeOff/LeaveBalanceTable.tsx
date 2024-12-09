import { Table } from "antd";
import { useEffect, useState } from "react";
import LeaveBalanceEditModal from "./LeaveBalanceEditModal";
import LeaveBalanceHistoryModal from "./LeaveBalanceHistoryModal";
import { useSelector } from "react-redux";

const LeaveBalanceTable = ({ tabChange, activeKey }: any) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [modalType, setModalType] = useState("");
  const [dataSource, setDataSource] = useState<any[]>([]);
  const companyUserLeaves = useSelector(
    (state: any) => state?.companyUserLeaves
  );
  const troggleEdit = () => {
    setOpenEdit((pre) => !pre);
  };
  const troggleHistory = () => {
    setOpenHistory((pre) => !pre);
  };
  useEffect(() => {
    if (companyUserLeaves?.data?.data && activeKey !== "") {
      const {
        approvedGeneralLeaves,
        pendingGeneralLeaves,
        remainingGeneralLeaves,
        generalTotalLeaves,
        approvedSpecificLeaves,
        pendingSpecificLeaves,
        remainingSpecificLeaves,
        specificTotalLeaves,
      } = companyUserLeaves?.data?.data;
      const data = [
        {
          type: "General",
          approved: approvedGeneralLeaves,
          pending: pendingGeneralLeaves,
          remaining: remainingGeneralLeaves,
          total: generalTotalLeaves,
        },
        {
          type: "Specific",
          approved: approvedSpecificLeaves,
          pending: pendingSpecificLeaves,
          remaining: remainingSpecificLeaves,
          total: specificTotalLeaves,
        },
      ];
      if (data.length > 0) {
        const allData: any = data?.map((item, i) => {
          return {
            key: i,
            leavePolicy: <h2 className="font-semibold">{item.type}</h2>,
            pending: (
              <span className="text-[#00000099] dark:text-white text-[.875rem] tracking-tighter leading-5">
                {item.pending}
              </span>
            ),
            approved: (
              <span className="text-[#00000099] dark:text-white text-[.875rem] tracking-tighter leading-5">
                {item.approved}
              </span>
            ),
            remaining: (
              <span className="text-[#00000099] dark:text-white text-[.875rem] tracking-tighter leading-5">
                {item.remaining}
              </span>
            ),
            total: (
              <span className="text-[#00000099] dark:text-white text-[.875rem] tracking-tighter leading-5">
                {item.total}
              </span>
            ),
          };
        });
        setDataSource(allData);
      } else {
        setDataSource([]);
      }
    }
  }, [companyUserLeaves.data]);
  return (
    <div className="overflow-x-auto">
      {openEdit && (
        <LeaveBalanceEditModal
          troggle={troggleEdit}
          open={openEdit}
          type={modalType}
        />
      )}
      {openHistory && (
        <LeaveBalanceHistoryModal
          troggle={troggleHistory}
          open={openHistory}
          type={modalType}
        />
      )}
      <Table
        columns={[
          {
            title: "Leave Policy",
            dataIndex: "leavePolicy",
          },
          {
            title: "Pending",
            dataIndex: "pending",
          },

          {
            title: "Approved",
            dataIndex: "approved",
          },
          {
            title: "Remaining",
            dataIndex: "remaining",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        loading={companyUserLeaves?.loading}
      />
    </div>
  );
};
export default LeaveBalanceTable;
