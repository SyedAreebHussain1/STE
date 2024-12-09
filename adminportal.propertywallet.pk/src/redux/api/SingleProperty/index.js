import { API } from '../../../config/apiEndPoints'
import {
  deleteReqWithBody,
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
  patchFileRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import {
  getLandArea,
  getLandAreaFailure,
  getLandAreaSuccess,
} from '../../slices/SingleProperty/getLandAreaSlice'
import { successMessage } from '../../../utils/message'
import {
  getProjectSubTypes,
  getProjectSubTypesFailure,
  getProjectSubTypesSuccess,
} from '../../slices/SingleProperty/getProjectSubTypesSlice'
import {
  getProjectTypes,
  getProjectTypesFailure,
  getProjectTypesSuccess,
} from '../../slices/SingleProperty/getProjectTypesSlice'

import {
  createPropertyWalletProductStepOne,
  createPropertyWalletProductStepOneSuccess,
  createPropertyWalletProductStepOneFailure,
} from '../../slices/SingleProperty/createPropertyWalletProductStepOneSlice'

import {
  updatePropertyWalletProductStepOne,
  updatePropertyWalletProductStepOneSuccess,
  updatePropertyWalletProductStepOneFailure,
} from '../../slices/SingleProperty/updatePropertyWalletProductStepOneSlice'
import {
  createPropertyWalletProductStepTwo,
  createPropertyWalletProductStepTwoFailure,
  createPropertyWalletProductStepTwoSuccess,
} from '../../slices/SingleProperty/createPropertyWalletProductStepTwoSlice'
import {
  updatePropertyWalletProductStepTwo,
  updatePropertyWalletProductStepTwoFailure,
  updatePropertyWalletProductStepTwoSuccess,
} from '../../slices/SingleProperty/updatePropertyWalletProductStepTwoSlice'
import {
  getAllProductPlot,
  getAllProductPlotFailure,
  getAllProductPlotSuccess,
} from '../../slices/SingleProperty/getAllProductPlotSlice'
import {
  createProductPlot,
  createProductPlotFailure,
  createProductPlotSuccess,
} from '../../slices/SingleProperty/createProductPlotSlice'
import {
  deleteProductPlot,
  deleteProductPlotFailure,
  deleteProductPlotSuccess,
} from '../../slices/SingleProperty/deleteProductPlotSlice'
import {
  excelProductUpload,
  excelProductUploadFailure,
  excelProductUploadSuccess,
} from '../../slices/SingleProperty/excelProductUploadSlice'
import {
  getPropertyWalletUtil,
  getPropertyWalletUtilFailure,
  getPropertyWalletUtilSuccess,
} from '../../slices/SingleProperty/getPropertyWalletUtilSlice'
import {
  createPropertyWalletUtil,
  createPropertyWalletUtilFailure,
  createPropertyWalletUtilSuccess,
} from '../../slices/SingleProperty/createPropertyWalletUtilSlice'
import {
  deletePropertyWalletUtil,
  deletePropertyWalletUtilFailure,
  deletePropertyWalletUtilSuccess,
} from '../../slices/SingleProperty/deletePropertyWalletUtilSlice'
import {
  createPropertyWalletProductStep3CashPlan,
  createPropertyWalletProductStep3CashPlanFailure,
  createPropertyWalletProductStep3CashPlanSuccess,
} from '../../slices/SingleProperty/createPropertyWalletProductStep3CashPlanSlice'
import {
  updatePropertyWalletProductStep3CashPlan,
  updatePropertyWalletProductStep3CashPlanFailure,
  updatePropertyWalletProductStep3CashPlanSuccess,
} from '../../slices/SingleProperty/updatePropertyWalletProductStep3CashPlanSlice'
import {
  createPropertyWalletProductStep3SaveTemplete,
  createPropertyWalletProductStep3SaveTempleteFailure,
  createPropertyWalletProductStep3SaveTempleteSuccess,
} from '../../slices/SingleProperty/createPropertyWalletProductStep3SaveTempleteSlice'
import {
  getAllPWProductInstallmentPaymentPlan,
  getAllPWProductInstallmentPaymentPlanFailure,
  getAllPWProductInstallmentPaymentPlanSuccess,
} from '../../slices/SingleProperty/getAllPWProductInstallmentPaymentPlanSlice'
import {
  updatePropertyWalletProductStep3Templete,
  updatePropertyWalletProductStep3TempleteFailure,
  updatePropertyWalletProductStep3TempleteSuccess,
} from '../../slices/SingleProperty/updatePropertyWalletProductStep3TempleteSlice'
import {
  getAllProductList,
  getAllProductListFailure,
  getAllProductListSuccess,
} from '../../slices/SingleProperty/getAllProductListSlice'
import {
  createStepTwoImages,
  createStepTwoImagesFailure,
  createStepTwoImagesSuccess,
} from '../../slices/SingleProperty/createStepTwoImagesSlice'
import {
  updateStepTwoImages,
  updateStepTwoImagesFailure,
  updateStepTwoImagesSuccess,
} from '../../slices/SingleProperty/updateStepTwoImagesSlice'
import {
  deleteStepTwoImages,
  deleteStepTwoImagesFailure,
  deleteStepTwoImagesSuccess,
} from '../../slices/SingleProperty/deleteStepTwoImagesSlice'
import {
  getStepTwoImages,
  getStepTwoImagesFailure,
  getStepTwoImagesSuccess,
} from '../../slices/SingleProperty/getStepTwoImagesSlice'
import {
  getProductDetailForStep1,
  getProductDetailForStep1Failure,
  getProductDetailForStep1Success,
} from '../../slices/SingleProperty/getProductDetailForStep1Slice'
import {
  getProductDetailForStep3Features,
  getProductDetailForStep3FeaturesFailure,
  getProductDetailForStep3FeaturesSuccess,
} from '../../slices/SingleProperty/getProductDetailForStep3FeaturesSlice'
import {
  getProductDetailForStep4CashPlan,
  getProductDetailForStep4CashPlanFailure,
  getProductDetailForStep4CashPlanSuccess,
} from '../../slices/SingleProperty/getProductDetailForStep4CashPlanSlice'
import {
  getProductFacing,
  getProductFacingFailure,
  getProductFacingSuccess,
} from '../../slices/SingleProperty/getProductFacingSlice'
import {
  createProductFacing,
  createProductFacingFailure,
  createProductFacingSuccess,
} from '../../slices/SingleProperty/createProductFacingSlice'
import {
  deleteProductFacing,
  deleteProductFacingFailure,
  deleteProductFacingSuccess,
} from '../../slices/SingleProperty/deleteProductFacingSlice'
import {
  updatePropertyWalletProductIslLiveStatus,
  updatePropertyWalletProductIslLiveStatusFailure,
  updatePropertyWalletProductIslLiveStatusSuccess,
} from '../../slices/SingleProperty/updatePropertyWalletProductIslLiveStatusSlice'

import {
  getAllInterestedLogs,
  getAllInterestedLogsSuccess,
  getAllInterestedLogsFailure,
} from '../../slices/SingleProperty/getAllInterestedLogsSlice'

export async function getProjectTypesApi(dispatch, pageLimit) {
  dispatch(getProjectTypes())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getProjectTypes}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getProjectTypesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectTypesFailure(error?.response?.data))
  }
}

