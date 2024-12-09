import { get, getError, post, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  AddWorkSchedule,
  AddWorkScheduleFailure,
  AddWorkScheduleSuccess,
} from "../../slices/WorkSchedule/AddWorkScheduleSlice";
import {
  GetWorkScheduleById,
  GetWorkScheduleByIdFailure,
  GetWorkScheduleByIdSuccess,
} from "../../slices/WorkSchedule/GetWorkScheduleByIdSlice";
import {
  GetWorkSchedule,
  GetWorkScheduleFailure,
  GetWorkScheduleSuccess,
} from "../../slices/WorkSchedule/GetWorkScheduleSlice";
import {
  editWorkSchedule,
  editWorkScheduleFailure,
  editWorkScheduleSuccess,
} from "../../slices/WorkSchedule/editWorkScheduleSlice";
import { AppDispatch } from "../../store";

export const createWorkScheduleApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess?: any
) => {
  dispatch(AddWorkSchedule());
  try {
    const response = await post<any>(
      ENDPOINT.workSchedule.AddWorkSchedule,
      body
    );
    if (response) {
      dispatch(AddWorkScheduleSuccess(response?.data));
      if (onSuccess) {
        successMessage(response.message);
        onSuccess();
      }
    }
  } catch (err) {
    getError(err);
    dispatch(AddWorkScheduleFailure("Error"));
  }
};

export const getWorkScheduleApi = async (
  id: any,
  dispatch: AppDispatch,
  pageLimit?: { page: number; limit: number },
  onSuccess?: (data: any) => void
) => {
  dispatch(GetWorkSchedule());
  const flexibility = id == 1 ? "Fixed" : "Flexible";

  try {
    const response = await get<any>(
      `${ENDPOINT.workSchedule.getWorkSchedule}?page=${pageLimit?.page}&limit=${
        pageLimit?.limit
      }&${id ? `flexibility=${flexibility}` : ""}`
    );
    if (response) {
      dispatch(GetWorkScheduleSuccess(response));
      if (onSuccess) {
        onSuccess(response?.data?.items);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(GetWorkScheduleFailure("Error"));
  }
};

export const getWorkScheduleByIdApi = async (
  dispatch: AppDispatch,
  id?: number,
  onSuccess?: (data: any) => void
) => {
  dispatch(GetWorkScheduleById());

  try {
    const response = await get<any>(
      `${ENDPOINT.workSchedule.GetWorkScheduleById}/${id}`
    );
    if (response) {
      dispatch(GetWorkScheduleByIdSuccess(response?.data));
      if (onSuccess) {
        onSuccess(response?.data);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(GetWorkScheduleByIdFailure("Error"));
  }
};

export const editWorkScheduleApi = async (
  dispatch: AppDispatch,
  id: number,
  body: any,
  onSuccess?: any
) => {
  dispatch(editWorkSchedule());
  try {
    const response = await patch<any>(
      `${ENDPOINT.workSchedule.editWorkSchedule}/${id}`,
      body
    );
    if (response) {
      dispatch(editWorkScheduleSuccess(response?.data));
      if (onSuccess) {
        successMessage(response.message);
        onSuccess();
      }
    }
  } catch (err) {
    getError(err);
    dispatch(editWorkScheduleFailure("Error"));
  }
};
