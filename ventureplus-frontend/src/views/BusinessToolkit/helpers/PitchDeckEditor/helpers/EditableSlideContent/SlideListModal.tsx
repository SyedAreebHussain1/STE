import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import RoundedButton from "../../../../../../components/button/RoundedButton";

type Props = {
  data: any;
  open: boolean;
  toggle: () => void;
  saveModalData: (modalData: any) => void;
};

const SlideListModal = ({ data, open, toggle, saveModalData }: Props) => {
  const [modalData, setModalData] = useState({
    heading: "",
    items: [],
  });

  useEffect(() => {
    if (data) {
      setModalData(data);
    }
  }, []);

  const handleHeadingUpdate = (value: string) => {
    setModalData({ ...modalData, heading: value });
  };

  const handleModalData = (value: any, i: number) => {
    let newData: any = modalData;
    newData = {
      ...newData,
      items: newData.items.map((item: any, index: number) =>
        index === i ? value : item
      ),
    };

    setModalData({...newData})
    // setModalData((st: any) => ({
    //     ...st,
    //     items: st.items.map((item: any, index: number) => index === i ? value : item)
    // }));
  };

  return (
    <Modal
      title={"Edit List"}
      centered
      footer={null}
      open={open}
      onCancel={() => toggle()}
      width={800}
    >
      <div className="border-t border-r border-l border-primary mb-2">
        <div className="p-2 border-b border-primary">
          <input
            type="text"
            className="w-full h-full no-input-styles bg-transparent p-1 rounded"
            value={modalData?.heading}
            onChange={(e) => {
              handleHeadingUpdate(e.target.value);
            }}
          />
        </div>
        {modalData?.items?.length > 0 &&
          modalData?.items?.map((item: any, i: number) => (
            <div key={i} className="p-2 border-b border-primary">
              <input
                type="text"
                className="w-full h-full no-input-styles bg-transparent p-1 rounded"
                value={item}
                onChange={(e) => {
                  handleModalData(e.target.value, i);
                }}
              />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-end">
        <RoundedButton
          title={"Save"}
          sm
          bold
          type="primary"
          onClick={() => saveModalData(modalData)}
        />
      </div>
    </Modal>
  );
};

export default SlideListModal;
