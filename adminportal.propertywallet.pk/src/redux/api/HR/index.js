import { API } from '../../../config/apiEndPoints'
import {
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  deleteFreelancer,
  deleteFreelancerFailure,
  deleteFreelancerSuccess,
} from '../../slices/HR/deleteFreelancerSlice'
import {
  getAllFreelancersById,
  getAllFreelancersByIdFailure,
  getAllFreelancersByIdSuccess,
} from '../../slices/HR/getAllFreelancersByIdSlice'
import {
  getAllFreelancersForHR,
  getAllFreelancersForHRFailure,
  getAllFreelancersForHRSuccess,
} from '../../slices/HR/getAllFreelancersForHRSlice'
import {
  uploadBackgroundImage,
  uploadBackgroundImageFailure,
  uploadBackgroundImageSuccess,
} from '../../slices/ManageSubscriptions/uploadBackgroundImageSlice'
import {
  uploadIcon,
  uploadIconFailure,
  uploadIconSuccess,
} from '../../slices/ManageSubscriptions/uploadIconSlice'

export async function getAllFreelancersForHRApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  isVerified
) {
  dispatch(getAllFreelancersForHR())
  try {
    const query = {
      Email: 'email',
      'Referral Code': 'refCode',
      Name: 'name',
    }
    let url = `${API.HR.getAllFreelancersForHR}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }&isVerified=${isVerified === 'Verified'}`
    let res = await getRequest(url)
    dispatch(getAllFreelancersForHRSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllFreelancersForHRFailure(error?.response?.data))
  }
}

export async function getAllFreelancersByIdApi(
  dispatch,
  pageLimit,
  id,
  search,
  selectedFilter
) {
  dispatch(getAllFreelancersById())
  try {
    const query = {
      Name: 'search',
    }
    let url = `${API.HR.getAllFreelancersById}/${id}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getAllFreelancersByIdSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllFreelancersByIdFailure(error?.response?.data))
  }
}

export async function deleteFreelancerApi(dispatch, id, onSuccess) {
  dispatch(deleteFreelancer())
  try {
    let url = `${API.HR.deleteFreelancer}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteFreelancerSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(deleteFreelancerFailure(error?.response?.data))
  }
}
export async function uploadBackgroundImageApi(dispatch, body, onSuccess) {
  dispatch(uploadBackgroundImage())
  try {
    let res = await fileRequest(API.HR.uploadBackgroundImage, body)
    dispatch(uploadBackgroundImageSuccess(res.data))
    // successMessage(res.data.message);
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(uploadBackgroundImageFailure(error.response.data))
  }
}
export async function uploadIconApi(dispatch, body, onSuccess) {
  dispatch(uploadIcon())
  try {
    let res = await fileRequest(API.HR.uploadIcon, body)
    dispatch(uploadIconSuccess(res.data))
    // successMessage(res.data.message);
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(uploadIconFailure(error.response.data))
  }
}
