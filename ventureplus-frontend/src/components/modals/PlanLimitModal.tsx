import { Modal } from "antd";
import React from "react";
import { limitReachedIcon } from "../../assets";
import RoundedButton from "../button/RoundedButton";
import { useNavigate } from "react-router-dom";

interface PlanLimitModalProps {
  isVisible: boolean;
  onCancel: () => void;
  title: string;
}

const PlanLimitModal = ({
  isVisible,
  onCancel,
  title,
}: PlanLimitModalProps) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={isVisible}
      closable={false}
      onCancel={onCancel}
      footer={null}
      centered
      width={700}
      title={`Plan Limit Exceeded`}
    >
      <div className="w-full p-4 flex flex-col gap-2 items-center justify-center text-center">
        <img src={limitReachedIcon} alt="" />
        <h1 className="text-body font-semibold heading-m">
          Free Plan Limit Reached
        </h1>
        <p className="text-para body-s">
          Upgrade to a premium plan for full access, or purchase specific
          features like additional users or new ideas.{" "}
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <RoundedButton
          title={"Cancel"}
          type="danger"
          sm
          bold
          onClick={() => onCancel()}
        />
        <RoundedButton
          title={`Buy ${title}`}
          type="primary"
          sm
          bold
          onClick={() => navigate("/subscription-plan")}
        />
      </div>
    </Modal>
  );
};

export default PlanLimitModal;
