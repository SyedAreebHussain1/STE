import {
  createBusinessPlan,
  createBusinessPlanFailure,
  createBusinessPlanSuccess,
  updateBusinessPlan,
  updateBusinessPlanFailure,
  updateBusinessPlanSuccess,
} from "../../../redux/slices/BusinessPlan/createBusinessPlanSlice";
import {
  deleteBusinessPlan,
  deleteBusinessPlanFailure,
  deleteBusinessPlanSuccess,
} from "../../../redux/slices/BusinessPlan/deleteBusinessPlanSlice";
import {
  getAllBusinessPlansByBusinessId,
  getAllBusinessPlansByBusinessIdFailure,
  getAllBusinessPlansByBusinessIdSuccess,
} from "../../../redux/slices/BusinessPlan/getAllBusinessPlansByBusinessIdSlice";
import {
  getBusinessPlanById,
  getBusinessPlanByIdFailure,
  getBusinessPlanByIdSuccess,
} from "../../../redux/slices/BusinessPlan/getBusinessPlanByIdSlice";
import {
  updateBusinessLocalisation,
  updateBusinessLocalisationFailure,
  updateBusinessLocalisationSuccess,
} from "../../../redux/slices/BusinessPlan/updateBusinessLocalisationSlice";

import {
  getBusinessAnswersComplete,
  getBusinessAnswersCompleteFailure,
  getBusinessAnswersCompleteSuccess,
} from "../../../redux/slices/BusinessPlan/getBusinessAnswersComplete";
import { AppDispatch } from "../../../redux/store";
import { del, get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getBusinessPlanByIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getBusinessPlanById());
  try {
    const apiString = `${ENDPOINT.business.businessPlan}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getBusinessPlanByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getBusinessPlanByIdFailure("Error"));
  }
};

export const getAllBusinessPlansByBusinessIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getAllBusinessPlansByBusinessId());
  try {
    const apiString = `${ENDPOINT.business.getBusinessPlans}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getAllBusinessPlansByBusinessIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllBusinessPlansByBusinessIdFailure("Error"));
  }
};

export const updateBusinessLocalisationApi = async (
  dispatch: AppDispatch,
  id: any,
  body: { languageId?: number; currencyId?: number; country?: string },
  onClose: any
) => {
  dispatch(updateBusinessLocalisation());
  try {
    const apiString = `${ENDPOINT.business.updateBusinessPlan}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateBusinessLocalisationSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(updateBusinessLocalisationFailure("Error"));
  }
};

export const createBusinessPlanApi = async (
  dispatch: AppDispatch,
  body: {
    title: string;
    description: string;
    languageId: number;
    businessId: number;
  },
  onClose: any
) => {
  dispatch(createBusinessPlan());
  try {
    const apiString = `${ENDPOINT.business.businessPlan}`;
    const response = await post<any>(apiString, body);
    dispatch(createBusinessPlanSuccess(response));
    successMessage(response?.message);
    onClose(response);
  } catch (err) {
    getError(err);
    dispatch(createBusinessPlanFailure("Error"));
  }
};

export const updateBusinessPlanApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any
) => {
  dispatch(updateBusinessPlan());
  try {
    const apiString = `${ENDPOINT.business.businessPlan}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateBusinessPlanSuccess(response));
    successMessage(response?.message);
    onClose(response);
  } catch (err) {
    getError(err);
    dispatch(updateBusinessPlanFailure("Error"));
  }
};

export const deleteBusinessPlanApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: () => void
) => {
  dispatch(deleteBusinessPlan());
  try {
    const apiString = `${ENDPOINT.business.businessPlan}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteBusinessPlanSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteBusinessPlanFailure("Error"));
  }
};
