import { postdecodeUrlApiSlice } from "../../../redux/slices/Decode/decodeSlice";
import {
  ForgetPasswordEmail,
  ForgetPasswordEmailFailure,
  ForgetPasswordEmailSuccess,
} from "../../../redux/slices/ForgetPassword/ForgetPasswordEmailSlice";
import {
  ResetPassword,
  ResetPasswordFailure,
  ResetPasswordSuccess,
  ResetPasswordUserFailure,
  ResetPasswordUserSuccess,
} from "../../../redux/slices/ForgetPassword/ResetPasswordSlice";
import { AppDispatch } from "../../../redux/store";
import {
  get,
  getError,
  post,
  postWithoutPayload,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { setInStorage } from "../../../utils/storage";

export const ForgetPasswordEmailApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(ForgetPasswordEmail());
  try {
    const response = await post<any>(ENDPOINT.auth.forgetPasswordEmail, body);

    if (response) {
      dispatch(ForgetPasswordEmailSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(ForgetPasswordEmailFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(ForgetPasswordEmailFailure("Error"));
  }
};

export const ResetPasswordApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(ResetPassword());
  try {
    const response = await post<any>(ENDPOINT.auth.resetPassword, body);

    if (response) {
      dispatch(ResetPasswordSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(ResetPasswordFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(ResetPasswordFailure("Error"));
  }
};

export const decodePasswordApi = async (dispatch: AppDispatch, url: any) => {
  dispatch(ResetPassword());
  try {
    const apiString = `${ENDPOINT.auth.decodePasswordLink}/${url}`;
    const response = await get<any>(apiString);
    dispatch(ResetPasswordUserSuccess(response.data));
  } catch (err) {
    getError(err);
    dispatch(ResetPasswordUserFailure("Error"));
  }
};
