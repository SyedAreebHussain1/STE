import { Modal } from "antd";
import RoundedButton from "../../../components/button/RoundedButton";
import { outOfCredits } from "../../../assets/chatbotAssets";
import { useNavigate } from "react-router-dom";

const OutOfCreditsModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <Modal
      centered
      footer={null}
      closable={false}
      closeIcon={false}
      open={open ? true : false}
      onCancel={() => onClose()}
      className="p-0 m-0 customModalAndClass"
    >
      <div className=" bg-[#F8FAFC] p-7 rounded-[30px] overflow-hidden">
        <div className="flex justify-center mb-[20px]">
          <img src={outOfCredits} />
        </div>
        <h1 className="text-[#212838] text-[25px]  text-center font-medium leading-[28.02px]">
          Out of Chat Credits!
        </h1>
        <p className="text-[#4A5366] text-[15px] font-medium leading-[20px] mt-[5px] text-center">
          To continue enjoying full access to our expert AI assistance, you’ll
          need to purchase more credits.
        </p>

        <div className="flex justify-center mt-[20px]">
          <RoundedButton
            title={"Buy More Credits"}
            type="primary"
            sm
            className="rounded-full px-[20px]"
            onClick={() => navigate("/subscription-plan")}
          />
        </div>
      </div>
    </Modal>
  );
};
export default OutOfCreditsModal;
