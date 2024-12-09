import { API } from '../../../config/apiEndPoints'
import {
  fileRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import {
  CreateELounge,
  CreateELoungeFailure,
  CreateELoungeSuccess,
} from '../../slices/Elounge/CreateELoungeSlice'
import {
  getElounge,
  getEloungeFailure,
  getEloungeSuccess,
} from '../../slices/Elounge/getEloungeSlice'

import {
  uploadAdvertisement,
  uploadAdvertisementSuccess,
  uploadAdvertisementFailure,
} from '../../slices/Advertisement/Promotion/UploadAdvertisementSlice'
import {
  updateELounge,
  updateELoungeFailure,
  updateELoungeSuccess,
} from '../../slices/Elounge/updateELoungeSlice'
import {
  ELoungeActiveStatus,
  ELoungeActiveStatusFailure,
  ELoungeActiveStatusSuccess,
} from '../../slices/Elounge/ELoungeActiveStatusSlice'
import { successMessage } from '../../../utils/message'
import {
  AssignUserELounge,
  AssignUserELoungeFailure,
  AssignUserELoungeSuccess,
} from '../../slices/Elounge/AssignUserELoungeSlice'
import {
  GetEloungeUserNameAndId,
  GetEloungeUserNameAndIdFailure,
  GetEloungeUserNameAndIdSuccess,
} from '../../slices/Elounge/GetEloungeUserNameAndIdSlice'

export async function getELoungeApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getElounge())
  try {
    const query = {
      'Lounge Name': 'name',
    }
    let url = `${API.eLounge.getELounge}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    let res = await getRequest(url)
    dispatch(getEloungeSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getEloungeFailure(error?.response?.data))
  }
}

export async function createELoungeApi(dispatch, body, onSuccess) {
  dispatch(CreateELounge())
  try {
    let url = `${API.eLounge.createELounge}`
    let res = await postRequest(url, body)
    dispatch(CreateELoungeSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(CreateELoungeFailure(error?.response?.data))
  }
}

export async function eLUploadAdvertisementApi(dispatch, body, onSuccess) {
  dispatch(uploadAdvertisement())
  try {
    let res = await fileRequest(API.eLounge.uploadAdvertisement, body)
    dispatch(uploadAdvertisementSuccess(res.data))
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(uploadAdvertisementFailure(error.response.data))
  }
}

export async function updateELoungeApi(dispatch, body, onSuccess, id) {
  dispatch(updateELounge())
  try {
    let url = `${API.eLounge.updateELounge}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateELoungeSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateELoungeFailure(error?.response?.data))
  }
}
export async function eLoungeActiveStatusApi(
  dispatch,
  isActice,
  onSuccess,
  id
) {
  dispatch(ELoungeActiveStatus())
  try {
    let url = `${API.eLounge.updateELounge}/${id}`
    let res = await patchRequest(url, isActice)
    dispatch(ELoungeActiveStatusSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(ELoungeActiveStatusFailure(error?.response?.data))
  }
}

export async function postELoungeAssignUserApi(dispatch, body, onSuccess) {
  dispatch(AssignUserELounge())
  try {
    let url = `${API.eLounge.assignUser}`
    let res = await postRequest(url, body)
    dispatch(AssignUserELoungeSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(AssignUserELoungeFailure(error?.response?.data))
  }
}

export async function getEloungeUserNameAndIdApi(dispatch, pageLimit) {
  dispatch(GetEloungeUserNameAndId())
  try {
    let url = `${API.eLounge.getEloungeUserNameAndId}`
    let res = await getRequest(url)
    dispatch(GetEloungeUserNameAndIdSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetEloungeUserNameAndIdFailure(error?.response?.data))
  }
}
