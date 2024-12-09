import { Divider, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import TextInput from "../../../components/inputs/TextInput";
import InputButton from "../../../components/inputs/InputButton";
import RoundedButton from "../../../components/button/RoundedButton";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { leftArrowBlackIcon } from "../../../assets";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ForgetPasswordEmailApi } from "../../../services/api/ForgetPassword";

interface Props {
  componentHandler: (componentName: string) => void;
}

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
    navigate("/login");
  };
  const navigate = useNavigate();

  return (
    <div className="mb-[40px]">
      <div className="flex w-full mt-9 md:mt-0 justify-center ">
        <div>
          <h1 className="font-semibold text-[36px] text-[#040615] line-height-[39.17px] text-center">
            Forget Password
          </h1>
          <h2 className="text-[#97A1B5] font-normal text-[18px] line-height-[19.58px] text-center">
            We’ll send you an email to reset your Password
          </h2>
        </div>
      </div>
      <div className="w-full  justify-center mt-[30px] sm:mt-[10px]">
        <Form
          name="Reset Password"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <span className="font-normal text-[15px] text-[#4A5366]">Email</span>
          <TextInput
            name="email"
            placeholder="Enter your email"
            rules={[{ required: true, message: "Please input your email!" }]}
            className="w-full sm:w-[450px] h-[50px]  "
          />

          <div className="mt-2">
            <RoundedButton
              htmlType="submit"
              title="Reset Password"
              className="rounded-lg w-full"
              type="primary"
            />
          </div>
        </Form>
        <div className="flex justify-center mt-[20px]">
          <ButtonWithSvg
            isLeft
            icon={leftArrowBlackIcon}
            title={"Back to login"}
            className="text-[#4A5366]"
            type="secondary"
            htmlType="button"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
};
export default ForgetPasswordEmail;
