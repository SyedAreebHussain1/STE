import { AppDispatch } from "../../../store/store";
import {
  get,
  getError,
  getRequest,
  patch,
  post,
  update,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/constant/apiEndPoints";
import { errorMessage, successMessage } from "../../../utils/message";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import {
  isSetupTrue,
  login,
  loginFailure,
  loginSuccess,
  signUp,
  signUpFailure,
  signUpSuccess,
} from "../../../store/slices/auth/authSlice";

export const LoginApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: any,
) => {
  dispatch(login());
  try {
    const response = await post<any>(ENDPOINT.auth.login, body);
    let token = response?.data?.token;
    setInStorage("token", token);
    dispatch(loginSuccess(token));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(loginFailure("Error"));
  }
};
