import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, patchRequest } from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  getCrmRequests,
  getCrmRequestsFailure,
  getCrmRequestsSuccess,
} from '../../slices/CrmRequests/getCrmRequestsSlice'
import {
  updateCrmRequests,
  updateCrmRequestsFailure,
  updateCrmRequestsSuccess,
} from '../../slices/CrmRequests/updateCrmRequestsSlice'

export async function getCrmRequestsApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getCrmRequests())
  try {
    const query = {
      City: 'city',
      Location: 'address',
      'Builder Name': 'builderName',
      'Project Name': 'projectName',
    }
    let res = await getRequest(
      `${API.CrmRequests.getCrmRequests}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    )
    dispatch(getCrmRequestsSuccess(res?.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getCrmRequestsFailure(error?.response?.data))
  }
}
export async function updateCrmRequestsApi(dispatch, body, id, onSuccess) {
  dispatch(updateCrmRequests())
  try {
    let res = await patchRequest(
      `${API.CrmRequests.getCrmRequests}/${id}`,
      body
    )
    dispatch(updateCrmRequestsSuccess(res?.data))
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateCrmRequestsFailure(error?.response?.data))
  }
}
