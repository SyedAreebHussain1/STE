import {
  ideaValidation,
  ideaValidationSuccess,
  ideaValidationFailure,
} from "../../../redux/slices/AddNewIdea/ideaValidationSlice";
import {
  getIdeaQuestion,
  getIdeaQuestionFailure,
  getIdeaQuestionSuccess,
} from "../../../redux/slices/AddNewIdea/getIdeaQuestionSlice";
import {
  submitIdeaAnswers,
  submitIdeaAnswersFailure,
  submitIdeaAnswersSuccess,
} from "../../../redux/slices/AddNewIdea/submitIdeaAnswersSlice";
import {
  getIdeaQuestionAndAnswerById,
  getIdeaQuestionAndAnswerByIdFailure,
  getIdeaQuestionAndAnswerByIdSuccess,
} from "../../../redux/slices/AddNewIdea/getIdeaQuestionAndAnswerByIdSlice";
import {
  patchIdeaAnswersById,
  patchIdeaAnswersByIdFailure,
  patchIdeaAnswersByIdSuccess,
} from "../../../redux/slices/AddNewIdea/patchIdeaAnswersByIdSlice";
import { AppDispatch } from "../../../redux/store";
import { getError, post, get, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { message } from "antd";
import { postIdeaId, postIdeaIdFailure, postIdeaIdSuccess } from "../../../redux/slices/AddNewIdea/postIdeaId";

export const ideaValidationApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (e: any) => void,
) => {
  dispatch(ideaValidation());
  try {
    const response = await post<any>(ENDPOINT.addNewIdea.ideaValidation, body);
    dispatch(ideaValidationSuccess(response.data));
    successMessage(response.message);
    onSuccess(response?.data);
  } catch (err) {
    getError(err);
    dispatch(ideaValidationFailure("An unexpected error occurred"));
  }
};

export const getIdeaQuestionApi = async (
  dispatch: AppDispatch,
  onSuccess?: (res: any) => void,
) => {
  dispatch(getIdeaQuestion());
  try {
    const apiString = `${ENDPOINT.addNewIdea.ideaQuestion}`;
    const response = await get<any>(apiString);
    dispatch(getIdeaQuestionSuccess(response));
    if (onSuccess) onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(getIdeaQuestionFailure("Error"));
  }
};

export const submitIdeaAnswersApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (e: any) => void,
) => {
  dispatch(submitIdeaAnswers());
  try {
    const response = await post<any>(ENDPOINT.addNewIdea.ideaAnswer, body);
    dispatch(submitIdeaAnswersSuccess(response.data));
    onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(submitIdeaAnswersFailure("An unexpected error occurred"));
  }
};

export const getIdeaQuestionAndAnswerByIdApi = async (
  dispatch: AppDispatch,
  id: number,
) => {
  dispatch(getIdeaQuestionAndAnswerById());
  try {
    const apiString = `${ENDPOINT.addNewIdea.getideaAnswerByIdeaValidationId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getIdeaQuestionAndAnswerByIdSuccess(response));
    return response;
  } catch (err) {
    getError(err);
    dispatch(getIdeaQuestionAndAnswerByIdFailure("Error"));
    return null;
  }
};

export const patchIdeaAnswersByIdApi = async (
  dispatch: AppDispatch,
  body: any,
  id: number,
  onSuccess: (e: any) => void,
) => {
  dispatch(patchIdeaAnswersById());
  try {
    const apiString = `${ENDPOINT.ideaEvaluation.ideaAnswerValidation}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(patchIdeaAnswersByIdSuccess(response));
    onSuccess(response);
    successMessage(response.message);
  } catch (err) {
    getError(err);
    dispatch(patchIdeaAnswersByIdFailure("Error"));
  }
};


export const postIdeaIdApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: (e: any) => void,
) => {
  dispatch(postIdeaId());
  try {
    const response = await post<any>(ENDPOINT.addNewIdea.postIdeaValidaitonId, body);
    dispatch(postIdeaIdSuccess(response?.data));
    successMessage(response?.message);
    onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(postIdeaIdFailure("An unexpected error occurred"));
  }
};