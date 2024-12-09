import { API } from "../../../config/apiEndPoints";
import { getError, postRequest } from "../../../utils/baseApi";
import {
  analyticClick,
  analyticClickSuccess,
  analyticClickFailure,
} from "../../slice/Analytic/analyticClickSlice";
import {
  analyticView,
  analyticViewSuccess,
  analyticViewFailure,
} from "../../slice/Analytic/analyticViewSlice";

export async function analyticClickApi(dispatch, id) {
  dispatch(analyticClick());
  try {
    let res = await postRequest(`${API.analytic.analyticClick}/${id}`);
    dispatch(analyticClickSuccess(res.data));
    // onSuccess(res.data.data);
  } catch (error) {
    getError(error);
    dispatch(analyticClickFailure(error.response.data));
  }
}
export async function analyticViewApi(dispatch, id) {
  console.log(id);
  dispatch(analyticView());
  try {
    let res = await postRequest(`${API.analytic.analyticView}/${id}`);
    dispatch(analyticViewSuccess(res.data));
    // onSuccess(res.data.data);
  } catch (error) {
    getError(error);
    dispatch(analyticViewFailure(error.response.data));
  }
}
