import { API } from '../../../config/apiEndPoints'
import {
  getError,
  postRequest,
  getRequest,
  patchRequest,
  deleteRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  GetELoungeSaleUserForAssignToLead,
  GetELoungeSaleUserForAssignToLeadFailure,
  GetELoungeSaleUserForAssignToLeadSuccess,
} from '../../slices/ELoungeUser/GetELoungeSaleUserForAssignToLeadSlice'
import {
  GetELoungeUser,
  GetELoungeUserFailure,
  GetELoungeUserSuccess,
} from '../../slices/ELoungeUser/GetELoungeUserSlice'
import {
  PostELoungeSaleUserForAssignToLead,
  PostELoungeSaleUserForAssignToLeadFailure,
  PostELoungeSaleUserForAssignToLeadSuccess,
} from '../../slices/ELoungeUser/PostELoungeSaleUserForAssignToLeadSlice'
import {
  PostELoungeUser,
  PostELoungeUserFailure,
  PostELoungeUserSuccess,
} from '../../slices/ELoungeUser/PostELoungeUserSlice'
import {
  SuspendELoungeUser,
  SuspendELoungeUserFailure,
  SuspendELoungeUserSuccess,
} from '../../slices/ELoungeUser/SuspendELoungeUserSlice'
import {
  UpdateELoungeUser,
  UpdateELoungeUserFailure,
  UpdateELoungeUserSuccess,
} from '../../slices/ELoungeUser/UpdateELoungeUserSlice'

// post
export async function postELoungeUserApi(dispatch, body, onSuccess) {
  dispatch(PostELoungeUser())
  try {
    let res = await postRequest(API.eLounge.createEloungeUser, body)
    dispatch(PostELoungeUserSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(PostELoungeUserFailure(error.response.data))
  }
}

// get
export async function getELoungeUserApi(dispatch, pageLimit) {
  dispatch(GetELoungeUser())
  try {
    let res = await getRequest(
      `${API.eLounge.getEloungeUser}?page=${pageLimit.page}&limit=${pageLimit.limit}
      `
    )
    dispatch(GetELoungeUserSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetELoungeUserFailure(error.response.data))
  }
}

//patch
export async function suspendELoungeUserApi(dispatch, id, body, onSuccess) {
  dispatch(SuspendELoungeUser())
  try {
    let res = await patchRequest(`${API.eLounge.suspendUser}/${id}`, body)
    dispatch(SuspendELoungeUserSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(SuspendELoungeUserFailure(error.response.data))
  }
}
export async function UpdateELoungeUserApi(dispatch, id, body, onSuccess) {
  dispatch(UpdateELoungeUser())
  try {
    let res = await patchRequest(`${API.eLounge.updateUser}/${id}`, body)
    dispatch(UpdateELoungeUserSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(UpdateELoungeUserFailure(error.response.data))
  }
}

// get sale users for assign to lead
export async function getELoungeSaleUserForAssignToLeadApi(
  dispatch,
  pageLimit,
  id,
  onSuccess
) {
  dispatch(GetELoungeSaleUserForAssignToLead())
  try {
    let res = await getRequest(
      `${API.eLounge.getSalesUsers}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}
      `
    )
    onSuccess(res.data)
    dispatch(GetELoungeSaleUserForAssignToLeadSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetELoungeSaleUserForAssignToLeadFailure(error.response.data))
  }
}

// post sale users for assign to lead
export async function postELoungeSaleUserForAssignToLeadApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(PostELoungeSaleUserForAssignToLead())
  try {
    let res = await postRequest(API.eLounge.assignSalesUserToLead, body)
    dispatch(PostELoungeSaleUserForAssignToLeadSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(PostELoungeSaleUserForAssignToLeadFailure(error.response.data))
  }
}
