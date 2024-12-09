import { API } from '../../../../config/apiEndPoints'
import {
  getError,
  patchRequest,
  postRequest,
  getRequest,
  deleteReqWithBody,
  deleteRequest,
  fileRequest,
} from '../../../../utils/baseApi'
import { successMessage } from '../../../../utils/message'
import {
  createProjectInventoryFacing,
  createProjectInventoryFacingFailure,
  createProjectInventoryFacingSuccess,
} from '../../../slices/Project/ProjectInventory/createProjectInventoryFacingSlice'
import {
  createProjectInventoryStepOne,
  createProjectInventoryStepOneFailure,
  createProjectInventoryStepOneSuccess,
} from '../../../slices/Project/ProjectInventory/createProjectInventoryStepOneSlice'
import {
  createProjectInventoryStepTwo,
  createProjectInventoryStepTwoFailure,
  createProjectInventoryStepTwoSuccess,
} from '../../../slices/Project/ProjectInventory/createProjectInventoryStepTwoSlice'
import {
  createProjectInventoryUtils,
  createProjectInventoryUtilsFailure,
  createProjectInventoryUtilsSuccess,
} from '../../../slices/Project/ProjectInventory/createProjectInventoryUtilsSlice'
import {
  deleteProjectInventoryFacing,
  deleteProjectInventoryFacingFailure,
  deleteProjectInventoryFacingSuccess,
} from '../../../slices/Project/ProjectInventory/deleteProjectInventoryFacingSlice'
import {
  deleteProjectInventoryUtils,
  deleteProjectInventoryUtilsFailure,
  deleteProjectInventoryUtilsSuccess,
} from '../../../slices/Project/ProjectInventory/deleteProjectInventoryUtilsSlice'
import {
  getProjectInventoryFacing,
  getProjectInventoryFacingFailure,
  getProjectInventoryFacingSuccess,
} from '../../../slices/Project/ProjectInventory/getProjectInventoryFacingSlice'
import {
  getProjectInventoryUtils,
  getProjectInventoryUtilsFailure,
  getProjectInventoryUtilsSuccess,
} from '../../../slices/Project/ProjectInventory/getProjectInventoryUtilsSlice'
import {
  updateProjectInventoryStepOne,
  updateProjectInventoryStepOneFailure,
  updateProjectInventoryStepOneSuccess,
} from '../../../slices/Project/ProjectInventory/updateProjectInventoryStepOneSlice'
import {
  updateProjectInventoryStepTwo,
  updateProjectInventoryStepTwoFailure,
  updateProjectInventoryStepTwoSuccess,
} from '../../../slices/Project/ProjectInventory/updateProjectInventoryStepTwoSlice'
import {
  createPropertyWalletInventoryStep3CashPlan,
  createPropertyWalletInventoryStep3CashPlanSuccess,
  createPropertyWalletInventoryStep3CashPlanFailure,
} from '../../../slices/Project/ProjectInventory/createPropertyWalletInventoryStep3CashPlanSlice'

import {
  createPropertyWalletInventoryStep3SaveTemplete,
  createPropertyWalletInventoryStep3SaveTempleteSuccess,
  createPropertyWalletInventoryStep3SaveTempleteFailure,
} from '../../../slices/Project/ProjectInventory/createPropertyWalletInventoryStep3SaveTempleteSlice'

import {
  updatePropertyWalletInventoryStep3CashPlan,
  updatePropertyWalletInventoryStep3CashPlanSuccess,
  updatePropertyWalletInventoryStep3CashPlanFailure,
} from '../../../slices/Project/ProjectInventory/updatePropertyWalletInventoryStep3CashPlanSlice'

