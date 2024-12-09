import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  postChapterSlice,
  postChapterSliceSuccess,
  postChapterSliceFailure,
  getChapterAdminSlice,
  getChapterAdminSliceSuccess,
  getChapterAdminSliceFailure,
  getAllChaptersSlice,
  getAllChaptersSliceFailure,
  getAllChaptersSliceSuccess,
  deleteChapter,
  deleteChapterSuccess,
  deleteChapterFailure,
  updateChapter,
  updateChapterSuccess,
  updateChapterFailure,
} from "../../../../store/slices/Dashboard/Chatper/chapterSlice";

export const postChapterApi = async (
  dispatch: AppDispatch,
  body: {
    name: string;
    description: string;
  },
  onSuccess: () => void,
) => {
  dispatch(postChapterSlice());
  try {
    const response = await post<any>(ENDPOINT.chapter.chapter, body);
    dispatch(postChapterSliceSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postChapterSliceFailure("Error"));
  }
};

export const getChapterAdminApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchTerm?: string
) => {
  dispatch(getChapterAdminSlice());
  try {
    const apiString = `${ENDPOINT.chapter.getChapterAdmin}?page=${pageLimit.page}&limit=${pageLimit.limit}${searchTerm ? `&name=${searchTerm}` : ""}`;
    const response = await get<any>(apiString);
    dispatch(getChapterAdminSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getChapterAdminSliceFailure("Error"));
  }
};

export const getAllChaptersApi = async (
  dispatch: AppDispatch,
) => {
  dispatch(getAllChaptersSlice());
  try {
    const apiString = `${ENDPOINT.chapter.chapter}`;
    const response = await get<any>(apiString);
    dispatch(getAllChaptersSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllChaptersSliceFailure("Error"));
  }
};

export const deleteChapterApi = async (dispatch: AppDispatch, id: number,succes:any) => {
  dispatch(deleteChapter());
  try {
    const response = await del<any>(`${ENDPOINT.chapter.chapter}/${id}`);
    dispatch(deleteChapterSuccess(response?.data));
    successMessage(response?.message);
    succes()
  } catch (err) {
    getError(err);
    dispatch(deleteChapterFailure("Error"));
  }
};

export const updateChapterApi = async (
  dispatch: AppDispatch,
  body: {
    name: string;
    description: string;
  },
  id: number,
  onSuccess: () => void,
) => {
  dispatch(updateChapter());
  try {
    const response = await patch<any>(
      `${ENDPOINT.chapter.chapter}/${id}`,
      body,
    );
    dispatch(updateChapterSuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateChapterFailure("Error"));
  }
};

export const getAllChapterApi = async (
  dispatch: AppDispatch,
  pageLimit?: { page: number; limit: number },
) => {
  dispatch(getChapterAdminSlice());
  try {
    const apiString = `${ENDPOINT.chapter.chapter}`;
    const response = await get<any>(apiString);
    dispatch(getChapterAdminSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getChapterAdminSliceFailure("Error"));
  }
};
