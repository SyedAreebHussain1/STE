import React, { useEffect, useRef, useState } from "react";
import withdrawColumns from "../../../../../Tables/withdrawColumns.json";
import { Button, Table, Tag } from "antd";
import numberToText from "number-to-words";
import moment from "moment";

const WithdrawRequestsTable = ({ data, onShowSizeChange }) => {
  const [dataSource, setDataSource] = useState();
  // const [posts, setPosts] = useState(data);

  // useEffect(() => {
  //   if (data?.items?.length > 0) {
  //     setPosts(data?.items);
  //   } else {
  //     setDataSource([data]);
  //   }
  // }, [data]);
  useEffect(() => {
    if (data?.items) {
      const newData = data?.items.map((item, index) => {
        return {
          invoice: <span style={{ textTransform: "capitalize" }}>-</span>,
          bank: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.investorWalletWithDrawRequest?.bankName
                ? item?.investorWalletWithDrawRequest?.bankName
                : "-"}
            </span>
          ),
          accountNo: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.investorWalletWithDrawRequest?.accountNo
                ? item?.investorWalletWithDrawRequest?.accountNo
                : "-"}
            </span>
          ),
          accountTitle: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.investorWalletWithDrawRequest?.accountTitleName
                ? item?.investorWalletWithDrawRequest?.accountTitleName
                : "-"}
            </span>
          ),
          withdrawDate: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.createdAt
                ? moment(item?.createdAt?.split("T")[0]).format("DD-MM-YYYY")
                : "-"}
            </span>
          ),
          amount: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.amount ? item?.amount : "-"}
            </span>
          ),
          amountInWords: (
            <span style={{ textTransform: "capitalize" }}>
              {item && item?.amount
                ? numberToText.toWords(parseInt(item?.amount))
                : "-"}
            </span>
          ),
        };
      });
      setDataSource(newData);
    }
  }, [data]);
  return (
    <>
      <Table
        dataSource={dataSource}
        pagination={{
          total: data?.meta?.totalItems,
          onChange: onShowSizeChange,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        columns={withdrawColumns}
      />
    </>
  );
};
export default WithdrawRequestsTable;
