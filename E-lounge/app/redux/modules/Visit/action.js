import { API } from "../../../config/apiCalls";
import {
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from "../../../utils/baseApi";
import { getFromStorage } from "../../../utils/storage";

import {
  ADD_NEW_VISIT,
  ADD_NEW_VISIT_FAILURE,
  ADD_NEW_VISIT_SUCCESS,
  DELETE_VISIT,
  DELETE_VISIT_FAILURE,
  DELETE_VISIT_SUCCESS,
  EDIT_VISIT,
  EDIT_VISIT_FAILURE,
  EDIT_VISIT_SUCCESS,
  GET_ALL_VISITS,
  GET_ALL_VISITS_FAILURE,
  GET_ALL_VISITS_SUCCESS,
  UPLOAD_IMAGES,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGES_SUCCESS,
} from "./constants";

export const getAllVisitsAction = async (dispatch, pageLimit, flVisit) => {
  dispatch({ type: GET_ALL_VISITS });
  await getRequest(
    `${API.visits.getAll}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }&eLoungId=${getFromStorage("user")?.eLoungeId}&flVisit=${flVisit}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_ALL_VISITS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_ALL_VISITS_FAILURE, error: err.response.data });
    });
};

export const addNewVisitsAction = async (dispatch, body, onSuccess) => {
  dispatch({ type: ADD_NEW_VISIT });
  await postRequest(`${API.visits.addNewVisit}`, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: ADD_NEW_VISIT_SUCCESS, payload: response.data });
        onSuccess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: ADD_NEW_VISIT_FAILURE, error: err.response.data });
    });
};

export const editVisitsAction = async (dispatch, body, onSuccess, id) => {
  dispatch({ type: EDIT_VISIT });
  await patchRequest(`${API.visits.editVisit}/${id}`, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: EDIT_VISIT_SUCCESS, payload: response.data });
        onSuccess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: EDIT_VISIT_FAILURE, error: err.response.data });
    });
};

export const deleteVisitsAction = async (dispatch, id) => {
  dispatch({ type: DELETE_VISIT });
  await deleteRequest(`${API.visits.deleteVisit}/${id}`)
    .then((response) => {
      if (response.data) {
        dispatch({ type: DELETE_VISIT_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: DELETE_VISIT_FAILURE, error: err.response.data });
    });
};

export const uploadAttachments = async (dispatch, body, onSuccess, name) => {
  dispatch({ type: UPLOAD_IMAGES });
  await fileRequest(`${API.visits.uploadAtachments}`, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: UPLOAD_IMAGES_SUCCESS, payload: response.data });
        if (onSuccess) {
          onSuccess(response.data, name);
        }
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: UPLOAD_IMAGES_FAILURE, error: err.response.data });
    });
};
