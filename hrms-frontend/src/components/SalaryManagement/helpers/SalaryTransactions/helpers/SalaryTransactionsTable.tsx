import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";
import type { DrawerProps } from "antd";
import SalaryTransactionsTableColumn from "../../../../../utils/tableColumns/SalaryTransactionsTableColumn.json";
import { getAllUserTransactionsApi } from "../../../../../redux/api/SalaryManagement/SalaryTransactions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: React.ReactNode;
  email: React.ReactNode;
  designation: React.ReactNode;
  grossSalary: React.ReactNode;
  payableAmount: React.ReactNode;
  workingHours: React.ReactNode;
  month: React.ReactNode;
  arrearAmount: React.ReactNode;
  arrearMonth: React.ReactNode;
  status: React.ReactNode;
}

const dataValue: DataType[] = [
  {
    key: "1",
    name: "Farukh Ahmed",
    email: "fahmed@gmail.com",
    designation: "Junior UI/UX Designer",
    grossSalary: "20,000 PKR",
    payableAmount: "15,000 PKR",
    arrearAmount: "20,000 PKR",
    arrearMonth: "March",
    month: "Jan",
    status: "Pending",
    workingHours: "49/129",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({}),
};

const SalaryTransactionsTable: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedRowKey, setSelectedRowKey] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState([]);
  const getAllUserTransactions: any = useSelector(
    (state: any) => state.getAllUserTransactions
  );
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleRowClick = (record: any) => {
    setSelectedRowKey(record);
    setOpen(true);
  };
  useEffect(() => {
    getAllUserTransactionsApi(dispatch, Number(id), pageLimit);
  }, [dispatch, pageLimit, id]);
  useEffect(() => {
    if (dataValue) {
      const data: any = dataValue?.map((item, i) => {
        return {
          key: i,
          name: item.name,
          email: item.email,
          designation: item.designation,
          grossSalary: (
            <span className="text-[#3E54AC] text-[.975rem] tracking-tighter leading-5">
              {item.grossSalary}
            </span>
          ),
          payableAmount: (
            <span className="text-[#3E54AC] text-[.975rem] tracking-tighter leading-5">
              {item.payableAmount}
            </span>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, []);

  return (
    <>
      <div className="bg-white">
        <Divider />
        <Table
          rowSelection={{
            ...rowSelection,
          }}
          scroll={{ x: true }}
          columns={SalaryTransactionsTableColumn}
          dataSource={dataSource}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
          pagination={{
            total: getAllUserTransactions?.data?.meta?.totalItems,
            onChange: (total: number, range: number) => {
              setPageLimit({
                page: total,
                limit: range,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default SalaryTransactionsTable;
