import { API } from "../../../config/apiCalls";
import {
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
  getSuccess,
  patchRequest,
  postRequest,
} from "../../../utils/baseApi";
import { getFromStorage } from "../../../utils/storage";
import {
  REQUIREMENT_FORM,
  REQUIREMENT_FORM_SUCCESS,
  REQUIREMENT_FORM_FAILURE,
  GET_REQUIREMENT_FORM,
  GET_REQUIREMENT_FORM_SUCCESS,
  GET_REQUIREMENT_FORM_FAILURE,
  UPDATE_REQUIREMENR_FORM,
  UPDATE_REQUIREMENR_FORM_SUCCESS,
  UPDATE_REQUIREMENR_FORM_FAILURE,
} from "./constants";

export const requirementFormApi = async (dispatch, body, onSuccess) => {
  dispatch({ type: REQUIREMENT_FORM });
  await postRequest(`${API.marketingRequirementForSale.requirementForm}`, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: REQUIREMENT_FORM_SUCCESS, payload: response.data });
        getSuccess(response.data);
        onSuccess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: REQUIREMENT_FORM_FAILURE, error: err.response.data });
    });
};
export const getRequirementFormApi = async (dispatch, pageLimit) => {
  dispatch({ type: GET_REQUIREMENT_FORM });
  await getRequest(
    `${API.marketingRequirementForSale.requirementForm}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_REQUIREMENT_FORM_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_REQUIREMENT_FORM_FAILURE,
        error: err.response.data,
      });
    });
};
export const updateRequirementFormApi = async (
  dispatch,
  body,
  onSuccess,
  id
) => {
  dispatch({ type: UPDATE_REQUIREMENR_FORM });
  await patchRequest(
    `${API.marketingRequirementForSale.requirementForm}/${id}`,
    body
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: UPDATE_REQUIREMENR_FORM_SUCCESS,
          payload: response.data,
        });
        getSuccess(response.data);
        onSuccess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: UPDATE_REQUIREMENR_FORM_FAILURE,
        error: err.response.data,
      });
    });
};
