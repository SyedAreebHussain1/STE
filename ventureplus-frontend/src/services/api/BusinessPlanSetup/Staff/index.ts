import {
  createStaff,
  createStaffFailure,
  createStaffSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Staff/createStaffSlice";
import {
  deleteStaff,
  deleteStaffFailure,
  deleteStaffSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Staff/deleteStaffSlice";
import {
  editStaff,
  editStaffFailure,
  editStaffSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Staff/editStaffSlice";
import {
  getStaffById,
  getStaffByIdFailure,
  getStaffByIdSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Staff/getStaffByIdSlice";
import {
  createStaffingMultipleStaffing,
  createStaffingMultipleStaffingSuccess,
  createStaffingMultipleStaffingFailure,
} from "../../../../redux/slices/BusinessPlanSetup/Staff/createStaffingMultipleStaffingSlice";
import { AppDispatch } from "../../../../redux/store";
import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";

export const getStaffByIdApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getStaffById());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.getStaff}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getStaffByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getStaffByIdFailure("Error"));
  }
};

export const editStaffApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(editStaff());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.staffing}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editStaffSuccess(response));
    successMessage(response?.message);
    onClose(true);
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(editStaffFailure("Error"));
  }
};

export const createStaffApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
  onSuccess?: any,
) => {
  dispatch(createStaff());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.staffing}`;
    const response = await post<any>(apiString, body);
    dispatch(createStaffSuccess(response));
    successMessage(response?.message);
    onClose(true);
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(createStaffFailure("Error"));
  }
};
export const createStaffingMultipleStaffingApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess?: any,
) => {
  dispatch(createStaffingMultipleStaffing());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.multipleStaffing}`;
    const response = await post<any>(apiString, body);
    dispatch(createStaffingMultipleStaffingSuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createStaffingMultipleStaffingFailure("Error"));
  }
};

export const deleteStaffApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: () => void,
) => {
  dispatch(deleteStaff());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.staffing}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteStaffSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteStaffFailure("Error"));
  }
};
