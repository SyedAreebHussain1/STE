import { API } from '../../../../config/apiEndPoints'
import { getError, getRequest } from '../../../../utils/baseApi'
import {
  getAllTicketsForAdminSide,
  getAllTicketsForAdminSideSuccess,
  getAllTicketsForAdminSideFailure,
} from '../../../slices/TicketingSystem/AllTicket/getAllTicketsForAdminSideSlice'
import {
  getTicketDataById,
  getTicketDataByIdSuccess,
  getTicketDataByIdFailure,
} from '../../../slices/TicketingSystem/AllTicket/getTicketDataByIdSlice'

export async function getAllTicketsForAdminSideApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllTicketsForAdminSide())
  try {
    const query = {
      'Ticket Subject': 'serach',
    }
    let res = await getRequest(
      `${API.ticketing.getAllTicketsForAdminSide}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(getAllTicketsForAdminSideSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllTicketsForAdminSideFailure(error.response.data))
  }
}
export async function getTicketDataByIdApi(dispatch, id) {
  dispatch(getTicketDataById())
  try {
    let res = await getRequest(`${API.ticketing.getTicketDataById}/${id}`)
    dispatch(getTicketDataByIdSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getTicketDataByIdFailure(error.response.data))
  }
}
