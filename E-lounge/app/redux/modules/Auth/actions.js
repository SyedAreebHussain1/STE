import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./constants";
import { getError, patchRequest, postRequest } from "../../../utils/baseApi";
import { API } from "../../../config/apiCalls";
import { setInStorage } from "../../../utils/storage";
import { successMessage } from "../../../utils/message";

export const loginAction = async (body, dispatch) => {
  dispatch({ type: LOGIN });
  await postRequest(API.auth.login, body)
    .then((response) => {
      if (response?.data) {
        let token = response?.data?.data?.token;
        let user = {
          id: response?.data?.data?.exsistingUser?.id,
          name: response?.data?.data?.exsistingUser?.fullName,
          profile: response?.data?.data,
          phone: response?.data?.data?.exsistingUser?.phone,
          role: response?.data?.data?.exsistingUser?.eloungeRole?.title,
          roleType: response?.data?.data?.exsistingUser?.eloungeRole?.roleType,
          subRoleType:
            response?.data?.data?.exsistingUser?.eloungeRole?.subRoleType,
          eLoungeId:
            response?.data?.data?.exsistingUser?.assignUserElounge?.eLoungId,
          elounge:
            response?.data?.data?.exsistingUser?.assignUserElounge?.elounge,
          refCode: response?.data?.data?.exsistingUser?.eLoungeSaleUser?.refCode
        };
        setInStorage("token", token);
        setInStorage("user", user);
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        successMessage("Account Successfully login");
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: LOGIN_FAILURE, error: err?.response?.data });
    });
};
