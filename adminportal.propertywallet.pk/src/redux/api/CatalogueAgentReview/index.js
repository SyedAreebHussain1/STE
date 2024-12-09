import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  GetAllCatalogueAgentReview,
  GetAllCatalogueAgentReviewFailure,
  GetAllCatalogueAgentReviewSuccess,
} from '../../slices/CatalogueAgentReview/GetAllCatalogueAgentReviewSlice'

export async function GetAllCatalogueAgentReviewApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetAllCatalogueAgentReview())
  try {
    let url = `${API.catalogue.getAllAgentReview}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      search
        ? selectedFilter == 'Agent Name'
          ? `&agentName=${search}`
          : `&agencyName=${search}`
        : ''
    }`
    let res = await getRequest(url)
    dispatch(GetAllCatalogueAgentReviewSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllCatalogueAgentReviewFailure(error?.response?.data))
  }
}
