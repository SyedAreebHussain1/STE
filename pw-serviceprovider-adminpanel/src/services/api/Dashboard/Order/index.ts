import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  getServiceOrder,
  getServiceOrderSuccess,
  getServiceOrderFailure,
} from "../../../../store/slices/Dashboard/Order/getServiceOrdersSlice";
import {
  ordersRequests,
  ordersRequestsSuccess,
  ordersRequestsFailure,
} from "../../../../store/slices/Dashboard/Order/ordersRequestsSlice";
export const getServiceOrderApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getServiceOrder());
  try {
    const apiString = `${ENDPOINT.order.getServiceOrders}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getServiceOrderSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getServiceOrderFailure("Error"));
  }
};

export const ordersRequestsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(ordersRequests());
  try {
    const apiString = `${ENDPOINT.order.ordersRequests}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(ordersRequestsSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(ordersRequestsFailure("Error"));
  }
};
