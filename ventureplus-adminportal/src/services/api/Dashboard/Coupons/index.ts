import { get, getError, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import {coupons, couponsFailure, couponsSuccess, deleteCoupon, deleteCouponFailure, deleteCouponSuccess, getCoupon, getCouponFailure, getCouponSuccess
} from "../../../../store/slices/Dashboard/Coupons";
import { successMessage } from "../../../../utils/message";
import { BodyType } from "../../../../views/Dashboard/AffiliateUsers/helpers/AffiliateModal";



export const getCouponApi = async (
    dispatch: AppDispatch,
) => {
    dispatch(getCoupon());
    try {
        let apiString = `${ENDPOINT.coupons.getCoupon}`;
        const response = await get<any>(apiString);
        dispatch(getCouponSuccess(response));
    } catch (err: any) {
        getError(err);
        dispatch(getCouponFailure("Error"));
    }
};

;

export const couponsApi = async (
    dispatch: AppDispatch,
    body: BodyType,
    onSuccess: () => void,
  ) => {
    dispatch(coupons());
    try {
      const response = await post<any>(ENDPOINT.coupons.addCoupon, body);
      dispatch(couponsSuccess(response));
      successMessage(response?.message);
      onSuccess();
    } catch (err) {
      getError(err);
      dispatch(couponsFailure("Error"));
    }
  };

  export const deleteCouponApi = async (dispatch: AppDispatch, id: number, onSuccess: any) => {
    dispatch(deleteCoupon());
    try {
      const response = await del<any>(`${ENDPOINT.coupons.delCoupons}/${id}`);
      dispatch(deleteCouponSuccess(response?.data));
      onSuccess(response?.message)
      successMessage(response?.message)
    } catch (err) {
      getError(err);
      dispatch(deleteCouponFailure("Error"));
    }
  }