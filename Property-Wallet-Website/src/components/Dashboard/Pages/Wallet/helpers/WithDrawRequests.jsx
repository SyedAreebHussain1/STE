import React, { useEffect, useState } from "react";
import WithdrawRequestsTable from "./WithdrawRequestsTable";
import PageHeader from "../../../utils/PageHeader";
import {
  getAllInvestorTransactionHistoryDebit,
  withDrawRequetsforInvestorAction,
} from "../../../../../store/action/saleOrderAction";
import { useDispatch, useSelector } from "react-redux";

const WithdrawRequests = () => {
  const dispatch = useDispatch();
  const { allInvesterTransactionHistoryDebit } = useSelector(
    (state) => state.saleOrder
  );
  // console.log(allInvesterTransactionHistoryDebit);
  const [data, setData] = useState([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });

  const onShowSizeChange = (current, pageSize) => {
    setPageLimit({
      page: current,
      limit: pageSize,
    });
  };
  useEffect(() => {
    handleFilter();
  }, [pageLimit]);
  useEffect(() => {
    setData(allInvesterTransactionHistoryDebit);
  }, [allInvesterTransactionHistoryDebit]);

  const handleFilter = () => {
    dispatch(getAllInvestorTransactionHistoryDebit(pageLimit));
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "2% 0% 1% 0%",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          borderColor: "#F3F3F3",
          borderWidth: 1,
          borderStyle: "solid",
          padding: "5px",
        }}
      >
        <PageHeader
          label="Withdraw History"
          // setSearch={setSearch}
          handleFilter={handleFilter}
        />
        <WithdrawRequestsTable
          data={data}
          onShowSizeChange={onShowSizeChange}
        />
      </div>
    </div>
  );
};
export default WithdrawRequests;
