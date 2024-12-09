import { API } from '../../../config/apiEndPoints'
import {
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  createMilestone,
  createMilestoneSuccess,
  createMilestoneFailure,
} from '../../slices/Milestones/createMilestoneSilce'
import {
  deleteMilestone,
  deleteMilestoneSuccess,
  deleteMilestoneFailure,
} from '../../slices/Milestones/deleteMilestoneSlice'
import {
  getAllMilestones,
  getAllMilestonesSuccess,
  getAllMilestonesFailure,
} from '../../slices/Milestones/getAllMilestonesSlice'
import {
  updateMilestone,
  updateMilestoneSuccess,
  updateMilestoneFailure,
} from '../../slices/Milestones/updateMilestoneSlice'

import {
  uploadAdvertisement,
  uploadAdvertisementSuccess,
  uploadAdvertisementFailure,
} from '../../slices/Advertisement/Promotion/UploadAdvertisementSlice'

export async function getAllMilestonesApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllMilestones())
  try {
    const query = {
      Name: 'name',
    }
    let url = `${API.milestones.getAllMilestones}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getAllMilestonesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllMilestonesFailure(error?.response?.data))
  }
}

export async function createMilestoneApi(dispatch, body, onSuccess) {
  dispatch(createMilestone())
  try {
    let url = `${API.milestones.createMilestone}`
    let res = await postRequest(url, body)
    dispatch(createMilestoneSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createMilestoneFailure(error?.response?.data))
  }
}

export async function updateMilestoneApi(dispatch, body, onSuccess, id) {
  dispatch(updateMilestone())
  try {
    let url = `${API.milestones.updateMilestone}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateMilestoneSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateMilestoneFailure(error?.response?.data))
  }
}

export async function deleteMilestoneApi(dispatch, id, onSuccess) {
  dispatch(deleteMilestone())
  try {
    let url = `${API.milestones.deleteMilestone}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteMilestoneSuccess(res?.data))
    onSuccess()
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(deleteMilestoneFailure(error?.response?.data))
  }
}

export async function uploadAdvertisementApi(
  dispatch,
  body,
  onSuccess,
  dataVal
) {
  dispatch(uploadAdvertisement())
  try {
    let res = await fileRequest(API.milestones.uploadAdvertisement, body)
    dispatch(uploadAdvertisementSuccess(res.data))
    if (onSuccess) {
      onSuccess(res.data, dataVal)
    }
  } catch (error) {
    getError(error)
    dispatch(uploadAdvertisementFailure(error.response.data))
  }
}
