import { get, getError, post, postImage, del } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { AppDispatch } from "../../store";
import {
  getProjectInventory,
  getProjectInventoryFailure,
  getProjectInventorySuccess,
} from "../../slices/InventoryManagement/getProjectInventorySlice";
import {
  getPropertiesInventory,
  getPropertiesInventoryFailure,
  getPropertiesInventorySuccess,
} from "../../slices/InventoryManagement/getPropertiesInventorySlice";
import {
  getProjectDetails,
  getProjectDetailsFailure,
  getProjectDetailsSuccess,
} from "../../slices/InventoryManagement/getProjectDetailsSlice";
import {
  getPropertyDetails,
  getPropertyDetailsFailure,
  getPropertyDetailsSuccess,
} from "../../slices/InventoryManagement/getPropertyDetailsSlice";
import {
  getAssignLeadForInventory,
  getAssignLeadForInventoryFailure,
  getAssignLeadForInventorySuccess,
} from "../../slices/InventoryManagement/getAssignLeadForInventorySlice";
import {
  getLandArea,
  getLandAreaFailure,
  getLandAreaSuccess,
} from "../../slices/InventoryManagement/getLandAreaSlice";
import {
  getProjectType,
  getProjectTypeFailure,
  getProjectTypeSuccess,
} from "../../slices/InventoryManagement/getProjectTypeSlice";
import {
  getProjectSubType,
  getProjectSubTypeFailure,
  getProjectSubTypeSuccess,
} from "../../slices/InventoryManagement/getProjectSubTypeSlice";
import {
  uploadProjectImage,
  uploadProjectImageFailure,
  uploadProjectImageSuccess,
} from "../../slices/InventoryManagement/uploadProjectImageSlice";
import {
  getProjectSubTypeByProjectTypeID,
  getProjectSubTypeByProjectTypeIDFailure,
  getProjectSubTypeByProjectTypeIDSuccess,
} from "../../slices/InventoryManagement/getProjectSubTypeByProjectTypeIDSlice";
import {
  getProjectSubTypeNameByID,
  getProjectSubTypeNameByIDFailure,
  getProjectSubTypeNameByIDSuccess,
} from "../../slices/InventoryManagement/getProjectSubTypeNameByIDSlice";
import {
  getUtilites,
  getUtilitesFailure,
  getUtilitesSuccess,
} from "../../slices/InventoryManagement/getUtilitesSlice";
import {
  getFacing,
  getFacingFailure,
  getFacingSuccess,
} from "../../slices/InventoryManagement/getFacingSlice";
import {
  createProject,
  createProjectFailure,
  createProjectSuccess,
} from "../../slices/InventoryManagement/createProjectSlice";
import { successMessage } from "../../../utils/message";
import {
  getViewUser,
  getViewUserFailure,
  getViewUserSuccess,
} from "../../slices/InventoryManagement/getViewUserSlice";
import {
  getProjectForSelectField,
  getProjectForSelectFieldFailure,
  getProjectForSelectFieldSuccess,
} from "../../slices/InventoryManagement/getProjectForSelectFieldSlice";
import {
  createInventoryOfExistingProject,
  createInventoryOfExistingProjectFailure,
  createInventoryOfExistingProjectSuccess,
} from "../../slices/InventoryManagement/createInventoryOfExistingProjectSlice";
import {
  getInventoryForEdit,
  getInventoryForEditFailure,
  getInventoryForEditSuccess,
} from "../../slices/InventoryManagement/getInventoryForEditSlice";
import {
  deletePhotoInInventory,
  deletePhotoInInventoryFailure,
  deletePhotoInInventorySuccess,
} from "../../slices/InventoryManagement/deletePhotoInInventorySlice";
import {
  editphotoForInventory,
  editphotoForInventoryFailure,
  editphotoForInventorySuccess,
} from "../../slices/InventoryManagement/editphotoForInventorySlice";
import {
  getInventoryViewUser,
  getInventoryViewUserFailure,
  getInventoryViewUserSuccess,
} from "../../slices/InventoryManagement/getInventoryViewUserSlice";
import {
  EditFeature,
  EditFeatureFailure,
  EditFeatureSuccess,
} from "../../slices/InventoryManagement/EditFeatureSlice";
import {
  editFacing,
  editFacingFailure,
  editFacingSuccess,
} from "../../slices/InventoryManagement/editFacingSlice";
import {
  editUtilite,
  editUtiliteFailure,
  editUtiliteSuccess,
} from "../../slices/InventoryManagement/editUtiliteSlice";

