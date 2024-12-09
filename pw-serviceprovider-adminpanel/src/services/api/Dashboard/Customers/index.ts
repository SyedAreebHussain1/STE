import {
  getAllCustomers,
  getAllCustomersFailure,
  getAllCustomersSuccess,
} from "../../../../store/slices/Dashboard/Customers/GetAllCustomersSlice";
import {
  getCustomerById,
  getCustomerByIdFailure,
  getCustomerByIdSuccess,
} from "../../../../store/slices/Dashboard/Customers/GetCustomerByIdSlice";
import { AppDispatch } from "../../../../store/store";
import { get, getError } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";

export const getAllCustomersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllCustomers());
  try {
    const apiString = `${ENDPOINT.customers.customers}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllCustomersSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllCustomersFailure("Error"));
  }
};
export const getCustomerByIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getCustomerById());
  try {
    const apiString = `${ENDPOINT.customers.customerById}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getCustomerByIdSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getCustomerByIdFailure("Error"));
  }
};
