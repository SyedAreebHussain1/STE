import { Form } from "antd";
import googleIcon from "../../../assets/google-signin.jpeg";
import fbIcon from "../../../assets/fbicon.png";
import InputButton from "../../../helpers/inputs/InputButton";
import { Link } from "react-router-dom";
import TextInput from "../../../helpers/inputs/TextInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { LoginApi } from "../../../redux/api/auth";

const LoginForm = ({ handleButtonClick }: any) => {
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

  return (
    <div className=" flex flex-col overflow-hidden w-[900px]     justify-center items-center ">
      <div className="flex flex-col justify-center  ">
        <p className="text-3xl font-bold mb-5">Welcome Back!</p>
      </div>
     
      <div className="flex flex-col  laptop:mt-[-3.75rem] ">
        <Form
          className=" py-10  "
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <span className="font-medium text-[.975rem] text-[#344054]">
            Email
          </span>
          <TextInput
            name="email"
            placeholder="Enter your email"
            onChange={(e) => onChange(e.target.value, "email")}
            rules={[{ required: true, message: "Please input your email!" }]}
            className="  h-[50px]  "
          />
          <span className="font-medium  text-[.975rem] text-[#344054]">
            Password
          </span>
          <TextInput
            name="password"
            placeholder="Enter your password"
            isPassword={true}
            className=" h-[50px]  "
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          />
          <div className="flex justify-end  md:w-[456px] w-full">
            <Link
              to="/forget-password"
              className="text-primary font-normal text-[.8125rem]  cursor-pointer"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="desktop:mt-5">
            <InputButton
              className=" h-[47px]   dark:bg-dark-primary bg-sky-400 text-[#FFFFFF] text-[1rem] font-semibold"
              loading={loading}
              name="Login"
              htmlType="submit"
            />
            <p className="">
              Don't have an account?{" "}
              <button onClick={handleButtonClick} className="text-sky-400">
                Sign up
              </button>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
