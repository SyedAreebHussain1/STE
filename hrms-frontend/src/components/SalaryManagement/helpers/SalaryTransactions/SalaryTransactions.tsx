import React from "react";
import SalaryTransactionsTable from "./helpers/SalaryTransactionsTable";
import SpaceWrapper from "../../../wrappers/SpaceWrapper";

const SalaryTransactions = () => {
  return <SpaceWrapper className="!py-[.75rem] !pr-0 !pl-[1.5rem]">
    <SalaryTransactionsTable />
  </SpaceWrapper>
};

export default SalaryTransactions;
