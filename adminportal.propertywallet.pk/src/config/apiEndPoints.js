export const API = {
  Auth: {
    login: 'admin-user-auth/signin',
  },
  Investor: {
    addnew: 'investorAuth/SignUp',
    getInvestorsList: 'investorAuth/GetAllInvestors',
    getOwnersList: 'investorAuth/GetAllOwners',
    addOwner: 'investorAuth/signup_vendor',
    assginOwner: 'investorAuth/assign-investors-to-vendor',
    getPackagesList: 'investorAuth/pwPackages/getAllPrivetePackages',
  },
  Freelance: {
    withdrawList: 'free-lancer/freeLancersWithDrawRequetsForAdmin',
    withdrawAmount: 'free-lancer/requestApprovalForFLWallet',
    suspendAccount: 'free-lancer/getFreelancerSuspendById',
  },
  Dashboard: {
    getAllInvnetoryCount: 'dashboard/getAllInvnetoryCount',
    getAllInvnetoryLastDayCount: 'dashboard/getAllInvnetoryLastDayCount',
    getSoldInvnetoryCount: 'dashboard/getSoldInvnetoryCount',
    getSoldInvnetoryLastDayCount: 'dashboard/getSoldInvnetoryLastDayCount',
    postGetUsersInfoMonthly: 'dashboard/getUsersInfoMonthly',
    getAllAgenciesCount: 'dashboard/allAgenciesCount',
    getPropertiesOverview: 'dashboard/propertiesOverview',
    isAgencyWithinRadius: 'dashboard/isAgencyWithinRadius',
  },
  Traffic: {
    getRegisteredUsers: 'traffic/getRegisteredUsers',
    getTotalSaleOrder: 'traffic/getTotalSaleOrder',
    getRevenue: 'traffic/getRevenue',
    getNoOfRegisteredStaff: 'traffic/getNoOfRegisteredStaff',
    getNoOfUnits: 'traffic/getNoOfUnits',
    getNoOfDownloads: 'stats/getReportsInfo',
  },
  Roles: {
    postRolesTitle: 'admin-roles/create',
    getRolesTitle: 'admin-roles/withUserByRoleId',
    patchRolesUpdate: 'admin-roles/updateById',
    addUser: 'admin-roles/createUserByRole',
    getRoutes: 'admin-roles/get-route',
    getAssignAppModule: 'assign-app-module/findOneByRoleId',
    assignModuleRoles: 'assign-app-module/updateAllByArray',
  },
  Project: {
    createProjectStepOne: 'property-wallet-project/createProjectStep1',
    createProjectStepTwo: 'property-wallet-project/createProjectStep2',
    createProjectStepThree: 'property-wallet-project/createProjectStep3',
    updateProjectStepOne: 'property-wallet-project/updateProjectStep1',
    updateProjectStepTwo: 'property-wallet-project/updateProjectStep2',
    updateProjectStepThree: 'property-wallet-project/updateProjectStep3',
    getProjectInventoryStepOne:
      'property-wallet-inventory/getInventoryDetailStep1',
    getAllProjects: 'property-wallet-project/getAllProjectList',
    createProjectInventoryStepOne:
      'property-wallet-inventory/createPropertyWalletInventoryStep1',
    updateProjectInventoryStepOne:
      'property-wallet-inventory/updatePropertyWalletInventoryStep1',
    createProjectInventoryStepTwo:
      'property-wallet-inventory/createPropertyWalletInventoryStep2',
    updateProjectInventoryStepTwo:
      'property-wallet-inventory/updatePropertyWalletInventoryStep2',
    inventoriesByProject:
      'property-wallet-project/getAll/property-wallet-Inventories-By-Project',
    getProjectInventoryUtils: 'property-wallet-utils/getUtil',
    createProjectInventoryUtils: 'property-wallet-utils/createUtil',
    removeProjectInventoryUtils: 'property-wallet-utils/removeUtil',
    getProjectInventoryFacing: 'property-wallet-facing/getFacing',
    createProjectInventoryFacing: 'property-wallet-facing/createFacing',
    removeProjectInventoryFacing: 'property-wallet-facing/removeFacing',
    getAllPlots: 'property-wallet-inventory-plot/GetAllPlot/PlotDetail',
    createPlot: 'property-wallet-inventory-plot/CreatePlot/PlotDetail',
    deletePlot: 'property-wallet-inventory-plot/DeletePlot/PlotDetail',
    uploadExcelSheet: 'property-wallet-inventory-plot/uploadExcel',
    createPropertyWalletInventoryStep3SaveTemplete:
      'property-wallet-inventory/createPropertyWalletInventoryStep3Templete',
    getAllPWInstallmentPaymentPlan:
      '/property-wallet-inventory/getAllPWInstallmentPaymentPlanStep3',
    createPropertyWalletInventoryStep3CashPlan:
      'property-wallet-inventory/createPropertyWalletInventoryStep3CashPlan',
    updatePropertyWalletInventoryStep3CashPlan:
      'property-wallet-inventory/updatePropertyWalletInventoryStep3CashPlan',
    updatePropertyWalletInventoryStep3Templete:
      'property-wallet-inventory/updatePropertyWalletInventoryStep3Templete',
    getInventoryDetailStep2:
      'property-wallet-inventory/getInventoryDetailStep2',
    deleteProjectPhoto:
      'property-wallet-project/delete/single/property-wallet-project-photo',
    getProjectDetailsStepTwo:
      'property-wallet-project/getProjectDetailForStep2',
    getPropertyWalletInventoryStep3CashPlan:
      'property-wallet-inventory/getInventoryDetailStep3',
    GeneratePlotDetailUpdateExelV2:
      'property-wallet-inventory-plot/GeneratePlotDetailUpdateExelV2',
    uploadExcelForUpdate: 'property-wallet-inventory-plot/uploadExcelForUpdate',
    uploadTemplatePdf: 'property-wallet-inventory/uploadTemplatePdf',
    getProjectStepOne: 'property-wallet-project/getProjectDetailForStep1',
    getProjectStepThree: 'property-wallet-project/getProjectDetailForStep3',
    updatePropertyWalletProjectIslLiveStatus:
      'property-wallet-project/updatePropertyWalletProjectIslLiveStatus',
    popupProjectAddPopUpFormAdminSide:
      'popup-project/AddPopUpProject/AdminSide',
  },
  Promotion: {
    uploadAdvertisement: 'promotion/uploadAdvertisement',
    createAdvertisement: 'promotion/createAdvertisement',
    moduleList: 'placement/module-list',
    getAllPromotions: 'promotion/getAllPromotions',
    deleteAdvertisement: 'promotion/deleteAdvertisement',
  },
  SingleProperty: {
    getProjectTypes: 'project-type',
    getProjectSubTypes: 'project-sub-type/getList',
    getLandArea: 'land-area',
    createPropertyWalletProductStepOne:
      'property-wallet-product/createPropertyWalletProductStep1',
    updatePropertyWalletProductStepOne:
      'property-wallet-product/updatePropertyWalletProductStep1',
    createPropertyWalletProductStepTwo:
      'property-wallet-product/createPropertyWalletProductStep2',
    updatePropertyWalletProductStepTwo:
      'property-wallet-product/updatePropertyWalletProductStep2',
    createPropertyWalletProductStep3CashPlan:
      'property-wallet-product/createPropertyWalletProductStep3CashPlan',
    updatePropertyWalletProductStep3CashPlan:
      'property-wallet-product/updatePropertyWalletProductStep3CashPlan',
    createPropertyWalletProductStep3SaveTemplete:
      'property-wallet-product/createPropertyWalletProductStep3Templete',
    updatePropertyWalletProductStep3Templete:
      'property-wallet-product/updatePropertyWalletProductStep3Templete',
    getAllPWProductInstallmentPaymentPlan:
      'property-wallet-product/getAllPWProductInstallmentPaymentPlan',
    getPropertyWalletUtil: 'property-wallet-product-utils/getProductUtil',
    createPropertyWalletUtil: 'property-wallet-product-utils/createProductUtil',
    deletePropertyWalletUtil: 'property-wallet-product-utils/removeProductUtil',
    excelProductUpload: 'property-wallet-product-plot/uploadExcel',
    getAllProductPlot: 'property-wallet-product-plot/GetAllPlot/PlotDetail',
    createProductPlot: 'property-wallet-product-plot/CreatePlot/PlotDetail',
    deleteProductPlot: 'property-wallet-product-plot/DeletePlot/PlotDetail',
    createPropertyWalletProductStepThree:
      'property-wallet-product/createPropertyWalletProductStep3',
    getAllProductList: 'property-wallet-product/getAllProductList',
    createStepTwoImages:
      'property-wallet-product/createPropertyWalletProductStep2PhotosAndAttachment',
    updateStepTwoImages:
      'property-wallet-product/updatePropertyWalletProductStep2PhotosAndAttachment',
    getStepTwoImages: 'property-wallet-product/getProductDetailForStep2',
    deleteStepTwoImages:
      'property-wallet-product/delete/single/property-wallet-product-photo',
    getProductDetailForStep1:
      'property-wallet-product/getProductDetailForStep1',
    getProductDetailForStep3Features:
      'property-wallet-product/getProductDetailForStep3',
    getProductDetailForStep4CashPlan:
      'property-wallet-product/getProductDetailForStep4',
    getProductFacing: 'property-wallet-product-facing/getFacing',
    createProductFacing: 'property-wallet-product-facing',
    deleteProductFacing: 'property-wallet-product-facing/removeFacing',
    updatePropertyWalletProductIslLiveStatus:
      'property-wallet-product/updatePropertyWalletProductIslLiveStatus',
    interestedUser: 'property-wallet-product/getAllInterestedLogs',
  },
  CrmRequests: {
    getCrmRequests: 'crm-inventory-req',
  },
  Leads: {
    getAllLeadsForAdmin: 'lead/getAllLeadsForAdmin',
  },
  WithdrawRequests: {
    getWithdrawRequests: 'investor-wallet/withDrawRequetsforAdmin',
    requestApprovalForInvestorWallet:
      'investor-wallet/RequestApprovalForInvestorWallet',
  },
  hotListing: {
    createHotListing: 'property-wallet-hot-listing/createtHotListing',
    getAllHotListing: 'property-wallet-hot-listing/getAlltHotListing',
    getOnetHotListing: 'property-wallet-hot-listing/getOnetHotListing',
    deleteHotListing: 'property-wallet-hot-listing/deleteHotListing',
    updateHotListing: 'property-wallet-hot-listing/updateHotListing',
  },
  UnverifiedUsers: {
    getAllUnverifiedUsers: 'admin-user-auth/get/unverified/users/list',
  },
  Queries: {
    getAllQueries: 'support-form/getSupportForm',
  },
  PaymentRequest: {
    getPWPAdminPaymentAssistanceRequest:
      'pwp-admin-payment-assistance-request/getPWPAdminPaymentAssistanceRequest',
    getPWIAdminPaymentAssistanceRequest:
      'pwi-admin-payment-assistance-request/getPWIAdminPaymentAssistanceRequest',
    getAllSupportPaymentRequests:
      'token-lock-inventory/getAllSupportPaymentRequests',
  },
  AppUsers: {
    getAllAppUsers: 'app-user/getAllAuthUser',
    getAuthUser: 'app-user/getAuthUser',
    getAllAuthUserNoPagination: 'app-user/getAllAuthUser-NoPagination',
    assignFreeTrial: 'ticketing-system/pwAssignPkg/freeTrial',
    meetingSlot: 'catalogue/forAdmin/GetUserBookSlotsAndReviews',
    getAgencyReview: 'catalogue/forAdmin/GetUserReviews',
  },
  UserMangement: {
    getUserManagementList: 'app-user/getUserManagementList',
    editUsersRole: 'app-user/editAdminUsersRole',
  },
  Refeerals: {
    getReferral: 'app-user/getReferral',
  },
  payments: {
    getPaymentTokenRequests: 'token-lock-inventory',
    tokenUpdateExpiry: 'token-lock-inventory/updateExpiry',
  },
  onlineUsers: {
    getOnlineUser: 'cash-payment',
    getBankRequests: 'bank-payment',
    updatedOnlineUser: 'cash-payment',
    updatedBankRequest: 'bank-payment',
  },
  commissionRequests: {
    getAllCommissionRequest: 'user-wallet/withDrawRequets',
    ApproveOrReject: 'user-wallet/RequestApprovalForWallet',
    withDrawRequetNoPagination: 'user-wallet/withDrawRequet-NoPagination',
  },
  SalesOrder: {
    getProjectSaleOrder:
      'property-wallet-inventory-finalize-sale/getProjectSaleOrderForAdmin',
    getProductSaleOrder:
      'property-wallet-product-finalize-sale/getProductSaleOrderForAdmin',
  },
  Notification: {
    createManualNotification: 'manual-notification/createManualNotification',
    getAllManualNotification: 'manual-notification/getAllManualNotification',
    updateManualNotification: 'manual-notification/updateManualNotification',
    deleteManualNotification: 'manual-notification/deleteManualNotification',
    mannualPushNotification: 'xlsx/mannualPushNotification',
    mannualPushNotificationUnsiginUp:
      'xlsx/mannualPushNotification/for/unsiginUp/users',
    unverifiedUserNotification:
      'xlsx/send-mobile-notification-unverified-user/for-admin',
  },
  manageSubscriptions: {
    addSubscription: 'pwpackages',
    getSubscription: 'pwpackages',
    getSubscriptionByTitle: 'pwpackages/byTitle',
    getAllSubscription: 'pwpackages/getAll/SubsForAdmin',
    getAllInventory: 'inventory/getAllInventoryForAdminById',
    getCustomPackagePlan: 'pwpackages/getAllCustomPlans/forAdmin',
    addCustomPackagePlan: 'pwpackages/create-custom-package-plan',
    editCustomPackagePlan: 'pwpackages/update-custom-plan',
    getCustomPackageFeature: 'pwpackages/getAllCustomPackages/forAdmin',
    addCustomPackageFeature: 'pwpackages/create-custom-package-data',
    editCustomPackageFeature: 'pwpackages/update-package-data',
  },
  listingsApprovals: {
    getAllListingsApprovals: 'agency/getAllListingForAdmin',
    getAllHotListingsApprovals: 'agency/getAllHotlistingForAdmin',
    updateListingsApprovals: 'agency/updateListingForAdmin',
    updateHotListingsApprovals: 'agency/updateHotlistingForAdmin',
    deleteListingsApproval: 'agency/deleteListing',
    deleteHotListingsApproval: 'agency/deleteHotListing',
  },
  HR: {
    getAllFreelancersForHR: 'free-lancer/GetAllFreeLancersForHR',
    getAllFreelancersById: 'free-lancer/getFreelancerById',
    deleteFreelancer: 'free-lancer',
    uploadBackgroundImage: 'promotion/uploadAdvertisement',
    uploadIcon: 'promotion/uploadAdvertisement',
  },
  discount: {
    getAllDiscounts: 'discount/getAllDiscount',
    addDiscount: 'discount',
    updateDiscount: 'discount/discountUpdate',
    deleteDiscount: 'discount/deleteDiscountDataById',
  },
  addons: {
    getAllAddons: 'pwpackages/getAll/AddOns',
    createAddon: 'pwpackages/createAddOn',
    updateAddon: 'pwpackages/updateAddOn',
    deleteAddon: 'pwpackages/deleteAddOn',
  },
  inventoryManagment: {
    getAllInventories: 'inventory/getAll/Inventories',
    getInventoryById: 'inventory/inventoryDetail',
  },
  ManageMeetings: {
    postMeeting: 'meet-session',
    meeting: 'meet-session/forAdmin',
    updateMeeting: 'meet-session',
    deleteMeeting: 'meet-session',
    createParticipants: 'meet-session/createBookingSession',
    getAllParticipants: 'meet-session/getAll/BookingSessionByMeetId',
  },
  milestones: {
    getAllMilestones: 'milestones/getAllMilestonesForAdmin',
    createMilestone: 'milestones/createMilestone',
    updateMilestone: 'milestones/updateMilestone',
    deleteMilestone: 'milestones/deleteMilestone',
    uploadAdvertisement: 'promotion/uploadAdvertisement',
  },
  lounge: {
    getLounge: 'lounge',
    findLoungeByPWProjectId: 'pw-lo-inventory/findLounge/ByPWProjectId',
    createLounge: 'lounge',
    getLoungeOwner: 'lounge-user',
    uploadAdvertisement: 'promotion/uploadAdvertisement',
    updateLounge: 'lounge',
    loungeActiveStatus: 'lounge/update/loungeActiveStatus',
    withdrawList: 'lounge-user-wallet/withDrawRequestsforAdmin',
    withdrawAmount: 'lounge-user-wallet/requestApprovalForLoWallet',
    assignInventory: 'pw-lo-inventory/assign',
    getInventoryList: 'pw-lo-inventory',
  },
  projectCoodinator: {
    signup: 'pro-coo-auth/PcSignUp',
    roleList: 'pro-coo-auth/getProCooRoleList',
    getAllCoordinator: 'pro-coo-auth/getAllCoordinator',
    postStatusForCoo: 'pro-coo-auth/suspendCoordinator',
    getProject: 'pro-coo-assign-project/getProjects',
    assignProjects: 'pro-coo-assign-project/proCooAssign/Project',
    gatAllProject: 'pro-coo-assign-project/getProjects',
    getLogsByProjectIdForAdmin: 'pro-coo-visit-logs/getLogsByProjectIdForAdmin',
    getProjectsForAssign: 'pro-coo-assign-project/getProjectsForAssign',
  },
  BusinessDevelopment: {
    signup: 'bd-user/register',
    roleList: 'bd-user/list/roles',
    getAllUsers: 'bd-user/get-list',
    getAffiliateForAssign: 'bd-user/list/affiliate',
    assignAffiliate: 'bd-user/assign/affiliate',
    getAffiliateDetails: 'bd-user/getAll/SubscribersByIdForAdmin',
    activeOrDeactiveUser: 'bd-user/deactive',
    getManagerDetails: 'bd-user/getAll/SubscribersByIdForAdmin',
    createMeeting: 'bd-meeting',
    allBDMeetingsForAdmin: 'bd-meeting/allBDMeetingsForAdmin',
    BDMeetingSessionByBDMeetingId:
      'bd-meeting/getAll/BDMeetingSessionByBDMeetingId',
    updateBdMeeting: 'bd-meeting',
    deleteBdMeeting: 'bd-meeting',
    createBDMeetingSession: 'bd-meeting/createBDMeetingSession',
    getAllBDMilestonesForAdmin: 'bd-milestone/getAllMilestonesForAdmin',
    createBDMilestone: 'bd-milestone/createMilestone',
    updateBDMilestone: 'bd-milestone/updateMilestone',
    deleteBDMilestone: 'bd-milestone/deleteMilestone',
    getAllRealeaseSalary: 'bd-user/get-list',
    releaseSalary: 'bd-wallet/salary-release',
    releaseHistory: 'bd-wallet/getSalaryReleaseLog/ForAdmin',
    getListAffiliate: 'bd-user/getList/OfAffiliatesByManagerId',
    getListSignup: 'bd-user/getAll/signupListByAffiliateIdForAdmin',
    getListAllBDUser: 'bd-user/get-list-all-bdUser',
    assignBDMeetingSession: 'bd-meeting/assignBDMeetingSession',
  },
  survey: {
    getSurvey: 'survey-form/findAllSurvey/FormAdminSide',
    createSurvey: 'survey-form/AddSurveyForm/AdminSide',
    editSurvey: 'survey-form/editdSurveyForm/AdminSide',
    getAllInterestedSurvey: 'survey-form/findAllSurveyLogs/FormAdminSide',
  },
  userActivities: {
    getAllUserActivitiesLogs: 'land-area/findAllLogs',
    getAllModuleNames: 'land-area/findAllModules',
  },
  agencyProfile: {
    getAgencyDetails: 'ticketing-system/getUser-ForAdmin/ByPhoneNo',
    freeTrial: 'ticketing-system/pwAssignPkg/freeTrial',
  },
  ticketing: {
    getAllTicketsForAdminSide: 'ticketing-system/getAllTickets/ForAdminSide',
    getTicketDataById: 'ticketing-system/getTicketDataByIdForAdmin',
    getAllTicketUsers: 'ticketing-system/getAllTicketSysemUsers/ForAdminSide',
    suspendTicketUser: 'ticketing-system/SusupendCustomerByAdmin',
    addDepartment: 'ticketing-system/addDepartment',
    GetDepartment: 'ticketing-system/getAllDepartrments/AdminSide',
    DeleteDepartment: 'ticketing-system/deleteDepartmentById',
    EditDepartment: 'ticketing-system/updateDepartment',
  },
  agency: {
    getAllAgency: 'agency/forAdmin/getAllAgencies',
    getAllAgentReview: 'agency/forAdmin/getAgencyReviewById',
    delete: 'rate-and-review',
    agencyCatalogue: 'catalogue/getAllAgencyDigitalCatlouge',
    getAllELoungesForSaleUser: 'elounge/getAllELoungesForAdminSide',
    getAllSaleUserByLoungeId:
      'elounge/getAllSaleUsersForEachELoungesForAdminSide',
    assignSaleUserToAgency: 'elounge/assignSaleUserInAgencyies',
  },
  catalogue: {
    getAllAgencyReview: 'agency/forAdmin/getAllAgencyReview',
    getAllBookedMeetingSlots: 'agency/forAdmin/getAllAgencyBookedSlots',
    getAllAgentReview: 'agency/forAdmin/getAllAgencyAgentReviews',
  },
  eLounge: {
    assignUser: 'elounge/assign/Elounge',
    getELounge: 'elounge/GetAllELounges',
    findLoungeByPWProjectId: 'pw-lo-inventory/findLounge/ByPWProjectId',
    createELounge: 'elounge',
    uploadAdvertisement: 'promotion/uploadAdvertisement',
    updateELounge: 'elounge/editELounge',
    loungeActiveStatus: 'lounge/update/loungeActiveStatus',
    assignInventory: 'pw-lo-inventory/assign',
    getInventoryList: 'pw-lo-inventory',
    postRole: 'elounge-role',
    getRolesTitle: 'elounge-role',
    patchRolesUpdate: 'elounge-role',
    deleteRole: 'elounge-role',
    createEloungeUser: 'elounge-user/create/ELoungeUser',
    getEloungeUser: 'elounge-user/GetAllELoungeUser',
    getAllELoungeAssignUser: 'elounge/GetAllELoungeUsers',
    deleteELoungeAssignUser: 'elounge/deleteAssignElounge',
    suspendUser: 'elounge-user/suspendEloungeUser',
    getEloungeUserNameAndId: 'elounge-user/GetAllELoungeUsersList',
    updateUser: 'elounge-user/updateEloungeUserContactDetails',
    withdrawList: 'elounge-user/withdrawRequests/forAdmin',
    withdrawAmount: 'elounge-user/requestApprovalForEloungeSleWallet',
    getSalesUsers: 'elounge/GetAllPersonsForLeadUsers',
    assignSalesUserToLead: 'elounge/newEloungeLead',
    withdrawAmountManagerUser: 'elounge-user-wallet/withdrawRequestApproval',
    withdrawListManagerUser: 'elounge-user-wallet/getWithdrawRequests/forAdmin',
    unAssignEloungeAssignUserToLead:
      'elounge/deleteIndividualSaleFromAssignedLead',
    getEloungeAssignUserToLead: 'elounge-user/getAllAssignSaleUserByLeadId',
    getAllMarketingRequirment:
      'requirement-form/getAllRequirementForms/ForAdmin',
  },
  voucher: {
    getAllCustomData: 'pwpackages/getAllCustomPackages/forAdmin',
    getAllVouchers: 'voucher-redeem/getAllVouchers',
  },
}
