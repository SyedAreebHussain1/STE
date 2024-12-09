import { API } from '../../../config/apiEndPoints.js'
import { getError, getRequest } from '../../../utils/baseApi.js'
import {
  getAllInventories,
  getAllInventoriesSuccess,
  getAllInventoriesFailure,
} from '../../slices/InventoryManagment/getAllInventories.js'
import {
  getInventoryById,
  getInventoryByIdFailure,
  getInventoryByIdSuccess,
} from '../../slices/InventoryManagment/getInventoryByIdSlice.js'

export async function getAllInventoriesApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getAllInventories())
  try {
    const query = {
      'Inventory Name': 'inventoryName',
      'Inventory Status': 'inventoryStatus',
      'Agency Name': 'agencyName',
    }
    let url = `${API.inventoryManagment.getAllInventories}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${
      selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
    }`
    let res = await getRequest(url)
    dispatch(getAllInventoriesSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getAllInventoriesFailure(error?.response?.data))
  }
}

export async function getInventoryByIdApi(dispatch, id) {
  dispatch(getInventoryById())
  try {
    let url = `${API.inventoryManagment.getInventoryById}/${id}`
    let res = await getRequest(url)
    dispatch(getInventoryByIdSuccess(res?.data))
  } catch (error) {
    getError(error)
    dispatch(getInventoryByIdFailure(error?.response?.data))
  }
}
