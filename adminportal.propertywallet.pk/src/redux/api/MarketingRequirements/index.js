import { API } from '../../../config/apiEndPoints'
import {
  getError,
  getRequest,
  patchRequest,
  postRequest,
} from '../../../utils/baseApi'
import {
  GetAllMarketingRequirment,
  GetAllMarketingRequirmentFailure,
  GetAllMarketingRequirmentSuccess,
} from '../../slices/Marketingrequiements/GetAllMarketingRequirmentSlice'

export async function GetAllMarketingRequirmentApi(
  dispatch,
  pageLimit,
  search,
  selectedFilter,
  date
) {
  dispatch(GetAllMarketingRequirment())
  try {
    // const query = {
    //   Date: 'date',
    //   Subject: 'subject',
    // }
    let res = await getRequest(
      `${API.eLounge.getAllMarketingRequirment}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${search ? `&subject=${search}` : ''}${date ? `&date=${date}` : ''}`
    )
    dispatch(GetAllMarketingRequirmentSuccess(res.data))
  } catch (error) {
    getError(error)
    dispatch(GetAllMarketingRequirmentFailure(error.response.data))
  }
}
