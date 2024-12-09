import { getError, post, get, del, patch } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import {
  CreateUser,
  CreateUserFailure,
  CreateUserSuccess,
} from "../../../slices/UserManaegement/UserProfile/CreateUserSlice";
import { AppDispatch } from "../../../store";
import {
  getNationality,
  getNationalityFailure,
  getNationalitySuccess,
} from "../../../slices/UserManaegement/UserProfile/getNationalitySlice";
import {
  getcompanyUserType,
  getcompanyUserTypeFailure,
  getcompanyUserTypeSuccess,
} from "../../../slices/UserManaegement/UserProfile/getcompanyUserTypeSlice";
import {
  getAllUserList,
  getAllUserListFailure,
  getAllUserListSuccess,
} from "../../../slices/UserManaegement/UserProfile/getAllUserListSlice";
import {
  getAllDepartment,
  getAllDepartmentFailure,
  getAllDepartmentSuccess,
} from "../../../slices/UserManaegement/UserProfile/getAllDepartmentSlice";
import {
  companyUserDelete,
  companyUserDeleteSuccess,
  companyUserDeleteFailure,
} from "../../../slices/UserManaegement/UserProfile/companyUserDeleteSlice";
import {
  updateUser,
  updateUserSuccess,
  updateUserFailure,
} from "../../../slices/UserManaegement/UserProfile/updateUserSlice";
import {
  getAllUserById,
  getAllUserByIdSuccess,
  getAllUserByIdFailure,
} from "../../../slices/UserManaegement/UserProfile/getAllUserByIdSlice";
import {
  GetAllCountriesForDropdown,
  GetAllCountriesForDropdownSuccess,
  GetAllCountriesForDropdownFailure,
} from "../../../slices/UserManaegement/UserProfile/GetAllCountriesForDropdownSlice";
import {
  getAllNationalityForDropdown,
  getAllNationalityForDropdownSuccess,
  getAllNationalityForDropdownFailure,
} from "../../../slices/UserManaegement/UserProfile/getAllNationalityForDropdownSlice";
import {
  companyUserTypeForDropdown,
  companyUserTypeForDropdownSuccess,
  companyUserTypeForDropdownFailure,
} from "../../../slices/UserManaegement/UserProfile/companyUserTypeForDropdownSlice"
import {
  updateUserEmailAndPhoneNo,
  updateUserEmailAndPhoneNoSuccess,
  updateUserEmailAndPhoneNoFailure,  
} from "../../../slices/UserManaegement/UserProfile/updateUserEmailAndPhoneNoSlice"

export const createCompanyUserApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess?: any,
) => {
  dispatch(CreateUser());
  try {
    const response = await post<any>(ENDPOINT.userManagement.createUser, body);
    if (response) {
      dispatch(CreateUserSuccess(response?.data));
      if (onSuccess) {
        onSuccess(response.message);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(CreateUserFailure("Error"));
  }
};
export const getNationalityApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
) => {
  dispatch(getNationality());

  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.getNationality}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );
    if (response) {
      dispatch(getNationalitySuccess(response));
      if (onSuccess) {
        onSuccess(response?.data?.items);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(getNationalityFailure("Error"));
  }
};

export const getCompanyUserTypeApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
) => {
  dispatch(getcompanyUserType());

  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.getcompanyUserType}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );
    if (response) {
      dispatch(getcompanyUserTypeSuccess(response));
      if (onSuccess) {
        onSuccess(response?.data?.items);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(getcompanyUserTypeFailure("Error"));
  }
};

export const getAllUserListApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
  name?: any,
) => {
  dispatch(getAllUserList());
  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.getAllUserList}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${name ? `&name=${name}` : ""}`,
    );
    if (response) {
      dispatch(getAllUserListSuccess(response));
      if (onSuccess) {
        onSuccess(response?.items);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(getAllUserListFailure("Error"));
  }
};

export const getAllDepartmentApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
) => {
  dispatch(getAllDepartment());

  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.getAllDepartment}?page=${pageLimit.page}&limit=${pageLimit.limit}`,
    );
    if (response) {
      dispatch(getAllDepartmentSuccess(response));
      if (onSuccess) {
        onSuccess(response?.data?.items);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(getAllDepartmentFailure("Error"));
  }
};

export const companyUserDeleteApi = async (
  dispatch: AppDispatch,
  id: number,
) => {
  dispatch(companyUserDelete());
  try {
    const response = await del<any>(
      `${ENDPOINT.userManagement.companyUserDelete}/${id}`,
    );
    dispatch(companyUserDeleteSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(companyUserDeleteFailure("Error"));
  }
};
export const updateUserApi = async (
  dispatch: AppDispatch,
  body: any,
  backPage: any,
  userId: any,
) => {
  dispatch(updateUser());
  try {
    const response = await patch<any>(
      `${ENDPOINT.userManagement.updateUser}/${userId}`,
      body,
    );
    dispatch(updateUserSuccess(response?.data));
    successMessage(response?.message);
    backPage();
  } catch (err) {
    getError(err);
    dispatch(updateUserFailure("Error"));
  }
};
export const getAllUserByIdApi = async (dispatch: AppDispatch, userId: any) => {
  dispatch(getAllUserById());
  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.getAllUserById}/${userId}`,
    );

    if (response) {
      dispatch(getAllUserByIdSuccess(response));
    }
  } catch (err) {
    getError(err);
    dispatch(getAllUserByIdFailure("Error"));
  }
};

export const getAllCountriesForDropdownApi = async (
  dispatch: AppDispatch,
  search?: any,
) => {
  dispatch(GetAllCountriesForDropdown());
  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.GetAllCountriesForDropdown}?${
        search ? `&search=${search}` : ""
      }`,
    );
    dispatch(GetAllCountriesForDropdownSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(GetAllCountriesForDropdownFailure("Error"));
  }
};

export const getAllNationalityForDropdownApi = async (
  dispatch: AppDispatch,
) => {
  dispatch(getAllNationalityForDropdown());
  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.getAllNationalityForDropdown}`,
    );
    dispatch(getAllNationalityForDropdownSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllNationalityForDropdownFailure("Error"));
  }
};
export const companyUserTypeForDropdownApi = async (
  dispatch: AppDispatch,
) => {
  dispatch(companyUserTypeForDropdown());
  try {
    const response = await get<any>(
      `${ENDPOINT.userManagement.companyUserTypeForDropdown}`,
    );
    dispatch(companyUserTypeForDropdownSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(companyUserTypeForDropdownFailure("Error"));
  }
};

 
export const updateUserEmailAndPhoneNoApi = async (
  dispatch: AppDispatch,
  body: any,
) => {
  dispatch(updateUserEmailAndPhoneNo());
  try {
    const response = await patch<any>(
      `${ENDPOINT.userManagement.updateUserEmailAndPhoneNo}`,
      body,
    );
    dispatch(updateUserEmailAndPhoneNoSuccess(response?.data));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(updateUserEmailAndPhoneNoFailure("Error"));
  }
};