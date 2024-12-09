import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "antd";
import TextInput from "../../../../components/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { RootState } from "../../../../store/store";
import {
  affilateBankDetailsApi,
  updateAffilateUserBankDetailsApi,
} from "../../../../services/api/Dashboard/Bank";

const BankAccountDetails = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const affilateBankDetails = useSelector(
    (state: RootState) => state?.affilateBankDetails
  );
  const onFinish = (values: any) => {
    const body = {
      ...values,
      taxIdentificationNo: Number(values?.taxIdentificationNo),
    };
    updateAffilateUserBankDetailsApi(dispatch, body, success);
  };
  function success() {
    affilateBankDetailsApi(dispatch);
  }
  useEffect(() => {
    if (affilateBankDetails?.data) {
      form.setFieldsValue(affilateBankDetails?.data);
    }
  }, [affilateBankDetails.data]);

  return (
    <div className="bg-[#ffffff] rounded-lg ">
      <div className="p-[20px] flex items-center border-b">
        <h1 className="text-[#212838] font-semibold text-[1.125rem]">
          Bank Account Details
        </h1>
      </div>
      <div className="p-[20px]">
        <Form
          name="bankAccountDetails"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="w-full"
          autoComplete="off"
          form={form}
        >
          <Row gutter={16}>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Account Holder Name <span className="text-[red]">*</span>
              </span>
              <TextInput
                name={"accountTitle"}
                placeholder="Enter Your Name"
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  { required: true, message: "Please input your holder name!" },
                ]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Account/IBAN No <span className="text-[red]">*</span>
              </span>
              <TextInput
                name={"AccountNo"}
                placeholder="Enter Account Number"
                isNumber
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  {
                    required: true,
                    message: "Please input your account/IBAN no!",
                  },
                ]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Bank Name <span className="text-[red]">*</span>
              </span>
              <TextInput
                name={"bankName"}
                placeholder="Enter Bank Name"
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  { required: true, message: "Please input your bank name!" },
                ]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Routing No <span className="text-[red]">*</span>
              </span>
              <TextInput
                name={"routingNo"}
                placeholder="Enter Routing Number"
                className="h-[48px] bg-[#EAECF0]"
                isNumber
                rules={[
                  { required: true, message: "Please input your routing no!" },
                ]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                SWIFT/BIC Code <span className="text-[red]">*</span>
              </span>
              <TextInput
                name={"swift_bic_Code"}
                placeholder="Enter SWIFT Code"
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  {
                    required: true,
                    message: "Please input your SWIFT/BIC code!",
                  },
                ]}
              />
            </Col>
            <Col sm={24} md={12} lg={12}>
              <span className="font-normal  text-[.9375rem] text-[#4A5366]">
                Tax Identification Number <span className="text-[red]">*</span>
              </span>
              <TextInput
                name={"taxIdentificationNo"}
                placeholder="Enter TIN"
                isNumber
                className="h-[48px] bg-[#EAECF0]"
                rules={[
                  {
                    required: true,
                    message: "Please input your Tax Identification Number!",
                  },
                ]}
              />
            </Col>
          </Row>
          <div className="flex justify-end">
            <Button
              htmlType="submit"
              loading={affilateBankDetails?.loading}
              disabled={affilateBankDetails?.loading}
              className="text-[#01555A] font-semibold text-[.9375rem]"
            >
              Save Details
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BankAccountDetails;
