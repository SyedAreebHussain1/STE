import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import { AppDispatch } from "../../../store";
import {
  openingStagesByJobId,
  openingStagesByJobIdSuccess,
  openingStagesByJobIdFailure,
} from "../../../slices/Recruitment/Pipeline/openingStagesByJobIdSlice";
import {
  getAllCandidatesByJobOpeningId,
  getAllCandidatesByJobOpeningIdSuccess,
  getAllCandidatesByJobOpeningIdFailure,
} from "../../../slices/Recruitment/Pipeline/getAllCandidatesByJobOpeningIdSlice";
import {
  updateJobOpeningStage,
  updateJobOpeningStageSuccess,
  updateJobOpeningStageFailure,
} from "../../../slices/Recruitment/Pipeline/updateJobOpeningStageSlice";
import {
  addOpeningStage,
  addOpeningStageSuccess,
  addOpeningStageFailure,
} from "../../../slices/Recruitment/Pipeline/addOpeningStageSlice";
export const openingStagesByJobIdApi = async (
  dispatch: AppDispatch,
  id: any,
  onSccess?: any,
) => {
  dispatch(openingStagesByJobId());
  try {
    const apiString = `${ENDPOINT.recruitment.openingStagesByJobId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(openingStagesByJobIdSuccess(response));
    onSccess && onSccess(response);
  } catch (err) {
    getError(err);
    dispatch(openingStagesByJobIdFailure("Error"));
  }
};
export const getAllCandidatesByJobOpeningIdApi = async (
  dispatch: AppDispatch,
  id: any,
  onSccess: any,
) => {
  dispatch(getAllCandidatesByJobOpeningId());
  try {
    const apiString = `${ENDPOINT.recruitment.getAllCandidatesByJobOpeningId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getAllCandidatesByJobOpeningIdSuccess(response));
    onSccess(response);
  } catch (err) {
    getError(err);
    dispatch(getAllCandidatesByJobOpeningIdFailure("Error"));
  }
};
export const updateJobOpeningStageApi = async (
  dispatch: AppDispatch,
  body: any,
) => {
  dispatch(updateJobOpeningStage());
  try {
    const apiString = `${ENDPOINT.recruitment.updateJobOpeningStage}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateJobOpeningStageSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(updateJobOpeningStageFailure("Error"));
  }
};
export const addOpeningStageApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(addOpeningStage());
  try {
    const apiString = `${ENDPOINT.recruitment.addOpeningStage}`;
    const response = await post<any>(apiString, body);
    dispatch(addOpeningStageSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addOpeningStageFailure("Error"));
  }
};
