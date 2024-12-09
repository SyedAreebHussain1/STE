import React, { useState } from "react";
import { InitialQuestionsContainer } from "../InitialQuestionsContainer";
import { Button, Col, Form, Row } from "antd";
import initialObject from "../../../../assets/question/initialObject.png";
import TextInput from "../../../../components/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { createEquityMultipleEquitiesApi } from "../../../../services/api/BusinessPlanSetup/Equity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { errorMessage } from "../../../../utils/message";
import { useNavigate } from "react-router-dom";
import { getFromStorage } from "../../../../utils/storage";
import crossIcon from "../../../../assets/question/cross.png";
import { BiCross } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { scrollToTop } from "../../../../hooks/scrollToTop";
import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons";

interface EquitiesProps {
  next: any;
  prev: any;
}
const Equities = ({ next, prev }: EquitiesProps) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState<number[]>([0]);
  const [equityLength, setEquityLength] = useState<number>(0);
  const getPlanId = getFromStorage("businessPlan");
  // const currentSelectedBusinessPlan = {
  //   businessPlan: getPlanId,
  // };
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state?.currentSelectedBusinessPlan
  );

  const createEquityMultipleEquities = useSelector(
    (state: RootState) => state.createEquityMultipleEquities
  );
  function addService() {
    setEquityLength(equityLength + 1);
    const arr = Array.from({ length: equityLength });
    setDataSource((pre: any) => [...pre, arr.length]);
  }
  function removeService(index: any) {
    if (index > -1) {
      const newNumbers = [...dataSource];
      newNumbers.splice(index, 1);
      setDataSource(newNumbers);
    }
  }
  function convertToArrayFormat(input: any) {
    const result = [];
    for (let i = 0; i < Object.keys(input).length / 2; i++) {
      result.push({
        name: input[`name${i}`],
        share: input[`share${i}`],
      });
    }
    return result;
  }
  const onFinish = (values: any) => {
    const equities = convertToArrayFormat(values);
    const body = {
      equities,
      businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
    };
    if (equities.length > 0 && body.businessPlanId) {
      createEquityMultipleEquitiesApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Add Equity");
    }
  };

  function onSuccess() {
    next();
    form.resetFields();
    scrollToTop();
  }
  return (
    <React.Fragment>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="Equities"
        className="w-full "
      >
        <div className="bg-[#f0f6f6] !w-full ">
          <div className="mb-4 ml-3 mr-3 p-3 sm:hidden block">
            <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
              <div className="p-5">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043] text-[1.2rem]">
                  Equities
                </h1>
              </div>
            </div>
          </div>
          <div className="mb-10 ml-3 mr-3 p-3 sm:block hidden">
            <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
              <div className="p-5">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1.125rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043] sm:text-[1.8125rem] text-[1rem]">
                  Equities
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
            <div className="p-2 flex justify-center">
              <div className="md:w-[50%] w-full">
                <div>
                  <h1 className="text-center font-semibold text-[#014043] mt-3 mb-6 sm:text-[2.1875rem] text-[1.25rem]">
                    What is the equity structure of your business?
                  </h1>
                  <div>
                    <h3 className="text-[#212838] font-medium text-[1.6875rem] mb-2">
                      Equity
                    </h3>
                    {dataSource.map((val: any, i: any) => {
                      return (
                        <div key={i} className="flex w-full">
                          <div className="sm:flex block gap-2 w-full">
                            <TextInput
                              name={"name" + i}
                              placeholder="Holder Name"
                              className="w-[378px] h-[48px] bg-[#E3E7EF]"
                              maxLength={35}
                              rules={[
                                {
                                  required: true,
                                  message: "This field is required!",
                                },
                              ]}
                            />
                            <TextInput
                              name={"share" + i}
                              className="w-[378px] h-[48px] mb-2 bg-[#E3E7EF]"
                              maxLength={3}
                              placeholder="Share (%)"
                              onChange={(e) => {
                                if (Number(e.target.value) >= 100) {
                                  form.setFieldValue("share" + i, 100);
                                } else if (
                                  Number(e.target.value) < 100 &&
                                  Number(e.target.value) > 0
                                ) {
                                  form.setFieldValue(
                                    "share" + i,
                                    Number(e.target.value)
                                  );
                                }
                              }}
                              onKeyDown={(e: any) => {
                                const regex = /[0-9]/;
                                if (e.code === "Space") {
                                  e.preventDefault();

                                  return;
                                }
                                const allowedKeys = [
                                  "Backspace",
                                  "Shift",
                                  "ArrowLeft",
                                  "ArrowRight",
                                  "ArrowUp",
                                  "ArrowDown",
                                  "Tab",
                                ];
                                if (allowedKeys.includes(e.key)) {
                                  return;
                                }
                                if (!regex.test(e.key)) {
                                  e.preventDefault();
                                  return;
                                }
                              }}
                              rules={[
                                {
                                  required: true,
                                  message: "This field is required",
                                },
                              ]}
                            />
                            {dataSource.length > 1 && (
                              <div className="flex items-center justify-center h-[48px]">
                                <MinusOutlined
                                  onClick={() => removeService(i)}
                                  className="h-[24px] w-[24px] cursor-pointer"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <Button
                    onClick={() => addService()}
                    className={"bg-[#FFFFFF] text-[#4A5366] font-medium"}
                    shape="round"
                    size="large"
                  >
                    <span>
                      <h5>Add equity</h5>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </InitialQuestionsContainer>
          <div className="w-full flex justify-between p-8 ">
            <div></div>
            <div className="fixed bottom-10 sm:right-16 right-2">
              <Button
                className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                shape="round"
                size="large"
                htmlType="submit"
                loading={createEquityMultipleEquities?.loading}
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

export default Equities;
