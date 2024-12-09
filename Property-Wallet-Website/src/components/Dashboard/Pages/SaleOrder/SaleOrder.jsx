import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaleOrderProject from "./helpers/SaleOrderProject";
import SaleOrderProduct from "./helpers/SaleOrderProduct";

const SaleOrderTabs = () => {
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
        <Tabs>
          <Tabs.TabPane tab="Product Sale Order" key="PROJECT">
            <SaleOrderProduct />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Project Sale Order" key="PRODUCT">
            <SaleOrderProject />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default SaleOrderTabs;
