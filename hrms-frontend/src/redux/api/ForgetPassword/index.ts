import { getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { setInStorage } from "../../../utils/storage";
import {
  ForgetPasswordChangePassword,
  ForgetPasswordChangePasswordFailure,
  ForgetPasswordChangePasswordSuccess,
} from "../../slices/ForgetPassword/ForgetPasswordChangePasswordSlice";

import {
  ForgetPasswordEmail,
  ForgetPasswordEmailFailure,
  ForgetPasswordEmailSuccess,
} from "../../slices/ForgetPassword/ForgetPasswordEmailSlice";
import {
  ForgetPasswordOTP,
  ForgetPasswordOTPFailure,
  ForgetPasswordOTPSuccess,
} from "../../slices/ForgetPassword/ForgetPasswordOTPSlice";

import { AppDispatch } from "../../store";

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

export const ForgetPasswordOTPApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(ForgetPasswordOTP());
  try {
    const response = await post<any>(ENDPOINT.auth.forgetPasswordOTP, body);

    if (response) {
      setInStorage("token", response?.data?.token);
      dispatch(ForgetPasswordOTPSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(ForgetPasswordOTPFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(ForgetPasswordOTPFailure("Error"));
  }
};

export const ForgetPasswordChangePasswordApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(ForgetPasswordChangePassword());
  try {
    const response = await post<any>(
      ENDPOINT.auth.forgetPasswordChangePassword,
      body
    );
    if (response) {
      dispatch(ForgetPasswordChangePasswordSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(ForgetPasswordChangePasswordFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(ForgetPasswordChangePasswordFailure("Error"));
  }
};
