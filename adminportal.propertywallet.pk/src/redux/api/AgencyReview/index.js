import { API } from '../../../config/apiEndPoints'
import {
  deleteRequest,
  getError,
  getRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  GetAgencyReviewByAgencyID,
  GetAgencyReviewByAgencyIDFailure,
  GetAgencyReviewByAgencyIDSuccess,
} from '../../slices/AgentReview/GetAgencyReviewByAgencyIDSlice'
import {
  GetAllAgencyForAgentReview,
  GetAllAgencyForAgentReviewFailure,
  GetAllAgencyForAgentReviewSuccess,
} from '../../slices/AgentReview/GetAllAgencyForAgentReviewSlice'
import {
  DeleteAgencyReview,
  DeleteAgencyReviewFailure,
  DeleteAgencyReviewSuccess,
} from '../../slices/AgentReview/DeleteAgencyReviewByIdSlice'
import {
  getAllAgenciesForSaleUsers,
  getAllAgenciesForSaleUsersFailure,
  getAllAgenciesForSaleUsersSuccess,
} from '../../slices/AgentReview/getAllAgenciesForSaleUsers'
import {
  getAllELoungesForSaleUser,
  getAllELoungesForSaleUserFailure,
  getAllELoungesForSaleUserSuccess,
} from '../../slices/AgentReview/getAllELoungesForSaleUser'
import {
  getAllSaleUserByLoungeId,
  getAllSaleUserByLoungeIdFailure,
  getAllSaleUserByLoungeIdSuccess,
} from '../../slices/AgentReview/getAllSaleUserByLoungeId'
import {
  assignSaleUserToAgency,
  assignSaleUserToAgencyFailure,
  assignSaleUserToAgencySuccess,
} from '../../slices/AgentReview/assignSaleUserToAgencySlice'

export async function GetAllAgencyForAgentReviewApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetAllAgencyForAgentReview())
  try {
    let url = `${API.agency.getAllAgency}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }&${
      selectedFilter == 'Agency Name' ? 'agencyName' : 'agencyCode'
    }=${search}`
    let res = await getRequest(url)
    dispatch(GetAllAgencyForAgentReviewSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllAgencyForAgentReviewFailure(error?.response?.data))
  }
}

export async function GetAllAgencyReviewByAgencyIdApi(dispatch, id, pageLimit) {
  dispatch(GetAgencyReviewByAgencyID())
  try {
    let url = `${API.agency.getAllAgentReview}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(GetAgencyReviewByAgencyIDSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAgencyReviewByAgencyIDFailure(error?.response?.data))
  }
}

export async function deleteAgencyReviewApi(dispatch, id, onSuccess) {
  dispatch(DeleteAgencyReview())
  try {
    let url = `${API.agency.delete}/${id}`
    let res = await deleteRequest(url)
    dispatch(DeleteAgencyReviewSuccess(res?.data))
    onSuccess()
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(DeleteAgencyReviewFailure(error?.response?.data))
  }
}
export async function getAllAgenciesForSaleUsersApi(
  dispatch,
  pageLimit,
  onSuccessGetLoadMore,
  setState,
  agencyName
) {
  dispatch(getAllAgenciesForSaleUsers())
  try {
    let url = `${API.agency.getAllAgency}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${agencyName ? `&agencyName=${agencyName}` : ''}`
    let res = await getRequest(url)
    dispatch(getAllAgenciesForSaleUsersSuccess())
    onSuccessGetLoadMore(res?.data?.data?.items, setState)
  } catch (error) {
    getError(error)
    dispatch(getAllAgenciesForSaleUsersFailure(error?.response?.data))
  }
}

export async function getAllELoungesForSaleUserApi(
  dispatch,
  pageLimit,
  onSuccessGetLoadMore,
  setState
) {
  dispatch(getAllELoungesForSaleUser())
  try {
    let url = `${API.agency.getAllELoungesForSaleUser}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getAllELoungesForSaleUserSuccess(res?.data))
    onSuccessGetLoadMore(res?.data?.data?.items, setState)
  } catch (error) {
    getError(error)
    dispatch(getAllELoungesForSaleUserFailure(error?.response?.data))
  }
}
export async function getAllSaleUserByLoungeIdApi(
  dispatch,
  pageLimit,
  id,
  onSuccessGetLoadMore,
  setState
) {
  dispatch(getAllSaleUserByLoungeId())
  try {
    let url = `${API.agency.getAllSaleUserByLoungeId}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getAllSaleUserByLoungeIdSuccess(res?.data))
    onSuccessGetLoadMore(res?.data?.data?.items, setState)
  } catch (error) {
    getError(error)
    dispatch(getAllSaleUserByLoungeIdFailure(error?.response?.data))
  }
}
export async function assignSaleUserToAgencyApi(dispatch, body, onSuccess) {
  dispatch(assignSaleUserToAgency())
  try {
    let url = `${API.agency.assignSaleUserToAgency}`
    let res = await postRequest(url, body)
    dispatch(assignSaleUserToAgencySuccess(res?.data))
    onSuccess()
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(assignSaleUserToAgencyFailure(error?.response?.data))
  }
}
