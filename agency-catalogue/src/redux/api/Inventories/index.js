import { API } from "../../../config/apiEndPoints";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  getInventoriesDetails,
  getInventoriesDetailsFailure,
  getInventoriesDetailsSuccess,
} from "../../slice/Inventories/getInventoriesDetailsSlice";

export async function getInventoriesDetailsApi(dispatch, pageLimit, id) {
  dispatch(getInventoriesDetails());
  try {
    let res = await getRequest(
      `${API.inventories.getInventoriesDetails}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getInventoriesDetailsSuccess(res?.data));
  } catch (error) {
    getError(error);
    dispatch(getInventoriesDetailsFailure(error?.response?.data));
  }
}
