import { useState, useEffect } from "react";
import { Divider, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { TextInput } from "../../../../components";
import InputButton from "../../../../components/inputs/InputButton";
import { useNavigate, useSearchParams } from "react-router-dom";
import { decodeUrlApi, setNewPasswordApi } from "../../../../services/api/auth";
import { errorMessage } from "../../../../utils/message";

interface Props {}

const ResetPasswordForm = (props: Props) => {
  const [affiliateUserId, setAffiliateUserId] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const encodedObj = searchParams.get("obj");
  // const { loading } = useSelector((state: RootState) => state?.user);
  const onFinish = (values: any) => {
    if (affiliateUserId && values.password) {
      if (values.password == values.confirmPassword) {
        let body: any = {
          affiliateUserId: Number(affiliateUserId),
          password: values.password,
        };
        setNewPasswordApi(dispatch, body, () => navigate("/"), setLoading);
      } else {
        errorMessage("Password doesn't match");
      }
    }
  };

  useEffect(() => {
    if (encodedObj) {
      decodeUrlApi(encodedObj, onSuccess);
    }
  }, [encodedObj]);
  function onSuccess(res: any) {
    if (res?.affiliateUserId) {
      setAffiliateUserId(res?.affiliateUserId);
    }
  }

  return (
    <div className="w-full sm:flex justify-center mt-[50px] sm:mt-[30px]">
      <Form
        name="resetPasswordForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="w-full"
        autoComplete="off"
      >
        <div>
          <span className="font-normal  text-[.9375rem] text-[#4A5366]">
            Password
          </span>
          <TextInput
            name="password"
            placeholder="Password"
            isPassword={true}
            className="w-full sm:w-[100%] h-[50px] "
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          />
        </div>
        <div>
          <span className="font-normal  text-[.9375rem] text-[#4A5366]">
            Confirm Password
          </span>
          <TextInput
            name="confirmPassword"
            placeholder="Confirm Password"
            isPassword={true}
            className="w-full sm:w-[100%] h-[50px]  "
            rules={[
              {
                required: true,
                message: "Please input your confirm password!",
              },
            ]}
          />
        </div>
        <div className="mt-5">
          <InputButton
            className="w-full sm:w-[100%] h-[48px] bg-[#016A70] text-[#F8FAFC] text-[1rem] font-semibold"
            loading={loading}
            disabled={loading}
            name="Reset Password"
            htmlType="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
