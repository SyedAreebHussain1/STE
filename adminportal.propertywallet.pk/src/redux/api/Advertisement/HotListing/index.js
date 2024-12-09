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
  createHotListing,
  createHotListingFailure,
  createHotListingSuccess,
} from '../../../slices/Advertisement/HotListing/createHotListingSlice'
import {
  deleteHotListing,
  deleteHotListingFailure,
  deleteHotListingSuccess,
} from '../../../slices/Advertisement/HotListing/deleteHotListingSlice'
import {
  getAllHotListingConditional,
  getAllHotListingConditionalFailure,
  getAllHotListingConditionalSuccess,
} from '../../../slices/Advertisement/HotListing/getAllHotListingConditionalSlice'
import {
  getAllHotListing,
  getAllHotListingFailure,
  getAllHotListingSuccess,
} from '../../../slices/Advertisement/HotListing/getAllHotListingSlice'
import {
  getOnetHotListing,
  getOnetHotListingFailure,
  getOnetHotListingSuccess,
} from '../../../slices/Advertisement/HotListing/getOnetHotListingSlice'
import {
  updateHotListing,
  updateHotListingFailure,
  updateHotListingSuccess,
} from '../../../slices/Advertisement/HotListing/updateHotListingSlice'

export async function createHotListingApi(dispatch, body, onSuccess) {
  dispatch(createHotListing())
  try {
    let res = await postRequest(API.hotListing.createHotListing, body)
    dispatch(createHotListingSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(createHotListingFailure(error.response.data))
  }
}

export async function getAllHotListingApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllHotListing())
  try {
    const query = {
      Status: 'type',
      'Listing Name': 'title',
    }
    let res = await getRequest(
      `${API.hotListing.getAllHotListing}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
    )
    dispatch(getAllHotListingSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllHotListingFailure(error.response.data))
  }
}

export async function getOnetHotListingApi(dispatch, id) {
  dispatch(getOnetHotListing())
  try {
    let res = await getRequest(`${API.hotListing.getOnetHotListing}/${id}`)
    dispatch(getOnetHotListingSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getOnetHotListingFailure(error.response.data))
  }
}

export async function deleteHotListingApi(dispatch, id, onSuccess) {
  dispatch(deleteHotListing())
  try {
    let res = await deleteRequest(`${API.hotListing.deleteHotListing}/${id}`)
    dispatch(deleteHotListingSuccess(res.data))
    onSuccess()
    successMessage(res.data.message)
  } catch (error) {
    getError(error)
    dispatch(deleteHotListingFailure(error.response.data))
  }
}

export async function getAllHotListingConditionalApi(
  dispatch,
  pageLimit,
  type,
  title
) {
  dispatch(getAllHotListingConditional())
  try {
    let res = await getRequest(
      `${API.hotListing.getAllHotListing}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${
        title && type
          ? `&type=${type}&title=${title}`
          : title
          ? `&title=${title}`
          : type
          ? `&type=${type}`
          : ''
      }`
    )
    dispatch(getAllHotListingConditionalSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getAllHotListingConditionalFailure(error.response.data))
  }
}

export async function updateHotListingApi(dispatch, body, onSuccess) {
  dispatch(updateHotListing())
  try {
    let res = await patchRequest(API.hotListing.updateHotListing, body)
    dispatch(updateHotListingSuccess(res.data))
    successMessage(res.data.message)
    onSuccess()
  } catch (error) {
    getError(error)
    dispatch(updateHotListingFailure(error.response.data))
  }
}
