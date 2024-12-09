import { get, getError, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import {
    users,
    usersFailure,
    usersSuccess,
    postAffiliateUserSlice,
    postAffiliateUserSliceFailure,
    postAffiliateUserSliceSuccess,
    getAffiliateUser,
    getAffiliateUserFailure,
    getAffiliateUserSuccess,
    deleteAffiliateUser,
    deleteAffiliateUserFailure,
    deleteAffiliateUserSuccess
} from "../../../../store/slices/Dashboard/Users/usersSlice";
import { successMessage } from "../../../../utils/message";
import { BodyType } from "../../../../views/Dashboard/AffiliateUsers/helpers/AffiliateModal";



export const getUsersApi = async (
    dispatch: AppDispatch,
    pageLimit: { page: number; limit: number },
    searchTerm?: string

) => {
    dispatch(users());
    try {
        let apiString = `${ENDPOINT.users.getUsers}?page=${pageLimit.page}&limit=${pageLimit.limit}${searchTerm ? `&name=${searchTerm}` : ""}`;
        const response = await get<any>(apiString);
        dispatch(usersSuccess(response));
    } catch (err: any) {
        getError(err);
        dispatch(usersFailure("Error"));
    }
};

export const getAffiliateUserApi = async (
    dispatch: AppDispatch,
    pageLimit: { page: number; limit: number },
    searchTerm?: string

) => {
    dispatch(users());
    try {
        let apiString = `${ENDPOINT.users.getaffilateUser}?page=${pageLimit.page}&limit=${pageLimit.limit}${searchTerm ? `&name=${searchTerm}` : ""}`;
        const response = await get<any>(apiString);
        dispatch(getAffiliateUserSuccess(response));
    } catch (err: any) {
        getError(err);
        dispatch(getAffiliateUserFailure("Error"));
    }
};

export const postAffiliateUserApi = async (
    dispatch: AppDispatch,
    body: BodyType,
    onSuccess: () => void,
  ) => {
    dispatch(postAffiliateUserSlice());
    try {
      const response = await post<any>(ENDPOINT.users.affilateUser, body);
      dispatch(postAffiliateUserSliceSuccess(response));
      successMessage(response?.message);
      onSuccess();
    } catch (err) {
      getError(err);
      dispatch(postAffiliateUserSliceFailure("Error"));
    }
  };

  export const deleteAffiliateUserApi = async (dispatch: AppDispatch, id: number, onSuccess: any) => {
    dispatch(deleteAffiliateUser());
    try {
      const response = await del<any>(`${ENDPOINT.users.affilateUser}/${id}`);
      dispatch(deleteAffiliateUserSuccess(response?.data));
      onSuccess(response?.message)
    } catch (err) {
      getError(err);
      dispatch(deleteAffiliateUserFailure("Error"));
    }
  }