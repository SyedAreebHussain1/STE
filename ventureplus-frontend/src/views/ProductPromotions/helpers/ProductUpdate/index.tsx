import { Col, Form, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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
import PageNotFound from "../../../../components/PageNotFound";
import useToggle from "../../../../hooks/useToggle";
import { useUpload } from "../../../../hooks/useUpload";
import { RootState } from "../../../../redux/store";
import {
  deleteProductPhotoApi,
  deleteProductVideoApi,
  getProductPromotionByIdApi,
  updateProductPromotionApi,
} from "../../../../services/api/ProductPromotion";
import { infoMessage } from "../../../../utils/message";
import PublishProductModal from "./helpers/PublishProductModal";

interface Props {}

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

const ProductUpdate = (props: Props) => {
  const { id } = useParams();
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
  const getProductPromotionById = useSelector(
    (state: RootState) => state.getProductPromotionById?.data?.data
  );
  const updateProductPromotion = useSelector(
    (state: RootState) => state.updateProductPromotion
  );
  const { isAuth, userData } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    getProductPromotionByIdApi(dispatch, Number(id));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      name: getProductPromotionById?.name,
      description: getProductPromotionById?.description,
      industry: getProductPromotionById?.industry,
      websiteUrl:
        getProductPromotionById?.websiteUrl === "undefined"
          ? ""
          : getProductPromotionById?.websiteUrl,
      facebookLink:
        getProductPromotionById?.facebookLink === "undefined"
          ? ""
          : getProductPromotionById?.facebookLink,
      twitterLink:
        getProductPromotionById?.twitterLink === "undefined"
          ? ""
          : getProductPromotionById?.twitterLink,
      instagramLink:
        getProductPromotionById?.instagramLink === "undefined"
          ? ""
          : getProductPromotionById?.instagramLink,
      linkedInLink:
        getProductPromotionById?.linkedInLink === "undefined"
          ? ""
          : getProductPromotionById?.linkedInLink,
    });
  }, [getProductPromotionById]);

  const onFinish = (values: OnFinishType) => {
    if (images?.length + getProductPromotionById?.promotionPhotos?.length < 3) {
      infoMessage("Please provide atleast 3 images");
      return;
    }

    const body = new FormData();
    for (let [key, value] of Object.entries(values)) {
      if (value) {
        body.append(key, value);
      }
    }
    body.append("businessId", currentSelectedBusiness?.business?.id);

    if (images.length > 0) {
      for (let index = 0; index < images.length; index++) {
        body.append("photos", images[index]);
      }
    }

    if (productVideos.length > 0) {
      for (let index = 0; index < productVideos.length; index++) {
        body.append("videos", productVideos[index]);
      }
    }

    updateProductPromotionApi(dispatch, Number(id), body, onSuccess);
  };

  const onSuccess = () => {
    navigate(`/product/${id}`);
  };

  const handlePublishProduct = () => {
    togglePublishModal();
  };

  const handleVideoUpload = (e: any) => {
    const isVideo = e.target.files[0].type.startsWith("video/");
    if (!isVideo) {
      message.error("You can only upload video files!");
      return;
    }

    setProductVideos((st) => [...st, e.target.files[0]]);
  };

  const deleteVideos = (name: string) => {
    setProductVideos(productVideos.filter((video) => video.name !== name));
  };

  const deleteImage = (id: number) => {
    deleteProductPhotoApi(dispatch, id, onDeleteMedia);
  };

  const deleteVideo = (id: number) => {
    deleteProductVideoApi(dispatch, id, onDeleteMedia);
  };

  const onDeleteMedia = () => {
    getProductPromotionByIdApi(dispatch, Number(id));
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
        {getProductPromotionById?.createdBy !== userData?.companyUser?.id ? (
          <PageNotFound />
        ) : (
          <Form
            autoComplete="off"
            form={form}
            onFinish={onFinish}
            name="updateProductPromotionForm"
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

                  <div className="flex gap-3 flex-wrap mt-3">
                    {imagesPreviews?.length > 0 &&
                      imagesPreviews?.map((image, i) => (
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
                    {getProductPromotionById?.promotionPhotos?.length > 0 &&
                      getProductPromotionById?.promotionPhotos?.map(
                        (photo: any) => (
                          <div className="rounded-xl w-[90px] h-[90px] overflow-hidden relative">
                            <div
                              className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center"
                              onClick={() => deleteImage(photo?.id)}
                            >
                              <img src={deleteWhiteIcon} alt="" />
                            </div>
                            <img
                              key={photo?.id}
                              src={photo?.url}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                      )}
                    <Upload
                      name="masterPlanImages"
                      files={images}
                      setFiles={setImages}
                      supportedFileTypes={["png", "jpg", "jpeg"]}
                      supportedText={"Files Supported  JPG,JPEG,PNG"}
                      fileName="PRODUCT_IMAGES"
                      fileUploadLimit={3}
                      filesCount={filesCount}
                      icon={circularAddIcon}
                      multiple
                      disabled={updateProductPromotion.loading}
                      customContent={
                        <div className="rounded-xl w-[90px] h-[90px] bg-icon border border-strokes flex items-center justify-center cursor-pointer">
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
                        disabled={updateProductPromotion.loading}
                        onClick={() => videoInputRef.current.click()}
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
                      {getProductPromotionById?.promotionVideos?.length > 0 &&
                        getProductPromotionById?.promotionVideos?.map(
                          (video: any, i: any) => (
                            <div className="rounded-xl w-full pt-4 px-2 flex justify-between items-center hover:bg-gray-100">
                              <div className="flex justify-between items-center gap-2 overflow-hidden">
                                <img
                                  src={playIcon}
                                  alt=""
                                  className="w-6 h-6"
                                />
                                <p className="text-body font-semibold body-s ">
                                  Video-{i}
                                </p>
                              </div>
                              <img
                                src={cancelIcon}
                                alt=""
                                className="cursor-pointer ml-2"
                                onClick={() => deleteVideo(video?.id)}
                              />
                            </div>
                          )
                        )}
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
                disabled={updateProductPromotion.loading}
              />
              <RoundedButton
                title={"Save Changes"}
                htmlType="submit"
                type="primary"
                sm
                disabled={updateProductPromotion.loading}
              />
            </div>
          </Form>
        )}
      </PageContainer>
    </>
  );
};

export default ProductUpdate;
