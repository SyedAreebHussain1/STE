import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getRegisteredUsers,
  getRegisteredUsersSuccess,
  getRegisteredUsersFailure,
} from '../../slices/Traffic/GetRegisteredUsersSlice'
import {
  getTotalSaleOrder,
  getTotalSaleOrderSuccess,
  getTotalSaleOrderFailure,
} from '../../slices/Traffic/GetTotalSaleOrderSlice'
import {
  getRevenue,
  getRevenueSuccess,
  getRevenueFailure,
} from '../../slices/Traffic/GetRevenueSlice'
import {
  getNoOfRegisteredStaff,
  getNoOfRegisteredStaffSuccess,
  getNoOfRegisteredStaffFailure,
} from '../../slices/Traffic/GetNoOfRegisteredStaffSlice'
import {
  getNoOfUnits,
  getNoOfUnitsFailure,
  getNoOfUnitsSuccess,
} from '../../slices/Traffic/GetNoOfUnitsSlice'
import {
  GetNoOfDownloads,
  GetNoOfDownloadsFailure,
  GetNoOfDownloadsSuccess,
} from '../../slices/Traffic/GetNoOfDownloadsSlice'

// getRegisteredUsers
export async function getRegisteredUsersApi(dispatch) {
  dispatch(getRegisteredUsers())
  try {
    let res = await getRequest(API.Traffic.getRegisteredUsers)
    dispatch(getRegisteredUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getRegisteredUsersFailure(error.response.data))
  }
}

// getTotalSaleOrder
export async function getTotalSaleOrderApi(dispatch) {
  dispatch(getTotalSaleOrder())
  try {
    let res = await getRequest(API.Traffic.getTotalSaleOrder)
    dispatch(getTotalSaleOrderSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getTotalSaleOrderFailure(error.response.data))
  }
}

// getRevenue
export async function getRevenueApi(dispatch) {
  dispatch(getRevenue())
  try {
    let res = await getRequest(API.Traffic.getRevenue)
    dispatch(getRevenueSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getRevenueFailure(error.response.data))
  }
}

// getNoOfRegisteredStaff
export async function getNoOfRegisteredStaffApi(dispatch) {
  dispatch(getNoOfRegisteredStaff())
  try {
    let res = await getRequest(API.Traffic.getNoOfRegisteredStaff)
    dispatch(getNoOfRegisteredStaffSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getNoOfRegisteredStaffFailure(error.response.data))
  }
}
export async function getNoOfUnitsApi(dispatch) {
  dispatch(getNoOfUnits())
  try {
    let res = await getRequest(API.Traffic.getNoOfUnits)
    dispatch(getNoOfUnitsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getNoOfUnitsFailure(error.response.data))
  }
}

export async function getNoOfDownloadsApi(dispatch) {
  dispatch(GetNoOfDownloads())
  try {
    let res = await getRequest(API.Traffic.getNoOfDownloads)
    dispatch(GetNoOfDownloadsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetNoOfDownloadsFailure(error.response.data))
  }
}
