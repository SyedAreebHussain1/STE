import {
  getError,
  post,
  get,
  patch,
  postImage,
} from "../../../../utils/baseApi";
import { AppDispatch } from "../../../store";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import {
  addCampaigns,
  addCampaignsSuccess,
  addCampaignsFailure,
} from "../../../slices/SalesPlus/Campaigns/addCampaignsSlice";
import {
  createPipelineStages,
  createPipelineStagesSuccess,
  createPipelineStagesFailure,
} from "../../../slices/SalesPlus/Campaigns/createPipelineStagesSlice";
import {
  getCampaigns,
  getCampaignsSuccess,
  getCampaignsFailure,
} from "../../../slices/SalesPlus/Campaigns/getCampaignsSlice";
import {
  updateCampaigns,
  updateCampaignsSuccess,
  updateCampaignsFailure,
} from "../../../slices/SalesPlus/Campaigns/updateCampaignsSlice";
import {
  getDepartmentUsers,
  getDepartmentUsersSuccess,
  getDepartmentUsersFailure,
} from "../../../slices/SalesPlus/Campaigns/getDepartmentUsersSlice";
import {
  getAllPipelineStages,
  getAllPipelineStagesSuccess,
  getAllPipelineStagesFailure,
} from "../../../slices/SalesPlus/Campaigns/getAllPipelineStagesSlice";
import {
  getLeadsByCampaignId,
  getLeadsByCampaignIdSuccess,
  getLeadsByCampaignIdFailure,
} from "../../../slices/SalesPlus/Campaigns/getLeadsByCampaignIdSlice";
import {
  getLeadStats,
  getLeadStatsSuccess,
  getLeadStatsFailure,
} from "../../../slices/SalesPlus/Campaigns/getLeadStatsSlice";
import {
  getLeadStatsForChart,
  getLeadStatsForChartSuccess,
  getLeadStatsForChartFailure,
} from "../../../slices/SalesPlus/Campaigns/getLeadStatsForChartSlice";
import {
  getfinalLeadUsers,
  getfinalLeadSuccess,
  getfinalLeadFailure,
} from "../../../slices/SalesPlus/Campaigns/getfinalLeadSlice";
import {
  editFinalLead,
  editFinalLeadSuccess,
  editFinalLeadFailure,
} from "../../../slices/SalesPlus/Campaigns/editFinalLeadSlice";
import {
  createFinalLeads,
  createFinalLeadsSuccess,
  createFinalLeadsFailure,
} from "../../../slices/SalesPlus/Campaigns/createFinalLeadsSlice";
import {
  leadsUploadExcelByCampaignName,
  leadsUploadExcelByCampaignNameSuccess,
  leadsUploadExcelByCampaignNameFailure,
} from "../../../slices/SalesPlus/Campaigns/leadsUploadExcelByCampaignNameSlice";
import {
  leadsuploadExcelForCampaign,
  leadsuploadExcelForCampaignSuccess,
  leadsuploadExcelForCampaignFailure,
} from "../../../slices/SalesPlus/Campaigns/leadsuploadExcelForCampaignSlice";

export const createFinalLeadsApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(createFinalLeads());
  try {
    const response = await post<any>(ENDPOINT.salesPlus.createFinalLeads, body);
    dispatch(createFinalLeadsSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess(response?.message);
  } catch (err) {
    getError(err);
    dispatch(createFinalLeadsFailure("Error"));
  }
};

export const addCampaignsApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void
) => {
  dispatch(addCampaigns());
  try {
    const response = await post<any>(ENDPOINT.salesPlus.addCampaigns, body);
    dispatch(addCampaignsSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addCampaignsFailure("Error"));
  }
};
export const createPipelineStagesApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void
) => {
  dispatch(createPipelineStages());
  try {
    const response = await post<any>(
      ENDPOINT.salesPlus.createPipelineStages,
      body
    );
    dispatch(createPipelineStagesSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createPipelineStagesFailure("Error"));
  }
};

