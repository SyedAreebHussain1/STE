import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AllPropertiesCountSlice from './slices/Dashboard/AllPropertiesCountSlice'
import AllPropertiesLastDayCountSlice from './slices/Dashboard/AllPropertiesLastDayCountSlice'

import SoldPropertiesCountSlice from './slices/Dashboard/SoldPropertiesCountSlice'
import SoldInvnetoryLastDayCount from './slices/Dashboard/SoldInvnetoryLastDayCount'
import LoginSlice from './slices/Auth/LoginSlice'
import PostRolesSlice from './slices/Settings/Roles/PostRolesSlice'
import GetRolesSlice from './slices/Settings/Roles/GetRolesSlice'
import UpdateRolesSlice from './slices/Settings/Roles/UpdateRolesSlice'
import AddUserSlice from './slices/Settings/Roles/AddUserSlice'
import getRoutesSlice from './slices/GetRoutesSlice'
import GetAssignAppModuleSlice from './slices/Settings/Roles/GetAssignAppModuleSlice'
import AssignModuleRoleSlice from './slices/Settings/Roles/AssignModuleRoleSlice'
import UsersInfoMonthlySlice from './slices/Dashboard/UsersInfoMonthlySlice'

import GetRegisteredUsersSlice from './slices/Traffic/GetRegisteredUsersSlice'
import AgenciesCountSlice from './slices/Dashboard/AgenciesCountSlice'
import GetPropertiesOverviewSlice from './slices/Dashboard/GetPropertiesOverviewSlice'

import GetTotalSaleOrderSlice from './slices/Traffic/GetTotalSaleOrderSlice'
import GetRevenueSlice from './slices/Traffic/GetRevenueSlice'

import GetNoOfRegisteredStaffSlice from './slices/Traffic/GetNoOfRegisteredStaffSlice'
import GetNoOfUnitsSlice from './slices/Traffic/GetNoOfUnitsSlice'
import GetNoOfDownloadsSlice from './slices/Traffic/GetNoOfDownloadsSlice'
import createProjectStepOneSlice from './slices/Project/createProjectStepOneSlice'
import createProjectStepTwoSlice from './slices/Project/createProjectStepTwoSlice'
import updateProjectStepOneSlice from './slices/Project/updateProjectStepOneSlice'
import updateProjectStepTwoSlice from './slices/Project/updateProjectStepTwoSlice'
import createProjectStepThreeSlice from './slices/Project/createProjectStepThreeSlice'
import updateProjectStepThreeSlice from './slices/Project/updateProjectStepThreeSlice'

import UploadAdvertisementSlice from './slices/Advertisement/Promotion/UploadAdvertisementSlice'
import CreateAdvertisementSlice from './slices/Advertisement/Promotion/CreateAdvertisementSlice'
import ModuleListSlice from './slices/Advertisement/Promotion/ModuleListSlice'
import GetAllPromotionsSlice from './slices/Advertisement/Promotion/GetAllPromotionsSlice'
import DeleteAdvertisementSlice from './slices/Advertisement/Promotion/DeleteAdvertisementSlice'
import getProjectSubTypesSlice from './slices/SingleProperty/getProjectSubTypesSlice'
import getProjectTypesSlice from './slices/SingleProperty/getProjectTypesSlice'
import getAllProjectsSlice from './slices/Project/getAllProjectsSlice'
import getLandAreaSlice from './slices/SingleProperty/getLandAreaSlice'
import createProjectInventoryStepOneSlice from './slices/Project/ProjectInventory/createProjectInventoryStepOneSlice'
import updateProjectInventoryStepOneSlice from './slices/Project/ProjectInventory/updateProjectInventoryStepOneSlice'
import createProjectInventoryStepTwoSlice from './slices/Project/ProjectInventory/createProjectInventoryStepTwoSlice'
import updateProjectInventoryStepTwoSlice from './slices/Project/ProjectInventory/updateProjectInventoryStepTwoSlice'

