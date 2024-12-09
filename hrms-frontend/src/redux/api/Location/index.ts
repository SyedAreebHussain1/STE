import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  getCompanyLocation,
  getCompanyLocationFailure,
  getCompanyLocationSuccess,
} from "../../slices/Location/getCompanyLocationSlice";
import {
  patchCompanyLocation,
  patchCompanyLocationFailure,
  patchCompanyLocationSuccess,
} from "../../slices/Location/patchCompanyLocationSlice";
import { AppDispatch } from "../../store";

export const getCompanyLocationApi = async (dispatch: AppDispatch) => {
  dispatch(getCompanyLocation());
  try {
    const apiString = `${ENDPOINT.location.getCompanyLocation}`;
    const response: any = await get<any>(apiString);
    dispatch(getCompanyLocationSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getCompanyLocationFailure("Error"));
  }
};

export const patchCompanyLocationApi = async (
  body: any,
  dispatch: AppDispatch,
  onSuccess: () => void
) => {
  dispatch(patchCompanyLocation());
  try {
    const response = await patch<any>(
      ENDPOINT.location.patchCompanyLocation,
      body
    );

    dispatch(patchCompanyLocationSuccess({ ...response?.data }));
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    dispatch(patchCompanyLocationFailure("Error"));
  }
};
