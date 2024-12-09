import { Modal } from "antd";
import React from "react";
import Button from "../../../helpers/inputs/Button";
import { PiBellRinging } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { cancelPwSubPackageApi } from "../../../redux/api/PackagesAgency";
import { useNavigate } from "react-router-dom";
import { getProfileApi } from "../../../redux/api/auth";

const UpdatePlanModal = ({ open, close, pwAssid }: any) => {
  const dispatch = useDispatch();
  const onUpdatePlan: any = () => {
    cancelPwSubPackageApi(dispatch, pwAssid, onSuccess);
  };
  const navigate = useNavigate();
  function onSuccess() {
    getProfileApi(dispatch);
    navigate("/package");
  }
  return (
    <Modal centered open={open} onCancel={close} footer={false} width={380}>
      <div className="w-full flex justify-center mt-5">
        <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex justify-center items-center">
          <PiBellRinging fontSize={"2rem"} />
        </div>
      </div>
      <div className=" mb-4 mt-2">
        <h1 className="text-[1.5rem] text-black font-semibold text-center">
          Disclaimer!
        </h1>
        <p className="text-[#393939] text-[0.75rem] px-[10px] text-center  ">
          You will lose all your existing add ons and limits while upgrading to
          a new plan.
        </p>
      </div>
      <Button
        label={"Confirm"}
        variant="filled"
        className="w-full "
        onClick={onUpdatePlan}
      />
    </Modal>
  );
};

export default UpdatePlanModal;
