import {
  getBusinessCount,
  getBusinessCountFailure,
  getBusinessCountSuccess,
} from "../../../redux/slices/GetBusinessCount/getBusinessCountSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getBusinessCountApi = async (dispatch: AppDispatch) => {
  dispatch(getBusinessCount());
  try {
    const apiString = `${ENDPOINT.businessCount.getBusinessCount}`;
    const response = await get<any>(apiString);
    dispatch(getBusinessCountSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getBusinessCountFailure("Error"));
  }
};
