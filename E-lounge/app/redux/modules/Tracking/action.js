import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  SALE_USER_INVENTORIES_BY_ELOUNGE,
  SALE_USER_INVENTORIES_BY_ELOUNGE_SUCCESS,
  SALE_USER_INVENTORIES_BY_ELOUNGE_FAILURE,
  SIGN_UP_COUNTS,
  SIGN_UP_COUNTS_SUCCESS,
  SIGN_UP_COUNTS_FAILURE,
  SUBCRIBER_COUNTS,
  SUBCRIBER_COUNTS_SUCCESS,
  SUBCRIBER_COUNTS_FAILURE,
  HISTORY_FOR_MANAGEMENT,
  HISTORY_FOR_MANAGEMENT_SUCCESS,
  HISTORY_FOR_MANAGEMENT_FAILURE,
  CLEAR_HISTORY_FOR_MANAGEMENT,
  MY_TRANSACTION_HISTORY,
  MY_TRANSACTION_HISTORY_SUCCESS,
  MY_TRANSACTION_HISTORY_FAILURE,
  GET_LEAD_LIST_FOR_DROP_DOWN,
  GET_LEAD_LIST_FOR_DROP_DOWN_SUCCESS,
  GET_LEAD_LIST_FOR_DROP_DOWN_FAILURE,
  GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS,
  GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_SUCCESS,
  GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_FAILURE,
  CLEAR_GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS,
} from "./constants";

export const saleUserInventoriesByELoungeAction = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue
) => {
  dispatch({ type: SALE_USER_INVENTORIES_BY_ELOUNGE });
  await getRequest(
    `${API.tracking.saleUserInventoriesByELounge}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&startDate=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: SALE_USER_INVENTORIES_BY_ELOUNGE_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: SALE_USER_INVENTORIES_BY_ELOUNGE_FAILURE,
        error: err.response.data,
      });
    });
};
export const getSignUpCountsApi = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue,
  id
) => {
  dispatch({ type: SIGN_UP_COUNTS });
  await getRequest(
    `${API.tracking.signUpCounts}/${id}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&date=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: SIGN_UP_COUNTS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: SIGN_UP_COUNTS_FAILURE, error: err.response.data });
    });
};

export const subscriberCountsApi = async (
  dispatch,
  pageLimit,
  fullName,
  dateValue,
  id
) => {
  dispatch({ type: SUBCRIBER_COUNTS });
  await getRequest(
    `${API.tracking.subscriberCounts}/${id}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${fullName ? `&fullName=${fullName}` : ""}${
      dateValue ? `&date=${dateValue}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: SUBCRIBER_COUNTS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: SUBCRIBER_COUNTS_FAILURE, error: err.response.data });
    });
};
export const getAllTransactionHistoryForManagementApi = async (
  dispatch,
  pageLimit
) => {
  let eloungeid = JSON.parse(localStorage.getItem("user")).elounge.id;

  dispatch({ type: HISTORY_FOR_MANAGEMENT });
  await getRequest(
    `${API.tracking.getAllTransactionHistoryForManagement}/${eloungeid}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: HISTORY_FOR_MANAGEMENT_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: HISTORY_FOR_MANAGEMENT_FAILURE,
        error: err.response.data,
      });
    });
};

export const getAllMyTransactionApi = async (dispatch, pageLimit) => {
  dispatch({ type: MY_TRANSACTION_HISTORY });
  await getRequest(
    `${API.tracking.getAllMyTransaction}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: MY_TRANSACTION_HISTORY_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: MY_TRANSACTION_HISTORY_FAILURE,
        error: err.response.data,
      });
    });
};
export const getLeadListForDropDownApi = async (dispatch, pageLimit) => {
  dispatch({ type: GET_LEAD_LIST_FOR_DROP_DOWN });
  await getRequest(`${API.tracking.getLeadListForDropDown}`)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_LEAD_LIST_FOR_DROP_DOWN_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_LEAD_LIST_FOR_DROP_DOWN_FAILURE,
        error: err.response.data,
      });
    });
};

export const getAllAssignSaleUserByLeadIdForEloungeUsersApi = async (
  dispatch,
  eLoungeUserLeadId
) => {
  dispatch({ type: GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS });
  await getRequest(
    `${
      API.tracking.getAllAssignSaleUserByLeadIdForEloungeUsers
    }/${eLoungeUserLeadId}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_FAILURE,
        error: err.response.data,
      });
    });
};
