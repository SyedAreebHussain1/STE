/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { reducer as form } from "redux-form/immutable";
import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import history from "utils/history";

import languageProviderReducer from "containers/LanguageProvider/reducer";
import uiReducer from "./modules/ui";
import authReducer from "./modules/Auth/reducers/auth";
import initval from "./modules/initForm";
import login from "./modules/login";
import treeTable from "../containers/Tables/reducers/treeTbReducer";
import crudTable from "../containers/Tables/reducers/crudTbReducer";
import crudTableForm from "../containers/Tables/reducers/crudTbFrmReducer";
import ecommerce from "../containers/SampleApps/Ecommerce/reducers/ecommerceReducer";
import contact from "../containers/SampleApps/Contact/reducers/contactReducer";
import chat from "../containers/SampleApps/Chat/reducers/chatReducer";
import email from "../containers/SampleApps/Email/reducers/emailReducer";
import calendar from "../containers/SampleApps/Calendar/reducers/calendarReducer";
import socmed from "../containers/SampleApps/Timeline/reducers/timelineReducer";
import taskboard from "../containers/SampleApps/TaskBoard/reducers/taskboardReducer";
import walletList from "./modules/Wallet/reducers/walletList";
import walletBalance from "./modules/Wallet/reducers/getWalletBalance";
import withdrawRequest from "./modules/Wallet/reducers/addWithdrawRequest";
import banks from "./modules/Wallet/reducers/getAllBanks";
import userDetail from "./modules/Wallet/reducers/getUserProfile";
import forgotPasswordWithEmail from "./modules/ForgotPassword/reducers/forgotPasswordWithEmail";
import changePassword from "./modules/ForgotPassword/reducers/changePassword";
import forgotPasswordOtpVerify from "./modules/ForgotPassword/reducers/forgotPasswordOtpVerify";
import getSaleOrder from "./modules/Dashboard/reducers/getSaleOrder";
import getSaleOrderGraphData from "./modules/Dashboard/reducers/getSaleOrderGraphData";
import getSalesOrderAndCommisson from "./modules/Dashboard/reducers/getSalesOrderAndCommisson";
import allPackages from "./modules/Packages/reducers/packages";
import discount from "./modules/Packages/reducers/discount";
import checkout from "./modules/Packages/reducers/checkout";
import updatePassword from "./modules/Profile/reducers/updatepassword";
import updateProfile from "./modules/Profile/reducers/updateprofile";
import getPoolDivision from "./modules/LoungeWallet/Division/reducers/getPoolDivision";
import getAllEloungeVisitForManagement from "./modules/VisitManager/reducers/getAllEloungeVisitForManagement";
import getAssignEloungeSaleUser from "./modules/VisitManager/reducers/getAssignEloungeSaleUser";
import getAllSubscribers from "./modules/EarningHistory/reducers/getAllSubscribers";
import getAllSignUps from "./modules/EarningHistory/reducers/getAllSignUps";
import getAllTransaction from "./modules/EarningHistory/reducers/getAllTransaction";
import getAllVisits from "./modules/Visit/reducers/getAllVisits";
import addNewVisit from "./modules/Visit/reducers/addNewVisit";
import editVisit from "./modules/Visit/reducers/editVisit";
import deleteVisit from "./modules/Visit/reducers/deleteVisit";
import uploadAttachments from "./modules/Visit/reducers/uploadAttachments";
import getPwInventory from "./modules/EarningHistory/reducers/getPwInventory";
import getSaleOrderById from "./modules/EarningHistory/reducers/getSaleOrderById";
import getTokenById from "./modules/EarningHistory/reducers/getTokenById";
import saleUserInventoriesByELounge from "./modules/Tracking/reducers/saleUserInventoriesByELounge";
import signUpCounts from "./modules/Tracking/reducers/signUpCounts";
import subscriberCounts from "./modules/Tracking/reducers/subscriberCounts";
import getAllCustomPackages from "./modules/PackageNew/reducers/getAllCustomPackages";
import getAllTransactionHistory from "./modules/EarningHistory/reducers/getAllTransactionHistory";
import getAllTransactionHistoryForManagement from "./modules/Tracking/reducers/getAllTransactionHistoryForManagement";
import createPackage from "./modules/Packages/reducers/createPackage";
import getAllTaget from "./modules/EarningHistory/reducers/getAllTaget";
import getSignUpCountsForLead from "./modules/Monitoring/reducers/getSignUpCountsForLead";
import getSubscriberCountsForLead from "./modules/Monitoring/reducers/getSubscriberCountsForLead";
import getVisitedSalesUserForLead from "./modules/LeadVisit/reducers/getVisitedSalesUserForLead";
import getAllSaleUserInventoriesForLead from "./modules/Monitoring/reducers/getAllSaleUserInventoriesForLead";
import addWithdrawRequestNotForSaleUser from "./modules/WalletNotForSaleUser/reducers/addWithdrawRequestNotForSaleUser";
import getAllBanksNotForSaleUser from "./modules/WalletNotForSaleUser/reducers/getAllBanksNotForSaleUser";
import getWalletBalanceNotForSaleUser from "./modules/WalletNotForSaleUser/reducers/getWalletBalanceNotForSaleUser";
import walletListNotForSaleUser from "./modules/WalletNotForSaleUser/reducers/walletListNotForSaleUser";
import getAllMyTransactionApi from "./modules/Tracking/reducers/getAllMyTransactionApi";
import getVisitedAgentUserForLead from "./modules/LeadVisit/reducers/getVisitedAgentUserForLead";
import getVisitedFreelancerUserForLead from "./modules/LeadVisit/reducers/getVisitedFreeLancerUserForLead";
import getLeadListForDropDown from "./modules/Tracking/reducers/getLeadListForDropDown";
import getAllAssignSaleUserByLeadIdForEloungeUsers from "./modules/Tracking/reducers/getAllAssignSaleUserByLeadIdForEloungeUsers";
import requirementForm from "./modules/MarketingRequirement/reducers/requirementForm";
import getRequirementForm from "./modules/MarketingRequirement/reducers/getRequirementForm";
import updateRequirementForm from "./modules/MarketingRequirement/reducers/updateRequirementForm";
import getAllRequirementForms from "./modules/MarketingRequirementManagement/reducers/getAllRequirementForms";
import getAllRequirementFormsForLead from "./modules/MarketingRequirementLead/reducers/getAllRequirementFormsForLead";
import getAllAssignedAgencies from "./modules/AssignedAgencies/reducers/getAllAssignedAgencies";
import getAllAssignedAgenciesLead from "./modules/AssignedAgencies/reducers/getAllAssignedAgenciesLead";
import getAllAssignedAgenciesManager from "./modules/AssignedAgencies/reducers/getAllAssignedAgenciesManager";

