import {
  del,
  get,
  getError,
  patch,
  patchFormData,
  post,
  postImage,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  deleteAnnouncements,
  deleteAnnouncementsFailure,
  deleteAnnouncementsSuccess,
} from "../../slices/Announcements/deleteAnnouncementsSlice";
import {
  getAnnouncementsFailure,
  getAnnouncements,
  getAnnouncementsSuccess,
} from "../../slices/Announcements/getAnnouncementsSlice";
import {
  getByIDAnnouncements,
  getByIDAnnouncementsFailure,
  getByIDAnnouncementsSuccess,
} from "../../slices/Announcements/getByIDAnnouncementsSlice";
import {
  postAnnouncements,
  postAnnouncementsFailure,
  postAnnouncementsSuccess,
} from "../../slices/Announcements/postAnnouncementsSlice";
import {
  updateAnnouncements,
  updateAnnouncementsFailure,
  updateAnnouncementsSuccess,
} from "../../slices/Announcements/updateAnnouncementsSlice";
import { AppDispatch } from "../../store";

export const postAnnouncementsApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any
) => {
  dispatch(postAnnouncements());
  try {
    const response = await postImage<any>(
      ENDPOINT.announcement.postAnnouncement,
      body
    );
    dispatch(postAnnouncementsSuccess(response));
    successMessage(response?.message);
    onClose(false);
  } catch (err) {
    getError(err);
    dispatch(postAnnouncementsFailure("Error"));
  }
};

export const getAnnouncementsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  filter?: any
) => {
  dispatch(getAnnouncements());
  try {
    const apiString = `${ENDPOINT.announcement.getAnnouncement}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      filter?.title ? `&title=${filter?.title}` : ""
    }${filter?.date ? `&date=${filter?.date}` : ""}`;
    const response = await get<any>(apiString);
    dispatch(getAnnouncementsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAnnouncementsFailure("Error"));
  }
};
export const updateAnnouncementsApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any
) => {
  dispatch(updateAnnouncements());
  try {
    const apiString = `${ENDPOINT.announcement.updateAnnouncement}/${id}`;
    const response = await patchFormData<any>(apiString, body);
    dispatch(updateAnnouncementsSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(updateAnnouncementsFailure("Error"));
  }
};
export const deleteAnnouncementsApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any
) => {
  dispatch(deleteAnnouncements());
  try {
    const apiString = `${ENDPOINT.announcement.deleteAnnouncement}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteAnnouncementsSuccess(response));
    onSuccess && onSuccess();
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteAnnouncementsFailure("Error"));
  }
};

export const getByIDAnnouncementsApi = async (
  dispatch: AppDispatch,
  id: number | string
) => {
  dispatch(getByIDAnnouncements());
  try {
    const apiString = `${ENDPOINT.announcement.getByIDAnnouncement}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getByIDAnnouncementsSuccess(response));
    // successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(getByIDAnnouncementsFailure("Error"));
  }
};
