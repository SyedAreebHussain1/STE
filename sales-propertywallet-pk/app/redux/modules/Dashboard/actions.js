import {
  GET_COUNTS,
  GET_COUNTS_FAILURE,
  GET_COUNTS_SUCCESS,
  GET_EARNING_HISTORY,
  GET_EARNING_HISTORY_SUCCESS,
  GET_EARNING_HISTORY_FAILURE,
  GET_ALL_SESSIONS,
  GET_ALL_SESSIONS_SUCCESS,
  GET_ALL_SESSIONS_FAILURE,
  GET_ALL_BOOKINGS,
  GET_ALL_BOOKINGS_SUCCESS,
  GET_ALL_BOOKINGS_FAILURE,
  DELETE_SESSION,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION_FAILURE,
  ADD_SESSION,
  ADD_SESSION_SUCCESS,
  ADD_SESSION_FAILURE,
} from "./constants";

import {
  deleteRequest,
  getError,
  getRequest,
  postRequest,
} from "../../../utils/baseApi";
import { API } from "../../../config/apiCalls";

export const getCountsAction = async (dispatch) => {
  dispatch({ type: GET_COUNTS });
  await getRequest(API.dashboard.soldPackageGraph)
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_COUNTS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_COUNTS_FAILURE, error: err.response.data });
    });
};

export const getEarningHistory = async (dispatch, pageLimit) => {
  dispatch({ type: GET_EARNING_HISTORY });
  await getRequest(
    `${API.dashboard.earningHistory}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_EARNING_HISTORY_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_EARNING_HISTORY_FAILURE, error: err.response.data });
    });
};
export const getAllSessions = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_SESSIONS });
  await getRequest(
    `${API.dashboard.sessionsList}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_ALL_SESSIONS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_ALL_SESSIONS_FAILURE, error: err.response.data });
    });
};
export const getAllBookedSessions = async (dispatch, pageLimit, email) => {
  dispatch({ type: GET_ALL_BOOKINGS });
  await getRequest(
    `${API.dashboard.manageBooking}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }&email=${email}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_BOOKINGS_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_BOOKINGS_FAILURE,
        error: err.response.data,
      });
    });
};
export const deleteSession = async (
  dispatch,
  id,
  onSuccess,
  onFailure,
  index
) => {
  dispatch({ type: DELETE_SESSION });
  await deleteRequest(`${API.dashboard.deleteMeeting}/${id}`)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: DELETE_SESSION_SUCCESS,
          payload: response.data,
        });
        onSuccess(index);
      }
    })
    .catch((err) => {
      getError(err);
      onFailure(index);
      dispatch({
        type: DELETE_SESSION_FAILURE,
        error: err.response.data,
      });
    });
};
export const addSession = async (
  dispatch,
  body,
  onSuccess,
  onFailure,
  index
) => {
  dispatch({ type: ADD_SESSION });
  await postRequest(API.dashboard.sessionBookNow, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: ADD_SESSION_SUCCESS,
          payload: response.data,
        });
        onSuccess(index);
      }
    })
    .catch((err) => {
      getError(err);
      onFailure(index);
      dispatch({
        type: ADD_SESSION_FAILURE,
        error: err.response.data,
      });
    });
};
