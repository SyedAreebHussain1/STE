import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  getQuestion,
  getQuestionSuccess,
  getQuestionFailure,
} from "../../../redux/slices/Questions/getQuestionSlice";
import {
  createAnswer,
  createAnswerSuccess,
  createAnswerFailure,
} from "../../../redux/slices/Questions/createAnswerSlice";
import {
  updateAnswer,
  updateAnswerSuccess,
  updateAnswerFailure,
} from "../../../redux/slices/Questions/updateAnswerSlice";
import {
  getAnswerByIds,
  getAnswerByIdsSuccess,
  getAnswerByIdsFailure,
} from "../../../redux/slices/Questions/getAnswerByIdsSlice";
import {
  postTableValues,
  postTableValuesSuccess,
  postTableValuesFailure,
} from "../../../redux/slices/Questions/postTableValuesSlice";
import {
  getTableValues,
  getTableValuesSuccess,
  getTableValuesFailure,
} from "../../../redux/slices/Questions/getTableValuesSlice";
import {
  getAllTopic,
  getAllTopicSuccess,
  getAllTopicFailure,
} from "../../../redux/slices/Questions/getAllTopicSlice";
import {
  getQuestionById,
  getQuestionByIdSuccess,
  getQuestionByIdFailure,
} from "../../../redux/slices/Questions/getQuestionById";
import {
  linkedAnswers,
  linkedAnswersSuccess,
  linkedAnswersFailure,
} from "../../../redux/slices/Questions/linkedAnswersSlice";
import { infoMessage, successMessage } from "../../../utils/message";

export const getQuestionApi = async (
  dispatch: AppDispatch,
  topicId: number,
  businessPlanId: number,
  onSuccess: any
) => {
  dispatch(getQuestion());
  try {
    const apiString = `${
      ENDPOINT.questions.getQuestion
    }/${topicId}/businessPlan/${Number(businessPlanId)}`;
    const response = await get<any>(apiString);
    dispatch(getQuestionSuccess(response?.data));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(getQuestionFailure("Error"));
  }
};
export const getQuestionByIdApi = async (
  dispatch: AppDispatch,
  questionId: number,
  businessPlanId: number,
  onSuccess: any,
  answerId?: number
) => {
  dispatch(getQuestionById());
  try {
    const apiString = `${
      ENDPOINT.questions.getQuestionById
    }/${questionId}/businessPlanId/${businessPlanId}/${
      answerId == undefined ? 0 : answerId
    }`;
    const response = await get<any>(apiString);
    dispatch(getQuestionByIdSuccess(response?.data));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(getQuestionByIdFailure("Error"));
  }
};
export const createAnswerApi = async (
  dispatch: AppDispatch,
  body: any,
  next: any
) => {
  dispatch(createAnswer());
  try {
    const response = await post<any>(ENDPOINT.questions.createAnswer, body);
    dispatch(createAnswerSuccess(response));
    next();
  } catch (err) {
    getError(err);
    dispatch(createAnswerFailure("Error"));
  }
};
export const updateAnswerApi = async (
  dispatch: AppDispatch,
  body: any,
  next: any
) => {
  dispatch(updateAnswer());
  try {
    const apiString = `${ENDPOINT.questions.updateAnswer}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateAnswerSuccess(response));
    next();
  } catch (err) {
    getError(err);
    dispatch(updateAnswerFailure("Error"));
  }
};
export const getAnswerByIdsApi = async (
  dispatch: AppDispatch,
  ids: {
    questionId: number;
    businessPlanId: number;
    answerId?: number;
  },
  bpElement?: any,
  getOneLinkedAnswer?: string
) => {
  dispatch(getAnswerByIds());
  try {
    const apiString =
      getOneLinkedAnswer === "getOneLinkedAnswer"
        ? `${ENDPOINT.questions.getAnswerByIds}/getOneLinkedAnswer?questionId=${ids?.questionId}&answerId=${ids.answerId}&businessPlanId=${ids?.businessPlanId}`
        : `${ENDPOINT.questions.getAnswerByIds}/getOneAnswerByQuestionId?${
            bpElement?.bpType ? `${bpElement?.bpType}=${bpElement?.id}&` : ""
          }questionId=${ids?.questionId}&businessPlanId=${ids?.businessPlanId}`;
    const response = await get<any>(apiString);
    dispatch(getAnswerByIdsSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getAnswerByIdsFailure("Error"));
  }
};
export const postTableValuesApi = async (
  dispatch: AppDispatch,
  body: any,
  next: any
) => {
  dispatch(postTableValues());
  try {
    const response = await post<any>(ENDPOINT.questions.postTableValues, body);
    dispatch(postTableValuesSuccess(response));
    next();
  } catch (err) {
    getError(err);
    dispatch(postTableValuesFailure("Error"));
  }
};
export const getTableValuesApi = async (
  dispatch: AppDispatch,
  id: { answerId: number }
) => {
  dispatch(getTableValues());
  try {
    const apiString = `${ENDPOINT.questions.getTableValues}/${id?.answerId}`;
    const response = await get<any>(apiString);
    dispatch(getTableValuesSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getTableValuesFailure("Error"));
  }
};
export const getAllTopicApi = async (dispatch: AppDispatch) => {
  dispatch(getAllTopic());
  try {
    const apiString = `${ENDPOINT.questions.getAllTopic}`;
    const response = await get<any>(apiString);
    dispatch(getAllTopicSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getAllTopicFailure("Error"));
  }
};

export const createContentApi = async (dispatch: AppDispatch, body: any) => {
  dispatch(createAnswer());
  try {
    const response = await post<any>(ENDPOINT.questions.createContent, body);
    dispatch(createAnswerSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(createAnswerFailure("Error"));
  }
};

export const linkedAnswersApi = async (
  dispatch: AppDispatch,
  body: any,
  next: any
) => {
  dispatch(linkedAnswers());
  try {
    const response = await post<any>(ENDPOINT.questions.linkedAnswers, body);
    dispatch(linkedAnswersSuccess(response));
    next();
  } catch (err) {
    getError(err);
    dispatch(linkedAnswersFailure("Error"));
  }
};

export const generateSummaryApi = async (businessPlanId: number) => {
  try {
    const body = {
      businessPlanId: businessPlanId,
    };
    infoMessage("Generating Summary. Please wait, this might take some time.");
    await post<any>(`${ENDPOINT.questions.createSummary}`, body).then(
      (res) => {}
    );
  } catch (err) {}
};
