import React, { useEffect, useRef, useState } from "react";
import ReceivdeColumns from "../../../../../Tables/receivedAmountColumns.json";
import { Button, Table, Tag } from "antd";
import numberToText from "number-to-words";
import moment from "moment";

const ReceivedAmountHistoryTable = ({ data, onShowSizeChange }) => {
  const [dataSource, setDataSource] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (data?.items?.length > 0) {
      setPosts(data?.items);
    } else {
      setDataSource([]);
    }
  }, [data]);
  useEffect(() => {
    if (posts?.length > 0) {
      const tableData = [];
      posts.map((item, index) => {
        // const { amount, createdAt, status } = item;
        return tableData.push({
          sellingPointName: (
            <span style={{ textTransform: "capitalize" }}>
              {item
                ? item?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventoryFinalizeSaleStage?.[0]
                    ?.createdByUser?.profile?.agency?.agencyName
                : "-"}
            </span>
          ),
          sellingPointLocation: (
            <span style={{ textTransform: "capitalize" }}>
              {item
                ? item?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventoryFinalizeSaleStage?.[0]
                    ?.createdByUser?.profile?.agency?.city
                : "-"}
            </span>
          ),
          projectName: (
            <span style={{ textTransform: "capitalize" }}>
              {item
                ? item?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.propertyWalletProject?.projectName
                : "-"}
            </span>
          ),
          agentName: (
            <span style={{ textTransform: "capitalize" }}>
              {item
                ? item?.propertyWalletInventoryFinalizeSale
                    ?.propertyWalletInventoryFinalizeSaleStage?.[0]
                    ?.createdByUser?.profile?.fullName
                : "-"}
            </span>
          ),
          date: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.createdAt
                ? moment(item?.createdAt?.split("T")[0]).format("DD-MM-YYYY")
                : "-"}
            </span>
          ),
          amount: (
            <span style={{ textTransform: "capitalize" }}>{item?.amount}</span>
          ),
          amountInWord: (
            <span style={{ textTransform: "capitalize" }}>
              {item && item?.amount
                ? numberToText.toWords(parseInt(item?.amount))
                : "N/A"}
            </span>
          ),
        });
      });
      setDataSource(tableData);
    }
  }, [posts]);
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
        columns={ReceivdeColumns}
      />
    </>
  );
};
export default ReceivedAmountHistoryTable;
