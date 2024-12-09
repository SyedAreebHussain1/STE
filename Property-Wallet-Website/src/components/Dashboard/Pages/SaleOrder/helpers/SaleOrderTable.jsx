import React, { useEffect, useRef, useState } from "react";
import saleOrderColumns from "../../../../../Tables/saleOrderColumns.json";
import { Button, Table, Tag } from "antd";
// import iconWithdraw from "../../../../images/withdraw.png";
// import WithdrawModal from "./WithdrawModal";
import moment from "moment";
const SaleOrderTable = ({ data, onShowSizeChange }) => {
  const [dataSource, setDataSource] = useState([]);
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState({
    visible: false,
    data: null,
  });

  // const handleClose = () => {
  //   setModal({ ...modal, visible: false, data: null });
  // };
  // const handleOpen = (data) => {
  //   setModal({ ...modal, visible: true, data: data });
  // };

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
        return tableData.push({
          sellingPointName: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.propertyWalletInventorySaleQuotation?.createdByUser
                ?.profile?.agency?.agencyName
                ? item?.propertyWalletInventorySaleQuotation?.createdByUser
                    ?.profile?.agency?.agencyName
                : "-"}
            </span>
          ),
          sellingPointLocation: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.propertyWalletInventorySaleQuotation?.createdByUser
                ?.profile?.agency?.city
                ? item?.propertyWalletInventorySaleQuotation?.createdByUser
                    ?.profile?.agency?.city
                : "-"}
            </span>
          ),
          clientName: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.propertyWalletInventorySaleQuotation?.clientName
                ? item?.propertyWalletInventorySaleQuotation?.clientName
                : "-"}
            </span>
          ),
          projectName: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.propertyWalletInventorySaleQuotation
                ?.propertyWalletInventoryPlot?.propertyWalletInventory
                ?.propertyWalletProject?.projectName
                ? item?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.propertyWalletProject?.projectName
                : "-"}
            </span>
          ),
          size: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.propertyWalletInventorySaleQuotation
                ?.propertyWalletInventoryPlot?.propertyWalletInventory?.landSize
                ? item?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.landSize
                : "-"}{" "}
              {item?.propertyWalletInventorySaleQuotation
                ?.propertyWalletInventoryPlot?.propertyWalletInventory?.landArea
                ?.title
                ? item?.propertyWalletInventorySaleQuotation
                    ?.propertyWalletInventoryPlot?.propertyWalletInventory
                    ?.landArea?.title
                : "-"}
            </span>
          ),
          agentName: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.propertyWalletInventorySaleQuotation?.createdByUser
                ?.profile?.fullName
                ? item?.propertyWalletInventorySaleQuotation?.createdByUser
                    ?.profile?.fullName
                : "-"}
            </span>
          ),
          date: (
            <span style={{ textTransform: "capitalize", whiteSpace: "nowrap" }}>
              {item?.createdAt
                ? moment(item?.createdAt?.split("T")[0]).format("DD-MM-YYYY")
                : "-"}
            </span>
          ),
          sellingPrice: (
            <span style={{ textTransform: "capitalize" }}>
              {item?.totalAmount ? item?.totalAmount : "-"}
            </span>
          ),

          // commissionEarned: (
          //   <span style={{ textTransform: "capitalize" }}>
          //     Commission earned
          //   </span>
          // ),

          // location: (
          //   <span style={{ textTransform: "capitalize" }}>{`${profile?.agency?.city}, ${profile?.agency?.country}`}</span>
          // ),
          // phoneNo: <span style={{ textTransform: "capitalize" }}>{phone}</span>,
          // // amount: <span style={{ textTransform: "capitalize" }}>-</span>,
          // action: (
          //   <Button
          //     type="default"
          //     // size="small"

          //     style={{
          //       borderColor: "#053B5C",
          //       color: "#053B5C",
          //     }}
          //     shape="round"
          //     onClick={() => {
          //       handleOpen(item);
          //     }}
          //   >
          //     <img src={iconWithdraw} style={{ paddingBottom: "2px" }} /> &nbsp;
          //     Withdraw Amount
          //   </Button>
          //   // <Tag style={{ borderRadius: "24px", padding: "6px" }} color="">
          //   //   5 days remaining
          //   // </Tag>
          // ),
        });
      });
      setDataSource(tableData);
    }
  }, [posts]);

  return (
    <>
      {/* <WithdrawModal visible={modal.visible} handleClose={handleClose} /> */}
      <Table
        dataSource={dataSource}
        pagination={{
          total: data?.meta?.totalItems,
          onChange: onShowSizeChange,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        columns={saleOrderColumns}
      />
    </>
  );
};
export default SaleOrderTable;
