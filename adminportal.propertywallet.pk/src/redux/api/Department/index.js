import { API } from '../../../config/apiEndPoints'
import {
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  AddDepartment,
  AddDepartmentFailure,
  AddDepartmentSuccess,
} from '../../slices/Department/AddDepartmentSlice'
import {
  DeleteDepartment,
  DeleteDepartmentFailure,
  DeleteDepartmentSuccess,
} from '../../slices/Department/DeleteDepartmentSlice'
import {
  EditDepartmentFailure,
  EditDepartment,
  EditDepartmentSuccess,
} from '../../slices/Department/EditDepartmentSlice'
import {
  GetDepartment,
  GetDepartmentFailure,
  GetDepartmentSuccess,
} from '../../slices/Department/GetDepartmentSlice'

export async function GetDepartmentApi(dispatch, pageLimit) {
  dispatch(GetDepartment())
  try {
    let url = `${API.ticketing.GetDepartment}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(GetDepartmentSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(GetDepartmentFailure(error?.response?.data))
  }
}

export async function addDepartmentApi(dispatch, body, onSuccess) {
  dispatch(AddDepartment())
  try {
    let res = await postRequest(`${API.ticketing.addDepartment}`, body)
    dispatch(AddDepartmentSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(AddDepartmentFailure(error.response.data))
  }
}

export async function EditDepartmentApi(dispatch, body, id, onSuccess) {
  dispatch(EditDepartment())
  try {
    let res = await patchRequest(`${API.ticketing.EditDepartment}/${id}`, body)
    dispatch(EditDepartmentSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(EditDepartmentFailure(error.response.data))
  }
}

export async function DeleteDepartmentApi(dispatch, id) {
  dispatch(DeleteDepartment())
  try {
    let url = `${API.ticketing.DeleteDepartment}/${id}`
    let res = await deleteRequest(url)
    dispatch(DeleteDepartmentSuccess(res?.data))
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(DeleteDepartmentFailure(error?.response?.data))
  }
}
