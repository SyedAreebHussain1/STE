import {
  get,
  getError,
  getRequest,
  patch,
  post,
  update,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
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
} from "../../slices/auth/authSlice";
import {
  createAgency,
  createAgencyFailure,
  createAgencySuccess,
} from "../../slices/auth/createAgencySlice";
import {
  createUser,
  createUserFailure,
  createUserSuccess,
} from "../../slices/auth/createUserSlice";
import {
  getAgencyByAgencyCode,
  getAgencyByAgencyCodeFailure,
  getAgencyByAgencyCodeSuccess,
} from "../../slices/auth/getAgencyByAgencyCodeSlice";
import {
  getProfile,
  getProfileFailure,
  getProfileSuccess,
} from "../../slices/auth/getProfileSlice";
import {
  joinAgencyByAgencyCode,
  joinAgencyByAgencyCodeFailure,
  joinAgencyByAgencyCodeSuccess,
} from "../../slices/auth/joinAgencyByAgencyCodeSlice";
import {
  resendOtp,
  resendOtpFailure,
  resendOtpSuccess,
} from "../../slices/auth/resendOtpSlice";
import {
  verifyUserCreateOtp,
  verifyUserCreateOtpFailure,
  verifyUserCreateOtpSuccess,
} from "../../slices/auth/verifyUserCreateOtpSlice";
import {
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
} from "../../slices/auth/updateProfileSlice";
import { AppDispatch } from "../../store";

export const LoginApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: any
) => {
  dispatch(login());
  try {
    const response = await post<any>(ENDPOINT.auth.login, body);
    if (response) {
      let token = response?.data?.token;
      let user = { ...response.data, availablity: true };
      if (response?.data?.agencyId === null) {
        setInStorage("token", token);
        dispatch(loginSuccess(user));
        onSuccess();
        dispatch(isSetupTrue(false));
      } else if (response?.data?.role === "pending") {
        errorMessage(
          "Your Account Have Been Created Please Wait For Agency Owner Approval"
        );
        dispatch(loginFailure("Error"));
      } else {
        setInStorage("token", token);
        setInStorage("user", user);
        dispatch(loginSuccess(user));
      }
    } else {
      dispatch(loginFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(loginFailure("Error"));
  }
};

export const RegisterUserApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(signUp());
  try {
    const response = await post<any>(ENDPOINT.auth.signUp, body);
    if (response) {
      let token = response?.data?.accessToken;
      let user = {
        user: response?.data?.user,
        agentProfile: response?.data?.agentProfile,
      };
      setInStorage("token", token);
      successMessage(response?.message);
      dispatch(signUpSuccess(user));
      onSuccess();
    } else {
      dispatch(signUpFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(signUpFailure("Error"));
  }
};

export const createUserApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void,
  userData: any
) => {
  dispatch(createUser());
  try {
    const response = await post<any>(ENDPOINT.auth.preSignUp, body);
    if (response) {
      dispatch(createUserSuccess({ ...response.data, user: userData }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(createUserFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(createUserFailure("Error"));
  }
};

export const resendOtpApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(resendOtp());
  try {
    const response = <any>(ENDPOINT.auth.resendOtp, body);
    dispatch(resendOtpSuccess(response.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(resendOtpFailure("Error"));
  }
};

export const verifyUserCreateOtpApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(verifyUserCreateOtp());
  try {
    const response = await post<any>(ENDPOINT.auth.verifyUserCreateOtp, body);
    dispatch(verifyUserCreateOtpSuccess(response.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(verifyUserCreateOtpFailure("Error"));
  }
};

export const createAgencyApi = async (
  body: any,
  dispatch: AppDispatch,
  userData: any,
  onSuccess: () => void,
  type: string
) => {
  dispatch(createAgency());
  try {
    const response = await post<any>(ENDPOINT.auth.createAgency, body);
    dispatch(createAgencySuccess(response.data));
    successMessage(response?.message);
    onSuccess();
    dispatch(signUpFailure(""));
    if (type === "owner") {
      let user = { ...response.data, ...userData };
      setInStorage("user", user);
      dispatch(loginSuccess(user));
    }
  } catch (err) {
    getError(err);
    dispatch(createAgencyFailure("Error"));
  }
};

export const getAgencyByAgencyCodeApi = async (
  agencyCode: any,
  dispatch: AppDispatch
) => {
  dispatch(getAgencyByAgencyCode());
  try {
    const response = await post<any>(
      `${ENDPOINT.auth.getAgencyByAgencyCode}?agencyCode=${agencyCode}`,
      {}
    );
    dispatch(getAgencyByAgencyCodeSuccess(response.data));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(getAgencyByAgencyCodeFailure("Error"));
  }
};

export const joinAgencyByAgencyCodeApi = async (
  body: any,
  dispatch: AppDispatch,
  userData: any,
  onSuccess: () => void
) => {
  dispatch(joinAgencyByAgencyCode());
  try {
    const response = await post<any>(
      `${ENDPOINT.auth.joinAgencyByAgencyCode}`,
      body
    );
    dispatch(joinAgencyByAgencyCodeSuccess(response.data));
    successMessage(response?.message);
    onSuccess();

    dispatch(signUpFailure(""));
  } catch (err) {
    getError(err);
    dispatch(joinAgencyByAgencyCodeFailure("Error"));
  }
};

export const getProfileApi = async (dispatch: AppDispatch) => {
  dispatch(getProfile());
  try {
    const response = await getRequest<any>(`${ENDPOINT.auth.getProfile}`);

    dispatch(getProfileSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProfileFailure("Error"));
  }
};


export const updateProfileApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess:any
) => {
  dispatch(updateProfile());
  try {
    const response = await patch<any>(
      `${ENDPOINT.auth.getProfile}`,
      body
    );

    dispatch(updateProfileSuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateProfileFailure("Error"));
  }
};
