import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth/authSlice";
import ForgetPasswordEmailSlice from "./slices/ForgetPassword/ForgetPasswordEmailSlice";
import ForgetPasswordChangePasswordSlice from "./slices/ForgetPassword/ForgetPasswordChangePasswordSlice";
import ForgetPasswordOTPSlice from "./slices/ForgetPassword/ForgetPasswordOTPSlice";
import createUserSlice from "./slices/auth/createUserSlice";
import resendOtpSlice from "./slices/auth/resendOtpSlice";
import verifyUserCreateOtpSlice from "./slices/auth/verifyUserCreateOtpSlice";
import createAgencySlice from "./slices/auth/createAgencySlice";
import getAgencyByAgencyCodeSlice from "./slices/auth/getAgencyByAgencyCodeSlice";
import joinAgencyByAgencyCodeSlice from "./slices/auth/joinAgencyByAgencyCodeSlice";
import getAllLeadSlice from "./slices/LeadManagement/getAllLeadSlice";
import getAllLeadsFollowUpSlice from "./slices/LeadManagement/getAllLeadsFollowUpSlice";
import getLeadDataByIdSlice from "./slices/LeadManagement/getLeadDataByIdSlice";
import deleteLeadInventorySlice from "./slices/LeadManagement/deleteLeadInventorySlice";
import updateLeadStatusSlice from "./slices/LeadManagement/updateLeadStatusSlice";
import pwpGetAllProjectListSlice from "./slices/LeadManagement/pwpGetAllProjectListSlice";
import pwpGetAllProductListSlice from "./slices/LeadManagement/pwpGetAllProductListSlice";
import getAllProjectInventorySlice from "./slices/LeadManagement/getAllProjectInventorySlice";
import getEnumsforleadInvntoryModuleSlice from "./slices/LeadManagement/getEnumsforleadInvntoryModuleSlice";
import getAvailableInventoriesByProjectIdSlice from "./slices/LeadManagement/getAvailableInventoriesByProjectIdSlice";
import getAllStaffSlicer from "./slices/StaffManagement/getAllStaffSlicer";
import CreateStaffSlicer from "./slices/StaffManagement/CreateStaffSlicer";
import getOnlyStaffManagerSlicer from "./slices/StaffManagement/getOnlyStaffManagerSlicer";
import deactiveUserSlicer from "./slices/StaffManagement/deactiveUserSlicer";
import activeUserSlicer from "./slices/StaffManagement/activeUserSlicer";
import deleteStaffSlicer from "./slices/StaffManagement/deleteStaffSlicer";
import getStaffReviewSlicer from "./slices/StaffManagement/getStaffReviewSlicer";
import getAgencyCodeSlicer from "./slices/StaffManagement/getAgencyCodeSlicer";
import getAgencyStaffRequestListSlicer from "./slices/StaffManagement/getAgencyStaffRequestListSlicer";
import rejectStaffRequestSlicer from "./slices/StaffManagement/rejectStaffRequestSlicer";
import acceptStaffRequestSlicer from "./slices/StaffManagement/acceptStaffRequestSlicer";
import deletemultipleStaffSlicer from "./slices/StaffManagement/deletemultipleStaffSlicer";
import getBookingSlotsSlicer from "./slices/StaffManagement/getBookingSlotsSlicer";
import getProjectInventorySlice from "./slices/InventoryManagement/getProjectInventorySlice";
import getPropertiesInventorySlice from "./slices/InventoryManagement/getPropertiesInventorySlice";
import getProjectDetailsSlice from "./slices/InventoryManagement/getProjectDetailsSlice";
import getPropertyDetailsSlice from "./slices/InventoryManagement/getPropertyDetailsSlice";
import getAssignLeadForInventorySlice from "./slices/InventoryManagement/getAssignLeadForInventorySlice";
import getProjectTypeSlice from "./slices/InventoryManagement/getProjectTypeSlice";
import getProjectSubTypeSlice from "./slices/InventoryManagement/getProjectSubTypeSlice";
import getLandAreaSlice from "./slices/InventoryManagement/getLandAreaSlice";

