import { Col, Form, Row } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ButtonWithSvg from "../../components/button/ButtonWithSvg";
import RoundedButton from "../../components/button/RoundedButton";
import facebookIcon from "./../../assets/facebookIcon.svg";
import googleIcon from "./../../assets/googleIcon.svg";
import { AppDispatch, RootState } from "../../redux/store";
import TextInput from "../../components/inputs/TextInput";
import { LoginApi } from "../../services/api/auth";
import { loginScreenImage } from "../../assets";
import { websiteLogo } from "../../assets/website";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const onFinish = (values: any) => {
    let body = {
      email: values.email,
      password: values.password,
    };
    LoginApi(body, dispatch);
  };
  const onChange = (value: string | number, name: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleGoogle = () => {
    const authUrl = `${
      import.meta.env.VITE_BASE_URL
    }/company-auth/sso/google/login`;
    window.location.href = authUrl;
  };
  const handleFacebook = () => {
    const authUrl = `${
      import.meta.env.VITE_BASE_URL
    }/company-auth/sso/facebook/login`;
    window.location.href = authUrl;
  };

  return (
    <div className="sm:flex block overflow-hidden items-center justify-start sm:pl-12 pl-0   bg-[white] h-screen w-screen">
      <div className="flex flex-col items-start h-full sm:mt-12 mt-5 w-full">
        <div className="h-max sm:p-0 p-2">
          <img src={websiteLogo} alt="" className="h-4" />
        </div>
        <div className="flex flex-col h-full justify-center sm:p-0 p-3">
          <h1 className="text-2xl font-bold  text-light-title dark:text-dark-title">
            Welcome Back!
          </h1>
          <p className="!text-light-body dark:!text-dark-body text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="hover:text-blue-900 hover:font-semibold font-medium text-[#016A70] cursor-pointer"
            >
              Sign up
            </span>{" "}
          </p>
          <Form
            className="mt-6"
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col span={24}>
                <TextInput
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => onChange(e.target.value, "email")}
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                  className="  h-[46px]  "
                />
              </Col>
              <Col span={24}>
                <TextInput
                  name="password"
                  placeholder="Enter your password"
                  isPassword={true}
                  className=" h-[46px]"
                  classNameFormItem="mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                />
                <div className="flex justify-end w-full mt-3 mb-5">
                  <Link
                    to="/forget-password"
                    className="text-primary font-normal text-sm  cursor-pointer"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </Col>

              <Col span={24}>
                <RoundedButton
                  title={"Login"}
                  htmlType="submit"
                  type="primary"
                  bold
                  className="w-full"
                  loading={loading}
                />
              </Col>
            </Row>
          </Form>
          <div className="w-full px-1 flex justify-evenly items-center mt-4 text-light-para dark:text-dark-para">
            <hr className="border-light-para dark:border-dark-para  w-[40%]" />
            OR
            <hr className="border-light-para dark:border-dark-para  w-[40%]" />
          </div>
          <div className="w-full sm:flex block gap-3 my-4 justify-between ">
            <button
              onClick={handleGoogle}
              className="flex w-full p-2 gap-2 border rounded-full justify-center items-center  "
            >
              <span className="font-bold">Login With Google</span>
              <img src={googleIcon} />
            </button>
            <button
              onClick={handleFacebook}
              className="flex w-full sm:mt-0 mt-2 p-2 gap-2 border rounded-full justify-center items-center "
            >
              <span className="font-bold">Login With Facebook</span>
              <img src={facebookIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-[#00395114] h-full">
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-center">
            <img src={loginScreenImage} className="w-[70%]" />
          </div>
          <div>
            <h1 className="text-center text-[49.75px] font-medium text-[#212838] leading-[60px]">
              Empowering Your Next
              <br />
              <span className="font-semibold text-[#01555A]">Big Venture.</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
