import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  getWithdrawRequests,
  getWithdrawRequestsFailure,
  getWithdrawRequestsSuccess,
} from '../../slices/WithdrawRequests/getWithdrawRequestsSlice'
import {
  updateWithdrawRequests,
  updateWithdrawRequestsFailure,
  updateWithdrawRequestsSuccess,
} from '../../slices/WithdrawRequests/updateWithdrawRequestsSlice'

export async function getWithdrawRequestsApi(dispatch, pageLimit, search) {
  dispatch(getWithdrawRequests())
  try {
    let res = await getRequest(
      `${API.WithdrawRequests.getWithdrawRequests}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${search ? `&search=${search}` : ''}`
    )
    dispatch(getWithdrawRequestsSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getWithdrawRequestsFailure(error.response.data))
  }
}
export async function updateWithdrawRequestsApi(dispatch, body, id, onSuccess) {
  dispatch(updateWithdrawRequests())
  try {
    let res = await postRequest(
      `${API.WithdrawRequests.requestApprovalForInvestorWallet}/${id}`,
      body
    )
    dispatch(updateWithdrawRequestsSuccess(res.data))
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateWithdrawRequestsFailure(error.response.data))
  }
}
export async function updateWithdrawRequestsUserApi(
  dispatch,
  body,
  id,
  onSuccess
) {
  dispatch(updateWithdrawRequests())
  try {
    let res = await patchRequest(
      `${API.onlineUsers.updatedOnlineUser}/${id}`,
      body
    )
    dispatch(updateWithdrawRequestsSuccess(res.data))
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateWithdrawRequestsFailure(error.response.data))
  }
}
export async function updateWithdrawRequestsBankRequestApi(
  dispatch,
  body,
  id,
  onSuccess
) {
  dispatch(updateWithdrawRequests())
  try {
    let res = await patchRequest(
      `${API.onlineUsers.updatedBankRequest}/${id}`,
      body
    )
    dispatch(updateWithdrawRequestsSuccess(res.data))
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateWithdrawRequestsFailure(error.response.data))
  }
}
