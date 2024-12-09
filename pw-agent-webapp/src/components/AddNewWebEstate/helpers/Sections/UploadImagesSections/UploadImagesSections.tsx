import { Col, Form, FormInstance, Input, Row } from "antd";
import SectionContainer from "../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";
import Upload from "../../../../../helpers/Upload/Upload";
import { useUpload } from "../../../../../hooks/useUpload";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadImageApi } from "../../../../../redux/api/InventoryManagement";

type Props = {
  webPhoto: any;
  setWebPhoto: any;
};

const UploadImagesSections = (props: Props) => {
  const dispatch = useDispatch();
  const [
    projectImages,
    setProjectImages,
    projectImagesPreviews,
    deleteProjectImages,
    resetProjectImages,
    filesCountProject,
  ] = useUpload();

  useEffect(() => {
    if (projectImages?.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < projectImages.length; i++) {
        formData.append("files", projectImages[i]);
      }
      uploadImageApi(dispatch, formData, onSuccess, "webPhoto");
    }
  }, [projectImages]);

  const onSuccess = (val: any, name: any) => {
    resetProjectImages.resetProgress();
    props?.setWebPhoto((pre: any) => [...pre, ...val]);
  };

  const deleteImages = (name: any) => {
    props?.setWebPhoto((pre: any) => pre.filter((val: any) => val !== name));
  };

  return (
    <SectionContainer
      title="Upload Images (x3)"
      subtitle="Make sure images must be in
      High Quality"
    >
      <Col xs={8}>
        <Upload
          name="projectImages"
          files={projectImages}
          setFiles={setProjectImages}
          supportedFileTypes={["png", "jpg", "jpeg"]}
          supportedText={"Files Supported  JPG,JPEG,PNG"}
          fileLimit={5}
          multiple
          fileName="INVENTORYIMAGES"
          fileUploadLimit={3}
          filesCount={filesCountProject}
        />
      </Col>
      <Col xs={16}>
        <Row className=" gap-2 mt-[10px]">
          {props?.webPhoto?.map((item: any, i: any) => (
            <Col xs={16} lg={6} className="h-[100px]" key={i}>
              <div className="relative inline-block h-full w-full">
                <img src={item} className="w-full h-full" alt="Your Image" />
                <button
                  className={`absolute top-0 right-0 mt-[2px] mr-[2px] pt-[1px] text-[black] bg-[white]  border-none rounded-full cursor-pointer`}
                  onClick={(e: any) => {
                    e.preventDefault();
                    deleteImages(item);
                  }}
                >
                  <MdClose size={16} />
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </SectionContainer>
  );
};

export default UploadImagesSections;
