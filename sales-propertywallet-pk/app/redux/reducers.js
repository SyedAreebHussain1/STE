/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { reducer as form } from "redux-form/immutable";
import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import history from "utils/history";

import languageProviderReducer from "containers/LanguageProvider/reducer";
import uiReducer from "./modules/ui";
import authReducer from "./modules/Auth/auth";
import allSubscribersReducer from "./modules/CurrentSubscriber/reducers/getAllSubscribers";
import graphCount from "./modules/Dashboard/reducers/counts";
import earningHistory from "./modules/Dashboard/reducers/earninghistory";
import allSessions from "./modules/Dashboard/reducers/allsessions";
import allPackages from "./modules/Packages/reducers/packages";
import suspendRequest from "./modules/Suspend/reducers/suspend";
import s3 from "./modules/Profile/reducers/s3";
import updatePassword from "./modules/Profile/reducers/updatepassword";
import updateProfile from "./modules/Profile/reducers/updateprofile";
import bookedSessions from "./modules/Dashboard/reducers/bookedsessions";
import addSession from "./modules/Dashboard/reducers/addsession";
import deleteSession from "./modules/Dashboard/reducers/deletesession";
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
import discount from "./modules/Packages/reducers/discount";
import checkout from "./modules/Packages/reducers/checkout";
import tourCheck from "./modules/Auth/reducers/tourCheck";
import getAllMilestonesAndCount from "./modules/Milestone/reducers/getAllMilestonesAndCount";
import assignMilestonesToFreelancer from "./modules/Milestone/reducers/assignMilestonesToFreelancer";
import getMilestonesCertificate from "./modules/Milestone/reducers/getMilestonesCertificate";
import forgotPasswordWithEmail from "./modules/ForgotPassword/reducers/forgotPasswordWithEmail";
import changePassword from "./modules/ForgotPassword/reducers/changePassword";
import forgotPasswordOtpVerify from "./modules/ForgotPassword/reducers/forgotPasswordOtpVerify";

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
    ui: uiReducer,
    auth: authReducer,
    subscribers: allSubscribersReducer,
    tourCheck: tourCheck,
    walletList: walletList,
    getAllMilestonesAndCount,
    assignMilestonesToFreelancer,
    getMilestonesCertificate,
    walletBalance: walletBalance,
    banks,
    userDetail,
    forgotPasswordWithEmail,
    forgotPasswordOtpVerify,
    changePassword,
    withdrawRequest: withdrawRequest,
    soldpackageGraph: graphCount,
    earningHistory: earningHistory,
    allSessions: allSessions,
    allPackages: allPackages,
    bookedSessions: bookedSessions,
    addSession: addSession,
    deleteSession: deleteSession,
    suspendRequest: suspendRequest,
    s3: s3,
    updatePassword: updatePassword,
    updateProfile: updateProfile,
    discount: discount,
    checkout: checkout,
    initval,
    login,
    socmed,
    calendar,
    ecommerce,
    contact,
    chat,
    email,
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
