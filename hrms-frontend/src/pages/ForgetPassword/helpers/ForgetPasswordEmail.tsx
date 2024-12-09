import { Divider, Form } from "antd";
import TextInput from "../../../helpers/inputs/TextInput";
import InputButton from "../../../helpers/inputs/InputButton";
import { ForgetPasswordEmailApi } from "../../../redux/api/ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";

type Props = {
  componentHandler: (componentName: string) => void;
};

const ForgetPasswordEmail = ({ componentHandler }: Props) => {
  const { loading } = useSelector(
    (state: RootState) => state.ForgetPasswordEmail
  );
  const dispatch: AppDispatch = useDispatch();
  const onFinish = (values: any) => {
    let body = {
      email: values.email,
    };
    ForgetPasswordEmailApi(body, dispatch, onSuccess);
  };
  const onSuccess = () => {
    componentHandler("otp");
  };

  return (
    <>
      <div className="flex w-full mt-9 md:mt-0">
        <div>
          <h1 className="font-bold text-[2.4263rem] text-[#1D2939] line-height-[54.35px]">
            Reset Password
          </h1>
          <h2 className="text-[#667085] font-medium text-[.975rem] line-height-[21.84px]">
            Send reset password link to Your Email
          </h2>
        </div>
      </div>
      <div className="w-full sm:flex justify-center mt-[30px] sm:mt-[10px]">
        <Form
          name="Reset Password"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Divider />

          <span className="font-medium text-[.975rem] text-[#344054]">
            Email <span className="text-red-500" >*</span>
          </span>
          <TextInput
            name="email"
            required
            placeholder="Enter your email"
            rules={[{ required: true, message: "Please input your email!" }]}
            className="w-full sm:w-[450px] h-[50px]  "
          />

          <div className="mt-5">
            <InputButton
              className="w-full sm:w-[450px] h-[47px]  dark:bg-dark-primary bg-light-primary text-[#FFFFFF] text-[1rem] font-semibold"
              name="Reset Password"
              htmlType="submit"
              loading={loading}
            />
          </div>
          <Divider />
        </Form>
      </div>
    </>
  );
};
export default ForgetPasswordEmail;
