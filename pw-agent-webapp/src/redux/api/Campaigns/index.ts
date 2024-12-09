import { get, getError, post, patch, postImage } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { getFromStorage } from "../../../utils/storage";
import {
  createNewCampaign,
  createNewCampaignFailure,
  createNewCampaignSuccess,
} from "../../slices/Campaigns/createNewCampaignSlice";
import {
  getAllAgencyCampaign,
  getAllAgencyCampaignFailure,
  getAllAgencyCampaignSuccess,
} from "../../slices/Campaigns/getAllAgencyCampaignSlice";
import {
  getLeadByCampaignId,
  getLeadByCampaignIdFailure,
  getLeadByCampaignIdSuccess,
} from "../../slices/Campaigns/getLeadByCampaignIdSlice";
import {
  patchCampaignName,
  patchCampaignNameFailure,
  patchCampaignNameSuccess,
} from "../../slices/Campaigns/patchCampaignNameSlice";
import {
  uploadExcelForExistingCampaign,
  uploadExcelForExistingCampaignFailure,
  uploadExcelForExistingCampaignSuccess,
} from "../../slices/Campaigns/uploadExcelForExistingCampaignSlice";
import {
  uploadExcelwithCampaignName,
  uploadExcelwithCampaignNameFailure,
  uploadExcelwithCampaignNameSuccess,
} from "../../slices/Campaigns/uploadExcelwithCampaignNameSlice";
import {
  getStagesByCampaignId,
  getStagesByCampaignIdSuccess,
  getStagesByCampaignIdFailure,
} from "../../slices/Campaigns/getStagesByCampaignIdSlice";
import {
  getPipelinesStagesLead,
  getPipelinesStagesLeadSuccess,
  getPipelinesStagesLeadFailure,
} from "../../slices/Campaigns/getPipelinesStagesLeadSlice";
import {
  getLeadStatusByCampaignId,
  getLeadStatusByCampaignIdFailure,
  getLeadStatusByCampaignIdSuccess,
} from "../../slices/Campaigns/getLeadStatusByCampaignIdSlice";
import {
  getTotalLeadAndLeadSourceByCampaignId,
  getTotalLeadAndLeadSourceByCampaignIdFailure,
  getTotalLeadAndLeadSourceByCampaignIdSuccess,
} from "../../slices/Campaigns/getTotalLeadAndLeadSourceByCampaignIdSlice";
import { AppDispatch } from "../../store";
import { message } from "antd";
import {
  getLeadStats,
  getLeadStatsFailure,
  getLeadStatsSuccess,
} from "../../slices/Campaigns/getLeadStatsSlice";
import {
  getLeadStatsForChart,
  getLeadStatsForChartFailure,
  getLeadStatsForChartSuccess,
} from "../../slices/Campaigns/getLeadStatsForChartSlice";
import {
  getTotalLeadLogs,
  getTotalLeadLogsFailure,
  getTotalLeadLogsSuccess,
} from "../../slices/Campaigns/getTotalLeadLogsByAgency";
import {
  editFinalLead,
  editFinalLeadSuccess,
  editFinalLeadFailure,
} from "../../slices/Campaigns/editFinalLeadSlice";
import {
  addPipeLineStage,
  addPipeLineStageSuccess,
  addPipeLineStageFailure,
} from "../../slices/Campaigns/addPipeLineStageSlice";
import {
  editPipelineStage,
  editPipelineStageSuccess,
  editPipelineStageFailure,
} from "../../slices/Campaigns/editPipelineStageSlice";
import {
  createFinalLead,
  createFinalLeadSuccess,
  createFinalLeadFailure,
} from "../../slices/Campaigns/createFinalLeadSlice";

export const createNewCampaignApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void,
) => {
  dispatch(createNewCampaign());
  try {
    const response = await post<any>(
      `${ENDPOINT.campaign.createNewCampaign}`,
      body,
    );
    dispatch(createNewCampaignSuccess(response.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createNewCampaignFailure("Error"));
  }
};
export const addPipeLineStageApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(addPipeLineStage());
  try {
    const response = await post<any>(
      `${ENDPOINT.campaign.addPipeLineStage}`,
      body,
    );
    dispatch(addPipeLineStageSuccess(response.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addPipeLineStageFailure("Error"));
  }
};
export const createFinalLeadApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(createFinalLead());
  try {
    const response = await post<any>(
      `${ENDPOINT.campaign.createFinalLead}`,
      body,
    );
    dispatch(createFinalLeadSuccess(response.data));
    successMessage(response?.message);
    onSuccess(response.message);
  } catch (err) {
    getError(err);
    dispatch(createFinalLeadFailure("Error"));
  }
};

