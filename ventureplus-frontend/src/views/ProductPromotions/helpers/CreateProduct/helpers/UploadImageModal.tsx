import { message, Modal } from "antd";
import { RcFile, UploadChangeParam } from "antd/es/upload/interface";
import { useRef, useState } from "react";
import {
  circularCloseIcon,
  imagesIcon,
} from "../../../../../assets/ProductPromotions";
import RoundedButton from "../../../../../components/button/RoundedButton";
import Upload from "../../../../../components/inputs/UpLoad";
interface Props {
  open?: any | undefined;
  onClose?: any;
  images: File[];
  setImages: any;
  filesCount: any;
  imagesPreviews: any;
  deleteImages: any;
}

const UploadImageModal = ({
  open,
  onClose,
  images,
  setImages,
  filesCount,
  imagesPreviews,
  deleteImages,
}: Props) => {
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

  const removeFile = (name: string) => {
    deleteImages(name);
  };

  useRef;

  return (
    <Modal
      title={"Upload Product Image"}
      centered
      footer={null}
      open={open ? true : false}
      onCancel={() => onClose(false)}
    >
      <Upload
        name="masterPlanImages"
        files={images}
        setFiles={setImages}
        supportedFileTypes={["png", "jpg", "jpeg"]}
        supportedText={"Files Supported  JPG,JPEG,PNG"}
        fileName="PRODUCT_IMAGES"
        fileUploadLimit={3}
        filesCount={filesCount}
        icon={imagesIcon}
        multiple
      />
      {imagesPreviews.length > 0 && (
        <div className="flex flex-col gap-1 mt-1">
          {imagesPreviews?.map((f: any, i: number) => (
            <div
              key={i}
              className="flex justify-between p-2 items-center border-b-[2px] border-strokes "
            >
              <p className="text-paraLight">{f?.name}</p>
              <img
                src={circularCloseIcon}
                alt=""
                className="cursor-pointer"
                onClick={() => removeFile(f.name)}
              />
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
