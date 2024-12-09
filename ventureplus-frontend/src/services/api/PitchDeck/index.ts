import {
  getAttemptedPitchAnswers,
  getAttemptedPitchAnswersFailure,
  getAttemptedPitchAnswersSuccess,
} from "../../../redux/slices/BusinessToolkit/PitchDeck/getAttemptedPitchAnswersSlice";
import {
  getPitchQuestionById,
  getPitchQuestionByIdFailure,
  getPitchQuestionByIdSuccess,
} from "../../../redux/slices/BusinessToolkit/PitchDeck/getPitchQuestionByIdSlice";
import {
  postPitchDeck,
  postPitchDeckFailure,
  postPitchDeckSuccess,
} from "../../../redux/slices/BusinessToolkit/PitchDeck/pitchDeckSlice";
import {
  postPitchDeckAnswerFailure,
  postPitchDeckAnswer,
  postPitchDeckAnswerSuccess,
} from "../../../redux/slices/BusinessToolkit/PitchDeck/postPitchDeckAnswerSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const postPitchDeckApi = async (
  dispatch: AppDispatch,
  body: { type: any; businessId: number },
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onClose: any
) => {
  dispatch(postPitchDeck());
  try {
    const apiString = `${ENDPOINT.pitchDeck.pitch}`;
    const response = await post<any>(apiString, body);
    dispatch(postPitchDeckSuccess(response));
    successMessage(response?.message);
    onClose(response);
  } catch (err) {
    getError(err);
    dispatch(postPitchDeckFailure("Error"));
    setLoading(false);
  }
};

export const getInitialQuestionByTypeApi = async (
  pitchDeckType: string | number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess?: (response: any) => void
) => {
  try {
    const apiString = `${ENDPOINT.pitchDeck.question}?pitchDeckType=${pitchDeckType}`;
    const response = await get<any>(apiString);
    if (onSuccess) onSuccess(response);
  } catch (err) {
    getError(err);
    setLoading(false);
  }
};

export const getPitchQuestionByIdApi = async (
  dispatch: AppDispatch,
  questionId: number,
  businessId: number
) => {
  dispatch(getPitchQuestionById());
  try {
    const apiString = `${ENDPOINT.pitchDeck.question}/${questionId}/business/${businessId}`;
    const response = await get<any>(apiString);
    dispatch(getPitchQuestionByIdSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getPitchQuestionByIdFailure("Error"));
  }
};

export const getAttemptedPitchAnswersApi = async (
  dispatch: AppDispatch,
  questionId: number,
  pitchDeckId: number,
  onSuccess?: any
) => {
  dispatch(getAttemptedPitchAnswers());
  try {
    const apiString = `${ENDPOINT.pitchDeck.getAttemptedAnswer}?pitchDeckId=${pitchDeckId}&questionId=${questionId}`;
    const response = await get<any>(apiString);
    dispatch(getAttemptedPitchAnswersSuccess(response?.data));
    onSuccess && onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(getAttemptedPitchAnswersFailure("Error"));
  }
};

export const postPitchAnswerApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any
) => {
  dispatch(postPitchDeckAnswer());
  try {
    const apiString = `${ENDPOINT.pitchDeck.answer}`;
    const response = await post<any>(apiString, body);
    dispatch(postPitchDeckAnswerSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(postPitchDeckAnswerFailure("Error"));
  }
};