export async function getProjectSubTypesApi(dispatch, id) {
  dispatch(getProjectSubTypes())
  try {
    let res = await getRequest(`${API.SingleProperty.getProjectSubTypes}/${id}`)
    dispatch(getProjectSubTypesSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectSubTypesFailure(error.response.data))
  }
}
export async function getLandAreaApi(dispatch, pageLimit) {
  dispatch(getLandArea())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getLandArea}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getLandAreaSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getLandAreaFailure(error?.response?.data))
  }
}

export async function createPropertyWalletProductStepOneApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(createPropertyWalletProductStepOne())
  try {
    let res = await postRequest(
      API.SingleProperty.createPropertyWalletProductStepOne,
      body
    )
    dispatch(createPropertyWalletProductStepOneSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createPropertyWalletProductStepOneFailure(error.response.data))
  }
}

export async function updatePropertyWalletProductStepOneApi(
  dispatch,
  body,
  onSuccess,
  id
) {
  dispatch(updatePropertyWalletProductStepOne())
  try {
    let res = await patchRequest(
      `${API.SingleProperty.updatePropertyWalletProductStepOne}/${id}`,
      body
    )
    dispatch(updatePropertyWalletProductStepOneSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updatePropertyWalletProductStepOneFailure(error?.response?.data))
  }
}

export async function createPropertyWalletProductStepTwoApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(createPropertyWalletProductStepTwo())
  try {
    let res = await postRequest(
      API.SingleProperty.createPropertyWalletProductStepTwo,
      body
    )
    dispatch(createPropertyWalletProductStepTwoSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createPropertyWalletProductStepTwoFailure(error.response.data))
  }
}

export async function updatePropertyWalletProductStepTwoApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(updatePropertyWalletProductStepTwo())
  try {
    let res = await patchRequest(
      `${API.SingleProperty.updatePropertyWalletProductStepTwo}`,
      body
    )
    dispatch(updatePropertyWalletProductStepTwoSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updatePropertyWalletProductStepTwoFailure(error.response.data))
  }
}

