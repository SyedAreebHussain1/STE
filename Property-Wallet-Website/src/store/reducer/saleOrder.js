import {
  ADD_NEW_WITHDRAW_REQUEST,
  ALL_INVERTER_TRANSACTION_HISTORY_CREDIT,
  ALL_INVERTER_TRANSACTION_HISTORY_DEBIT,
  BANKS,
  FIND_ALLOWNERS_BYINVESTOR,
  FIND_COUNT_INVESTOR,
  WITHDRAW_REQ_INVESTOR,
  ALL_INVERTER_DEBIT_AND_CREDIT_HISTORY,
  SALE_ORDER_PRODUCT,
  SALE_ORDER_PROJECT,
} from "../../constant/saleOrderConstant";

const INITIAL_STATE = {
  allOwnersByInvestor: null,
  addNewWithDrawRequestRes: null,
  withDrawRequetsforInvestor: null,
  findCountsofInvestors: null,
  banks: null,
  allInvesterTransactionHistory: null,
  allInvesterTransactionDebitAndCreditHistory: null,
  allProductSaleOrderHistory: null,
  allProjectSaleOrderHistory: null,
};
const saleOrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIND_ALLOWNERS_BYINVESTOR:
      return {
        ...state,
        allOwnersByInvestor: action.payload,
      };
    case ADD_NEW_WITHDRAW_REQUEST:
      return {
        ...state,
        addNewWithDrawRequestRes: action.payload,
      };
    case BANKS:
      return {
        ...state,
        banks: action.payload,
      };
    case WITHDRAW_REQ_INVESTOR:
      return {
        ...state,
        withDrawRequetsforInvestor: action.payload,
      };
    case FIND_COUNT_INVESTOR:
      return {
        ...state,
        findCountsofInvestors: action.payload,
      };
    case ALL_INVERTER_TRANSACTION_HISTORY_CREDIT:
      return {
        ...state,
        allInvesterTransactionHistoryCredit: action.payload,
      };
    case ALL_INVERTER_TRANSACTION_HISTORY_DEBIT:
      return {
        ...state,
        allInvesterTransactionHistoryDebit: action.payload,
      };
    case ALL_INVERTER_DEBIT_AND_CREDIT_HISTORY:
      return {
        ...state,
        allInvesterTransactionDebitAndCreditHistory: action.payload,
      };
    case SALE_ORDER_PRODUCT:
      return {
        ...state,
        allProductSaleOrderHistory: action.payload,
      };
    case SALE_ORDER_PROJECT:
      return {
        ...state,
        allProjectSaleOrderHistory: action.payload,
      };
  }
  return state;
};
export default saleOrderReducer;
