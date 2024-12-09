import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  getAllPWProjectListSuccess,
  getCatalogueDetailByAgencyIdSuccess,
  getInventoriesDetails,
  getInventoriesDetailsFailure,
  getInventoriesDetailsSuccess,
} from "../../slice/Inventories/getInventoriesDetailsSlice";
import {
  getInventoryDetailsForPublic,
  getInventoryDetailsForPublicSuccess,
  getInventoryDetailsForPublicFailure,
  getProjectByIdpublicSuccess,
} from "../../slice/Inventories/getInventoryDetailsForPublicSlice";
import { getProjectTypes, getProjectTypesFailure, getProjectTypesSuccess } from "../../slice/Inventories/getProjectTypesSlice";
import { getProjectSubTypes, getProjectSubTypesFailure, getProjectSubTypesSuccess } from "../../slice/Inventories/getProjectSubTypesSlice";
import {
  iamInterested,
  iamInterestedFailure,
  iamInterestedPwSuccess,
  iamInterestedSuccess,
} from "../../slice/Inventories/iamInterested";
import {
  isAgencyWithinRadius,
  isAgencyWithinRadiusSuccess,
  isAgencyWithinRadiusFailure,
} from "../../slice/Inventories/isAgencyWithinRadiusSlice";
import { getLandArea, getLandAreaFailure, getLandAreaSuccess } from "../../slice/Inventories/getLandAreaSlice";

export async function getInventoriesDetailsApi(dispatch, pageLimit, id, str) {
  dispatch(getInventoriesDetails());
  try {
    let res = await getRequest(
      `${API.inventories.getInventoriesDetails}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}${str ? str : ''}`
    );
    dispatch(getInventoriesDetailsSuccess(res?.data));
  } catch (error) {
    getError(error);
    dispatch(getInventoriesDetailsFailure(error?.response?.data));
  }
}

export async function getInventoryDetailsForPublicApi(dispatch, id) {
  dispatch(getInventoryDetailsForPublic());
  try {
    let res = await getRequest(
      `${API.inventories.getInventoryDetailsForPublic}/${id}`
    );
    dispatch(getInventoryDetailsForPublicSuccess(res?.data));
  } catch (error) {
    getError(error);
    dispatch(getInventoryDetailsForPublicFailure(error?.response?.data));
  }
}

export async function iamInterestedApi(dispatch, body, id, onSuccess) {
  dispatch(iamInterested());
  try {
    let res = await postRequest(`${API.inventories.addPublicLead}/${id}`, body);
    dispatch(iamInterestedSuccess(res.data));
    successMessage(res?.data?.message);
    onSuccess();
  } catch (error) {
    getError(error);
    dispatch(iamInterestedFailure(error.response.data));
  }
}

export async function getAllPWProjectListApi(dispatch, pageLimit) {
  try {
    let res = await getRequest(
      `${API.inventories.getAllPWProjectList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getAllPWProjectListSuccess(res?.data));
  } catch (error) {
    getError(error);
  }
}

export async function getCatalogueDetailByAgencyIdApi(dispatch, pageLimit, id, str, onSuccess) {
  try {
    let res = await getRequest(
      `${API.inventories.getCatalogueDetailByAgencyId}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}${str ? str : ''}`
    );
    dispatch(getCatalogueDetailByAgencyIdSuccess(res?.data));
    if(onSuccess){
      onSuccess(res?.data?.data?.items)
    }
  } catch (error) {
    getError(error);
  }
}

export async function getProjectByIdpublicApi(dispatch, id) {
  try {
    let res = await getRequest(`${API.inventories.getProjectByIdpublic}/${id}`);
    dispatch(getProjectByIdpublicSuccess(res?.data));
  } catch (error) {
    getError(error);
  }
}

export async function iamInterestedPWApi(dispatch, body, onSuccess) {
  dispatch(iamInterested());
  try {
    let res = await postRequest(`${API.inventories.addPublicPWLead}`, body);
    dispatch(iamInterestedPwSuccess(res.data));
    successMessage(res?.data?.message);
    onSuccess(body);
  } catch (error) {
    getError(error);
    dispatch(iamInterestedFailure(error.response.data));
  }
}

export async function isAgencyWithinRadiusApi(dispatch, lat, lng, radius) {
  dispatch(isAgencyWithinRadius());
  try {
    let res = await getRequest(
      `${API.inventories.isAgencyWithinRadius}?latitude=${lat}&longitude=${lng}&radius=${radius}`
    );
    dispatch(isAgencyWithinRadiusSuccess(res.data));
  } catch (error) {
    getError(error);
    dispatch(isAgencyWithinRadiusFailure(error.response.data));
  }
}

export async function getPropertyTypeApi(dispatch, pageLimit, id, str) {
  dispatch(getInventoriesDetails());
  try {
    let res = await getRequest(
      `${API.inventories.getInventoriesDetails}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}${str ? str : ''}`
    );
    dispatch(getInventoriesDetailsSuccess(res?.data));
  } catch (error) {
    getError(error);
    dispatch(getInventoriesDetailsFailure(error?.response?.data));
  }
}

export async function getProjectTypesApi(dispatch, pageLimit) {
  dispatch(getProjectTypes())
  try {
    let res = await getRequest(
      `${API.inventories.getProjectTypes}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getProjectTypesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectTypesFailure(error?.response?.data))
  }
}
export async function getProjectSubTypesApi(dispatch, id) {
  dispatch(getProjectSubTypes())
  try {
    let res = await getRequest(`${API.inventories.getProjectSubTypes}/${id}`)
    dispatch(getProjectSubTypesSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectSubTypesFailure(error.response.data))
  }
}

export async function getLandAreaApi(dispatch) {
  dispatch(getLandArea())
  try {
    let res = await getRequest(`${API.inventories.getLandArea}?page=1&limit=20`)
    dispatch(getLandAreaSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getLandAreaFailure(error.response.data))
  }
}