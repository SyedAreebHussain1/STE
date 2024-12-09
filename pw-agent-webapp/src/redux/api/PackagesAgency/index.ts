import {
  del,
  getError,
  get,
  post,
  getForPackage,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  packages,
  packagesSuccess,
  packagesFailure,
} from "../../slices/PackagesAgency/packagesSlice";
import {
  discount,
  discountSuccess,
  discountFailure,
} from "../../slices/PackagesAgency/discountSlice";
import {
  checkout,
  checkoutSuccess,
  checkoutFailure,
} from "../../slices/PackagesAgency/checkoutSlice";
import {
  createPackage,
  createPackageSuccess,
  createPackageFailure,
} from "../../slices/PackagesAgency/createPackageSlice";
import {
  getAllCustomPackages,
  getAllCustomPackagesSuccess,
  getAllCustomPackagesFailure,
} from "../../slices/PackagesAgency/getAllCustomPackagesSlice";
import { AppDispatch } from "../../store";
import { successMessage } from "../../../utils/message";
import {
  cancelPwSubPackage,
  cancelPwSubPackageFailure,
  cancelPwSubPackageSuccess,
} from "../../slices/PackagesAgency/cancelPwSubPackageSlice";

export const getAllPackages = async (dispatch: AppDispatch) => {
  dispatch(packages());
  try {
    const response = await get<any>(`${ENDPOINT.packages.packagesList}`);
    // console.log(response.items);
    if (response.items) {
      const goldPackageIndex = response.items.findIndex((pckg: any) =>
        pckg.title.toLowerCase().includes("gold")
      );

      if (goldPackageIndex !== -1) {
        // Create a copy of the original data array
        const modifiedPackages = [...response.items];
        // Remove the "Gold" package from its original position
        const [goldPackage] = modifiedPackages.splice(goldPackageIndex, 1);
        // Calculate the middle index
        const middleIndex = Math.floor(modifiedPackages.length / 2);
        // Insert the "Gold" package at the middle index
        modifiedPackages.splice(middleIndex, 0, goldPackage);
        dispatch(packagesSuccess(modifiedPackages));
      } else {
        dispatch(packagesSuccess(response));
      }
    }
  } catch (err) {
    getError(err);
    dispatch(packagesFailure("Error"));
  }
};
export async function DiscountAmountApi(body: any, dispatch: AppDispatch) {
  dispatch(discount());
  try {
    let res = await post<any>(`${ENDPOINT.packages.discount}`, body);
    successMessage(res?.message);
    dispatch(discountSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(discountFailure(error?.response?.data));
  }
}
export async function CheckoutApi(
  dispatch: AppDispatch,
  body: any,
  paymentMethod: any
) {
  dispatch(checkout());
  try {
    let res = await post<any>(
      paymentMethod === "PayMob"
        ? ENDPOINT.packages.checkoutwithpaymob
        : ENDPOINT.packages.checkout,
      body
    );
    successMessage(res?.message);
    dispatch(checkoutSuccess(res));
  } catch (error: any) {
    getError(error);
    dispatch(checkoutFailure(error?.response?.data));
  }
}
export async function createPackageApi(
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) {
  dispatch(createPackage());
  try {
    let res = await post<any>(ENDPOINT.packages.createPackage, body);
    dispatch(createPackageSuccess(res));
    onSuccess(res);
  } catch (error: any) {
    getError(error);
    dispatch(createPackageFailure(error?.response?.data));
  }
}
export const getAllCustomPackagesApi = async (dispatch: AppDispatch) => {
  dispatch(getAllCustomPackages());
  try {
    const response = await get<any>(
      `${ENDPOINT.packages.getAllCustomPackages}`
    );
    // console.log(response);

    dispatch(getAllCustomPackagesSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllCustomPackagesFailure("Error"));
  }
};

export async function cancelPwSubPackageApi(
  dispatch: AppDispatch,
  id: any,
  onSuccess: any
) {
  dispatch(cancelPwSubPackage());
  try {
    let res = await post<any>(
      `${ENDPOINT.packages.cancelPwSubPackage}/${id}?cancelStatus=Cancel`
    );
    dispatch(cancelPwSubPackageSuccess(res));
    onSuccess(res);
  } catch (error: any) {
    getError(error);
    dispatch(cancelPwSubPackageFailure(error?.response?.data));
  }
}
