import { API } from '../../../../config/apiEndPoints'
import { getError, getRequest, patchRequest } from '../../../../utils/baseApi'
import { successMessage } from '../../../../utils/message'
import {
  editUsersRole,
  editUsersRoleFailure,
  editUsersRoleSuccess,
} from '../../../slices/Settings/UserManagement/editUsersRoleSlice'
import {
  getUserManagementList,
  getUserManagementListFailure,
  getUserManagementListSuccess,
} from '../../../slices/Settings/UserManagement/getUserManagementListSlice'

export async function getUserManagementListApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getUserManagementList())
  try {
    const query = {
      'Full Name': 'fullName',
      Email: 'email',
      Phone: 'phone',
      Role: 'roleTitle',
    }
    let res = await getRequest(
      `${API.UserMangement.getUserManagementList}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(getUserManagementListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getUserManagementListFailure(error.response.data))
  }
}

export async function editUsersRoleApi(dispatch, body, id, onSuccess) {
  dispatch(editUsersRole())
  try {
    let res = await patchRequest(
      `${API.UserMangement.editUsersRole}/${id}`,
      body
    )
    dispatch(editUsersRoleSuccess(res.data))
    onSuccess()
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(editUsersRoleFailure(error.response.data))
  }
}
