import { Modal } from "antd";
import { publishProductImg } from "../../../../../assets/ProductPromotions";
import RoundedButton from "../../../../../components/button/RoundedButton";

interface Props {
  open?: any | undefined;
  onClose?: any;
  publish: () => void;
}

const PublishProductModal = ({ open, onClose, publish }: Props) => {
  return (
    <Modal
      title={"Publish Product"}
      centered
      footer={null}
      width={516}
      open={open ? true : false}
      onCancel={() => onClose(false)}
    >
      <img src={publishProductImg} alt="" className="mx-auto" />
      <div className="w-full h-full  mt-1">
        <h1 className="font-semibold heading-xs leading-6 mb-[10px]">
          Are you sure you want to publish your business product?
        </h1>
        <p className="font-medium body-s leading-6 mb-[10px]">
          Once published, your business plan will be visible to your intended
          audience. Ensure all information is accurate and complete.
        </p>
        <div className="flex justify-between items-center">
          <RoundedButton
            title={"Cancel"}
            type="danger"
            sm
            onClick={() => onClose()}
          />
          <RoundedButton
            title={"Publish"}
            type="primary"
            sm
            onClick={() => publish()}
          />
        </div>
      </div>
    </Modal>
  );
};

export default PublishProductModal;
