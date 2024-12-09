import React, { useEffect, useState } from "react";
import { InitialQuestionsContainer } from "./../InitialQuestionsContainer";
import { Button, Form } from "antd";
import initialObject from "../../../../assets/question/initialObject.png";
import { useUpload } from "../../../../hooks/useUpload";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import TextInput from "../../../../components/inputs/TextInput";
import { createProductApi } from "../../../../services/api/BusinessPlanSetup/Products";
import Upload from "../../../../components/inputs/UpLoad";
import {
  deleteWhiteIcon,
  imagesIcon,
} from "../../../../assets/ProductPromotions";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../../utils/storage";
import { RootState } from "../../../../redux/store";
import { scrollToTop } from "../../../../hooks/scrollToTop";
import { getCurrenciesApi } from "../../../../services/api/currency";
interface ProductProps {
  next: any;
  prev: any;
  element: string;
  current: number;
}
const Product = ({ next, prev, element, current }: ProductProps) => {
  const [elementName, setElementName] = useState<string>("");
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [
    images,
    setImages,
    imagesPreviews,
    deleteImages,
    resetImages,
    filesCount,
  ] = useUpload();
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state?.currentSelectedBusinessPlan
  );
  const currencyId = useSelector(
    (state: RootState) => state?.currentSelectedBusiness?.business?.currencyId
  );
  const getCurrencies = useSelector(
    (state: RootState) => state?.getCurrencies?.data
  );

  useEffect(() => {
    getCurrenciesApi(dispatch);
  }, []);

  const userCurrency = getCurrencies?.find(
    (currency: any) => currency?.id === currencyId
  )?.code;

  useEffect(() => {
    setElementName(element);
  }, [element]);
  const onFinish = (values: { name: string; description: string }) => {
    if (loading) return;
    setLoading(true);
    const data = {
      ...values,
      name: elementName,
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
    if (images[0]) {
      body.append("file", images[0]);
      createProductApi(dispatch, body, onSuccess);
    } else {
      createProductApi(dispatch, body, onSuccess);
    }
  };

  const onSuccess = (res: boolean) => {
    setLoading(false);
    if (res) {
      form.resetFields();
      setImages([]);
      next();
      scrollToTop();
    }
  };
  return (
    <React.Fragment>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="product"
        className="w-full"
      >
        <div className="bg-[#f0f6f6] !w-full">
          <div className="sm:mb-10 mb-5 ml-3 mr-3 p-2 sm:hidden block ">
            <div className="bg-[#ffffff] mt-2 h-full flex justify-between rounded-xl w-full">
              <div className="sm:p-7 p-4">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043] text-[1.2rem]">
                  Product
                </h1>
              </div>
            </div>
          </div>
          <div className="mb-10 ml-3 mr-3 p-2 sm:block hidden ">
            <div className="bg-[#ffffff] mt-2 h-full flex justify-between rounded-xl w-full">
              <div className="p-7">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1.125rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                  Product
                </h1>
              </div>
              <img
                src={initialObject}
                className="!object-cover overflow-hidden md:h-[135px] h-[100%]"
                alt=""
              />
            </div>
          </div>
          <InitialQuestionsContainer>
            <div>
              <div className="w-full text-center mb-3">
                <h1 className="font-medium text-[#67a6a9] sm:text-[3rem] text-[1.8rem]">
                  {elementName}
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col  rounded-xl md:w-[50%] w-full p-2 gap-3">
                  <div className="mt-6 ">
                    <h1 className="text-[#212838] text-center sm:text-[2.1875rem] text-[1.25rem] mb-5 font-semibold ">
                      1. Can you describe the product?
                    </h1>
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
                        maxLength={300}
                        placeholder="Describe here..."
                        style={{
                          height: 150,
                          resize: "none",
                          background: "#ffffffe3",
                        }}
                      />
                    </Form.Item>
                  </div>
                  <div className="mt-6 text-center">
                    <h1 className="text-[#212838] sm:text-[2.1875rem]  text-[1.25rem] mb-5 font-semibold ">
                      2. Can you provide a photo or image of the product?
                    </h1>
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
                </div>
              </div>
            </div>
          </InitialQuestionsContainer>
          <div className="w-max h-max right-0 fixed bottom-0  flex justify-between p-8">
            <div>
              {current !== 0 && (
                <Button
                  onClick={prev}
                  className="bg-[#FFFFFF] text-[#4A5366] font-semibold"
                  shape="round"
                  size="large"
                >
                  <span className="text-xl">&#x2190;</span>{" "}
                  <span>
                    <h5>Previous</h5>
                  </span>
                </Button>
              )}
            </div>
            <div>
              <Button
                className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                shape="round"
                size="large"
                htmlType="submit"
                loading={loading}
              >
                <span>Next</span>
                <span className="text-xl">&#x2192;</span>
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Product;
