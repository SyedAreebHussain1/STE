import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, patchRequest } from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  getPaymentTokenRequests,
  getPaymentTokenRequestsFailure,
  getPaymentTokenRequestsSuccess,
} from '../../slices/Payment/Token/getPaymentTokenRequestsSlice'
import {
  tokenUpdateExpiry,
  tokenUpdateExpiryFailure,
  tokenUpdateExpirySuccess,
} from '../../slices/Payment/Token/tokenUpdateExpirySlice'

export async function getPaymentTokenRequestsApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getPaymentTokenRequests())
  try {
    const query = {
      'Agent Name': 'agencyName',
      'Project Name': 'projectName',
    }
    let res = await getRequest(
      `${API.payments.getPaymentTokenRequests}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    )
    dispatch(getPaymentTokenRequestsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getPaymentTokenRequestsFailure(error.response.data))
  }
}
export async function tokenUpdateExpiryApi(dispatch, id, body, onSuccess) {
  dispatch(tokenUpdateExpiry())
  try {
    let res = await patchRequest(
      `${API.payments.tokenUpdateExpiry}/${id}`,
      body
    )
    dispatch(tokenUpdateExpirySuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(tokenUpdateExpiryFailure(error.response.data))
  }
}
