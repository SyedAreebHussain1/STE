import axios from "axios";
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SENDOTP,
  SENDOTP_FAILURE,
  SENDOTP_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
  TOUR_CHECK,
  TOUR_CHECK_FAILURE,
  TOUR_CHECK_SUCCESS,
  VERIFICATION,
  VERIFICATION_FAILURE,
  VERIFICATION_SUCCESS,
} from "./constants";
import { getError, patchRequest, postRequest } from "../../../utils/baseApi";
import { API } from "../../../config/apiCalls";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import { successMessage } from "../../../utils/message";

export const loginAction = async (body, dispatch, onLoginUnverifiedSuccess) => {
  dispatch({ type: LOGIN });
  await postRequest(API.auth.login, body)
    .then((response) => {
      if (response.data) {
        let token = response.data.data.token;
        const isVerified = response?.data?.data?.exsistingUser?.isVerified;
        if (isVerified) {
          // successMessage("Account Successfully login");
          let user = {
            id: response.data.data.exsistingUser.id,
            name: response.data.data.exsistingUser.freeLancerProfile.name,
            url: response.data.data.exsistingUser.freeLancerProfile.url,
            phone: response.data.data.exsistingUser.phone,
            email: response.data.data.exsistingUser.email,
            refCode: response.data.data.exsistingUser.refCode,
            isSuspend: response.data.data.exsistingUser.isSuspend,
            suspendReason: response.data.data.exsistingUser.suspendReason,
            // isSuspend: true,
            profilePic:
              response.data.data.exsistingUser.freeLancerProfile.profileUrl,
            whatsapp_no: response.data.data.exsistingUser.whatsapp_no,
            isOnBoardingComplete: response.data.data.exsistingUser.isTour,
          };
          setInStorage("token", token);
          setInStorage("user", user);

          dispatch({ type: LOGIN_SUCCESS, payload: user });
        } else {
          onLoginUnverifiedSuccess(response.data.data.exsistingUser.phone);
          // errorMessage("Please verify your account");
        }
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: LOGIN_FAILURE, error: err.response.data });
    });
};

export const signupAction = async (body, dispatch, onSuccess) => {
  dispatch({ type: SIGNUP });
  await postRequest(API.auth.singup, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
        onSuccess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: LOGIN_FAILURE, error: err.response.data });
    });
};

export const verifyOtpAction = async (body, dispatch) => {
  dispatch({ type: VERIFICATION });
  await postRequest(API.auth.verify, body)
    .then((response) => {
      if (response.data) {
        successMessage("Account Successfully verified");
        // successMessage("Account Successfully verified");
        let token = response.data.data.token;
        let user = {
          id: response.data.data.freeLancer.id,
          name: response.data.data.freeLancer.freeLancerProfile.name,
          phone: response.data.data.freeLancer.phone,
          email: response.data.data.freeLancer.email,
          refCode: response.data.data.freeLancer.refCode,
          isSuspend: response.data.data.freeLancer.isSuspend,
          suspendReason: response.data.data.freeLancer.suspendReason,
          profilePic:
            response.data.data.freeLancer.freeLancerProfile.profileUrl,
          whatsapp_no: response.data.data.freeLancer.whatsapp_no,
          isOnBoardingComplete: response.data.data.freeLancer.isTour,
        };
        setInStorage("token", token);
        setInStorage("user", user);
        dispatch({ type: VERIFICATION_SUCCESS, payload: response.data });
        dispatch({ type: LOGIN_SUCCESS, payload: user });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: VERIFICATION_FAILURE, error: err.response.data });
    });
};

export const sendOtpAction = async (body, onSucess, dispatch) => {
  dispatch({ type: SENDOTP });
  await postRequest(API.auth.sendOtp, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: SENDOTP_SUCCESS, payload: response.data });
        successMessage("Please check your phone for OTP code !");
        onSucess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: SENDOTP_FAILURE, error: err.response.data });
    });
};

export const tourCheckAction = async (dispatch, id) => {
  dispatch({ type: TOUR_CHECK });
  await patchRequest(`${API.auth.tourCheck}/${id}`)
    .then((response) => {
      if (response.data) {
        const user = getFromStorage("user");
        const newUser = { ...user, isOnBoardingComplete: true };
        dispatch({ type: TOUR_CHECK_SUCCESS, payload: response.data });
        dispatch({ type: LOGIN_SUCCESS, payload: newUser });

        setInStorage("user", newUser);
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: TOUR_CHECK_FAILURE, error: err.response.data });
    });
};
