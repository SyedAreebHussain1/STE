import { Col, Form, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cancelIcon } from "../../../../assets";
import {
  circularAddIcon,
  deleteWhiteIcon,
  playIcon,
} from "../../../../assets/ProductPromotions";
import RoundedButton from "../../../../components/button/RoundedButton";
import TextInput from "../../../../components/inputs/TextInput";
import Upload from "../../../../components/inputs/UpLoad";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import useToggle from "../../../../hooks/useToggle";
import { useUpload } from "../../../../hooks/useUpload";
import { RootState } from "../../../../redux/store";
import { createProductPromotionApi } from "../../../../services/api/ProductPromotion";
import { infoMessage } from "../../../../utils/message";
import PublishProductModal from "./helpers/PublishProductModal";

interface Props { }

type OnFinishType = {
  name: string;
  description: string;
  industry: string;
  websiteUrl: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedInLink: string;
};

const CreateProduct = (props: Props) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openPublishModal, togglePublishModal] = useToggle();
  const [productVideos, setProductVideos] = useState<any[]>([]);
  const videoInputRef = useRef<any>();
  const [
    images,
    setImages,
    imagesPreviews,
    deleteImages,
    resetImages,
    filesCount,
  ] = useUpload();
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );
  const createProductPromotion = useSelector(
    (state: RootState) => state.createProductPromotion
  );
  const [formFields, setFormFields] = useState<OnFinishType>({
    name: "",
    description: "",
    industry: "",
    websiteUrl: "",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
    linkedInLink: "",
  });

  const onFinish = (values: OnFinishType) => {
    if (images?.length < 3) {
      infoMessage("Please upload atleast 3 images");
      return;
    }
    setFormFields(values);
    togglePublishModal();
  };

  const onSuccess = () => {
    navigate("/promote-product");
  };

  const handlePublishProduct = () => {
    const body = new FormData();
    for (let [key, value] of Object.entries(formFields)) {
      if (value) {
        body.append(key, value);
      }
    }

    body.append("businessId", currentSelectedBusiness?.business?.id);

    if (images.length > 0) {
      for (let index = 0; index < images.length; index++) {
        const element = images[index];
        body.append("photos", images[index]);
      }
    }

    if (productVideos.length > 0) {
      for (let index = 0; index < productVideos.length; index++) {
        const element = productVideos[index];
        body.append("videos", productVideos[index]);
      }
    }
    createProductPromotionApi(dispatch, body, onSuccess);
  };

  const handleVideoUpload = (e: any) => {
    if (createProductPromotion.loading) return;
    const isVideo = e.target.files[0].type.startsWith("video/");
    if (!isVideo) {
      message.error("You can only upload video files!");
      return;
    }

    setProductVideos((st) => [...st, e.target.files[0]]);
  };

  const deleteVideos = (name: string) => {
    if (createProductPromotion.loading) return;
    setProductVideos(productVideos.filter((video) => video.name !== name));
  };

  return (
    <>
      {openPublishModal && (
        <PublishProductModal
          open={openPublishModal}
          onClose={togglePublishModal}
          publish={handlePublishProduct}
        />
      )}
      <PageContainer>
        <Form
          autoComplete="off"
          form={form}
          onFinish={onFinish}
          name="createProductPromotionForm"
        >
          <Row>
            <Col xs={24} lg={17} className="p-4">
              <h1 className="heading-m font-bold leading-[25.02px] text-body mb-4">
                Business Information
              </h1>
              <div className="p-4 border border-strokes rounded-xl">
                <h1 className="heading-xs font-semibold leading-[25.02px] text-body mb-4">
                  General Information
                </h1>
                <Row gutter={16} className="!w-full">
                  <Col sm={24}>
                    <label htmlFor="name" className="input-label-sm">
                      Name
                    </label>
                    <TextInput
                      maxLength={100}
                      className="w-full min-h-[40px] mt-1"
                      classNameFormItem="mb-3"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    />
                  </Col>
                  <Col sm={24}>
                    <label htmlFor="description" className="input-label-sm">
                      Description
                    </label>
                    <Form.Item
                      className="w-full mb-2"
                      name="description"
                      id="description"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    >
                      <TextArea
                        placeholder="Enter Description"
                        style={{ height: 80, resize: "none" }}
                      />
                    </Form.Item>
                  </Col>
                  <Col sm={24}>
                    <label htmlFor="industry" className="input-label-sm">
                      Industry
                    </label>
                    <TextInput
                      className="w-full min-h-[40px] mt-1"
                      classNameFormItem="mb-3"
                      name="industry"
                      id="industry"
                      placeholder="Enter Industry"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    />
                  </Col>
                </Row>
              </div>

              <div className="p-4 border border-strokes rounded-xl mt-4">
                <h1 className="heading-xs font-semibold leading-[25.02px] text-body mb-4">
                  Additional Information
                </h1>
                <Row gutter={16} className="!w-full">
                  <Col sm={24}>
                    <label htmlFor="websiteUrl" className="input-label-sm">
                      Website
                    </label>
                    <TextInput
                      className="w-full min-h-[40px] mt-1"
                      classNameFormItem="mb-2"
                      name="websiteUrl"
                      id="websiteUrl"
                      placeholder="Enter website link"
                    />
                  </Col>
                  <Col>
                    <div className="input-label-sm my-3">Socials</div>
                  </Col>
                  <Col sm={24}>
                    <TextInput
                      classNameFormItem="mb-2"
                      name="twitterLink"
                      id="twitterLink"
                      size="large"
                      addonBefore={"twitter.com/"}
                      placeholder="Enter twitter link"
                    />
                  </Col>
                  <Col sm={24}>
                    <TextInput
                      classNameFormItem="mb-2"
                      name="facebookLink"
                      id="facebookLink"
                      size="large"
                      addonBefore={"facebook.com/"}
                      placeholder="Enter facebook link"
                    />
                  </Col>
                  <Col sm={24}>
                    <TextInput
                      classNameFormItem="mb-2"
                      name="instagramLink"
                      id="instagramLink"
                      size="large"
                      addonBefore={"instagram.com/"}
                      placeholder="Enter insta link"
                    />
                  </Col>
                  <Col sm={24}>
                    <TextInput
                      classNameFormItem="mb-1 "
                      name="linkedInLink"
                      id="linkedInLink"
                      size="large"
                      addonBefore={"linkedin.com/company/"}
                      placeholder="Enter linkedin link"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} lg={7} offset={0.5} className="p-4 h-fit">
              {/* images upload section */}
              <div className="p-4 border border-strokes rounded-xl h-fit">
                <h1 className="heading-xs font-semibold leading-[25.02px] text-body mb-4">
                  Images
                </h1>

                {imagesPreviews?.length > 0 && (
                  <div
                    className="rounded-xl w-full h-[300px] overflow-hidden relative"
                    onClick={() => deleteImages(imagesPreviews?.[0]?.name)}
                  >
                    <div className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center">
                      <img src={deleteWhiteIcon} alt="" />
                    </div>

                    <img
                      src={imagesPreviews?.[0]?.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex gap-3 flex-wrap mt-3">
                  {imagesPreviews?.length > 1 &&
                    imagesPreviews?.slice(1)?.map((image, i) => (
                      <div className="rounded-xl w-[90px] h-[90px] overflow-hidden relative">
                        <div
                          className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center"
                          onClick={() => deleteImages(image?.name)}
                        >
                          <img src={deleteWhiteIcon} alt="" />
                        </div>
                        <img
                          key={i}
                          src={image?.url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  <Upload
                    name="masterPlanImages"
                    files={images}
                    setFiles={setImages}
                    supportedFileTypes={["png", "jpg", "jpeg"]}
                    supportedText={"Files Supported  JPG,JPEG,PNG"}
                    fileName="PRODUCT_IMAGES"
                    filesCount={filesCount}
                    icon={circularAddIcon}
                    multiple
                    disabled={createProductPromotion.loading}
                    customContent={
                      <div
                        className={
                          "rounded-xl w-[90px] h-[90px] bg-icon border border-strokes flex items-center justify-center cursor-pointer " +
                          (createProductPromotion.loading
                            ? "cursor-not-allowed"
                            : "")
                        }
                      >
                        <img src={circularAddIcon} alt="" />
                      </div>
                    }
                  />
                </div>
              </div>
              {/* videos upload section */}
              <div className="mt-4 p-4 border border-strokes rounded-xl h-fit">
                <h1 className="heading-xs font-semibold leading-[25.02px] text-body mb-4">
                  Videos
                </h1>
                <input
                  type="file"
                  accept="video/mp4"
                  onChange={handleVideoUpload}
                  ref={videoInputRef}
                  className="w-0 h-0 !hidden"
                />
                <div className="">
                  <div className="rounded-xl w-full  border border-strokes p-4 flex flex-col ">
                    <RoundedButton
                      title={"Select Files"}
                      type="primary"
                      sm
                      onClick={() => videoInputRef.current.click()}
                      disabled={createProductPromotion.loading}
                    />
                    {productVideos?.length > 0 &&
                      productVideos?.map((video, i) => (
                        <div className="rounded-xl w-full pt-4 px-2 flex justify-between items-center hover:bg-gray-100">
                          <div className="flex justify-between items-center gap-2 overflow-hidden">
                            <img src={playIcon} alt="" className="w-6 h-6" />
                            <p className="text-body font-semibold body-s ">
                              {video.name}
                            </p>
                          </div>
                          <img
                            src={cancelIcon}
                            alt=""
                            className="cursor-pointer ml-2"
                            onClick={() => deleteVideos(video?.name)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="flex justify-between items-center p-4">
            <RoundedButton
              title={"Cancel"}
              htmlType="button"
              type="danger"
              sm
              onClick={() => navigate(-1)}
              disabled={createProductPromotion.loading}
            />
            <RoundedButton
              title={"Publish"}
              htmlType="submit"
              type="primary"
              sm
              loading={createProductPromotion.loading}
            />
          </div>
        </Form>
      </PageContainer>
    </>
  );
};

export default CreateProduct;