export const getAllAgencyCampaignApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  search?: any,
) => {
  dispatch(getAllAgencyCampaign());
  const user = getFromStorage("user");
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.getAllAgnecyCampaign}/${user?.agencyId}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${search ? `&title=${search}` : ""}`,
    );
    dispatch(getAllAgencyCampaignSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllAgencyCampaignFailure("Error"));
  }
};

export const getAllLeadByCampaignIdApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  campaignId: any,
  sortBy?: any,
  leadStatus?: any,
  startDate?: any,
  endDate?: any,
  search?: any,
) => {
  dispatch(getLeadByCampaignId());

  try {
    const response = await get<any>(
      `${
        ENDPOINT.campaign.getAllLeadByCampaign
      }?campaignId=${campaignId}&page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${sortBy ? `&sortByOrder=${sortBy}` : ""}${
        leadStatus ? `&status=${leadStatus}` : ""
      }${startDate ? `&startDate=${startDate}` : ""}${
        endDate ? `&endDate=${endDate}` : ""
      }${search ? `&name=${search}` : ""}`,
    );
    dispatch(getLeadByCampaignIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadByCampaignIdFailure("Error"));
  }
};

export const patchCampaignNameApi = async (
  body: any,
  id: any,
  dispatch: AppDispatch,
  close: any,
) => {
  dispatch(patchCampaignName());
  try {
    const response = await patch<any>(
      `${ENDPOINT.campaign.patchCampaignName}/${id}`,
      body,
    );
    dispatch(patchCampaignNameSuccess(response.data));
    successMessage(response?.message);
    close();
  } catch (err) {
    getError(err);
    dispatch(patchCampaignNameFailure("Error"));
  }
};

export const uploadExcelForExistingCampaignApi = async (
  body: any,
  dispatch: AppDispatch,
  close: any,
) => {
  dispatch(uploadExcelForExistingCampaign());
  try {
    const response = await postImage<any>(
      `${ENDPOINT.campaign.uploadExcelForExistingCampaign}`,
      body,
    );
    dispatch(uploadExcelForExistingCampaignSuccess(response.data));
    successMessage(response?.message);
    close();
  } catch (err) {
    getError(err);
    dispatch(uploadExcelForExistingCampaignFailure("Error"));
  }
};

export const uploadExcelWithCampaignNameApi = async (
  body: any,
  dispatch: AppDispatch,
  close: any,
) => {
  dispatch(uploadExcelwithCampaignName());
  try {
    const response = await postImage<any>(
      `${ENDPOINT.campaign.uploadExcelwithCampaignName}`,
      body,
    );
    dispatch(uploadExcelwithCampaignNameSuccess(response.data));
    successMessage(response?.message);
    close();
  } catch (err) {
    getError(err);
    dispatch(uploadExcelwithCampaignNameFailure("Error"));
  }
};

export const getStagesByCampaignIdApi = async (
  dispatch: AppDispatch,
  campaignId: number,
  onSccess: any,
) => {
  dispatch(getStagesByCampaignId());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.getStagesByCampaignId}/${campaignId}`,
    );
    dispatch(getStagesByCampaignIdSuccess(response));
    onSccess(response);
  } catch (err) {
    getError(err);
    dispatch(getStagesByCampaignIdFailure("Error"));
  }
};

export const getTotalLeadAndLeadSourceByCampaignIdApi = async (
  dispatch: AppDispatch,
  campaignId?: any,
) => {
  dispatch(getTotalLeadAndLeadSourceByCampaignId());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.TotalLeadAndLeadSource}/${campaignId}`,
    );
    dispatch(getTotalLeadAndLeadSourceByCampaignIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getTotalLeadAndLeadSourceByCampaignIdFailure("Error"));
  }
};

export const getLeadStatusByCampaignIdApi = async (
  dispatch: AppDispatch,
  campaignId?: any,
) => {
  dispatch(getLeadStatusByCampaignId());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.LeadStatus}/${campaignId}`,
    );
    dispatch(getLeadStatusByCampaignIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadStatusByCampaignIdFailure("Error"));
  }
};
export const getPipelinesStagesLeadApi = async (
  dispatch: AppDispatch,
  pipelineStageId: number,
  onSccessByPipeline: any,
) => {
  dispatch(getPipelinesStagesLead());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.getPipelinesStagesLead}/${pipelineStageId}`,
    );
    dispatch(getPipelinesStagesLeadSuccess(response));
    onSccessByPipeline(response);
  } catch (err) {
    getError(err);
    dispatch(getPipelinesStagesLeadFailure("Error"));
  }
};

export const getLeadStatsApi = async (
  dispatch: AppDispatch,
  campaignId: number,
) => {
  dispatch(getLeadStats());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.getLeadStats}/${campaignId}`,
    );
    dispatch(getLeadStatsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadStatsFailure("Error"));
  }
};

export const getLeadStatsForChartApi = async (
  dispatch: AppDispatch,
  campaignId: number,
) => {
  dispatch(getLeadStatsForChart());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.getLeadStatsForChart}/${campaignId}`,
    );
    dispatch(getLeadStatsForChartSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadStatsForChartFailure("Error"));
  }
};
export const getTotalLeadLogsByAgencyApi = async (
  dispatch: AppDispatch,
  selectedField: any,
) => {
  dispatch(getTotalLeadLogs());
  try {
    const response = await get<any>(
      `${ENDPOINT.campaign.getTotalLeadLogsByAgency}${
        selectedField.duration ? `?duration=${selectedField.duration}` : ""
      }${selectedField.userId > 0 ? `&userId=${selectedField.userId}` : ""}`,
    );
    dispatch(getTotalLeadLogsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getTotalLeadLogsFailure("Error"));
  }
};
export const editFinalLeadApi = async (dispatch: AppDispatch, body: any) => {
  dispatch(editFinalLead());
  try {
    const response = await patch<any>(
      `${ENDPOINT.campaign.editFinalLead}`,
      body,
    );
    dispatch(editFinalLeadSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(editFinalLeadFailure("Error"));
  }
};

export const editPipelineStageApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: any,
) => {
  dispatch(editPipelineStage());
  try {
    const response = await patch<any>(
      `${ENDPOINT.campaign.editPipelineStage}/${id}`,
      body,
    );
    dispatch(editPipelineStageSuccess(response.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(editPipelineStageFailure("Error"));
  }
};