export const getCampaignsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  search?: any
) => {
  dispatch(getCampaigns());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getCampaigns}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${search ? `&title=${search}` : ""}`
    );

    dispatch(getCampaignsSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getCampaignsFailure("Error"));
  }
};
export const getLeadStatsForChartApi = async (
  dispatch: AppDispatch,
  id: any
) => {
  dispatch(getLeadStatsForChart());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getLeadStatsForChart}/${id}`
    );

    dispatch(getLeadStatsForChartSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getLeadStatsForChartFailure("Error"));
  }
};
export const getLeadStatsApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getLeadStats());
  try {
    const response = await get<any>(`${ENDPOINT.salesPlus.getLeadStats}/${id}`);

    dispatch(getLeadStatsSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getLeadStatsFailure("Error"));
  }
};
export const getLeadsByCampaignIdApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  campaignId: any,
  sortBy?: any,
  leadStatus?: any,
  startDate?: any,
  endDate?: any,
  search?: any
) => {
  dispatch(getLeadsByCampaignId());
  try {
    const response = await get<any>(
      `${
        ENDPOINT.salesPlus.getLeadsByCampaignId
      }?campaignId=${campaignId}&page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${sortBy ? `&sortByOrder=${sortBy}` : ""}${
        leadStatus ? `&status=${leadStatus}` : ""
      }${startDate ? `&startDate=${startDate}` : ""}${
        endDate ? `&endDate=${endDate}` : ""
      }${search ? `&name=${search}` : ""}`
    );

    dispatch(getLeadsByCampaignIdSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getLeadsByCampaignIdFailure("Error"));
  }
};
export const getAllPipelineStagesApi = async (
  dispatch: AppDispatch,
  id: any,
  onSccess: any
) => {
  dispatch(getAllPipelineStages());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllPipelineStages}/${id}`
    );
    onSccess(response?.data);
    dispatch(getAllPipelineStagesSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getAllPipelineStagesFailure("Error"));
  }
};
export const getDepartmentUsersApi = async (dispatch: AppDispatch) => {
  dispatch(getDepartmentUsers());
  try {
    const response = await get<any>(`${ENDPOINT.salesPlus.getDepartmentUsers}`);
    dispatch(getDepartmentUsersSuccess(response?.data));
  } catch (err) {
    // getError(err);
    dispatch(getDepartmentUsersFailure("Error"));
  }
};

export const getfinalLeadUsersApi = async (
  dispatch: AppDispatch,
  id: any,
  onSccessByPipeline: any
) => {
  dispatch(getfinalLeadUsers());
  try {
    const response = await get<any>(`${ENDPOINT.salesPlus.getfinalLead}/${id}`);
    dispatch(getfinalLeadSuccess(response?.data));
    onSccessByPipeline(response?.data);
  } catch (err) {
    getError(err);
    dispatch(getfinalLeadFailure("Error"));
  }
};

export const updateCampaignsApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: () => void
) => {
  dispatch(updateCampaigns());
  try {
    const response = await patch<any>(
      `${ENDPOINT.salesPlus.updateCampaigns}/${id}`,
      body
    );
    dispatch(updateCampaignsSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateCampaignsFailure("Error"));
  }
};
export const editFinalLeadApi = async (dispatch: AppDispatch, body: any) => {
  dispatch(editFinalLead());
  try {
    const apiString = `${ENDPOINT.salesPlus.editFinalLead}`;
    const response = await patch<any>(apiString, body);
    dispatch(editFinalLeadSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(editFinalLeadFailure("Error"));
  }
};
export const leadsUploadExcelByCampaignNameApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(leadsUploadExcelByCampaignName());
  try {
    const response = await postImage<any>(
      ENDPOINT.salesPlus.leadsUploadExcelByCampaignName,
      body
    );
    dispatch(leadsUploadExcelByCampaignNameSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess(response?.message);
  } catch (err) {
    getError(err);
    dispatch(leadsUploadExcelByCampaignNameFailure("Error"));
  }
};
export const leadsuploadExcelForCampaignApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(leadsuploadExcelForCampaign());
  try {
    const response = await postImage<any>(
      ENDPOINT.salesPlus.leadsuploadExcelForCampaign,
      body
    );
    dispatch(leadsuploadExcelForCampaignSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess(response?.message);
  } catch (err) {
    getError(err);
    dispatch(leadsuploadExcelForCampaignFailure("Error"));
  }
};
