import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  GET_ALL_ASSIGNED_AGENCIES,
  GET_ALL_ASSIGNED_AGENCIES_FAILURE,
  GET_ALL_ASSIGNED_AGENCIES_LEAD,
  GET_ALL_ASSIGNED_AGENCIES_LEAD_FAILURE,
  GET_ALL_ASSIGNED_AGENCIES_LEAD_SUCCESS,
  GET_ALL_ASSIGNED_AGENCIES_MANAGER,
  GET_ALL_ASSIGNED_AGENCIES_MANAGER_FAILURE,
  GET_ALL_ASSIGNED_AGENCIES_MANAGER_SUCCESS,
  GET_ALL_ASSIGNED_AGENCIES_SUCCESS,
} from "./constants";

export const getAllAssignedAgenciesAction = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_ASSIGNED_AGENCIES });
  await getRequest(
    `${API.assignedAgencies.sale}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_ASSIGNED_AGENCIES_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_ASSIGNED_AGENCIES_FAILURE,
        error: err.response.data,
      });
    });
};

export const getAssignedAgenciesLeadAction = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue
) => {
  dispatch({ type: GET_ALL_ASSIGNED_AGENCIES_LEAD });
  await getRequest(
    `${API.assignedAgencies.lead}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&date=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_ASSIGNED_AGENCIES_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_ASSIGNED_AGENCIES_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};

export const getAssignedAgenciesManager = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue,
  id
) => {
  dispatch({ type: GET_ALL_ASSIGNED_AGENCIES_MANAGER });
  await getRequest(
    `${API.assignedAgencies.manager}/${id}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&date=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_ALL_ASSIGNED_AGENCIES_MANAGER_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_ALL_ASSIGNED_AGENCIES_MANAGER_FAILURE, error: err.response.data });
    });
};
