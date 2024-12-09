// import { combineReducers } from "redux";
// import authReducer from "./auth";
// import postContact_Data from "./contactUs";
// import saleOrderReducer from "./saleOrder";
// import traficReducer from "./trafic";

// const rootReducer = combineReducers({
//   contact_us: postContact_Data,
//   auth: authReducer,
//   saleOrder: saleOrderReducer,
//   trafic: traficReducer
// });

// export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./auth";
import postContact_Data from "./contactUs";
import saleOrderReducer from "./saleOrder";
import traficReducer from "./trafic";
import getTeamDetailSlice from "../../components/AgencyCatalogue/redux/slice/MeetOurTeam/getTeamDetailSlice";
import getAnnouncementDetailSlice from "../../components/AgencyCatalogue/redux/slice/Announcements/getAnnouncementDetailSlice";
import getMeetingListSlice from "../../components/AgencyCatalogue/redux/slice/Appointments/getMeetingList";
import bookMeetingSlice from "../../components/AgencyCatalogue/redux/slice/Appointments/bookMeetingSlice";
import getInventoriesDetailsSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/getInventoriesDetailsSlice";
import getInventoryDetailsForPublicSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/getInventoryDetailsForPublicSlice";
import chatSlice from "../../components/AgencyCatalogue/redux/slice/Chat/chatSlice";
import initiateChatSlice from "../../components/AgencyCatalogue/redux/slice/Chat/initiateChatSlice";
import sendChatMessageSlice from "../../components/AgencyCatalogue/redux/slice/Chat/sendChatMessageSlice";
import getUserMessagesSlice from "../../components/AgencyCatalogue/redux/slice/Chat/getUserMessagesSlice";
import iamInterestedSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/iamInterested";
import createReviewForAgencySlice from "../../components/AgencyCatalogue/redux/slice/Testinomials/createReviewForAgencySlice";
import getReviewForAgencyByIdSlice from "../../components/AgencyCatalogue/redux/slice/Testinomials/getReviewForAgencyByIdSlice";
import createReviewSlice from "../../components/AgencyCatalogue/redux/slice/MeetOurTeam/createReviewSlice";
import getAgencyDetailsSlice from "../../components/AgencyCatalogue/redux/slice/Agency/getAgencyDetailsSlice";
import analyticClickSlice from "../../components/AgencyCatalogue/redux/slice/Analytic/analyticClickSlice";
import analyticViewSlice from "../../components/AgencyCatalogue/redux/slice/Analytic/analyticViewSlice";
import getUsersToChatSlice from "../../components/AgencyCatalogue/redux/slice/Chat/getUsersToChatSlice";
import isAgencyWithinRadiusSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/isAgencyWithinRadiusSlice";
import getProjectTypesSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/getProjectTypesSlice";
import getProjectSubTypesSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/getProjectSubTypesSlice";
import getLandAreaSlice from "../../components/AgencyCatalogue/redux/slice/Inventories/getLandAreaSlice";
import addLeadFormSlice from "../../components/AgencyCatalogue/redux/slice/Agency/addLeadFormSlice";
import checkout from "../reducer/PackageReducers/checkout";
import allPackages from "../reducer/PackageReducers/packages";
import createPackage from "../reducer/PackageReducers/createPackage";
import discount from "../reducer/PackageReducers/discount";
import getAllCustomPackages from "../reducer/PackageReducers/getAllCustomPackages";

const rootReducer = combineReducers({
  contact_us: postContact_Data,
  auth: authReducer,
  saleOrder: saleOrderReducer,
  trafic: traficReducer,
  getTeamDetail: getTeamDetailSlice,
  getAnnouncementDetail: getAnnouncementDetailSlice,
  getMeetingList: getMeetingListSlice,
  bookMeeting: bookMeetingSlice,
  getInventoriesDetail: getInventoriesDetailsSlice,
  getInventoryDetailsForPublic: getInventoryDetailsForPublicSlice,
  chat: chatSlice,
  initiateChat: initiateChatSlice,
  sendChatMessage: sendChatMessageSlice,
  getUserMessages: getUserMessagesSlice,
  iamInterested: iamInterestedSlice,
  createReviewForAgency: createReviewForAgencySlice,
  getReviewForAgencyById: getReviewForAgencyByIdSlice,
  createReview: createReviewSlice,
  getAgencyDetails: getAgencyDetailsSlice,
  analyticClick: analyticClickSlice,
  analyticView: analyticViewSlice,
  getUsersToChat: getUsersToChatSlice,
  isAgencyWithinRadius: isAgencyWithinRadiusSlice,
  getProjectTypes: getProjectTypesSlice,
  getProjectSubTypes: getProjectSubTypesSlice,
  getLandArea: getLandAreaSlice,
  addLeadForm: addLeadFormSlice,
  allPackages,
  discount,
  checkout,
  createPackage,
  getAllCustomPackages,
});

export default rootReducer;
