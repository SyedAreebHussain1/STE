import {
  del,
  delWithBody,
  get,
  getError,
  patch,
  post,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  createTask,
  createTaskSuccess,
  createTaskFailure,
} from "../../slices/TaskOverview/createTaskSlice";
import {
  getTask,
  getTaskSuccess,
  getTaskFailure,
} from "../../slices/TaskOverview/getTaskSlice";
import {
  getAllTasks,
  getAllTasksSuccess,
  getAllTasksFailure,
} from "../../slices/TaskOverview/getAllTasksSlice";
import {
  getCampaignsByAgencyId,
  getCampaignsByAgencyIdSuccess,
  getCampaignsByAgencyIdFailure,
} from "../../slices/TaskOverview/getCampaignsByAgencyIdSlice";
import {
  getTeamMember,
  getTeamMemberSuccess,
  getTeamMemberFailure,
} from "../../slices/TaskOverview/getTeamMemberSlice";
import {
  getProfileStaffList,
  getProfileStaffListSuccess,
  getProfileStaffListFailure,
} from "../../slices/TaskOverview/getProfileStaffListSlice";
import {
  getLeadsByCampaignId,
  getLeadsByCampaignIdSuccess,
  getLeadsByCampaignIdFailure,
} from "../../slices/TaskOverview/getLeadsByCampaignIdSlice";
import {
  getTaskByEnum,
  getTaskByEnumSuccess,
  getTaskByEnumFailure,
} from "../../slices/TaskOverview/getTaskByEnumSlice";
import {
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure,
} from "../../slices/TaskOverview/deleteTaskSlice";
import {
  updateTask,
  updateTaskSuccess,
  updateTaskFailure,
} from "../../slices/TaskOverview/updateTaskSlice";
import {
  getCampaignsId,
  getCampaignsIdSuccess,
  getCampaignsIdFailure,
} from "../../slices/TaskOverview/getCampaignsIdSlice";
import { AppDispatch } from "../../store";
import { getFromStorage } from "../../../utils/storage";
import {
  viewTaskDetails,
  viewTaskDetailsFailure,
  viewTaskDetailsSuccess,
} from "../../slices/TaskOverview/viewTaskDetailsSlice";
import {
  MarksAsComplete,
  MarksAsCompleteFailure,
  MarksAsCompleteSuccess,
} from "../../slices/TaskOverview/MarksAsCompleteSlice";

export const createTaskApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(createTask());
  try {
    const response = await post<any>(ENDPOINT.tasksOverview.task, body);
    dispatch(createTaskSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createTaskFailure("Error"));
  }
};

export const deleteTaskApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(deleteTask());
  try {
    const response = await del<any>(`${ENDPOINT.tasksOverview.task}/${id}`);
    dispatch(deleteTaskSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteTaskFailure("Error"));
  }
};

export const getTaskApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  title?: string,
  priority?: string,
  sortByOrder?: string,
) => {
  dispatch(getTask());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.task}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${title ? `&title=${title}` : ""}${
        priority ? `&priority=${priority}` : ""
      }${sortByOrder ? `&sortByOrder=${sortByOrder}` : ""}`,
    );
    dispatch(getTaskSuccess({ ...response }));
  } catch (err) {
    getError(err);
    dispatch(getTaskFailure("Error"));
  }
};
export const getTaskByEnumApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  enumValue: string,
  title?: string,
  priority?: string,
  sortByOrder?: string,
) => {
  dispatch(getTaskByEnum());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.task}?page=${pageLimit.page}&limit=${pageLimit.limit}&taskType=${enumValue}`,
    );
    dispatch(getTaskByEnumSuccess({ ...response }));
  } catch (err) {
    getError(err);
    dispatch(getTaskByEnumFailure("Error"));
  }
};

export const getAllTasksApi = async (dispatch: AppDispatch) => {
  dispatch(getAllTasks());
  try {
    const response = await get<any>(`${ENDPOINT.tasksOverview.getAllTasks}`);
    dispatch(getAllTasksSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllTasksFailure("Error"));
  }
};
export const getCampaignsByAgencyIdApi = async (dispatch: AppDispatch) => {
  let user = getFromStorage("user");
  dispatch(getCampaignsByAgencyId());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.getCampaignsByAgencyId}/${user.agencyId}`,
    );
    dispatch(getCampaignsByAgencyIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCampaignsByAgencyIdFailure("Error"));
  }
};
export const getTeamMemberApi = async (dispatch: AppDispatch) => {
  dispatch(getTeamMember());
  try {
    const response = await get<any>(`${ENDPOINT.tasksOverview.getTeamMember}`);
    dispatch(getTeamMemberSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getTeamMemberFailure("Error"));
  }
};
export const getProfileStaffListApi = async (
  dispatch: AppDispatch,
  userId?: number,
) => {
  dispatch(getProfileStaffList());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.getProfileStaffList}${
        userId ? `?userId=${userId}` : ""
      }`,
    );
    dispatch(getProfileStaffListSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProfileStaffListFailure("Error"));
  }
};
export const getLeadsByCampaignIdApi = async (
  dispatch: AppDispatch,
  campaignId: number,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getLeadsByCampaignId());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.getLeadsByCampaignId}/?page=${pageLimit?.page}&limit=${pageLimit?.limit}&campaignId=${campaignId}&sortByOrder=Descending`,
    );
    dispatch(getLeadsByCampaignIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadsByCampaignIdFailure("Error"));
  }
};
export const getCampaignsIdApi = async (
  dispatch: AppDispatch,
  campaignId: number,
) => {
  dispatch(getCampaignsId());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.getCampaignsId}/${campaignId}`,
    );
    dispatch(getCampaignsIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCampaignsIdFailure("Error"));
  }
};
export const updateTaskApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: any,
) => {
  dispatch(updateTask());
  try {
    const response = await patch<any>(
      `${ENDPOINT.tasksOverview.task}/${id}`,
      body,
    );
    dispatch(updateTaskSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateTaskFailure("Error"));
  }
};

export const viewTaskDetailsApi = async (
  dispatch: AppDispatch,
  taskId: number,
) => {
  dispatch(viewTaskDetails());
  try {
    const response = await get<any>(
      `${ENDPOINT.tasksOverview.viewTaskDetails}/${taskId}`,
    );
    dispatch(viewTaskDetailsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(viewTaskDetailsFailure("Error"));
  }
};

export const markAsCompleteApi = async (
  dispatch: AppDispatch,
  id: any,
  onSuccess: any,
) => {
  dispatch(MarksAsComplete());
  try {
    const response = await patch<any>(
      `${ENDPOINT.tasksOverview.markAsComplete}/${id}`,
    );
    dispatch(MarksAsCompleteSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(MarksAsCompleteFailure("Error"));
  }
};
