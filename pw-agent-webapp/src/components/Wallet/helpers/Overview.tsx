import Overviewicon from "../../../../src/assets/OverviewIcon.png";
import Cardpay from "../../../../src/assets/CardPay.png";
import { Button } from "antd";
import { MdArrowOutward } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { RootState } from "../../../redux/store";
import { FiArrowDownLeft } from "react-icons/fi";
import useToggle from "../../../hooks/useToggle";
import { useEffect, useState } from "react";
import { addPaymobCardApi, getUserWalletApi } from "../../../redux/api/Wallet";
import { useDispatch, useSelector } from "react-redux";
import AddWithdrawAmountModal from "./AddWithdrawAmountModal";
import AddAmountModal from "./AddAmountModal";
import { BsArrowRight } from "react-icons/bs";
type PageHeaderForWalletProps = {
  title?: any;
  subTitle?: string;
  extra?: React.ReactNode;
  titleHeadBtn?: string;
  route?: string;
  toggleHasWindowClosed: (value: boolean) => void;
  hasWindowClosed: boolean;
  currentTab: string;
  handleDemoButtonClick: any;
};

const Overview = ({
  toggleHasWindowClosed,
  currentTab,
  handleDemoButtonClick,
}: PageHeaderForWalletProps) => {
  const [addAmountModal, toggleAddAmountModal] = useToggle();
  const [hasWindowClosed, setHasWindowClosed] = useState(false);
  const dispatch = useDispatch();
  const getUserWallet = useSelector((state: RootState) => state.getUserWallet);
  useEffect(() => {
    if (currentTab === "1") {
    }
    getUserWalletApi(dispatch);
  }, [dispatch, hasWindowClosed]);
  const [withdrawAmountModal, toggle] = useToggle();
  useEffect(() => {
    if (hasWindowClosed) {
      toggleHasWindowClosed(false);
    }
  }, [hasWindowClosed]);
  function onSuccess(data: any) {
    const windowObject = window.open(
      `https://pakistan.paymob.com/api/acceptance/iframes/${
        import.meta.env.VITE_PYAMOB_TOKEN_VALUE
      }?payment_token=${data?.data?.token}`,
      "",
      "width=700,height=500,left=400,top=120,"
    );
  }

  return (
    <>
      {addAmountModal && (
        <AddAmountModal
          open={addAmountModal}
          close={toggleAddAmountModal}
          toggleHasWindowClosed={toggleHasWindowClosed}
        />
      )}
      {withdrawAmountModal && (
        <AddWithdrawAmountModal open={withdrawAmountModal} close={toggle} />
      )}
      <div className="flex flex-col ">
        <div className="flex mt-4 w-full ">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col justify-center items-center border p-4 rounded-lg w-[360px]">
              <div className="flex gap-1">
                <img src={Overviewicon} alt="icon" />
                <div>
                  <h1 className="text-lg font-semibold ">Available Balance</h1>
                  <p className="text-[#98A2B3] text-xs">
                    Current amount that's available in your wallet
                  </p>
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-semibold mt-5 mb-10">
                  PKR {getUserWallet.data?.amount || 0}
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    onClick={toggle}
                    icon={<MdArrowOutward className="border rounded-full" />}
                    className="text-sm font-bold bg-primary text-white h-[42px]"
                  >
                    Withdraw
                  </Button>
                  <Button
                    icon={
                      <FiArrowDownLeft className=" border-2 border-black rounded-full " />
                    }
                    className="text-sm font-bold h-[42px]"
                    onClick={toggleAddAmountModal}
                  >
                    Deposit
                  </Button>
                </div>
              </div>
            </div>

            <div className=" border p-5 w-[360px] rounded-lg">
              <img src={Cardpay} alt="card" className="mx-auto mb-1" />
              <h1 className="text-lg font-semibold">Add your Card</h1>
              <p className="text-[#98A2B3] text-xs">
                Add and Manage your Cards for Easy access and Convenience
              </p>
              <Button
                icon={<BiPlus className="inline  arrow-icon" size={25} />}
                className="text-sm font-bold h-[42px] mt-4"
                onClick={() => {
                  addPaymobCardApi(dispatch, onSuccess);
                }}
              >
                Add Card
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <div className="w-full">
            <h1 className="md:text-2xl  font-semibold">
              See Recent Transactions{" "}
              <BsArrowRight
                onClick={() => handleDemoButtonClick()}
                className="inline cursor-pointer arrow-icon"
              />
            </h1>
            <p className="text-[#98A2B3]">
              Check your recent transactions that you have made
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
