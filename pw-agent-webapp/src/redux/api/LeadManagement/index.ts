import {
  del,
  get,
  getError,
  patch,
  post,
  postImage,
  update,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { AppDispatch } from "../../store";
import { message } from "antd";
import {
  getAllLead,
  getAllLeadSuccess,
  getAllLeadFailure,
} from "../../slices/LeadManagement/getAllLeadSlice";
import {
  getAllLeadsFollowUp,
  getAllLeadsFollowUpSuccess,
  getAllLeadsFollowUpFailure,
} from "../../slices/LeadManagement/getAllLeadsFollowUpSlice";
import {
  getLeadDataById,
  getLeadDataByIdSuccess,
  getLeadDataByIdFailure,
} from "../../slices/LeadManagement/getLeadDataByIdSlice";
import {
  deleteLeadInventory,
  deleteLeadInventorySuccess,
  deleteLeadInventoryFailure,
} from "../../slices/LeadManagement/deleteLeadInventorySlice";
import {
  updateLeadStatus,
  updateLeadStatusySuccess,
  updateLeadStatusFailure,
} from "../../slices/LeadManagement/updateLeadStatusSlice";
import {
  pwpGetAllProjectList,
  pwpGetAllProjectListSuccess,
  pwpGetAllProjectListFailure,
} from "../../slices/LeadManagement/pwpGetAllProjectListSlice";
import {
  pwpGetAllProductList,
  pwpGetAllProductListSuccess,
  pwpGetAllProductListFailure,
} from "../../slices/LeadManagement/pwpGetAllProductListSlice";
import {
  getAllProjectInventory,
  getAllProjectInventorySuccess,
  getAllProjectInventoryFailure,
} from "../../slices/LeadManagement/getAllProjectInventorySlice";
import {
  getEnumsforleadInvntoryModule,
  getEnumsforleadInvntoryModuleSuccess,
  getEnumsforleadInvntoryModuleFailure,
} from "../../slices/LeadManagement/getEnumsforleadInvntoryModuleSlice";
import {
  getAvailableInventoriesByProjectId,
  getAvailableInventoriesByProjectIdSuccess,
  getAvailableInventoriesByProjectIdFailure,
} from "../../slices/LeadManagement/getAvailableInventoriesByProjectIdSlice";
import {
  addNewLead,
  addNewLeadSuccess,
  addNewLeadFailure,
} from "../../slices/LeadManagement/addNewLeadSlice";
import {
  getLeadsAssignUsersOrnotAssignUsers,
  getLeadsAssignUsersOrnotAssignUsersSuccess,
  getLeadsAssignUsersOrnotAssignUsersFailure,
} from "../../slices/LeadManagement/getLeadsAssignUsersOrnotAssignUsersSlice";
import {
  getLeadlog,
  getLeadlogSuccess,
  getLeadlogFailure,
} from "../../slices/LeadManagement/getLeadlogSlice";
import {
  addNewLeadlogNote,
  addNewLeadlogNoteSuccess,
  addNewLeadlogNoteFailure,
} from "../../slices/LeadManagement/addNewLeadlogNoteSlice";
import {
  assignUserNew,
  assignUserNewSuccess,
  assignUserNewFailure,
} from "../../slices/LeadManagement/assignUserNewSlice";
import {
  addNewLeadFollowUp,
  addNewLeadFollowUpSuccess,
  addNewLeadFollowUpFailure,
} from "../../slices/LeadManagement/addNewLeadFollowUpSlice";
import {
  updateLeadDataById,
  updateLeadDataByIdSuccess,
  updateLeadDataByIdFailure,
} from "../../slices/LeadManagement/updateLeadDataByIdSlice";
import {
  addNewLeadlog,
  addNewLeadlogSuccess,
  addNewLeadlogFailure,
} from "../../slices/LeadManagement/addNewLeadlogSlice";
import {
  getAgentCalendarSlotList,
  getAgentCalendarSlotListSuccess,
  getAgentCalendarSlotListFailure,
} from "../../slices/LeadManagement/getAgentCalendarSlotListSlice";
import {
  createPublicCalendarSlotList,
  createPublicCalendarSlotListSuccess,
  createPublicCalendarSlotListFailure,
} from "../../slices/LeadManagement/createPublicCalendarSlotListSlice";
import {
  getAgentCalendarSlotRequest,
  getAgentCalendarSlotRequestSuccess,
  getAgentCalendarSlotRequestFailure,
} from "../../slices/LeadManagement/getAgentCalendarSlotRequestSlice";
import {
  uploadLeadExcel,
  uploadLeadExcelFailure,
  uploadLeadExcelSuccess,
} from "../../slices/LeadManagement/uploadLeadExcelSlice";
import {
  getAgentCalendarSlotListForBooked,
  getAgentCalendarSlotListForBookedSuccess,
  getAgentCalendarSlotListForBookedFailure,
} from "../../slices/LeadManagement/getAgentCalendarSlotListForBookedSlice";
import {
  slotReschedule,
  slotRescheduleSuccess,
  slotRescheduleFailure,
} from "../../slices/LeadManagement/slotRescheduleSlice";
import {
  updateUserAvailability,
  updateUserAvailabilitySuccess,
  updateUserAvailabilityFailure,
} from "../../slices/LeadManagement/updateUserAvailabilitySlice";
import {
  leadRemoveLeadPermission,
  leadRemoveLeadPermissionSuccess,
  leadRemoveLeadPermissionFailure,
} from "../../slices/LeadManagement/leadRemoveLeadPermissionSlice";
import {
  assignInventory,
  assignInventorySuccess,
  assignInventoryFailure,
} from "../../slices/LeadManagement/assignInventorySlice";
import {
  getPWPlotInventoryByProjectId,
  getPWPlotInventoryByProjectIdSuccess,
  getPWPlotInventoryByProjectIdFailure,
} from "../../slices/LeadManagement/getPWPlotInventoryByProjectIdSlice";
import {
  getInventoryByProject,
  getInventoryByProjectSuccess,
  getInventoryByProjectFailure,
} from "../../slices/LeadManagement/getInventoryByProjectSlice";
import {
  getAllCampaigns,
  getAllCampaignsFailure,
  getAllCampaignsSuccess,
} from "../../slices/LeadManagement/getAllCampaignsSlice";
export const getAllLeadApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchName?: any,
  status?: any,
  leadsSource?: any,
  agencyStaff?: any,
  startDate?: any,
  endDate?: any
) => {
  dispatch(getAllLead());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getAllLead}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${searchName ? `&name=${searchName}` : ""}${
        status ? `&status=${status}` : ""
      }${leadsSource ? `&leadSource=${leadsSource}` : ""}${
        agencyStaff ? `&agencyStaff=${agencyStaff}` : ""
      }${startDate ? `&startDate=${startDate}` : ""}${
        endDate ? `&endDate=${endDate}` : ""
      }`
    );
    dispatch(getAllLeadSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllLeadFailure("Error"));
  }
};
export const getAllLeadsFollowUpApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getAllLeadsFollowUp());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getAllLeadsFollowUp}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getAllLeadsFollowUpSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllLeadsFollowUpFailure("Error"));
  }
};
export const getLeadDataByIdApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getLeadDataById());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getLeadDataById}/${id}`
    );
    dispatch(getLeadDataByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadDataByIdFailure("Error"));
  }
};
export const deleteLeadInventoryApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(deleteLeadInventory());
  try {
    const response = await del<any>(
      `${ENDPOINT.leadManagement.deleteLeadInventory}/${id}`
    );
    dispatch(deleteLeadInventorySuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteLeadInventoryFailure("Error"));
  }
};
export const leadRemoveLeadPermissionApi = async (
  dispatch: AppDispatch,
  body?: any
) => {
  dispatch(leadRemoveLeadPermission());
  try {
    const response = await del<any>(
      `${ENDPOINT.leadManagement.leadRemoveLeadPermission}`,
      body
    );
    dispatch(leadRemoveLeadPermissionSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(leadRemoveLeadPermissionFailure("Error"));
  }
};
export const updateLeadStatusApi = async (
  dispatch: AppDispatch,
  body: any,
  id: number
) => {
  dispatch(updateLeadStatus());
  try {
    const response = await patch<any>(
      `${ENDPOINT.leadManagement.updateLeadStatus}/${id}`,
      body
    );
    dispatch(updateLeadStatusySuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(updateLeadStatusFailure("Error"));
  }
};
export const assignInventoryApi = async (
  dispatch: AppDispatch,
  body: any,
  id: number | string | undefined,
  onSuccess: any
) => {
  dispatch(assignInventory());
  try {
    const response = await patch<any>(
      `${ENDPOINT.leadManagement.assignInventory}/${id}`,
      body
    );
    dispatch(assignInventorySuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(assignInventoryFailure("Error"));
  }
};
export const pwpGetAllProjectListApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  inventory: string,
  projectSearch: string
) => {
  dispatch(pwpGetAllProjectList());
  try {
    const response = await get<any>(
      inventory === "propertyWalletInventory"
        ? `${ENDPOINT.leadManagement.pwpGetAllProjectList}?${
            projectSearch ? `projectName=${projectSearch}&` : ""
          }page=${pageLimit.page}&limit=${pageLimit.limit}`
        : `${ENDPOINT.leadManagement.getEnumsforleadInvntoryModule}?page=${pageLimit.page}&limit=${pageLimit.limit}&Invntory=GProject`
    );
    dispatch(pwpGetAllProjectListSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(pwpGetAllProjectListFailure("Error"));
  }
};
export const pwpGetAllProjectListForAddInventoryApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  projectSearch: string,
  generalInventory: any
) => {
  dispatch(pwpGetAllProjectList());
  try {
    const response = await get<any>(
      generalInventory
        ? `${ENDPOINT.leadManagement.getEnumsforleadInvntoryModule}?page=${pageLimit.page}&limit=${pageLimit.limit}&reqFor=create&Invntory=GProject`
        : `${ENDPOINT.leadManagement.pwpGetAllProjectList}?${
            projectSearch ? `projectName=${projectSearch}&` : ""
          }page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(pwpGetAllProjectListSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(pwpGetAllProjectListFailure("Error"));
  }
};

export const getAllProjectInventoryApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getAllProjectInventory());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getAllProjectInventory}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getAllProjectInventorySuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllProjectInventoryFailure("Error"));
  }
};
export const pwpGetAllProductListApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  inventoryValue: string
) => {
  dispatch(pwpGetAllProductList());
  try {
    const response = await get<any>(
      inventoryValue === "propertyWalletInventory"
        ? `${ENDPOINT.leadManagement.pwpGetAllProductList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
        : `${ENDPOINT.leadManagement.getEnumsforleadInvntoryModule}?page=${pageLimit.page}&limit=${pageLimit.limit}&Invntory=GProduct`
    );
    dispatch(pwpGetAllProductListSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(pwpGetAllProductListFailure("Error"));
  }
};
export const getEnumsforleadInvntoryModuleApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  leadId: number | string | undefined,
  generalInventory: boolean
) => {
  dispatch(getEnumsforleadInvntoryModule());
  try {
    const response = await get<any>(
      generalInventory
        ? `${ENDPOINT.leadManagement.getEnumsforleadInvntoryModule}?page=${pageLimit.page}&limit=${pageLimit.limit}&leadId=${leadId}&reqFor=update&Invntory=GProduct`
        : `${ENDPOINT.leadManagement.getEnumsforleadInvntoryModule}?page=${pageLimit.page}&limit=${pageLimit.limit}&leadId=${leadId}&reqFor=update&Invntory=pwProduct`
    );
    dispatch(getEnumsforleadInvntoryModuleSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getEnumsforleadInvntoryModuleFailure("Error"));
  }
};
export const getAvailableInventoriesByProjectIdApi = async (
  dispatch: AppDispatch,
  id: number,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getAvailableInventoriesByProjectId());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getAvailableInventoriesByProjectId}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getAvailableInventoriesByProjectIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAvailableInventoriesByProjectIdFailure("Error"));
  }
};

