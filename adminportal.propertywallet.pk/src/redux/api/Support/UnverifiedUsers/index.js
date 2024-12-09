import { API } from '../../../../config/apiEndPoints'
import { getError, getRequest } from '../../../../utils/baseApi'
import {
  getAllUnverifiedUsers,
  getAllUnverifiedUsersFailure,
  getAllUnverifiedUsersSuccess,
} from '../../../slices/Support/UnverifiedUsers/getAllUnverifiedUsersSlice'

export async function getAllUnverifiedUsersApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  range
) {
  dispatch(getAllUnverifiedUsers())
  try {
    const query = {
      Email: 'email',
      Phone: 'phone',
      'Full Name': 'fullName',
      'Agency Name': 'agencyName',
    }
    let res = await getRequest(
      `${API.UnverifiedUsers.getAllUnverifiedUsers}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(getAllUnverifiedUsersSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAllUnverifiedUsersFailure(error.response.data))
  }
}
