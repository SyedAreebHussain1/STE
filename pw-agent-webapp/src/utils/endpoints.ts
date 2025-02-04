const ENDPOINT = {
  auth: {
    login: "auth/user/signin",
    preSignUp: "auth/pre-phone-verification",
    signUp: "auth/V2signup",
    forgetPasswordEmail: "auth/forgot-password",
    forgetPasswordOTP: "auth/fp-code-verify",
    forgetPasswordChangePassword: "auth/reset-password",
    resendOtp: "auth/resendOTP",
    verifyUserCreateOtp: "auth/post-phone-verification",
    createAgency: "auth/V2addAgency",
    getAgencyByAgencyCode: "auth/V2getAgencyId/ByAgencyCode",
    joinAgencyByAgencyCode: "auth/V2joinAgencyByAgencyCode",
    getProfile: "profile",
  },
  company: {
    createCompany: "Company/createNewCompany",
    GetAllBusiness: "business-type/GetAllBusiness",
    getTimeZone: "country/GetAllTimeZone",
    getCountries: "country/GetAllCountries",
    getCities: "city/GetAllCities",
  },
  dashboard: {
    getAllUsers: "",
  },
  userManagement: {
    createUser: "Company-user/add",
    getNationality: "nationality/GetAllNationality",
    getcompanyUserType: "business-type/companyUserType",
    getAllUserList: "Company-user/users",
  },
  roleManagement: {
    getModule: "Company-Auth/company/Module",
    createCompanyRole: "Company-Auth/create/update/companyRole",
    getCompanyRole: "Company-Auth/company/role",
    getModuleBYRoleId: "Company-Auth/company/role/module",
  },
  timeOffAndHoliday: {
    getCompanyLeavePolicy: "company-leave-policy",
    createCompanyLeavePolicy: "company-leave-policy/create",
    getCompanyUsers: "Company-user/users",
    updateCompanyLeavePolicy: "company-leave-policy/update",
  },
  leadManagement: {
    uploadLeadExcels: "lead/uploadExcel",
    getAllLead: "lead",
    getAllLeadsFollowUp: "lead/getAllLeadsFollowUp",
    getLeadDataById: "lead/GetLeadDataById",
    deleteLeadInventory: "lead/DeleteLeadInventory",
    updateLeadStatus: "lead/updateLeadStatus",
    pwpGetAllProjectList: "property-wallet-project/getAllProjectList",
    pwpGetAllProductList: "property-wallet-product/getAllProductList",
    assignUserNew: "lead/assign-user-new",
    getLeadsAssignUsersOrnotAssignUsersNew:
      "lead/getLeadsAssignUsersOrnotAssignUsersNew",
    getAllProjectInventory: "project/getAllProject/Inventory",
    getEnumsforleadInvntoryModule: "lead/getEnumsforleadInvntoryModule",
    getAvailableInventoriesByProjectId:
      "property-wallet-inventory-plot/getAvailableInventoriesByProjectId",
    addNewLead: "lead/add-new-lead",
    getLeadsAssignUsersOrnotAssignUsers:
      "lead/getLeadsAssignUsersOrnotAssignUsers",
    getLeadlog: "lead/get-leadlog",
    addNewLeadlog: "lead/add-new-leadlog",

    addNewLeadlogNote: "lead/add-new-leadlog-note",
    getAgentCalendarSlotList: "public-meeting/get-agent-calendar/slot-list",
    createPublicCalendarSlotList:
      "public-meeting/public-calendar/slot-booking/by-agent",
    updateLeadDataById: "lead/UpdateLeadDataById",
    addNewLeadFollowUp: "lead/addNewLeadFollowUp",
    getAgentCalendarSlotRequest:
      "public-meeting/get-agent-calendar/slot-request",
    slotReschedule: "public-meeting/public-calendar/slot-reschedule",
    updateUserAvailability: "catalogue/updateUserAvailability",
    leadRemoveLeadPermission: "lead/RemoveLeadPermission",
    assignInventory: "lead/assign-Inventory",
    getPWPlotInventoryByProjectId: "lead/getPWPlotInventoryByProjectId",
    getInventoryByProject: "lead/getInventoryByProject",
    getAllCampaigns: "campaigns/GetAll",
  },
  staffManagement: {
    createStaff: "auth/add/staff_manager",
    getAllStaff: "auth/get/allUserForWebApp",
    getOnlyStaffManager: "profile/mana/list",
    activeUser: "auth/active/AllUsers",
    deactiveUser: "auth/deActive/AllUsers",
    deleteStaff: "auth/delete-user",
    getStaffReview: "rate-and-review/getAllReviewForAgent",
    getAgencyCode: "agency/getAgency/Code",
    getAgencyStaffRequestList: "profile/staff_manager/request/list",
    rejectStaffRequest: "profile/delete-staff-request",
    acceptStaffRequest: "profile/managerId/userId",
    deletemultipleStaff: "auth/delete-multi-user",
    getBookingSlots: "public-meeting/public-calendar/get/meeting",
    getStaffByManagerID: "auth/managerStaffs",
  },
  inventoryManagement: {
    getProject: "project/getAllProject/Inventory",
    getProperties: "project/getAllProject/Inventory",
    getProjectDetails: "project/getProject",
    getPropertyDetails: "inventory",
    getAssignLeadForInventory: "inventory/getleadsByInventoryId",
    getLandArea: "land-area",
    getProjectType: "project-type",
    getProjectSubType: "project-sub-type",
    getProjectSubTypesbyProjectTypeID: "project-sub-type/getList",
    uploadProjectImages: "project/upload-multiple-files",
    getProjectSubTypeNameByID: "project-sub-type",
    getUtilites: "utils",
    getFacing: "facing",
    createProject: "project/add-with-inventory",
    getManager: "profile/manager/list",
    getStaff: "profile/staff/list",
    createInventoryOfExistingProject: "project/addNew-inventory",
    getInventoryForEdit: "inventory/getInventoryDetailsForPublic",
    deletePhotoInventory: "inventory/delete-inventory-photo",
    editphotoForInventory: "inventory/add-inventory-photo",
    InventoryViewPermissions: "project/get/Inventory/viewPermissions",
    editFeature: "inventory/edit-features",
    editFacing: "inventory/edit-facing",
    editUtilite: "inventory/edit-utilities",
  },
  wallet: {
    getUserWallet: "user-wallet/getUserWallet",
    addNewWithdrawRequest: "user-wallet/add-new-withDrawRequest",
    paymentByPayMob: "user-wallet/wallet-deposit/by-paymob",
    paymentByBlinq: "user-wallet/wallet-deposit",
    getWalletTransactionHistory: "user-wallet/getUserWalletTransaction",
    getWalletWithdrawRequests: "user-wallet/getAgent/withDrawRequets",
    addPaymobCard: "user-wallet/add-Card/by-paymob",
  },
  webEstate: {
    getAgencyDetails: "agency/get/Agency/Detail",
    editAgencyProfile: "agency",
    editWebsite: "catalogue/editDigitalCatalogue",
    getWebsite: "catalogue/catalogData/ForAgency",
    getWebEstateAnalytics: "analytic/getAnalyticCount",
    getAllAgencyReviews: "rate-and-review/getAllReviewForAgency",
    getAllAgentReviews: "rate-and-review/getAllReviewForAgent",
    announcement: "dc-announcement",
    agencyReviewVisibility: "rate-and-review/agencyReviewVisibility",
  },
  tasksOverview: {
    task: "task",
    getAllTasks: "task/get-count/tasks",
    getCampaignsByAgencyId: "campaigns/campaignsByAgencyId",
    getTeamMember: "profile/mana/list",
    getProfileStaffList: "profile/staff/list",
    getLeadsByCampaignId: "lead/LeadsByCampaignId",
    getCampaignsId: "campaigns",
    viewTaskDetails: "task",
    markAsComplete: "task/mark-as-complete",
  },
  campaign: {
    createNewCampaign: "campaigns",
    getAllAgnecyCampaign: "campaigns/paginatedCampaignsByAgencyId",
    getAllLeadByCampaign: "lead/LeadsByCampaignId",
    patchCampaignName: "campaigns/editCampaign",
    uploadExcelForExistingCampaign: "lead/uploadExcelForCampaign",
    uploadExcelwithCampaignName: "lead/uploadExcelByCampaignName",
    getStagesByCampaignId: "campaigns/stagesByCampaignId",
    getPipelinesStagesLead: "campaigns/getPipelinesStagesLead",
    getLeadStats: "final-leads/getLeadStats",
    getLeadStatsForChart: "final-leads/getLeadStatsForChart",
    TotalLeadAndLeadSource: "lead/LeadsSourceCountBy",
    LeadStatus: "lead/LeadsStatusCountBy",
    getTotalLeadLogsByAgency: "lead/leadLog-count",
    editFinalLead: "final-leads/editFinalLead",
    addPipeLineStage: "campaigns/addPipeLineStage",
    editPipelineStage: "campaigns/editPipelineStage",
    createFinalLead: "final-leads/createFinalLead",
  },
  facebook: {
    SelectCampaign: "campaigns/graphApi/add-access-token",
    getFacebookAddSet: "campaigns/graphApi/adSetsByCampaignId",
    getFacebookAdd: "campaigns/graphApi/adsByAdSetId",
  },
  marketingTools: {
    createBusinessCard: ""
  },
  packages: {
    packagesList: "pwpackages/subscriptions/list?page=1&limit=100",
    discount: "pwpackages/purchase/public/discount",
    checkout: "voucher-redeem/purchase",
    checkoutwithpaymob: "voucher-redeem/purchase/by-paymob",
    getAllCustomPackages: "pwpackages/getAllCustomPackages/forUser",
    createPackage: "pwpackages/createCustomPackage",
    cancelPwSubPackage: "pwpackages/agnetSubsCancel",
  },
};
export { ENDPOINT };
