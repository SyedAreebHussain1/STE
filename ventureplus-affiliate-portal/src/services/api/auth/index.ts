import { AppDispatch } from "../../../store/store";
import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/constant/apiEndPoints";
import { setInStorage } from "../../../utils/storage";
import {
  login,
  loginFailure,
  loginSuccess,
} from "../../../store/slices/auth/authSlice";
import {
  forgetPassword,
  forgetPasswordSuccess,
  forgetPasswordFailure,
} from "../../../store/slices/auth/forgetPasswordSlice";
import { errorMessage, successMessage } from "../../../utils/message";

export const LoginApi = async (
  dispatch: AppDispatch,
  body: { email: string; password: string }
) => {
  dispatch(login());
  try {
    const response = await post<any>(ENDPOINT.auth.login, body);
    let token = response?.data?.token;
    setInStorage("token", token);
    dispatch(loginSuccess(token));
  } catch (err) {
    getError(err);
    dispatch(loginFailure("Error"));
  }
};
export const signUpApi = async (
  dispatch: AppDispatch,
  body: { name: string; email: string; password: string; phoneNo: string }
) => {
  dispatch(login());
  try {
    const response = await post<any>(ENDPOINT.auth.registration, body);
    let token = response?.data?.token;
    setInStorage("token", token);
    setInStorage("user", response?.data);
    dispatch(loginSuccess(token));
  } catch (err) {
    getError(err);
    dispatch(loginFailure("Error"));
  }
};
export const forgetPasswordApi = async (
  dispatch: AppDispatch,
  body: { email: string },
  success: any
) => {
  dispatch(forgetPassword());
  try {
    const response = await post<any>(ENDPOINT.auth.forgetPassword, body);
    dispatch(forgetPasswordSuccess(response?.data));
    success();
    successMessage(response?.data);
  } catch (err) {
    getError(err);
    dispatch(forgetPasswordFailure("Error"));
  }
};
export const setNewPasswordApi = async (
  dispatch: AppDispatch,
  body: {
    affiliateUserId: number;
    password: String;
  },
  success: any,
  setLoading: any
) => {
  setLoading(true);
  try {
    const response = await post<any>(ENDPOINT.auth.setNewPassword, body);
    successMessage(response?.data);
    setLoading(false);
    success();
  } catch (err) {
    setLoading(false);
    getError(err);
    dispatch(forgetPasswordFailure("Error"));
  }
};

export const decodeUrlApi = async (url: string, onSuccess: any) => {
  try {
    const response = await get<any>(`${ENDPOINT.decodeUrl}/${url}`);
    onSuccess(response?.data);
  } catch (err) {
    getError(err);
  }
};
