import { message, Modal, Upload } from "antd";
import { RcFile, UploadChangeParam } from "antd/es/upload/interface";
import { useState } from "react";
import {
    circularCloseIcon,
    imagesIcon,
} from "../../../../../assets/ProductPromotions";
import RoundedButton from "../../../../../components/button/RoundedButton";
interface Props {
  open?: any | undefined;
  onClose?: any;
}

const UploadImageModal = ({ open, onClose }: Props) => {
  const { Dragger } = Upload;
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: UploadChangeParam) => {
    const { fileList } = info;

    // Filter and update fileList with only image files
    const newFileList = fileList
      .filter(
        (file) =>
          file.originFileObj &&
          (file.originFileObj as File).type.startsWith("image/")
      )
      .map((file) => ({
        ...file,
        uid: file.uid,
        name: file.name,
        status: file.status,
      }));

    setFileList(newFileList);
  };

  const removeFile = (uid: string) => {
    setFileList(fileList.filter((file) => file.uid !== uid));
  };

  const uploadProps = {
    beforeUpload: (file: RcFile) => {
      if (!file.type.startsWith("image/")) {
        message.error("You can only upload image files!");
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    showUploadList: false,
    multiple: true, // Allow multiple files
    fileList: fileList, // Set file list to the state
    customRequest: () => {}, // Disable default upload behavior
    onChange: handleChange,
  };

  return (
    <Modal
      title={"Upload Product Image"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
    >
      <Dragger {...uploadProps}>
        <div className="flex justify-center items-center gap-3 flex-col">
          <img src={imagesIcon} alt="" />

          <p className="font-semibold paragraph leading-6 text-para">
            You can drag & drop images into this window to upload
          </p>
          <RoundedButton title={"Browse for images"} type="grey" />
        </div>
      </Dragger>
      {fileList.length > 0 && (
        <div className="flex flex-col gap-1 mt-1">
          {fileList.map((f) => (
            <div className="flex justify-between p-2 items-center border-b-[2px] border-strokes ">
              <p className="text-paraLight">{f?.name}</p>
              <img src={circularCloseIcon} alt="" className="cursor-pointer" onClick={() => removeFile(f.uid)} />
            </div>
          ))}
        </div>
      )}
     
      <div className="flex justify-between items-center mt-6">
        <RoundedButton
          title={"Cancel"}
          type="danger"
          sm
          onClick={() => onClose()}
        />
        <RoundedButton title={"Upload"} type="primary" sm />
      </div>
    </Modal>
  );
};

export default UploadImageModal;
