import { Spin } from "antd";
import { useEffect } from "react";
import {
  getFromStorage,
  removeFromStorage,
  setInStorage,
} from "../../utils/storage";
import {
  loginFailure,
  loginSuccess,
  signOut,
} from "../../redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { errorMessage, successMessage } from "../../utils/message";
import {
  CompanyCreateApi,
  createBusinessApi,
  RegisterApi,
} from "../../services/api/auth";
import { useNavigate } from "react-router-dom";
const Loader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const parsedUrl = new URL(currentUrl);
  const params = new URLSearchParams(parsedUrl.search);
  const checkPlanId = localStorage.getItem("planId");
  const socialSetup = getFromStorage("socialSetup");
  function getPreviousYear(months: number, years: number) {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - years);
    currentDate.setMonth(currentDate.getMonth() - months);
    return currentDate.getFullYear();
  }
  useEffect(() => {
    const urlKeys: any = {
      token: params.get("token"),
      isCompanySetup: params.get("isCompanySetup"),
      companyUser: {
        name: params.get("name"),
        email: params.get("email"),
        profilePhoto: params.get("profilePhoto"),
        id: Number(params.get("id")),
        companyId: Number(params.get("companyId")),
        message: params.get("message"),
        productUpdates: params.get("productUpdates"),
        offerAndDiscounts: params.get("offerAndDiscounts"),
        businessTips: params.get("businessTips"),
        industryNews: params.get("industryNews"),
      },
    };
    let token = urlKeys?.token;
    let user = { ...urlKeys };
    if (token !== "null") {
      setInStorage("token", token);
      setInStorage("user", user);
      dispatch(loginSuccess(user));
      if (urlKeys?.isCompanySetup == "false") {
        if (socialSetup) {
          onSuccessfullySignup();
        }
      } else if (urlKeys?.isCompanySetup == "true") {
        navigate("/dashboard");
        removeFromStorage("socialSetup");
      }
    } else {
      dispatch(loginFailure("Error"));
      dispatch(signOut());
      removeFromStorage("token");
      removeFromStorage("user");
      removeFromStorage("socialSetup");
      errorMessage(urlKeys?.companyUser?.message);
      if (urlKeys?.companyUser?.message) {
        navigate("/login");
      }
    }
  }, []);

  const onSuccessfullySignup = () => {
    let body: any = {
      name: socialSetup.businessName,
      designation: socialSetup.userRole,
    };
    if (socialSetup?.month || socialSetup?.year) {
      body.establishedYear = getPreviousYear(
        socialSetup?.month,
        socialSetup?.year
      );
    }
    CompanyCreateApi(body, dispatch, onSuccessfullyCompanyCreate);
  };
  const onSuccessfullyCompanyCreate = (data: any) => {
    const body = {
      name: socialSetup.businessName,
      description: socialSetup.businessDescription,
      companyId: data.id,
      stage: socialSetup.stage || "Idea",
      industry: socialSetup.industry,
      currencyId: socialSetup.currency,
      city: socialSetup.city,
      country: socialSetup.country,
      latitude: socialSetup.latitude,
      longitude: socialSetup.longitude,
    };
    createBusinessApi(body, dispatch, onSuccessfullyBusinessCreate);
  };
  function onSuccessfullyBusinessCreate() {
    removeFromStorage("socialSetup");
    checkPlanId
      ? navigate(`/check-out/${checkPlanId}`)
      : navigate("/on-boarding-final");
  }
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
