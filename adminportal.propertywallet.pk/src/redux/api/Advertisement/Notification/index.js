import { API } from '../../../../config/apiEndPoints'
import {
  deleteRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../../utils/baseApi'
import { successMessage } from '../../../../utils/message'
import {
  createManualNotification,
  createManualNotificationFailure,
  createManualNotificationSuccess,
} from '../../../slices/Advertisement/Notification/createManualNotificationSlice'
import {
  deleteManualNotification,
  deleteManualNotificationFailure,
  deleteManualNotificationSuccess,
} from '../../../slices/Advertisement/Notification/deleteManualNotificationSlice'
import {
  getAllManualNotification,
  getAllManualNotificationFailure,
  getAllManualNotificationSuccess,
} from '../../../slices/Advertisement/Notification/getAllManualNotificationSlice'
import {
  mannualPushNotification,
  mannualPushNotificationFailure,
  mannualPushNotificationSuccess,
} from '../../../slices/Advertisement/Notification/mannualPushNotificationSlice'
import {
  mannualPushNotificationUnsiginUp,
  mannualPushNotificationUnsiginUpFailure,
  mannualPushNotificationUnsiginUpSuccess,
} from '../../../slices/Advertisement/Notification/mannualPushNotificationUnsiginUpSlice'
import {
  unverifiedUserNotification,
  unverifiedUserNotificationFailure,
  unverifiedUserNotificationSuccess,
} from '../../../slices/Advertisement/Notification/unverifiedUserNotificationSlice'
import {
  updateManualNotification,
  updateManualNotificationFailure,
  updateManualNotificationSuccess,
} from '../../../slices/Advertisement/Notification/updateManualNotificationSlice'

export async function createManualNotificationApi(dispatch, body, onSuccess) {
  dispatch(createManualNotification())
  try {
    let res = await postRequest(API.Notification.createManualNotification, body)
    dispatch(createManualNotificationSuccess(res.data))
    successMessage(res.data.message)
    onSuccess(body)
  } catch (error) {
    getError(error)
    dispatch(createManualNotificationFailure(error.response.data))
  }
}
export async function getAllManualNotificationApi(dispatch, pageLimit) {
  dispatch(getAllManualNotification())
  try {
    let res = await getRequest(
      `${API.Notification.getAllManualNotification}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getAllManualNotificationSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllManualNotificationFailure(error.response.data))
  }
}
export async function updateManualNotificationApi(
  dispatch,
  body,
  id,
  onSuccess
) {
  dispatch(updateManualNotification())
  try {
    let res = await patchRequest(
      `${API.Notification.updateManualNotification}/${id}`,
      body
    )
    dispatch(updateManualNotificationSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateManualNotificationFailure(error.response.data))
  }
}

export async function deleteManualNotificationApi(dispatch, id) {
  dispatch(deleteManualNotification())
  try {
    let res = await deleteRequest(
      `${API.Notification.deleteManualNotification}/${id}`
    )
    dispatch(deleteManualNotificationSuccess(res.data))
    successMessage(res.data.message)
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(deleteManualNotificationFailure(error.response.data))
  }
}

export async function mannualPushNotificationApi(dispatch, body, onSuccess) {
  dispatch(mannualPushNotification())
  try {
    let res = await getRequest(
      `${API.Notification.mannualPushNotification}?message=${
        body.message
      }&redirectUrl=${body.redirectUrl}&imageUrl=${body.imageUrl}&refId=${
        body.referenceId
      }&title=${body.title}${body.city ? `&city=${body.city}` : ''}`
    )
    dispatch(mannualPushNotificationSuccess(res.data))
    successMessage(res.data.message)
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(mannualPushNotificationFailure(error.response.data))
  }
}

export async function mannualPushNotificationUnsiginUpApi(dispatch, body) {
  dispatch(mannualPushNotificationUnsiginUp())
  try {
    let res = await getRequest(
      `${API.Notification.mannualPushNotificationUnsiginUp}?message=${body.message}&redirectUrl=${body.redirectUrl}&imageUrl=${body.imageUrl}&refId=${body.referenceId}&title=${body.title}`
    )
    dispatch(mannualPushNotificationUnsiginUpSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(mannualPushNotificationUnsiginUpFailure(error.response.data))
  }
}

export async function unverifiedUserNotificationApi(dispatch, body, onSuccess) {
  dispatch(unverifiedUserNotification())
  try {
    let res = await getRequest(
      `${API.Notification.unverifiedUserNotification}?message=${
        body.message
      }&verifiedUSers=${
        body.status === 'SMS_FOR_VERIFIED_USER' ? 'TRUE' : 'FALSE'
      }${body.city ? `&city=${body.city}` : ''}`
    )
    dispatch(unverifiedUserNotificationSuccess(res.data))
    successMessage(res.data.message)
    if (onSuccess) {
      onSuccess()
    }
  } catch (error) {
    getError(error)
    dispatch(unverifiedUserNotificationFailure(error.response.data))
  }
}
