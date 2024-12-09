import React, { useEffect, useRef, useState } from "react";
import SaleOrderTable from "./SaleOrderTable";
import PageHeader from "../../../utils/PageHeader";

import {
  // allOwnersByInvestorAction,
  getSaleOrderProjectHistory,
  // findCountsofInvestorsAction,
} from "../../../../../store/action/saleOrderAction";
import { useDispatch, useSelector } from "react-redux";
const SaleOrderProject = () => {
  const dispatch = useDispatch();
  // findCountsofInvestors
  const { allProjectSaleOrderHistory } = useSelector(
    (state) => state.saleOrder
  );
  console.log(allProjectSaleOrderHistory);
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
    dispatch(getSaleOrderProjectHistory(pageLimit, search));
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
          label="Project Sale Order"
          setSearch={setSearch}
          handleFilter={handleFilter}
        />
        <SaleOrderTable
          data={allProjectSaleOrderHistory}
          onShowSizeChange={onShowSizeChange}
        />
      </div>
    </div>
  );
};
export default SaleOrderProject;