export const getProjectApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  filter?: any
) => {
  dispatch(getProjectInventory());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getProject}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}&isIndividual=false${
        filter?.startPrice >= 0 ? `&minimumPrice=${filter?.startPrice}` : ""
      }${filter?.endPrice ? `&maximumPrice=${filter?.endPrice}` : ""}${
        filter?.startArea ? `&minlandSize=${filter?.startArea}` : ""
      }${filter?.endArea ? `&maxlandSize=${filter?.endArea}` : ""}${
        filter?.Baths ? `&washRooms=${filter?.Baths}` : ""
      }${filter?.Bedrooms ? `&bedRooms=${filter?.Bedrooms}` : ""}${
        filter?.landAreaUnit?.value
          ? `&landAreaId=${filter?.landAreaUnit?.value}`
          : ""
      }${filter?.city?.value ? `&city=${filter?.city?.value}` : ""}${
        filter?.projectType?.value
          ? `&projectTypeId=${filter?.projectType?.value}`
          : ""
      }${
        filter?.projectSubType?.value
          ? `&projectSubTypeId=${filter?.projectSubType?.value}`
          : ""
      }`
    );

    if (response) {
      dispatch(getProjectInventorySuccess({ ...response }));
    } else {
      dispatch(getProjectInventoryFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getProjectInventoryFailure("Error"));
  }
};

export const getPropertiesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  filter?: any
) => {
  dispatch(getPropertiesInventory());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getProperties}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}&isIndividual=true${
        filter?.startPrice >= 0 ? `&minimumPrice=${filter?.startPrice}` : ""
      }${filter?.endPrice ? `&maximumPrice=${filter?.endPrice}` : ""}${
        filter?.startArea ? `&minlandSize=${filter?.startArea}` : ""
      }${filter?.endArea ? `&maxlandSize=${filter?.endArea}` : ""}${
        filter?.Baths ? `&washRooms=${filter?.Baths}` : ""
      }${filter?.Bedrooms ? `&bedRooms=${filter?.Bedrooms}` : ""}${
        filter?.landAreaUnit?.value
          ? `&landAreaId=${filter?.landAreaUnit?.value}`
          : ""
      }${filter?.city?.value ? `&city=${filter?.city?.value}` : ""}${
        filter?.projectType?.value
          ? `&projectTypeId=${filter?.projectType?.value}`
          : ""
      }${
        filter?.projectSubType?.value
          ? `&projectSubTypeId=${filter?.projectSubType?.value}`
          : ""
      }`
    );

    if (response) {
      dispatch(getPropertiesInventorySuccess({ ...response }));
    } else {
      dispatch(getPropertiesInventoryFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getPropertiesInventoryFailure("Error"));
  }
};

export const getProjectDetailsApi = async (id: any, dispatch: AppDispatch) => {
  dispatch(getProjectDetails());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getProjectDetails}/${id}`
    );

    if (response) {
      dispatch(getProjectDetailsSuccess({ ...response }));
    } else {
      dispatch(getProjectDetailsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getProjectDetailsFailure("Error"));
  }
};

export const getPropertyDetailsApi = async (id: any, dispatch: AppDispatch) => {
  dispatch(getPropertyDetails());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getPropertyDetails}/${id}`
    );

    if (response) {
      dispatch(getPropertyDetailsSuccess({ ...response }));
    } else {
      dispatch(getPropertyDetailsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getPropertyDetailsFailure("Error"));
  }
};

