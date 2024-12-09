import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { loginFailure, loginSuccess } from "./store/slices/auth/authSlice";
import { AppDispatch, RootState } from "./store/store";
import { getFromStorage, removeFromStorage } from "./utils/storage";
import AppRoutes from "./AppRoutes";
import {
  LoginPage,
} from "./views/Pages/PageListAsync";

const App: React.FC = () => {
  const { isAuth } = useSelector((state: RootState) => state?.user);
  const dispatch: AppDispatch = useDispatch();
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
      </Routes>
    </React.Fragment>
  );
};

export default App;
