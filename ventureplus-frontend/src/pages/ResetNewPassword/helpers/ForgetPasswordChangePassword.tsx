import { Col, Divider, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/inputs/TextInput";
import InputButton from "../../../components/inputs/InputButton";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import RoundedButton from "../../../components/button/RoundedButton";
import { leftArrowBlackIcon } from "../../../assets";
import { useEffect, useState } from "react";
import {
  decodePasswordApi,
  ResetPasswordApi,
} from "../../../services/api/ForgetPassword";
interface Props {
  componentHandler: (componentName: string) => void;
}

const ForgetPasswordChangePassword = ({ componentHandler }: Props) => {
  const currentLocation = window.location.href;

  const urlParams = new URL(currentLocation).searchParams;
  const base64Obj = urlParams.get("obj");

  const resetPasswordUser = useSelector(
    (state: RootState) => state?.ResetPassword?.data?.companyUserId
  );

  useEffect(() => {
    decodePasswordApi(dispatch, base64Obj);
  }, [base64Obj]);

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
    const body = {
      companyUserId: resetPasswordUser,
      password: values.password,
    };
    ResetPasswordApi(body, dispatch, onSuccess);
  };

  const onSuccess = () => {
    componentHandler("passwordSuccessScreen");
  };

  return (
    <div className="sm:mb-[40px] ">
      <div className="flex w-full mt-9 md:mt-0 justify-center ">
        <div>
          <h1 className="font-semibold text-[36px] text-[#040615] line-height-[39.17px] text-center">
            Reset Password
          </h1>
          <h2 className="text-[#97A1B5] font-normal text-[18px] line-height-[19.58px] text-center">
            Enter your new password
          </h2>
        </div>
      </div>

      <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[10px]">
        <Form
          form={form}
          name="Reset Password"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className="sm:w-[450px] w-full">
            <span className="font-normal text-[15px] text-[#4A5366]">
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
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/,
                  message:
                    "Password must contain at least 8 characters, maximum length of 20 characters, At least one uppercase letter, At least one lowercase letter, At least one number",
                },
              ]}
            />

            <span className="font-normal text-[15px] text-[#4A5366]">
              {" "}
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
          </div>

          <div className="mt-2">
            <RoundedButton
              htmlType="submit"
              title="Reset Password"
              className="rounded-lg w-full"
              type="primary"
            />
          </div>
        </Form>
      </div>
      <div className="flex justify-center mt-[20px]">
        <ButtonWithSvg
          isLeft
          icon={leftArrowBlackIcon}
          title={"Back to login"}
          className="text-[#4A5366]"
          type="secondary"
          htmlType="button"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
};
export default ForgetPasswordChangePassword;
