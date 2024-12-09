import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  GetAllCatalogueMeetingSlots,
  GetAllCatalogueMeetingSlotsFailure,
  GetAllCatalogueMeetingSlotsSuccess,
} from '../../slices/CatalogueMeetingSlots/GetAllCatalogueMeetingSlotsSlice'

export async function GetAllCatalogueMeetingSlotsApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetAllCatalogueMeetingSlots())
  try {
    let url = `${API.catalogue.getAllBookedMeetingSlots}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      search
        ? selectedFilter === 'Agent Name'
          ? `&agentName=${search}`
          : `&agencyName=${search}`
        : ''
    }`
    let res = await getRequest(url)
    dispatch(GetAllCatalogueMeetingSlotsSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllCatalogueMeetingSlotsFailure(error?.response?.data))
  }
}
