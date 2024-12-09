import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  SelectCampaign,
  SelectCampaignFailure,
  SelectCampaignSuccess,
} from "../../slices/FacebookCampaign/SelectCampaignSlice";
import {
  getFacebookAddSet,
  getFacebookAddSetFailure,
  getFacebookAddSetSuccess,
} from "../../slices/FacebookCampaign/getFacebookAddSetSlice";
import {
  getFacebookAdd,
  getFacebookAddFailure,
  getFacebookAddSuccess,
} from "../../slices/FacebookCampaign/getFacebookAddSlice";
import { AppDispatch } from "../../store";

export const getFacebookCamapiagnApi = async (
  body: any,
  dispatch: AppDispatch
) => {
  dispatch(SelectCampaign());
  try {
    const response = await patch<any>(ENDPOINT.facebook.SelectCampaign, body);
    if (response) {
      dispatch(SelectCampaignSuccess({ ...response?.data }));
    } else {
      dispatch(SelectCampaignFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(SelectCampaignFailure("Error"));
  }
};

export const getFacebookAddSetApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getFacebookAddSet());

  try {
    const response = await get<any>(
      `${ENDPOINT.facebook.getFacebookAddSet}/${String(id)}`
    );

    if (response) {
      dispatch(getFacebookAddSetSuccess([...response]));
    } else {
      dispatch(getFacebookAddSetFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getFacebookAddSetFailure("Error"));
  }
};

export const getFacebookAddApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getFacebookAdd());
  try {
    const response = await get<any>(
      `${ENDPOINT.facebook.getFacebookAdd}/${String(id)}`
    );

    if (response) {
      dispatch(getFacebookAddSuccess([...response]));
    } else {
      dispatch(getFacebookAddFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getFacebookAddFailure("Error"));
  }
};
