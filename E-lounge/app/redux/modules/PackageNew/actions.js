import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  GET_ALL_CUSTOM_PACKAGES,
  GET_ALL_CUSTOM_PACKAGES_SUCCESS,
  GET_ALL_CUSTOM_PACKAGES_FAILURE,
} from "./constants";
export const getAllCustomPackagesApi = async (dispatch) => {
  dispatch({ type: GET_ALL_CUSTOM_PACKAGES });
  await getRequest(API.packages.getAllCustomPackages)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_CUSTOM_PACKAGES_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_CUSTOM_PACKAGES_FAILURE,
        error: err.response.data,
      });
    });
};