export async function getAllProductPlotsApi(dispatch, id) {
  dispatch(getAllProductPlot())
  try {
    let res = await getRequest(`${API.SingleProperty.getAllProductPlot}/${id}`)
    dispatch(getAllProductPlotSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllProductPlotFailure(error.response.data))
  }
}

export async function createProductPlotApi(dispatch, body, onSuccess) {
  dispatch(createProductPlot())
  try {
    let res = await postRequest(API.SingleProperty.createProductPlot, body)
    dispatch(createProductPlotSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createProductPlotFailure(error.response.data))
  }
}

export async function deleteProductPlotApi(dispatch, id) {
  dispatch(deleteProductPlot())
  try {
    let res = await deleteRequest(
      `${API.SingleProperty.deleteProductPlot}/${id}`
    )
    dispatch(deleteProductPlotSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deleteProductPlotFailure(error.response.data))
  }
}

export async function excelProductUploadApi(dispatch, body) {
  dispatch(excelProductUpload())
  try {
    let res = await fileRequest(
      `${API.SingleProperty.excelProductUpload}`,
      body
    )
    dispatch(excelProductUploadSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(excelProductUploadFailure(error.response.data))
  }
}
export async function getPropertyWalletUtilApi(dispatch, id) {
  dispatch(getPropertyWalletUtil())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getPropertyWalletUtil}/${id}`
    )
    dispatch(getPropertyWalletUtilSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getPropertyWalletUtilFailure(error.response.data))
  }
}
export async function createPropertyWalletUtilApi(dispatch, body) {
  dispatch(createPropertyWalletUtil())
  try {
    let res = await postRequest(
      API.SingleProperty.createPropertyWalletUtil,
      body
    )
    dispatch(createPropertyWalletUtilSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(createPropertyWalletUtilFailure(error.response.data))
  }
}

export async function deletePropertyWalletUtilApi(dispatch, body) {
  dispatch(deletePropertyWalletUtil())
  try {
    let res = await deleteReqWithBody(
      API.SingleProperty.deletePropertyWalletUtil,
      body
    )
    dispatch(deletePropertyWalletUtilSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deletePropertyWalletUtilFailure(error.response.data))
  }
}

export async function createPropertyWalletProductStep3CashPlanApi(
  dispatch,
  onSuccess,
  body
) {
  dispatch(createPropertyWalletProductStep3CashPlan())
  try {
    let res = await postRequest(
      API.SingleProperty.createPropertyWalletProductStep3CashPlan,
      body
    )
    dispatch(createPropertyWalletProductStep3CashPlanSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      createPropertyWalletProductStep3CashPlanFailure(error.response.data)
    )
  }
}

export async function updatePropertyWalletProductStep3CashPlanApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(updatePropertyWalletProductStep3CashPlan())
  try {
    let res = await patchRequest(
      API.SingleProperty.updatePropertyWalletProductStep3CashPlan,
      body
    )
    dispatch(updatePropertyWalletProductStep3CashPlanSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      updatePropertyWalletProductStep3CashPlanFailure(error.response.data)
    )
  }
}

export async function createPropertyWalletProductStep3SaveTempleteApi(
  dispatch,
  body,
  onSuccess
) {
  dispatch(createPropertyWalletProductStep3SaveTemplete())
  try {
    let res = await postRequest(
      API.SingleProperty.createPropertyWalletProductStep3SaveTemplete,
      body
    )
    dispatch(createPropertyWalletProductStep3SaveTempleteSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      createPropertyWalletProductStep3SaveTempleteFailure(error.response.data)
    )
  }
}

export async function updatePropertyWalletProductStep3TempleteApi(
  dispatch,
  body,
  id,
  onSuccess
) {
  dispatch(updatePropertyWalletProductStep3Templete())
  try {
    let res = await patchRequest(
      `${API.SingleProperty.updatePropertyWalletProductStep3Templete}/${id}`,
      body
    )
    dispatch(updatePropertyWalletProductStep3TempleteSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(
      updatePropertyWalletProductStep3TempleteFailure(error.response.data)
    )
  }
}

export async function getAllPWProductInstallmentPaymentPlanApi(dispatch, id) {
  dispatch(getAllPWProductInstallmentPaymentPlan())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getAllPWProductInstallmentPaymentPlan}/${id}`
    )
    dispatch(getAllPWProductInstallmentPaymentPlanSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllPWProductInstallmentPaymentPlanFailure(error.response.data))
  }
}

