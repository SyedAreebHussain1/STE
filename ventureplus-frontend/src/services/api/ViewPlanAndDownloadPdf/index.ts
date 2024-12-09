import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  businessPlanContentBusinessPlan,
  businessPlanContentBusinessPlanSuccess,
  businessPlanContentBusinessPlanFailure,
} from "../../../redux/slices/ViewPlanAndDownloadPdf/businessPlanContentBusinessPlanSlice";
import {
  isOnFreePlan,
  isOnFreePlanFailure,
  isOnFreePlanSuccess,
} from "../../../redux/slices/ViewPlanAndDownloadPdf/isOnFreePlanSlice";

export const businessPlanContentBusinessPlanApi = async (
  dispatch: AppDispatch,
  businessId: number
) => {
  dispatch(businessPlanContentBusinessPlan());
  try {
    const apiString = `${ENDPOINT.ViewPlanAndDownloadPdf.businessPlanContentBusinessPlan}/${businessId}`;
    const response = await get<any>(apiString);
    dispatch(businessPlanContentBusinessPlanSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(businessPlanContentBusinessPlanFailure("Error"));
  }
};

export const isOnFreePlanApi = async (dispatch: AppDispatch) => {
  dispatch(isOnFreePlan());
  try {
    const apiString = `${ENDPOINT.ViewPlanAndDownloadPdf.isOnFreePackage}`;
    const response = await get<any>(apiString);
    dispatch(isOnFreePlanSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(isOnFreePlanFailure("Error"));
  }
};
