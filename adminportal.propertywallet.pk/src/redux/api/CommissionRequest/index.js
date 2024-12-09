import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, postRequest } from '../../../utils/baseApi'
import {
  ApproveOrReject,
  ApproveOrRejectFailure,
  ApproveOrRejectSuccess,
} from '../../slices/CommissionRequest/ApproveOrRejectSlice'
import {
  getAllCommissionRequest,
  getAllCommissionRequestFailure,
  getAllCommissionRequestSuccess,
} from '../../slices/CommissionRequest/getAllCommissionRequestSlice'
import {
  withDrawRequetNoPagination,
  withDrawRequetNoPaginationFailure,
  withDrawRequetNoPaginationSuccess,
} from '../../slices/CommissionRequest/withDrawRequetNoPaginationSlice'

export async function getAllCommissionRequestApi(dispatch, pageLimit, search) {
  dispatch(getAllCommissionRequest())
  try {
    let res = await getRequest(
      `${API.commissionRequests.getAllCommissionRequest}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${search ? `&accountNo=${search}` : ''}`
    )
    dispatch(getAllCommissionRequestSuccess(res?.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAllCommissionRequestFailure(error?.response?.data))
  }
}

export async function approveOrRejectCommissionApi(
  dispatch,
  id,
  body,
  onSuccess
) {
  dispatch(ApproveOrReject())
  try {
    let res = await postRequest(
      `${API.commissionRequests.ApproveOrReject}/${id}`,
      body
    )
    dispatch(ApproveOrRejectSuccess(res?.data))
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(ApproveOrRejectFailure(error?.response?.data))
  }
}

export async function withDrawRequetNoPaginationApi(dispatch, onSuccess) {
  dispatch(withDrawRequetNoPagination())
  try {
    let res = await getRequest(
      `${API.commissionRequests.withDrawRequetNoPagination}`
    )
    dispatch(withDrawRequetNoPaginationSuccess(res.data))
    onSuccess(res.data)
  } catch (error) {
    getError(error)
    dispatch(withDrawRequetNoPaginationFailure(error.response.data))
  }
}
