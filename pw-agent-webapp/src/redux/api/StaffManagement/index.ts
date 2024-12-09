import {
  del,
  delWithBody,
  get,
  getError,
  patch,
  post,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { getFromStorage } from "../../../utils/storage";
import {
  CreateStaff,
  CreateStaffFailure,
  CreateStaffSuccess,
} from "../../slices/StaffManagement/CreateStaffSlicer";
import {
  acceptStaffRequest,
  acceptStaffRequestFailure,
  acceptStaffRequestSuccess,
} from "../../slices/StaffManagement/acceptStaffRequestSlicer";
import {
  activeUser,
  activeUserFailure,
  activeUserSuccess,
} from "../../slices/StaffManagement/activeUserSlicer";
import {
  deactiveUser,
  deactiveUserFailure,
  deactiveUserSuccess,
} from "../../slices/StaffManagement/deactiveUserSlicer";
import {
  deleteStaff,
  deleteStaffFailure,
  deleteStaffSuccess,
} from "../../slices/StaffManagement/deleteStaffSlicer";
import {
  deletemultipleStaff,
  deletemultipleStaffFailure,
  deletemultipleStaffSuccess,
} from "../../slices/StaffManagement/deletemultipleStaffSlicer";
import {
  getAgencyCode,
  getAgencyCodeFailure,
  getAgencyCodeSuccess,
} from "../../slices/StaffManagement/getAgencyCodeSlicer";
import {
  getAgencyStaffRequestList,
  getAgencyStaffRequestListFailure,
  getAgencyStaffRequestListSuccess,
} from "../../slices/StaffManagement/getAgencyStaffRequestListSlicer";
import {
  getAllStaff,
  getAllStaffFailure,
  getAllStaffSuccess,
} from "../../slices/StaffManagement/getAllStaffSlicer";
import {
  getBookingSlots,
  getBookingSlotsFailure,
  getBookingSlotsSuccess,
} from "../../slices/StaffManagement/getBookingSlotsSlicer";
import {
  getOnlyStaffManager,
  getOnlyStaffManagerFailure,
  getOnlyStaffManagerSuccess,
} from "../../slices/StaffManagement/getOnlyStaffManagerSlicer";
import {
  getStaffByManagerID,
  getStaffByManagerIDFailure,
  getStaffByManagerIDSuccess,
} from "../../slices/StaffManagement/getStaffByManagerIDSlice";
import {
  getStaffReview,
  getStaffReviewFailure,
  getStaffReviewSuccess,
} from "../../slices/StaffManagement/getStaffReviewSlicer";
import {
  rejectStaffRequest,
  rejectStaffRequestFailure,
  rejectStaffRequestSuccess,
} from "../../slices/StaffManagement/rejectStaffRequestSlicer";
import { AppDispatch } from "../../store";

export const createStaffApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(CreateStaff());
  try {
    const response = await post<any>(
      ENDPOINT.staffManagement.createStaff,
      body
    );

    if (response) {
      dispatch(CreateStaffSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(CreateStaffFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(CreateStaffFailure("Error"));
  }
};

export const getStaffApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: any
) => {
  dispatch(getAllStaff());
  try {
    const api = getFromStorage("user").role !== "agentManager" ?  ENDPOINT.staffManagement.getAllStaff : `${ENDPOINT.staffManagement.getStaffByManagerID}/${getFromStorage("user").userId}`
    const response = await get<any>(
      `${api}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getAllStaffSuccess({ ...response }));
      if (onSuccess) {
        onSuccess({ ...response });
      }
    } else {
      dispatch(getAllStaffFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAllStaffFailure("Error"));
  }
};
export const getonlyStaffManagerApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getOnlyStaffManager());
  try {
    const response = await get<any>(
      `${ENDPOINT.staffManagement.getOnlyStaffManager}?userId=${id}`
    );

    if (response) {
      dispatch(getOnlyStaffManagerSuccess([...response]));
    } else {
      dispatch(getOnlyStaffManagerFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getOnlyStaffManagerFailure("Error"));
  }
};

export const patchActiveUserApi = async (body: any, dispatch: AppDispatch) => {
  dispatch(activeUser());
  try {
    const response = await patch<any>(
      ENDPOINT.staffManagement.activeUser,
      body
    );

    if (response) {
      dispatch(activeUserSuccess({ ...response?.data }));
      successMessage(response?.message);
    } else {
      dispatch(activeUserFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(activeUserFailure("Error"));
  }
};
export const patchDeactiveUserApi = async (
  body: any,
  dispatch: AppDispatch
) => {
  dispatch(deactiveUser());
  try {
    const response = await patch<any>(
      ENDPOINT.staffManagement.deactiveUser,
      body
    );

    if (response) {
      dispatch(deactiveUserSuccess({ ...response?.data }));
      successMessage(response?.message);
    } else {
      dispatch(deactiveUserFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(deactiveUserFailure("Error"));
  }
};

export const deleteUserApi = async (
  id: any,
  dispatch: AppDispatch,
  onSucces: any
) => {
  dispatch(deleteStaff());
  try {
    const response = await del<any>(
      `${ENDPOINT.staffManagement.deleteStaff}/${id}`
    );
    if (response) {
      dispatch(deleteStaffSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSucces();
    } else {
      dispatch(deleteStaffFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(deleteStaffFailure("Error"));
  }
};

export const getStaffReviewApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getStaffReview());
  try {
    const response = await get<any>(
      `${ENDPOINT.staffManagement.getStaffReview}/${id}?page=1&limit=10`
    );

    if (response) {
      dispatch(getStaffReviewSuccess({ ...response }));
    } else {
      dispatch(getStaffReviewFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getStaffReviewFailure("Error"));
  }
};

export const getAgencyCodeApi = async (dispatch: AppDispatch) => {
  dispatch(getAgencyCode());
  try {
    const response = await get<any>(
      `${ENDPOINT.staffManagement.getAgencyCode}`
    );
    if (response) {
      dispatch(getAgencyCodeSuccess(response));
    } else {
      dispatch(getAgencyCodeFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAgencyCodeFailure("Error"));
  }
};
export const getAgencyStaffRequestListApi = async (dispatch: AppDispatch) => {
  dispatch(getAgencyStaffRequestList());
  try {
    const response = await get<any>(
      `${ENDPOINT.staffManagement.getAgencyStaffRequestList}`
    );
    if (response) {
      dispatch(getAgencyStaffRequestListSuccess(response));
    } else {
      dispatch(getAgencyStaffRequestListFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAgencyStaffRequestListFailure("Error"));
  }
};

export const rejectStaffRequestApi = async (
  id: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(rejectStaffRequest());
  try {
    const response = await del<any>(
      `${ENDPOINT.staffManagement.rejectStaffRequest}/${id}`
    );
    if (response) {
      dispatch(rejectStaffRequestSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(rejectStaffRequestFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(rejectStaffRequestFailure("Error"));
  }
};

export const acceptStaffRequestApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(acceptStaffRequest());
  try {
    const response = await patch<any>(
      `${ENDPOINT.staffManagement.acceptStaffRequest}`,
      body
    );
    if (response) {
      dispatch(acceptStaffRequestSuccess({ ...response?.data }));
      successMessage(response?.message);
      onSuccess();
    } else {
      dispatch(acceptStaffRequestFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(acceptStaffRequestFailure("Error"));
  }
};

export const deleteMultipleStaffApi = async (
  body: any,
  dispatch: AppDispatch
) => {
  dispatch(deletemultipleStaff());
  try {
    const response = await delWithBody<any>(
      `${ENDPOINT.staffManagement.deletemultipleStaff}`,
      body
    );
    if (response) {
      dispatch(deletemultipleStaffSuccess({ ...response?.data }));
      successMessage(response?.message);
    } else {
      dispatch(deletemultipleStaffFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(deletemultipleStaffFailure("Error"));
  }
};

export const getBookingSlotsApi = async (
  id: number,
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getBookingSlots());
  try {
    const response = await get<any>(
      `${ENDPOINT.staffManagement.getBookingSlots}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getBookingSlotsSuccess({ ...response }));
    } else {
      dispatch(getBookingSlotsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getBookingSlotsFailure("Error"));
  }
};

export const getStaffByManagerIDApi = async (
  dispatch: AppDispatch,
  id: number,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getStaffByManagerID());
  try {
    const response = await get<any>(
      `${ENDPOINT.staffManagement.getStaffByManagerID}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getStaffByManagerIDSuccess({ ...response }));
    } else {
      dispatch(getStaffByManagerIDFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getStaffByManagerIDFailure("Error"));
  }
};
