import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getAllLeadsForAdmin,
  getAllLeadsForAdminSuccess,
  getAllLeadsForAdminFailure,
} from '../../slices/Leads/getAllLeadsForAdminSlice'

export async function getAllLeadsForAdminApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllLeadsForAdmin())
  try {
    const query = {
      Agency: 'agencyName',
      'Lead Name': 'name',
      'Project Name': 'projectName',
    }
    let res = await getRequest(
      `${API.Leads.getAllLeadsForAdmin}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    )
    dispatch(getAllLeadsForAdminSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllLeadsForAdminFailure(error.response.data))
  }
}
