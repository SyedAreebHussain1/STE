import { API } from '../../../config/apiEndPoints'
import {
  fileRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  createLounge,
  createLoungeSuccess,
  createLoungeFailure,
} from '../../slices/Lounge/createLoungeSlice'
import {
  getLounge,
  getLoungeSuccess,
  getLoungeFailure,
} from '../../slices/Lounge/getLoungeSlice'
import {
  getLoungeOwner,
  getLoungeOwnerSuccess,
  getLoungeOwnerFailure,
} from '../../slices/Lounge/getLoungeOwnerSlice'

import {
  uploadAdvertisement,
  uploadAdvertisementSuccess,
  uploadAdvertisementFailure,
} from '../../slices/Advertisement/Promotion/UploadAdvertisementSlice'
import {
  updateLounge,
  updateLoungeSuccess,
  updateLoungeFailure,
} from '../../slices/Lounge/updateLoungeSlice'
import {
  loungeActiveStatus,
  loungeActiveStatusSuccess,
  loungeActiveStatusFailure,
} from '../../slices/Lounge/loungeActiveStatusSlice'

export async function getLoungeApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getLounge())
  try {
    const query = {
      'Lounge Name': 'name',
      'Lounge Owner': 'fullName',
    }
    let url = `${API.lounge.getLounge}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    let res = await getRequest(url)
    dispatch(getLoungeSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getLoungeFailure(error?.response?.data))
  }
}

export async function createLoungeApi(dispatch, body, onSuccess) {
  dispatch(createLounge())
  try {
    let url = `${API.lounge.createLounge}`
    let res = await postRequest(url, body)
    dispatch(createLoungeSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createLoungeFailure(error?.response?.data))
  }
}

export async function getLoungeOwnerApi(dispatch) {
  dispatch(getLoungeOwner())
  try {
    let res = await getRequest(`${API.lounge.getLoungeOwner}`)
    dispatch(getLoungeOwnerSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getLoungeOwnerFailure(error?.response?.data))
  }
}

export async function uploadAdvertisementApi(dispatch, body, onSuccess) {
  dispatch(uploadAdvertisement())
  try {
    let res = await fileRequest(API.lounge.uploadAdvertisement, body)
    dispatch(uploadAdvertisementSuccess(res.data))
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(uploadAdvertisementFailure(error.response.data))
  }
}

export async function updateLoungeApi(dispatch, body, onSuccess, id) {
  dispatch(updateLounge())
  try {
    let url = `${API.lounge.updateLounge}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateLoungeSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateLoungeFailure(error?.response?.data))
  }
}
export async function loungeActiveStatusApi(dispatch, isActice, onSuccess, id) {
  dispatch(loungeActiveStatus())
  try {
    let url = `${API.lounge.updateLounge}/${id}`
    let res = await patchRequest(url, isActice)
    dispatch(loungeActiveStatusSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(loungeActiveStatusFailure(error?.response?.data))
  }
}

export async function getLoungeAssignedInventoriesApi(dispatch, pageLimit) {
  dispatch(getLounge())
  try {
    let url = `${API.lounge.getInventoryList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getLoungeSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getLoungeFailure(error?.response?.data))
  }
}
