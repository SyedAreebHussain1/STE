import React, { useState } from "react";
import { Col, Form, Row } from "antd";
import TextInput from "../../helpers/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useForm } from "antd/es/form/Form";
import InputButton from "../../helpers/inputs/InputButton";
import CountryInput from "../../helpers/inputs/CountryInput";
import { createUserApi } from "../../redux/api/auth";
type SignupFormProps = {
  setIsOtp: (e: boolean) => void;
};

const SignupForm = ({ setIsOtp }: SignupFormProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [form] = useForm();
  const createUser = useSelector((state: any) => state.createUser);
  const onFinish = (values: any) => {
    if (values?.password !== values?.cPassword) {
      form.setFields([
        {
          name: "cPassword",
          errors: ["Password Not match"],
        },
      ]);
      return;
    }
    let body = {
      fullName: values.name,
      phone: values.phone,
      email: values.email,
    };
    const fullBody: any = {
      ...body,
      password: values.password,
    };
    createUserApi(body, dispatch, () => setIsOtp(true), fullBody);
  };
  return (
    <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[50px]">
      <Form
        form={form}
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Row gutter={28}>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Full Name
            </span>
            <span className="text-[red] ml-2">*</span>
            <TextInput
              name="name"
              placeholder="Enter your name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
              className="w-full h-[50px]  "
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Email
            </span>
            <span className="text-[red] ml-2">*</span>
            <TextInput
              name="email"
              placeholder="Enter your email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              className="w-full h-[50px]  "
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Phone No
            </span>
            <span className="text-[red] ml-2">*</span>
            {/* <TextInput
              name="phone"
              placeholder="Enter your phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
              className="w-full h-[50px]  "
            /> */}
            <Form.Item name="phone">
              <CountryInput form={form} name="phone" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Password
            </span>
            <span className="text-[red] ml-2">*</span>
            <TextInput
              name="password"
              placeholder="Enter your password"
              isPassword={true}
              className="w-full h-[50px]  "
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            />
          </Col>
          <Col xs={24} sm={24} xl={12}>
            <span className="font-medium text-[.975rem] text-[#344054]">
              Confirm Password
            </span>
            <span className="text-[red] ml-2">*</span>
            <TextInput
              name="cPassword"
              placeholder="Enter your confirm password"
              isPassword={true}
              className="w-full h-[50px]  "
              rules={[
                {
                  required: true,
                  message: "Please input your confirm password!",
                },
              ]}
            />
          </Col>
        </Row>

        <div className="mt-5">
          <InputButton
            className="w-[300px] h-[50px]  bg-primary text-[white] text-[1rem] font-bold"
            loading={createUser.loading}
            name="Continue"
            htmlType="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
