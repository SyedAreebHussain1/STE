import {
  getonBoardingIndustry,
  getonBoardingIndustryFailure,
  getonBoardingIndustrySuccess,
} from "../../../redux/slices/onBoardingRoleAndIndustry/getonBoardingIndustrySlice";
import {
  getonBoardingRole,
  getonBoardingRoleFailure,
  getonBoardingRoleSuccess,
} from "../../../redux/slices/onBoardingRoleAndIndustry/getonBoardingRoleSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getRoleApi = async (dispatch: AppDispatch) => {
  dispatch(getonBoardingRole());
  try {
    const apiString = `${ENDPOINT.business.getRole}`;
    const response = await get<any>(apiString);
    dispatch(getonBoardingRoleSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getonBoardingRoleFailure("Error"));
  }
};
export const getIndustryApi = async (dispatch: AppDispatch) => {
  dispatch(getonBoardingIndustry());
  try {
    const apiString = `${ENDPOINT.business.getIndustry}`;
    const response = await get<any>(apiString);
    dispatch(getonBoardingIndustrySuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getonBoardingIndustryFailure("Error"));
  }
};
