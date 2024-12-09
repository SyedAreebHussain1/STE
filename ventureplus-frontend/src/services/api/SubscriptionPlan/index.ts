import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  getSubscriptionPlanById,
  getSubscriptionPlanByIdFailure,
  getSubscriptionPlanByIdSuccess,
} from "../../../redux/slices/SubscriptionPlan/getSubscriptionPlanByIdSlice";
import {
  getAddOns,
  getAddOnsFailure,
  getAddOnsSuccess,
} from "../../../redux/slices/SubscriptionPlan/getAddOnsSlice";
import {
  getSubscriptionPlan,
  getSubscriptionPlanFailure,
  getSubscriptionPlanSuccess,
} from "../../../redux/slices/SubscriptionPlan/getSubscriptionPlanSlice";
import {
  getUserSubscribedplan,
  getUserSubscribedplanFailure,
  getUserSubscribedplanSuccess,
} from "../../../redux/slices/SubscriptionPlan/getUserSubscribedplanSlice";

export const getSubscriptionPlanApi = async (dispatch: AppDispatch) => {
  dispatch(getSubscriptionPlan());
  try {
    const apiString = `${ENDPOINT.subscriptionPlan.getPackage}`;
    const response = await get<any>(apiString);
    dispatch(getSubscriptionPlanSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getSubscriptionPlanFailure("Error"));
  }
};

export const getSubscriptionPlanByIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getSubscriptionPlanById());
  try {
    const apiString = `${ENDPOINT.subscriptionPlan.getPackage}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getSubscriptionPlanByIdSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getSubscriptionPlanByIdFailure("Error"));
  }
};

export const getAddOnsApi = async (dispatch: AppDispatch) => {
  dispatch(getAddOns());
  try {
    const apiString = `${ENDPOINT.subscriptionPlan.getAddOns}`;
    const response = await get<any>(apiString);
    dispatch(getAddOnsSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAddOnsFailure("Error"));
  }
};

export const getUsersSubscribedPlanApi = async (dispatch: AppDispatch) => {
  dispatch(getUserSubscribedplan());
  try {
    const apiString = `${ENDPOINT.subscriptionPlan.getSubscribedPlan}`;
    const response = await get<any>(apiString);
    dispatch(getUserSubscribedplanSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getUserSubscribedplanFailure("Error"));
  }
};
