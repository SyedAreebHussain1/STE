import {
  ADD_CHECKOUT,
  ADD_CHECKOUT_FAILURE,
  ADD_CHECKOUT_SUCCESS,
  ADD_DISCOUNT_AMOUNT,
  ADD_DISCOUNT_AMOUNT_FAILURE,
  ADD_DISCOUNT_AMOUNT_SUCCESS,
  GET_PACKAGES,
  GET_PACKAGES_FAILURE,
  GET_PACKAGES_SUCCESS,
} from "./constants";
import {
  deleteRequest,
  getError,
  getRequest,
  postRequest,
} from "../../../utils/baseApi";
import { API } from "../../../config/apiCalls";

export const getAllPackages = async (dispatch, pageLimit) => {
  dispatch({ type: GET_PACKAGES });
  await getRequest(`${API.dashboard.packagesList}`)
    .then((response) => {
      if (response.data) {
        const goldPackageIndex = response.data.data.findIndex((pckg) =>
          pckg.title.toLowerCase().includes("gold")
        );
        if (goldPackageIndex !== -1) {
          // Create a copy of the original data array
          const modifiedPackages = [...response.data.data];

          // Remove the "Gold" package from its original position
          const [goldPackage] = modifiedPackages.splice(goldPackageIndex, 1);

          // Calculate the middle index
          const middleIndex = Math.floor(modifiedPackages.length / 2);

          // Insert the "Gold" package at the middle index
          modifiedPackages.splice(middleIndex, 0, goldPackage);

          // Update the state with the modified array
          // setData(modifiedPackages);
          dispatch({ type: GET_PACKAGES_SUCCESS, payload: modifiedPackages });
        } else {
          dispatch({ type: GET_PACKAGES_SUCCESS, payload: response.data });
        }
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: GET_PACKAGES_FAILURE, error: err.response.data });
    });
};
export const DiscountAmountApi = async (body, dispatch) => {
  dispatch({ type: ADD_DISCOUNT_AMOUNT });
  await postRequest(API.dashboard.discount, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: ADD_DISCOUNT_AMOUNT_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: ADD_DISCOUNT_AMOUNT_FAILURE, error: err.response.data });
    });
};
export const CheckoutApi = async (dispatch, body, paymentMethod) => {
  dispatch({ type: ADD_CHECKOUT });
  await postRequest(paymentMethod === 'PayMob' ? API.dashboard.checkoutwithpaymob : API.dashboard.checkout, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: ADD_CHECKOUT_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: ADD_CHECKOUT_FAILURE, error: err.response.data });
    });
};
