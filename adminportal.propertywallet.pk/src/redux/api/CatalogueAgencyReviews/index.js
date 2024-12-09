import { API } from '../../../config/apiEndPoints'
import { deleteRequest, getError, getRequest } from '../../../utils/baseApi'
import {
  GetAllCatalogueAgencyReview,
  GetAllCatalogueAgencyReviewFailure,
  GetAllCatalogueAgencyReviewSuccess,
} from '../../slices/CatalogueAgencyReview/GetAllCatalogueAgencyReviewSlice'

export async function GetAllCatalogueAgencyReviewApi(
  dispatch,
  pageLimit,
  search
) {
  dispatch(GetAllCatalogueAgencyReview())
  try {
    let url = `${API.catalogue.getAllAgencyReview}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${search ? `&agencyName=${search}` : ''}`
    let res = await getRequest(url)
    dispatch(GetAllCatalogueAgencyReviewSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllCatalogueAgencyReviewFailure(error?.response?.data))
  }
}
// export async function deleteAgencyReviewApi(dispatch, id, onSuccess) {
//   dispatch(DeleteAgencyReview())
//   try {
//     let url = `${API.agency.delete}/${id}`
//     let res = await deleteRequest(url)
//     dispatch(DeleteAgencyReviewSuccess(res?.data))
//     onSuccess()
//     successMessage(res?.data?.message)
//   } catch (error) {
//     getError(error)
//     dispatch(DeleteAgencyReviewFailure(error?.response?.data))
//   }
// }
