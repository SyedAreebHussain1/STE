import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { getWalletTransactionHistoryApi } from "../../../redux/api/Wallet";
import transactionHistoryColumns from "./../../../utils/tableColumns/transactionHistoryColumns.json";
import moment from "moment";
import Dropdowns from "./Dropdowns";
import { LuArrowDownLeft } from "react-icons/lu";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
export interface DataType {
  currentTab: string;
}

const TransactionHistoryTable: React.FC<DataType> = (props: DataType) => {
  const navigate: any = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any | boolean | string>([]);
  const tableData = dataSource.map((data: any) => {
    return {
      ...data,
      sorter: (a: any, b: any) => a.age - b.age,
      defaultSortOrder: "descend",
    };
  });
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getWalletTransactionHistory = useSelector(
    (state: any) => state?.getWalletTransactionHistory
  );
  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }
  useEffect(() => {
    if (props.currentTab === "3") {
      getWalletTransactionHistoryApi(dispatch, pageLimit);
    }
  }, [dispatch, pageLimit, props.currentTab]);
  useEffect(() => {
    if (getWalletTransactionHistory?.data?.data?.items?.length > 0) {
      const data = getWalletTransactionHistory?.data?.data?.items?.map(
        (item: any, i: number) => {
          return {
            key: i,
            sNo: i + 1 + (pageLimit.page - 1) * 10,
            amount: item?.amount,
            paymentType: item?.paymentType,
            // tType
            transactionType: (
              <span
                className={`${
                  item.tType === "CREDIT" ? "text-green-800" : "text-red-800"
                } bg-[rgb(248,244,239)] p-[8px] text-[.8125rem] font-medium rounded-[34px]`}
              >
                {item?.tType === "CREDIT" && (
                  <GoArrowDownLeft
                    size={20}
                    className="inline border-2 border-green-900 text-green-900 rounded-full mr-3"
                  />
                )}
                {item?.tType === "DEBIT" && (
                  <GoArrowUpRight
                    size={20}
                    className="inline border-2 border-red-900 text-red-900 rounded-full mr-3"
                  />
                )}
                {item?.tType}
              </span>
            ),
            transactionReason: item?.transactionReason,
            date: moment(item?.createdAt).format("DD-MMM-YYYY"),
          };
        }
      );
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getWalletTransactionHistory?.data]);

  return (
    <div className="flex flex-col">
      {/* <Dropdowns /> */}
      <Table
        columns={transactionHistoryColumns}
        dataSource={dataSource}
        loading={getWalletTransactionHistory?.loading}
        pagination={{
          total: getWalletTransactionHistory?.data?.data?.meta?.totalItems,
          onChange: showTotal,
        }}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default TransactionHistoryTable;
