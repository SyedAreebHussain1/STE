import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  GET_SUBSCRIBER_COUNTS_FOR_LEAD,
  GET_SUBSCRIBER_COUNTS_FOR_LEAD_SUCCESS,
  GET_SUBSCRIBER_COUNTS_FOR_LEAD_FAILURE,
  GET_SIGNUP_COUNTS_FOR_LEAD,
  GET_SIGNUP_COUNTS_FOR_LEAD_SUCCESS,
  GET_SIGNUP_COUNTS_FOR_LEAD_FAILURE,
  GET_ALL_SALE_USER_INVENTORIES_FOR_LEAD,
  GET_ALL_SALE_USER_INVENTORIES_FOR_LEAD_SUCCESS,
  GET_ALL_SALE_USER_INVENTORIES_FOR_LEAD_FAILURE,
  GET_ALL_TRANSACTION_HISTORY,
  GET_ALL_TRANSACTION_HISTORY_SUCCESS,
  GET_ALL_TRANSACTION_HISTORY_FAILURE,
} from "./constants";

export const getSignUpCountsForLeadAction = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue
) => {
  dispatch({ type: GET_SIGNUP_COUNTS_FOR_LEAD });
  await getRequest(
    `${API.monitoring.getSignUpCountsForLead}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&date=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_SIGNUP_COUNTS_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_SIGNUP_COUNTS_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};
export const getSubscriberCountsForLeadAction = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue
) => {
  dispatch({ type: GET_SUBSCRIBER_COUNTS_FOR_LEAD });
  await getRequest(
    `${API.monitoring.getSubscriberCountsForLead}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&date=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_SUBSCRIBER_COUNTS_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_SUBSCRIBER_COUNTS_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};
export const getAllSaleUserInventoriesForLeadAction = async (
  dispatch,
  pageLimit,
  fullName
) => {
  dispatch({ type: GET_ALL_SALE_USER_INVENTORIES_FOR_LEAD });
  await getRequest(
    `${API.monitoring.getAllSaleUserInventoriesForLead}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${fullName ? `&fullName=${fullName}` : ""}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_SALE_USER_INVENTORIES_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_SALE_USER_INVENTORIES_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};
export const getAllTransactionHistoryApi = async (dispatch, pageLimit) => {
  let eloungeid = JSON.parse(localStorage.getItem("user")).elounge.id;
  dispatch({ type: GET_ALL_TRANSACTION_HISTORY });
  await getRequest(
    `${API.monitoring.getAllTransactionHistory}/${eloungeid}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_TRANSACTION_HISTORY_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_TRANSACTION_HISTORY_FAILURE,
        error: err.response.data,
      });
    });
};
