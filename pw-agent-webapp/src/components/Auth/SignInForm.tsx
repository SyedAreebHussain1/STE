import React, { useState } from "react";
import { LoginApi } from "../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Divider, Form } from "antd";
import TextInput from "../../helpers/inputs/TextInput";
import { Link } from "react-router-dom";
import InputButton from "../../helpers/inputs/InputButton";
import { updateUserAvailabilityApi } from "../../redux/api/LeadManagement";
import { getFromStorage, setInStorage } from "../../utils/storage";

type Props = {};

const SignInForm = (props: Props) => {
  const [state, setState] = useState({});

  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const onFinish = (values: any) => {
    let body = {
      email: values.email,
      password: values.password,
    };
    LoginApi(body, dispatch, onSuccess);
  };
  function onSuccess(res: any) {
    updateUserAvailabilityApi(dispatch, {
      "isAvailable": true
    }, onSuccessAvailability)
  }
  function onSuccessAvailability(res: any) {
    let user = getFromStorage("user")
    if (res?.isAvailable === true) {
      user.availablity = true
      setInStorage("user", user)
    }
  }
  const onChange = (value: string | number, name: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[10px]">
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="w-full"
      >
        <Divider />

        <div>
          <span className="font-medium text-[.975rem] text-[#344054]">
            Email
          </span>
          <TextInput
            name="email"
            placeholder="Enter your email"
            onChange={(e) => onChange(e.target.value, "email")}
            rules={[{ required: true, message: "Please input your email!" }]}
            className="w-full sm:w-[100%] h-[50px]  "
          />
        </div>
        <div>
          <span className="font-medium  text-[.975rem] text-[#344054]">
            Password
          </span>
          <TextInput
            name="password"
            placeholder="Enter your password"
            isPassword={true}
            className="w-full sm:w-[100%] h-[50px]  "
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          />
        </div>
        <div className="flex justify-end">
          <Link
            to="/forget-password"
            className="text-primary font-normal text-[.8125rem]  cursor-pointer"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="mt-5">
          <InputButton
            className="w-full sm:w-[100%] h-[47px]   bg-primary text-[#FFFFFF] text-[1rem] font-semibold"
            loading={loading}
            name="Login"
            htmlType="submit"
          />
        </div>
        <Divider />
      </Form>
    </div>
  );
};

export default SignInForm;
