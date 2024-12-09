import { API } from "../../../config/apiCalls";
import { getError, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  POST_SUSPEND_REQUEST,
  POST_SUSPEND_REQUEST_FAILURE,
  POST_SUSPEND_REQUEST_SUCCESS,
} from "./constants";

export const submitSuspendRequest = async (freeLancerReason, dispatch) => {
  dispatch({ type: POST_SUSPEND_REQUEST });
  await postRequest(
    `${API.auth.suspendRequest}?freeLancerReason=${freeLancerReason}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: POST_SUSPEND_REQUEST_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      onFailure();
      dispatch({
        type: POST_SUSPEND_REQUEST_FAILURE,
        error: err.response.data,
      });
    });
};
