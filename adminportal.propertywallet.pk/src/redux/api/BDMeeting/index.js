import { API } from '../../../config/apiEndPoints'
import {
  deleteRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  CreateBDMeeting,
  CreateBDMeetingFailure,
  CreateBDMeetingSuccess,
} from '../../slices/BDMeeting/CreateBDMeetingSlice'
import {
  allBDMeetingsForAdmin,
  allBDMeetingsForAdminSuccess,
  allBDMeetingsForAdminFailure,
} from '../../slices/BDMeeting/allBDMeetingsForAdminSlice'

import {
  getAllBDMeetingSessionByBDMeetingId,
  getAllBDMeetingSessionByBDMeetingIdSuccess,
  getAllBDMeetingSessionByBDMeetingIdFailure,
} from '../../slices/BDMeeting/getAllBDMeetingSessionByBDMeetingIdSlice'

import {
  getListAllBDUser,
  getListAllBDUserSuccess,
  getListAllBDUserFailure,
} from '../../slices/BDMeeting/getListAllBDUserSlice'
import {
  updateBdMeeting,
  updateBdMeetingSuccess,
  updateBdMeetingFailure,
} from '../../slices/BDMeeting/updateBdMeetingSlice'
import {
  deleteBdMeeting,
  deleteBdMeetingSuccess,
  deleteBdMeetingFailure,
} from '../../slices/BDMeeting/deleteBdMeetingSlice'
import {
  createBDMeetingSession,
  createBDMeetingSessionSuccess,
  createBDMeetingSessionFailure,
} from '../../slices/BDMeeting/createBDMeetingSessionSlice'
import {
  assignBDMeetingSession,
  assignBDMeetingSessionSuccess,
  assignBDMeetingSessionFailure,
} from '../../slices/BDMeeting/assignBDMeetingSessionSlice'

export async function createMeetingInBDApi(dispatch, body, onSuccess) {
  dispatch(CreateBDMeeting())
  try {
    let url = `${API.BusinessDevelopment.createMeeting}`
    let res = await postRequest(url, body)
    dispatch(CreateBDMeetingSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(CreateBDMeetingFailure(error?.response?.data))
  }
}
export async function createBDMeetingSessionApi(dispatch, body, onSuccess) {
  dispatch(createBDMeetingSession())

  try {
    let url = `${API.BusinessDevelopment.createBDMeetingSession}`
    let res = await postRequest(url, body)
    dispatch(createBDMeetingSessionSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createBDMeetingSessionFailure(error?.response?.data))
  }
}

export async function allBDMeetingsForAdminApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(allBDMeetingsForAdmin())
  try {
    const query = {
      Title: 'title',
    }
    let url = `${API.BusinessDevelopment.allBDMeetingsForAdmin}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(allBDMeetingsForAdminSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(allBDMeetingsForAdminFailure(error?.response?.data))
  }
}
export async function getAllBDMeetingSessionByBDMeetingIdApi(
  dispatch,
  pageLimit,
  id,
  search,
  selectedFilter
) {
  dispatch(getAllBDMeetingSessionByBDMeetingId())
  try {
    const query = {
      Name: 'name',
      Email: 'email',
      'Phone no': 'phone',
    }
    let url = `${
      API.BusinessDevelopment.BDMeetingSessionByBDMeetingId
    }/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getAllBDMeetingSessionByBDMeetingIdSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllBDMeetingSessionByBDMeetingIdFailure(error?.response?.data))
  }
}
export async function updateBdMeetingApi(dispatch, body, onSuccess, id) {
  dispatch(updateBdMeeting())
  try {
    let url = `${API.BusinessDevelopment.updateBdMeeting}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateBdMeetingSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateBdMeetingFailure(error?.response?.data))
  }
}
export async function deleteBdMeetingApi(dispatch, id) {
  dispatch(deleteBdMeeting())
  try {
    let url = `${API.BusinessDevelopment.deleteBdMeeting}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteBdMeetingSuccess(res?.data))
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(deleteBdMeetingFailure(error?.response?.data))
  }
}
export async function getListAllBDUserApi(dispatch, pageLimit, id) {
  dispatch(getListAllBDUser())
  try {
    let url = `${API.BusinessDevelopment.getListAllBDUser}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getListAllBDUserSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getListAllBDUserFailure(error?.response?.data))
  }
}
export async function assignBDMeetingSessionApi(dispatch, body, onSuccess) {
  dispatch(assignBDMeetingSession())
  try {
    let url = `${API.BusinessDevelopment.assignBDMeetingSession}`
    let res = await postRequest(url, body)
    dispatch(assignBDMeetingSessionSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(assignBDMeetingSessionFailure(error?.response?.data))
  }
}
