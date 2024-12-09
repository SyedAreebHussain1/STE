import { useState } from "react";
import { Divider, Form, Input } from "antd";
import { LoginApi } from "../../../../services/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { TextInput } from "../../../../components";
import InputButton from "../../../../components/inputs/InputButton";
import emailIcon from "../../../../assets/email.png";
import passwordIcon from "../../../../assets/password.png";
import { AudioOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface Props {}

const SignInForm = (props: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state?.user);
  const onFinish = (values: any) => {
    let body = {
      email: values.email,
      password: values.password,
    };
    LoginApi(dispatch, body);
  };

  return (
    <div className="w-full sm:flex justify-center mt-[50px] sm:mt-[30px]">
      <Form
        name="login"
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
        <div>
          <div>
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <div className="relative flex items-center">
                <Input
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="off"
                  size="large"
                  placeholder="password"
                  className="rounded-lg border-none pr-4 bg-[#E3E7EF] h-[48px] pl-14 py-3  text-black  border  w-full "
                />
                <div className="absolute right-4 z-10">
                  {passwordVisible ? (
                    <EyeTwoTone onClick={() => setPasswordVisible(false)} />
                  ) : (
                    <EyeInvisibleOutlined
                      onClick={() => setPasswordVisible(true)}
                    />
                  )}
                </div>
                <div className="absolute left-4 z-10">
                  <img src={passwordIcon} alt="" />
                </div>
              </div>
            </Form.Item>
            <div className="w-full mt-[-15px] flex justify-end">
              <Link
                to={"/affiliate-forgot-password"}
                className="text-[#016A70] font-normal text-[.9375rem]"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <InputButton
            className="w-full sm:w-[100%] h-[48px] bg-[#016A70] text-[#F8FAFC] text-[1rem] font-semibold"
            loading={loading}
            name="Login"
            htmlType="submit"
          />
        </div>
        <div className="w-full flex justify-center">
          <h4 className="font-semibold text-[.9375rem]">
            <span className="text-[#4A5366]">Don't have an account?</span>{" "}
            <span className="text-[#016A70]">
              <Link to={"/signup"}>Create one</Link>
            </span>
          </h4>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
