import {
  createEquity,
  createEquityFailure,
  createEquitySuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Equity/createEquitySlice";
import {
  deleteEquity,
  deleteEquityFailure,
  deleteEquitySuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Equity/deleteEquitySlice";
import {
  editEquity,
  editEquityFailure,
  editEquitySuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Equity/editEquitySlice";
import {
  getEquityById,
  getEquityByIdFailure,
  getEquityByIdSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Equity/getEquityByIdSlice";
import {
  createEquityMultipleEquities,
  createEquityMultipleEquitiesSuccess,
  createEquityMultipleEquitiesFailure,
} from "../../../../redux/slices/BusinessPlanSetup/Products/createEquityMultipleEquitiesSlice";
import { AppDispatch } from "../../../../redux/store";
import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";

export const getEquityByIdApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getEquityById());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.getEquity}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getEquityByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getEquityByIdFailure("Error"));
  }
};

export const editEquityApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(editEquity());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.equity}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editEquitySuccess(response));
    successMessage(response?.message);
    onClose(true);
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(editEquityFailure("Error"));
  }
};

export const createEquityApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
  onSuccess?: any,
) => {
  dispatch(createEquity());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.equity}`;
    const response = await post<any>(apiString, body);
    dispatch(createEquitySuccess(response));
    successMessage(response?.message);
    onClose(true);
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(createEquityFailure("Error"));
  }
};

export const createEquityMultipleEquitiesApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess?: any,
) => {
  dispatch(createEquityMultipleEquities());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.multipleEquities}`;
    const response = await post<any>(apiString, body);
    dispatch(createEquityMultipleEquitiesSuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createEquityMultipleEquitiesFailure("Error"));
  }
};

export const deleteEquityApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: () => void,
) => {
  dispatch(deleteEquity());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.equity}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteEquitySuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteEquityFailure("Error"));
  }
};