import inventoriesByProjectSlice from './slices/Project/inventoriesByProjectSlice'
import createProjectInventoryUtilsSlice from './slices/Project/ProjectInventory/createProjectInventoryUtilsSlice'
import getProjectInventoryUtilsSlice from './slices/Project/ProjectInventory/getProjectInventoryUtilsSlice'
import deleteProjectInventoryUtilsSlice from './slices/Project/ProjectInventory/deleteProjectInventoryUtilsSlice'
import getProjectInventoryFacingSlice from './slices/Project/ProjectInventory/getProjectInventoryFacingSlice'
import createProjectInventoryFacingSlice from './slices/Project/ProjectInventory/createProjectInventoryFacingSlice'
import deleteProjectInventoryFacingSlice from './slices/Project/ProjectInventory/deleteProjectInventoryFacingSlice'
import getCrmRequestsSlice from './slices/CrmRequests/getCrmRequestsSlice'
import updateCrmRequestsSlice from './slices/CrmRequests/updateCrmRequestsSlice'
import createPropertyWalletProductStepOneSlice from './slices/SingleProperty/createPropertyWalletProductStepOneSlice'
import updatePropertyWalletProductStepOneSlice from './slices/SingleProperty/updatePropertyWalletProductStepOneSlice'
import createPropertyWalletProductStepTwoSlice from './slices/SingleProperty/createPropertyWalletProductStepTwoSlice'
import updatePropertyWalletProductStepTwoSlice from './slices/SingleProperty/updatePropertyWalletProductStepTwoSlice'
import createPlotSlice from './slices/Project/ProjectInventory/createPlotSlice'
import getAllPlotsSlice from './slices/Project/ProjectInventory/getAllPlotsSlice'
import deletePlotSlice from './slices/Project/ProjectInventory/deletePlotSlice'
import uploadExcelSheetSlice from './slices/Project/ProjectInventory/uploadExcelSheetSlice'
import getAllProductPlotSlice from './slices/SingleProperty/getAllProductPlotSlice'
import excelProductUploadSlice from './slices/SingleProperty/excelProductUploadSlice'
import deleteProductPlotSlice from './slices/SingleProperty/deleteProductPlotSlice'
import createProductPlotSlice from './slices/SingleProperty/createProductPlotSlice'
import createPropertyWalletInventoryStep3SaveTempleteSlice from './slices/Project/ProjectInventory/createPropertyWalletInventoryStep3SaveTempleteSlice'
import getPropertyWalletUtilSlice from './slices/SingleProperty/getPropertyWalletUtilSlice'
import createPropertyWalletUtilSlice from './slices/SingleProperty/createPropertyWalletUtilSlice'
import deletePropertyWalletUtilSlice from './slices/SingleProperty/deletePropertyWalletUtilSlice'
import updatePropertyWalletInventoryStep3CashPlanSlice from './slices/Project/ProjectInventory/updatePropertyWalletInventoryStep3CashPlanSlice'
import getAllPWInstallmentPaymentPlanSlice from './slices/Project/ProjectInventory/getAllPWInstallmentPaymentPlanSlice'
import createPropertyWalletInventoryStep3CashPlanSlice from './slices/Project/ProjectInventory/createPropertyWalletInventoryStep3CashPlanSlice'
import createPropertyWalletProductStep3CashPlanSlice from './slices/SingleProperty/createPropertyWalletProductStep3CashPlanSlice'
import createPropertyWalletProductStep3SaveTempleteSlice from './slices/SingleProperty/createPropertyWalletProductStep3SaveTempleteSlice'
import getAllPWProductInstallmentPaymentPlanSlice from './slices/SingleProperty/getAllPWProductInstallmentPaymentPlanSlice'
import updatePropertyWalletProductStep3CashPlanSlice from './slices/SingleProperty/updatePropertyWalletProductStep3CashPlanSlice'
import updatePropertyWalletProductStep3TempleteSlice from './slices/SingleProperty/updatePropertyWalletProductStep3TempleteSlice'
import updatePropertyWalletInventoryStep3TempleteSlice from './slices/Project/ProjectInventory/updatePropertyWalletInventoryStep3TempleteSlice'
import getAllProductListSlice from './slices/SingleProperty/getAllProductListSlice'
import getProjectInventoryStepOneSlice from './slices/Project/ProjectInventory/getProjectInventoryStepOneSlice'
import getInventoryDetailStepTwoSlice from './slices/Project/getInventoryDetailStepTwoSlice'

