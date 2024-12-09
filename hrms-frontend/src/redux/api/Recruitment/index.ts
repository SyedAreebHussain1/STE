import {
  del,
  get,
  getError,
  patch,
  post,
  postImage,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  createCandidate,
  createCandidateFailure,
  createCandidateSuccess,
} from "../../slices/Recruitment/Candidate/createCandidateSlice";
import {
  deleteCandidate,
  deleteCandidateFailure,
  deleteCandidateSuccess,
} from "../../slices/Recruitment/Candidate/deleteCandidateSlice";
import {
  getCandidateById,
  getCandidateByIdFailure,
  getCandidateByIdSuccess,
} from "../../slices/Recruitment/Candidate/getCandidateByIdSlice";
import {
  checkInterviewEvaluation,
  checkInterviewEvaluationFailure,
  checkInterviewEvaluationSuccess,
} from "../../slices/Recruitment/Evaluation/checkInterviewEvaluationSlice";
import {
  deleteEvaluation,
  deleteEvaluationFailure,
  deleteEvaluationSuccess,
} from "../../slices/Recruitment/Evaluation/deleteEvaluationSlice";
import {
  getAllEvaluations,
  getAllEvaluationsFailure,
  getAllEvaluationsSuccess,
} from "../../slices/Recruitment/Evaluation/getAllEvaluationsSlice";
import {
  getEvaluationById,
  getEvaluationByIdFailure,
  getEvaluationByIdSuccess,
} from "../../slices/Recruitment/Evaluation/getEvaluationByIdSlice";
import {
  PostEvaluation,
  PostEvaluationFailure,
  PostEvaluationSuccess,
} from "../../slices/Recruitment/Evaluation/postEvaluationSlice";
import {
  updateEvaluation,
  updateEvaluationFailure,
  updateEvaluationSuccess,
} from "../../slices/Recruitment/Evaluation/updateEvaluationSlice";
import {
  deleteInterview,
  deleteInterviewFailure,
  deleteInterviewSuccess,
} from "../../slices/Recruitment/Interviews/deleteInterviewSlice";
import {
  getAllInterviews,
  getAllInterviewsFailure,
  getAllInterviewsSuccess,
} from "../../slices/Recruitment/Interviews/getAllInterviewsSlice";
import {
  getInterviewById,
  getInterviewByIdFailure,
  getInterviewByIdSuccess,
} from "../../slices/Recruitment/Interviews/getInterviewByIdSlice";
import {
  getInterviewers,
  getInterviewersFailure,
  getInterviewersSuccess,
} from "../../slices/Recruitment/Interviews/getInterviewersSlice";
import {
  ScheduleInterview,
  ScheduleInterviewFailure,
  ScheduleInterviewSuccess,
} from "../../slices/Recruitment/Interviews/scheduleInterviewSlice";
import {
  updateInterview,
  updateInterviewFailure,
  updateInterviewSuccess,
} from "../../slices/Recruitment/Interviews/updateInterviewSlice";
import {
  createNewJobOpening,
  createNewJobOpeningFailure,
  createNewJobOpeningSuccess,
} from "../../slices/Recruitment/JobOpenings/createNewJobOpeningSlice";
import {
  deleteJobOpening,
  deleteJobOpeningFailure,
  deleteJobOpeningSuccess,
} from "../../slices/Recruitment/JobOpenings/deleteJobOpeningSlice";
import {
  editJobOpening,
  editJobOpeningFailure,
  editJobOpeningSuccess,
} from "../../slices/Recruitment/JobOpenings/editJobOpeningSlice";
import {
  getAllCandidatesByJobId,
  getAllCandidatesByJobIdFailure,
  getAllCandidatesByJobIdSuccess,
} from "../../slices/Recruitment/JobOpenings/getAllCandidatesByJobIdSlice";
import {
  getCompanyDepartmentsDropdown,
  getCompanyDepartmentsDropdownFailure,
  getCompanyDepartmentsDropdownSuccess,
} from "../../slices/Recruitment/JobOpenings/getCompanyDepartmentsDropdownSlice";
import {
  getJobOpeningById,
  getJobOpeningByIdFailure,
  getJobOpeningByIdSuccess,
} from "../../slices/Recruitment/JobOpenings/getJobOpeningByIdSlice";
import {
  getJobOpenings,
  getJobOpeningsFailure,
  getJobOpeningsSuccess,
} from "../../slices/Recruitment/JobOpenings/getJobOpeningsSlice";
import {
  updateJobOpeningActiveStatus,
  updateJobOpeningActiveStatusFailure,
  updateJobOpeningActiveStatusSuccess,
} from "../../slices/Recruitment/JobOpenings/updateJobOpeningActiveStatusSlice";
import {
  decodeUrl,
  decodeUrlSuccess,
  decodeUrlFailure,
} from "../../slices/Recruitment/Candidate/decodeUrlSlice";
import { AppDispatch } from "../../store";
import {
  updateStageTitle,
  updateStageTitleFailure,
  updateStageTitleSuccess,
} from "../../slices/Recruitment/Pipeline/updateStageTitleSlice";
import {
  usersForUpdate,
  usersForUpdateSuccess,
  usersForUpdateFailure,
} from "../../slices/Recruitment/Interviews/UsersForUpdateSlice";