/**

* Branching reducers to use one reducer for many components
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    getAllAssignedAgencies,
    getAllAssignedAgenciesLead,
    getAllAssignedAgenciesManager,
    addWithdrawRequestNotForSaleUser,
    requirementForm,
    getRequirementForm,
    updateRequirementForm,
    getAllRequirementFormsForLead,
    getAllRequirementForms,
    getAllAssignSaleUserByLeadIdForEloungeUsers: getAllAssignSaleUserByLeadIdForEloungeUsers,
    getAllBanksNotForSaleUser,
    walletListNotForSaleUser,
    getWalletBalanceNotForSaleUser,
    getVisitedAgentUserForLead,
    getVisitedFreelancerUserForLead,
    getLeadListForDropDown: getLeadListForDropDown,
    createPackage,
    getPwInventory,
    getSaleOrderById,
    getTokenById,
    uploadAttachments,
    addNewVisit,
    editVisit,
    deleteVisit,
    getAllVisits,
    getAllSubscribers,
    getAllSignUps,
    getAllTransaction,
    userDetail,
    getSaleOrder,
    getSaleOrderGraphData,
    getSalesOrderAndCommisson,
    banks,
    withdrawRequest,
    walletBalance,
    walletList,
    ui: uiReducer,
    auth: authReducer,
    updateProfile: updateProfile,
    allPackages,
    subscriberCounts,
    getAllCustomPackages,
    discount,
    checkout,
    changePassword,
    forgotPasswordWithEmail,
    forgotPasswordOtpVerify,
    getAssignEloungeSaleUser,
    getAllTransactionHistory,
    saleUserInventoriesByELounge,
    getAllTaget,
    getSignUpCountsForLead,
    getSubscriberCountsForLead,
    getAllTransactionHistoryForManagement,
    getAllMyTransactionApi,
    getVisitedSalesUserForLead,
    getAllSaleUserInventoriesForLead,
    initval,
    signUpCounts,
    login,
    socmed,
    calendar,
    ecommerce,
    contact,
    chat,
    updatePassword: updatePassword,
    getPoolDivision,
    email,
    getAllEloungeVisitForManagement,
    taskboard,
    treeTableArrow: branchReducer(treeTable, "treeTableArrow"),
    treeTablePM: branchReducer(treeTable, "treeTablePM"),
    crudTableDemo: branchReducer(crudTable, "crudTableDemo"),
    crudTableForm,
    crudTbFrmDemo: branchReducer(crudTableForm, "crudTbFrmDemo"),
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
