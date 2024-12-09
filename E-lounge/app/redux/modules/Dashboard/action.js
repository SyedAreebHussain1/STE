import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import { GET_SALE_ORDER, GET_SALE_ORDER_COMMISSON, GET_SALE_ORDER_COMMISSON_FAILURE, GET_SALE_ORDER_COMMISSON_SUCCESS, GET_SALE_ORDER_FAILURE, GET_SALE_ORDER_GRAPH, GET_SALE_ORDER_GRAPH_FAILURE, GET_SALE_ORDER_GRAPH_SUCCESS, GET_SALE_ORDER_SUCCESS } from "./constants";

export const getSaleOrderAction = async (
    dispatch,
    pageLimit,
    loungeId
  ) => {
    dispatch({ type: GET_SALE_ORDER });
    await getRequest(
      `${API.dashboard.getSaleOrder}/${loungeId}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
      .then((response) => {
        if (response?.data) {
          dispatch({
            type: GET_SALE_ORDER_SUCCESS,
            payload: response?.data,
          });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({
          type: GET_SALE_ORDER_FAILURE,
          error: err?.response?.data,
        });
      });
  };

  export const getSaleOrderGraphDataAction = async (
    dispatch,
    monthName,
    loungeId
  ) => {
    dispatch({ type: GET_SALE_ORDER_GRAPH });
    await getRequest(
      `${API.dashboard.getSaleOrderGraphData}?monthName=${monthName}&loungeId=${loungeId}`
    )
      .then((response) => {
        if (response?.data) {
          dispatch({
            type: GET_SALE_ORDER_GRAPH_SUCCESS,
            payload: response?.data,
          });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({
          type: GET_SALE_ORDER_GRAPH_FAILURE,
          error: err?.response?.data,
        });
      });
  };

  export const getSalesOrderAndCommissonAction = async (
    dispatch,
    loungeId
  ) => {
    dispatch({ type: GET_SALE_ORDER_COMMISSON });
    await getRequest(
      `${API.dashboard.getSalesOrderAndCommisson}/${loungeId}`
    )
      .then((response) => {
        if (response?.data) {
          dispatch({
            type: GET_SALE_ORDER_COMMISSON_SUCCESS,
            payload: response?.data,
          });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({
          type: GET_SALE_ORDER_COMMISSON_FAILURE,
          error: err?.response?.data,
        });
      });
  };