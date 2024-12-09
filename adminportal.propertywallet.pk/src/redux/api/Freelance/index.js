import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import {
  withdrawList,
  withdrawListFailure,
  withdrawListSuccess,
} from '../../slices/Freelance/getWithdrawListSlice'
import {
  withdrawAmount,
  withdrawAmountFailure,
  withdrawAmountSuccess,
} from '../../slices/Freelance/postWithdrawAmountSlice'

export async function GetWithdrawListApi(dispatch, pageLimit) {
  dispatch(withdrawList())
  try {
    let url = `${API.Freelance.withdrawList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(withdrawListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(withdrawListFailure(error.response.data))
  }
}
export async function GetWithdrawListApiLounge(dispatch, pageLimit) {
  dispatch(withdrawList())
  try {
    let url = `${API.lounge.withdrawList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(withdrawListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(withdrawListFailure(error.response.data))
  }
}
export const postWithdrawAmountApi = async (body, id, dispatch, onSuccess) => {
  dispatch(withdrawAmount())
  await postRequest(`${API.Freelance.withdrawAmount}/${id}`, body)
    .then((response) => {
      if (response?.data) {
        dispatch(withdrawAmountSuccess(response?.data?.message))
        onSuccess()
      }
    })
    .catch((err) => {
      getError(err)
      dispatch(withdrawAmountFailure(err?.response?.data))
    })
}
export const postWithdrawAmountApiLounge = async (
  body,
  id,
  dispatch,
  onSuccess
) => {
  dispatch(withdrawAmount())
  await postRequest(`${API.lounge.withdrawAmount}/${id}`, body)
    .then((response) => {
      if (response?.data) {
        dispatch(withdrawAmountSuccess(response?.data?.message))
        onSuccess()
      }
    })
    .catch((err) => {
      getError(err)
      dispatch(withdrawAmountFailure(err?.response?.data))
    })
}
export const suspendApi = async (query, dispatch, onSuccess) => {
  dispatch(withdrawAmount())
  await postRequest(
    `${API.Freelance.suspendAccount}/${query?.id}?isSuspend=${query?.isSuspend}&suspendReason=${query?.suspendReason}`
  )
    .then((response) => {
      if (response?.data) {
        dispatch(withdrawAmountSuccess(response?.data?.message))
        onSuccess()
      }
    })
    .catch((err) => {
      getError(err)
      dispatch(withdrawAmountFailure(err?.response?.data))
    })
}
