import { Col, Form, Row } from "antd";
import SectionContainer from "../../../../SectionContainer";
import Upload from "../../../../../helpers/Upload/Upload";
import { useUpload } from "../../../../../hooks/useUpload";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../../../../helpers/inputs/Button";
import { useForm } from "antd/es/form/Form";
import { getFromStorage, setInStorage } from "../../../../../utils/storage";
import { useDispatch } from "react-redux";
import { uploadImageApi } from "../../../../../redux/api/InventoryManagement";
import { FaFilePdf } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { infoMessage } from "../../../../../utils/message";

type Props = {
  current?: number;
  next: () => void;
  prev: () => void;
  formInstance?: any;
};

const ImageAndAttachmentsStep = (props: Props) => {
  const [form] = useForm();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [imageOrFile, setImageOrFile] = useState({
    masterPlan: "",
    projectOrProperty: [],
    document: [],
  });

  useEffect(() => {
    if (type === "existing") {
      const projectDetails = location?.state;
      setImageOrFile((pre) => ({
        ...pre,
        projectOrProperty:
          projectDetails?.projectPhotos?.length > 0
            ? projectDetails?.projectPhotos?.map((item: any) => item.photo)
            : [],
      }));
    }
  }, [type]);

  const [
    masterPlanImages,
    setMasterPlanImages,
    masterPlanImagesPreviews,
    deleteMasterPlanImages,
    resetMasterPlanImages,
    filesCountMasterPlan,
  ] = useUpload();

  const [
    projectImages,
    setProjectImages,
    projectImagesPreviews,
    deleteProjectImages,
    resetProjectImages,
    filesCountProject,
  ] = useUpload();

  const [
    attachmentImages,
    setAttachmentImages,
    attachmentImagesPreviews,
    deleteAttachmentImages,
    resetAttachmentImages,
    filesCountAttachment,
  ] = useUpload();
  const dispatch = useDispatch();

  useEffect(() => {
    if (masterPlanImages?.length > 0) {
      const formData = new FormData();
      formData.append("files", masterPlanImages[0]);
      uploadImageApi(dispatch, formData, onSuccess, "masterPlan");
    }
  }, [masterPlanImages]);

  useEffect(() => {
    if (projectImages?.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < projectImages.length; i++) {
        formData.append("files", projectImages[i]);
      }
      uploadImageApi(dispatch, formData, onSuccess, "projectOrProperty");
    }
  }, [projectImages]);

  useEffect(() => {
    if (attachmentImages?.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < attachmentImages.length; i++) {
        formData.append("files", attachmentImages[i]);
      }
      uploadImageApi(dispatch, formData, onSuccess, "document");
    }
  }, [attachmentImages]);

  const onSuccess = (val: any, name: any) => {
    if (name == "masterPlan") {
      setImageOrFile((pre) => ({
        ...pre,
        [name]: val[0],
      }));
    } else {
      setImageOrFile((pre: any) => ({
        ...pre,
        [name]: [...pre[name], ...val],
      }));
    }
    resetMasterPlanImages.resetProgress();
    resetProjectImages.resetProgress();
    resetAttachmentImages.resetProgress();
  };

  const onFinish = () => {
    if (type == "existing") {
      props?.next();
      return;
    }
    if (!imageOrFile?.masterPlan && type === "project") {
      infoMessage("Please add the master plan for the project.");
      return;
    }
    if (imageOrFile?.projectOrProperty?.length <= 0) {
      infoMessage("Please add a photo for the inventory.");
      return;
    }
    const project = getFromStorage("project");
    const body = {
      photo: [...imageOrFile.projectOrProperty],
      doucments: [...imageOrFile.document],
      masterPlan: imageOrFile.masterPlan,
    };
    if (project) {
      setInStorage("project", { ...project, ...body });
    } else {
      setInStorage("project", body);
    }
    props.next();
  };

  return (
    <Form
      name="add-single-property-step-two"
      className="projects-form"
      initialValues={{ remember: true }}
      form={form}
      onFinish={onFinish}
    >
      {type === "project" && (
        <SectionContainer
          title={"Add Master Plan"}
          subtitle={"Upload the images of your inventory"}
        >
          <Row gutter={24}>
            <Col lg={8} xs={24}>
              <Upload
                name="masterPlanImages"
                files={masterPlanImages}
                setFiles={setMasterPlanImages}
                supportedFileTypes={["png", "jpg", "jpeg"]}
                supportedText={"Files Supported  JPG,JPEG,PNG"}
                fileName="INVENTORYIMAGES"
                fileUploadLimit={1}
                filesCount={filesCountMasterPlan}
              />
            </Col>
            <Col xs={24} lg={16}>
              {imageOrFile?.masterPlan && (
                <Col xs={16} lg={6} className=" h-[100px] ">
                  <div className="relative inline-block h-full w-full">
                    <img
                      src={imageOrFile?.masterPlan}
                      className="w-full h-full"
                      alt="Your Image"
                    />
                    <button
                      className="absolute top-0 right-0 mt-[2px] mr-[2px] pt-[1px] text-[black] bg-[white]  border-none rounded-full cursor-pointer"
                      onClick={(e: any) => {
                        e.preventDefault();
                        setImageOrFile((pre: any) => ({
                          ...pre,
                          masterPlan: "",
                        }));
                      }}
                    >
                      <MdClose size={16} />
                    </button>
                  </div>
                </Col>
              )}
            </Col>
          </Row>
        </SectionContainer>
      )}
      <SectionContainer
        title={"Add images"}
        subtitle={"Upload the attatchment of your inventory"}
      >
        <Row gutter={24}>
          <Col lg={8} xs={24}>
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
              disabled={type === "existing"}
            />
          </Col>
          <Col xs={24} lg={16}>
            <Row className=" gap-2 mt-[10px]">
              {imageOrFile?.projectOrProperty?.map((item: any, i: any) => (
                <Col xs={16} lg={6} className="h-[100px]" key={i}>
                  <div className="relative inline-block h-full w-full">
                    <img
                      src={item}
                      className="w-full h-full"
                      alt="Your Image"
                    />
                    <button
                      className={`absolute top-0 right-0 mt-[2px] mr-[2px] pt-[1px] text-[black] bg-[white]  border-none rounded-full cursor-pointer ${
                        type === "existing" ? "hidden" : "block"
                      }`}
                      onClick={(e: any) => {
                        e.preventDefault();
                        setImageOrFile((pre: any) => ({
                          ...pre,
                          projectOrProperty: pre.projectOrProperty.filter(
                            (_: any, index: any) => index !== i
                          ),
                        }));
                      }}
                    >
                      <MdClose size={16} />
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </SectionContainer>
      {type !== "existing" ? (
        <SectionContainer
          title={"Legal Attachment (optional)"}
          subtitle={"Upload the attatchment of your inventory"}
        >
          <Row gutter={24}>
            <Col lg={8} xs={24}>
              <Upload
                name="attachmentImages"
                files={attachmentImages}
                setFiles={setAttachmentImages}
                supportedFileTypes={["pdf"]}
                supportedText={"Files Supported  PDF"}
                multiple
                fileName="INVENTORYIMAGES"
                fileUploadLimit={3}
                filesCount={filesCountAttachment}
              />
            </Col>
            <Col xs={24} lg={16}>
              {imageOrFile?.document?.map((item: any, i: any) => (
                <Col
                  key={i}
                  xs={24}
                  className="h-[80px]  border border-[#667085] rounded-lg mt-[10px]"
                >
                  <Row className="h-full gap-4 items-center justify-between">
                    <Col className="h-full ">
                      <Row className="h-full items-center gap-4">
                        <Col>
                          <FaFilePdf size={35} color="#667085" />
                        </Col>
                        <Col className="items-center">
                          <div>
                            <p>{item.split("/")[item.split("/").length - 1]}</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="justify-end ">
                      <div
                        className="cursor-pointer"
                        onClick={(e: any) => {
                          e.preventDefault();
                          setImageOrFile((pre: any) => ({
                            ...pre,
                            document: pre.document.filter(
                              (_: any, index: any) => index !== i
                            ),
                          }));
                        }}
                      >
                        <MdClose size={25} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Col>
          </Row>
        </SectionContainer>
      ) : (
        <></>
      )}

      <Col sm={24}>
        <div className="flex items-center justify-between gap-4 mt-5">
          <Button
            label={
              <div className="flex items-center gap-2">
                <BsArrowLeft />
                <span>Back</span>
              </div>
            }
            variant="outlined"
            onClick={(e: any) => {
              e.preventDefault();
              props.prev();
            }}
          />
          <Button label="Continue" variant="filled" htmlType="submit" />
        </div>
      </Col>
    </Form>
  );
};

export default ImageAndAttachmentsStep;
