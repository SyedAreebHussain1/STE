import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import {getBusinesses, getBusinessesFailure, getBusinessesSuccess} from "../../../../store/slices/Dashboard/Businesses/getBusinesses";
import { getBusinessPlan, getBusinessPlanFailure, getBusinessPlanSuccess } from "../../../../store/slices/Dashboard/Businesses/getBusinessPlan"; 

export const getBusinessesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchIndustry?: string | null,
  searchTerm?: string,
) => {
  dispatch(getBusinesses());
  try {
    let apiString = `${ENDPOINT.businesses.getBusiness}?page=${pageLimit.page}&limit=${pageLimit.limit}${searchIndustry ?`&industry=${searchIndustry}` : ""}${searchTerm ?`&title=${searchTerm}` : ""} `;
    const response = await get<any>(apiString);
    dispatch(getBusinessesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getBusinessesFailure("Error"));
  }
};

export const getBusinessPlanApi = async (
    dispatch: AppDispatch,
    pageLimit: { page: number; limit: number },
    isComplete?: boolean,
  ) => {
    dispatch(getBusinessPlan());
    try {
      let apiString = `${ENDPOINT.businesses.getBusinessPlan}?page=${pageLimit.page}&limit=${pageLimit.limit}${isComplete ?`&isComplete=${isComplete}` : ""} `;
      const response = await get<any>(apiString);
      dispatch(getBusinessPlanSuccess(response));
    } catch (err: any) {
      getError(err);
      dispatch(getBusinessPlanFailure("Error"));
    }
  };