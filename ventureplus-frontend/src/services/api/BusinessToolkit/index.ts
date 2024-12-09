import {
  deleteCanvasColumnItemById,
  deleteCanvasColumnItemByIdFailure,
  deleteCanvasColumnItemByIdSuccess,
  editCanvasColumnItem,
  editCanvasColumnItemFailure,
  editCanvasColumnItemSuccess,
  getBusinessModelCanvasColumns,
  getBusinessModelCanvasColumnsFailure,
  getBusinessModelCanvasColumnsSuccess,
  getCanvasColumnItemById,
  getCanvasColumnItemByIdFailure,
  getCanvasColumnItemByIdSuccess,
  postCanvasColumnItem,
  postCanvasColumnItemFailure,
  postCanvasColumnItemSuccess,
} from "../../../redux/slices/BusinessToolkit/BusinessModelCanvas/BusinessModelCanvasSlice";
import { AppDispatch } from "../../../redux/store";
import { del, get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getBusinessModelCanvasColumnsApi = async (
  dispatch: AppDispatch,
  id: number //bpdId
) => {
  dispatch(getBusinessModelCanvasColumns());
  try {
    const apiString = `${ENDPOINT.businessToolKit.getBusinessModelCanvasData}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getBusinessModelCanvasColumnsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getBusinessModelCanvasColumnsFailure("Error"));
  }
};

export const getCanvasColumnItemByIdApi = async (
  dispatch: AppDispatch,
  route: string,
  id: number
) => {
  dispatch(getCanvasColumnItemById());
  try {
    const apiString = `${ENDPOINT.businessToolKit.getBusinessModelCanvasData}/get${route}ById/${id}`;
    const response = await get<any>(apiString);
    dispatch(getCanvasColumnItemByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCanvasColumnItemByIdFailure("Error"));
  }
};

export const editCanvasColumnItemApi = async (
  dispatch: AppDispatch,
  id: any,
  route: string,
  body: any,
  onClose: any
) => {
  dispatch(editCanvasColumnItem());
  try {
    const apiString = `${ENDPOINT.businessToolKit.getBusinessModelCanvasData}/update${route}ById/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editCanvasColumnItemSuccess(response));
    onClose(true);
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(editCanvasColumnItemFailure("Error"));
  }
};

export const postCanvasColumnItemApi = async (
  dispatch: AppDispatch,
  route: string,
  body: any,
  onClose: any
) => {
  dispatch(postCanvasColumnItem());
  try {
    const apiString = `${ENDPOINT.businessToolKit.getBusinessModelCanvasData}/${route}`;
    const response = await post<any>(apiString, body);
    dispatch(postCanvasColumnItemSuccess(response));
    onClose(true);
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(postCanvasColumnItemFailure("Error"));
  }
};

export const deleteCanvasColumnItemByIdApi = async (
  dispatch: AppDispatch,
  route: string,
  id: number | string,
  onSuccess: () => void
) => {
  dispatch(deleteCanvasColumnItemById());
  try {
    const apiString = `${ENDPOINT.businessToolKit.getBusinessModelCanvasData}/delete${route}ById/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteCanvasColumnItemByIdSuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteCanvasColumnItemByIdFailure("Error"));
  }
};