import deleteProjectPhotoSlice from './slices/Project/deleteProjectPhotoSlice'
import getProjectDetailsStepTwoSlice from './slices/Project/getProjectDetailsStepTwoSlice'
import createHotListingSlice from './slices/Advertisement/HotListing/createHotListingSlice'
import createStepTwoImagesSlice from './slices/SingleProperty/createStepTwoImagesSlice'
import deleteStepTwoImagesSlice from './slices/SingleProperty/deleteStepTwoImagesSlice'
import getStepTwoImagesSlice from './slices/SingleProperty/getStepTwoImagesSlice'
import updateStepTwoImagesSlice from './slices/SingleProperty/updateStepTwoImagesSlice'
import getAllHotListingSlice from './slices/Advertisement/HotListing/getAllHotListingSlice'
import getPropertyWalletInventoryStep3CashPlanSlice from './slices/Project/ProjectInventory/getPropertyWalletInventoryStep3CashPlanSlice'
import getProductDetailForStep1Slice from './slices/SingleProperty/getProductDetailForStep1Slice'
import getProductDetailForStep3FeaturesSlice from './slices/SingleProperty/getProductDetailForStep3FeaturesSlice'
import getProductDetailForStep4CashPlanSlice from './slices/SingleProperty/getProductDetailForStep4CashPlanSlice'
import getAllQueriesSlice from './slices/Support/Queries/getAllQueriesSlice'
import getAllUnverifiedUsersSlice from './slices/Support/UnverifiedUsers/getAllUnverifiedUsersSlice'
import getOnetHotListingSlice from './slices/Advertisement/HotListing/getOnetHotListingSlice'
import deleteHotListingSlice from './slices/Advertisement/HotListing/deleteHotListingSlice'
import getAllHotListingConditionalSlice from './slices/Advertisement/HotListing/getAllHotListingConditionalSlice'
import updateHotListingSlice from './slices/Advertisement/HotListing/updateHotListingSlice'
import generatePlotDetailUpdateExelSlice from './slices/Project/ProjectInventory/GeneratePlotDetailUpdateExelSlice'
import uploadExcelForUpdateSlice from './slices/Project/ProjectInventory/uploadExcelForUpdateSlice'
import createProductFacingSlice from './slices/SingleProperty/createProductFacingSlice'
import getProductFacingSlice from './slices/SingleProperty/getProductFacingSlice'
import deleteProductFacingSlice from './slices/SingleProperty/deleteProductFacingSlice'
import getAllAppUsersSlice from './slices/AppUsers/getAllAppUsersSlice'
import getAuthUserSlice from './slices/AppUsers/getAuthUserSlice'
import getUserManagementListSlice from './slices/Settings/UserManagement/getUserManagementListSlice'
import editUsersRoleSlice from './slices/Settings/UserManagement/editUsersRoleSlice'
import getReferralSlice from './slices/Refeerals/getReferralSlice'
import isAgencyWithinRadiusSlice from './slices/Dashboard/isAgencyWithinRadiusSlice'
import AddInvestors from './slices/Investors/AddInvestors'
import getInvestors from './slices/Investors/getInvestors'
import getAllOwners from './slices/Investors/getAllOwners'
import getWithdrawRequestsSlice from './slices/WithdrawRequests/getWithdrawRequestsSlice'
import updateWithdrawRequestsSlice from './slices/WithdrawRequests/updateWithdrawRequestsSlice'
import getPaymentTokenRequestsSlice from './slices/Payment/Token/getPaymentTokenRequestsSlice'
import tokenUpdateExpirySlice from './slices/Payment/Token/tokenUpdateExpirySlice'
import getPWPAdminPaymentAssistanceRequestSlice from './slices/Support/PaymentRequest/getPWPAdminPaymentAssistanceRequestSlice'
import getPWIAdminPaymentAssistanceRequestSlice from './slices/Support/PaymentRequest/getPWIAdminPaymentAssistanceRequestSlice'
import getAllSupportPaymentRequestsSlice from './slices/Support/PaymentRequest/getAllSupportPaymentRequestsSlice'
import getOnlineUsersSlice from './slices/OnlineUsers/getOnlineUsersSlice'
import uploadTemplatePdfSlice from './slices/Project/ProjectInventory/uploadTemplatePdfSlice'
import getProjectStepOneSlice from './slices/Project/getProjectStepOneSlice'
import getProjectStepThreeSlice from './slices/Project/getProjectStepThreeSlice'
import getBankRequestSlice from './slices/OnlineUsers/getBankRequestSlice'
import getAllCommissionRequestSlice from './slices/CommissionRequest/getAllCommissionRequestSlice'
import ApproveOrRejectSlice from './slices/CommissionRequest/ApproveOrRejectSlice'
import getProjectSaleOrderSlice from './slices/SalesOrder/getProjectSaleOrderSlice'
import getProductSaleOrderSlice from './slices/SalesOrder/getProductSaleOrderSlice'
import getAllLeadsForAdminSlice from './slices/Leads/getAllLeadsForAdminSlice'
import createManualNotificationSlice from './slices/Advertisement/Notification/createManualNotificationSlice'
import getAllManualNotificationSlice from './slices/Advertisement/Notification/getAllManualNotificationSlice'
import updateManualNotificationSlice from './slices/Advertisement/Notification/updateManualNotificationSlice'
import deleteManualNotificationSlice from './slices/Advertisement/Notification/deleteManualNotificationSlice'
import mannualPushNotificationSlice from './slices/Advertisement/Notification/mannualPushNotificationSlice'
import mannualPushNotificationUnsiginUpSlice from './slices/Advertisement/Notification/mannualPushNotificationUnsiginUpSlice'
import unverifiedUserNotificationSlice from './slices/Advertisement/Notification/unverifiedUserNotificationSlice'
import addSubscriptionSlice from './slices/ManageSubscriptions/addSubscriptionSlice'
import getSubscriptionSlice from './slices/ManageSubscriptions/getSubscriptionSlice'
import getSubscriptionByTitleSlice from './slices/ManageSubscriptions/getSubscriptionByTitleSlice'
import getWithdrawListSlice from './slices/Freelance/getWithdrawListSlice'
import postWithdrawAmountSlice from './slices/Freelance/postWithdrawAmountSlice'
import getAllListingsApprovalsSlice from './slices/ListingsApprovals/getAllListingsApprovalsSlice'
import getAllHotListingsApprovalsSlice from './slices/ListingsApprovals/getAllHotListingsApprovalsSlice'
import updateListingsApprovalsSlice from './slices/ListingsApprovals/updateListingsApprovalsSlice'
import updateHotListingsApprovalsSlice from './slices/ListingsApprovals/updateHotListingsApprovalsSlice'
import getAllFreelancersForHRSLice from './slices/HR/getAllFreelancersForHRSlice'
import getAllFreelancersByIdSlice from './slices/HR/getAllFreelancersByIdSlice'
import deleteFreelancerSlice from './slices/HR/deleteFreelancerSlice'
import uploadBackgroundImageSlice from './slices/ManageSubscriptions/uploadBackgroundImageSlice'
import uploadIconSlice from './slices/ManageSubscriptions/uploadIconSlice'
import deleteHotListingsApprovalSlice from './slices/ListingsApprovals/deleteHotListingsApprovalSlice'
import deleteListingsApprovalSlice from './slices/ListingsApprovals/deleteListingsApprovalSlice'
import getAllSubscriptionSlice from './slices/ManageSubscriptions/getAllSubscriptionSlice'
import getAllInventorySlice from './slices/ManageSubscriptions/getAllInventorySlice'
import getAllDiscountsSlice from './slices/Discount/getAllDiscountsSlice'
import addDiscountSlice from './slices/Discount/addDiscountSlice'
import updateDiscountSlice from './slices/Discount/updateDiscountSlice'
import deleteDiscountSlice from './slices/Discount/deleteDiscountSlice'
import getAllPackages from './slices/Investors/getAllPackages'
import updatePropertyWalletProjectIslLiveStatusSlice from './slices/Project/updatePropertyWalletProjectIslLiveStatusSlice'
import updatePropertyWalletProductIslLiveStatusSlice from './slices/SingleProperty/updatePropertyWalletProductIslLiveStatusSlice'
import getAllAuthUserNoPaginationSlice from './slices/AppUsers/getAllAuthUserNoPaginationSlice'
import withDrawRequetNoPaginationSlice from './slices/CommissionRequest/withDrawRequetNoPaginationSlice'
import getAllAddonsSlice from './slices/SubscriptionAddons/getAllAddonsSlice'
import createAddonSlice from './slices/SubscriptionAddons/createAddonSlice'
import updateAddonSlice from './slices/SubscriptionAddons/updateAddonSlice'
import deleteAddonSlice from './slices/SubscriptionAddons/deleteAddonSlice'
import getAllInventoriesSlice from './slices/InventoryManagment/getAllInventories'
import getInventoryByIdSlice from './slices/InventoryManagment/getInventoryByIdSlice'
import getAllMeetingsSlice from './slices/ManageMeetings/getAllMeetingsSlice'
import createMeetingSlice from './slices/ManageMeetings/createMeetingSlice'
import updateMeetingsSlice from './slices/ManageMeetings/updateMeetingsSlice'
import deleteMeetingSlice from './slices/ManageMeetings/deleteMeetingSlice'
import createParticipantsSlice from './slices/ManageMeetings/createParticipantsSlice'
import getAllParticipantsSlice from './slices/ManageMeetings/getAllParticipantsSlice'
import createMilestoneSilce from './slices/Milestones/createMilestoneSilce'
import deleteMilestoneSlice from './slices/Milestones/deleteMilestoneSlice'
import updateMilestoneSlice from './slices/Milestones/updateMilestoneSlice'
import getAllMilestonesSlice from './slices/Milestones/getAllMilestonesSlice'
import getLoungeSlice from './slices/Lounge/getLoungeSlice'
import getLoungeOwnerSlice from './slices/Lounge/getLoungeOwnerSlice'
import createLoungeSlice from './slices/Lounge/createLoungeSlice'
import updateLoungeSlice from './slices/Lounge/updateLoungeSlice'
import loungeActiveStatusSlice from './slices/Lounge/loungeActiveStatusSlice'
import addInventorySlice from './slices/Lounge/addInventorySlice'
import getAllProjectCoodinatorSlice from './slices/ProjectCoordinator/getProjectCoordinatorSlice'
import coordinatorActiveStatusSlice from './slices/ProjectCoordinator/coordinatorActiveStatusSlice'
import createProjectCoordinator from './slices/ProjectCoordinator/createProjectCoordinatorSlice'
import getAllRolesForProjectCoordinatorSlice from './slices/ProjectCoordinator/getAllRolesForProjectCoordinatorSlice'
import projectAssignToCoordinatorByIDSlice from './slices/ProjectCoordinator/projectAssignToCoordinatorByID'
import getProjectNameForAssignByIDSlice from './slices/ProjectCoordinator/getProjectNameForAssignByIDSlice'
import AffiliateSignupSlice from './slices/BDUserAffiliateUser/AffiliateSignupSlice'
import GetBDUsersSlice from './slices/BDUserAffiliateUser/GetBDUsersSlice'
import GetAllManagerInBDUsersSlice from './slices/BDUserAffiliateUser/GetAllManagerInBDUsersSlice'
import GetAllAffiliateInBDUsersSlice from './slices/BDUserAffiliateUser/GetAllAffiliateInBDUsersSlice'
import GetAllAffilateForAssignToManagerSlice from './slices/BDUserAffiliateUser/GetAllAffilateForAssignToManagerSlice'
import AssignAffiliateToManagerSlice from './slices/BDUserAffiliateUser/AssignAffiliateToManagerSlice'
import AffiliateDetailsSlice from './slices/BDUserAffiliateUser/AffiliateDetailsSlice'
import ActiveOrDeactiveBDUserSlice from './slices/BDUserAffiliateUser/ActiveOrDeactiveBDUserSlice'
import ManagerDetailsSlice from './slices/BDUserAffiliateUser/ManagerDetailsSlice'
import CreateBDMeetingSlice from './slices/BDMeeting/CreateBDMeetingSlice'
import getAllProjectForModalSlice from './slices/ProjectCoordinator/getAllProjectForModalSlice'
import getAllBDMeetingSessionByBDMeetingIdSlice from './slices/BDMeeting/getAllBDMeetingSessionByBDMeetingIdSlice'
import allBDMeetingsForAdminSlice from './slices/BDMeeting/allBDMeetingsForAdminSlice'
import updateBdMeetingSlice from './slices/BDMeeting/updateBdMeetingSlice'
import deleteBdMeetingSlice from './slices/BDMeeting/deleteBdMeetingSlice'
import createBDMeetingSessionSlice from './slices/BDMeeting/createBDMeetingSessionSlice'
import createBDMilestoneSilce from './slices/BDMilestones/createBDMilestoneSilce'
import deleteBDMilestoneSlice from './slices/BDMilestones/deleteBDMilestoneSlice'
import getAllBDMilestonesSlice from './slices/BDMilestones/getAllBDMilestonesSlice'
import updateBDMilestoneSlice from './slices/BDMilestones/updateBDMilestoneSlice'
import PostReleaseSalariesSlice from './slices/BDSalary/PostReleaseSalariesSlice'
import GetALLReleaseSalariesSlice from './slices/BDSalary/GetALLReleaseSalariesSlice'
import GetAllReleaseHistorySlice from './slices/BDSalary/GetAllReleaseHistorySlice'
import GetAllSurveySlice from './slices/Survey/GetAllSurveySlice'
import getLogsByProjectIdForAdminSlice from './slices/ProjectCoordinator/getLogsByProjectIdForAdminSlice'
import assignFreeTrialSlice from './slices/AppUsers/assignFreeTrialSlice'
import CreateSurveySlice from './slices/Survey/CreateSurveySlice'
import EditSurveySlice from './slices/Survey/EditSurveySlice'
import getAllUserActivitiesLogsSlice from './slices/UserActivities/getAllUserActivitiesLogsSlice'
import SearchForAgencyProfileSlice from './slices/AgencyProfile/SearchForAgencyProfileSlice'
import getAllModuleNamesSlice from './slices/UserActivities/getAllModuleNamesSlice'
import getAllInterestedSurveySlice from './slices/Survey/getAllInterestedSurveySlice'
import getListAllBDUserSlice from './slices/BDMeeting/getListAllBDUserSlice'
import assignBDMeetingSessionSlice from './slices/BDMeeting/assignBDMeetingSessionSlice'
import getAllTicketsForAdminSideSlice from './slices/TicketingSystem/AllTicket/getAllTicketsForAdminSideSlice'
import getTicketDataByIdSlice from './slices/TicketingSystem/AllTicket/getTicketDataByIdSlice'
import getAllTicketUsersSlice from './slices/TicketingSystem/TicketUsers/getAllTicketUsersSlice'
import suspendTicketUserSlice from './slices/TicketingSystem/TicketUsers/suspendTicketUserSlice'
import GetDepartmentSlice from './slices/Department/GetDepartmentSlice'
import DeleteDepartmentSlice from './slices/Department/DeleteDepartmentSlice'
import EditDepartmentSlice from './slices/Department/EditDepartmentSlice'
import AddDepartmentSlice from './slices/Department/AddDepartmentSlice'
import getProjectsForAssignSlice from './slices/ProjectCoordinator/getProjectsForAssignSlice'
import popupProjectAddPopUpFormAdminSideSlice from './slices/Project/popupProjectAddPopUpFormAdminSideSlice'
import GetAllAgencyForAgentReviewSlice from './slices/AgentReview/GetAllAgencyForAgentReviewSlice'
import GetAgencyReviewByAgencyIDSlice from './slices/AgentReview/GetAgencyReviewByAgencyIDSlice'
import agentReviewsSlice from './slices/AppUsers/agentReviewsSlice'
import meetingSlotSlice from './slices/AppUsers/meetingSlotSlice'
import DeleteAgencyReviewSlice from './slices/AgentReview/DeleteAgencyReviewByIdSlice'
import GetAllCatalogueAgencyReviewSlice from './slices/CatalogueAgencyReview/GetAllCatalogueAgencyReviewSlice'
import GetAllCatalogueAgentReviewSlice from './slices/CatalogueAgentReview/GetAllCatalogueAgentReviewSlice'
import GetAllCatalogueMeetingSlotsSlice from './slices/CatalogueMeetingSlots/GetAllCatalogueMeetingSlotsSlice'
import CreateELoungeSlice from './slices/Elounge/CreateELoungeSlice'
import getEloungeSlice from './slices/Elounge/getEloungeSlice'
import ELoungeActiveStatusSlice from './slices/Elounge/ELoungeActiveStatusSlice'
import updateELoungeSlice from './slices/Elounge/updateELoungeSlice'
import postELWithdrawAmountSlice from './slices/ELoungeFreelancers/postELWithdrawAmountSlice'
import getELWithdrawListSlice from './slices/ELoungeFreelancers/getELWithdrawListSlice'
import EloungePostRolesSlice from './slices/ELoungeRoles/EloungePostRolesSlice'
import EloungeGetRolesSlice from './slices/ELoungeRoles/EloungeGetRolesSlice'
import EloungePatchRolesSlice from './slices/ELoungeRoles/EloungePatchRolesSlice'
import EloungeDeleteRolesSlice from './slices/ELoungeRoles/EloungeDeleteRolesSlice'
import GetELoungeUserSlice from './slices/ELoungeUser/GetELoungeUserSlice'
import PostELoungeUserSlice from './slices/ELoungeUser/PostELoungeUserSlice'
import AssignUserELoungeSlice from './slices/Elounge/AssignUserELoungeSlice'
import DeleteELoungeAssignUserSlice from './slices/ELoungeAssignUser/DeleteELoungeAssignUserSlice'
import GetAllELoungeAssignUserSlice from './slices/ELoungeAssignUser/GetAllELoungeAssignUserSlice'
import SuspendELoungeUserSlice from './slices/ELoungeUser/SuspendELoungeUserSlice'
import GetEloungeUserNameAndIdSlice from './slices/Elounge/GetEloungeUserNameAndIdSlice'
import UpdateELoungeUserSlice from './slices/ELoungeUser/UpdateELoungeUserSlice'
import getAllCustomPackagePlanSlice from './slices/ManageSubscriptions/getAllCustomPackagePlanSlice'
import addCustomPackagePlanSlice from './slices/ManageSubscriptions/addCustomPackagePlanSlice'
import updateCustomPackagePlanSlice from './slices/ManageSubscriptions/updateCustomPackagePlanSlice'
import getAllCustomPackageFeatureSlice from './slices/ManageSubscriptions/getAllCustomPackageFeatureSlice'
import addCustomPackageFeatureSlice from './slices/ManageSubscriptions/addCustomPackageFeatureSlice'
import updateCustomPackageFeatureSlice from './slices/ManageSubscriptions/updateCustomPackageFeatureSlice'
import GetELoungeSaleUserForAssignToLeadSlice from './slices/ELoungeUser/GetELoungeSaleUserForAssignToLeadSlice'
import PostELoungeSaleUserForAssignToLeadSlice from './slices/ELoungeUser/PostELoungeSaleUserForAssignToLeadSlice'
import getAllCustomDataVoucherSlice from './slices/Vouchers/getAllCustomDataVoucherSlice'
import getAllVouchersSlice from './slices/Vouchers/getAllVouchersSlice'
import postEloungeManagmentUserWithdrawAmountSlice from './slices/ELoungeManagmentUserWithdraw/postEloungeManagmentUserWithdrawAmountSlice'
import getEloungeManagmentUserWithdrawListSlice from './slices/ELoungeManagmentUserWithdraw/getEloungeManagmentUserWithdrawListSlice'
import getAllInterestedLogsSlice from './slices/SingleProperty/getAllInterestedLogsSlice'
import UnAssignEloungeAssignUserToLeadSlice from './slices/EloungeAssignUserToLead/UnAssignEloungeAssignUserToLeadSlice'
import GetEloungeAssignUserToLeadSlice from './slices/EloungeAssignUserToLead/GetEloungeAssignUserToLeadSlice'
import AgencyCatalogueSlice from './slices/AgencyCatalogue/AgencyCatalogueSlice'
import getAllAgenciesForSaleUsersSlice from './slices/AgentReview/getAllAgenciesForSaleUsers'
import getAllELoungesForSaleUserSlice from './slices/AgentReview/getAllELoungesForSaleUser'
import getAllSaleUserByLoungeIdSlice from './slices/AgentReview/getAllSaleUserByLoungeId'
import assignSaleUserToAgencySlice from './slices/AgentReview/assignSaleUserToAgencySlice'
import GetAllMarketingRequirmentSlice from './slices/Marketingrequiements/GetAllMarketingRequirmentSlice'

