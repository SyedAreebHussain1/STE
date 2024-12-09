import { Form } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonWithSvg from "../../components/button/ButtonWithSvg";
import TextInput from "../../components/inputs/TextInput";
import { AppDispatch, RootState } from "../../redux/store";
import facebookIcon from "./../../assets/facebookIcon.svg";
import googleIcon from "./../../assets/googleIcon.svg";
import RoundedButton from "../../components/button/RoundedButton";
import { useForm } from "antd/es/form/Form";
import { useLocation } from "react-router-dom";
import {
  CompanyCreateApi,
  createBusinessApi,
  RegisterApi,
} from "../../services/api/auth";
import { useNavigate } from "react-router-dom";
import { getFromStorage, setInStorage } from "../../utils/storage";
const Signup = ({ signUpHandler, value }: any) => {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const CompanyCreate = useSelector((state: RootState) => state.CompanyCreate);
  const createBusiness = useSelector(
    (state: RootState) => state.createBusiness
  );
  const marketerId = getFromStorage("AffiliateMarketerId");
  const [form] = useForm();
  function getPreviousYear(months: number, years: number) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - years);
    currentDate.setMonth(currentDate.getMonth() - months);
    return currentDate.getFullYear();
  }

  useEffect(() => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/on-boarding-idea"
    ) {
      setInStorage("socialSetup", value);
    }
  }, []);
  const setGoogleSignUp: any = setInStorage("socialSetup", value);

  const checkPlanId = localStorage.getItem("planId");
  const onSuccessfullyBusinessCreate = (userData: any) => {
    const updatedUser = {
      ...userData,
      companyUser: {
        ...userData.companyUser,
        isOnboard: true,
      },
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    {
      checkPlanId
        ? navigate(`/check-out/${checkPlanId}`)
        : navigate("/on-boarding-final");
    }
  };
  const onSuccessfullyCompanyCreate = (data: any, userData: any) => {
    const body = {
      name: value.businessName,
      description: value.businessDescription,
      companyId: data.id,
      stage: value.businessStage,
      industry: value.businessIndustry,
      currencyId: value.currency,
      city: value.city,
      country: value.country,
      latitude: value.latitude,
      longitude: value.longitude,
    };
    createBusinessApi(body, dispatch, () => {
      onSuccessfullyBusinessCreate(userData);
    });
  };
  const onSuccessfullySignup = (userData: any) => {
    let body: any = {
      name: value.businessName,
      designation: value.userRole,
    };
    if (value?.month || value?.year) {
      body.establishedYear = getPreviousYear(value?.month, value?.year);
    }
    CompanyCreateApi(body, dispatch, (apiData: any) =>
      onSuccessfullyCompanyCreate(apiData, userData)
    );
  };
  const onFinish = (values: any) => {
    if (values.confirmPassword !== values.password) {
      form.setFields([
        {
          name: "confirmPassword",
          errors: ["Password Not match"],
        },
      ]);
      return;
    }
    let body: any = {
      email: values.email,
      password: values.password,
      name: value.userName,
      category: value.category,
    };
    if (marketerId != null) {
      body.affilationUserId = marketerId;
    }
    RegisterApi(body, dispatch, onSuccessfullySignup);
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
    }/company-auth/sso/google/sign-up`;
    window.location.href = authUrl;
  };
  const handleFacebook = () => {
    const authUrl = `${
      import.meta.env.VITE_BASE_URL
    }/company-auth/sso/facebook/sign-up`;
    window.location.href = authUrl;
  };
  return (
    <Form
      form={form}
      className="h-full w-full"
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <div className="flex flex-col w-full items-center h-full justify-between  ">
        <div className="flex flex-col justify-center items-center p-4 w-[600px] flex-1  ">
          <h1 className="text-2xl font-bold mb-2 text-light-title dark:text-dark-title">
            You’re almost there!
          </h1>
          <div className="w-full flex justify-evenly items-center my-3 gap-2">
            <ButtonWithSvg
              title={"Sign Up With Google"}
              icon={googleIcon}
              className="w-full  bg-[#fff]"
              bold
              onClick={handleGoogle}
              // sm
            />
            {/* facebook developer app not ready  */}
            <ButtonWithSvg
              title={"Sign Up With Facebook"}
              icon={facebookIcon}
              className="w-full "
              bold
              onClick={handleFacebook}
              // sm
            />
          </div>
          <h2 className="text-l font-bold mb-2 text-light-title dark:text-dark-title">
            OR
          </h2>
          <div className="bg-lightPurple rounded-md p-4 flex flex-col gap-2">
            <h1 className="title font-semibold leading-3">
              What is your email address?
            </h1>
            <TextInput
              name="email"
              placeholder="Enter your email"
              onChange={(e) => onChange(e.target.value, "email")}
              rules={[{ required: true, message: "Please input your email!" }]}
              className="  h-[46px]  "
              classNameFormItem="mb-1 w-full"
            />
            <h1 className="title font-semibold leading-3">
              What would you like to set as your account password?
            </h1>
            <div className="flex gap-2 w-full">
              <TextInput
                name="password"
                placeholder="Enter Password"
                isPassword={true}
                className=" h-[46px] w-full"
                classNameFormItem="mb-1 w-full"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/,
                    message:
                      "Password must contain at least 8 characters, maximum length of 20 characters, at least one uppercase letter, at least one lowercase letter, at least one number",
                  },
                ]}
              />
            </div>
            <TextInput
              name="confirmPassword"
              placeholder="Confirm password"
              isPassword={true}
              className=" h-[46px] w-full"
              classNameFormItem="mb-1 w-full"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            />
          </div>
          <div className="flex justify-center w-full gap-2 mt-12">
            <RoundedButton
              onClick={signUpHandler}
              title={"Previous"}
              type="secondary"
              className="w-[110px]"
              sm
            />
            <RoundedButton
              htmlType="submit"
              title={"Next"}
              type="primary"
              className="w-[110px] "
              sm
              loading={
                user.loading || createBusiness.loading || CompanyCreate.loading
              }
            />
          </div>
        </div>
      </div>
    </Form>
  );
};
export default Signup;
