import {
  get,
  getError,
  getRequest,
  patch,
  post,
  postImage,
  del,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  uploadProjectImage,
  uploadProjectImageFailure,
  uploadProjectImageSuccess,
} from "../../slices/InventoryManagement/uploadProjectImageSlice";
import {
  EditWebsite,
  EditWebsiteFailure,
  EditWebsiteSuccess,
} from "../../slices/WebEstate/EditWebsiteSlice";
import {
  editAgencyProfile,
  editAgencyProfileFailure,
  editAgencyProfileSuccess,
} from "../../slices/WebEstate/editAgencyProfileSlice";
import {
  getAgencyDetails,
  getAgencyDetailsFailure,
  getAgencyDetailsSuccess,
} from "../../slices/WebEstate/getAgencyDetailsSlice";
import {
  addAnnouncements,
  addAnnouncementsFailure,
  addAnnouncementsSuccess,
} from "../../slices/WebEstate/addAnnouncementsSlice";
import {
  deleteAnnouncements,
  deleteAnnouncementsFailure,
  deleteAnnouncementsSuccess,
} from "../../slices/WebEstate/deleteAnnouncementsSlice";
import {
  editAnnouncements,
  editAnnouncementsFailure,
  editAnnouncementsSuccess,
} from "../../slices/WebEstate/editAnnouncementsSlice";
import {
  getAllAgencyReviews,
  getAllAgencyReviewsFailure,
  getAllAgencyReviewsSuccess,
} from "../../slices/WebEstate/getAllAgencyReviewsSlice";
import {
  getAllAgentReviews,
  getAllAgentReviewsFailure,
  getAllAgentReviewsSuccess,
} from "../../slices/WebEstate/getAllAgentReviewsSlice";
import {
  getAllAnnouncements,
  getAllAnnouncementsFailure,
  getAllAnnouncementsSuccess,
} from "../../slices/WebEstate/getAllAnnouncementsSlice";
import {
  getWebEstateAnalytics,
  getWebEstateAnalyticsFailure,
  getWebEstateAnalyticsSuccess,
} from "../../slices/WebEstate/getWebEstateAnalyticsSlice";
import {
  getWebsite,
  getWebsiteFailure,
  getWebsiteSuccess,
} from "../../slices/WebEstate/getWebsiteSlice";
import {
  agencyReviewVisibility,
  agencyReviewVisibilitySuccess,
  agencyReviewVisibilityFailure,
} from "../../slices/WebEstate/agencyReviewVisibilitySlice";
import { AppDispatch } from "../../store";

export const getAgencyDetailsApi = async (dispatch: AppDispatch) => {
  dispatch(getAgencyDetails());
  try {
    const response = await get<any>(`${ENDPOINT.webEstate.getAgencyDetails}`);

    if (response) {
      dispatch(getAgencyDetailsSuccess({ ...response }));
    } else {
      dispatch(getAgencyDetailsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAgencyDetailsFailure("Error"));
  }
};

export async function uploadImageApi(dispatch: AppDispatch, body: any) {
  dispatch(uploadProjectImage());
  try {
    let res = await postImage<any>(
      `${ENDPOINT.inventoryManagement.uploadProjectImages}`,
      body,
    );
    dispatch(uploadProjectImageSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(uploadProjectImageFailure(error?.response?.data));
  }
}
export async function editAgencyProfileApi(
  id: any,
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) {
  dispatch(editAgencyProfile());
  try {
    let res = await patch<any>(
      `${ENDPOINT.webEstate.editAgencyProfile}/${id}`,
      body,
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(editAgencyProfileSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(editAgencyProfileFailure(error?.response?.data));
  }
}

export async function editwebsiteApi(
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) {
  dispatch(editAgencyProfile());
  try {
    let res = await patch<any>(`${ENDPOINT.webEstate.editWebsite}`, body);
    onSuccess();
    successMessage(res?.message);
    dispatch(editAgencyProfileSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(editAgencyProfileFailure(error?.response?.data));
  }
}

export const getwebsiteApi = async (dispatch: AppDispatch) => {
  dispatch(getWebsite());
  try {
    const response = await get<any>(`${ENDPOINT.webEstate.getWebsite}`);

    if (response) {
      dispatch(getWebsiteSuccess({ ...response }));
    } else {
      dispatch(getWebsiteFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getWebsiteFailure("Error"));
  }
};

export const getWebEstateAnalyticsApi = async (dispatch: AppDispatch) => {
  dispatch(getWebEstateAnalytics());
  try {
    const response = await getRequest<any>(
      `${ENDPOINT.webEstate.getWebEstateAnalytics}`,
    );

    if (response) {
      dispatch(getWebEstateAnalyticsSuccess({ ...response }));
    } else {
      dispatch(getWebEstateAnalyticsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getWebEstateAnalyticsFailure("Error"));
  }
};

export const getAllAgentReviewsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  id: number,
) => {
  dispatch(getAllAgentReviews());
  try {
    const response = await getRequest<any>(
      `${ENDPOINT.webEstate.getAllAgentReviews}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );

    if (response) {
      dispatch(getAllAgentReviewsSuccess({ ...response }));
    } else {
      dispatch(getAllAgentReviewsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAllAgentReviewsFailure("Error"));
  }
};

export const getAllAgencyReviewsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllAgencyReviews());
  try {
    const response = await getRequest<any>(
      `${ENDPOINT.webEstate.getAllAgencyReviews}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );

    if (response) {
      dispatch(getAllAgencyReviewsSuccess({ ...response }));
    } else {
      dispatch(getAllAgencyReviewsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAllAgencyReviewsFailure("Error"));
  }
};

export const getAllAnnouncementsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllAnnouncements());
  try {
    const response = await getRequest<any>(
      `${ENDPOINT.webEstate.announcement}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );

    if (response) {
      dispatch(getAllAnnouncementsSuccess({ ...response }));
    } else {
      dispatch(getAllAnnouncementsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAllAnnouncementsFailure("Error"));
  }
};

export const addAnnouncementsApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(addAnnouncements());
  try {
    const response = await post<any>(
      `${ENDPOINT.webEstate.announcement}`,
      body,
    );

    if (response) {
      dispatch(addAnnouncementsSuccess({ ...response }));
      onSuccess();
    } else {
      dispatch(addAnnouncementsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(addAnnouncementsFailure("Error"));
  }
};

export const editAnnouncementsApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
  id: number,
) => {
  dispatch(editAnnouncements());
  try {
    const response = await patch<any>(
      `${ENDPOINT.webEstate.announcement}/${id}`,
      body,
    );

    if (response) {
      dispatch(editAnnouncementsSuccess({ ...response }));
      onSuccess();
    } else {
      dispatch(editAnnouncementsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(editAnnouncementsFailure("Error"));
  }
};
export const agencyReviewVisibilityApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
  id: number,
) => {
  dispatch(agencyReviewVisibility());
  try {
    const response = await patch<any>(
      `${ENDPOINT.webEstate.agencyReviewVisibility}/${id}`,
      body,
    );
    dispatch(agencyReviewVisibilitySuccess({ ...response }));
    successMessage(response.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(agencyReviewVisibilityFailure("Error"));
  }
};

export const deleteAnnouncementsApi = async (
  dispatch: AppDispatch,
  id: number,
) => {
  dispatch(deleteAnnouncements());
  try {
    const response = await del<any>(`${ENDPOINT.webEstate.announcement}/${id}`);

    if (response) {
      dispatch(deleteAnnouncementsSuccess({ ...response }));
    } else {
      dispatch(deleteAnnouncementsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(deleteAnnouncementsFailure("Error"));
  }
};
