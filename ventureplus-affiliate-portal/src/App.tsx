import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { loginFailure, loginSuccess } from "./store/slices/auth/authSlice";
import { AppDispatch, RootState } from "./store/store";
import { useSearchParams } from "react-router-dom";
import { getFromStorage, removeFromStorage } from "./utils/storage";
import AppRoutes from "./AppRoutes";
import {
  ForgotPasswordPage,
  LoginPage,
  ResetPasswordPage,
  SignupPage
} from "./views/Pages/PageListAsync";

const App: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state?.user);
  const dispatch: AppDispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const encodedObj = searchParams.get("obj");
  useEffect(() => {
    let user = getFromStorage("token");
    if (!user) {
      removeFromStorage("token");
      dispatch(loginFailure(null));
    } else {
      dispatch(loginSuccess(user));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/*" element={!isAuth ? <LoginPage /> : <AppRoutes />} />
        <Route path="/signup" element={!isAuth ? <SignupPage /> : <AppRoutes />} />
        <Route path="/affiliate-forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/affiliate-reset-password*" element={<ResetPasswordPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
