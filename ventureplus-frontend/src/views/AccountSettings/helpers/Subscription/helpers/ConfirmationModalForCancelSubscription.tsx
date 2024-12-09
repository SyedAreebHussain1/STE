import { Button, Modal } from "antd";
import { ConfirmationCancelSubscriptionIcon } from "../../../../../assets";
import RoundedButton from "../../../../../components/button/RoundedButton";
import { checkOutUpdateApi } from "../../../../../services/api/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { useEffect, useState } from "react";
import {
  getSubscriptionPlanApi,
  getUsersSubscribedPlanApi,
} from "../../../../../services/api/SubscriptionPlan";

const ConfirmationModalForCancelSubscription = ({
  open,
  onCancel,
}: {
  open: boolean;
  onCancel: () => void;
}) => {
  const dispatch = useDispatch();
  const subscriptions = useSelector(
    (state: RootState) => state?.getSubscriptionPlan
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getSubscriptionPlanApi(dispatch);
  }, [dispatch]);

  function clickHandler() {
    setLoading(true);
    checkOutUpdateApi(
      {
        packageId: subscriptions?.data?.data?.filter(
          (plan: any) => plan.isFree
        )[0]?.id,
      },
      dispatch,
      onSuccess
    );
  }
  function onSuccess() {
    setLoading(true);
    getUsersSubscribedPlanApi(dispatch);
    onCancel();
  }

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      width={400}
      closeIcon={false}
      maskClosable={false}
      loading={subscriptions?.loading}
    >
      <div className="flex flex-col items-center">
        <img
          src={ConfirmationCancelSubscriptionIcon}
          alt="confirmation icon"
          className="w-[50px] h-[50px]"
        />
        <h1 className="text-[#F75856] text-[21px] font-semibold leading-[25.02px] mt-[10px]">
          Cancelling Subscription
        </h1>
      </div>
      <div className=" mt-[10px] rounded-lg">
        <h2 className="text-[#040615] text-[15px]  font-medium leading-[20px]">
          Are you sure you want to cancel your subscription?
        </h2>
        <p className="text-[12px] leading-[20px] font-normal text-[#212838] mt-[5px]">
          Please note that your current subscription will be cancelled at the
          end of your billing period.
        </p>
      </div>
      <div className="flex justify-between items-center mt-[20px]">
        <Button
          className="!bg-[#FFFFEB] !border-[1px] border-[#CCCCB1]  !py-[17px] rounded-full px-[20px] font-semibold"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
        <RoundedButton
          title={"Confirm"}
          type="primary"
          disabled={loading}
          loading={loading}
          sm
          onClick={clickHandler}
        />
      </div>
    </Modal>
  );
};
export default ConfirmationModalForCancelSubscription;
