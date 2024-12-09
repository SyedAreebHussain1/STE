import {
  postSupportTicket,
  postSupportTicketFailure,
  postSupportTicketSuccess,
} from "../../../redux/slices/RequestSupport/supportTicketSlice";
import {
  getSupportTicketsFailure,
  getSupportTickets,
  getSupportTicketsSuccess,
} from "../../../redux/slices/RequestSupport/supportTicketsSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getSupportTicketsApi = async (dispatch: AppDispatch) => {
  dispatch(getSupportTickets());
  try {
    const apiString = `${ENDPOINT.requestSupport.supportTickets}`;
    const response = await get<any>(apiString);
    dispatch(getSupportTicketsSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getSupportTicketsFailure("Error"));
  }
};

export const postSupportTicketApi = async (
  dispatch: AppDispatch,
  body: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess: any
) => {
  dispatch(postSupportTicket());
  try {
    const response = await post<any>(
      ENDPOINT.requestSupport.supportTickets,
      body
    );
    dispatch(postSupportTicketSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    setLoading(false);
    getError(err);
    dispatch(postSupportTicketFailure("Error"));
  }
};
