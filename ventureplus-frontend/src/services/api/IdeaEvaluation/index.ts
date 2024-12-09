import {
  getIdeaEvaluationById,
  getIdeaEvaluationByIdFailure,
  getIdeaEvaluationByIdSuccess,
} from "../../../redux/slices/IdeaEvaluation/getIdeaEvaluationByIdSlice";

import { getIdeaValidationByBusinessId, getIdeaValidationByBusinessIdFailure, getIdeaValidationByBusinessIdSuccess } from "../../../redux/slices/IdeaEvaluation/getIdeaValidationByBusinessIdSlice";

import { AppDispatch } from "../../../redux/store";
import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getIdeaEvaluationByIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getIdeaEvaluationById());
  try {
    const apiString = `${ENDPOINT.ideaEvaluation.ideaAnswerValidation}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getIdeaEvaluationByIdSuccess(response));
    return response;
  } catch (err) {
    getError(err);
    dispatch(getIdeaEvaluationByIdFailure("Error"));
    return null;
  }
};


export const getIdeaValidationByBusinessIdApi = async (
  dispatch: AppDispatch
) => {
  dispatch(getIdeaValidationByBusinessId());
  try {
    const apiString = `${ENDPOINT.ideaValidationById.ideaValidationByBusinessId}`;
    const response = await get<any>(apiString);
    dispatch(getIdeaValidationByBusinessIdSuccess(response));
    return response;
  } catch (err) {
    getError(err);
    dispatch(getIdeaValidationByBusinessIdFailure("Error"));
    return null;
  }
};