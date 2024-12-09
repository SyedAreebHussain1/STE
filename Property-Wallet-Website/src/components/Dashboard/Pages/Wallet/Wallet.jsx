import React, { useEffect, useState } from "react";
import PageHeader from "../../utils/PageHeader";
import { withDrawRequetsforInvestorAction } from "../../../../store/action/saleOrderAction";
import { useDispatch, useSelector } from "react-redux";
import WalletTabs from "./helpers/walletTabs";

const Wallet = () => {
  return (
    <>
      {/* <WithdrawRequestsTable
          data={withDrawRequetsforInvestor}
          onShowSizeChange={onShowSizeChange}
        /> */}
      <WalletTabs />
    </>
  );
};
export default Wallet;
