import {
  createService,
  createServiceFailure,
  createServiceSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Services/createServiceSlice";
import {
  deleteService,
  deleteServiceFailure,
  deleteServiceSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Services/deleteServiceSlice";
import {
  editService,
  editServiceFailure,
  editServiceSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Services/editServiceSlice";
import {
  getServiceById,
  getServiceByIdFailure,
  getServiceByIdSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Services/getServiceByIdSlice";
import { AppDispatch } from "../../../../redux/store";
import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";

export const getServiceByIdApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getServiceById());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.getService}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getServiceByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getServiceByIdFailure("Error"));
  }
};

export const editServiceApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(editService());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.services}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editServiceSuccess(response));
    successMessage(response?.message);
    onClose(true);
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(editServiceFailure("Error"));
  }
};

export const createServiceApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
  onSuccess?: any,
) => {
  dispatch(createService());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.services}`;
    const response = await post<any>(apiString, body);
    dispatch(createServiceSuccess(response));
    onClose(true);
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(createServiceFailure("Error"));
  }
};

export const deleteServiceApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: () => void,
) => {
  dispatch(deleteService());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.services}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteServiceSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteServiceFailure("Error"));
  }
};
