import {
  postInterestedLeads,
  postInterestedLeadsFailure,
  postInterestedLeadsSuccess,
} from "../../../redux/slices/ComingSoon/postInterestedLeads";
import { AppDispatch } from "../../../redux/store";
import { getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

//websiteCounts

export const postInterestedLeadsApi = async (
  dispatch: AppDispatch,
  body: {
    email: string;
  },
  onClose: any,
  wrong: any
) => {
  dispatch(postInterestedLeads());
  try {
    const apiString = `${ENDPOINT.comingSoon.interestedLeads}`;
    const response = await post<any>(apiString, body);
    dispatch(postInterestedLeadsSuccess(response));
    successMessage(response.message);
    onClose();
  } catch (err) {
    wrong();
    dispatch(postInterestedLeadsFailure("Error"));
  }
};

export const postWebsiteCounts = async (body: { affilationUserId: number }) => {
  try {
    const apiString = `${ENDPOINT.websiteCounts.websiteCounts}`;
    await post<any>(apiString, body);
  } catch (err) {
    console.log(err);
  }
};
