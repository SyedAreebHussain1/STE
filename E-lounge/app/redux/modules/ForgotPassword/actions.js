import { API } from "../../../config/apiCalls";
import {
  getError,
  patchRequest,
  patchRequestWithHeader,
  postRequest,
} from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_OTP_VERIFY,
  FORGOT_PASSWORD_OTP_VERIFY_FAILURE,
  FORGOT_PASSWORD_OTP_VERIFY_SUCCESS,
  FORGOT_PASSWORD_WITH_EMAIL,
  FORGOT_PASSWORD_WITH_EMAIL_FAILURE,
  FORGOT_PASSWORD_WITH_EMAIL_SUCCESS,
} from "./constants";

export const forgotPasswordWIthEmailAction = async (
  body,
  onSucess,
  dispatch
) => {
  dispatch({ type: FORGOT_PASSWORD_WITH_EMAIL });
  await postRequest(API.forgetPassword.withEmail, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: FORGOT_PASSWORD_WITH_EMAIL_SUCCESS,
          payload: response.data,
        });
        successMessage("Please check your phone for OTP code !");
        onSucess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: FORGOT_PASSWORD_WITH_EMAIL_FAILURE,
        error: err.response.data,
      });
    });
};

export const forgotPasswordVerifyOtpAction = async (
  body,
  onSucess,
  dispatch
) => {
  dispatch({ type: FORGOT_PASSWORD_OTP_VERIFY });
  await postRequest(API.forgetPassword.verifyOtp, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: FORGOT_PASSWORD_OTP_VERIFY_SUCCESS,
          payload: response.data,
        });
        onSucess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: FORGOT_PASSWORD_OTP_VERIFY_FAILURE,
        error: err.response.data,
      });
    });
};
export const changePasswordAction = async (body, onSucess, dispatch, token) => {
  dispatch({ type: CHANGE_PASSWORD });
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  await patchRequestWithHeader(API.forgetPassword.change, body, headers)
    .then((response) => {
      if (response.data) {
        dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: response.data });
        onSucess();
      }
      successMessage(response?.data?.message);
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: CHANGE_PASSWORD_FAILURE, error: err.response.data });
    });
};
