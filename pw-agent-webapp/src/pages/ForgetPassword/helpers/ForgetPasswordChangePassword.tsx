import { Col, Divider, Form, Row } from "antd";
import React, { SetStateAction } from "react";
import InputButton from "../../../helpers/inputs/InputButton";
import TextInput from "../../../helpers/inputs/TextInput";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { ForgetPasswordChangePasswordApi } from "../../../redux/api/ForgetPassword";
import { useNavigate } from "react-router-dom";

const ForgetPasswordChangePassword = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { loading } = useSelector(
    (state: RootState) => state.ForgetPasswordChangePassword
  );
  const dispatch: AppDispatch = useDispatch();
  const onFinish = (values: any) => {
    if (values?.password !== values?.conformPassword) {
      form.setFields([
        {
          name: "conformPassword",
          errors: ["Above password Not match"],
        },
      ]);
      return;
    }
    let body = {
      password: values.password,
    };
    ForgetPasswordChangePasswordApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex w-full mt-9 md:mt-0">
        <div>
          <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
            Change Password
          </h1>
          <h2 className="text-[#667085] font-medium text-[.975rem] line-height-[21.84px]">
            Please enter your new Password
          </h2>
        </div>
      </div>
      <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[10px]">
        <Form
          form={form}
          name="Change Password"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Divider />
          <Row>
            <Col xs={24} sm={24} md={24}>
              <span className="font-medium text-[.975rem] text-[#344054]">
                Password
              </span>
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
            <Col xs={24} sm={24} md={24}>
              <span className="font-medium text-[.975rem] text-[#344054]">
                Confirm Password
              </span>
              <TextInput
                name="conformPassword"
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
          </Row>

          <div className="mt-5">
            <InputButton
              className="w-full sm:w-[450px] h-[47px]   bg-primary text-[#FFFFFF] text-[1rem] font-semibold"
              loading={loading}
              name="Change Password"
              htmlType="submit"
            />
          </div>
          <Divider />
        </Form>
      </div>
    </>
  );
};
export default ForgetPasswordChangePassword;
