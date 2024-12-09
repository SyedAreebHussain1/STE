import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  AssignFreeTrial,
  AssignFreeTrialFailure,
  AssignFreeTrialSuccess,
} from '../../slices/AgencyProfile/AssignFreeTrialSlice'
import {
  SearchForAgencyProfile,
  SearchForAgencyProfileFailure,
  SearchForAgencyProfileSuccess,
} from '../../slices/AgencyProfile/SearchForAgencyProfileSlice'

export async function searchForAgencyProfileApi(dispatch, search) {
  dispatch(SearchForAgencyProfile())
  try {
    let res = await getRequest(
      `${API.agencyProfile.getAgencyDetails}?phoneNo=${search}`
    )
    dispatch(SearchForAgencyProfileSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(SearchForAgencyProfileFailure(error.response.data))
  }
}
export async function assignFreeTrialApi(dispatch, body, onSuccess) {
  dispatch(AssignFreeTrial())
  try {
    let url = `${API.agencyProfile.freeTrial}`
    let res = await postRequest(url, body)
    dispatch(AssignFreeTrialSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(AssignFreeTrialFailure(error?.response?.data))
  }
}
