import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

type ApplyToJobModalProps = {
  open?: any | undefined;
  onClose?: any;
};

const ApplyToJobModal= ({
  open,
  onClose,
}: ApplyToJobModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal
      title={"Successfully applied"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => {
        onClose(false);
        navigate(-1);
      }}
    >
      <h1>Thanks For applying!</h1>
    </Modal>
  );
};

export default ApplyToJobModal;
