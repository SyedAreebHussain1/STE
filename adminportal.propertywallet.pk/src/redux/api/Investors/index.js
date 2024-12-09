import { API } from '../../../config/apiEndPoints'
import { getError, getRequest, postRequest } from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  addInvestor,
  addInvestorFailure,
  addInvestorSuccess,
} from '../../slices/Investors/AddInvestors'
import {
  getOwners,
  getOwnersFailure,
  getOwnersSuccess,
} from '../../slices/Investors/getAllOwners'
import {
  getPackages,
  getPackagesFailure,
  getPackagesSuccess,
} from '../../slices/Investors/getAllPackages'
import {
  getInvestor,
  getInvestorFailure,
  getInvestorSuccess,
} from '../../slices/Investors/getInvestors'
import { postRolesFailure } from '../../slices/Settings/Roles/PostRolesSlice'

export async function addNewInvestorApi(dispatch, body, onSuccess) {
  dispatch(addInvestor())
  try {
    let res = await postRequest(API.Investor.addnew, body)
    dispatch(addInvestorSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addInvestorFailure(error.response.data))
  }
}
export async function addOwnerApi(dispatch, body, onSuccess) {
  dispatch(addInvestor())
  try {
    let res = await postRequest(API.Investor.addOwner, body)
    dispatch(addInvestorSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addInvestorFailure(error.response.data))
  }
}
export async function assignOwnerApi(dispatch, body, onSuccess) {
  dispatch(addInvestor())
  try {
    let res = await postRequest(API.Investor.assginOwner, body)
    dispatch(addInvestorSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addInvestorFailure(error.response.data))
  }
}
export async function getInvestorsList(dispatch, pageLimit) {
  dispatch(getInvestor())
  try {
    let url = `${API.Investor.getInvestorsList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    if (pageLimit.search && pageLimit?.search?.trim().length > 0) {
      url = url + '&search=' + pageLimit.search
    }

    let res = await getRequest(url)
    dispatch(getInvestorSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getInvestorFailure(error.response.data))
  }
}
export async function getPackagesListApi(dispatch) {
  dispatch(getPackages())
  try {
    let url = `${API.Investor.getPackagesList}`

    let res = await getRequest(url)
    dispatch(getPackagesSuccess(res?.data?.data))
  } catch (error) {
    getError(error)
    dispatch(getPackagesFailure(error.response.data))
  }
}
export async function getOwnersList(dispatch, pageLimit) {
  dispatch(getOwners())
  try {
    let url = `${API.Investor.getOwnersList}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    if (pageLimit.search && pageLimit?.search?.trim().length > 0) {
      url = url + '&search=' + pageLimit.search
    }

    let res = await getRequest(url)
    dispatch(getOwnersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getOwnersFailure(error.response.data))
  }
}
