import React, { useEffect, useState } from "react";
import { InitialQuestionsContainer } from "../InitialQuestionsContainer";
import { Button, Form, Tooltip } from "antd";
import initialObject from "../../../../assets/question/initialObject.png";
import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons";
import TextInput from "../../../../components/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { createStaffingMultipleStaffingApi } from "../../../../services/api/BusinessPlanSetup/Staff";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useNavigate } from "react-router-dom";
import { errorMessage } from "../../../../utils/message";
import { getFromStorage } from "../../../../utils/storage";
import crossIcon from "../../../../assets/question/cross.png";
import { MdCancel } from "react-icons/md";
import { scrollToTop } from "../../../../hooks/scrollToTop";
import { getCurrenciesApi } from "../../../../services/api/currency";

interface EquitiesProps {
  next: any;
  prev: any;
}
const Equities = ({ next, prev }: EquitiesProps) => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState<number[]>([0]);
  const [staffingsLength, setStaffingsLength] = useState<number>(0);
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

  const createStaffingMultipleStaffing = useSelector(
    (state: RootState) => state.createStaffingMultipleStaffing
  );
  const getBusinessPlanInfo = useSelector(
    (state: RootState) => state.getBusinessPlanInfo
  );
  const navigate = useNavigate();
  function addService() {
    setStaffingsLength(staffingsLength + 1);
    const arr = Array.from({ length: staffingsLength });
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
      if (
        input[`name${i}`] &&
        input[`noOfStaff${i}`] &&
        input[`avgSalary${i}`]
      ) {
        result.push({
          name: input[`name${i}`],
          noOfStaff: input[`noOfStaff${i}`],
          avgSalary: input[`avgSalary${i}`],
        });
      }
    }
    return result;
  }
  const onFinish = (values: any) => {
    const staffing = convertToArrayFormat(values);
    const body = {
      staffing,
      businessPlanId: currentSelectedBusinessPlan?.businessPlan?.id,
    };
    if (staffing.length > 0 && body.businessPlanId) {
      createStaffingMultipleStaffingApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Add Staff");
    }
  };

  function onSuccess() {
    if (getBusinessPlanInfo?.data?.chapters?.[0]?.topics?.[0]?.id) {
      navigate(
        `/questions/${Number(
          getBusinessPlanInfo?.data?.chapters?.[1]?.topics?.[0]?.id
        )}`
      );
      form.resetFields();
      scrollToTop();
    } else {
      navigate(`/edit-plan`);
    }
  }
  return (
    <React.Fragment>
      <Form
        autoComplete="off"
        form={form}
        onFinish={onFinish}
        name="product"
        className="w-full"
      >
        <div className="bg-[#f0f6f6] !w-full ">
          <div className="mb-10 ml-3 mr-3 p-3 sm:hidden block">
            <div className="bg-[#ffffff] mt-2 flex justify-between rounded-xl w-full">
              <div className="p-5">
                <h5
                  className="cursor-pointer font-semibold text-[#014043] text-[1rem]"
                  onClick={() => navigate("/dashboard")}
                >
                  <ArrowLeftOutlined /> Back to home
                </h5>
                <h1 className="font-semibold text-[#014043] text-[1.2rem]">
                  Staffings
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
                <h1 className="font-semibold text-[#014043] text-[1.8125rem]">
                  Staffings
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
              <div className="md:w-[60%] w-full">
                <div>
                  <h1 className=" text-center font-semibold text-[#014043] mt-3 mb-6 sm:text-[2.1875rem] text-[1.25rem]">
                    What is the staff structure of your business?
                  </h1>
                  <div>
                    <h3 className="text-[#212838] font-medium text-[1.6875rem]   mb-2">
                      Staffing
                    </h3>
                    {dataSource?.map((val: any, i: any) => {
                      return (
                        <div key={i}>
                          <div className=" sm:flex block gap-12 w-full">
                            <TextInput
                              name={"name" + i}
                              placeholder="Name"
                              className="sm:w-[258px] w-full h-[48px] bg-[#E3E7EF]"
                              maxLength={35}
                              rules={[
                                {
                                  required: true,
                                  message: "This field is required!",
                                },
                              ]}
                              onKeyDown={(e: any) => {
                                const regex = /^[a-zA-Z]+$/;
                                if (e.code === "Space") {
                                  return;
                                }
                                const allowedKeys = [
                                  "Backspace",
                                  "Space",
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
                                }
                              }}
                            />
                            <TextInput
                              name={"noOfStaff" + i}
                              placeholder="No Of Staff"
                              className="sm:w-[258px] w-full h-[48px] bg-[#E3E7EF]"
                              maxLength={9}
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
                            <TextInput
                              name={"avgSalary" + i}
                              className="sm:w-[258px] w-full h-[48px] bg-[#E3E7EF]"
                              placeholder={`Annual Average Salary (in ${
                                userCurrency ? userCurrency : "$"
                              })`}
                              maxLength={9}
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
                            {dataSource?.length > 1 && (
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
                  <div className="flex justify-between items-center  mb-2">
                    <Button
                      onClick={() => addService()}
                      className={"bg-[#FFFFFF] text-[#4A5366] font-medium"}
                      shape="round"
                      size="large"
                    >
                      <span>
                        <h5>Add Staff</h5>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </InitialQuestionsContainer>
          <div className="w-max h-max right-0 fixed bottom-0  flex justify-between p-8">
            <div></div>
            <div className="absolute sm:bottom-10 bottom-3 sm:right-16 right-3">
              <Button
                className="bg-[#016A70] text-[#FFFFFF] font-semibold"
                shape="round"
                size="large"
                htmlType="submit"
                loading={createStaffingMultipleStaffing.loading}
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
