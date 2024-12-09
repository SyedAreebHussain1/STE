import { get, getError, patchFormData } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  affilateUserProfile,
  affilateUserProfileSuccess,
  affilateUserProfileFailure,
  affilateUserProfileUpdate,
  affilateUserProfileUpdateSuccess,
  affilateUserProfileUpdateFailure,
} from "../../../../store/slices/Dashboard/Profile/affilateUserProfileSlice";

export const affilateUserProfileApi = async (dispatch: AppDispatch) => {
  dispatch(affilateUserProfile());
  try {
    const apiString = `${ENDPOINT.profile.affilateUserProfile}`;
    const response = await get<any>(apiString);
    dispatch(affilateUserProfileSuccess(response?.data));
  } catch (err: any) {
    getError(err);
    dispatch(affilateUserProfileFailure("Error"));
  }
};
export const affilateUserProfileUpdateApi = async (
  dispatch: AppDispatch,
  formData: any,
  success: any,
) => {
  dispatch(affilateUserProfileUpdate());
  try {
    const apiString = `${ENDPOINT.profile.affilateUserProfileUpdate}`;
    const response = await patchFormData<any>(apiString, formData);
    dispatch(affilateUserProfileUpdateSuccess(response?.data));
    successMessage(response?.message);
    success();
  } catch (err: any) {
    getError(err);
    dispatch(affilateUserProfileUpdateFailure("Error"));
  }
};
