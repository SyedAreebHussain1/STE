import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from '../../../utils/baseApi'
import {
  getProductSaleOrder,
  getProductSaleOrderFailure,
  getProductSaleOrderSuccess,
} from '../../slices/SalesOrder/getProductSaleOrderSlice'
import {
  getProjectSaleOrder,
  getProjectSaleOrderFailure,
  getProjectSaleOrderSuccess,
} from '../../slices/SalesOrder/getProjectSaleOrderSlice'

export async function getProjectSaleOrderApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getProjectSaleOrder())
  try {
    const query = {
      City: 'city',
      'Project Name': 'projectName',
      'Client Name': 'clientName',
      'Agency Name': 'agencyName',
    }
    let res = await getRequest(
      `${API.SalesOrder.getProjectSaleOrder}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
      // ${searchText !== "" && searchText ? `&projectName=${searchText}` : ""}`
    )
    dispatch(getProjectSaleOrderSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProjectSaleOrderFailure(error.response.data))
  }
}

export async function getProductSaleOrderApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter
) {
  dispatch(getProductSaleOrder())
  try {
    const query = {
      'Product Name': 'productName',
      'Client Name': 'clientName',
      'Agency Name': 'agencyName',
    }
    let res = await getRequest(
      `${API.SalesOrder.getProductSaleOrder}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
      // ${searchText !== "" && searchText ? `&projectName=${searchText}` : ""}`
    )
    dispatch(getProductSaleOrderSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(getProductSaleOrderFailure(error.response.data))
  }
}
