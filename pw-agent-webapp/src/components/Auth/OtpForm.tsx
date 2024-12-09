import { useEffect, useRef, useState } from "react";
import { Form, Spin } from "antd";
import OTPInput from "react-otp-input";
import { useForm } from "antd/es/form/Form";
import InputButton from "../../helpers/inputs/InputButton";
import {
  createUserApi,
  RegisterUserApi,
  verifyUserCreateOtpApi,
} from "../../redux/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { errorMessage } from "../../utils/message";
import { useNavigate } from "react-router-dom";
type Props = {
  setIsOtp: (e: boolean) => void;
};

const OtpForm = ({ setIsOtp }: Props) => {
  const navigate = useNavigate();
  const createUser = useSelector((state: any) => state.createUser);
  const resendOtp = useSelector((state: any) => state.resendOtp);
  const [form] = useForm();
  const dispatch = useDispatch();
  const intervalId = useRef<number>();
  const [otp, setOtp] = useState("");
  const [resend, setResend] = useState<boolean>(true);
  const [timeValue, setTimeValue] = useState("");
  function startResendOTPTimer(duration: number): void {
    let timer: number = duration;
    intervalId.current = setInterval(function () {
      const minutes: number = Math.floor(timer / 60);
      const seconds: number = timer % 60;
      const minutesStr: string = String(minutes).padStart(2, "0");
      const secondsStr: string = String(seconds).padStart(2, "0");
      setTimeValue(`${minutesStr}:${secondsStr}`);
      if (--timer < 0) {
        clearInterval(intervalId.current);
      }
    }, 1000);
  }
  useEffect(() => {
    startResendOTPTimer(10);
    return () => {
      clearInterval(intervalId.current);
    };
  }, [resend]);

  function onFinish() {
    if (otp.length < 4) {
      errorMessage("Please Enter Otp!");
    }
    const body = {
      phone: createUser.data.user.phone,
      code: otp,
    };
    verifyUserCreateOtpApi(body, dispatch, onSuccessVerification);

    function onSuccessVerification() {
      const body = {
        email: createUser.data.user.email,
        phone: createUser.data.user.phone,
        fullName: createUser.data.user.fullName,
        password: createUser.data.user.password,
        deviceToken: "",
      };
      RegisterUserApi(body, dispatch, () => navigate("/setup-agency"));
    }
  }
  function onClickResendOtp() {
    const body = {
      email: createUser.data.user.email,
      phone: createUser.data.user.phone,
      fullName: createUser.data.user.fullName,
    };
    createUserApi(body, dispatch, () => setResend(!resend), body);
  }
  return (
    <div className="mt-10 ">
      <div>
        <h4 className="text-[1.2rem] text-[#667085] font-medium">
          Enter Verification Code
        </h4>
      </div>
      <div className="w-full sm:flex mt-[30px] sm:mt-[10px] ">
        <Form form={form} name="Submit OTP" initialValues={{ remember: true }}>
          <div className="flex ">
            <Form.Item
              name={"Otp"}
              rules={[{ required: true, message: "Please input your OTP!" }]}
            >
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span className="px-[10px]"></span>}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "72px",
                  height: "72px",
                  fontSize: "1.2rem",
                  outline: "none",
                  border: "1px solid #EAECF0",
                  borderRadius: "8px",
                  backgroundColor: "#F9F9F9",
                }}
              />
            </Form.Item>
          </div>
          <div>
            <div>
              <span className="text-[#1D2939] text-[1.2rem] font-medium">
                Resend Code In:{" "}
                <span className="text-[#667085] ">
                  {timeValue ? timeValue : "00:00"}
                </span>
              </span>
            </div>
            <div>
              <Spin spinning={resendOtp.loading}>
                <span className="text-[#344054] text-[1rem] font-semibold select-none">
                  Didn’t Receve Code?{" "}
                  <span
                    className={
                      timeValue === "00:00"
                        ? ` text-[#27A3A3] text-[1rem] font-medium cursor-pointer`
                        : ` text-[#818585] text-[1rem] font-medium cursor-not-allowed`
                    }
                    onClick={
                      timeValue === "00:00" ? onClickResendOtp : () => {}
                    }
                  >
                    Resend Code
                  </span>
                </span>
              </Spin>
            </div>
          </div>
        </Form>
      </div>
      <div className="mt-[4.5rem] flex justify-between">
        <InputButton
          className="w-[97px] h-[50px] border border-borderColor  bg-white text-[#475467] text-[1rem] font-bold"
          name="Back"
          onClick={() => {
            setIsOtp(false);
          }}
        />
        <InputButton
          className="w-auto lg:w-[300px] h-[50px]  bg-primary text-[white] text-[1rem] font-bold"
          name="Create An Account"
          onClick={onFinish}
        />
      </div>
    </div>
  );
};
export default OtpForm;
