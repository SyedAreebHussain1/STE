import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  ActiveOrDeactiveBDUser,
  ActiveOrDeactiveBDUserFailure,
  ActiveOrDeactiveBDUserSuccess,
} from '../../slices/BDUserAffiliateUser/ActiveOrDeactiveBDUserSlice'
import {
  AffiliateDetails,
  AffiliateDetailsFailure,
  AffiliateDetailsSuccess,
} from '../../slices/BDUserAffiliateUser/AffiliateDetailsSlice'
import {
  AffiliateSignup,
  AffiliateSignupFailure,
  AffiliateSignupSuccess,
} from '../../slices/BDUserAffiliateUser/AffiliateSignupSlice'
import {
  AssignAffiliateToManager,
  AssignAffiliateToManagerFailure,
  AssignAffiliateToManagerSuccess,
} from '../../slices/BDUserAffiliateUser/AssignAffiliateToManagerSlice'
import {
  GetAllAffilateForAssignToManager,
  GetAllAffilateForAssignToManagerFailure,
  GetAllAffilateForAssignToManagerSuccess,
} from '../../slices/BDUserAffiliateUser/GetAllAffilateForAssignToManagerSlice'
import {
  GetAllAffiliateInBDUsers,
  GetAllAffiliateInBDUsersFailure,
  GetAllAffiliateInBDUsersSuccess,
} from '../../slices/BDUserAffiliateUser/GetAllAffiliateInBDUsersSlice'
import {
  GetAllManagerInBDUsers,
  GetAllManagerInBDUsersFailure,
  GetAllManagerInBDUsersSuccess,
} from '../../slices/BDUserAffiliateUser/GetAllManagerInBDUsersSlice'
import {
  GetBDUsers,
  GetBDUsersFailure,
  GetBDUsersSuccess,
} from '../../slices/BDUserAffiliateUser/GetBDUsersSlice'
import {
  ManagerDetails,
  ManagerDetailsFailure,
  ManagerDetailsSuccess,
} from '../../slices/BDUserAffiliateUser/ManagerDetailsSlice'

export async function createAffiliateSignupApi(dispatch, body, onSuccess) {
  dispatch(AffiliateSignup())
  try {
    let url = `${API.BusinessDevelopment.signup}`
    let res = await postRequest(url, body)
    dispatch(AffiliateSignupSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(AffiliateSignupFailure(error?.response?.data))
  }
}
export async function getBDUsersRolesApi(dispatch) {
  dispatch(GetBDUsers())
  try {
    let res = await getRequest(`${API.BusinessDevelopment.roleList}`)
    dispatch(GetBDUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetBDUsersFailure(error.response.data))
  }
}

export async function getAllBDUsersManagerApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetAllManagerInBDUsers())
  try {
    const query = {
      'Manager Name': 'fullName',
      'Ref Code': 'refCode',
      Email: 'email',
    }
    let res = await getRequest(
      `${API.BusinessDevelopment.getAllUsers}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }&requestFor=MANAGER${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(GetAllManagerInBDUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllManagerInBDUsersFailure(error.response.data))
  }
}

export async function getAllBDUsersAffiliateApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(GetAllAffiliateInBDUsers())
  try {
    const query = {
      'Affiliate Name': 'fullName',
      'Ref Code': 'refCode',
      Email: 'email',
    }
    let res = await getRequest(
      `${API.BusinessDevelopment.getAllUsers}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }&requestFor=AFFILIATE${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(GetAllAffiliateInBDUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllAffiliateInBDUsersFailure(error.response.data))
  }
}
export async function getAffiliateListApi(dispatch, pageLimit, id) {
  dispatch(GetAllAffiliateInBDUsers())
  try {
    let res = await getRequest(
      `${API.BusinessDevelopment.getListAffiliate}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(GetAllAffiliateInBDUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllAffiliateInBDUsersFailure(error.response.data))
  }
}
export async function getSignupListApi(dispatch, pageLimit, id) {
  dispatch(GetAllAffiliateInBDUsers())
  try {
    let res = await getRequest(
      `${API.BusinessDevelopment.getListSignup}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(GetAllAffiliateInBDUsersSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllAffiliateInBDUsersFailure(error.response.data))
  }
}

export async function getAllAffiliateForAssignApi(
  dispatch,
  id,
  onSuccess,
  pageLimit
) {
  dispatch(GetAllAffilateForAssignToManager())
  try {
    let res = await getRequest(
      `${API.BusinessDevelopment.getAffiliateForAssign}/${id}`
    )
    dispatch(GetAllAffilateForAssignToManagerSuccess(res.data))
    onSuccess(res.data)
  } catch (error) {
    getError(error)
    dispatch(GetAllAffilateForAssignToManagerFailure(error.response.data))
  }
}

export async function assignAffiliateUserToManagerApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(AssignAffiliateToManager())
  try {
    let url = `${API.BusinessDevelopment.assignAffiliate}`
    let res = await postRequest(url, body)
    dispatch(AssignAffiliateToManagerSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(AssignAffiliateToManagerFailure(error?.response?.data))
  }
}

export async function getAffiliateDetailsApi(
  dispatch,
  pageLimit,
  id,
  search,
  selectedFilter
) {
  dispatch(AffiliateDetails())
  try {
    const query = {
      Name: 'fullName',
    }
    let res = await getRequest(
      `${API.BusinessDevelopment.getAffiliateDetails}/${id}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(AffiliateDetailsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(AffiliateDetailsFailure(error.response.data))
  }
}

export async function getManagerDetailsApi(
  dispatch,
  pageLimit,
  id,
  search,
  selectedFilter
) {
  dispatch(ManagerDetails())
  try {
    const query = {
      Name: 'fullName',
    }
    let res = await getRequest(
      `${API.BusinessDevelopment.getManagerDetails}/${id}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(ManagerDetailsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(ManagerDetailsFailure(error.response.data))
  }
}

export async function activeOrDeactiveBDUserApi(dispatch, id, onSuccess) {
  dispatch(ActiveOrDeactiveBDUser())
  try {
    let url = `${API.BusinessDevelopment.activeOrDeactiveUser}/${id}`
    let res = await patchRequest(url)
    dispatch(ActiveOrDeactiveBDUserSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(ActiveOrDeactiveBDUserFailure(error?.response?.data))
  }
}
