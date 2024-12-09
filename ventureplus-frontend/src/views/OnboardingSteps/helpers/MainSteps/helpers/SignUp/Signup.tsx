import { Form } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../../../../components/inputs/TextInput";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import facebookIcon from "../../../../../../assets/facebookIcon.svg";
import googleIcon from "../../../../../../assets/googleIcon.svg";
import RoundedButton from "../../../../../../components/button/RoundedButton";
import { useForm } from "antd/es/form/Form";
import { useLocation } from "react-router-dom";
import {
  CompanyCreateApi,
  createBusinessApi,
  RegisterApi,
} from "../../../../../../services/api/auth";
import { useNavigate } from "react-router-dom";
import { getFromStorage, setInStorage } from "../../../../../../utils/storage";
import SocialmediaAuthBtn from "../../../../../../components/button/SocialmediaAuthBtn";
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
      setInStorage("socialSetup", {
        businessName: value.businessName,
        businessDescription: value.businessDescription,
        industry: value.industry,
        country: value.country,
        city: value.city,
        stage: value.stage,
        userRole: value.userRole,
        currency: value.currency,
        language: value.language,
        category: value.category,
      });
    }
  }, []);
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
      stage: value.stage,
      industry: value.industry,
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
    form.resetFields();
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
      name: values.name,
      category: value.category,
    };
    if (marketerId != null) {
      body.affilationUserId = marketerId;
    }
    RegisterApi(body, dispatch, onSuccessfullySignup);
  };
  const onChange = (val: string | number, name: string) => {
    setState({
      ...state,
      [name]: val,
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
      autoComplete="off"
    >
      <div className="flex flex-col w-full items-center justify-between sm:mt-0  mt-5">
        <div className="flex flex-col justify-center items-center w-full  flex-1  mt-3 ">
          <div className="w-full flex justify-evenly items-center  sm:p-4 p-0  my-2 gap-2">
            <SocialmediaAuthBtn
              title={"Google"}
              icon={googleIcon}
              className="w-full  bg-[#fff]"
              bold
              isLeft
              onClick={handleGoogle}
            />
            <h2 className="text-[.9375rem] font-medium text-[#97A1B5]">or</h2>
            <SocialmediaAuthBtn
              title={"Facebook"}
              icon={facebookIcon}
              className="w-full "
              bold
              isLeft
              onClick={handleFacebook}
            />
          </div>

          <div className=" w-full sm:mt-0 mt-3 rounded-md sm:p-4 p-1 flex flex-col gap-2">
            <h1 className="title font-semibold leading-3">Full Name</h1>
            <TextInput
              name="name"
              placeholder="Full Name"
              onChange={(e) => onChange(e.target.value, "name")}
              rules={[{ required: true, message: "Please input your name!" }]}
              className="  h-[46px]  "
              classNameFormItem="mb-1 w-full"
            />
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
            <div className="sm:flex block   gap-2 w-full">
              <TextInput
                name="password"
                placeholder="Enter Password"
                isPassword={true}
                className=" h-[46px] w-full "
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
              <TextInput
                name="confirmPassword"
                placeholder="Confirm password"
                isPassword={true}
                className=" h-[46px] w-full "
                classNameFormItem="mb-1 w-full"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full gap-2 sm:mt-36 mt-16">
        <RoundedButton
          onClick={signUpHandler}
          title={"Previous"}
          className="w-[130px]"
          sm
        />
        <RoundedButton
          htmlType="submit"
          title={"Complete"}
          type="primary"
          className="w-[130px] "
          sm
          loading={
            user.loading || createBusiness.loading || CompanyCreate.loading
          }
        />
      </div>
    </Form>
  );
};
export default Signup;
