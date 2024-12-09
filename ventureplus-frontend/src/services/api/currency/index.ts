import {
  getCurrencies,
  getCurrenciesFailure,
  getCurrenciesSuccess,
} from "../../../redux/slices/Currency/getCurrenciesSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getCurrenciesApi = async (dispatch: AppDispatch) => {
  dispatch(getCurrencies());
  try {
    const apiString = `${ENDPOINT.business.currency}`;
    const response = await get<any>(apiString);
    dispatch(getCurrenciesSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getCurrenciesFailure("Error"));
  }
};
