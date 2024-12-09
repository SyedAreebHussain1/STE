import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AppRoutes from "./config/AppRoutes";
import LoginSignup from "./pages/LoginSignUp";
import {
  ApplyToJobPage,
  CreateCompnay,
  ForgetPassword,
  LoginPage,
  WebsitePage,
} from "./pages/PageListAsync";
import { getRoutesApi } from "./redux/api/Routes";
import { loginFailure, loginSuccess } from "./redux/slices/auth/authSlice";
import { AppDispatch, RootState } from "./redux/store";
import { getFromStorage } from "./utils/storage";
import "./App.css";

const App: React.FC = () => {
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    let user = getFromStorage("user");
    if (!user) {
      dispatch(loginFailure(null));
    } else {
      dispatch(loginSuccess(user));
      getRoutesApi(dispatch);
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !isAuth && !userData && !userData?.isCompanySetup ? (
              <LoginPage />
            ) : isAuth && !userData?.isCompanySetup ? (
              <CreateCompnay />
            ) : (
              <AppRoutes />
            )
          }
        />
        <Route path="/jobOpening?*" element={<ApplyToJobPage />} />
        <Route
          path="/forget-password"
          element={!isAuth ? <ForgetPassword /> : <AppRoutes />}
        />
        <Route path="/website" element={<WebsitePage />} />
        <Route
          path="/create-user"
          element={
            userData && !userData?.isCompanySetup ? (
              <Navigate to="/" />
            ) : (
              <LoginSignup isFlip={true} />
            )
          }
        />
        <Route
          path="/*"
          element={
            userData && !userData?.isCompanySetup ? (
              <CreateCompnay />
            ) : isAuth ? (
              <>
                <AppRoutes />
              </>
            ) : (
              <LoginPage />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
