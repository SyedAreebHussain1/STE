import { API } from '../../../../config/apiEndPoints'
import {
  getError,
  postRequest,
  getRequest,
  patchRequest,
} from '../../../../utils/baseApi'
import { successMessage } from '../../../../utils/message'

import {
  postRoles,
  postRolesFailure,
  postRolesSuccess,
} from '../../../slices/Settings/Roles/PostRolesSlice'
import {
  getRoles,
  getRolesSuccess,
  getRolesFailure,
} from '../../../slices/Settings/Roles/GetRolesSlice'

import {
  patchRoles,
  patchRolesSuccess,
  patchRolesFailure,
} from '../../../slices/Settings/Roles/UpdateRolesSlice'
import {
  addUser,
  addUserFailure,
  addUserSuccess,
} from '../../../slices/Settings/Roles/AddUserSlice'
import {
  getAssignAppModule,
  getAssignAppModuleSuccess,
  getAssignAppModuleFailure,
} from '../../../slices/Settings/Roles/GetAssignAppModuleSlice'
import {
  assignModuleRole,
  assignModuleRoleFailure,
  assignModuleRoleSuccess,
} from '../../../slices/Settings/Roles/AssignModuleRoleSlice'

// post
export async function postRolesApi(dispatch, body, onSuccess) {
  dispatch(postRoles())
  try {
    let res = await postRequest(API.Roles.postRolesTitle, body)
    dispatch(postRolesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(postRolesFailure(error.response.data))
  }
}

// get
export async function getRolesApi(dispatch, pageLimit, search) {
  dispatch(getRoles())
  try {
    const query = {
      Role: 'title',
    }
    let res = await getRequest(
      `${API.Roles.getRolesTitle}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${search ? `&${query.Role}=${search}` : ''}`
    )
    dispatch(getRolesSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getRolesFailure(error.response.data))
  }
}

// patch
export async function patchRolesApi(dispatch, body, updateId, onSuccess) {
  dispatch(patchRoles())
  try {
    let res = await patchRequest(
      `${API.Roles.patchRolesUpdate}/${updateId}`,
      body
    )
    dispatch(patchRolesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(patchRolesFailure(error.response.data))
  }
}

// post
export async function addUserApi(dispatch, body, onSuccess) {
  dispatch(addUser())
  try {
    let res = await postRequest(API.Roles.addUser, body)
    dispatch(addUserSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addUserFailure(error.response.data))
  }
}

// get
export async function getAssignAppModuleApi(dispatch, assignId) {
  dispatch(getAssignAppModule())
  try {
    let res = await getRequest(`${API.Roles.getAssignAppModule}/${assignId}`)
    dispatch(getAssignAppModuleSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAssignAppModuleFailure(error.response.data))
  }
}

export async function assignModuleRoleApi(dispatch, body, onSuccess) {
  dispatch(assignModuleRole())
  try {
    let res = await patchRequest(API.Roles.assignModuleRoles, body)
    dispatch(assignModuleRoleSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(assignModuleRoleFailure(error.response.data))
  }
}
