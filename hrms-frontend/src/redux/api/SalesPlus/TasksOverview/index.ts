import { getError, post, get, patch, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import { AppDispatch } from "../../../store";
import {
  getAllTasks,
  getAllTasksSuccess,
  getAllTasksFailure,
} from "../../../slices/SalesPlus/TasksOverview/getAllTasksSlice";
import {
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure,
} from "../../../slices/SalesPlus/TasksOverview/deleteTaskSlice";
import {
  getCountTasks,
  getCountTasksSuccess,
  getCountTasksFailure,
} from "../../../slices/SalesPlus/TasksOverview/getCountTasksSlice";
import {
  createTask,
  createTaskSuccess,
  createTaskFailure,
} from "../../../slices/SalesPlus/TasksOverview/createTaskSlice";
import {
  getAllCompanyUserCompanyDepartmentId,
  getAllCompanyUserCompanyDepartmentIdSuccess,
  getAllCompanyUserCompanyDepartmentIdFailure,
} from "../../../slices/SalesPlus/TasksOverview/getAllCompanyUserCompanyDepartmentIdSlice";
import {
  editTask,
  editTaskSuccess,
  editTaskFailure,
} from "../../../slices/SalesPlus/TasksOverview/editTaskSlice";
import {
  getTaskId,
  getTaskIdSuccess,
  getTaskIdFailure,
} from "../../../slices/SalesPlus/TasksOverview/getTaskIdSlice";
import {
  markAsComplete,
  markAsCompleteSuccess,
  markAsCompleteFailure,
} from "../../../slices/SalesPlus/TasksOverview/markAsCompleteSlice";
import {
  getAllDepartments,
  getAllDepartmentsSuccess,
  getAllDepartmentsFailure,
} from "../../../slices/SalesPlus/TasksOverview/getAllDepartmentsSlice";

export const createTaskApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(createTask());
  try {
    const response = await post<any>(ENDPOINT.salesPlus.createTask, body);
    dispatch(createTaskSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createTaskFailure("Error"));
  }
};
export const getAllTasksApi = async (
  dispatch: AppDispatch,
  pageLimit: any,
  title?: string,
  priority?: string,
  sortByOrder?: string
) => {
  dispatch(getAllTasks());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllTasks}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${title ? `&title=${title}` : ""}${
        priority ? `&priority=${priority}` : ""
      }${sortByOrder ? `&sortByOrder=${sortByOrder}` : ""}`
    );

    dispatch(getAllTasksSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getAllTasksFailure("Error"));
  }
};
export const deleteTaskApi = async (
  dispatch: AppDispatch,
  id: number | string
) => {
  dispatch(deleteTask());
  try {
    const apiString = `${ENDPOINT.salesPlus.deleteTask}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteTaskSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteTaskFailure("Error"));
  }
};

export const getCountTasksApi = async (
  dispatch: AppDispatch,
  enumValue: any
) => {
  dispatch(getCountTasks());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getCountTasks}?taskType=${enumValue}&sortByOrder=Ascending`
    );
    dispatch(getCountTasksSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getCountTasksFailure("Error"));
  }
};
export const getAllCompanyUserCompanyDepartmentIdApi = async (
  dispatch: AppDispatch,
  id: any
) => {
  dispatch(getAllCompanyUserCompanyDepartmentId());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllCompanyUserCompanyDepartmentId}/${id}?page=1&limit=1000`
    );
    dispatch(
      getAllCompanyUserCompanyDepartmentIdSuccess({ ...response?.data })
    );
  } catch (err) {
    getError(err);
    dispatch(getAllCompanyUserCompanyDepartmentIdFailure("Error"));
  }
};
export const getTaskIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getTaskId());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getTaskId}/${id}?page=1&limit=1000`
    );
    dispatch(getTaskIdSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getTaskIdFailure("Error"));
  }
};
export const editTaskApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: any
) => {
  dispatch(editTask());
  try {
    const apiString = `${ENDPOINT.salesPlus.editTask}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editTaskSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(editTaskFailure("Error"));
  }
};
export const markAsCompleteApi = async (
  dispatch: AppDispatch,
  id: any,
  onSuccess: any
) => {
  dispatch(markAsComplete());
  try {
    const apiString = `${ENDPOINT.salesPlus.markAsComplete}/${id}`;
    const response = await patch<any>(apiString);
    dispatch(markAsCompleteSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(markAsCompleteFailure("Error"));
  }
};

export const getAllDepartmentsApi = async (
  dispatch: AppDispatch,
  pageLimit: any
) => {
  dispatch(getAllDepartments());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllDepartments}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    dispatch(getAllDepartmentsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllDepartmentsFailure("Error"));
  }
};
