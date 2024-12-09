import {
  GetPaymentMethod,
  GetPaymentMethodFailure,
  GetPaymentMethodSuccess,
} from "../../../redux/slices/PaymentMethod/GetPaymentMethodSlice";
import {
  PostPaymentMethod,
  PostPaymentMethodFailure,
  PostPaymentMethodSuccess,
} from "../../../redux/slices/PaymentMethod/PostPaymentMethodSlice";
import {
  updatePaymentMethod,
  updatePaymentMethodFailure,
  updatePaymentMethodSuccess,
} from "../../../redux/slices/PaymentMethod/updatePaymentMethodSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getPaymentMethodApi = async (dispatch: AppDispatch) => {
  dispatch(GetPaymentMethod());
  try {
    const apiString = `${ENDPOINT.checkOutPost.getPaymentMethod}`;
    const response = await get<any>(apiString);
    dispatch(GetPaymentMethodSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(GetPaymentMethodFailure("Error"));
  }
};

export const createPaymentMethodApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any
) => {
  dispatch(PostPaymentMethod());
  try {
    const apiString = `${ENDPOINT.checkOutPost.postPaymentMethod}`;
    const response = await post<any>(apiString, body);
    dispatch(PostPaymentMethodSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(PostPaymentMethodFailure("Error"));
  }
};

export const updatePaymentMethodApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any
) => {
  dispatch(updatePaymentMethod());
  try {
    const apiString = `${ENDPOINT.checkOutPost.updatePaymentMethod}`;
    const response = await patch<any>(apiString, body);
    dispatch(updatePaymentMethodSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(updatePaymentMethodFailure("Error"));
  }
};
