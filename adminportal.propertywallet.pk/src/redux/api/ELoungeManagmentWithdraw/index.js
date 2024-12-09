import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, postRequest } from '../../../utils/baseApi'
import {
  getEloungeManagmentUserWithdrawList,
  getEloungeManagmentUserWithdrawListFailure,
  getEloungeManagmentUserWithdrawListSuccess,
} from '../../slices/ELoungeManagmentUserWithdraw/getEloungeManagmentUserWithdrawListSlice'
import {
  postEloungeManagmentUserWithdrawAmount,
  postEloungeManagmentUserWithdrawAmountFailure,
  postEloungeManagmentUserWithdrawAmountSuccess,
} from '../../slices/ELoungeManagmentUserWithdraw/postEloungeManagmentUserWithdrawAmountSlice'

export async function GetELManagmentUserWithdrawListApi(dispatch, pageLimit) {
  dispatch(getEloungeManagmentUserWithdrawList())
  try {
    let url = `${API.eLounge.withdrawListManagerUser}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getEloungeManagmentUserWithdrawListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getEloungeManagmentUserWithdrawListFailure(error.response.data))
  }
}

export const postELManagmentUserWithdrawAmountApi = async (
  body,
  id,
  dispatch,
  onSuccess
) => {
  dispatch(postEloungeManagmentUserWithdrawAmount())
  await postRequest(`${API.eLounge.withdrawAmountManagerUser}/${id}`, body)
    .then((response) => {
      if (response?.data) {
        dispatch(
          postEloungeManagmentUserWithdrawAmountSuccess(response?.data?.message)
        )
        onSuccess()
      }
    })
    .catch((err) => {
      getError(err)
      dispatch(
        postEloungeManagmentUserWithdrawAmountFailure(err?.response?.data)
      )
    })
}
