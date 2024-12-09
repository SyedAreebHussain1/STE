import { Button, Modal } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { rejectStaffRequestApi } from "../../../redux/api/StaffManagement";

type Props = {
  open: boolean;
  setOpen: any;
  data: any;
};

const RejectRequestModal = ({ open, setOpen, data }: Props) => {
  const dispatch = useDispatch();
  const onSuccess = () => {
    setOpen(false);
  };
  const handleClick = () => {
    rejectStaffRequestApi(data.id, dispatch, onSuccess);
  };
  return (
    <Modal
      title="Reject Request"
      centered
      open={open}
      onCancel={() => setOpen(false)}
      footer={false}
    >
      <h1 className="mt-[20px] text-[1rem]">
        Are you sure you want to reject this request?
      </h1>
      <div className="flex justify-end w-[100%] mt-[20px]">
        <Button
          htmlType="submit"
          type="primary"
          className="bg-primary text-[#fff] h-[40px] border-none px-[20px]  text-[1rem] font-semibold"
          onClick={handleClick}
        >
          Reject
        </Button>
      </div>
    </Modal>
  );
};

export default RejectRequestModal;
