import axios from "axios";
// end points
import { urlLink1 } from "../../constant/authConstants";
import {
  findAllOwnersByInvestorEndPoint,
  FIND_ALLOWNERS_BYINVESTOR,
  addNewWithDrawRequestEndPoint,
  ADD_NEW_WITHDRAW_REQUEST,
  BANKS,
  banksEndPoint,
  withDrawRequetsforInvestorEndPoint,
  WITHDRAW_REQ_INVESTOR,
  findCountsofInvestorsEndPoint,
  FIND_COUNT_INVESTOR,
  getAllInvestorTransactionHistoryInvestorEndPoint,
  ALL_INVERTER_TRANSACTION_HISTORY_DEBIT,
  ALL_INVERTER_TRANSACTION_HISTORY_CREDIT,
  ALL_INVERTER_DEBIT_AND_CREDIT_HISTORY,
  getAllDebitAndCreditHistoryEndPoint,
  SALE_ORDER_PRODUCT,
  SALE_ORDER_PROJECT,
  getSaleOrderHistoryEndPoint,
} from "../../constant/saleOrderConstant";

const allOwnersByInvestorAction = (pageLimit, search) => {
  return (dispatch) =>
    axios
      .get(
        `${urlLink1}/${findAllOwnersByInvestorEndPoint}?page=${
          pageLimit?.page
        }&limit=${pageLimit?.limit}${search ? `&search=${search}` : ""}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        dispatch({ type: FIND_ALLOWNERS_BYINVESTOR, payload: res?.data?.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
};

const addNewWithDrawRequestAction = (body, onSuccess, onFailure) => {
  return (dispatch) =>
    axios
      .post(`${urlLink1}/${addNewWithDrawRequestEndPoint}`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: ADD_NEW_WITHDRAW_REQUEST, payload: res });
        onSuccess(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        onFailure(err?.response?.data);
      });
};

const banksAction = () => {
  return (dispatch) =>
    axios
      .get(`${urlLink1}/${banksEndPoint}`)
      .then((res) => {
        dispatch({ type: BANKS, payload: res?.data?.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const withDrawRequetsforInvestorAction = (pageLimit, search) => {
  return (dispatch) =>
    axios
      .get(
        `${urlLink1}/${withDrawRequetsforInvestorEndPoint}?page=${
          pageLimit?.page
        }&limit=${pageLimit?.limit}${search ? `&search=${search}` : ""}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        dispatch({ type: WITHDRAW_REQ_INVESTOR, payload: res?.data?.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const findCountsofInvestorsAction = () => {
  return (dispatch) =>
    axios
      .get(`${urlLink1}/${findCountsofInvestorsEndPoint}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch({ type: FIND_COUNT_INVESTOR, payload: res?.data?.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const getAllInvestorTransactionHistoryDebit = (pageLimit) => {
  console.log(localStorage.getItem("user"));
  return (dispatch) =>
    axios
      .get(
        `${urlLink1}/${getAllInvestorTransactionHistoryInvestorEndPoint}?page=${
          pageLimit?.page
        }&limit=${pageLimit?.limit}${`&search=Debit`}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        dispatch({
          type: ALL_INVERTER_TRANSACTION_HISTORY_DEBIT,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const getAllInvestorTransactionHistoryCredit = (pageLimit, search) => {
  return (dispatch) =>
    axios
      .get(
        `${urlLink1}/${getAllInvestorTransactionHistoryInvestorEndPoint}?page=${
          pageLimit?.page
        }&limit=${pageLimit?.limit}${`&search=Credit`}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        dispatch({
          type: ALL_INVERTER_TRANSACTION_HISTORY_CREDIT,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const getAllInvestorDebitAndCreditHistory = (id) => {
  return (dispatch) =>
    axios
      .get(`${urlLink1}/${getAllDebitAndCreditHistoryEndPoint}/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch({
          type: ALL_INVERTER_DEBIT_AND_CREDIT_HISTORY,
          payload: res?.data?.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const getSaleOrderProjectHistory = (pageLimit, search) => {
  return (dispatch) =>
    axios
      .get(
        `${urlLink1}/${getSaleOrderHistoryEndPoint}?page=${
          pageLimit?.page
        }&limit=${pageLimit?.limit}${
          search ? `&search=${search}` : ""
        }&selections=Inventory`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        dispatch({ type: SALE_ORDER_PROJECT, payload: res?.data?.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
const getSaleOrderProductHistory = (pageLimit, search) => {
  return (dispatch) =>
    axios
      .get(
        `${urlLink1}/${getSaleOrderHistoryEndPoint}?page=${
          pageLimit?.page
        }&limit=${pageLimit?.limit}${
          search ? `&search=${search}` : ""
        }&selections=Product`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        dispatch({ type: SALE_ORDER_PRODUCT, payload: res?.data?.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
};
export {
  allOwnersByInvestorAction,
  addNewWithDrawRequestAction,
  banksAction,
  withDrawRequetsforInvestorAction,
  findCountsofInvestorsAction,
  getAllInvestorTransactionHistoryDebit,
  getAllInvestorTransactionHistoryCredit,
  getAllInvestorDebitAndCreditHistory,
  getSaleOrderProductHistory,
  getSaleOrderProjectHistory,
};
