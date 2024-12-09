import React, { useEffect, useState } from "react";
import { InitialQuestionsContainer } from "../InitialQuestionsContainer";
import { Button, Form, Tooltip } from "antd";
import initialObject from "../../../../assets/question/initialObject.png";
import TextInput from "../../../../components/inputs/TextInput";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createStaffApi } from "../../../../services/api/BusinessPlanSetup/Staff";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { createServiceApi } from "../../../../services/api/BusinessPlanSetup/Services";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../../utils/storage";
import { RootState } from "../../../../redux/store";
import { scrollToTop } from "../../../../hooks/scrollToTop";
interface ServiceProps {
  next: any;
  prev: any;
  element: string;
  current: number;
}
const Service = ({ next, prev, element, current }: ServiceProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = useForm();
  const [elementName, setElementName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const getPlanId = getFromStorage("businessPlan");
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state?.currentSelectedBusinessPlan
  );
  useEffect(() => {
    setElementName(element);
  }, [element]);

  const onFinish = (values: any) => {
    if (loading) return;
    const data = {
      ...values,
      name: elementName,
    };
    setLoading(true);
    createServiceApi(
      dispatch,
      {
        ...data,
        businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
      },
      onSuccess
    );
  };

  const onSuccess = (res: boolean) => {
    setLoading(false);
    if (res) {
      form.resetFields();
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
        name="service"
        className="w-full"
      >
        <div className="bg-[#f0f6f6] !w-full ">
          <div className="mb-10 ml-3 mr-3 p-3  sm:hidden block ">
            <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
              <div className="p-7">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043]  text-[1.2rem]">
                  Service
                </h1>
              </div>
            </div>
          </div>
          <div className="mb-10 ml-3 mr-3 p-3  sm:block hidden ">
            <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
              <div className="p-7">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1.125rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                  Service
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
                <h1 className="font-medium text-[#67a6a9]  sm:text-[3rem] text-[1.8rem]">
                  {elementName}
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col md:w-[50%] w-full rounded-xl p-2 gap-3">
                  <div className="text-center">
                    <h1 className="text-[#212838] sm:text-[2.1875rem] text-[1.25rem] mb-5 font-semibold">
                      1 . Can you provide a description of this service?
                    </h1>
                    <Form.Item
                      className="w-full mb-2"
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: "This field is required",
                        },
                      ]}
                    >
                      <TextArea
                        maxLength={300}
                        placeholder="Describe here... "
                        style={{
                          height: 150,
                          resize: "none",
                          background: "#ffffffe3",
                        }}
                      />
                    </Form.Item>
                  </div>
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

export default Service;
