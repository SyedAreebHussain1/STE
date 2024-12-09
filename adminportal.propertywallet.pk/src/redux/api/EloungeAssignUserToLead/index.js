import { API } from '../../../config/apiEndPoints'
import { deleteRequest, getError, getRequest } from '../../../utils/baseApi'

import { successMessage } from '../../../utils/message'

import {
  GetEloungeAssignUserToLead,
  GetEloungeAssignUserToLeadFailure,
  GetEloungeAssignUserToLeadSuccess,
} from '../../slices/EloungeAssignUserToLead/GetEloungeAssignUserToLeadSlice'
import {
  UnAssignEloungeAssignUserToLead,
  UnAssignEloungeAssignUserToLeadFailure,
  UnAssignEloungeAssignUserToLeadSuccess,
} from '../../slices/EloungeAssignUserToLead/UnAssignEloungeAssignUserToLeadSlice'

export async function getEloungeAssignUserToLeadApi(dispatch, pageLimit, id) {
  dispatch(GetEloungeAssignUserToLead())
  try {
    let url = `${API.eLounge.getEloungeAssignUserToLead}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(GetEloungeAssignUserToLeadSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetEloungeAssignUserToLeadFailure(error?.response?.data))
  }
}

export async function unAssignEloungeAssignUserToLeadApi(
  dispatch,
  id,
  onSuccess
) {
  dispatch(UnAssignEloungeAssignUserToLead())
  try {
    let res = await deleteRequest(
      `${API.eLounge.unAssignEloungeAssignUserToLead}/${id}`
    )
    dispatch(UnAssignEloungeAssignUserToLeadSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(UnAssignEloungeAssignUserToLeadFailure(error.response.data))
  }
}
