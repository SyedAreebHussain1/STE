import { API } from '../../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  postRequest,
  fileRequest,
} from '../../../../utils/baseApi'
import { successMessage } from '../../../../utils/message'
import {
  uploadAdvertisement,
  uploadAdvertisementSuccess,
  uploadAdvertisementFailure,
} from '../../../slices/Advertisement/Promotion/UploadAdvertisementSlice'
import {
  createAdvertisement,
  createAdvertisementSuccess,
  createAdvertisementFailure,
} from '../../../slices/Advertisement/Promotion/CreateAdvertisementSlice'
import {
  moduleList,
  moduleListSuccess,
  moduleListFailure,
} from '../../../slices/Advertisement/Promotion/ModuleListSlice'
import {
  getAllPromotions,
  getAllPromotionsSuccess,
  getAllPromotionsFailure,
} from '../../../slices/Advertisement/Promotion/GetAllPromotionsSlice'
import {
  deleteAdvertisement,
  deleteAdvertisementSuccess,
  deleteAdvertisementFailure,
} from '../../../slices/Advertisement/Promotion/DeleteAdvertisementSlice'

export async function uploadAdvertisementApi(dispatch, body, onSuccess) {
  dispatch(uploadAdvertisement())
  try {
    let res = await fileRequest(API.Promotion.uploadAdvertisement, body)
    dispatch(uploadAdvertisementSuccess(res.data))
    // successMessage(res.data.message);
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(uploadAdvertisementFailure(error.response.data))
  }
}

export async function createAdvertisementApi(dispatch, body, onSuccess) {
  dispatch(createAdvertisement())
  try {
    let res = await postRequest(API.Promotion.createAdvertisement, body)
    dispatch(createAdvertisementSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createAdvertisementFailure(error.response.data))
  }
}

export async function moduleListApi(dispatch) {
  dispatch(moduleList())
  try {
    let res = await getRequest(API.Promotion.moduleList)
    dispatch(moduleListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(moduleListFailure(error.response.data))
  }
}

export async function getAllPromotionsApi(dispatch, pageLimit) {
  dispatch(getAllPromotions())
  try {
    let res = await getRequest(
      `${API.Promotion.getAllPromotions}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getAllPromotionsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllPromotionsFailure(error.response.data))
  }
}

export async function deleteAdvertisementApi(dispatch, id) {
  dispatch(deleteAdvertisement())
  try {
    let res = await postRequest(`${API.Promotion.deleteAdvertisement}/${id}`)
    dispatch(deleteAdvertisementSuccess(res.data))
    successMessage(res.data.message)
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(deleteAdvertisementFailure(error.response.data))
  }
}
