import {
  getCountries,
  getCountriesFailure,
  getCountriesSuccess,
} from "../../../redux/slices/Country/getCountriesSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getCountriesApi = async (dispatch: AppDispatch) => {
  dispatch(getCountries());
  try {
    const apiString = `${ENDPOINT.business.country}`;
    const response = await get<any>(apiString);
    dispatch(getCountriesSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getCountriesFailure("Error"));
  }
};
