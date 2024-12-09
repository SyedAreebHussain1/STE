import { Tabs } from "antd";
import React, { useEffect } from "react";
import ReceivedAmount from "./ReceivedAmount";
import { useDispatch, useSelector } from "react-redux";
import { withDrawRequetsforInvestorAction } from "../../../../../store/action/saleOrderAction";
import Cards from "./Cards";
import WithdrawRequests from "./WithDrawRequests";

const WalletTabs = () => {
  // const dispatch = useDispatch();
  // const { withDrawRequetsforInvestor } = useSelector(
  //   (state) => state.saleOrder
  // );

  // useEffect(() => {
  //   handleFilter();
  // }, [pageLimit]);

  // const handleApi = () => {
  //   dispatch(withDrawRequetsforInvestorAction());
  // };
  return (
    <>
      <div
        style={{
          paddingLeft: "15px",
          paddingTop: "15px",
          paddingRight: "15px",
          paddingBottom: "15px",
          backgroundColor: "white",
          margin: "2% 1% 1% 1%",
          borderRadius: "5px",
        }}
      >
        <Cards />
      </div>
      <div
        style={{
          paddingLeft: "15px",
          paddingTop: "15px",
          paddingRight: "15px",
          paddingBottom: "15px",
          backgroundColor: "white",
          margin: "2% 1% 1% 1%",
          borderRadius: "5px",
        }}
      >
        <Tabs>
          <Tabs.TabPane tab="Received Amount History" key="RECEIVED_AMOUNT">
            <ReceivedAmount />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Withdraw History" key="WITHDRAW">
            <WithdrawRequests />{" "}
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default WalletTabs;
