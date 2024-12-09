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
  createBDMilestone,
  createBDMilestoneSuccess,
  createBDMilestoneFailure,
} from '../../slices/BDMilestones/createBDMilestoneSilce'
import {
  deleteBDMilestone,
  deleteBDMilestoneSuccess,
  deleteBDMilestoneFailure,
} from '../../slices/BDMilestones/deleteBDMilestoneSlice'
import {
  getAllBDMilestones,
  getAllBDMilestonesSuccess,
  getAllBDMilestonesFailure,
} from '../../slices/BDMilestones/getAllBDMilestonesSlice'
import {
  updateBDMilestone,
  updateBDMilestoneSuccess,
  updateBDMilestoneFailure,
} from '../../slices/BDMilestones/updateBDMilestoneSlice'

import {
  uploadAdvertisement,
  uploadAdvertisementSuccess,
  uploadAdvertisementFailure,
} from '../../slices/Advertisement/Promotion/UploadAdvertisementSlice'

export async function getAllBDMilestonesForAdminApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllBDMilestones())
  try {
    const query = {
      Name: 'name',
    }
    let url = `${API.BusinessDevelopment.getAllBDMilestonesForAdmin}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getAllBDMilestonesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllBDMilestonesFailure(error?.response?.data))
  }
}

export async function createBDMilestoneApi(dispatch, body, onSuccess) {
  dispatch(createBDMilestone())
  try {
    let url = `${API.BusinessDevelopment.createBDMilestone}`
    let res = await postRequest(url, body)
    dispatch(createBDMilestoneSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createBDMilestoneFailure(error?.response?.data))
  }
}

export async function updateBDMilestoneApi(dispatch, body, onSuccess, id) {
  dispatch(updateBDMilestone())
  try {
    let url = `${API.BusinessDevelopment.updateBDMilestone}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateBDMilestoneSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateBDMilestoneFailure(error?.response?.data))
  }
}

export async function deleteBDMilestoneApi(dispatch, id, onSuccess) {
  dispatch(deleteBDMilestone())
  try {
    let url = `${API.BusinessDevelopment.deleteBDMilestone}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteBDMilestoneSuccess(res?.data))
    onSuccess()
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(deleteBDMilestoneFailure(error?.response?.data))
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
