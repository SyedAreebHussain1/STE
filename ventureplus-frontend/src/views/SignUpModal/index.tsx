import React, { useState } from "react";
import { Modal, Row, Col, Form } from "antd";
import TextInput from "../../components/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { SignUp } from "../../assets/signUp";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../components/button/RoundedButton";
import ButtonWithSvg from "../../components/button/ButtonWithSvg";
import { facebookIcon, googleIcon } from "../../assets";
import { useForm } from "antd/es/form/Form";
import {
  CompanyCreateApi,
  createBusinessApi,
  RegisterApi,
} from "../../services/api/auth";
import {
  postIdeaIdApi,
  submitIdeaAnswersApi,
} from "../../services/api/AddNewIdea";
import { getFromStorage } from "../../utils/storage";

const SignUpModal = ({
  isVisible,
  onCancel,
  valueData,
  bodyData,
  title,
}: any) => {
  const [state, setState] = useState({});
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const CompanyCreate = useSelector((state: RootState) => state.CompanyCreate);
  const createBusiness = useSelector(
    (state: RootState) => state.createBusiness
  );
  const postIdeaId = useSelector((state: RootState) => state.postIdeaId);
  const marketerId = getFromStorage("AffiliateMarketerId");
  const [form] = useForm();
  const navigate = useNavigate();

  function getPreviousYear(months: number, years: number) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - years);
    currentDate.setMonth(currentDate.getMonth() - months);
    return currentDate.getFullYear();
  }

  const onSuccessfullyBusinessCreate = (response: any) => {
    if (response?.data) {
      const ideaBody = {
        ideaValidationId: response?.data?.ideaValidationData?.id,
      };

      postIdeaIdApi(ideaBody, dispatch, onIdeaSuccess);
    }
  };

  const onIdeaSuccess = (response: any) => {
    const id = response?.data?.ideaValidationUpdated?.id;
    navigate(`/idea-evaluation-page/${id}`);
  };

  const onSuccessfullyIdeaCreate = () => {
    submitIdeaAnswersApi(bodyData, dispatch, onSuccessfullyBusinessCreate);
  };

  const onSuccessfullyCompanyCreate = (data: any) => {
    const body = {
      name: valueData.businessName,
      description: valueData.businessDescription,
      companyId: data.id,
      stage: "Idea",
      industry: valueData.businessIndustry,
      currencyId: valueData.currency,
      city: valueData.city,
      country: valueData.country,
      latitude: valueData.latitude,
      longitude: valueData.longitude,
    };
    createBusinessApi(body, dispatch, onSuccessfullyIdeaCreate);
  };

  const onSuccessfullySignup = (userData: any) => {
    let body: any = {
      name: title,
      designation: valueData.userRole,
    };
    if (valueData?.month || valueData?.year) {
      body.establishedYear = getPreviousYear(valueData?.month, valueData?.year);
    }
    CompanyCreateApi(body, dispatch, onSuccessfullyCompanyCreate);
  };

  const onFinish = (values: any) => {
    if (values.confirmPassword !== values.password) {
      form.setFields([
        {
          name: "confirmPassword",
          errors: ["Password does not match"],
        },
      ]);
      return;
    }
    let body: any = {
      email: values.email,
      password: values.password,
      name: valueData.userName,
      category: valueData.category,
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
    <Modal
      open={isVisible}
      onCancel={onCancel}
      footer={null}
      centered
      width={900}
      bodyStyle={{ padding: "5px", textAlign: "start" }}
    >
      <div>
        <Row gutter={16}>
          <Col lg={12} md={12} sm={12} className="flex items-center">
            <img src={SignUp} />
          </Col>
          <Col lg={12} md={12} sm={12}>
            <div>
              <div className="flex flex-col justify-center items-center mb-5">
                <h1 className="text-[#121627] font-bold text-2xl">
                  Join us now
                </h1>
                <h4 className="text-[#121627] font-bold text-md">
                  10M+ people have joined our network
                </h4>
              </div>
              <Form
                className="mt-6"
                name="signup"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                form={form}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input the Email!" },
                  ]}
                >
                  <TextInput
                    name="email"
                    placeholder="Email"
                    onChange={(e) => onChange(e.target.value, "email")}
                    className="w-full sm:w-[100%] h-[50px]"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input the Password!" },
                    {
                      pattern: /^(?=.*\d)(?=.*[\W_]).{7,}$/,
                      message:
                        "Password must be at least 7 characters long, contain at least 1 digit and 1 symbol.",
                    },
                  ]}
                >
                  <TextInput
                    name="password"
                    placeholder="Password"
                    isPassword={true}
                    className="w-full sm:w-[100%] h-[50px]"
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your Password!",
                    },
                  ]}
                >
                  <TextInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    isPassword={true}
                    className="w-full sm:w-[100%] h-[50px]"
                  />
                </Form.Item>
                <RoundedButton
                  title={"Sign Up"}
                  htmlType="submit"
                  type="primary"
                  bold
                  className="w-full"
                  loading={
                    loading ||
                    createBusiness.loading ||
                    CompanyCreate.loading ||
                    postIdeaId.loading
                  }
                />
              </Form>

              <div className="w-full px-1 flex justify-evenly items-center mt-4 text-light-para dark:text-dark-para">
                <hr className="border-light-para dark:border-dark-para  w-[40%]" />
                OR
                <hr className="border-light-para dark:border-dark-para  w-[40%]" />
              </div>
              <div className="w-full flex justify-evenly items-center my-4 gap-2">
                <ButtonWithSvg
                  title={"Google"}
                  icon={googleIcon}
                  className="w-full"
                  bold
                  sm
                  onClick={handleGoogle}
                />
                {/* facebook developer app not ready  */}
                {/* <ButtonWithSvg
                  title={"Facebook"}
                  icon={facebookIcon}
                  type="secondary"
                  className="w-full"
                  bold
                  sm
                  onClick={handleFacebook}
                /> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default SignUpModal;
