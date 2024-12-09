import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  postCreatePackageSlice,
  postCreatePackageSliceSuccess,
  postCreatePackageSliceFailure,
  getCreatePackageAdminSlice,
  getCreatePackageAdminSliceSuccess,
  getCreatePackageAdminSliceFailure,
  getPackageAddOnAdminSlice,
  getPackageAddOnAdminSliceSuccess,
  getPackageAddOnAdminSliceFailure,
  updateCreatePackage,
  updateCreatePackageSuccess,
  updateCreatePackageFailure,
} from "../../../../store/slices/Dashboard/CreatePackage/createPackageSlice";

export const postCreatePackageApi = async (
  dispatch: AppDispatch,
  body: {
    title: string, description: string, isFree: boolean, noOfBusinesses: number, noOfBusinessPlans: number, noOfchapters: number, price: number, isRecurring: boolean, interval: string, isSubscriptionPlan: boolean, creditCounts: number
  },
  onSuccess: () => void,
) => {
  dispatch(postCreatePackageSlice());
  try {
    const response = await post<any>(ENDPOINT.package.createPackage, body);
    dispatch(postCreatePackageSliceSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postCreatePackageSliceFailure("Error"));
  }
};

export const getCreatePackageAdminApi = async (
  dispatch: AppDispatch,
) => {
  dispatch(getCreatePackageAdminSlice());
  try {
    const apiString = `${ENDPOINT.package.createPackage}`;
    const response = await get<any>(apiString);
    dispatch(getCreatePackageAdminSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getCreatePackageAdminSliceFailure("Error"));
  }
};

export const getPackageAddOnAdminApi = async (
  dispatch: AppDispatch,

) => {
  dispatch(getPackageAddOnAdminSlice());
  try {
    const apiString = `${ENDPOINT.package.packageAddOn}`;
    const response = await get<any>(apiString);
    dispatch(getPackageAddOnAdminSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getPackageAddOnAdminSliceFailure("Error"));
  }
};

export const updateCreatePackageApi = async (
  dispatch: AppDispatch,
  body: {
    title: string, description: string, isFree: boolean, noOfBusinesses: number, noOfBusinessPlans: number, noOfchapters: number, price: number, isRecurring: boolean, interval: string, isSubscriptionPlan: boolean, creditCounts: number
  },
  id: number,
  onSuccess: () => void,
) => {
  dispatch(updateCreatePackage());
  try {
    const response = await patch<any>(
      `${ENDPOINT.package.createPackage}/${id}`,
      body,
    );
    dispatch(updateCreatePackageSuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateCreatePackageFailure("Error"));
  }
};
