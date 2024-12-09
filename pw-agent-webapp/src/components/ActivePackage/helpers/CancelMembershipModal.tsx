import { Modal } from "antd";
import React from "react";
import Button from "../../../helpers/inputs/Button";
import { cancelPwSubPackageApi } from "../../../redux/api/PackagesAgency";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfileApi } from "../../../redux/api/auth";

const CancelMembershipModal = ({ open, close, pwAssid }: any) => {
  const dispatch = useDispatch();
  const onCancelMembership: any = () => {
    cancelPwSubPackageApi(dispatch, pwAssid, onSuccess);
  };
  const navigate = useNavigate();

  function onSuccess() {
    getProfileApi(dispatch);
    navigate("/");
  }
  return (
    <Modal
      title="Membership Cancellation"
      centered
      open={open}
      onCancel={close}
      footer={false}
      width={380}
    >
      <div className="bg-[#B7B5B522] mb-6 mt-5">
        <p className="text-[#393939] text-[0.75rem] p-[10px] ">
          <span className="text-black font-medium">Warning:</span> We are sorry
          to see you go. If you proceed with cancelling your membership, please
          keep in mind that you'll be missing out on all the exclusive benefits
          and content that our community has to offer.
        </p>
      </div>
      <Button
        label={"Cancel Membership"}
        variant="outlined"
        className="w-full !border-[#FF3B3B] !text-[#FF3B3B] hover:!text-[#fff] hover:!bg-[#FF3B3B]"
        onClick={onCancelMembership}
      />
    </Modal>
  );
};

export default CancelMembershipModal;
