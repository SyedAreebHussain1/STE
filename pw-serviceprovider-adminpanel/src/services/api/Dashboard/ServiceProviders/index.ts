import {
  get,
  getError,
  patch,
  patchFormData,
  post,
} from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  getServiceProviders,
  getServiceProvidersSuccess,
  getServiceProvidersFailure,
} from "../../../../store/slices/Dashboard/ServiceProviders/getServiceProvidersSlice";
import {
  approveRejectSP,
  approveRejectSPSuccess,
  approveRejectSPFailure,
} from "../../../../store/slices/Dashboard/ServiceProviders/approveRejectSPSlice";

export const getServiceProvidersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getServiceProviders());
  try {
    const apiString: string = `${ENDPOINT.serviceProviders.getServiceProviders}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getServiceProvidersSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getServiceProvidersFailure("Error"));
  }
};

export const approveRejectSPApi = async (
  dispatch: AppDispatch,
  body: {
    categoryTitle: string;
  },
  id: number,
  onSuccess: () => void,
) => {
  dispatch(approveRejectSP());
  try {
    const response = await patchFormData<any>(
      `${ENDPOINT.serviceProviders.approveRejectSP}/${id}`,
      body,
    );
    dispatch(approveRejectSPSuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(approveRejectSPFailure("Error"));
  }
};
