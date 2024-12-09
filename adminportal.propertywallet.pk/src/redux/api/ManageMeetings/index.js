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
  createMeeting,
  createMeetingFailure,
  createMeetingSuccess,
} from '../../slices/ManageMeetings/createMeetingSlice'
import {
  createParticipants,
  createParticipantsFailure,
  createParticipantsSuccess,
} from '../../slices/ManageMeetings/createParticipantsSlice'
import {
  deleteMeeting,
  deleteMeetingFailure,
  deleteMeetingSuccess,
} from '../../slices/ManageMeetings/deleteMeetingSlice'
import {
  getAllMeetings,
  getAllMeetingsFailure,
  getAllMeetingsSuccess,
} from '../../slices/ManageMeetings/getAllMeetingsSlice'
import {
  getAllParticipants,
  getAllParticipantsFailure,
  getAllParticipantsSuccess,
} from '../../slices/ManageMeetings/getAllParticipantsSlice'
import {
  updateMeetings,
  updateMeetingsFailure,
  updateMeetingsSuccess,
} from '../../slices/ManageMeetings/updateMeetingsSlice'

export async function getAllMeetingsApi(dispatch, pageLimit) {
  dispatch(getAllMeetings())
  try {
    let url = `${API.ManageMeetings.meeting}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getAllMeetingsSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllMeetingsFailure(error?.response?.data))
  }
}

export async function createMeetingApi(dispatch, body, onSuccess) {
  dispatch(createMeeting())
  try {
    let url = `${API.ManageMeetings.postMeeting}`
    let res = await postRequest(url, body)
    dispatch(createMeetingSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createMeetingFailure(error?.response?.data))
  }
}

export async function updateMeetingsApi(dispatch, body, onSuccess, id) {
  dispatch(updateMeetings())
  try {
    let url = `${API.ManageMeetings.updateMeeting}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateMeetingsSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateMeetingsFailure(error?.response?.data))
  }
}

export async function deleteMeetingApi(dispatch, id) {
  dispatch(deleteMeeting())
  try {
    let url = `${API.ManageMeetings.deleteMeeting}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteMeetingSuccess(res?.data))
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(deleteMeetingFailure(error?.response?.data))
  }
}

export async function createParticipantsApi(dispatch, body, onSuccess) {
  dispatch(createParticipants())
  try {
    let url = `${API.ManageMeetings.createParticipants}`
    let res = await postRequest(url, body)
    dispatch(createParticipantsSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createParticipantsFailure(error?.response?.data))
  }
}

export async function getAllParticipantsApi(dispatch, pageLimit, id) {
  dispatch(getAllParticipants())
  try {
    let url = `${API.ManageMeetings.getAllParticipants}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getAllParticipantsSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllParticipantsFailure(error?.response?.data))
  }
}