import addNewLeadSlice from "./slices/LeadManagement/addNewLeadSlice";
import getLeadsAssignUsersOrnotAssignUsersSlice from "./slices/LeadManagement/getLeadsAssignUsersOrnotAssignUsersSlice";
import getLeadlogSlice from "./slices/LeadManagement/getLeadlogSlice";
import addNewLeadlogNoteSlice from "./slices/LeadManagement/addNewLeadlogNoteSlice";
import assignUserNewSlice from "./slices/LeadManagement/assignUserNewSlice";
import addNewLeadFollowUpSlice from "./slices/LeadManagement/addNewLeadFollowUpSlice";
import updateLeadDataByIdSlice from "./slices/LeadManagement/updateLeadDataByIdSlice";
import getUserWalletSlice from "./slices/Wallet/getUserWalletSlice";
import getProfileSlice from "./slices/auth/getProfileSlice";
import addNewWithdrawRequestSlice from "./slices/Wallet/addNewWithdrawRequestSlice";
import paymentByPayMobSlice from "./slices/Wallet/paymentByPayMobSlice";
import paymentByBlinqSlice from "./slices/Wallet/paymentByBlinqSlice";
import getWalletWithdrawRequestsSlice from "./slices/Wallet/getWalletWithdrawRequestsSlice";
import getWalletTransactionHistorySlice from "./slices/Wallet/getWalletTransactionHistorySlice";
import addPaymobCardSlice from "./slices/Wallet/addPaymobCardSlice";
import uploadProjectImageSlice from "./slices/InventoryManagement/uploadProjectImageSlice";
import getProjectSubTypeByProjectTypeIDSlice from "./slices/InventoryManagement/getProjectSubTypeByProjectTypeIDSlice";
import getProjectSubTypeNameByIDSlice from "./slices/InventoryManagement/getProjectSubTypeNameByIDSlice";
import getUtilitesSlice from "./slices/InventoryManagement/getUtilitesSlice";
import getFacingSlice from "./slices/InventoryManagement/getFacingSlice";
import createProjectSlice from "./slices/InventoryManagement/createProjectSlice";
import getViewUserSlice from "./slices/InventoryManagement/getViewUserSlice";
import getProjectForSelectFieldSlice from "./slices/InventoryManagement/getProjectForSelectFieldSlice";
import createInventoryOfExistingProjectSlice from "./slices/InventoryManagement/createInventoryOfExistingProjectSlice";
import addNewLeadlogSlice from "./slices/LeadManagement/addNewLeadlogSlice";
import getAgentCalendarSlotListSlice from "./slices/LeadManagement/getAgentCalendarSlotListSlice";
import getInventoryForEditSlice from "./slices/InventoryManagement/getInventoryForEditSlice";
import deletePhotoInInventorySlice from "./slices/InventoryManagement/deletePhotoInInventorySlice";
import editphotoForInventorySlice from "./slices/InventoryManagement/editphotoForInventorySlice";
import getInventoryViewUserSlice from "./slices/InventoryManagement/getInventoryViewUserSlice";
import EditFeatureSlice from "./slices/InventoryManagement/EditFeatureSlice";
import editFacingSlice from "./slices/InventoryManagement/editFacingSlice";
import editUtiliteSlice from "./slices/InventoryManagement/editUtiliteSlice";
import createPublicCalendarSlotListSlice from "./slices/LeadManagement/createPublicCalendarSlotListSlice";
import getAgentCalendarSlotRequestSlice from "./slices/LeadManagement/getAgentCalendarSlotRequestSlice";
import getAgencyDetailsSlice from "./slices/WebEstate/getAgencyDetailsSlice";
import editAgencyProfileSlice from "./slices/WebEstate/editAgencyProfileSlice";
import EditWebsiteSlice from "./slices/WebEstate/EditWebsiteSlice";
import getWebsiteSlice from "./slices/WebEstate/getWebsiteSlice";
import getWebEstateAnalyticsSlice from "./slices/WebEstate/getWebEstateAnalyticsSlice";
import getAllAgencyReviewsSlice from "./slices/WebEstate/getAllAgencyReviewsSlice";
import getAllAgentReviewsSlice from "./slices/WebEstate/getAllAgentReviewsSlice";
import addAnnouncementsSlice from "./slices/WebEstate/addAnnouncementsSlice";
import editAnnouncementsSlice from "./slices/WebEstate/editAnnouncementsSlice";
import deleteAnnouncementsSlice from "./slices/WebEstate/deleteAnnouncementsSlice";
import getAllAnnouncementsSlice from "./slices/WebEstate/getAllAnnouncementsSlice";
import uploadLeadExcelSlice from "./slices/LeadManagement/uploadLeadExcelSlice";
import getAgentCalendarSlotListForBookedSlice from "./slices/LeadManagement/getAgentCalendarSlotListForBookedSlice";
import slotRescheduleSlice from "./slices/LeadManagement/slotRescheduleSlice";
import updateUserAvailabilitySlice from "./slices/LeadManagement/updateUserAvailabilitySlice";
import agencyReviewVisibilitySlice from "./slices/WebEstate/agencyReviewVisibilitySlice";
import leadRemoveLeadPermissionSlice from "./slices/LeadManagement/leadRemoveLeadPermissionSlice";
import assignInventorySlice from "./slices/LeadManagement/assignInventorySlice";
import getPWPlotInventoryByProjectIdSlice from "./slices/LeadManagement/getPWPlotInventoryByProjectIdSlice";
import getInventoryByProjectSlice from "./slices/LeadManagement/getInventoryByProjectSlice";
import getTaskSlice from "./slices/TaskOverview/getTaskSlice";
import getAllTasksSlice from "./slices/TaskOverview/getAllTasksSlice";
import deleteTaskSlice from "./slices/TaskOverview/deleteTaskSlice";
import getAllCampaignsSlice from "./slices/LeadManagement/getAllCampaignsSlice";
import getCampaignsByAgencyIdSlice from "./slices/TaskOverview/getCampaignsByAgencyIdSlice";
import getTeamMemberSlice from "./slices/TaskOverview/getTeamMemberSlice";
import getProfileStaffListSlice from "./slices/TaskOverview/getProfileStaffListSlice";
import getLeadsByCampaignIdSlice from "./slices/TaskOverview/getLeadsByCampaignIdSlice";
import CreateTaskSlice from "./slices/TaskOverview/createTaskSlice";
import getTaskByEnumSlice from "./slices/TaskOverview/getTaskByEnumSlice";
import updateTaskSlice from "./slices/TaskOverview/updateTaskSlice";
import createNewCampaignSlice from "./slices/Campaigns/createNewCampaignSlice";
import getAllAgencyCampaignSlice from "./slices/Campaigns/getAllAgencyCampaignSlice";
import getLeadByCampaignIdSlice from "./slices/Campaigns/getLeadByCampaignIdSlice";
import SelectCampaignSlice from "./slices/FacebookCampaign/SelectCampaignSlice";
import getFacebookAddSlice from "./slices/FacebookCampaign/getFacebookAddSlice";
import getFacebookAddSetSlice from "./slices/FacebookCampaign/getFacebookAddSetSlice";
import patchCampaignNameSlice from "./slices/Campaigns/patchCampaignNameSlice";
import uploadExcelForExistingCampaignSlice from "./slices/Campaigns/uploadExcelForExistingCampaignSlice";
import uploadExcelwithCampaignNameSlice from "./slices/Campaigns/uploadExcelwithCampaignNameSlice";
import getLeadStatsSlice from "./slices/Campaigns/getLeadStatsSlice";
import getLeadStatsForChartSlice from "./slices/Campaigns/getLeadStatsForChartSlice";
import getTotalLeadAndLeadSourceByCampaignIdSlice from "./slices/Campaigns/getTotalLeadAndLeadSourceByCampaignIdSlice";
import getLeadStatusByCampaignIdSlice from "./slices/Campaigns/getLeadStatusByCampaignIdSlice";
import getCampaignsIdSlice from "./slices/TaskOverview/getCampaignsIdSlice";
import getStagesByCampaignIdSlice from "./slices/Campaigns/getStagesByCampaignIdSlice";
import getPipelinesStagesLeadSlice from "./slices/Campaigns/getPipelinesStagesLeadSlice";
import getTotalLeadLogsSlice from "./slices/Campaigns/getTotalLeadLogsByAgency";
import editFinalLeadSlice from "./slices/Campaigns/editFinalLeadSlice";
import viewTaskDetailsSlice from "./slices/TaskOverview/viewTaskDetailsSlice";
import addPipeLineStageSlice from "./slices/Campaigns/addPipeLineStageSlice";
import editPipelineStageSlice from "./slices/Campaigns/editPipelineStageSlice";
import createFinalLeadSlice from "./slices/Campaigns/createFinalLeadSlice";
import MarksAsCompleteSlice from "./slices/TaskOverview/MarksAsCompleteSlice";
import getStaffByManagerIDSlice from "./slices/StaffManagement/getStaffByManagerIDSlice";
import discountSlice from "./slices/PackagesAgency/discountSlice";
import createPackageSlice from "./slices/PackagesAgency/createPackageSlice";
import getAllCustomPackagesSlice from "./slices/PackagesAgency/getAllCustomPackagesSlice";
import checkoutSlice from "./slices/PackagesAgency/checkoutSlice";
import packagesSlice from "./slices/PackagesAgency/packagesSlice";
import cancelPwSubPackageSlice from "./slices/PackagesAgency/cancelPwSubPackageSlice";
import updateProfileSlice from "./slices/auth/updateProfileSlice";

