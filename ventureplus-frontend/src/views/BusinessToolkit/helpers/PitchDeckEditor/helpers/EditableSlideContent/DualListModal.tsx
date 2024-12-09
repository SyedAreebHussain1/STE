import { Modal } from "antd";
import RoundedButton from "../../../../../../components/button/RoundedButton";
import { useEffect, useState } from "react";

const DualListModal = ({
  data,
  open,
  toggle,
  saveModalData,
  isLeftEditable,
  isRightEditable,
  descriptiveInput,
}: {
  data: any;
  open: boolean;
  toggle: () => void;
  saveModalData: (modalData: any) => void;
  isLeftEditable: boolean;
  isRightEditable: boolean;
  descriptiveInput: boolean;
}) => {
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    if (data?.length > 0) {
      setModalData(data);
    }
  }, []);

  const handleModalData = (
    value: any,
    position: "right" | "left",
    i: number
  ) => {
    let newData = data;
    newData = data.map((st: any, index: number) => {
      if (index === i) {
        return { ...st, [position]: value };
      } else {
        return { ...st };
      }
    });

    setModalData(newData);
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
      {modalData?.map((item: any, i: number) => (
        <div key={i} className="w-full flex items-center justify-evenly gap-2">
          <div className="flex items-center justify-center bg-green-100 w-full p-1 mb-2 h-[40px] overflow-hidden rounded-lg">
            {isLeftEditable ? (
              <input
                type="text"
                className="w-full h-full no-input-styles bg-transparent p-1 rounded"
                value={item.left}
                onChange={(e) => {
                  handleModalData(e.target.value, "left", i);
                }}
              />
            ) : (
              <p className="font-bold body-s cursor-not-allowed">{item.left}</p>
            )}
          </div>
          <div
            className={`flex items-center justify-center bg-green-100 w-full p-1 mb-2 overflow-hidden rounded-lg ${
              descriptiveInput ? "h-[100px]" : " h-[40px]"
            }`}
          >
            {isRightEditable ? (
              descriptiveInput ? (
                <textarea
                  rows={4}
                  className="w-full h-full no-input-styles bg-transparent p-1 rounded"
                  value={item.right}
                  onChange={(e) => {
                    handleModalData(e.target.value, "right", i);
                  }}
                />
              ) : (
                <input
                  type="text"
                  className="w-full h-full no-input-styles bg-transparent p-1 rounded"
                  value={item.right}
                  onChange={(e) => {
                    handleModalData(e.target.value, "right", i);
                  }}
                />
              )
            ) : (
              <p>{item.right}</p>
            )}
          </div>
        </div>
      ))}
      <div className="w-full flex justify-end mt-4">
        <RoundedButton
          title={"Save"}
          type="primary"
          onClick={() => saveModalData(modalData)}
          sm
          bold
        />
      </div>
    </Modal>
  );
};
export default DualListModal;
