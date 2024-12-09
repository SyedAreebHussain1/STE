import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  coordinatorActiveStatus,
  coordinatorActiveStatusFailure,
  coordinatorActiveStatusSuccess,
} from '../../slices/ProjectCoordinator/coordinatorActiveStatusSlice'
import {
  createProjectCoordinator,
  createProjectCoordinatorFailure,
  createProjectCoordinatorSuccess,
} from '../../slices/ProjectCoordinator/createProjectCoordinatorSlice'
import {
  getAllProjectForModal,
  getAllProjectForModalFailure,
  getAllProjectForModalSuccess,
} from '../../slices/ProjectCoordinator/getAllProjectForModalSlice'
import {
  getAllRolesForProjectCoordinator,
  getAllRolesForProjectCoordinatorFailure,
  getAllRolesForProjectCoordinatorSuccess,
} from '../../slices/ProjectCoordinator/getAllRolesForProjectCoordinatorSlice'
import {
  getProjectCoodinator,
  getProjectCoodinatorFailure,
  getProjectCoodinatorSuccess,
} from '../../slices/ProjectCoordinator/getProjectCoordinatorSlice'
import {
  getProjectNameForAssignByID,
  getProjectNameForAssignByIDFailure,
  getProjectNameForAssignByIDSuccess,
} from '../../slices/ProjectCoordinator/getProjectNameForAssignByIDSlice'
import {
  projectAssignToCoordinatorByID,
  projectAssignToCoordinatorByIDFailure,
  projectAssignToCoordinatorByIDSuccess,
} from '../../slices/ProjectCoordinator/projectAssignToCoordinatorByID'

import {
  getLogsByProjectIdForAdmin,
  getLogsByProjectIdForAdminSuccess,
  getLogsByProjectIdForAdminFailure,
} from '../../slices/ProjectCoordinator/getLogsByProjectIdForAdminSlice'
import {
  getProjectsForAssign,
  getProjectsForAssignSuccess,
  getProjectsForAssignFailure,
} from '../../slices/ProjectCoordinator/getProjectsForAssignSlice'

export async function createProjectCoodinatorApi(dispatch, body, onSuccess) {
  dispatch(createProjectCoordinator())
  try {
    let url = `${API.projectCoodinator.signup}`
    let res = await postRequest(url, body)
    dispatch(createProjectCoordinatorSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProjectCoordinatorFailure(error?.response?.data))
  }
}
export async function getProjectCoodinatorRolesApi(dispatch) {
  dispatch(getAllRolesForProjectCoordinator())
  try {
    let res = await getRequest(`${API.projectCoodinator.roleList}`)
    dispatch(getAllRolesForProjectCoordinatorSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllRolesForProjectCoordinatorFailure(error.response.data))
  }
}

export async function getAllCoodinatorApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getProjectCoodinator())
  try {
    const query = {
      Name: 'fullName',
    }
    let res = await getRequest(
      `${API.projectCoodinator.getAllCoordinator}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
    )
    dispatch(getProjectCoodinatorSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectCoodinatorFailure(error.response.data))
  }
}

export async function coodinatorActiveStatusApi(dispatch, isActice, id) {
  dispatch(coordinatorActiveStatus())
  try {
    let url = `${API.projectCoodinator.postStatusForCoo}/${id}`
    let res = await patchRequest(url, isActice)
    dispatch(coordinatorActiveStatusSuccess(res?.data))
    successMessage(res?.data?.message)
  } catch (error) {
    getError(error)
    dispatch(coordinatorActiveStatusFailure(error?.response?.data))
  }
}

export async function projectAssignToCooApi(dispatch, body, onSuccess) {
  dispatch(projectAssignToCoordinatorByID())
  try {
    let url = `${API.projectCoodinator.assignProjects}`
    let res = await postRequest(url, body)
    dispatch(projectAssignToCoordinatorByIDSuccess(res?.data))
    successMessage(res?.data?.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(projectAssignToCoordinatorByIDFailure(error?.response?.data))
  }
}
export async function getProjectNameForAssignApi(
  dispatch,
  id,
  onSuccess,
  pageLimit
) {
  dispatch(getProjectNameForAssignByID())
  try {
    let url = `${API.projectCoodinator.getProject}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getProjectNameForAssignByIDSuccess(res?.data))
    onSuccess(res?.data)
  } catch (error) {
    getError(error)
    dispatch(getProjectNameForAssignByIDFailure(error?.response?.data))
  }
}

export async function getProjectsForAssignApi(
  dispatch,
  id,
  onSuccess,
  pageLimit
) {
  dispatch(getProjectsForAssign())
  try {
    let url = `${API.projectCoodinator.getProjectsForAssign}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    let res = await getRequest(url)
    dispatch(getProjectsForAssignSuccess(res?.data))
    onSuccess(res?.data)
  } catch (error) {
    getError(error)
    dispatch(getProjectsForAssignFailure(error?.response?.data))
  }
}
export async function getProjectByIDForModalApi(
  dispatch,
  id,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllProjectForModal())
  try {
    const query = {
      'Project Name': 'projectName',
    }
    let url = `${API.projectCoodinator.gatAllProject}/${id}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getAllProjectForModalSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllProjectForModalFailure(error?.response?.data))
  }
}
export async function getLogsByProjectIdForAdminApi(
  dispatch,
  id,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getLogsByProjectIdForAdmin())
  try {
    const query = {
      'Client Name': 'clientName',
    }
    let url = `${API.projectCoodinator.getLogsByProjectIdForAdmin}/${id}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getLogsByProjectIdForAdminSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getLogsByProjectIdForAdminFailure(error?.response?.data))
  }
}
