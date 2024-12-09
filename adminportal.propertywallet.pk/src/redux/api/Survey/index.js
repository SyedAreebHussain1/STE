import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import { successMessage } from '../../../utils/message'
import {
  CreateSurvey,
  CreateSurveyFailure,
  CreateSurveySuccess,
} from '../../slices/Survey/CreateSurveySlice'
import {
  EditSurvey,
  EditSurveyFailure,
  EditSurveySuccess,
} from '../../slices/Survey/EditSurveySlice'
import {
  GetAllSurvey,
  GetAllSurveyFailure,
  GetAllSurveySuccess,
} from '../../slices/Survey/GetAllSurveySlice'
import {
  getAllInterestedSurvey,
  getAllInterestedSurveyFailure,
  getAllInterestedSurveySuccess,
} from '../../slices/Survey/getAllInterestedSurveySlice'

// getRegisteredUsers
export async function allSurveyApi(dispatch, pageLimit) {
  dispatch(GetAllSurvey())
  try {
    let res = await getRequest(
      `${API.survey.getSurvey}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(GetAllSurveySuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllSurveyFailure(error.response.data))
  }
}
export async function createSurveyApi(dispatch, body, onSuccess) {
  dispatch(CreateSurvey())
  try {
    let url = `${API.survey.createSurvey}`
    let res = await postRequest(url, body)
    dispatch(CreateSurveySuccess(res?.data))
    successMessage('Survey Create successfully')
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(CreateSurveyFailure(error?.response?.data))
  }
}
export async function editSurveyApi(dispatch, body, id, onSuccess) {
  dispatch(EditSurvey())
  try {
    let res = await patchRequest(`${API.survey.editSurvey}/${id}`, body)
    dispatch(EditSurveySuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(EditSurveyFailure(error.response.data))
  }
}

export async function getAllInterestedSurveyApi(
  dispatch,
  pageLimit,
  showInterested
) {
  dispatch(getAllInterestedSurvey())
  try {
    let res = await getRequest(
      `${API.survey.getAllInterestedSurvey}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${showInterested ? `&interested=${showInterested}` : ''}`
    )
    dispatch(getAllInterestedSurveySuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllInterestedSurveyFailure(error.response.data))
  }
}
