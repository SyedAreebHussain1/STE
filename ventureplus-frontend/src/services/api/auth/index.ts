import {
  login,
  loginFailure,
  loginSuccess,
  signOut,
  signUp,
  signUpFailure,
  signUpSuccess,
} from "../../../redux/slices/auth/authSlice";
import {
  CompanyCreate,
  CompanyCreateFailure,
  CompanyCreateSuccess,
} from "../../../redux/slices/auth/CompanyCreateSlice";
import {
  createBusiness,
  createBusinessFailure,
  createBusinessSuccess,
} from "../../../redux/slices/auth/createBusinessSlice";

import { AppDispatch } from "../../../redux/store";
import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { setInStorage } from "../../../utils/storage";

export const LoginApi = async (body: any, dispatch: AppDispatch) => {
  dispatch(login());
  try {
    const response = await post<any>(ENDPOINT.auth.login, body);
    if (response) {
      const token = response?.data?.token;
      const user = { ...response.data };
      setInStorage("token", token);
      setInStorage("user", user);
      dispatch(loginSuccess(user));
      // successMessage(response?.message);
    } else {
      dispatch(loginFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(loginFailure("Error"));
  }
};

export const RegisterApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (data: any) => void,
) => {
  dispatch(signUp());
  try {
    const response = await post<any>(ENDPOINT.auth.register, body);
    if (response) {
      const token = response?.data?.token;
      const user = { ...response?.data };
      setInStorage("token", token);
      setInStorage("user", user);
      dispatch(signUpSuccess(user));
      onSuccess(user);
    } else {
      dispatch(signUpFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(signUpFailure("Error"));
  }
};

export const CompanyCreateApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (data: any) => void,
) => {
  dispatch(CompanyCreate());
  try {
    const response = await post<any>(ENDPOINT.auth.createCompany, body);
    if (response) {
      dispatch(CompanyCreateSuccess({ ...response?.data }));
      onSuccess(response?.data);
      // successMessage(response.message); //! No need to show message here
    } else {
      dispatch(CompanyCreateFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(CompanyCreateFailure("Error"));
  }
};

export const CompanygetApi = async (dispatch: AppDispatch) => {
  try {
    const response = await get<any>(ENDPOINT.auth.getCompany);
    if (response) {
      return response?.data;
    }
  } catch (err) {
    getError(err);
    return "";
  }
};
export const createBusinessApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void,
) => {
  dispatch(createBusiness());
  try {
    const response = await post<any>(ENDPOINT.auth.createBusiness, body);
    if (response) {
      successMessage(response.message);
      dispatch(createBusinessSuccess({ ...response?.data }));
      onSuccess();
    } else {
      dispatch(createBusinessFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(createBusinessFailure("Error"));
  }
};

export const LogoutUser = async (dispatch: AppDispatch) => {
  dispatch(signOut());
  localStorage.clear();
  window.location.reload();
};
