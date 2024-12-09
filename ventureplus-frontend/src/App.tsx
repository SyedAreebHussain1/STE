import "quill/dist/quill.snow.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Loader from "./components/Spin";
import AppRoutes from "./config/AppRoutes";
import {
  ComingSoonPage,
  IdeaEvaluationPage,
  OnBoardingIdeaPage,
  OnBoardingProceedPage,
  OnBoardingQuestionWithIdeaPage,
  WebsiteAboutPage,
  WebsiteFeaturePage,
  WebsiteHomePage,
  WebsitePricingPage,
  ForgetPassword,
  WebsiteStartUpPage,
  ResetNewPassword,
  BusinessPlannerUnavailablePage,
  AspiringEntrepreneursPage,
  FreelancersPage,
  SmallandMediumEnterprisesPage,
  StudentsPage,
  BlogPage,
} from "./pages/PageListAsync";
import { loginFailure, loginSuccess } from "./redux/slices/auth/authSlice";
import { AppDispatch, RootState } from "./redux/store";
import { getFromStorage, setInStorage } from "./utils/storage";
import Login from "./views/Login";
import OnBoarding from "./views/OnBoarding";
import { decodeUrlApi } from "./services/api/Decode";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ReactGA from "react-ga4";
import { websiteLogo } from "./assets/website";
import { mobileScreenUnavailable } from "./assets";
import { postWebsiteCounts } from "./services/api/ComingSoon";
import OnboardingSteps from "./views/OnboardingSteps";

const App: React.FC = () => {
  const [mobileView, setMobileView] = useState<any>(false);
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_KEY);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: RootState) => state.user);
  const user = getFromStorage("user");
  const marketerId = getFromStorage("AffiliateMarketerId");
  const checkOnBoardCompanyUser = user?.companyUser?.isOnboard;

  const url = window.location.toString();

  useEffect(() => {
    if (url && url.includes("ref") && !marketerId)
      marketerWebsiteVisit(url.split("=").pop());
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: window.location.pathname.replace("/", ""),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  const marketerWebsiteVisit = (id: string | undefined) => {
    const AffiliateMarketerId = parseInt(id as string);
    if (AffiliateMarketerId) {
      setInStorage("AffiliateMarketerId", AffiliateMarketerId);
    } else {
      setInStorage("AffiliateMarketerId", null);
    }
    postWebsiteCounts({ affilationUserId: AffiliateMarketerId });
  };

  useEffect(() => {
    if (!user) {
      dispatch(loginFailure(null));
    } else {
      dispatch(loginSuccess(user));
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    const handleResize = () => {
      const details = navigator.userAgent;
      const phoneRegExp = /android|iphone|ipod|kindle/i;
      const isMobileDevice = phoneRegExp.test(details);

      if (isMobileDevice) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    // window.addEventListener("resize", handleResize);

    handleResize();

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const checkPlanId = localStorage.getItem("planId");

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WebsiteHomePage />} />
        <Route path="/ref?*" element={<WebsiteHomePage />} />
        <Route path="/About-us" element={<WebsiteAboutPage />} />
        <Route path="/Pricing" element={<WebsitePricingPage />} />
        <Route path="/Feature" element={<WebsiteFeaturePage />} />
        <Route path="/startups" element={<WebsiteStartUpPage />} />
        <Route
          path="/aspiring-entrepreneurs"
          element={<AspiringEntrepreneursPage />}
        />
        <Route path="/freelancers" element={<FreelancersPage />} />
        <Route
          path="/small-and-medium-enterprises"
          element={<SmallandMediumEnterprisesPage />}
        />
        <Route path="/students" element={<StudentsPage />} />
        <Route
          path="/login"
          element={
            isAuth ? (
              checkPlanId ? (
                <Navigate to={`/check-out/${checkPlanId}`} />
              ) : (
                <Navigate to="/dashboard" />
              )
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuth ? (
              checkPlanId ? (
                <Navigate to={`/check-out/${checkPlanId}`} />
              ) : (
                <Navigate to="/dashboard" />
              )
            ) : (
              <OnboardingSteps />
            )
          }
        />
        <Route path="/reset-password?*" element={<ResetNewPassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {mobileView ? (
          <Route path="/*" element={<BusinessPlannerUnavailablePage />} />
        ) : (
          <>
            <Route path="/coming-soon" element={<ComingSoonPage />} />

            <Route path="/on-boarding-idea" element={<OnBoardingIdeaPage />} />
            <Route
              path="/on-boarding-question"
              element={<OnBoardingQuestionWithIdeaPage />}
            />
            <Route
              path="/on-boarding-proceed"
              element={<OnBoardingProceedPage />}
            />
            <Route
              path="/idea-evaluation-page/:id"
              element={<IdeaEvaluationPage />}
            />
            <Route
              path="/on-boarding-proceed"
              element={<OnBoardingProceedPage />}
            />
            {/* commenting resources due to incomplete testing */}
            {/* <Route path="/Blogs-Website" element={<BlogPage />} /> */}
            <Route path="/spin" element={<Loader />} />
            <Route
              path="/*"
              element={isAuth ? <AppRoutes /> : <WebsiteHomePage />}
            />
          </>
        )}
        {/* the line below is for the coming soon page on production */}
        {/* <Route path="/*" element={<ComingSoonPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