export const getAssignLeadForInventoryApi = async (
  id: any,
  dispatch: AppDispatch
) => {
  dispatch(getAssignLeadForInventory());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getAssignLeadForInventory}/${id}?inventoryEnum=inventory`
    );

    if (response) {
      dispatch(getAssignLeadForInventorySuccess([...response]));
    } else {
      dispatch(getAssignLeadForInventoryFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAssignLeadForInventoryFailure("Error"));
  }
};

export const getLandAreaApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getLandArea());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getLandArea}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getLandAreaSuccess({ ...response }));
    } else {
      dispatch(getLandAreaFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getLandAreaFailure("Error"));
  }
};

export const getProjectTypeApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getProjectType());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getProjectType}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getProjectTypeSuccess({ ...response }));
    } else {
      dispatch(getProjectTypeFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getProjectTypeFailure("Error"));
  }
};

export const getProjectSubTypeApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getProjectSubType());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getProjectSubType}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getProjectSubTypeSuccess({ ...response }));
    } else {
      dispatch(getProjectSubTypeFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getProjectSubTypeFailure("Error"));
  }
};
export async function getProjectSubTypesbyProjectTypeIDApi(
  dispatch: AppDispatch,
  id: number
) {
  dispatch(getProjectSubTypeByProjectTypeID());
  try {
    let res = await get<any>(
      `${ENDPOINT.inventoryManagement.getProjectSubTypesbyProjectTypeID}/${id}`
    );

    dispatch(getProjectSubTypeByProjectTypeIDSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(getProjectSubTypeByProjectTypeIDFailure(error?.response?.data));
  }
}

export async function uploadImageApi(
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
  name: any
) {
  dispatch(uploadProjectImage());
  try {
    let res = await postImage<any>(
      `${ENDPOINT.inventoryManagement.uploadProjectImages}`,
      body
    );
    onSuccess(res, name);
    dispatch(uploadProjectImageSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(uploadProjectImageFailure(error?.response?.data));
  }
}

export async function getProjectSubTypesNamebyIDApi(
  dispatch: AppDispatch,
  id: number,
  onSuccess: (e: any) => void
) {
  dispatch(getProjectSubTypeNameByID());
  try {
    let res = await get<any>(
      `${ENDPOINT.inventoryManagement.getProjectSubTypeNameByID}/${id}`
    );

    dispatch(getProjectSubTypeNameByIDSuccess(res));
    onSuccess(res);
  } catch (error: any) {
    getError(error);
    dispatch(getProjectSubTypeNameByIDFailure(error?.response?.data));
  }
}

export const getUtilitesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getUtilites());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getUtilites}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getUtilitesSuccess({ ...response }));
    } else {
      dispatch(getUtilitesFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getUtilitesFailure("Error"));
  }
};

export const getFacingApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getFacing());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getFacing}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getFacingSuccess({ ...response }));
    } else {
      dispatch(getFacingFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getFacingFailure("Error"));
  }
};

export async function createProjectApi(
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(createProject());
  try {
    let res = await post<any>(
      `${ENDPOINT.inventoryManagement.createProject}`,
      body
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(createProjectSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(createProjectFailure(error?.response?.data));
  }
}

export const getViewUserApi = async (
  dispatch: AppDispatch,
  id: any,
  userRole: any
) => {
  dispatch(getViewUser());
  let endPointUrl;
  if (userRole == "agentOwner") {
    endPointUrl = ENDPOINT.inventoryManagement.getManager;
  } else {
    endPointUrl = ENDPOINT.inventoryManagement.getStaff;
  }
  try {
    const response = await get<any>(`${endPointUrl}?userId=${id}`);

    if (response) {
      dispatch(getViewUserSuccess([...response]));
    } else {
      dispatch(getViewUserFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getViewUserFailure("Error"));
  }
};

export const getProjectForSelectFieldApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess: any
) => {
  dispatch(getProjectForSelectField());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getProject}?page=${pageLimit.page}&limit=${pageLimit.limit}&isIndividual=false`
    );

    if (response) {
      dispatch(getProjectForSelectFieldSuccess({ ...response }));

      onSuccess([...response.items]);
    } else {
      dispatch(getProjectForSelectFieldFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getProjectForSelectFieldFailure("Error"));
  }
};
export async function createInventoryOfExistingProjectApi(
  id: any,
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(createInventoryOfExistingProject());
  try {
    let res = await post<any>(
      `${ENDPOINT.inventoryManagement.createInventoryOfExistingProject}/${id}`,
      body
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(createInventoryOfExistingProjectSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(createInventoryOfExistingProjectFailure(error?.response?.data));
  }
}

export const getInventoryDetailsForEditApi = async (
  id: any,
  dispatch: AppDispatch
) => {
  dispatch(getInventoryForEdit());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.getInventoryForEdit}/${id}`
    );

    if (response) {
      dispatch(getInventoryForEditSuccess({ ...response }));
    } else {
      dispatch(getInventoryForEditFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getInventoryForEditFailure("Error"));
  }
};

export const deleteInventoryphotoApi = async (
  id: any,
  dispatch: AppDispatch,
  index: any,
  onSuccess: any
) => {
  dispatch(deletePhotoInInventory());
  try {
    const response = await del<any>(
      `${ENDPOINT.inventoryManagement.deletePhotoInventory}/${id}`
    );

    if (response) {
      dispatch(deletePhotoInInventorySuccess({ ...response }));
      successMessage(response?.message);
      onSuccess(index);
    } else {
      dispatch(deletePhotoInInventoryFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(deletePhotoInInventoryFailure("Error"));
  }
};

export async function postPhotoForInventoryApi(
  id: any,
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(editphotoForInventory());
  try {
    let res = await post<any>(
      `${ENDPOINT.inventoryManagement.editphotoForInventory}/${id}`,
      body
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(editphotoForInventorySuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(editphotoForInventoryFailure(error?.response?.data));
  }
}

export const getInventoryViewPermissionsApi = async (
  id: any,
  dispatch: AppDispatch
) => {
  dispatch(getInventoryViewUser());
  try {
    const response = await get<any>(
      `${ENDPOINT.inventoryManagement.InventoryViewPermissions}/${id}`
    );

    if (response) {
      dispatch(getInventoryViewUserSuccess({ ...response }));
    } else {
      dispatch(getInventoryViewUserFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getInventoryViewUserFailure("Error"));
  }
};
// project/get/Inventory/viewPermissions

export async function postFeatureApi(
  id: any,
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(EditFeature());
  try {
    let res = await post<any>(
      `${ENDPOINT.inventoryManagement.editFeature}/${id}`,
      body
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(EditFeatureSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(EditFeatureFailure(error?.response?.data));
  }
}
export async function postfacingApi(
  id: any,
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(editFacing());
  try {
    let res = await post<any>(
      `${ENDPOINT.inventoryManagement.editFacing}/${id}`,
      body
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(editFacingSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(editFacingFailure(error?.response?.data));
  }
}
export async function postuitilsApi(
  id: any,
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(editUtilite());
  try {
    let res = await post<any>(
      `${ENDPOINT.inventoryManagement.editUtilite}/${id}`,
      body
    );
    onSuccess();
    successMessage(res?.message);
    dispatch(editUtiliteSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(editUtiliteFailure(error?.response?.data));
  }
}