const rootSlices = combineReducers({
  assignFreeTrialSlice: assignFreeTrialSlice,
  auth: LoginSlice,
  allPropertiesCount: AllPropertiesCountSlice,
  allPropertiesLastDayCount: AllPropertiesLastDayCountSlice,
  soldPropertiesCount: SoldPropertiesCountSlice,
  soldPropertiesLastDayCount: SoldInvnetoryLastDayCount,
  postRoles: PostRolesSlice,
  getRoles: GetRolesSlice,
  updateRoles: UpdateRolesSlice,
  addUser: AddUserSlice,
  getRoutes: getRoutesSlice,
  assignAppModule: GetAssignAppModuleSlice,
  assignModuleRole: AssignModuleRoleSlice,
  usersInfoMonthly: UsersInfoMonthlySlice,
  getRegisteredUsers: GetRegisteredUsersSlice,
  agenciesCount: AgenciesCountSlice,
  getPropertiesOverview: GetPropertiesOverviewSlice,
  getTotalSaleOrder: GetTotalSaleOrderSlice,
  getRevenue: GetRevenueSlice,
  getNoOfRegisteredStaff: GetNoOfRegisteredStaffSlice,
  getNoOfUnits: GetNoOfUnitsSlice,
  GetNoOfDownloads: GetNoOfDownloadsSlice,
  createProjectStepOne: createProjectStepOneSlice,
  createProjectStepTwo: createProjectStepTwoSlice,
  updateProjectStepOne: updateProjectStepOneSlice,
  updateProjectStepTwo: updateProjectStepTwoSlice,
  createProjectStepThree: createProjectStepThreeSlice,
  updateProjectStepThree: updateProjectStepThreeSlice,
  uploadAdvertisement: UploadAdvertisementSlice,
  createAdvertisement: CreateAdvertisementSlice,
  moduleList: ModuleListSlice,
  getAllPromotions: GetAllPromotionsSlice,
  deleteAdvertisement: DeleteAdvertisementSlice,
  getProjectTypes: getProjectTypesSlice,
  getProjectSubTypes: getProjectSubTypesSlice,
  getAllProjects: getAllProjectsSlice,
  getLandArea: getLandAreaSlice,
  createProjectInventoryStepOne: createProjectInventoryStepOneSlice,
  updateProjectInventoryStepOne: updateProjectInventoryStepOneSlice,
  getProjectInventoryStepOne: getProjectInventoryStepOneSlice,
  createProjectInventoryStepTwo: createProjectInventoryStepTwoSlice,
  updateProjectInventoryStepTwo: updateProjectInventoryStepTwoSlice,
  inventoriesByProject: inventoriesByProjectSlice,
  createProjectInventoryUtils: createProjectInventoryUtilsSlice,
  getProjectInventoryUtils: getProjectInventoryUtilsSlice,
  deleteProjectInventoryUtils: deleteProjectInventoryUtilsSlice,
  getProjectInventoryFacing: getProjectInventoryFacingSlice,
  createProjectInventoryFacing: createProjectInventoryFacingSlice,
  deleteProjectInventoryFacing: deleteProjectInventoryFacingSlice,
  getCrmRequests: getCrmRequestsSlice,
  updateWithdrawRequests: updateWithdrawRequestsSlice,
  getWithdrawRequests: getWithdrawRequestsSlice,
  updateCrmRequests: updateCrmRequestsSlice,
  createPropertyWalletProductStepOne: createPropertyWalletProductStepOneSlice,
  updatePropertyWalletProductStepOne: updatePropertyWalletProductStepOneSlice,
  createPropertyWalletProductStepTwo: createPropertyWalletProductStepTwoSlice,
  updatePropertyWalletProductStepTwo: updatePropertyWalletProductStepTwoSlice,
  createPlot: createPlotSlice,
  getAllPlots: getAllPlotsSlice,
  deletePlot: deletePlotSlice,
  uploadExcelSheet: uploadExcelSheetSlice,
  getAllProductPlot: getAllProductPlotSlice,
  excelProductUpload: excelProductUploadSlice,
  deleteProductPlot: deleteProductPlotSlice,
  createProductPlot: createProductPlotSlice,
  createPropertyWalletInventoryStep3SaveTemplete:
    createPropertyWalletInventoryStep3SaveTempleteSlice,
  getPropertyWalletUtil: getPropertyWalletUtilSlice,
  createPropertyWalletUtil: createPropertyWalletUtilSlice,
  deletePropertyWalletUtil: deletePropertyWalletUtilSlice,
  updatePropertyWalletInventoryStep3CashPlan:
    updatePropertyWalletInventoryStep3CashPlanSlice,
  getAllPWInstallmentPaymentPlan: getAllPWInstallmentPaymentPlanSlice,
  createPropertyWalletInventoryStep3CashPlan:
    createPropertyWalletInventoryStep3CashPlanSlice,
  createPropertyWalletProductStep3CashPlan:
    createPropertyWalletProductStep3CashPlanSlice,
  createPropertyWalletProductStep3SaveTemplete:
    createPropertyWalletProductStep3SaveTempleteSlice,
  getAllPWProductInstallmentPaymentPlan:
    getAllPWProductInstallmentPaymentPlanSlice,
  updatePropertyWalletProductStep3CashPlan:
    updatePropertyWalletProductStep3CashPlanSlice,
  updatePropertyWalletProductStep3Templete:
    updatePropertyWalletProductStep3TempleteSlice,
  updatePropertyWalletInventoryStep3Templete:
    updatePropertyWalletInventoryStep3TempleteSlice,
  getInventoryDetailStepTwo: getInventoryDetailStepTwoSlice,
  getAllProductList: getAllProductListSlice,
  deleteProjectPhoto: deleteProjectPhotoSlice,
  getProjectDetailsStepTwo: getProjectDetailsStepTwoSlice,
  createHotListing: createHotListingSlice,
  createStepTwoImages: createStepTwoImagesSlice,
  deleteStepTwoImages: deleteStepTwoImagesSlice,
  getStepTwoImages: getStepTwoImagesSlice,
  updateStepTwoImages: updateStepTwoImagesSlice,
  getAllHotListing: getAllHotListingSlice,
  getPropertyWalletInventoryStep3CashPlan:
    getPropertyWalletInventoryStep3CashPlanSlice,
  getProductDetailForStep1: getProductDetailForStep1Slice,
  getProductDetailForStep3Features: getProductDetailForStep3FeaturesSlice,
  getProductDetailForStep4CashPlan: getProductDetailForStep4CashPlanSlice,
  getAllQueries: getAllQueriesSlice,
  getAllUnverifiedUsers: getAllUnverifiedUsersSlice,
  getOnetHotListing: getOnetHotListingSlice,
  deleteHotListing: deleteHotListingSlice,
  getAllHotListingConditional: getAllHotListingConditionalSlice,
  updateHotListing: updateHotListingSlice,
  generatePlotDetailUpdateExel: generatePlotDetailUpdateExelSlice,
  uploadExcelForUpdate: uploadExcelForUpdateSlice,
  createProductFacing: createProductFacingSlice,
  getProductFacing: getProductFacingSlice,
  deleteProductFacing: deleteProductFacingSlice,
  getAllAppUsers: getAllAppUsersSlice,
  getAuthUser: getAuthUserSlice,
  getUserManagementList: getUserManagementListSlice,
  editUsersRole: editUsersRoleSlice,
  getReferral: getReferralSlice,
  isAgencyWithinRadius: isAgencyWithinRadiusSlice,
  addnewInvestor: AddInvestors,
  getAllInvestor: getInvestors,
  getAllOnlineUsers: getOnlineUsersSlice,
  getAllBankRequest: getBankRequestSlice,
  getAllOwners: getAllOwners,
  getPaymentTokenRequests: getPaymentTokenRequestsSlice,
  tokenUpdateExpiry: tokenUpdateExpirySlice,
  getPWPAdminPaymentAssistanceRequest: getPWPAdminPaymentAssistanceRequestSlice,
  getPWIAdminPaymentAssistanceRequest: getPWIAdminPaymentAssistanceRequestSlice,
  getAllSupportPaymentRequests: getAllSupportPaymentRequestsSlice,
  uploadTemplatePdf: uploadTemplatePdfSlice,
  getProjectStepOne: getProjectStepOneSlice,
  getProjectStepThree: getProjectStepThreeSlice,
  getAllCommissionRequest: getAllCommissionRequestSlice,
  ApproveOrReject: ApproveOrRejectSlice,
  getProjectSaleOrder: getProjectSaleOrderSlice,
  getProductSaleOrder: getProductSaleOrderSlice,
  getAllLeadsForAdmin: getAllLeadsForAdminSlice,
  createManualNotification: createManualNotificationSlice,
  getAllManualNotification: getAllManualNotificationSlice,
  updateManualNotification: updateManualNotificationSlice,
  deleteManualNotification: deleteManualNotificationSlice,
  mannualPushNotification: mannualPushNotificationSlice,
  mannualPushNotificationUnsiginUp: mannualPushNotificationUnsiginUpSlice,
  unverifiedUserNotification: unverifiedUserNotificationSlice,
  addSubscription: addSubscriptionSlice,
  getSubscription: getSubscriptionSlice,
  getSubscriptionByTitle: getSubscriptionByTitleSlice,
  withdrawList: getWithdrawListSlice,
  withdrawAmount: postWithdrawAmountSlice,
  getAllListingsApprovals: getAllListingsApprovalsSlice,
  getAllHotListingsApprovals: getAllHotListingsApprovalsSlice,
  updateListingsApprovals: updateListingsApprovalsSlice,
  updateHotListingsApprovals: updateHotListingsApprovalsSlice,
  getAllFreelancersForHR: getAllFreelancersForHRSLice,
  getAllFreelancersById: getAllFreelancersByIdSlice,
  deleteFreelancer: deleteFreelancerSlice,
  uploadBackgroundImage: uploadBackgroundImageSlice,
  uploadIcon: uploadIconSlice,
  deleteHotListingsApproval: deleteHotListingsApprovalSlice,
  deleteListingsApproval: deleteListingsApprovalSlice,
  getAllSubscription: getAllSubscriptionSlice,
  getAllInventory: getAllInventorySlice,
  getAllDiscounts: getAllDiscountsSlice,
  addDiscount: addDiscountSlice,
  updateDiscount: updateDiscountSlice,
  deleteDiscount: deleteDiscountSlice,
  PackagesList: getAllPackages,
  updatePropertyWalletProjectIslLiveStatus:
    updatePropertyWalletProjectIslLiveStatusSlice,
  updatePropertyWalletProductIslLiveStatus:
    updatePropertyWalletProductIslLiveStatusSlice,
  getAllAuthUserNoPagination: getAllAuthUserNoPaginationSlice,
  withDrawRequetNoPagination: withDrawRequetNoPaginationSlice,
  getAllAddons: getAllAddonsSlice,
  createAddon: createAddonSlice,
  updateAddon: updateAddonSlice,
  deleteAddon: deleteAddonSlice,
  getAllInventories: getAllInventoriesSlice,
  getInventoryById: getInventoryByIdSlice,
  getAllMeetings: getAllMeetingsSlice,
  createMeeting: createMeetingSlice,
  updateMeetings: updateMeetingsSlice,
  deleteMeeting: deleteMeetingSlice,
  createParticipants: createParticipantsSlice,
  getAllParticipants: getAllParticipantsSlice,
  createMilestone: createMilestoneSilce,
  deleteMilestone: deleteMilestoneSlice,
  updateMilestone: updateMilestoneSlice,
  getAllMilestones: getAllMilestonesSlice,
  getLounge: getLoungeSlice,
  getLoungeOwner: getLoungeOwnerSlice,
  createLounge: createLoungeSlice,
  updateLounge: updateLoungeSlice,
  loungeActiveStatus: loungeActiveStatusSlice,
  AddInventoryLounge: addInventorySlice,
  CoordinatorActiveStatus: coordinatorActiveStatusSlice,
  GetAllProjectCoodinator: getAllProjectCoodinatorSlice,
  CreateProjectCoordinator: createProjectCoordinator,
  getAllRolesForCoordinator: getAllRolesForProjectCoordinatorSlice,
  projectAssignToCoordinatorByID: projectAssignToCoordinatorByIDSlice,
  getProjectNameForAssignByID: getProjectNameForAssignByIDSlice,
  createUser: AffiliateSignupSlice,
  getAllRoleForBDUser: GetBDUsersSlice,
  getAllManagerInBDUsers: GetAllManagerInBDUsersSlice,
  getAllAffiliateInBDUsers: GetAllAffiliateInBDUsersSlice,
  getListOfAffiliateForAssign: GetAllAffilateForAssignToManagerSlice,
  AssignAffiliateToManager: AssignAffiliateToManagerSlice,
  AffiliateDetails: AffiliateDetailsSlice,
  ActiveOrDeactiveBDUser: ActiveOrDeactiveBDUserSlice,
  ManagerDetails: ManagerDetailsSlice,
  CreateBDMeeting: CreateBDMeetingSlice,
  getAllProjectForProjectCoo: getAllProjectForModalSlice,
  getAllBDMeetingSessionByBDMeetingId: getAllBDMeetingSessionByBDMeetingIdSlice,
  allBDMeetingsForAdmin: allBDMeetingsForAdminSlice,
  updateBdMeeting: updateBdMeetingSlice,
  deleteBdMeeting: deleteBdMeetingSlice,
  createBDMeetingSession: createBDMeetingSessionSlice,
  createBDMilestone: createBDMilestoneSilce,
  deleteBDMilestone: deleteBDMilestoneSlice,
  getAllBDMilestones: getAllBDMilestonesSlice,
  updateBDMilestone: updateBDMilestoneSlice,
  getRealeaseSalaries: GetALLReleaseSalariesSlice,
  postReleaseSalaries: PostReleaseSalariesSlice,
  getReleaseHistory: GetAllReleaseHistorySlice,
  getSurvey: GetAllSurveySlice,
  getLogsByProjectIdForAdmin: getLogsByProjectIdForAdminSlice,
  CreateSurvey: CreateSurveySlice,
  EditSurvey: EditSurveySlice,
  getAllUserActivitiesLogs: getAllUserActivitiesLogsSlice,
  getSearchForAgencyProfile: SearchForAgencyProfileSlice,
  getAllModuleNames: getAllModuleNamesSlice,
  getAllInterestedSurvey: getAllInterestedSurveySlice,
  getListAllBDUser: getListAllBDUserSlice,
  assignBDMeetingSession: assignBDMeetingSessionSlice,
  getAllTicketsForAdminSide: getAllTicketsForAdminSideSlice,
  getTicketDataById: getTicketDataByIdSlice,
  getAllTicketUsers: getAllTicketUsersSlice,
  suspendTicketUser: suspendTicketUserSlice,
  AddDepartment: AddDepartmentSlice,
  GetDepartment: GetDepartmentSlice,
  DeleteDepartment: DeleteDepartmentSlice,
  EditDepartment: EditDepartmentSlice,
  getProjectsForAssign: getProjectsForAssignSlice,
  popupProjectAddPopUpForm: popupProjectAddPopUpFormAdminSideSlice,
  GetAllAgencyForAgentReview: GetAllAgencyForAgentReviewSlice,
  GetAgencyReviewByAgencyID: GetAgencyReviewByAgencyIDSlice,
  agentReview: agentReviewsSlice,
  meetingSlot: meetingSlotSlice,
  DeleteAgencyReview: DeleteAgencyReviewSlice,
  GetAllCatalogueAgencyReview: GetAllCatalogueAgencyReviewSlice,
  GetAllCatalogueAgentReview: GetAllCatalogueAgentReviewSlice,
  GetAllCatalogueMeetingSlots: GetAllCatalogueMeetingSlotsSlice,
  createELounge: CreateELoungeSlice,
  getElounge: getEloungeSlice,
  ELoungeActiveStatus: ELoungeActiveStatusSlice,
  updateELounge: updateELoungeSlice,
  postELWithdrawAmount: postELWithdrawAmountSlice,
  getELWithdrawList: getELWithdrawListSlice,
  EloungePostRoles: EloungePostRolesSlice,
  EloungeGetRoles: EloungeGetRolesSlice,
  EloungePatchRoles: EloungePatchRolesSlice,
  EloungeDeleteRoles: EloungeDeleteRolesSlice,
  GetELoungeUser: GetELoungeUserSlice,
  PostELoungeUser: PostELoungeUserSlice,
  AssignUserELounge: AssignUserELoungeSlice,
  DeleteELoungeAssignUser: DeleteELoungeAssignUserSlice,
  GetAllELoungeAssignUser: GetAllELoungeAssignUserSlice,
  SuspendELoungeUser: SuspendELoungeUserSlice,
  GetEloungeUserNameAndId: GetEloungeUserNameAndIdSlice,
  UpdateELoungeUser: UpdateELoungeUserSlice,
  getAllCustomPackagePlan: getAllCustomPackagePlanSlice,
  addCustomPackagePlan: addCustomPackagePlanSlice,
  updateCustomPackagePlan: updateCustomPackagePlanSlice,
  getAllCustomPackageFeature: getAllCustomPackageFeatureSlice,
  addCustomPackageFeature: addCustomPackageFeatureSlice,
  updateCustomPackageFeature: updateCustomPackageFeatureSlice,
  GetELoungeSaleUserForAssignToLead: GetELoungeSaleUserForAssignToLeadSlice,
  PostELoungeSaleUserForAssignToLead: PostELoungeSaleUserForAssignToLeadSlice,
  getAllCustomDataVoucher: getAllCustomDataVoucherSlice,
  getAllVouchers: getAllVouchersSlice,
  postEloungeManagmentUserWithdrawAmount:
    postEloungeManagmentUserWithdrawAmountSlice,
  getEloungeManagmentUserWithdrawList: getEloungeManagmentUserWithdrawListSlice,
  getAllInterestedLogs: getAllInterestedLogsSlice,
  UnAssignEloungeAssignUserToLead: UnAssignEloungeAssignUserToLeadSlice,
  GetEloungeAssignUserToLead: GetEloungeAssignUserToLeadSlice,
  AgencyCatalogue: AgencyCatalogueSlice,
  getAllAgenciesForSaleUsers: getAllAgenciesForSaleUsersSlice,
  getAllELoungesForSaleUser: getAllELoungesForSaleUserSlice,
  getAllSaleUserByLoungeId: getAllSaleUserByLoungeIdSlice,
  assignSaleUserToAgency: assignSaleUserToAgencySlice,
  GetAllMarketingRequirment: GetAllMarketingRequirmentSlice,
})

const store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  // non serial data issue fixed
  reducer: rootSlices,
})
export const resetState = () => {
  return rootSlices(undefined, {})
}

export default store
