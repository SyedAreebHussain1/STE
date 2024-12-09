import { API } from '../../../../config/apiEndPoints'
import { getError, getRequest } from '../../../../utils/baseApi'
import {
  getPWPAdminPaymentAssistanceRequest,
  getPWPAdminPaymentAssistanceRequestSuccess,
  getPWPAdminPaymentAssistanceRequestFailure,
} from '../../../slices/Support/PaymentRequest/getPWPAdminPaymentAssistanceRequestSlice'
import {
  getPWIAdminPaymentAssistanceRequest,
  getPWIAdminPaymentAssistanceRequestSuccess,
  getPWIAdminPaymentAssistanceRequestFailure,
} from '../../../slices/Support/PaymentRequest/getPWIAdminPaymentAssistanceRequestSlice'
import {
  getAllSupportPaymentRequests,
  getAllSupportPaymentRequestsSuccess,
  getAllSupportPaymentRequestsFailure,
} from '../../../slices/Support/PaymentRequest/getAllSupportPaymentRequestsSlice'

export async function getPWPAdminPaymentAssistanceRequestApi(
  dispatch,
  pageLimit
) {
  dispatch(getPWPAdminPaymentAssistanceRequest())
  try {
    let res = await getRequest(
      `${API.PaymentRequest.getPWPAdminPaymentAssistanceRequest}?page=${pageLimit.page}&limit=${pageLimit.limit}`
      // ${selectedFilter && search
      //     ? `&${query[selectedFilter]}=${search}`
      //     : ''}`
    )
    dispatch(getPWPAdminPaymentAssistanceRequestSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getPWPAdminPaymentAssistanceRequestFailure(error.response.data))
  }
}

export async function getPWIAdminPaymentAssistanceRequestApi(
  dispatch,
  pageLimit
) {
  dispatch(getPWIAdminPaymentAssistanceRequest())
  try {
    let res = await getRequest(
      `${API.PaymentRequest.getPWIAdminPaymentAssistanceRequest}?page=${pageLimit.page}&limit=${pageLimit.limit}`
      // ${selectedFilter && search
      //     ? `&${query[selectedFilter]}=${search}`
      //     : ''}`
    )
    dispatch(getPWIAdminPaymentAssistanceRequestSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getPWIAdminPaymentAssistanceRequestFailure(error.response.data))
  }
}

export async function getAllSupportPaymentRequestsApi(dispatch, pageLimit) {
  dispatch(getAllSupportPaymentRequests())
  try {
    let res = await getRequest(
      `${API.PaymentRequest.getAllSupportPaymentRequests}?page=${pageLimit.page}&limit=${pageLimit.limit}`
      // ${selectedFilter && search
      //     ? `&${query[selectedFilter]}=${search}`
      //     : ''}`
    )
    dispatch(getAllSupportPaymentRequestsSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAllSupportPaymentRequestsFailure(error.response.data))
  }
}
