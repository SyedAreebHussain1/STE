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
  GetALLReleaseSalaries,
  GetALLReleaseSalariesFailure,
  GetALLReleaseSalariesSuccess,
} from '../../slices/BDSalary/GetALLReleaseSalariesSlice'
import {
  GetAllReleaseHistory,
  GetAllReleaseHistoryFailure,
  GetAllReleaseHistorySuccess,
} from '../../slices/BDSalary/GetAllReleaseHistorySlice'
import {
  PostReleaseSalaries,
  PostReleaseSalariesFailure,
  PostReleaseSalariesSuccess,
} from '../../slices/BDSalary/PostReleaseSalariesSlice'

export async function allBDRealeaseSalariesApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetALLReleaseSalaries())
  try {
    const query = {
      'Ref Code': 'refCode',
      Name: 'fullName',
    }
    let url = `${API.BusinessDevelopment.getAllRealeaseSalary}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(GetALLReleaseSalariesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetALLReleaseSalariesFailure(error?.response?.data))
  }
}

export async function postReleaseSalariesrApi(dispatch, body, onSuccess) {
  dispatch(PostReleaseSalaries())
  try {
    let url = `${API.BusinessDevelopment.releaseSalary}`
    let res = await postRequest(url, body)
    dispatch(PostReleaseSalariesSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(PostReleaseSalariesFailure(error?.response?.data))
  }
}

export async function allBDReleaseHistoryApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetAllReleaseHistory())
  try {
    const query = {
      'Ref Code': 'refCode',
      Name: 'fullName',
    }
    let url = `${API.BusinessDevelopment.releaseHistory}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(GetAllReleaseHistorySuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllReleaseHistoryFailure(error?.response?.data))
  }
}
