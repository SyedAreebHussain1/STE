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
  addDiscount,
  addDiscountFailure,
  addDiscountSuccess,
} from '../../slices/Discount/addDiscountSlice'
import {
  deleteDiscount,
  deleteDiscountFailure,
  deleteDiscountSuccess,
} from '../../slices/Discount/deleteDiscountSlice'
import {
  getAllDiscounts,
  getAllDiscountsFailure,
  getAllDiscountsSuccess,
} from '../../slices/Discount/getAllDiscountsSlice'
import {
  updateDiscount,
  updateDiscountFailure,
  updateDiscountSuccess,
} from '../../slices/Discount/updateDiscountSlice'

export async function getAllDiscountsApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllDiscounts())
  try {
    const query = {
      'Discount Code': 'search',
    }
    let url = `${API.discount.getAllDiscounts}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    let res = await getRequest(url)
    dispatch(getAllDiscountsSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllDiscountsFailure(error?.response?.data))
  }
}

export async function addDiscountApi(dispatch, body, onSuccess) {
  dispatch(addDiscount())
  try {
    let res = await postRequest(`${API.discount.addDiscount}`, body)
    dispatch(addDiscountSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addDiscountFailure(error.response.data))
  }
}

export async function updateDiscountApi(dispatch, body, id, onSuccess) {
  dispatch(updateDiscount())
  try {
    let res = await patchRequest(`${API.discount.updateDiscount}/${id}`, body)
    dispatch(updateDiscountSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateDiscountFailure(error.response.data))
  }
}

export async function deleteDiscountApi(dispatch, id) {
  dispatch(deleteDiscount())
  try {
    let url = `${API.discount.deleteDiscount}/${id}`
    let res = await deleteRequest(url)
    dispatch(deleteDiscountSuccess(res?.data))
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(deleteDiscountFailure(error?.response?.data))
  }
}
