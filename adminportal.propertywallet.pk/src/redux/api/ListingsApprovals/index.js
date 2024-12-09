import { API } from '../../../config/apiEndPoints'
import {
  deleteRequest,
  getError,
  getRequest,
  patchRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  deleteHotListingsApproval,
  deleteHotListingsApprovalFailure,
  deleteHotListingsApprovalSuccess,
} from '../../slices/ListingsApprovals/deleteHotListingsApprovalSlice'
import {
  deleteListingsApproval,
  deleteListingsApprovalFailure,
  deleteListingsApprovalSuccess,
} from '../../slices/ListingsApprovals/deleteListingsApprovalSlice'
import {
  getAllHotListingsApprovals,
  getAllHotListingsApprovalsFailure,
  getAllHotListingsApprovalsSuccess,
} from '../../slices/ListingsApprovals/getAllHotListingsApprovalsSlice'
import {
  getAllListingsApprovals,
  getAllListingsApprovalsFailure,
  getAllListingsApprovalsSuccess,
} from '../../slices/ListingsApprovals/getAllListingsApprovalsSlice'
import {
  updateHotListingsApprovals,
  updateHotListingsApprovalsFailure,
  updateHotListingsApprovalsSuccess,
} from '../../slices/ListingsApprovals/updateHotListingsApprovalsSlice'
import {
  updateListingsApprovals,
  updateListingsApprovalsFailure,
  updateListingsApprovalsSuccess,
} from '../../slices/ListingsApprovals/updateListingsApprovalsSlice'

export async function getAllListingsApprovalsApi(dispatch, pageLimit, search) {
  dispatch(getAllListingsApprovals())
  try {
    let res = await getRequest(
      `${API.listingsApprovals.getAllListingsApprovals}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${search ? `&search=${search}` : ''}`
    )
    dispatch(getAllListingsApprovalsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllListingsApprovalsFailure(error.response.data))
  }
}

export async function getAllHotListingsApprovalsApi(
  dispatch,
  pageLimit,
  search
) {
  dispatch(getAllHotListingsApprovals())
  try {
    let res = await getRequest(
      `${API.listingsApprovals.getAllHotListingsApprovals}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${search ? `&search=${search}` : ''}`
    )
    dispatch(getAllHotListingsApprovalsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllHotListingsApprovalsFailure(error.response.data))
  }
}

export async function updateListingsApprovalsApi(
  dispatch,
  body,
  id,
  onSuccess,
  onFailure
) {
  dispatch(updateListingsApprovals())
  try {
    let res = await patchRequest(
      `${API.listingsApprovals.updateListingsApprovals}/${id}`,
      body
    )
    dispatch(updateListingsApprovalsSuccess(res.data))
    successMessage(res.data.message)
    if (onSuccess) {
      onSuccess(id, body.status)
    }
  } catch (error) {
    if (onFailure) {
      onFailure(id)
    }
    getError(error)
    dispatch(updateListingsApprovalsFailure(error.response.data))
  }
}
export async function updateHotListingsApprovalsApi(
  dispatch,
  body,
  id,
  onSuccess,
  onFailure
) {
  dispatch(updateHotListingsApprovals())
  try {
    let res = await patchRequest(
      `${API.listingsApprovals.updateHotListingsApprovals}/${id}`,
      body
    )
    dispatch(updateHotListingsApprovalsSuccess(res.data))
    successMessage(res.data.message)
    if (onSuccess) {
      onSuccess(id, body.status)
    }
  } catch (error) {
    if (onFailure) {
      onFailure(id)
    }
    getError(error)
    dispatch(updateHotListingsApprovalsFailure(error.response.data))
  }
}

export async function deleteListingsApprovalApi(dispatch, id, onSuccess) {
  dispatch(deleteListingsApproval())
  try {
    let url = `${API.listingsApprovals.deleteListingsApproval}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteListingsApprovalSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(deleteListingsApprovalFailure(error?.response?.data))
  }
}
export async function deleteHotListingsApprovalApi(dispatch, id, onSuccess) {
  dispatch(deleteHotListingsApproval())
  try {
    let url = `${API.listingsApprovals.deleteHotListingsApproval}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteHotListingsApprovalSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(deleteHotListingsApprovalFailure(error?.response?.data))
  }
}
