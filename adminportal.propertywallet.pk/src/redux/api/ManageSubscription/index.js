import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  addCustomPackageFeature,
  addCustomPackageFeatureFailure,
  addCustomPackageFeatureSuccess,
} from '../../slices/ManageSubscriptions/addCustomPackageFeatureSlice'
import {
  addCustomPackagePlan,
  addCustomPackagePlanFailure,
  addCustomPackagePlanSuccess,
} from '../../slices/ManageSubscriptions/addCustomPackagePlanSlice'
import {
  addSubscription,
  addSubscriptionFailure,
  addSubscriptionSuccess,
} from '../../slices/ManageSubscriptions/addSubscriptionSlice'
import {
  getAllCustomPackageFeature,
  getAllCustomPackageFeatureFailure,
  getAllCustomPackageFeatureSuccess,
} from '../../slices/ManageSubscriptions/getAllCustomPackageFeatureSlice'
import {
  getAllCustomPackagePlan,
  getAllCustomPackagePlanFailure,
  getAllCustomPackagePlanSuccess,
} from '../../slices/ManageSubscriptions/getAllCustomPackagePlanSlice'
import {
  getAllInventory,
  getAllInventoryFailure,
  getAllInventorySuccess,
} from '../../slices/ManageSubscriptions/getAllInventorySlice'
import {
  getAllSubscription,
  getAllSubscriptionFailure,
  getAllSubscriptionSuccess,
} from '../../slices/ManageSubscriptions/getAllSubscriptionSlice'
import {
  getSubscriptionByTitle,
  getSubscriptionByTitleFailure,
  getSubscriptionByTitleSuccess,
} from '../../slices/ManageSubscriptions/getSubscriptionByTitleSlice'
import {
  getSubscription,
  getSubscriptionFailure,
  getSubscriptionSuccess,
} from '../../slices/ManageSubscriptions/getSubscriptionSlice'
import {
  updateCustomPackageFeature,
  updateCustomPackageFeatureFailure,
  updateCustomPackageFeatureSuccess,
} from '../../slices/ManageSubscriptions/updateCustomPackageFeatureSlice'
import {
  updateCustomPackagePlan,
  updateCustomPackagePlanFailure,
  updateCustomPackagePlanSuccess,
} from '../../slices/ManageSubscriptions/updateCustomPackagePlanSlice'

export async function addSubscriptionApi(dispatch, body, onSuccess) {
  dispatch(addSubscription())
  try {
    let res = await postRequest(
      `${API.manageSubscriptions.addSubscription}`,
      body
    )
    dispatch(addSubscriptionSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addSubscriptionFailure(error.response.data))
  }
}

export async function getSubscriptionApi(dispatch, pageLimit) {
  dispatch(getSubscription())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getSubscription}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getSubscriptionSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getSubscriptionFailure(error.response.data))
  }
}

export async function getSubscriptionByTitleApi(dispatch, title, id) {
  dispatch(getSubscriptionByTitle())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getSubscriptionByTitle}/${id}/${title}`
    )
    dispatch(getSubscriptionByTitleSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getSubscriptionByTitleFailure(error.response.data))
  }
}

export async function getAllSubscriptionApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllSubscription())
  try {
    const query = {
      Name: 'search',
      Package: 'search',
      Billing: 'search',
    }
    let res = await getRequest(
      `${API.manageSubscriptions.getAllSubscription}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(getAllSubscriptionSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllSubscriptionFailure(error.response.data))
  }
}

export async function getAllInventoryApi(dispatch, id) {
  dispatch(getAllInventory())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getAllInventory}/${id}`
    )
    dispatch(getAllInventorySuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllInventoryFailure(error.response.data))
  }
}

export async function getCustomPackagePlanApi(dispatch, pageLimit) {
  dispatch(getAllCustomPackagePlan())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getCustomPackagePlan}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getAllCustomPackagePlanSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllCustomPackagePlanFailure(error.response.data))
  }
}

export async function addCustomPackagePlanApi(dispatch, body, onSuccess) {
  dispatch(addCustomPackagePlan())
  try {
    let res = await postRequest(
      `${API.manageSubscriptions.addCustomPackagePlan}`,
      body
    )
    dispatch(addCustomPackagePlanSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addCustomPackagePlanFailure(error.response.data))
  }
}

export async function editCustomPackagePlanApi(dispatch, body, onSuccess, id) {
  dispatch(updateCustomPackagePlan())
  try {
    //
    let url = `${API.manageSubscriptions.editCustomPackagePlan}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateCustomPackagePlanSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateCustomPackagePlanFailure(error?.response?.data))
  }
}

export async function getCustomPackageFeatureApi(dispatch, pageLimit) {
  dispatch(getAllCustomPackageFeature())
  try {
    let res = await getRequest(
      `${API.manageSubscriptions.getCustomPackageFeature}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getAllCustomPackageFeatureSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllCustomPackageFeatureFailure(error.response.data))
  }
}

export async function addCustomPackageFeatureApi(dispatch, body, onSuccess) {
  dispatch(addCustomPackageFeature())
  try {
    let res = await postRequest(
      `${API.manageSubscriptions.addCustomPackageFeature}`,
      body
    )
    dispatch(addCustomPackageFeatureSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addCustomPackageFeatureFailure(error.response.data))
  }
}

export async function editCustomPackageFeatureApi(
  dispatch,
  body,
  onSuccess,
  id
) {
  dispatch(updateCustomPackageFeature())
  try {
    //
    let url = `${API.manageSubscriptions.editCustomPackageFeature}/${id}`
    let res = await patchRequest(url, body)
    dispatch(updateCustomPackageFeatureSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateCustomPackageFeatureFailure(error?.response?.data))
  }
}
