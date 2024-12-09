import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  getDepartmentForNotification,
  getDepartmentForNotificationFailure,
  getDepartmentForNotificationSuccess,
} from "../../slices/Notification/getDepartmentForNotificationSlice";
import {
  getNotification,
  getNotificationFailure,
  getNotificationSuccess,
} from "../../slices/Notification/getNotificationSlice";
import {
  postNotification,
  postNotificationFailure,
  postNotificationSuccess,
} from "../../slices/Notification/postNotificationSlice";
import { AppDispatch } from "../../store";

export const getNotificationApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getNotification());
  try {
    const apiString = `${ENDPOINT.notification.getNotification}?page=${pageLimit?.page}&limit=${pageLimit?.limit}`;
    const response = await get<any>(apiString);
    dispatch(getNotificationSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getNotificationFailure("Error"));
  }
};
export const postNotificationApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void
) => {
  dispatch(postNotification());
  try {
    const response = await post<any>(
      ENDPOINT.notification.postNotification,
      body
    );
    dispatch(postNotificationSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postNotificationFailure("Error"));
  }
};
export const getDepartmentForNotificationApi = async (
  dispatch: AppDispatch
) => {
  dispatch(getDepartmentForNotification());
  try {
    const apiString = `${ENDPOINT.notification.getDepartmentForNotification}`;
    const response = await get<any>(apiString);
    dispatch(getDepartmentForNotificationSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getDepartmentForNotificationFailure("Error"));
  }
};
