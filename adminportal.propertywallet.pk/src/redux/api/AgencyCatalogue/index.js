import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  AgencyCatalogue,
  AgencyCatalogueFailure,
  AgencyCatalogueSuccess,
} from '../../slices/AgencyCatalogue/AgencyCatalogueSlice'

export async function getAgencyCatalogueApi(dispatch, pageLimit, id) {
  dispatch(AgencyCatalogue())
  try {
    let url = `${API.agency.agencyCatalogue}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(AgencyCatalogueSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(AgencyCatalogueFailure(error?.response?.data))
  }
}
