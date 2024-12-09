import React, { useEffect } from "react";
import { Button, Col, Row } from "antd";
import { PauseCircleOutlined } from "@ant-design/icons";
import WalletCard from "./WalletCard";
import { getUserWalletApi } from "../../../redux/api/Wallet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useToggle from "../../../hooks/useToggle";
import AddWithdrawAmountModal from "./AddWithdrawAmountModal";
import AddAmountModal from "./AddAmountModal";
import PaymobCard from "./PaymobCard";

type PageHeaderForWalletProps = {
  title?: any;
  subTitle?: string;
  extra?: React.ReactNode;
  titleHeadBtn?: string;
  route?: string;
  className?: string;
  toggleHasWindowClosed: (value: boolean) => void;
  hasWindowClosed: boolean;
};

export const PageHeaderForWallet = ({
  className = "",
  toggleHasWindowClosed,
  hasWindowClosed,
}: PageHeaderForWalletProps) => {
  const dispatch = useDispatch();
  const getUserWallet = useSelector((state: RootState) => state.getUserWallet);
  useEffect(() => {
    getUserWalletApi(dispatch);
  }, [dispatch, hasWindowClosed]);
  const [withdrawAmountModal, toggle] = useToggle();
  useEffect(() => {
    if (hasWindowClosed) {
      toggleHasWindowClosed(false);
    }
  }, [hasWindowClosed]);
  return (
    <div
      className={`flex bg-[#FFFFFF] gap-4 items-center p-[20px] rounded-xl w-full mt-4 ${className}`}
    >
      {withdrawAmountModal && (
        <AddWithdrawAmountModal open={withdrawAmountModal} close={toggle} />
      )}
      <WalletCard
        create={
          <Button
            className="border rounded-full bg-white text-primary font-bold py-5 flex justify-center items-center"
            onClick={toggle}
          >
            Withdraw Amount
          </Button>
        }
        title="Wallet Balance"
        value={`PKR ${getUserWallet.data?.amount || 0}`}
      />
      <PaymobCard />
    </div>
  );
};
