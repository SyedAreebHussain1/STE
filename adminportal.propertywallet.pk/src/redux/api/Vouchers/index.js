import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getAllCustomDataVoucherFailure,
  getAllCustomDataVoucher,
  getAllCustomDataVoucherSuccess,
} from '../../slices/Vouchers/getAllCustomDataVoucherSlice'
import {
  getAllVouchers,
  getAllVouchersFailure,
  getAllVouchersSuccess,
} from '../../slices/Vouchers/getAllVouchersSlice'

export async function getAllCustomDataVoucherApi(dispatch, pageLimit) {
  let queryStr = `?page=${pageLimit.page}&limit=${pageLimit.limit}`
  dispatch(getAllCustomDataVoucher())
  try {
    let url = `${API.voucher.getAllCustomData}${queryStr}`
    let res = await getRequest(url)
    dispatch(getAllCustomDataVoucherSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllCustomDataVoucherFailure(error?.response?.data))
  }
}

export async function getAllVouchersApi(dispatch, pageLimit) {
  let queryStr = `?page=${pageLimit.page}&limit=${pageLimit.limit}`
  dispatch(getAllVouchers())
  try {
    let url = `${API.voucher.getAllVouchers}${queryStr}`
    let res = await getRequest(url)
    dispatch(getAllVouchersSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllVouchersFailure(error?.response?.data))
  }
}
