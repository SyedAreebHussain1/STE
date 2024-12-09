import { postdecodeUrlApiSlice, postdecodeUrlApiSliceFailure, postdecodeUrlApiSliceSuccess, setAffilateId } from "../../../redux/slices/Decode/decodeSlice";
import { getError, postWithoutPayload } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { AppDispatch } from "../../../redux/store";


export const decodeUrlApi = async (
  dispatch: AppDispatch, 
  url: any,
  onSuccess: (response: any) => void
) => {
  dispatch(postdecodeUrlApiSlice());
  try {
    const apiString = `${ENDPOINT.decode.decodeUrlApi}/${url}`;
    const response = await postWithoutPayload<any>(apiString);
  
    dispatch(postdecodeUrlApiSliceSuccess(response.data));

    const affilateId = response?.data?.UserId;
    if (affilateId) {
      dispatch(setAffilateId(affilateId));
    }

    onSuccess(response.data); 
  } catch (err) {
    getError(err);
    dispatch(postdecodeUrlApiSliceFailure("Error"));
  }
};
