import {
  getLanguages,
  getLanguagesFailure,
  getLanguagesSuccess,
} from "../../../redux/slices/Language/getLanguagesSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getLanguagesApi = async (dispatch: AppDispatch) => {
  dispatch(getLanguages());
  try {
    const apiString = `${ENDPOINT.business.language}`;
    const response = await get<any>(apiString);
    dispatch(getLanguagesSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getLanguagesFailure("Error"));
  }
};
