import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getAllModuleNames,
  getAllModuleNamesFailure,
  getAllModuleNamesSuccess,
} from '../../slices/UserActivities/getAllModuleNamesSlice'
import {
  getAllUserActivitiesLogs,
  getAllUserActivitiesLogsFailure,
  getAllUserActivitiesLogsSuccess,
} from '../../slices/UserActivities/getAllUserActivitiesLogsSlice'

export async function getAllActivitiesLogsApi(dispatch, pageLimit, filter) {
  let queryStr = `?page=${pageLimit.page}&limit=${pageLimit.limit}`
  for (const key in filter) {
    if (filter[key]) {
      queryStr += `&${key}=${filter[key]}`
    }
  }
  dispatch(getAllUserActivitiesLogs())
  try {
    let url = `${API.userActivities.getAllUserActivitiesLogs}${queryStr}`
    let res = await getRequest(url)
    dispatch(getAllUserActivitiesLogsSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllUserActivitiesLogsFailure(error?.response?.data))
  }
}

export async function getAllModuleNamesApi(dispatch) {
  dispatch(getAllModuleNames())
  try {
    let url = `${API.userActivities.getAllModuleNames}`
    let res = await getRequest(url)
    dispatch(getAllModuleNamesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllModuleNamesFailure(error?.response?.data))
  }
}
