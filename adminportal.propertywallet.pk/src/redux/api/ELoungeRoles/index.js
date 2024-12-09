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
  EloungeGetRoles,
  EloungeGetRolesFailure,
  EloungeGetRolesSuccess,
} from '../../slices/ELoungeRoles/EloungeGetRolesSlice'
import {
  EloungePostRoles,
  EloungePostRolesFailure,
  EloungePostRolesSuccess,
} from '../../slices/ELoungeRoles/EloungePostRolesSlice'
import {
  EloungePatchRoles,
  EloungePatchRolesFailure,
  EloungePatchRolesSuccess,
} from '../../slices/ELoungeRoles/EloungePatchRolesSlice'
import {
  EloungeDeleteRoles,
  EloungeDeleteRolesFailure,
  EloungeDeleteRolesSuccess,
} from '../../slices/ELoungeRoles/EloungeDeleteRolesSlice'

// post
export async function postRolesELoungeApi(dispatch, body, onSuccess) {
  dispatch(EloungePostRoles())
  try {
    let res = await postRequest(API.eLounge.postRole, body)
    dispatch(EloungePostRolesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(EloungePostRolesFailure(error.response.data))
  }
}

// get
export async function getRolesELoungeApi(
  dispatch,
  pageLimit,
  search,
  onSuccess
) {
  dispatch(EloungeGetRoles())
  try {
    const query = {
      Role: 'title',
    }
    let res = await getRequest(
      `${API.eLounge.getRolesTitle}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${search ? `&${query.Role}=${search}` : ''}`
    )
    if (onSuccess) {
      onSuccess(res.data)
    }
    dispatch(EloungeGetRolesSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(EloungeGetRolesFailure(error.response.data))
  }
}

// patch
export async function patchRolesELoungeApi(
  dispatch,
  body,
  updateId,
  onSuccess
) {
  dispatch(EloungePatchRoles())
  try {
    let res = await patchRequest(
      `${API.eLounge.patchRolesUpdate}/${updateId}`,
      body
    )
    dispatch(EloungePatchRolesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(EloungePatchRolesFailure(error.response.data))
  }
}

export async function deleteRolesELoungeApi(dispatch, id, onSuccess) {
  dispatch(EloungeDeleteRoles())
  try {
    let res = await deleteRequest(`${API.eLounge.deleteRole}/${id}`)
    dispatch(EloungeDeleteRolesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(EloungeDeleteRolesFailure(error.response.data))
  }
}