export const getJobOpeningsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  query?: { jobOpeningTitle?: any; departmentId?: any },
) => {
  dispatch(getJobOpenings());
  try {
    const apiString = `${ENDPOINT.recruitment.getJobOpenings}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      "&jobOpeningTitle=" +
      (query?.jobOpeningTitle ? query?.jobOpeningTitle : "")
    }${query?.departmentId ? "&departmentId=" + query.departmentId : ""}`;
    const response = await get<any>(apiString);
    dispatch(getJobOpeningsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getJobOpeningsFailure("Error"));
  }
};

export const getJobOpeningByIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getJobOpeningById());
  try {
    const apiString = `${ENDPOINT.recruitment.getJobOpenings}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getJobOpeningByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getJobOpeningByIdFailure("Error"));
  }
};

export const createNewJobOpeningApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(createNewJobOpening());
  try {
    const response = await post<any>(ENDPOINT.recruitment.getJobOpenings, body);
    dispatch(createNewJobOpeningSuccess(response));
    successMessage(response?.message);
    onClose(response?.data?.id);
  } catch (err) {
    getError(err);
    dispatch(createNewJobOpeningFailure("Error"));
  }
};

export const editJobOpeningApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(editJobOpening());
  try {
    const apiString = `${ENDPOINT.recruitment.getJobOpenings}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editJobOpeningSuccess(response));
    successMessage(response?.message);
    onClose(response?.data?.id);
  } catch (err) {
    getError(err);
    dispatch(editJobOpeningFailure("Error"));
  }
};

export const deleteJobOpeningApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteJobOpening());
  try {
    const apiString = `${ENDPOINT.recruitment.getJobOpenings}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteJobOpeningSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteJobOpeningFailure("Error"));
  }
};

export const getCompanyDepartmentsDropdownApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess: any,
) => {
  dispatch(getCompanyDepartmentsDropdown());
  try {
    const apiString = `${ENDPOINT.recruitment.getCompanyDepartmentsDropdown}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getCompanyDepartmentsDropdownSuccess(response));
    onSuccess(response?.data?.items);
  } catch (err) {
    getError(err);
    dispatch(getCompanyDepartmentsDropdownFailure("Error"));
  }
};

export const updateJobOpeningActiveStatusApi = async (
  dispatch: AppDispatch,
  id: any,
  body: {
    isJobOpening: boolean;
  },
  onClose: any,
) => {
  dispatch(updateJobOpeningActiveStatus());
  try {
    const apiString = `${ENDPOINT.recruitment.updateJobOpeningStatus}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateJobOpeningActiveStatusSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(updateJobOpeningActiveStatusFailure("Error"));
  }
};

export const getAllCandidatesByJobIdApi = async (
  dispatch: AppDispatch,
  id: any,
  pageLimit: { page: any; limit: any },
  candidateName?: any,
) => {
  dispatch(getAllCandidatesByJobId());
  try {
    const apiString = `${ENDPOINT.recruitment.getAllCandidatesByJobId}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&jobOpeningId=${id}&candidateName=${
      candidateName ? candidateName : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getAllCandidatesByJobIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllCandidatesByJobIdFailure("Error"));
  }
};

export const createCandidateApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(createCandidate());
  try {
    const response = await postImage<any>(
      ENDPOINT.recruitment.createCandidate,
      body,
    );
    dispatch(createCandidateSuccess(response));
    successMessage(response?.message);
    onClose(response?.data?.id);
  } catch (err) {
    getError(err);
    dispatch(createCandidateFailure("Error"));
  }
};

export const deleteCandidateApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteCandidate());
  try {
    const apiString = `${ENDPOINT.recruitment.createCandidate}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteCandidateSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteCandidateFailure("Error"));
  }
};

export const getCandidateByIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getCandidateById());
  try {
    const apiString = `${ENDPOINT.recruitment.createCandidate}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getCandidateByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCandidateByIdFailure("Error"));
  }
};

export const ScheduleInterviewApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(ScheduleInterview());
  try {
    const response = await post<any>(
      ENDPOINT.recruitment.scheduleInterview,
      body,
    );
    dispatch(ScheduleInterviewSuccess(response));
    successMessage(response?.message);
    onClose(response?.data?.id);
  } catch (err) {
    getError(err);
    dispatch(ScheduleInterviewFailure("Error"));
  }
};

