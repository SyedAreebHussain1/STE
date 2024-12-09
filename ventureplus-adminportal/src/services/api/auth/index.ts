import { AppDispatch } from "../../../store/store";
import { getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/constant/apiEndPoints";
import { setInStorage } from "../../../utils/storage";
import {
  login,
  loginFailure,
  loginSuccess,
} from "../../../store/slices/auth/authSlice";

export const LoginApi = async (
  dispatch: AppDispatch,
  body: { email: string; password: string },
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
