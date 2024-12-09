import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { getWalletWithdrawRequestsApi } from "../../../redux/api/Wallet";
import withdrawRequestsColumn from "./../../../utils/tableColumns/withdrawRequestsColumn.json";
import moment from "moment";
export interface DataType {
  currentTab: string;
}

const WithdrawRequestsTable: React.FC<DataType> = (props: DataType) => {
  const addNewWithdrawRequest = useSelector(
    (state: any) => state.addNewWithdrawRequest
  );
  const navigate: any = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any | boolean | string>([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getWalletWithdrawRequests = useSelector(
    (state: any) => state?.getWalletWithdrawRequests
  );
  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }
  useEffect(() => {
    if (props.currentTab === "2") {
      getWalletWithdrawRequestsApi(dispatch, pageLimit);
    }
  }, [dispatch, pageLimit, props.currentTab, addNewWithdrawRequest.data]);
  useEffect(() => {
    if (getWalletWithdrawRequests?.data?.data?.items?.length > 0) {
      const data = getWalletWithdrawRequests?.data?.data?.items?.map(
        (item: any, i: number) => {
          return {
            key: i,
            sNo: i + 1 + (pageLimit.page - 1) * 10,
            accountNo: item?.accountNo,
            acountName: item?.accountTitleName,
            amount: item?.amount,
            status:  <span className={`${item?.status==='Approved'&&'bg-green-200 p-2 font-bold text-green-800 rounded-full'} ${item?.status==='Rejected'&&'bg-red-200 p-2 font-bold text-red-800 rounded-full'} ${item?.status==='Pending'&&'bg-orange-200 p-2 font-bold text-orange-800 rounded-full'}`} >{item?.status}</span>,
            date: moment(item?.createdAt).format("DD-MMM-YYYY"),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getWalletWithdrawRequests?.data]);

  return (
    <Table
      columns={withdrawRequestsColumn}
      dataSource={dataSource}
      loading={getWalletWithdrawRequests?.loading}
      pagination={{
        total: getWalletWithdrawRequests?.data?.data?.meta?.totalItems,
        onChange: showTotal,
      }}
      scroll={{ x: true }}
    />
  );
};

export default WithdrawRequestsTable;
