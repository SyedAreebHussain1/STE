import { Button, Col, Form, Input, Row } from "antd";
import googleIcon from "../../../assets/google-signin.jpeg";
import fbIcon from "../../../assets/fbicon.png";
import InputButton from "../../../helpers/inputs/InputButton";
import TextInput from "../../../helpers/inputs/TextInput";
import { RegisterCompnayApi } from "../../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { AppDispatch, RootState } from "../../../redux/store";
import { useState } from "react";
const SignupForm = ({ handleButtonClick }: any) => {
  const [state, setState] = useState({});

  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const [form] = useForm();

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
    let phoneno = values?.phone;
    if (values?.phone?.[0] == 0) {
      phoneno = `+92${values?.phone?.substring(1, values?.phone?.length)}`;
    } else {
      phoneno = `+92${values?.phone}`;
    }
    let body = {
      name: values.name,
      phoneNo: phoneno,
      email: values.email,
      password: values.password,
    };
    RegisterCompnayApi(body, dispatch);
  };
  const onChange = (value: string | number, name: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="flex flex-col justify-center  ">
        <p className="text-3xl font-bold mb-5">Create an account!</p>
      </div>
      <div className="flex flex-col ">
        <div className="sm:flex justify-center ">
          <Form
            form={form}
            name="signup"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Row gutter={28}>
              <Col xs={24} sm={24} md={24}>
                <span className="font-medium text-[.975rem] text-[#344054]">
                  Full Name <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="name"
                  autoComplete=""
                  placeholder="Enter your name"
                  onKeyDown={(e: any) => {
                    const regex = /^[a-zA-Z]+$/;

                    if (e.code === "Space") {
                      return;
                    }
                    const allowedKeys = [
                      "Backspace",
                      "Space",
                      "Shift",
                      "ArrowLeft",
                      "ArrowRight",
                      "ArrowUp",
                      "ArrowDown",
                      "Tab",
                    ];

                    if (allowedKeys.includes(e.key)) {
                      return;
                    }

                    if (!regex.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => onChange(e.target.value, "name")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                  className="w-full h-[50px]  "
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <span className="font-medium text-[.975rem] text-[#344054]">
                  Phone No <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="phone"
                  autoComplete=""
                  placeholder="3XXXXXXXXX"
                  prefix="+92"
                  onKeyDown={(e: any) => {
                    if (
                      e.key === "Backspace" ||
                      e.key === "Delete" ||
                      e.key === "ArrowLeft" ||
                      e.key === "ArrowRight" ||
                      e.key === "Tab"
                    ) {
                      return;
                    }

                    const value = e.target.value + e.key;
                    const regex = /^[1-9][0-9]*$/;

                    if (e.target.value === "" && e.key === "0") {
                      e.preventDefault();
                      return;
                    }

                    if (!regex.test(value)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => onChange(e.target.value, "phone")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone!",
                    },
                  ]}
                  className="w-full h-[50px]  "
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <span className="font-medium text-[.975rem] text-[#344054]">
                  Email <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => onChange(e.target.value, "email")}
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                  className="w-full h-[50px]  "
                />
              </Col>

              <Col xs={24} sm={24} md={12}>
                <span className="font-medium text-[.975rem] text-[#344054]">
                  Password <span className="text-[red]">*</span>
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
              <Col xs={24} sm={24} md={12}>
                <span className="font-medium text-[.975rem] text-[#344054]">
                  Confirm Password <span className="text-[red]">*</span>
                </span>
                <TextInput
                  name="cPassword"
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

            <div className="desktop:mt-5">
              <InputButton
                className="w-[300px] h-[50px]  dark:bg-dark-primary bg-dark-purple text-[white] text-[1rem] font-bold"
                loading={loading}
                name="Sign Up"
                htmlType="submit"
              />
              <p className="mt-5">
                Already have an account?{" "}
                <button
                  onClick={handleButtonClick}
                  className="text-dark-purple cursor-pointer"
                >
                  Login
                </button>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
