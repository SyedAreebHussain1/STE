import {
  getAllElementsOfPlanSetup,
  getAllElementsOfPlanSetupFailure,
  getAllElementsOfPlanSetupSuccess,
} from "../../../redux/slices/BusinessPlanSetup/getAllElementsOfPlanSetupSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getAllElementsOfPlanSetupApi = async (
  dispatch: AppDispatch,
  businessPlanId: number
) => {
  dispatch(getAllElementsOfPlanSetup());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.allElements}/${businessPlanId}`;
    const response = await get<any>(apiString);
    dispatch(getAllElementsOfPlanSetupSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllElementsOfPlanSetupFailure("Error"));
  }
};