export const addNewLeadApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(addNewLead());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.addNewLead}`,
      body
    );
    dispatch(addNewLeadSuccess(response));
    successMessage(response.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addNewLeadFailure("Error"));
  }
};
export const addNewLeadlogNoteApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(addNewLeadlogNote());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.addNewLeadlogNote}`,
      body
    );
    dispatch(addNewLeadlogNoteSuccess(response));
    successMessage(response.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addNewLeadlogNoteFailure("Error"));
  }
};
export const assignUserNewApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(assignUserNew());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.assignUserNew}`,
      body
    );
    dispatch(assignUserNewSuccess(response));
    successMessage(response.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(assignUserNewFailure("Error"));
  }
};
export const addNewLeadFollowUpApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(addNewLeadFollowUp());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.addNewLeadFollowUp}`,
      body
    );
    dispatch(addNewLeadFollowUpSuccess(response));
    successMessage(response.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addNewLeadFollowUpFailure("Error"));
  }
};
export const getLeadsAssignUsersOrnotAssignUsersApi = async (
  dispatch: AppDispatch,
  selectedId: any
) => {
  dispatch(getLeadsAssignUsersOrnotAssignUsers());
  try {
    const response = await get<any>(
      selectedId.length === 1
        ? `${ENDPOINT.leadManagement.getLeadsAssignUsersOrnotAssignUsers}/${selectedId[0]}`
        : `${ENDPOINT.leadManagement.getLeadsAssignUsersOrnotAssignUsersNew}`
    );
    dispatch(getLeadsAssignUsersOrnotAssignUsersSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadsAssignUsersOrnotAssignUsersFailure("Error"));
  }
};
export const getLeadlogApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getLeadlog());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getLeadlog}/${id}?page=1&limit=1000`
    );
    dispatch(getLeadlogSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadlogFailure("Error"));
  }
};

export const getAgentCalendarSlotListApi = async (
  dispatch: AppDispatch,
  givenTime: any,
  reschudule?: boolean
) => {
  if (reschudule === true) {
    dispatch(getAgentCalendarSlotListForBooked());
    try {
      const response = await get<any>(
        `${ENDPOINT.leadManagement.getAgentCalendarSlotList}?givenTime=$${givenTime}`
      );
      dispatch(getAgentCalendarSlotListForBookedSuccess(response));
    } catch (err) {
      getError(err);
      dispatch(getAgentCalendarSlotListForBookedFailure("Error"));
    }
  } else {
    dispatch(getAgentCalendarSlotList());
    try {
      const response = await get<any>(
        `${ENDPOINT.leadManagement.getAgentCalendarSlotList}?givenTime=$${givenTime}`
      );
      dispatch(getAgentCalendarSlotListSuccess(response));
    } catch (err) {
      getError(err);
      dispatch(getAgentCalendarSlotListFailure("Error"));
    }
  }
};
export const getAgentCalendarSlotRequestApi = async (
  dispatch: AppDispatch,
  params: any
) => {
  dispatch(getAgentCalendarSlotRequest());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getAgentCalendarSlotRequest}?meetingStartDateTime=${params.meetingStartDTEncode}&meetingEndDateTime=${params.meetingEndDTEncode}&status=Approved&page=1&limit=20`
    );
    dispatch(getAgentCalendarSlotRequestSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAgentCalendarSlotRequestFailure("Error"));
  }
};

