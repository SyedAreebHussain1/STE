import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getReferral,
  getReferralSuccess,
  getReferralFailure,
} from '../../slices/Refeerals/getReferralSlice'

export async function getReferralApi(
  dispatch,
  referralCode,
  pageLimit,
  onSuccess
) {
  dispatch(getReferral())
  try {
    let res = await getRequest(
      `${API.Refeerals.getReferral}/${referralCode}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getReferralSuccess(res.data))
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(getReferralFailure(error.response.data))
  }
}
