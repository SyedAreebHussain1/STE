import { getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { setInStorage } from "../../../utils/storage";
import {
  login,
  loginFailure,
  loginSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from "../../slices/auth/authSlice";
import { AppDispatch } from "../../store";

export const LoginApi = async (body: any, dispatch: AppDispatch) => {
  dispatch(login());
  try {
    const response = await post<any>(ENDPOINT.auth.login, body);
    if (response) {
      let token = response?.data?.token;
      let user = { ...response.data };
      setInStorage("token", token);
      setInStorage("user", user);
      dispatch(loginSuccess(user));
    } else {
      dispatch(loginFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(loginFailure("Error"));
  }
};

export const RegisterCompnayApi = async (body: any, dispatch: AppDispatch) => {
  dispatch(signUp());
  try {
    const response = await post<any>(ENDPOINT.auth.register, body);
    if (response) {
      let token = response?.data?.token;
      let user = { ...response?.data };
      setInStorage("token", token);
      setInStorage("user", user);
      successMessage(response?.message);
      dispatch(signUpSuccess(user));
    } else {
      dispatch(signUpFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(signUpFailure("Error"));
  }
};
