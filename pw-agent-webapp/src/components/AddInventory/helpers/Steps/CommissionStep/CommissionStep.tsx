import { Col, ConfigProvider, Form, Row, Switch } from "antd";
import SectionContainer from "../../../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";
import { SelectField } from "../../../../../helpers/inputs/SelectField";
import Button from "../../../../../helpers/inputs/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "antd/es/form/Form";
import { getFromStorage, setInStorage } from "../../../../../utils/storage";
import { useScript } from "@uidotdev/usehooks";
import { useState } from "react";
import { errorMessage, infoMessage } from "../../../../../utils/message";
import {
  createInventoryOfExistingProjectApi,
  createProjectApi,
} from "../../../../../redux/api/InventoryManagement";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
  current?: number;
  next: () => void;
  prev: () => void;
  formInstance?: any;
};

const CommissionStep = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const projectId = searchParams.get("projectId");
  const [form] = useForm();
  const [installment, setInstallment] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (val: any) => {
    const project = getFromStorage("project");
    let body: any;
    if (type !== "existing") {
      body = {
        ...project,
        inventory: {
          ...project.inventory,
          cashDealCommissionAmount: val?.cashDealCommissionAmount,
          cashDealCommissionPer: val?.cashDealCommissionPer,
          InstallmentDealCommissionAmount: val?.InstallmentDealCommissionAmount,
          InstallmentDealCommissionPer: val?.InstallmentDealCommissionPer,
          advanceAmount: val?.advanceAmount,
          monthlyInstallment: val?.monthlyInstallment,
          noOfInstallMentRemaining: val?.noOfInstallMentRemaining,
        },
      };
      createProjectApi(dispatch, body, onSuccess);
    } else if (type === "existing") {
      body = {
        ...project,
        cashDealCommissionAmount: val?.cashDealCommissionAmount,
        cashDealCommissionPer: val?.cashDealCommissionPer,
        InstallmentDealCommissionAmount: val?.InstallmentDealCommissionAmount,
        InstallmentDealCommissionPer: val?.InstallmentDealCommissionPer,
        advanceAmount: val?.advanceAmount,
        monthlyInstallment: val?.monthlyInstallment,
        noOfInstallMentRemaining: val?.noOfInstallMentRemaining,
      };
      createInventoryOfExistingProjectApi(projectId, dispatch, body, onSuccess);
    }
  };
  const onSuccess = () => {
    navigate(-1);
  };
  const handlerSwitch = (e: boolean) => {
    setInstallment(e);
    if (!e) {
      form.setFields([
        {
          name: "advanceAmount",
          errors: [],
          value: "",
        },
        {
          name: "noOfInstallMentRemaining",
          errors: [],
          value: "",
        },
        {
          name: "monthlyInstallment",
          errors: [],
          value: "",
        },
        {
          name: "InstallmentDealCommissionAmount",
          errors: [],
          value: "",
        },
        {
          name: "InstallmentDealCommissionPer",
          errors: [],
          value: "",
        },
      ]);
    }
  };

  const handlerPerOrAmount = (e: any, name: any, fieldType: any) => {
    const project = getFromStorage("project");
    let propertyPrice = 0;
    if (type !== "existing") {
      propertyPrice = Number(project.inventory.price);
    } else if (type === "existing") {
      propertyPrice = Number(project.price);
    }

    const value = Number(e?.target?.value);
    if (fieldType == "Per") {
      if (value > 100) {
        form.setFields([
          {
            name: `${name}${fieldType}`,
            errors: [],
            value: 100,
          },
          {
            name: `${name}Amount`,
            errors: [],
            value: propertyPrice,
          },
        ]);
        return;
      } else if (value <= 100) {
        const calculatedPrice = (value / 100) * propertyPrice;
        form.setFields([
          {
            name: `${name}Amount`,
            errors: [],
            value: calculatedPrice,
          },
        ]);
      }
    } else if (fieldType == "Amount") {
      if (value >= propertyPrice) {
        form.setFields([
          {
            name: `${name}${fieldType}`,
            errors: [],
            value: propertyPrice,
          },
          {
            name: `${name}Per`,
            errors: [],
            value: 100,
          },
        ]);
        return;
      } else if (value < propertyPrice) {
        const calculatedPrice = (value / propertyPrice) * 100;
        form.setFields([
          {
            name: `${name}Per`,
            errors: [],
            value: calculatedPrice,
          },
        ]);
      }
    }
  };

  const handlerWhenInstallmentIsDisable = () => {
    infoMessage("First Enable Installment.");
  };

  return (
    <Form
      name="add-single-property-step-one"
      className="projects-form"
      initialValues={{ remember: true }}
      form={form}
      onFinish={onFinish}
    >
      <SectionContainer
        title={"Installment Available"}
        subtitle={"Agency Commission"}
        extras={
          <div className="mt-6">
            <Switch
              className=" bg-[gray]"
              onChange={(e: any) => handlerSwitch(e)}
            />
          </div>
        }
      >
        <Row gutter={24}>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Advance Amount
            </span>
            <div className="relative ">
              <div
                className={`absolute left-0 top-[8px] w-full h-[90%] rounded-lg border border-[#d9d9d9] z-20 bg-[#000000] opacity-[0.04] ${
                  installment ? "hidden" : "block"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  installment == false && handlerWhenInstallmentIsDisable();
                }}
              ></div>
              <TextInput
                name="advanceAmount"
                className="h-[48px] mt-2"
                rules={[
                  {
                    required: installment,
                    message: "Advance Amount is Required",
                  },
                ]}
                isNumber
              />
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              No of Installment Remaining
            </span>
            <div className="relative ">
              <div
                className={`absolute left-0 top-[8px] w-full h-[90%] rounded-lg border border-[#d9d9d9] z-20 bg-[#000000] opacity-[0.04] ${
                  installment ? "hidden" : "block"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  installment == false && handlerWhenInstallmentIsDisable();
                }}
              ></div>
              <TextInput
                name="noOfInstallMentRemaining"
                className="h-[48px] mt-2"
                rules={[
                  {
                    required: installment,
                    message: "No of Installment is Required",
                  },
                ]}
                isNumber
              />
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Monthly Installment
            </span>
            <div className="relative ">
              <div
                className={`absolute left-0 top-[8px] w-full h-[90%] rounded-lg border border-[#d9d9d9] z-20 bg-[#000000] opacity-[0.04] ${
                  installment ? "hidden" : "block"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  installment == false && handlerWhenInstallmentIsDisable();
                }}
              ></div>
              <TextInput
                name="monthlyInstallment"
                className="h-[48px] mt-2"
                rules={[
                  {
                    required: installment,
                    message: "No of Installment is Required",
                  },
                ]}
                isNumber
              />
            </div>
          </Col>
        </Row>
      </SectionContainer>
      <SectionContainer
        title={"Cash Deal Commission"}
        subtitle={"Agency Commission"}
      >
        <Row gutter={24}>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">Amount</span>
            <TextInput
              name="cashDealCommissionAmount"
              className="h-[48px] mt-2"
              rules={[{ required: true, message: "Amount is Required" }]}
              isNumber
              onChange={(e: any) => {
                handlerPerOrAmount(e, "cashDealCommission", "Amount");
              }}
            />
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Percentage
            </span>
            <TextInput
              name="cashDealCommissionPer"
              className="h-[48px] mt-2"
              rules={[{ required: true, message: "Percentage is Required" }]}
              isNumber
              onChange={(e: any) => {
                handlerPerOrAmount(e, "cashDealCommission", "Per");
              }}
            />
          </Col>
        </Row>
      </SectionContainer>
      <SectionContainer
        title={"Installment Deal Commission"}
        subtitle={"Agency Commission"}
      >
        <Row gutter={24}>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">Amount</span>
            <div className="relative ">
              <div
                className={`absolute left-0 top-[8px] w-full h-[90%] rounded-lg border border-[#d9d9d9] z-20 bg-[#000000] opacity-[0.04] ${
                  installment ? "hidden" : "block"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  installment == false && handlerWhenInstallmentIsDisable();
                }}
              ></div>
              <TextInput
                name="InstallmentDealCommissionAmount"
                className="h-[48px] mt-2 z-10"
                rules={[
                  { required: installment, message: "Amount is Required" },
                ]}
                onChange={(e: any) => {
                  handlerPerOrAmount(e, "InstallmentDealCommission", "Amount");
                }}
                isNumber
              />
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Percentage
            </span>
            <div className="relative ">
              <div
                className={`absolute left-0 top-[8px] w-full h-[90%] rounded-lg border border-[#d9d9d9] z-20 bg-[#000000] opacity-[0.04] ${
                  installment ? "hidden" : "block"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  installment == false && handlerWhenInstallmentIsDisable();
                }}
              ></div>
              <TextInput
                name="InstallmentDealCommissionPer"
                className="h-[48px] mt-2"
                rules={[
                  { required: installment, message: "Percentage is Required" },
                ]}
                onChange={(e: any) => {
                  handlerPerOrAmount(e, "InstallmentDealCommission", "Per");
                }}
                isNumber
              />
            </div>
          </Col>
        </Row>
      </SectionContainer>
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
              props?.prev();
            }}
          />
          <Button label="Continue" variant="filled" htmlType={"submit"} />
        </div>
      </Col>
    </Form>
  );
};

export default CommissionStep;