export const updateLeadDataByIdApi = async (
  dispatch: AppDispatch,
  body: any,
  id: number,
  onSuccess: any
) => {
  dispatch(updateLeadDataById());
  try {
    const response = await patch<any>(
      `${ENDPOINT.leadManagement.updateLeadDataById}/${id}`,
      body
    );
    dispatch(updateLeadDataByIdSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateLeadDataByIdFailure("Error"));
  }
};
export const slotRescheduleApi = async (
  dispatch: AppDispatch,
  body: any,
  meetingId: number,
  onSuccess: any
) => {
  dispatch(slotReschedule());
  try {
    const response = await patch<any>(
      `${ENDPOINT.leadManagement.slotReschedule}/${meetingId}`,
      body
    );
    dispatch(slotRescheduleSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(slotRescheduleFailure("Error"));
  }
};
export const addNewLeadlogApi = async (dispatch: AppDispatch, body: any) => {
  dispatch(addNewLeadlog());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.addNewLeadlog}`,
      body
    );
    dispatch(addNewLeadlogSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(addNewLeadlogFailure("Error"));
  }
};
export const updateUserAvailabilityApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(updateUserAvailability());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.updateUserAvailability}`,
      body
    );
    dispatch(updateUserAvailabilitySuccess(response));
    onSuccess(response.data);
  } catch (err) {
    getError(err);
    dispatch(updateUserAvailabilityFailure("Error"));
  }
};
export const createPublicCalendarSlotListApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(createPublicCalendarSlotList());
  try {
    const response = await post<any>(
      `${ENDPOINT.leadManagement.createPublicCalendarSlotList}`,
      body
    );
    dispatch(createPublicCalendarSlotListSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createPublicCalendarSlotListFailure("Error"));
  }
};

