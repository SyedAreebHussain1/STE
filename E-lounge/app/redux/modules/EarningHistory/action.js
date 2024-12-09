import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  GET_ALL_SIGNUPS,
  GET_ALL_SIGNUPS_FAILURE,
  GET_ALL_SIGNUPS_SUCCESS,
  GET_ALL_SUBSCRIBERS,
  GET_ALL_SUBSCRIBERS_FAILURE,
  GET_ALL_SUBSCRIBERS_SUCCESS,
  GET_ALL_TransactionSaleUser,
  GET_ALL_TransactionSaleUser_FAILURE,
  GET_ALL_TransactionSaleUser_SUCCESS,
  GET_PW_INVENTORY,
  GET_PW_INVENTORY_FAILURE,
  GET_PW_INVENTORY_SUCCESS,
  GET_SALE_ORDER_BY_ID,
  GET_SALE_ORDER_BY_ID_FAILURE,
  GET_SALE_ORDER_BY_ID_SUCCESS,
  GET_TOKEN_BY_ID,
  GET_TOKEN_BY_ID_FAILURE,
  GET_TOKEN_BY_ID_SUCCESS,
  GET_ALL_TRANSACTION_HISTORY,
  GET_ALL_TRANSACTION_HISTORY_SUCCESS,
  GET_ALL_TRANSACTION_HISTORY_FAILURE,
  GET_ALL_TARGET,
  GET_ALL_TARGET_SUCCESS,
  GET_ALL_TARGET_FAILURE,
} from "./constants";

export const getAllSubscribersAction = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_SUBSCRIBERS });
  await getRequest(
    `${API.earningHistory.subscribers}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_ALL_SUBSCRIBERS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_ALL_SUBSCRIBERS_FAILURE, error: err.response.data });
    });
};

export const getAllSignUpsAction = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_SIGNUPS });
  await getRequest(
    `${API.earningHistory.signups}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_ALL_SIGNUPS_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_ALL_SIGNUPS_FAILURE, error: err.response.data });
    });
};

export const getAllTransactionHistoryAction = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_TransactionSaleUser });
  await getRequest(
    `${API.dashboard.walletList}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_TransactionSaleUser_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_TransactionSaleUser_FAILURE,
        error: err.response.data,
      });
    });
};

export const getPwInventoryAction = async (dispatch, pageLimit) => {
  dispatch({ type: GET_PW_INVENTORY });
  await getRequest(
    `${API.earningHistory.getPwInventory}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_PW_INVENTORY_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_PW_INVENTORY_FAILURE, error: err.response.data });
    });
};

export const getSaleOrderByIdAction = async (dispatch, id) => {
  dispatch({ type: GET_SALE_ORDER_BY_ID });
  await getRequest(`${API.earningHistory.getSaleOrderById}/${id}`)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_SALE_ORDER_BY_ID_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_SALE_ORDER_BY_ID_FAILURE,
        error: err.response.data,
      });
    });
};

export const getTokenByIdAction = async (dispatch, id) => {
  dispatch({ type: GET_TOKEN_BY_ID });
  await getRequest(`${API.earningHistory.getTokenById}/${id}`)
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_TOKEN_BY_ID_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_TOKEN_BY_ID_FAILURE, error: err.response.data });
    });
};
export const getAllTagetAction = async (dispatch, id) => {
  dispatch({ type: GET_ALL_TARGET });
  await getRequest(`${API.earningHistory.getAllTaget}`)
    .then((response) => {
      if (response.data) {
        dispatch({ type: GET_ALL_TARGET_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_ALL_TARGET_FAILURE, error: err.response.data });
    });
};
export const getAllTransactionHistoryApi = async (dispatch, pageLimit) => {
  let eloungeid = JSON.parse(localStorage.getItem("user")).elounge.id;
  dispatch({ type: GET_ALL_TRANSACTION_HISTORY });
  // await getRequest(
  //   `${API.earningHistory.getAllTransactionHistory}/${eloungeid}?page=${
  //     pageLimit.page
  //   }&limit=${pageLimit.limit}`
  // )
  await getRequest(
    `${API.earningHistory.getAllTransactionHistory}?page=${
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
