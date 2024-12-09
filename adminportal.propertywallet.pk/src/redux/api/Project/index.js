import { API } from '../../../config/apiEndPoints'
import {
  deleteReqWithBody,
  fileRequest,
  getError,
  getRequest,
  patchFileRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  createProjectStepOne,
  createProjectStepOneFailure,
  createProjectStepOneSuccess,
} from '../../slices/Project/createProjectStepOneSlice'
import {
  createProjectStepThree,
  createProjectStepThreeFailure,
  createProjectStepThreeSuccess,
} from '../../slices/Project/createProjectStepThreeSlice'
import {
  createProjectStepTwo,
  createProjectStepTwoSuccess,
  createProjectStepTwoFailure,
} from '../../slices/Project/createProjectStepTwoSlice'
import {
  getAllProjects,
  getAllProjectsFailure,
  getAllProjectsSuccess,
} from '../../slices/Project/getAllProjectsSlice'
import {
  updateProjectStepOne,
  updateProjectStepOneFailure,
  updateProjectStepOneSuccess,
} from '../../slices/Project/updateProjectStepOneSlice'
import {
  updateProjectStepThree,
  updateProjectStepThreeFailure,
  updateProjectStepThreeSuccess,
} from '../../slices/Project/updateProjectStepThreeSlice'
import {
  updateProjectStepTwo,
  updateProjectStepTwoSuccess,
} from '../../slices/Project/updateProjectStepTwoSlice'

import {
  inventoriesByProject,
  inventoriesByProjectSuccess,
  inventoriesByProjectFailure,
} from '../../slices/Project/inventoriesByProjectSlice'
import {
  deleteProjectPhoto,
  deleteProjectPhotoFailure,
  deleteProjectPhotoSuccess,
} from '../../slices/Project/deleteProjectPhotoSlice'
import {
  getProjectDetailsStepTwo,
  getProjectDetailsStepTwoFailure,
  getProjectDetailsStepTwoSuccess,
} from '../../slices/Project/getProjectDetailsStepTwoSlice'
import {
  getInventoryDetailStepTwo,
  getInventoryDetailStepTwoFailure,
  getInventoryDetailStepTwoSuccess,
} from '../../slices/Project/getInventoryDetailStepTwoSlice'
import {
  getProjectStepOne,
  getProjectStepOneFailure,
  getProjectStepOneSuccess,
} from '../../slices/Project/getProjectStepOneSlice'
import {
  getProjectStepThree,
  getProjectStepThreeFailure,
  getProjectStepThreeSuccess,
} from '../../slices/Project/getProjectStepThreeSlice'
import {
  popupProjectAddPopUpFormAdminSide,
  popupProjectAddPopUpFormAdminSideSuccess,
  popupProjectAddPopUpFormAdminSideFailure,
} from '../../slices/Project/popupProjectAddPopUpFormAdminSideSlice'
import { getLounge, getLoungeSuccess } from '../../slices/Lounge/getLoungeSlice'
import { getLoungeOwnerFailure } from '../../slices/Lounge/getLoungeOwnerSlice'
import {
  addInventory,
  addInventoryFailure,
  addInventorySuccess,
} from '../../slices/Lounge/addInventorySlice'

export async function createProjectStepOneApi(dispatch, body, onSuccess) {
  dispatch(createProjectStepOne())
  try {
    let res = await postRequest(API.Project.createProjectStepOne, body)
    dispatch(createProjectStepOneSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProjectStepOneFailure(error.response.data))
  }
}
export async function popupProjectAddPopUpFormAdminSideApi(
  dispatch,
  body,
  toggleAdd
) {
  dispatch(popupProjectAddPopUpFormAdminSide())
  try {
    let res = await postRequest(
      API.Project.popupProjectAddPopUpFormAdminSide,
      body
    )
    dispatch(popupProjectAddPopUpFormAdminSideSuccess(res.data))
    toggleAdd()
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(popupProjectAddPopUpFormAdminSideFailure(error.response.data))
  }
}

export async function createProjectStepTwoApi(dispatch, formData, onSuccess) {
  dispatch(createProjectStepTwo())
  try {
    let res = await fileRequest(API.Project.createProjectStepTwo, formData)
    dispatch(createProjectStepTwoSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProjectStepTwoFailure(error?.response?.data))
  }
}

export async function updateProjectStepOneApi(dispatch, body, onSuccess, id) {
  dispatch(updateProjectStepOne())
  try {
    let res = await patchRequest(
      `${API.Project.updateProjectStepOne}/${id}`,
      body
    )
    dispatch(updateProjectStepOneSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateProjectStepOneFailure(error?.response?.data))
  }
}

