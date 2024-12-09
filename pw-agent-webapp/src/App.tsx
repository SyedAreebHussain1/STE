import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppDispatch, RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginPage,
  SignUpPage,
  ForgetPassword,
  SetupAgency,
  JoinAsAgent,
  JoinAsFreelancer,
  CreateAgency,
} from "./pages/PageListAsync";
import { getFromStorage, removeFromStorage } from "./utils/storage";
import { loginFailure, loginSuccess } from "./redux/slices/auth/authSlice";
import { getProfileApi } from "./redux/api/auth";
import AppRoutes from "./config/AppRoutes";
import "./App.css";

const App: React.FC = () => {
  const { isAuth, isSetup } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    let user = getFromStorage("user");
    if (!user) {
      removeFromStorage("user");
      removeFromStorage("token");
      dispatch(loginFailure(null));
    } else {
      dispatch(loginSuccess(user));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth && isSetup) {
      getProfileApi(dispatch);
    }
  }, [isAuth]);

  return (
    <>
      <Routes>
        <Route
          path="/setup-agency"
          element={!isSetup && isAuth ? <SetupAgency /> : <Navigate to="/" />}
        />
        <Route
          path="/join-as-agent"
          element={!isSetup && isAuth ? <JoinAsAgent /> : <Navigate to="/" />}
        />
        <Route
          path="/join-as-freelancer"
          element={
            !isSetup && isAuth ? <JoinAsFreelancer /> : <Navigate to="/" />
          }
        />
        <Route
          path="/create-agency"
          element={!isSetup && isAuth ? <CreateAgency /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={
            !isAuth ? (
              <LoginPage />
            ) : isAuth && !isSetup ? (
              <SetupAgency />
            ) : (
              <AppRoutes />
            )
          }
        />
        <Route
          path="/forget-password"
          element={!isAuth ? <ForgetPassword /> : <LoginPage />}
        />

        <Route
          path="/create-user"
          element={!isAuth ? <SignUpPage /> : <LoginPage />}
        />
        <Route path="/*" element={!isAuth ? <LoginPage /> : <AppRoutes />} />
      </Routes>
    </>
  );
};

export default App;
