import { fileRequest, getError, patchRequest } from "../../../utils/baseApi";
import { API } from "../../../config/apiCalls";
import {
  S3_URL,
  S3_URL_FAILURE,
  S3_URL_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
} from "./constants";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import { LOGIN_SUCCESS } from "../Auth/constants";
import { successMessage } from "../../../utils/message";

export const S3api = async (dispatch, body, onSuccess) => {
  dispatch({ type: S3_URL });
  await fileRequest(API.auth.upload, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: S3_URL_SUCCESS,
          payload: response.data,
        });
        onSuccess(response.data);
      }
    })
    .catch((err) => {
      getError(err);

      dispatch({
        type: S3_URL_FAILURE,
        error: err.response.data,
      });
    });
};

export const updateProfileApi = async (dispatch, body) => {
  dispatch({ type: UPDATE_PROFILE });
  await patchRequest(API.profile.updateProfile, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: response.data,
        });
        let oldUser = getFromStorage("user");
        let user = {
          ...oldUser,
          name: response.data.data.freeLancerProfile.name,
          phone: response.data.data.phone,
          email: response.data.data.email,
          whatsapp_no: response.data.data.whatsapp_no,
        };
        if (response.data.data.freeLancerProfile.profileUrl !== null) {
          user.profilePic = response.data.data.freeLancerProfile.profileUrl;
        }
        if (response.data.data.freeLancerProfile.url !== null) {
          user.url = response.data.data.freeLancerProfile.url;
        }
        setInStorage("user", user);

        dispatch({ type: LOGIN_SUCCESS, payload: user });
        successMessage("Successfully updated profile");
      }
    })
    .catch((err) => {
      getError(err);

      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        error: err.response.data,
      });
    });
};
export const updatePasswordApi = async (dispatch, body, onSuccess) => {
  dispatch({ type: UPDATE_PASSWORD });
  await patchRequest(API.profile.changePassword, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: UPDATE_PASSWORD_SUCCESS,
          payload: response.data,
        });

        onSuccess();
        successMessage("Successfully updated password");
      }
    })
    .catch((err) => {
      getError(err);

      dispatch({
        type: UPDATE_PASSWORD_FAILURE,
        error: err.response.data,
      });
    });
};
