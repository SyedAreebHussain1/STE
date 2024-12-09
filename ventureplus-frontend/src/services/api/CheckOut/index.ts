import {
  addOnPay,
  addOnPayFailure,
  addOnPaySuccess,
} from "../../../redux/slices/CheckOut/addOnPaySlice";
import {
  checkOut,
  checkOutFailure,
  checkOutSuccess,
} from "../../../redux/slices/CheckOut/CheckOutSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { localizeMessageTime, successMessage } from "../../../utils/message";

export const checkOutApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (e: any) => void,
) => {
  dispatch(checkOut());
  try {
    const response = await post<any>(
      ENDPOINT.checkOutPost.createSubscription,
      body,
    );
    dispatch(checkOutSuccess(response.data));
    successMessage(response.message);
    onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(checkOutFailure("An unexpected error occurred"));
  }
};

export const checkOutUpdateApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (e: any) => void,
) => {
  dispatch(checkOut());
  try {
    const response = await patch<any>(
      ENDPOINT.checkOutPost.updateSubscription,
      body,
    );
    dispatch(checkOutSuccess(response.data));
    successMessage(localizeMessageTime(response.message));
    onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(checkOutFailure("An unexpected error occurred"));
  }
};

export const addOnPayApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: (e: any) => void,
) => {
  dispatch(addOnPay());
  try {
    const response = await post<any>(ENDPOINT.checkOutPost.addOnPay, body);
    dispatch(addOnPaySuccess(response.data));
    if ("Subscription Activated" === response.message) {
      successMessage("Addon Activated");
    } else {
      successMessage(response.message);
    }
    onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(addOnPayFailure("An unexpected error occurred"));
  }
};

export const verifyCouponApi = async (
  coupon: string,
  onSuccess: (e: any) => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const response = await get<any>(
      `${ENDPOINT.checkOutPost.verifyCoupon}/${coupon}`,
    );
    onSuccess(response);
  } catch (err) {
    getError(err);
    setLoading(false);
  }
};
