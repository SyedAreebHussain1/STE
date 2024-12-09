import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import {
  postQuestionSlice,
  postQuestionSliceSuccess,
  postQuestionSliceFailure,
  getQuestionAdminSlice,
  getQuestionAdminSliceSuccess,
  getQuestionAdminSliceFailure,
  updateQuestion,
  updateQuestionSuccess,
  updateQuestionFailure,
  deleteQuestion,
  deleteQuestionSuccess,
  deleteQuestionFailure,
} from "../../../../store/slices/Dashboard/Question/questionSlice";
import {
  getAllQuestion,
  getAllQuestionSuccess,
  getAllQuestionFailure,
} from "../../../../store/slices/Dashboard/Question/getAllQuestionSlice";
import { successMessage } from "../../../../utils/message";

export const postQuestionApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(postQuestionSlice());
  try {
    const response = await post<any>(ENDPOINT.question.question, body);
    dispatch(postQuestionSliceSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postQuestionSliceFailure("Error"));
  }
};

export const getQuestionAdminApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  selectedTopicId?: number | null,
  searchTerm?: string,
) => {
  dispatch(getQuestionAdminSlice());
  try {
    let apiString = `${ENDPOINT.question.getQuestionAdmin}?page=${pageLimit.page}&limit=${pageLimit.limit}${searchTerm ?`&name=${searchTerm}` : ""}${selectedTopicId ?`&topicId=${selectedTopicId}` : ""} `;
    const response = await get<any>(apiString);
    dispatch(getQuestionAdminSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getQuestionAdminSliceFailure("Error"));
  }
};

export const deleteQuestionApi = async (dispatch: AppDispatch, id: number,onSuccess:any) => {
  dispatch(deleteQuestion());
  try {
    const response = await del<any>(`${ENDPOINT.question.question}/${id}`);
    dispatch(deleteQuestionSuccess(response?.data));
    successMessage(response?.message);
    onSuccess()
  } catch (err) {
    getError(err);
    dispatch(deleteQuestionFailure("Error"));
  }
};

export const updateQuestionApi = async (
  dispatch: AppDispatch,
  body: any,
  id: number,
  onSuccess: () => void,
) => {
  dispatch(updateQuestion());
  try {
    const response = await patch<any>(
      `${ENDPOINT.question.question}/${id}`,
      body,
    );
    dispatch(updateQuestionSuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateQuestionFailure("Error"));
  }
};
export const getAllQuestionApi = async (dispatch: AppDispatch) => {
  dispatch(getAllQuestion());
  try {
    const apiString = `${ENDPOINT.question.question}`;
    const response = await get<any>(apiString);
    dispatch(getAllQuestionSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllQuestionFailure("Error"));
  }
};