import {
  getAllPlots,
  getAllPlotsFailure,
  getAllPlotsSuccess,
} from '../../../slices/Project/ProjectInventory/getAllPlotsSlice'
import {
  createPlot,
  createPlotFailure,
  createPlotSuccess,
} from '../../../slices/Project/ProjectInventory/createPlotSlice'
import {
  deletePlot,
  deletePlotFailure,
  deletePlotSuccess,
} from '../../../slices/Project/ProjectInventory/deletePlotSlice'
import {
  uploadExcelSheet,
  uploadExcelSheetFailure,
  uploadExcelSheetSuccess,
} from '../../../slices/Project/ProjectInventory/uploadExcelSheetSlice'
import {
  getAllPWInstallmentPaymentPlan,
  getAllPWInstallmentPaymentPlanSuccess,
  getAllPWInstallmentPaymentPlanFailure,
} from '../../../slices/Project/ProjectInventory/getAllPWInstallmentPaymentPlanSlice'
import {
  updatePropertyWalletInventoryStep3Templete,
  updatePropertyWalletInventoryStep3TempleteFailure,
  updatePropertyWalletInventoryStep3TempleteSuccess,
} from '../../../slices/Project/ProjectInventory/updatePropertyWalletInventoryStep3TempleteSlice'
import {
  getProjectInventoryStepOne,
  getProjectInventoryStepOneFailure,
  getProjectInventoryStepOneSuccess,
} from '../../../slices/Project/ProjectInventory/getProjectInventoryStepOneSlice'
import {
  getPropertyWalletInventoryStep3CashPlan,
  getPropertyWalletInventoryStep3CashPlanFailure,
  getPropertyWalletInventoryStep3CashPlanSuccess,
} from '../../../slices/Project/ProjectInventory/getPropertyWalletInventoryStep3CashPlanSlice'
import {
  generatePlotDetailUpdateExel,
  generatePlotDetailUpdateExelFailure,
  generatePlotDetailUpdateExelSuccess,
} from '../../../slices/Project/ProjectInventory/GeneratePlotDetailUpdateExelSlice'
import {
  uploadExcelForUpdate,
  uploadExcelForUpdateFailure,
  uploadExcelForUpdateSuccess,
} from '../../../slices/Project/ProjectInventory/uploadExcelForUpdateSlice'
import {
  uploadTemplatePdf,
  uploadTemplatePdfSuccess,
  uploadTemplatePdfFailure,
} from '../../../slices/Project/ProjectInventory/uploadTemplatePdfSlice'
import {
  createPropertyWalletInstallmentToken,
  createPropertyWalletInstallmentTokenFailure,
  createPropertyWalletInstallmentTokenSuccess,
} from '../../../slices/Project/ProjectInventory/createPropertyWalletInstallmentTokenSlice'
import {
  updatePropertyWalletProjectIslLiveStatus,
  updatePropertyWalletProjectIslLiveStatusFailure,
  updatePropertyWalletProjectIslLiveStatusSuccess,
} from '../../../slices/Project/updatePropertyWalletProjectIslLiveStatusSlice'

export async function createProjectInventoryStepOneApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(createProjectInventoryStepOne())
  try {
    let res = await postRequest(API.Project.createProjectInventoryStepOne, body)
    dispatch(createProjectInventoryStepOneSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProjectInventoryStepOneFailure(error.response.data))
  }
}

export async function updateProjectInventoryStepOneApi(
  dispatch,
  body,
  onSuccess,
  id
) {
  dispatch(updateProjectInventoryStepOne())
  try {
    let res = await patchRequest(
      `${API.Project.updateProjectInventoryStepOne}/${id}`,
      body
    )
    dispatch(updateProjectInventoryStepOneSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateProjectInventoryStepOneFailure(error.response.data))
  }
}

export async function getProjectInventoryStepOneApi(
  dispatch,
  id
  // onSuccess,
) {
  dispatch(getProjectInventoryStepOne())
  try {
    let res = await getRequest(
      `${API.Project.getProjectInventoryStepOne}/${id}`
    )
    dispatch(getProjectInventoryStepOneSuccess(res.data))
    // onSuccess();
  } catch (error) {
    getError(error)
    dispatch(getProjectInventoryStepOneFailure(error.response.data))
  }
}
export async function createProjectInventoryStepTwoApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(createProjectInventoryStepTwo())
  try {
    let res = await postRequest(API.Project.createProjectInventoryStepTwo, body)
    dispatch(createProjectInventoryStepTwoSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProjectInventoryStepTwoFailure(error.response.data))
  }
}

export async function updateProjectInventoryStepTwoApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(updateProjectInventoryStepTwo())
  try {
    let res = await patchRequest(
      API.Project.updateProjectInventoryStepTwo,
      body
    )
    dispatch(updateProjectInventoryStepTwoSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateProjectInventoryStepTwoFailure(error.response.data))
  }
}
export async function getProjectInventoryUtilsApi(dispatch, id) {
  dispatch(getProjectInventoryUtils())
  try {
    let res = await getRequest(`${API.Project.getProjectInventoryUtils}/${id}`)
    dispatch(getProjectInventoryUtilsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectInventoryUtilsFailure(error.response.data))
  }
}
export async function createProjectInventoryUtilsApi(dispatch, body) {
  dispatch(createProjectInventoryUtils())
  try {
    let res = await postRequest(API.Project.createProjectInventoryUtils, body)
    dispatch(createProjectInventoryUtilsSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(createProjectInventoryUtilsFailure(error.response.data))
  }
}

export async function deleteProjectInventoryUtilsApi(dispatch, body) {
  dispatch(deleteProjectInventoryUtils())
  try {
    let res = await deleteReqWithBody(
      API.Project.removeProjectInventoryUtils,
      body
    )
    dispatch(deleteProjectInventoryUtilsSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deleteProjectInventoryUtilsFailure(error.response.data))
  }
}

export async function getProjectInventoryFacingApi(dispatch, id) {
  dispatch(getProjectInventoryFacing())
  try {
    let res = await getRequest(`${API.Project.getProjectInventoryFacing}/${id}`)
    dispatch(getProjectInventoryFacingSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectInventoryFacingFailure(error.response.data))
  }
}
export async function createProjectInventoryFacingApi(dispatch, body) {
  dispatch(createProjectInventoryFacing())
  try {
    let res = await postRequest(API.Project.createProjectInventoryFacing, body)
    dispatch(createProjectInventoryFacingSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(createProjectInventoryFacingFailure(error.response.data))
  }
}

export async function deleteProjectInventoryFacingApi(dispatch, body) {
  dispatch(deleteProjectInventoryFacing())
  try {
    let res = await deleteReqWithBody(
      API.Project.removeProjectInventoryFacing,
      body
    )
    dispatch(deleteProjectInventoryFacingSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deleteProjectInventoryFacingFailure(error.response.data))
  }
}

export async function createPropertyWalletInventoryStep3CashPlanApi(
  dispatch,
  onSuccess,
  body
) {
  dispatch(createPropertyWalletInventoryStep3CashPlan())
  try {
    let res = await postRequest(
      API.Project.createPropertyWalletInventoryStep3CashPlan,
      body
    )
    dispatch(createPropertyWalletInventoryStep3CashPlanSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      createPropertyWalletInventoryStep3CashPlanFailure(error.response.data)
    )
  }
}

export async function updatePropertyWalletInventoryStep3CashPlanApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(updatePropertyWalletInventoryStep3CashPlan())
  try {
    let res = await patchRequest(
      API.Project.updatePropertyWalletInventoryStep3CashPlan,
      body
    )
    dispatch(updatePropertyWalletInventoryStep3CashPlanSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      updatePropertyWalletInventoryStep3CashPlanFailure(error.response.data)
    )
  }
}

export async function createPropertyWalletInventoryStep3SaveTempleteApi(
  dispatch,
  body,
  onSuccessTemp
) {
  dispatch(createPropertyWalletInventoryStep3SaveTemplete())
  try {
    let res = await postRequest(
      API.Project.createPropertyWalletInventoryStep3SaveTemplete,
      body
    )
    dispatch(createPropertyWalletInventoryStep3SaveTempleteSuccess(res.data))
    successMessage(res.data.message)
    onSuccessTemp()
  } catch (error) {
    getError(error)
    dispatch(
      createPropertyWalletInventoryStep3SaveTempleteFailure(error.response.data)
    )
  }
}

export async function getAllPlotsApi(dispatch, id) {
  dispatch(getAllPlots())
  try {
    let res = await getRequest(`${API.Project.getAllPlots}/${id}`)
    dispatch(getAllPlotsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllPlotsFailure(error.response.data))
  }
}
export async function getAllPWInstallmentPaymentPlanApi(dispatch, id) {
  dispatch(getAllPWInstallmentPaymentPlan())
  try {
    let res = await getRequest(
      `${API.Project.getAllPWInstallmentPaymentPlan}/${id}`
    )
    dispatch(getAllPWInstallmentPaymentPlanSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllPWInstallmentPaymentPlanFailure(error.response.data))
  }
}

export async function createPlotApi(dispatch, body, onSuccess) {
  dispatch(createPlot())
  try {
    let res = await postRequest(API.Project.createPlot, body)
    dispatch(createPlotSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createPlotFailure(error.response.data))
  }
}

export async function deletePlotApi(dispatch, id) {
  dispatch(deletePlot())
  try {
    let res = await deleteRequest(`${API.Project.deletePlot}/${id}`)
    dispatch(deletePlotSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deletePlotFailure(error.response.data))
  }
}

export async function uploadExcelSheetApi(dispatch, body, onSuccess) {
  dispatch(uploadExcelSheet())
  try {
    let res = await fileRequest(`${API.Project.uploadExcelSheet}`, body)
    dispatch(uploadExcelSheetSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(uploadExcelSheetFailure(error.response.data))
  }
}

export async function updatePropertyWalletInventoryStep3TempleteApi(
  dispatch,
  body,
  id,
  onSuccess
) {
  dispatch(updatePropertyWalletInventoryStep3Templete())
  try {
    let res = await patchRequest(
      `${API.Project.updatePropertyWalletInventoryStep3Templete}/${id}`,
      body
    )
    dispatch(updatePropertyWalletInventoryStep3TempleteSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      updatePropertyWalletInventoryStep3TempleteFailure(error.response.data)
    )
  }
}
export async function getPropertyWalletInventoryStep3CashPlanApi(dispatch, id) {
  dispatch(getPropertyWalletInventoryStep3CashPlan())
  try {
    let res = await getRequest(
      `${API.Project.getPropertyWalletInventoryStep3CashPlan}/${id}`
    )
    dispatch(getPropertyWalletInventoryStep3CashPlanSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(
      getPropertyWalletInventoryStep3CashPlanFailure(error.response.data)
    )
  }
}

export async function generatePlotDetailUpdateExelApi(dispatch, id) {
  dispatch(generatePlotDetailUpdateExel())
  try {
    let res = await getRequest(
      `${API.Project.GeneratePlotDetailUpdateExelV2}/${id}`
    )
    dispatch(generatePlotDetailUpdateExelSuccess(res.data))
  } catch (error) {
    // getError(error);
    dispatch(generatePlotDetailUpdateExelFailure(error.response.data))
  }
}

export async function uploadExcelForUpdateApi(dispatch, formData) {
  dispatch(uploadExcelForUpdate())
  try {
    let res = await fileRequest(`${API.Project.uploadExcelForUpdate}`, formData)
    dispatch(uploadExcelForUpdateSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(uploadExcelForUpdateFailure(error.response.data))
  }
}

export async function uploadTemplatePdfApi(dispatch, body) {
  dispatch(uploadTemplatePdf())
  try {
    let res = await fileRequest(API.Project.uploadTemplatePdf, body)
    dispatch(uploadTemplatePdfSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(uploadTemplatePdfFailure(error.response.data))
  }
}

export async function createPropertyWalletInstallmentTokenApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(createPropertyWalletInstallmentToken())
  try {
    let res = await postRequest(
      API.Project.createPropertyWalletInstallmentToken,
      body
    )
    dispatch(createPropertyWalletInstallmentTokenSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createPropertyWalletInstallmentTokenFailure(error.response.data))
  }
}

export async function updatePropertyWalletProjectIslLiveStatusApi(
  dispatch,
  body,
  id
) {
  dispatch(updatePropertyWalletProjectIslLiveStatus())
  try {
    let res = await patchRequest(
      `${API.Project.updatePropertyWalletProjectIslLiveStatus}/${id}`,
      body
    )
    dispatch(updatePropertyWalletProjectIslLiveStatusSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(
      updatePropertyWalletProjectIslLiveStatusFailure(error.response.data)
    )
  }
}
