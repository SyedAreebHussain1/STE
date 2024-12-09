import { Modal } from "antd";
import React from "react";
import Map from "./Map";

type Props = {
  open: boolean;
  setOpen: any;
  data: any;
};

const StopHistoryModal = ({ open, setOpen, data }: Props) => {
  return (
    <Modal
      title={"Stop Location"}
      centered
      footer={null}
      open={open}
      onCancel={() => setOpen(false)}
      width={500}
    >
      <div className="w-full h-[400px]">
        <Map data={data} />
      </div>
    </Modal>
  );
};

export default StopHistoryModal;
