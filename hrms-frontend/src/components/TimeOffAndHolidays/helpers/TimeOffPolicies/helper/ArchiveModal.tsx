import React from "react";
import { Button, Modal } from "antd";

type ArchiveModalProps = {
  open?: boolean;
  setOpen?: any;
};

const ArchiveModal: React.FC<ArchiveModalProps> = ({
  open,
  setOpen,
}: ArchiveModalProps) => {
  const title = (
    <h3 className="text-[1.75rem] text-[rgb(77,77,77)] font-bold">
      Are you sure you want to archive "Vacation Leave" ?
    </h3>
  );

  return (
    <div className="people-delete">
      <Modal
        title={title}
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <p className="text-[rgba(0,0,0,0.6)] font-normal text-[.875rem]">
          Archived policies will no longer be accessible for new time off
          requests. Past requests will continue to be visible in timesheets,
          reports and logs.
        </p>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button
            className="h-[40px] font-normal"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="dark:bg-dark-primary bg-light-primary text-[#fff] border-none h-[40px] font-normal"
            onClick={() => setOpen(false)}
            type="primary"
          >
            Conform
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ArchiveModal;
