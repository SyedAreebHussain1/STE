import { Col, Form, Row, Switch } from "antd";
import SectionContainer from "../../../../SectionContainer";
import TextInput from "../../../../../helpers/inputs/TextInput";
import Button from "../../../../../helpers/inputs/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { successMessage } from "../../../../../utils/message";
import { getInventoryDetailsForEditApi } from "../../../../../redux/api/InventoryManagement";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
type Props = {
  current?: number;
  next: () => void;
  prev: () => void;
  formInstance?: any;
};

const CommissionStep = (props: Props) => {
  const param = useParams();

  const getInventoryForEdit = useSelector(
    (state: any) => state.getInventoryForEdit
  );
  const [form] = useForm();
  const [installment, setInstallment] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (val: any) => {
    successMessage("Inventory Success Edit");
    navigate(-1);
  };
  useEffect(() => {
    if (props?.current == 3) {
      getInventoryDetailsForEditApi(param.id, dispatch);
    }
  }, [param.id, props?.current]);

  useEffect(() => {
    if (getInventoryForEdit?.data && props?.current == 3) {
      const data = getInventoryForEdit?.data?.inventory?.[0];
      if (data?.advanceAmount) {
        setInstallment(true);
      }
      form.setFieldValue("advanceAmount", data?.advanceAmount);
      form.setFieldValue(
        "noOfInstallMentRemaining",
        data?.noOfInstallMentRemaining
      );
      form.setFieldValue("monthlyInstallment", data?.monthlyInstallment);
      form.setFieldValue(
        "cashDealCommissionAmount",
        data?.cashDealCommissionAmount
      );
      form.setFieldValue("cashDealCommissionPer", data?.cashDealCommissionPer);
      form.setFieldValue(
        "InstallmentDealCommissionAmount",
        data?.InstallmentDealCommissionAmount
      );
      form.setFieldValue(
        "InstallmentDealCommissionPer",
        data?.InstallmentDealCommissionPer
      );
    }
  }, [getInventoryForEdit?.data]);

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
            <Switch className=" bg-[gray]" value={installment} />
          </div>
        }
      >
        <Row gutter={24}>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Advance Amount
            </span>
            <div className="relative ">
              <TextInput
                name="advanceAmount"
                className="h-[48px] mt-2"
                disabled
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
              <TextInput
                name="noOfInstallMentRemaining"
                className="h-[48px] mt-2"
                disabled
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
              <TextInput
                name="monthlyInstallment"
                disabled
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
              disabled
              name="cashDealCommissionAmount"
              className="h-[48px] mt-2"
              rules={[{ required: true, message: "Amount is Required" }]}
              isNumber
            />
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Percentage
            </span>
            <TextInput
              disabled
              name="cashDealCommissionPer"
              className="h-[48px] mt-2"
              rules={[{ required: true, message: "Percentage is Required" }]}
              isNumber
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
              <TextInput
                name="InstallmentDealCommissionAmount"
                className="h-[48px] mt-2 z-10"
                disabled
                rules={[
                  { required: installment, message: "Amount is Required" },
                ]}
                isNumber
              />
            </div>
          </Col>
          <Col lg={8} xs={24}>
            <span className="text-[#292D35] font-medium text-base">
              Percentage
            </span>
            <div className="relative ">
              <TextInput
                name="InstallmentDealCommissionPer"
                className="h-[48px] mt-2"
                rules={[
                  { required: installment, message: "Percentage is Required" },
                ]}
                disabled
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
