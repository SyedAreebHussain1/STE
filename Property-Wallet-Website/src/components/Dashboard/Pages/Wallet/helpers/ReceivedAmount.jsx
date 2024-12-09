import React, { useEffect, useRef, useState } from "react";
import PageHeader from "../../../utils/PageHeader";
import {
  allOwnersByInvestorAction,
  findCountsofInvestorsAction,
  getAllInvestorTransactionHistoryCredit,
} from "../../../../../store/action/saleOrderAction";
import { useDispatch, useSelector } from "react-redux";
import ReceivedAmountHistoryTable from "./ReceivedAmountHistoryTable";
const ReceivedAmount = () => {
  const dispatch = useDispatch();
  const { allInvesterTransactionHistoryCredit } = useSelector(
    (state) => state.saleOrder
  );
  // console.log(allInvesterTransactionHistoryCredit);
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

    // handleGetCount();
  }, [pageLimit]);

  const handleFilter = () => {
    dispatch(getAllInvestorTransactionHistoryCredit(pageLimit));
  };
  // const handleGetCount = () => {
  //   dispatch(findCountsofInvestorsAction());
  // };
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
          label="Received Amount History"
          // setSearch={setSearch}
          handleFilter={handleFilter}
        />
        <ReceivedAmountHistoryTable
          data={allInvesterTransactionHistoryCredit}
          onShowSizeChange={onShowSizeChange}
        />
      </div>
    </div>
  );
};
export default ReceivedAmount;
