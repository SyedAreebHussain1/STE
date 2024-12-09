import React from "react";
import { Button, Modal } from "antd";

type DeleteFaceDataModalProps = {
  modalOpen?: boolean;
  setModalOpen?: any;
};

const DeleteFaceDataModal: React.FC<DeleteFaceDataModalProps> = ({
  modalOpen,
  setModalOpen,
}: DeleteFaceDataModalProps) => {
  const title = (
    <h3 className="text-[30px] text-[#000000de] font-semibold">
      Delete face data
    </h3>
  );

  return (
    <div className="people-delete">
      <Modal
        title={title}
        centered
        footer={null}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
      >
        <p className="text-[#00000099] font-normal text-[.875rem] leading-10">
          Are you sure you want to delete face data? This action can't be
          revoked.
        </p>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#c41446] text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setModalOpen(false)}
            type="primary"
          >
            Conform
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteFaceDataModal;
