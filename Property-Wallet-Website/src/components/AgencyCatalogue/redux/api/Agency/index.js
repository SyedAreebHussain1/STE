import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import { addLeadForm, addLeadFormFailure, addLeadFormSuccess } from "../../slice/Agency/addLeadFormSlice";
import { getAgencyDetails, getAgencyDetailsFailure, getAgencyDetailsSuccess } from "../../slice/Agency/getAgencyDetailsSlice";

export async function getAgencyDetailsApi(dispatch, id) {
    dispatch(getAgencyDetails());
    try {
      let res = await getRequest(
        `${API.agency.getAgencyDetails}/${id}`
      );
      dispatch(getAgencyDetailsSuccess(res.data));
    } catch (error) {
      getError(error);
      dispatch(getAgencyDetailsFailure(error.response.data));
    }
  }

  export async function addLeadFormApi(dispatch, body, onSuccess) {
    dispatch(addLeadForm());
    try {
      let res = await postRequest(
        `${API.agency.addLeadForm}`,
        body
      );
      dispatch(addLeadFormSuccess(res.data));
      successMessage(res?.data?.message);
      onSuccess();
    } catch (error) {
      getError(error);
      dispatch(addLeadFormFailure(error.response.data));
    }
  }