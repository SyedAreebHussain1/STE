import { Button, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import RoundedButton from "../../../../../../components/button/RoundedButton";

type Props = {
  data: any;
  open: boolean;
  toggle: () => void;
  saveModalData: (modalData: any) => void;
  newUserImages: any;
  setNewUserImages: any;
};

const SlideTeamModal = ({
  data,
  open,
  toggle,
  saveModalData,
  newUserImages,
  setNewUserImages,
}: Props) => {
  const [modalData, setModalData] = useState<any[]>([]);
  const [images, setImages] = useState([]);
  const [imgRefs, setImgRefs] = useState<any[]>(
    data.map((item: any, i: number) => {
      return useRef();
    })
  );

  useEffect(() => {
    if (data?.length > 0) {
      setModalData(data);
    }
  }, []);

  const handleModalData = (value: any, keyName: string, i: number) => {
    let newData: any = modalData;
    newData = newData.map((item: any, index: number) =>
      index === i ? { ...item, [keyName]: value } : item
    );

    setModalData([...newData]);
  };

  return (
    <Modal
      title={"Edit Team Info"}
      centered
      footer={null}
      open={open}
      onCancel={() => toggle()}
      width={800}
    >
      <div className="flex flex-col gap-2 mb-4">
        {modalData?.map((data: any, i: number) => (
          <div
            key={i}
            className="flex items-center border rounded-xl p-4 gap-2"
          >
            <input
              ref={imgRefs[i]}
              type="file"
              accept=".png,.jpg,.jpeg"
              className="hidden"
              onChange={(e) => {
                if (e?.target?.files?.[0]) {
                  handleModalData(e?.target?.files?.[0], "imgURL", i);
                  setNewUserImages({
                    ...newUserImages,
                    [i.toString()]: URL.createObjectURL(e.target.files[0]),
                  });
                }
              }}
            />
            <img
              src={
                newUserImages[i.toString()]
                  ? newUserImages[i.toString()]
                  : data?.imgURL
              }
              alt=""
              className="w-12 h-12 cursor-pointer rounded-full object-cover"
              onClick={() => imgRefs[i].current.click()}
              draggable={false}
            />
            <input
              type="text"
              className=" h-full no-input-styles bg-transparent p-2 rounded w-fit"
              value={data?.name}
              onChange={(e) => {
                handleModalData(e.target.value, "name", i);
              }}
            />
            <input
              type="text"
              className=" h-full no-input-styles bg-transparent p-1 rounded w-fit"
              value={data?.designation}
              onChange={(e) => {
                handleModalData(e.target.value, "designation", i);
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

export default SlideTeamModal;
