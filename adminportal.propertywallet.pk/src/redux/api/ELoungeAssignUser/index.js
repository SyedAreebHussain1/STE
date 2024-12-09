import { API } from '../../../config/apiEndPoints'
import { deleteRequest, getError, getRequest } from '../../../utils/baseApi'

import { successMessage } from '../../../utils/message'
import {
  GetAllELoungeAssignUserFailure,
  GetAllELoungeAssignUser,
  GetAllELoungeAssignUserSuccess,
} from '../../slices/ELoungeAssignUser/GetAllELoungeAssignUserSlice'
import {
  DeleteELoungeAssignUser,
  DeleteELoungeAssignUserFailure,
  DeleteELoungeAssignUserSuccess,
} from '../../slices/ELoungeAssignUser/DeleteELoungeAssignUserSlice'

export async function getELoungeAssignUserApi(dispatch, pageLimit, id) {
  dispatch(GetAllELoungeAssignUser())
  try {
    let url = `${API.eLounge.getAllELoungeAssignUser}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(GetAllELoungeAssignUserSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllELoungeAssignUserFailure(error?.response?.data))
  }
}

export async function deleteELoungeAssignUserApi(dispatch, id, onSuccess) {
  dispatch(DeleteELoungeAssignUser())
  try {
    let res = await deleteRequest(
      `${API.eLounge.deleteELoungeAssignUser}/${id}`
    )
    dispatch(DeleteELoungeAssignUserSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(DeleteELoungeAssignUserFailure(error.response.data))
  }
}
