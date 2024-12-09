import {
  getAllTicketUsers,
  getAllTicketUsersFailure,
  getAllTicketUsersSuccess,
} from '../../../slices/TicketingSystem/TicketUsers/getAllTicketUsersSlice'
import { API } from '../../../../config/apiEndPoints'
import { getError, getRequest, patchRequest } from '../../../../utils/baseApi'
import {
  suspendTicketUser,
  suspendTicketUserFailure,
  suspendTicketUserSuccess,
} from '../../../slices/TicketingSystem/TicketUsers/suspendTicketUserSlice'
import { successMessage } from '../../../../utils/message'

export async function getAllTicketUsersApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllTicketUsers())
  try {
    const query = {
      Name: 'fullName',
    }
    let res = await getRequest(
      `${API.ticketing.getAllTicketUsers}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    )
    dispatch(getAllTicketUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllTicketUsersFailure(error.response.data))
  }
}

export async function suspendTicketUserApi(dispatch, body) {
  dispatch(suspendTicketUser())
  try {
    let res = await patchRequest(`${API.ticketing.suspendTicketUser}`, body)
    dispatch(suspendTicketUserSuccess(res.data))
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(suspendTicketUserFailure(error.response.data))
  }
}