export const getAllInterviewsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  InterviewsFind?: string,
  searchValue?: string,
) => {
  dispatch(getAllInterviews());
  try {
    const apiString = `${ENDPOINT.recruitment.getAllInterviews}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      "&InterviewsFind=" + (InterviewsFind ? InterviewsFind : "")
    }${"&title=" + (searchValue ? searchValue : "")}`;
    const response = await get<any>(apiString);
    dispatch(getAllInterviewsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllInterviewsFailure("Error"));
  }
};

export const getInterviewByIdApi = async (
  dispatch: AppDispatch,
  id: any,
  onSuccess?: any,
) => {
  dispatch(getInterviewById());
  try {
    const apiString = `${ENDPOINT.recruitment.scheduleInterview}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getInterviewByIdSuccess(response));
    onSuccess && onSuccess();
  } catch (err) {
    getError(err);
    dispatch(getInterviewByIdFailure("Error"));
  }
};

export const deleteInterviewApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteInterview());
  try {
    const apiString = `${ENDPOINT.recruitment.scheduleInterview}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteInterviewSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteInterviewFailure("Error"));
  }
};

export const updateInterviewApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(updateInterview());
  try {
    const apiString = `${ENDPOINT.recruitment.scheduleInterview}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateInterviewSuccess(response));
    successMessage(response?.message);
    onClose(id);
  } catch (err) {
    getError(err);
    dispatch(updateInterviewFailure("Error"));
  }
};

export const postEvaluationApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(PostEvaluation());
  try {
    const response = await post<any>(ENDPOINT.recruitment.postEvaluation, body);
    dispatch(PostEvaluationSuccess(response));
    successMessage(response?.message);
    onClose(response?.data?.id);
  } catch (err) {
    getError(err);
    dispatch(PostEvaluationFailure("Error"));
  }
};

export const getAllEvaluationsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchValue?: string,
) => {
  dispatch(getAllEvaluations());
  try {
    const apiString = `${ENDPOINT.recruitment.getAllEvaluations}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      "&candidateName=" + (searchValue ? searchValue : "")
    }`;
    const response = await get<any>(apiString);
    dispatch(getAllEvaluationsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllEvaluationsFailure("Error"));
  }
};

export const getEvaluationByIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getEvaluationById());
  try {
    const apiString = `${ENDPOINT.recruitment.getEvaluation}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getEvaluationByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getEvaluationByIdFailure("Error"));
  }
};

export const updateEvaluationApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(updateEvaluation());
  try {
    const apiString = `${ENDPOINT.recruitment.updateEvalution}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateEvaluationSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(updateEvaluationFailure("Error"));
  }
};

export const deleteEvaluationApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any,
) => {
  dispatch(deleteEvaluation());
  try {
    const apiString = `${ENDPOINT.recruitment.deleteEvaluation}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteEvaluationSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteEvaluationFailure("Error"));
  }
};

export const getInterviewersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: any,
  InterviewsFind?: string,
) => {
  dispatch(getInterviewers());
  try {
    const apiString = `${ENDPOINT.recruitment.getInterviewers}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      "&InterviewsFind =" + (InterviewsFind ? InterviewsFind : "")
    }`;
    const response = await get<any>(apiString);
    if (onSuccess) {
      onSuccess(response?.data);
    }
    dispatch(getInterviewersSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getInterviewersFailure("Error"));
  }
};

export const checkInterviewEvaluationApi = async (
  dispatch: AppDispatch,
  id: any,
  onClose: any,
) => {
  dispatch(checkInterviewEvaluation());
  try {
    const apiString = `${ENDPOINT.recruitment.checkInterviewEvaluation}/${id}`;
    const response = await get<any>(apiString);
    onClose(response);
    dispatch(checkInterviewEvaluationSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(checkInterviewEvaluationFailure("Error"));
  }
};
export const decodeUrlApi = async (dispatch: AppDispatch, url: any) => {
  dispatch(decodeUrl());
  try {
    const apiString = `${ENDPOINT.recruitment.decodeUrl}/${url}`;
    const response = await get<any>(apiString);
    dispatch(decodeUrlSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(decodeUrlFailure("Error"));
  }
};

export const updateStageTitleApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any,
) => {
  dispatch(updateStageTitle());
  try {
    const apiString = `${ENDPOINT.recruitment.updateStageTitle}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateStageTitleSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(updateStageTitleFailure("Error"));
  }
};
export const usersForUpdateApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(usersForUpdate());
  try {
    const apiString = `${ENDPOINT.recruitment.UsersForUpdate}/${id}`;
    const response = await get<any>(apiString);
    dispatch(usersForUpdateSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(usersForUpdateFailure("Error"));
  }
};
