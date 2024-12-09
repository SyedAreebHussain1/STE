import { getError, patchRequest } from "../../../utils/baseApi";

import { API } from "../../../config/apiCalls";
import {
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS,
} from "./constants";
import { successMessage } from "../../../utils/message";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import { LOGIN_SUCCESS } from "../Auth/constants";

export const updateProfileApi = async (dispatch, body, id) => {
  dispatch({ type: UPDATE_PROFILE });
  await patchRequest(`${API.profile.updateProfile}/${id}`, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: response.data,
        });
        let oldUser = getFromStorage("user");
        let user = {
          ...oldUser,
          name: body.fullName,
        };
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
