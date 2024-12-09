import { useState } from "react";
import { Form, Input } from "antd";
import { LoginApi, signUpApi } from "../../../../services/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import InputButton from "../../../../components/inputs/InputButton";
import emailIcon from "../../../../assets/email.png";
import passwordIcon from "../../../../assets/password.png";
import nameIcon from "../../../../assets/name.png";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { errorMessage } from "../../../../utils/message";

interface Props {}
const SignupForm = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loading } = useSelector((state: RootState) => state?.user);
  const onFinish = (values: any) => {
    if (phoneNumber) {
      const body: {
        name: string;
        email: string;
        password: string;
        phoneNo: string;
      } = {
        ...values,
        phoneNo: "+" + phoneNumber,
      };
      signUpApi(dispatch, body);
    } else {
      errorMessage("Phone no is req");
    }
  };

  return (
    <div className="w-full sm:flex justify-center mt-[50px] sm:mt-[30px]">
      <Form
        name="signup"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="w-full"
        autoComplete="off"
      >
        <div>
          <div>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <div className="relative flex rounded-lg items-center bg-[#E3E7EF]">
                <Input
                  autoComplete="off"
                  size="large"
                  placeholder="Name"
                  className="rounded-lg border-none pr-4 bg-[#E3E7EF] h-[48px] pl-14 py-3  text-black  bg-white border  w-full "
                />
                <div className="absolute left-4">
                  <img src={nameIcon} alt="" />
                </div>
              </div>
            </Form.Item>
          </div>
        </div>
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
          <div className="mb-6">
            <PhoneInput
              country={"us"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputStyle={{
                width: "100%",
                height: "48px",
                backgroundColor: "#E3E7EF",
              }}
              inputProps={{
                name: "phoneNo",
                required: true,
                maxLength: 15,
              }}
            />
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
          </div>
        </div>
        <div className="mt-5">
          <InputButton
            className="w-full sm:w-[100%] h-[48px] bg-[#016A70] text-[#F8FAFC] text-[1rem] font-semibold"
            loading={loading}
            name="Sign up"
            htmlType="submit"
          />
        </div>
        <div className="w-full flex justify-center">
          <h4 className="font-semibold text-[.9375rem]">
            <span className="text-[#4A5366]">Already have an account?</span>{" "}
            <span className="text-[#016A70]">
              <Link to={"/"}>Log in</Link>
            </span>
          </h4>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
