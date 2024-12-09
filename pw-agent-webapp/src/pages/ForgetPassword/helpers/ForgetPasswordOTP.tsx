import { Divider, Form } from "antd";
import React, { SetStateAction, useState } from "react";
import InputButton from "../../../helpers/inputs/InputButton";
import OTPInput from "react-otp-input";
import { useForm } from "antd/es/form/Form";
import { ForgetPasswordOTPApi } from "../../../redux/api/ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

type Props = {
  componentHandler: (componentName: string) => void;
};
const ForgetPasswordOTP = ({ componentHandler }: Props) => {
  const [otp, setOtp] = useState("");
  const { loading } = useSelector(
    (state: RootState) => state.ForgetPasswordOTP
  );

  const dispatch: AppDispatch = useDispatch();
  const [form] = useForm();
  const onFinish = (values: any) => {
    if (otp.length < 4) {
      form.setFields([
        {
          name: "Otp",
          errors: ["Enter all the field"],
        },
      ]);
      return;
    }
    let body = {
      code: otp,
    };

    ForgetPasswordOTPApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    componentHandler("password");
  };
  return (
    <>
      <div className="flex w-full mt-9 md:mt-0">
        <div>
          <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
            OTP Verification
          </h1>
          <h2 className="text-[#667085] font-medium text-[.975rem] line-height-[21.84px]">
            Please Enter Verification Code send to your email and phone number
          </h2>
        </div>
      </div>
      <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[10px]">
        <Form
          form={form}
          name="Submit OTP"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Divider />
          <div className="flex items-center justify-center">
            <Form.Item
              name={"Otp"}
              rules={[{ required: true, message: "Please input your OTP!" }]}
            >
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className="px-[10px]">-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "40px",
                  height: "40px",
                  fontSize: "1.2rem",
                  outline: "none",
                  border: "1px solid ",
                  borderRadius: "3px",
                }}
              />
            </Form.Item>
          </div>

          <div className="mt-5">
            <InputButton
              className="w-full sm:w-[450px] h-[47px]   bg-primary text-[#FFFFFF] text-[1rem] font-semibold"
              loading={loading}
              name="Submit OTP"
              htmlType="submit"
            />
          </div>
          <Divider />
        </Form>
      </div>
    </>
  );
};
export default ForgetPasswordOTP;
