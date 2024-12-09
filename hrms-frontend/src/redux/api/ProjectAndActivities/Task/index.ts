import {
  del,
  get,
  getError,
  patch,
  post,
  postImage,
} from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import {
  createTask,
  createTaskFailure,
  createTaskSuccess,
} from "../../../slices/ProjectAndActivities/task/createProjectTaskSlice";
import {
  deleteTask,
  deleteTaskFailure,
  deleteTaskSuccess,
} from "../../../slices/ProjectAndActivities/task/deleteProjectTaskSlice";
import {
  editTask,
  editTaskFailure,
  editTaskSuccess,
} from "../../../slices/ProjectAndActivities/task/editProjectTaskSlice";
import {
  getTasksByProjectId,
  getTasksByProjectIdFailure,
  getTasksByProjectIdSuccess,
} from "../../../slices/ProjectAndActivities/task/getTasksByProjectIdSlice";
import {
  getTaskById,
  getTaskByIdFailure,
  getTaskByIdSuccess,
} from "../../../slices/ProjectAndActivities/task/getProjectTaskByIdSlice";
import { AppDispatch } from "../../../store";
import {
  getUsersByDepartmentForTask,
  getUsersByDepartmentForTaskFailure,
  getUsersByDepartmentForTaskSuccess,
} from "../../../slices/ProjectAndActivities/task/getUsersByDepartmentForTaskSlice";
import {
  deleteTaskNote,
  deleteTaskNoteFailure,
  deleteTaskNoteSuccess,
} from "../../../slices/ProjectAndActivities/task/deleteTaskNoteSlice";
import {
  editTaskNote,
  editTaskNoteFailure,
  editTaskNoteSuccess,
} from "../../../slices/ProjectAndActivities/task/editTaskNoteSlice";
import {
  addTaskNote,
  addTaskNoteFailure,
  addTaskNoteSuccess,
} from "../../../slices/ProjectAndActivities/task/addTaskNoteSlice";
import {
  completeProjectTask,
  completeProjectTaskFailure,
  completeProjectTaskSuccess,
} from "../../../slices/ProjectAndActivities/task/completeProjectTaskSlice";
import {
  addAttachmentToProjectTask,
  addAttachmentToProjectTaskFailure,
  addAttachmentToProjectTaskSuccess,
} from "../../../slices/ProjectAndActivities/task/addAttachmentToProjectTaskSlice";
import {
  deleteTaskAttachment,
  deleteTaskAttachmentFailure,
  deleteTaskAttachmentSuccess,
} from "../../../slices/ProjectAndActivities/task/deleteTaskAttachmentSlice";

export const createProjectTaskApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(createTask());
  try {
    const response = await post<any>(ENDPOINT.projectAndActivities.task, body);
    dispatch(createTaskSuccess(response));
    successMessage(response?.message);
    onClose(response);
  } catch (err) {
    getError(err);
    dispatch(createTaskFailure("Error"));
  }
};

export const getTasksByProjectIdApi = async (
  dispatch: AppDispatch,
  projectId: any,
  pageLimit: { page: number; limit: number },
  name?: any,
  priority?: any,
  status?: any,
  dueDate?: any,
) => {
  dispatch(getTasksByProjectId());
  try {
    const apiString = `${
      ENDPOINT.projectAndActivities.getTasksByProjectId
    }/${projectId}?page=${pageLimit.page}&limit=${pageLimit.limit}${
      name ? `&name=${name}` : ""
    }${priority ? `&priority=${priority}` : ""}${
      status ? `&status=${status}` : ""
    }${dueDate ? `&dueDate=${dueDate}` : ""}`;
    const response = await get<any>(apiString);
    dispatch(getTasksByProjectIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getTasksByProjectIdFailure("Error"));
  }
};

export const getProjectTaskByIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getTaskById());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.getTaskById}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getTaskByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getTaskByIdFailure("Error"));
  }
};

export const editProjectTaskApi = async (
  dispatch: AppDispatch,
  id: any,
  body: {
    title: string;
  },
  onClose: any,
) => {
  dispatch(editTask());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.task}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editTaskSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(editTaskFailure("Error"));
  }
};

export const deleteProjectTaskApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteTask());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.task}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteTaskSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteTaskFailure("Error"));
  }
};

export const getUsersByDepartmentForTaskApi = async (
  dispatch: AppDispatch,
  projectId: any,
) => {
  dispatch(getUsersByDepartmentForTask());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.getUsersByDepartment}/${projectId}`;
    const response = await get<any>(apiString);
    dispatch(getUsersByDepartmentForTaskSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getUsersByDepartmentForTaskFailure("Error"));
  }
};

export const createTaskNoteApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(addTaskNote());
  try {
    const response = await post<any>(
      ENDPOINT.projectAndActivities.createTaskNote,
      body,
    );
    dispatch(addTaskNoteSuccess(response));
    successMessage(response?.message);
    onClose(false);
  } catch (err) {
    getError(err);
    dispatch(addTaskNoteFailure("Error"));
  }
};

export const editTaskNoteApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(editTaskNote());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.updateTaskNote}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editTaskNoteSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(editTaskNoteFailure("Error"));
  }
};

export const deleteTaskNoteApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteTaskNote());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.deleteTaskNote}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteTaskNoteSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteTaskNoteFailure("Error"));
  }
};

export const completeProjectTaskApi = async (
  dispatch: AppDispatch,
  id: any,
  onClose: any,
) => {
  dispatch(completeProjectTask());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.completeProjectTask}/${id}`;
    const response = await patch<any>(apiString, {});
    dispatch(completeProjectTaskSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(completeProjectTaskFailure("Error"));
  }
};

export const addAttachmentToProjectTaskApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose?: any,
) => {
  dispatch(addAttachmentToProjectTask());
  try {
    const response = await postImage<any>(
      ENDPOINT.projectAndActivities.addAttachmentToProjectTask,
      body,
    );
    dispatch(addAttachmentToProjectTaskSuccess(response));
    onClose && onClose(response);
  } catch (err) {
    getError(err);
    dispatch(addAttachmentToProjectTaskFailure("Error"));
  }
};

export const deleteTaskAttachmentApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteTaskAttachment());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.deleteAttachment}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteTaskAttachmentSuccess(response));
    successMessage(response?.message);
    onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(deleteTaskAttachmentFailure("Error"));
  }
};
