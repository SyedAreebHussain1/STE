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
  createAddon,
  createAddonFailure,
  createAddonSuccess,
} from '../../slices/SubscriptionAddons/createAddonSlice'
import {
  deleteAddon,
  deleteAddonFailure,
  deleteAddonSuccess,
} from '../../slices/SubscriptionAddons/deleteAddonSlice'
import {
  getAllAddons,
  getAllAddonsFailure,
  getAllAddonsSuccess,
} from '../../slices/SubscriptionAddons/getAllAddonsSlice'
import {
  updateAddon,
  updateAddonFailure,
  updateAddonSuccess,
} from '../../slices/SubscriptionAddons/updateAddonSlice'

export async function getAllAddonsApi(dispatch, pageLimit) {
  dispatch(getAllAddons())
  try {
    let res = await getRequest(
      `${API.addons.getAllAddons}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getAllAddonsSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getAllAddonsFailure(error.response.data))
  }
}

export async function createAddonApi(dispatch, body, onSuccess) {
  dispatch(createAddon())
  try {
    let res = await postRequest(`${API.addons.createAddon}`, body)
    dispatch(createAddonSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createAddonFailure(error.response.data))
  }
}

export async function updateAddonApi(dispatch, body, onSuccess, id) {
  dispatch(updateAddon())
  try {
    let res = await patchRequest(`${API.addons.updateAddon}/${id}`, body)
    dispatch(updateAddonSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateAddonFailure(error.response.data))
  }
}

export async function deleteAddonApi(dispatch, id) {
  dispatch(deleteAddon())
  try {
    let res = await deleteRequest(`${API.addons.deleteAddon}/${id}`)
    dispatch(deleteAddonSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deleteAddonFailure(error.response.data))
  }
}
