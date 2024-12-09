import { get, getError } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import {
  getAllUserTransactions,
  getAllUserTransactionsSuccess,
  getAllUserTransactionsFailure,
} from "../../../slices/SalaryManagement/SalaryTransactions/getAllUserTransactionsSlice";
import { AppDispatch } from "../../../store";
export const getAllUserTransactionsApi = async (
  dispatch: AppDispatch,
  id: number,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllUserTransactions());
  try {
    const apiString = `${ENDPOINT.salaryManagement.getUserTransactions}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllUserTransactionsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllUserTransactionsFailure("Error"));
  }
};