export async function getAllProductListApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  status = false
) {
  dispatch(getAllProductList())
  try {
    const query = {
      City: 'city',
      Inventory: 'title',
      'Owner Name': 'ownerName',
      // "Location": "address",
      // "NOC": "NOC"
    }
    let res = await getRequest(
      `${API.SingleProperty.getAllProductList}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${status === false ? '&productStatus=COMPLETED' : ''}${
        selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
      }`
      // ${searchText !== "" && searchText ? `&title=${searchText}` : ""}`
    )
    dispatch(getAllProductListSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllProductListFailure(error.response.data))
  }
}
export async function createStepTwoImagesApi(dispatch, formData, onSuccess) {
  dispatch(createStepTwoImages())
  try {
    let res = await fileRequest(
      API.SingleProperty.createStepTwoImages,
      formData
    )
    dispatch(createStepTwoImagesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createStepTwoImagesFailure(error?.response?.data))
  }
}
export async function updateStepTwoImagesApi(dispatch, body, onSuccess, id) {
  dispatch(updateStepTwoImages())
  try {
    let res = await patchFileRequest(
      `${API.SingleProperty.updateStepTwoImages}/${id}`,
      body
    )
    dispatch(updateStepTwoImagesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateStepTwoImagesFailure(error.response.data))
  }
}

export async function deleteStepTwoImagesApi(dispatch, body, onSuccess) {
  dispatch(deleteStepTwoImages())
  try {
    let res = await deleteReqWithBody(
      `${API.SingleProperty.deleteStepTwoImages}`,
      body
    )
    dispatch(deleteStepTwoImagesSuccess(res.data))
    successMessage(res.data.message)
    onSuccess(body.propertyWalletProductId)
  } catch (error) {
    getError(error)
    dispatch(deleteStepTwoImagesFailure(error.response.data))
  }
}
export async function getStepTwoImagesApi(dispatch, projectId) {
  dispatch(getStepTwoImages())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getStepTwoImages}/${projectId}`
    )
    dispatch(getStepTwoImagesSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getStepTwoImagesFailure(error.response.data))
  }
}
export async function getProductDetailForStep1Api(dispatch, id) {
  dispatch(getProductDetailForStep1())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getProductDetailForStep1}/${id}`
    )
    dispatch(getProductDetailForStep1Success(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProductDetailForStep1Failure(error.response.data))
  }
}

export async function getProductDetailForStep3FeaturesApi(dispatch, id) {
  dispatch(getProductDetailForStep3Features())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getProductDetailForStep3Features}/${id}`
    )
    dispatch(getProductDetailForStep3FeaturesSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProductDetailForStep3FeaturesFailure(error.response.data))
  }
}

export async function getProductDetailForStep4CashPlanApi(dispatch, id) {
  dispatch(getProductDetailForStep4CashPlan())
  try {
    let res = await getRequest(
      `${API.SingleProperty.getProductDetailForStep4CashPlan}/${id}`
    )
    dispatch(getProductDetailForStep4CashPlanSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProductDetailForStep4CashPlanFailure(error.response.data))
  }
}
export async function getProductFacingApi(dispatch, id) {
  dispatch(getProductFacing())
  try {
    let res = await getRequest(`${API.SingleProperty.getProductFacing}/${id}`)
    dispatch(getProductFacingSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProductFacingFailure(error.response.data))
  }
}
export async function createProductFacingApi(dispatch, body) {
  dispatch(createProductFacing())
  try {
    let res = await postRequest(API.SingleProperty.createProductFacing, body)
    dispatch(createProductFacingSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(createProductFacingFailure(error.response.data))
  }
}

export async function deleteProductFacingApi(dispatch, body) {
  dispatch(deleteProductFacing())
  try {
    let res = await deleteReqWithBody(
      API.SingleProperty.deleteProductFacing,
      body
    )
    dispatch(deleteProductFacingSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deleteProductFacingFailure(error.response.data))
  }
}
export async function updatePropertyWalletProductIslLiveStatusApi(
  dispatch,
  body,
  id
) {
  dispatch(updatePropertyWalletProductIslLiveStatus())
  try {
    let res = await patchRequest(
      `${API.SingleProperty.updatePropertyWalletProductIslLiveStatus}/${id}`,
      body
    )
    dispatch(updatePropertyWalletProductIslLiveStatusSuccess(res.data))
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(
      updatePropertyWalletProductIslLiveStatusFailure(error.response.data)
    )
  }
}
export async function getAllInterestedLogsApi(dispatch, pageLimit) {
  dispatch(getAllInterestedLogs())
  try {
    let res = await getRequest(
      `${API.SingleProperty.interestedUser}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    )
    dispatch(getAllInterestedLogsSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllInterestedLogsFailure(error.response.data))
  }
}
