import { API } from '../../../../config/apiEndPoints'
import { getError, getRequest } from '../../../../utils/baseApi'
import {
  getAllQueries,
  getAllQueriesFailure,
  getAllQueriesSuccess,
} from '../../../slices/Support/Queries/getAllQueriesSlice'

export async function getAllQueriesApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  range
) {
  dispatch(getAllQueries())
  try {
    const query = {
      Email: 'email',
      Phone: 'phoneNo',
      'Full Name': 'name',
    }
    let res = await getRequest(
      `${API.Queries.getAllQueries}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    )
    dispatch(getAllQueriesSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAllQueriesFailure(error.response.data))
  }
}
