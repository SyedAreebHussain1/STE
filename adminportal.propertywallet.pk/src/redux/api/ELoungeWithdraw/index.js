import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import {
  getELWithdrawList,
  getELWithdrawListFailure,
  getELWithdrawListSuccess,
} from '../../slices/ELoungeFreelancers/getELWithdrawListSlice'
import {
  postELWithdrawAmount,
  postELWithdrawAmountFailure,
  postELWithdrawAmountSuccess,
} from '../../slices/ELoungeFreelancers/postELWithdrawAmountSlice'

export async function GetELWithdrawListApi(dispatch, pageLimit) {
  dispatch(getELWithdrawList())
  try {
    let url = `${API.eLounge.withdrawList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getELWithdrawListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getELWithdrawListFailure(error.response.data))
  }
}
// export async function GetElWithdrawListApiLounge(dispatch, pageLimit) {
//   dispatch(getELWithdrawList())
//   try {
//     let url = `${API.eLounge.withdrawList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
//     let res = await getRequest(url)
//     dispatch(getELWithdrawListSuccess(res.data))
//   } catch (error) {
//     getError(error)
//     dispatch(getELWithdrawListFailure(error.response.data))
//   }
// }
export const postWithdrawAmountApi = async (body, id, dispatch, onSuccess) => {
  dispatch(postELWithdrawAmount())
  await postRequest(`${API.eLounge.withdrawAmount}/${id}`, body)
    .then((response) => {
      if (response?.data) {
        dispatch(postELWithdrawAmountSuccess(response?.data?.message))
        onSuccess()
      }
    })
    .catch((err) => {
      getError(err)
      dispatch(postELWithdrawAmountFailure(err?.response?.data))
    })
}

export const postELWithdrawAmountApiELounge = async (
  body,
  id,
  dispatch,
  onSuccess
) => {
  dispatch(postELWithdrawAmount())
  await postRequest(`${API.eLounge.withdrawAmount}/${id}`, body)
    .then((response) => {
      if (response?.data) {
        dispatch(postELWithdrawAmountSuccess(response?.data?.message))
        onSuccess()
      }
    })
    .catch((err) => {
      getError(err)
      dispatch(postELWithdrawAmountFailure(err?.response?.data))
    })
}
// export const suspendELApi = async (query, dispatch, onSuccess) => {
//   dispatch(postELWithdrawAmount())
//   await postRequest(
//     `${API.Freelance.suspendAccount}/${query?.id}?isSuspend=${query?.isSuspend}&suspendReason=${query?.suspendReason}`
//   )
//     .then((response) => {
//       if (response?.data) {
//         dispatch(postELWithdrawAmountSuccess(response?.data?.message))
//         onSuccess()
//       }
//     })
//     .catch((err) => {
//       getError(err)
//       dispatch(postELWithdrawAmountFailure(err?.response?.data))
//     })
// }
