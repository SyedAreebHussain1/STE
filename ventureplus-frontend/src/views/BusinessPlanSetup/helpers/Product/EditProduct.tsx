import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { leftArrowGreenIcon } from "../../../../assets";
import {
  deleteWhiteIcon,
  imagesIcon,
} from "../../../../assets/ProductPromotions";
import RoundedButton from "../../../../components/button/RoundedButton";
import Upload from "../../../../components/inputs/UpLoad";
import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import Tag from "../../../../components/tag/tag";
import { useUpload } from "../../../../hooks/useUpload";
import { RootState } from "../../../../redux/store";
import {
  editProductApi,
  getProductByIdApi,
} from "../../../../services/api/BusinessPlanSetup/Products";
import { errorMessage } from "../../../../utils/message";
import TextInput from "../../../../components/inputs/TextInput";

interface Props { }

type OnFinishType = {
  name: string;
  costPrice: string;
  sellingPrice: string;
  description: string;
};

const EditProduct = (props: Props) => {
  const { id } = useParams();
  const [form] = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [
    images,
    setImages,
    imagesPreviews,
    deleteImages,
    resetImages,
    filesCount,
  ] = useUpload();
  const [isExistingImageDeleted, setIsExistingImageDeleted] = useState(false);

  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );
  const getProductById = useSelector(
    (state: RootState) => state.getProductById?.data?.data
  );

  useEffect(() => {
    if (id) {
      getProductByIdApi(dispatch, Number(id));
    }
  }, [dispatch, id]);

  const image = getProductById?.productPhoto;

  useEffect(() => {
    form.setFieldsValue({
      name: getProductById?.name,
      description: getProductById?.description,
      sellingPrice:
        getProductById?.sellingPrice === null
          ? 0
          : Number(getProductById?.sellingPrice),
      costPrice:
        getProductById?.costPrice === null
          ? 0
          : Number(getProductById?.costPrice),
    });
  }, [form, getProductById]);

  const deleteExistingImage = () => {
    setIsExistingImageDeleted(true);
  };

  const onFinish = (values: OnFinishType) => {
    if (loading) return;

    setLoading(true);

    if (!Number(id)) {
      errorMessage("Product not found");
      setLoading(false);
      return;
    }

    const data = {
      ...values,
    };

    const body = new FormData();
    for (let [key, value] of Object.entries(data)) {
      if (value) {
        body.append(key, value);
      }
    }

    body.append(
      "businessPlanId",
      currentSelectedBusinessPlan?.businessPlan?.id
    );

    if (images.length > 0) {
      body.append("file", images[0]);
    } else if (!isExistingImageDeleted && image) {
    }

    editProductApi(dispatch, Number(id), body, onSuccess);
  };

  const onSuccess = (res: boolean) => {
    if (res) {
      navigate("/business-plan-setups");
    }
    setLoading(res);
  };
  return (
    <PageContainer>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={leftArrowGreenIcon} alt="" />
        <h1 className="text-primary font-medium heading-m">Back</h1>
      </div>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="addEquityForm"
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="heading-s font-semibold">Business Plan Setup</h1>
          <p className="body-s text-para mb-12">
            In-depth Analysis of Products, Staffing, Equity, and Services
          </p>
          <div className="flex flex-col w-full border rounded-xl border-strokes p-6 gap-3">
            <Tag title={"Product Description"} type="primary" bold />
            <div>
              <label htmlFor="name" className="input-label-sm">
                1. What is the name of the product?
              </label>
              <TextInput
                id="name"
                name="name"
                placeholder="Type your answer here ..."
                className="w-full h-[48px]"
                maxLength={35}
                rules={[
                  {
                    required: true,
                    message: "This field is required!",
                  },
                ]}
              />
            </div>

            <div>
              <label htmlFor="description" className="input-label-sm">
                2. Can you describe the product?
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
                  maxLength={250}
                  placeholder="Type your answer here ..."
                  style={{ height: 80, resize: "none" }}
                />
              </Form.Item>
            </div>
            <div>
              <label htmlFor="productImages" className="input-label-sm">
                3. Can you provide a photo or image of the product?
              </label>
              <Upload
                name="productImages"
                files={images}
                setFiles={setImages}
                supportedFileTypes={["png", "jpg", "jpeg"]}
                supportedText={"Files Supported  JPG,JPEG,PNG"}
                fileName="PRODUCT_IMAGES"
                fileUploadLimit={1}
                filesCount={filesCount}
                icon={imagesIcon}
              />
            </div>
            {imagesPreviews?.length > 0 && (
              <div className="flex gap-3 flex-wrap">
                {imagesPreviews?.map((image) => (
                  <div className="rounded-xl w-[90px] h-[90px] overflow-hidden relative">
                    <div
                      className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center"
                      onClick={() => deleteImages(image?.name)}
                    >
                      <img src={deleteWhiteIcon} alt="" />
                    </div>
                    <img
                      key={image?.url}
                      src={image?.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {image && (
              <div className="rounded-xl w-[90px] h-[90px] overflow-hidden relative">
                <div className="w-full h-full absolute bg-black opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-[38%] cursor-pointer object-cover flex justify-center items-center">
                  <button onClick={deleteExistingImage}>
                    <img src={deleteWhiteIcon} alt="" />
                  </button>
                </div>
                <img
                  src={image}
                  alt="Existing Product"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end w-full mt-6">
          <RoundedButton
            title={"Update Product"}
            type="primary"
            sm
            bold
            htmlType="submit"
            loading={loading}
            className={`${loading ? "!cursor-not-allowed" : "!cursor-pointer"}`}
          />
        </div>
      </Form>
    </PageContainer>
  );
};

export default EditProduct;
