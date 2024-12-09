import { Modal } from "antd";
import RoundedButton from "../../../../../button/RoundedButton";
import { useEffect, useState } from "react";

import {
  ListContainerForBulletAndNumberModal,
  SideBarForBulletAndNumberModal,
} from "../../BulletAndNumberListEditor";
import { cancelIconWhite } from "../../../../../../assets";
import {
  CustomStyleForImage,
  ImageContainerForImageModal,
  ListContainerForImageModal,
  SideBarForImageModal,
} from "../../ImageListEditor";
import Upload from "../../../../../inputs/UpLoad";
import UploadImageInPlan from "../../uploadImageInPlan";

interface Props {
  open: boolean;
  close: () => void;
  customStyle: CustomStyleForImage;
  setCustomStyle: React.Dispatch<React.SetStateAction<CustomStyleForImage>>;
  data: any;
  setData: any;
  savesetPushObjectHandler: (data: any, style: CustomStyleForImage) => void;
};

const SingleImageModal: React.FC<Props> = ({
  open,
  close,
  customStyle,
  setCustomStyle,
  data,
  setData,
  savesetPushObjectHandler,
}) => {
  const [customStyleModal, setCustomStyleModal] = useState<any>();
  const [modalData, setModalData] = useState<any>([]);
  const [file, setFile] = useState<File[]>([]);
  const [imageURL, setImageURL] = useState<string>("");

  useEffect(() => {
    if (data.length > 0) {
      setModalData([...data]);
    }
  }, [data]);

  useEffect(() => {
    setCustomStyleModal({ ...customStyle });
  }, [customStyle]);

  useEffect(() => {
    if (file.length > 0) {
      setImageURL(URL.createObjectURL(file[0]));
    }
  }, [file]);

  const addListHandler = () => {
    setModalData((pre: any) => [
      ...pre,
      {
        caption: `Caption ${pre?.length + 1}`,
        file: null,
        url: "",
      },
    ]);
  };

  const listContainerDeleteHandler = (index: number) => {
    setModalData((pre: any) => pre.filter((_: any, i: number) => i !== index));
  };

  const saveHandler = () => {
    setCustomStyle({ ...customStyleModal });
    setData([...modalData]);
    close();
    savesetPushObjectHandler(modalData, customStyleModal);
  };
  const deleteHandlerFroImage = (imageIndex: number) => {
    setModalData((pre: any) =>
      pre.filter((_: any, ind: number) => ind !== imageIndex)
    );
  };

  return (
    <Modal
      centered
      footer={null}
      open={open}
      onCancel={close}
      closeIcon={false}
      closable={false}
      maskClosable={false}
      width="100%"
      className="m-0 p-0 tableforPdf rounded-xl overflow-hidden"
    >
      <div className="flex w-full max-h-max">
        <div className="flex-1 h-[90vh] overflow-y-auto py-[15px] px-[10px]">
          <h1 className="text-[#040615] text-[23px] font-medium border-b-2 border-[#040615] pb-[8px] px-[8px]">
            Image List
          </h1>
          <div
            className={`grid gap-4 mt-[20px] px-[20px] `}
            style={{
              gridTemplateColumns: `repeat(${customStyleModal?.Columns?.column}, minmax(0, 1fr))`,
            }}
          >
            {imageURL && <img src={imageURL} alt="uploaded" />}

            {modalData?.length > 0 &&
              modalData?.map((item: any, index: number) => (
                <div key={index} className="w-full">
                  <ListContainerForImageModal
                    data={item}
                    customStyleModal={customStyleModal}
                    deleteHandler={() => listContainerDeleteHandler(index)}
                    setData={setModalData}
                    index={index}
                  />
                </div>
              ))}
          </div>
        </div>
        {/* side bar */}
        <div className="w-max py-[15px] px-[10px] h-[90vh] flex flex-col bg-[#016A70]">
          <div className="flex justify-between border-b-2 border-[#F8FAFC] items-center px-[8px] pb-[8px]">
            <h1 className="text-[#fff] text-[23px] font-medium">Editor</h1>
            <div onClick={close}>
              <img src={cancelIconWhite} alt="cancel icon" />
            </div>
          </div>
          <div className="h-full overflow-y-auto px-[5px]">
            <div className="h-max py-[10px]">
              <SideBarForImageModal
                data={customStyleModal?.Columns}
                title="Columns"
                setCustomStyleModal={setCustomStyleModal}
                customStyleModal={customStyleModal}
              />
              <SideBarForImageModal
                data={customStyleModal?.Captions}
                title="Captions"
                setCustomStyleModal={setCustomStyleModal}
                customStyleModal={customStyleModal}
              />
              {modalData.map((item: any, index: number) => (
                <ImageContainerForImageModal
                  data={item}
                  setData={setModalData}
                  index={index}
                  deleteHandler={() => deleteHandlerFroImage(index)}
                />
              ))}
              <div className="flex w-full mt-4 justify-center">
                <RoundedButton
                  title={"Add List"}
                  sm
                  className="rounded-lg py-[20px] px-[30px] text-[16px]"
                  type="secondary"
                  onClick={() => addListHandler()}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full pt-[10px]">
            <RoundedButton
              title={"Save"}
              sm
              className="rounded-lg w-full"
              type="default"
              onClick={saveHandler}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SingleImageModal;
