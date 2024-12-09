import { useState } from "react";
import { Divider, Form, Input } from "antd";
import { forgetPasswordApi, LoginApi } from "../../../../services/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { TextInput } from "../../../../components";
import InputButton from "../../../../components/inputs/InputButton";
import emailIcon from "../../../../assets/email.png";
import passwordIcon from "../../../../assets/password.png";
import { AudioOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

interface Props {}

const ForgotPasswordForm = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(
    (state: RootState) => state?.forgetPasswordSlice
  );
  const onFinish = (values: any) => {
    forgetPasswordApi(dispatch, values, success);
  };

  function success() {
    navigate("/");
  }

  return (
    <div className="w-full sm:flex justify-center mt-[50px] sm:mt-[30px]">
      <Form
        name="forgotPasswordForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="w-full"
        autoComplete="off"
      >
        <div>
          <div>
            <Form.Item
              name={"email"}
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <div className="relative flex rounded-lg items-center bg-[#E3E7EF]">
                <Input
                  autoComplete="off"
                  size="large"
                  placeholder="Email"
                  className="rounded-lg border-none pr-4 bg-[#E3E7EF] h-[48px] pl-14 py-3  text-black  bg-white border  w-full "
                />
                <div className="absolute left-4">
                  <img src={emailIcon} alt="" />
                </div>
              </div>
            </Form.Item>
          </div>
        </div>

        <div className="mt-5">
          <InputButton
            className="w-full sm:w-[100%] h-[48px] bg-[#016A70] text-[#F8FAFC] text-[1rem] font-semibold"
            loading={loading}
            name="Reset Password"
            disabled={loading}
            htmlType="submit"
          />
        </div>

        <div className="w-full flex justify-center">
          <h4 className="font-semibold text-[.9375rem]">
            <span className="text-[#4A5366]">
              <Link to="/" className="flex justify-center gap-1 items-center ">
                <span className="text-[30px] mb-1 text-[#01555A]">&larr;</span>
                <span className="text-[#4A5366]">Back to Log in</span>
              </Link>
            </span>{" "}
          </h4>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
