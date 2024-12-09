import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../../utils/PageHeader";

import {
  // allOwnersByInvestorAction,
  getSaleOrderProductHistory,
  // findCountsofInvestorsAction,
} from "../../../../../store/action/saleOrderAction";
import { useDispatch, useSelector } from "react-redux";
import SaleOrderProductTable from "./SaleOrderProductTable";
const SaleOrderProduct = () => {
  const dispatch = useDispatch();
  // findCountsofInvestors
  const { allProductSaleOrderHistory } = useSelector(
    (state) => state.saleOrder
  );

  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [search, setSearch] = useState("");
  // console.log(findCountsofInvestors);
  const onShowSizeChange = (current, pageSize) => {
    setPageLimit({
      page: current,
      limit: pageSize,
    });
  };
  useEffect(() => {
    handleFilter();
    // handleGetCount();
  }, [pageLimit]);

  const handleFilter = () => {
    dispatch(getSaleOrderProductHistory(pageLimit, search));
  };
  // const handleGetCount = () => {
  //   dispatch(findCountsofInvestorsAction());
  // };
  return (
    <div
      style={{
        // paddingLeft: "15px",
        // paddingTop: "0px",
        // paddingRight: "15px",
        // paddingBottom: "15px",
        backgroundColor: "white",
        // margin: "2% 1% 1% 1%",
        borderRadius: "5px",
      }}
    >
      <br />
      <div
        style={{
          borderColor: "#F3F3F3",
          borderWidth: 1,
          borderStyle: "solid",
          padding: "5px",
        }}
      >
        <PageHeader
          label="Product Sale Order"
          setSearch={setSearch}
          handleFilter={handleFilter}
        />
        <SaleOrderProductTable
          data={allProductSaleOrderHistory}
          onShowSizeChange={onShowSizeChange}
        />
      </div>
    </div>
  );
};
export default SaleOrderProduct;