export async function updateProjectStepTwoApi(dispatch, body, onSuccess, id) {
  dispatch(updateProjectStepTwo())
  try {
    let res = await patchFileRequest(
      `${API.Project.updateProjectStepTwo}/${id}`,
      body
    )
    dispatch(updateProjectStepTwoSuccess(res?.data))
    successMessage(res?.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateProjectStepOneFailure(error?.response?.data))
  }
}
export async function createProjectStepThreeApi(dispatch, formData, onSuccess) {
  dispatch(createProjectStepThree())
  try {
    let res = await fileRequest(API.Project.createProjectStepThree, formData)
    dispatch(createProjectStepThreeSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProjectStepThreeFailure(error.response.data))
  }
}
export async function updateProjectStepThreeApi(dispatch, body, onSuccess, id) {
  dispatch(updateProjectStepThree())
  try {
    let res = await patchFileRequest(
      `${API.Project.updateProjectStepThree}/${id}`,
      body
    )
    dispatch(updateProjectStepThreeSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateProjectStepThreeFailure(error.response.data))
  }
}

export async function getAllProjectsApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  admin = false
) {
  dispatch(getAllProjects())
  try {
    const query = {
      City: 'city',
      'Project Name': 'projectName',
      'Builder Name': 'builderName',
      Location: 'address',
      NOC: 'NOC',
    }
    let res = await getRequest(
      `${API.Project.getAllProjects}?isAdmin=${admin ? true : false}${
        admin === false ? '&projectStatus=COMPLETED' : ''
      }&page=${pageLimit.page}&limit=${pageLimit.limit}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
      // ${searchText !== "" && searchText ? `&projectName=${searchText}` : ""}`
    )
    dispatch(getAllProjectsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllProjectsFailure(error.response.data))
  }
}

export async function inventoriesByProjectApi(
  dispatch,
  projectId,
  pageLimit,
  search
) {
  dispatch(inventoriesByProject())
  try {
    let res = await getRequest(
      `${API.Project.inventoriesByProject}/${projectId}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${
        search.landArea ? `&landArea=${search.landArea}` : ''
      }`
    )
    dispatch(inventoriesByProjectSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(inventoriesByProjectFailure(error.response.data))
  }
}

export async function deleteProjectPhotoApi(dispatch, body, onSuccess) {
  dispatch(deleteProjectPhoto())
  try {
    let res = await deleteReqWithBody(`${API.Project.deleteProjectPhoto}`, body)
    dispatch(deleteProjectPhotoSuccess(res.data))
    successMessage(res.data.message)
    onSuccess(body.propertyWalletProjectId)
  } catch (error) {
    getError(error)
    dispatch(deleteProjectPhotoFailure(error.response.data))
  }
}

export async function getProjectDetailsStepTwoApi(dispatch, projectId) {
  dispatch(getProjectDetailsStepTwo())
  try {
    let res = await getRequest(
      `${API.Project.getProjectDetailsStepTwo}/${projectId}`
    )
    dispatch(getProjectDetailsStepTwoSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getProjectDetailsStepTwoFailure(error.response.data))
  }
}
export async function getProjectStepOneApi(dispatch, projectId) {
  dispatch(getProjectStepOne())
  try {
    let res = await getRequest(`${API.Project.getProjectStepOne}/${projectId}`)
    dispatch(getProjectStepOneSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getProjectStepOneFailure(error.response.data))
  }
}
export async function getProjectStepThreeApi(dispatch, projectId) {
  dispatch(getProjectStepThree())
  try {
    let res = await getRequest(
      `${API.Project.getProjectStepThree}/${projectId}`
    )
    dispatch(getProjectStepThreeSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getProjectStepThreeFailure(error.response.data))
  }
}
export async function getInventoryDetailStepTwoApi(dispatch, projectId) {
  dispatch(getInventoryDetailStepTwo())
  try {
    let res = await getRequest(
      `${API.Project.getInventoryDetailStep2}/${projectId}`
    )
    dispatch(getInventoryDetailStepTwoSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getInventoryDetailStepTwoFailure(error.response.data))
  }
}

export async function AllLoungesAPi(
  dispatch,
  pageLimit,
  id,
  onSuccessGetLounges
) {
  dispatch(getLounge())
  try {
    let url = `${API.lounge.findLoungeByPWProjectId}?page=${pageLimit.page}&limit=${pageLimit.limit}&propertyWalletProjectId=${id}`
    let res = await getRequest(url)
    dispatch(getLoungeSuccess(res?.data))
    if (onSuccessGetLounges) {
      onSuccessGetLounges(res?.data)
    }
  } catch (error) {
    getError(error)
    dispatch(getLoungeOwnerFailure(error?.response?.data))
  }
}
export async function AddInventoryLounge(dispatch, body, onSuccess) {
  dispatch(addInventory())
  try {
    let url = `${API.lounge.assignInventory}`
    let res = await postRequest(url, body)
    dispatch(addInventorySuccess(res?.data))
    successMessage('Inventory assigned successfully')
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(addInventoryFailure(error?.response?.data))
  }
}