export async function uploadLeadApi(
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(uploadLeadExcel());
  try {
    let res = await postImage<any>(
      `${ENDPOINT.leadManagement.uploadLeadExcels}`,
      body
    );
    onSuccess();
    dispatch(uploadLeadExcelSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(uploadLeadExcelFailure(error?.response?.data));
  }
}
export const getPWPlotInventoryByProjectIdApi = async (
  dispatch: AppDispatch,
  pageLimit: { limit: number; page: number },
  id: number | string,
  leadId: number | string | undefined,
  generalInventory: boolean
) => {
  dispatch(getPWPlotInventoryByProjectId());
  try {
    const response = await get<any>(
      generalInventory
        ? `${ENDPOINT.leadManagement.getInventoryByProject}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}&leadId=${leadId}&reqFor=update&Invntory=GProduct`
        : `${ENDPOINT.leadManagement.getPWPlotInventoryByProjectId}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}&leadId=${leadId}&reqFor=update&Invntory=pwProject`
    );
    dispatch(getPWPlotInventoryByProjectIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getPWPlotInventoryByProjectIdFailure("Error"));
  }
};
export const getAllcampaignsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: any
) => {
  dispatch(getAllCampaigns());
  try {
    const response = await get<any>(
      `${ENDPOINT.leadManagement.getAllCampaigns}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getAllCampaignsSuccess(response));
    if (onSuccess) {
      onSuccess(response?.items);
    }
  } catch (err) {
    getError(err);
    dispatch(getAllCampaignsFailure("Error"));
  }
};