const rootSlices = combineReducers({
  user: authSlice,
  ForgetPasswordEmail: ForgetPasswordEmailSlice,
  ForgetPasswordChangePassword: ForgetPasswordChangePasswordSlice,
  ForgetPasswordOTP: ForgetPasswordOTPSlice,
  createUser: createUserSlice,
  resendOtp: resendOtpSlice,
  verifyUserCreateOtp: verifyUserCreateOtpSlice,
  createAgency: createAgencySlice,
  getAgencyByAgencyCode: getAgencyByAgencyCodeSlice,
  joinAgencyByAgencyCode: joinAgencyByAgencyCodeSlice,
  getAllLead: getAllLeadSlice,
  getAllLeadsFollowUp: getAllLeadsFollowUpSlice,
  getLeadDataById: getLeadDataByIdSlice,
  deleteLeadInventory: deleteLeadInventorySlice,
  updateLeadStatus: updateLeadStatusSlice,
  pwpGetAllProjectList: pwpGetAllProjectListSlice,
  pwpGetAllProductList: pwpGetAllProductListSlice,
  getAllProjectInventory: getAllProjectInventorySlice,
  getEnumsforleadInvntoryModule: getEnumsforleadInvntoryModuleSlice,
  getAvailableInventoriesByProjectId: getAvailableInventoriesByProjectIdSlice,
  getAllStaff: getAllStaffSlicer,
  CreateStaff: CreateStaffSlicer,
  getOnlyStaffManager: getOnlyStaffManagerSlicer,
  deactiveUser: deactiveUserSlicer,
  activeUser: activeUserSlicer,
  deleteStaff: deleteStaffSlicer,
  getStaffReview: getStaffReviewSlicer,
  getAgencyCode: getAgencyCodeSlicer,
  getAgencyStaffRequestList: getAgencyStaffRequestListSlicer,
  rejectStaffRequest: rejectStaffRequestSlicer,
  acceptStaffRequest: acceptStaffRequestSlicer,
  deletemultipleStaff: deletemultipleStaffSlicer,
  getBookingSlots: getBookingSlotsSlicer,
  getProjectInventory: getProjectInventorySlice,
  getPropertiesInventory: getPropertiesInventorySlice,
  getProjectDetails: getProjectDetailsSlice,
  getPropertyDetails: getPropertyDetailsSlice,
  getAssignLeadForInventory: getAssignLeadForInventorySlice,
  addNewLead: addNewLeadSlice,
  getLeadsAssignUsersOrnotAssignUsers: getLeadsAssignUsersOrnotAssignUsersSlice,
  getLeadlog: getLeadlogSlice,
  addNewLeadlogNote: addNewLeadlogNoteSlice,
  assignUserNew: assignUserNewSlice,
  addNewLeadFollowUp: addNewLeadFollowUpSlice,
  updateLeadDataById: updateLeadDataByIdSlice,
  getUserWallet: getUserWalletSlice,
  getProfile: getProfileSlice,
  addNewWithdrawRequest: addNewWithdrawRequestSlice,
  paymentByPayMob: paymentByPayMobSlice,
  paymentByBlinq: paymentByBlinqSlice,
  getWalletWithdrawRequests: getWalletWithdrawRequestsSlice,
  getWalletTransactionHistory: getWalletTransactionHistorySlice,
  addPaymobCard: addPaymobCardSlice,
  getLandArea: getLandAreaSlice,
  getProjectType: getProjectTypeSlice,
  getProjectSubType: getProjectSubTypeSlice,
  uploadProjectImage: uploadProjectImageSlice,
  getProjectSubTypeByProjectTypeID: getProjectSubTypeByProjectTypeIDSlice,
  getProjectSubTypeNameByID: getProjectSubTypeNameByIDSlice,
  getUtilites: getUtilitesSlice,
  getFacing: getFacingSlice,
  createProject: createProjectSlice,
  getViewUser: getViewUserSlice,
  getProjectForSelectField: getProjectForSelectFieldSlice,
  getInventoryForEdit: getInventoryForEditSlice,
  createInventoryOfExistingProject: createInventoryOfExistingProjectSlice,
  addNewLeadlog: addNewLeadlogSlice,
  getAgentCalendarSlotList: getAgentCalendarSlotListSlice,
  deletePhotoInInventory: deletePhotoInInventorySlice,
  editphotoForInventory: editphotoForInventorySlice,
  getInventoryViewUser: getInventoryViewUserSlice,
  editFeature: EditFeatureSlice,
  editFacing: editFacingSlice,
  editUtilite: editUtiliteSlice,
  createPublicCalendarSlotList: createPublicCalendarSlotListSlice,
  getAgentCalendarSlotRequest: getAgentCalendarSlotRequestSlice,
  getAgencyDetails: getAgencyDetailsSlice,
  editAgencyProfile: editAgencyProfileSlice,
  EditWebsite: EditWebsiteSlice,
  getWebsite: getWebsiteSlice,
  getWebEstateAnalytics: getWebEstateAnalyticsSlice,
  getAllAgencyReviews: getAllAgencyReviewsSlice,
  getAllAgentReviews: getAllAgentReviewsSlice,
  addAnnouncements: addAnnouncementsSlice,
  editAnnouncements: editAnnouncementsSlice,
  deleteAnnouncements: deleteAnnouncementsSlice,
  getAllAnnouncements: getAllAnnouncementsSlice,
  uploadLeadExcel: uploadLeadExcelSlice,
  getAgentCalendarSlotListForBooked: getAgentCalendarSlotListForBookedSlice,
  slotReschedule: slotRescheduleSlice,
  updateUserAvailability: updateUserAvailabilitySlice,
  agencyReviewVisibility: agencyReviewVisibilitySlice,
  leadRemoveLeadPermission: leadRemoveLeadPermissionSlice,
  assignInventory: assignInventorySlice,
  getPWPlotInventoryByProjectId: getPWPlotInventoryByProjectIdSlice,
  getInventoryByProject: getInventoryByProjectSlice,
  getTask: getTaskSlice,
  getAllTasks: getAllTasksSlice,
  deleteTask: deleteTaskSlice,
  getAllCampaigns: getAllCampaignsSlice,
  getCampaignsByAgencyId: getCampaignsByAgencyIdSlice,
  getTeamMember: getTeamMemberSlice,
  getProfileStaffList: getProfileStaffListSlice,
  getLeadsByCampaignId: getLeadsByCampaignIdSlice,
  createTask: CreateTaskSlice,
  getTaskByEnum: getTaskByEnumSlice,
  updateTask: updateTaskSlice,
  createNewCampaign: createNewCampaignSlice,
  getAllAgencyCampaign: getAllAgencyCampaignSlice,
  getLeadByCampaignId: getLeadByCampaignIdSlice,
  SelectCampaign: SelectCampaignSlice,
  getFacebookAdd: getFacebookAddSlice,
  getFacebookAddSet: getFacebookAddSetSlice,
  patchCampaignName: patchCampaignNameSlice,
  getCampaignsId: getCampaignsIdSlice,
  getStagesByCampaignId: getStagesByCampaignIdSlice,
  getPipelinesStagesLead: getPipelinesStagesLeadSlice,
  uploadExcelForExistingCampaign: uploadExcelForExistingCampaignSlice,
  uploadExcelwithCampaignName: uploadExcelwithCampaignNameSlice,
  getLeadStats: getLeadStatsSlice,
  getLeadStatsForChart: getLeadStatsForChartSlice,
  getTotalLeadAndLeadSourceByCampaignId:
    getTotalLeadAndLeadSourceByCampaignIdSlice,
  getLeadStatusByCampaignId: getLeadStatusByCampaignIdSlice,
  getTotalLeadLogs: getTotalLeadLogsSlice,
  editFinalLead: editFinalLeadSlice,
  viewTaskDetails: viewTaskDetailsSlice,
  addPipeLineStage: addPipeLineStageSlice,
  editPipelineStage: editPipelineStageSlice,
  createFinalLead: createFinalLeadSlice,
  MarksAsComplete: MarksAsCompleteSlice,
  getStaffByManagerID: getStaffByManagerIDSlice,
  discount: discountSlice,
  createPackage: createPackageSlice,
  getAllCustomPackages: getAllCustomPackagesSlice,
  checkout: checkoutSlice,
  allPackages: packagesSlice,
  cancelPwSubPackage: cancelPwSubPackageSlice,
  updateProfile: updateProfileSlice,
});
export const store: Store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  // non serial data issue fixed
  reducer: rootSlices,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
