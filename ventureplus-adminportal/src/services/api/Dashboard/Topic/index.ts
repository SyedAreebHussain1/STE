import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import { BodyType } from "../../../../views/Dashboard/Topic/helpers/TopicModal";
import {
  postTopic,
  postTopicSuccess,
  postTopicFailure,
  getTopicAdmin,
  getTopicAdminSuccess,
  getTopicAdminFailure,
  updateTopic,
  updateTopicSuccess,
  updateTopicFailure,
  deleteTopic,
  deleteTopicSuccess,
  deleteTopicFailure,
  getTopicByChapterId,
  getTopicByChapterIdFailure,
  getTopicByChapterIdSuccess,
} from "../../../../store/slices/Dashboard/Topic/topicSlice";
import {
  getTopicsAdmin,
  getTopicsAdminFailure,
  getTopicsAdminSuccess,
} from "../../../../store/slices/Dashboard/Topic/topicsSlice";

export const postTopicApi = async (
  dispatch: AppDispatch,
  body: BodyType,
  onSuccess: () => void
) => {
  dispatch(postTopic());
  try {
    const response = await post<any>(ENDPOINT.topic.topic, body);
    dispatch(postTopicSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postTopicFailure("Error"));
  }
};
export const getTopicAdminApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  selectedChapterId: number | null,
  searchTerm?: string
) => {
  dispatch(getTopicAdmin());
  try {
    const apiString = `${ENDPOINT.topic.getTopicAdmin}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${searchTerm ? `&name=${searchTerm}` : ""}${
      selectedChapterId ? `&chapterId=${selectedChapterId}` : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getTopicAdminSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getTopicAdminFailure("Error"));
  }
};

export const getTopicByChapterIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getTopicByChapterId());
  try {
    const response = await get<any>(
      `${ENDPOINT.topic.getTopicByChapterId}/${id}`
    );
    dispatch(getTopicByChapterIdSuccess(response?.data));
    successMessage(response);
  } catch (err) {
    getError(err);
    dispatch(getTopicByChapterIdFailure("Error"));
  }
};

export const deleteTopicApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(deleteTopic());
  try {
    const response = await del<any>(`${ENDPOINT.topic.topic}/${id}`);
    dispatch(deleteTopicSuccess(response?.data));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteTopicFailure("Error"));
  }
};

export const updateTopicApi = async (
  dispatch: AppDispatch,
  body: BodyType,
  id: number,
  onSuccess: () => void
) => {
  dispatch(updateTopic());
  try {
    const response = await patch<any>(`${ENDPOINT.topic.topic}/${id}`, body);
    dispatch(updateTopicSuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateTopicFailure("Error"));
  }
};
export const getAllTopicApi = async (dispatch: AppDispatch) => {
  dispatch(getTopicsAdmin());
  try {
    const apiString = `${ENDPOINT.topic.topic}`;
    const response = await get<any>(apiString);
    dispatch(getTopicsAdminSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getTopicsAdminFailure("Error"));
  }
};
