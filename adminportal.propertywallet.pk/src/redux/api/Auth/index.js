import { API } from '../../../config/apiEndPoints'
import { getError, postRequest } from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import { removeFromStorage, setInStorage } from '../../../utils/storage'
import { login, loginFailure, loginSuccess } from '../../slices/Auth/LoginSlice'

export async function loginApi(dispatch, body, navigate) {
  dispatch(login())
  try {
    let res = await postRequest(API.Auth.login, body)
    const userData = {
      role: res.data.data.role,
      fullName: res.data.data.staffProfile.fullName,
      profilePictureUrl: res.data.data.staffProfile.profilePictureUrl,
      id: res.data.data.staff.id,
    }
    setInStorage('userObject', userData)
    setInStorage('token', res.data.data.token)
    dispatch(loginSuccess(userData))
    successMessage(res.data.message)
    navigate('/dashboard')
  } catch (error) {
    getError(error)
    dispatch(loginFailure(error.response?.data))
  }
}
