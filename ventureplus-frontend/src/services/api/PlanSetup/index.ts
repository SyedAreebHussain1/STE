import {
  getBusinessPlanInfo,
  getBusinessPlanInfoSuccess,
  getBusinessPlanInfoFailure,
} from "../../../redux/slices/PlanSetup/businessPlanInfoSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getBusinessPlanInfoApi = async (
  businessPlanId: number,
  dispatch: AppDispatch,
) => {
  dispatch(getBusinessPlanInfo());
  try {
    const apiString = `${ENDPOINT.businessPlanInfo.businessPlanInfo}/${businessPlanId}`;
    const response = await get<any>(apiString);
    // console.log(response?.data, businessPlanId);
    dispatch(getBusinessPlanInfoSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getBusinessPlanInfoFailure("Error"));
  }
};
