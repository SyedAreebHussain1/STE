import { getError, post, get, patch, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import { AppDispatch } from "../../../store";
import {
  getLeadsLeadById,
  getLeadsLeadByIdSuccess,
  getLeadsLeadByIdFailure,
} from "../../../slices/SalesPlus/LeadDetails/getLeadsLeadByIdSlice";
import {
  updateLeadStatus,
  updateLeadStatusSuccess,
  updateLeadStatusFailure,
} from "../../../slices/SalesPlus/LeadDetails/updateLeadStatusSlice";
import {
  addNewLeadlog,
  addNewLeadlogSuccess,
  addNewLeadlogFailure,
} from "../../../slices/SalesPlus/LeadDetails/addNewLeadlogSlice";
import {
  getLeadlog,
  getLeadlogSuccess,
  getLeadlogFailure,
} from "../../../slices/SalesPlus/LeadDetails/getLeadlogSlice";
import {
  addNewLeadlogNote,
  addNewLeadlogNoteSuccess,
  addNewLeadlogNoteFailure,
} from "../../../slices/SalesPlus/LeadDetails/addNewLeadlogNoteSlice";
import {
  createLeads,
  createLeadsSuccess,
  createLeadsFailure,
} from "../../../slices/SalesPlus/LeadDetails/createLeadsSlice";
import {
  assignUserNew,
  assignUserNewSuccess,
  assignUserNewFailure,
} from "../../../slices/SalesPlus/LeadDetails/assignUserNewSlice";
import {
  updateLeadsLead,
  updateLeadsLeadSuccess,
  updateLeadsLeadFailure,
} from "../../../slices/SalesPlus/LeadDetails/updateLeadsLeadSlice";
import {
  getAllLeadsFollowUp,
  getAllLeadsFollowUpSuccess,
  getAllLeadsFollowUpFailure,
} from "../../../slices/SalesPlus/LeadDetails/getAllLeadsFollowUpSlice";
import {
  removeleadPermission,
  removeleadPermissionSuccess,
  removeleadPermissionFailure,
} from "../../../slices/SalesPlus/LeadDetails/removeleadPermissionSlice";
import {
  addNewLeadFollowUp,
  addNewLeadFollowUpSuccess,
  addNewLeadFollowUpFailure,
} from "../../../slices/SalesPlus/LeadDetails/addNewLeadFollowUpSlice";

export const addNewLeadlogApi = async (dispatch: AppDispatch, body: any) => {
  dispatch(addNewLeadlog());
  try {
    const response = await post<any>(ENDPOINT.salesPlus.addNewLeadlog, body);
    dispatch(addNewLeadlogSuccess({ ...response?.data }));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(addNewLeadlogFailure("Error"));
  }
};
export const addNewLeadFollowUpApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(addNewLeadFollowUp());
  try {
    const response = await post<any>(
      ENDPOINT.salesPlus.addNewLeadFollowUp,
      body,
    );
    dispatch(addNewLeadFollowUpSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addNewLeadFollowUpFailure("Error"));
  }
};
export const assignUserNewApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(assignUserNew());
  try {
    const response = await post<any>(ENDPOINT.salesPlus.assignUserNew, body);
    dispatch(assignUserNewSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(assignUserNewFailure("Error"));
  }
};
export const createLeadsApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(createLeads());
  try {
    const response = await post<any>(ENDPOINT.salesPlus.createLeads, body);
    dispatch(createLeadsSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createLeadsFailure("Error"));
  }
};

export const addNewLeadlogNoteApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(addNewLeadlogNote());
  try {
    const response = await post<any>(
      ENDPOINT.salesPlus.addNewLeadlogNote,
      body,
    );
    dispatch(addNewLeadlogNoteSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addNewLeadlogNoteFailure("Error"));
  }
};

export const getLeadsLeadByIdApi = async (
  dispatch: AppDispatch,
  id: number | string,
) => {
  dispatch(getLeadsLeadById());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getLeadsLeadById}/${id}`,
    );

    dispatch(getLeadsLeadByIdSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getLeadsLeadByIdFailure("Error"));
  }
};
export const getLeadlogApi = async (
  dispatch: AppDispatch,
  id: number | string,
) => {
  dispatch(getLeadlog());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getLeadlog}/${id}?page=1&limit=1000`,
    );

    dispatch(getLeadlogSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getLeadlogFailure("Error"));
  }
};
export const getAllLeadsFollowUpApi = async (
  dispatch: AppDispatch,
  pageLimit: any,
) => {
  dispatch(getAllLeadsFollowUp());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllLeadsFollowUp}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );

    dispatch(getAllLeadsFollowUpSuccess({ ...response?.data }));
  } catch (err) {
    getError(err);
    dispatch(getAllLeadsFollowUpFailure("Error"));
  }
};

export const updateLeadStatusApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
) => {
  dispatch(updateLeadStatus());
  try {
    const response = await patch<any>(
      `${ENDPOINT.salesPlus.updateLeadStatus}/${id}`,
      body,
    );
    dispatch(updateLeadStatusSuccess({ ...response?.data }));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(updateLeadStatusFailure("Error"));
  }
};
export const updateLeadsLeadApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: any,
) => {
  dispatch(updateLeadsLead());
  try {
    const response = await patch<any>(
      `${ENDPOINT.salesPlus.updateLeadsLead}/${id}`,
      body,
    );
    dispatch(updateLeadsLeadSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateLeadsLeadFailure("Error"));
  }
};
export const removeleadPermissionApi = async (
  dispatch: AppDispatch,
  body: any,
) => {
  dispatch(removeleadPermission());
  try {
    const apiString = `${ENDPOINT.salesPlus.removeleadPermission}`;
    const response = await del<any>(apiString, body);
    dispatch(removeleadPermissionSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(removeleadPermissionFailure("Error"));
  }
};
