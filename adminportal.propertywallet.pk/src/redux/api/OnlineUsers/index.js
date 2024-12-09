import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getBankRequests,
  getBankRequestsFailure,
  getBankRequestsSuccess,
} from '../../slices/OnlineUsers/getBankRequestSlice'
import {
  getOnlineUsers,
  getOnlineUsersFailure,
  getOnlineUsersSuccess,
} from '../../slices/OnlineUsers/getOnlineUsersSlice'

export async function getAllOnlineUsers(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getOnlineUsers())
  try {
    let res = await getRequest(
      `${API.onlineUsers.getOnlineUser}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&search=${search}` : ''}`
    )
    dispatch(getOnlineUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getOnlineUsersFailure(error.response.data))
  }
}
export async function getAllBankRequestsApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getBankRequests())
  try {
    let res = await getRequest(
      `${API.onlineUsers.getBankRequests}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&search=${search}` : ''}`
    )
    dispatch(getBankRequestsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getBankRequestsFailure(error.response.data))
  }
}
