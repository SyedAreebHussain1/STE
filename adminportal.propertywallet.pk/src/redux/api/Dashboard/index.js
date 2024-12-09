import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, postRequest } from '../../../utils/baseApi'
import {
  allPropertiesCount,
  allPropertiesCountFailure,
  allPropertiesCountSuccess,
} from '../../slices/Dashboard/AllPropertiesCountSlice'
import {
  allPropertiesLastDayCount,
  allPropertiesLastDayCountFailure,
  allPropertiesLastDayCountSuccess,
} from '../../slices/Dashboard/AllPropertiesLastDayCountSlice'

import {
  soldPropertiesCount,
  soldPropertiesCountSuccess,
  soldPropertiesCountFailure,
} from '../../slices/Dashboard/SoldPropertiesCountSlice'
import {
  soldPropertiesLastDayCount,
  soldPropertiesLastDayCountSuccess,
  soldPropertiesLastDayCountFailure,
} from '../../slices/Dashboard/SoldInvnetoryLastDayCount'

import {
  getUsersInfoMonthly,
  getUsersInfoMonthlySuccess,
  getUsersInfoMonthlyFailure,
} from '../../slices/Dashboard/UsersInfoMonthlySlice'

import {
  allAgenciesCount,
  allAgenciesCountSuccess,
  allAgenciesCountFailure,
} from '../../slices/Dashboard/AgenciesCountSlice'
import {
  GetPropertiesOverview,
  GetPropertiesOverviewFailure,
  GetPropertiesOverviewSuccess,
} from '../../slices/Dashboard/GetPropertiesOverviewSlice'
import {
  isAgencyWithinRadius,
  isAgencyWithinRadiusFailure,
  isAgencyWithinRadiusSuccess,
} from '../../slices/Dashboard/isAgencyWithinRadiusSlice'

export async function allPropertiesCountApi(dispatch) {
  dispatch(allPropertiesCount())
  try {
    let res = await getRequest(API.Dashboard.getAllInvnetoryCount)
    dispatch(allPropertiesCountSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(allPropertiesCountFailure(error.response.data))
  }
}
export async function allPropertiesLastDayCountApi(dispatch) {
  dispatch(allPropertiesLastDayCount())
  try {
    let res = await getRequest(API.Dashboard.getAllInvnetoryLastDayCount)
    dispatch(allPropertiesLastDayCountSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(allPropertiesLastDayCountFailure(error.response.data))
  }
}

// Sold Properties
export async function soldPropertiesCountApi(dispatch) {
  dispatch(soldPropertiesCount())
  try {
    let res = await getRequest(API.Dashboard.getSoldInvnetoryCount)
    dispatch(soldPropertiesCountSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(soldPropertiesCountFailure(error.response.data))
  }
}

export async function soldPropertiesLastDayCountApi(dispatch) {
  dispatch(soldPropertiesLastDayCount())
  try {
    let res = await getRequest(API.Dashboard.getSoldInvnetoryLastDayCount)
    dispatch(soldPropertiesLastDayCountSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(soldPropertiesLastDayCountFailure(error.response.data))
  }
}

// AgenciesCount
export async function allAgenciesCountApi(dispatch) {
  dispatch(allAgenciesCount())
  try {
    let res = await getRequest(API.Dashboard.getAllAgenciesCount)
    dispatch(allAgenciesCountSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(allAgenciesCountFailure(error.response.data))
  }
}

// post chart
export async function getUsersInfoMonthlyApi(dispatch, body) {
  dispatch(getUsersInfoMonthly())
  try {
    let res = await getRequest(API.Dashboard.postGetUsersInfoMonthly)
    dispatch(getUsersInfoMonthlySuccess(res.data))
    // successMessage(res.data.message);
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getUsersInfoMonthlyFailure(error.response.data))
  }
}

export async function getPropertiesOverviewApi(dispatch) {
  dispatch(GetPropertiesOverview())
  try {
    let res = await getRequest(API.Dashboard.getPropertiesOverview)
    dispatch(GetPropertiesOverviewSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetPropertiesOverviewFailure(error.response.data))
  }
}

export async function isAgencyWithinRadiusApi(dispatch, lat, lng, radius) {
  dispatch(isAgencyWithinRadius())
  try {
    let res = await getRequest(
      `${API.Dashboard.isAgencyWithinRadius}?latitude=${lat}&longitude=${lng}&radius=${radius}`
    )
    dispatch(isAgencyWithinRadiusSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(isAgencyWithinRadiusFailure(error.response.data))
  }
}
