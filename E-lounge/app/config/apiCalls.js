const API = {
  auth: {
    login: "elounge-user/eLoungeUser/signIn",
  },
  dashboard: {
    banks: "lounge-user-wallet/bankData",
    walletList: "elounge-user/getWithdrawRequests/forSaleUser",
    walletBalance: "elounge-user/getSaleUser/WalletAmount",
    withdrawAmount: "elounge-user/add-new-withdrawRequest",
    getSaleOrder: "lounge/saleorderData/ForLounge",
    getSaleOrderGraphData: "lounge/getSalOrderGraphData/ByMonth",
    getSalesOrderAndCommisson: "lounge/getSalOrderCount/AndComission",
  },
  inventory: {
    getAllProjectType: "project-type",
    getAllProjectSubType: "project-sub-type/getList",
    getAllLandArea: "land-area",
    uploadImages: "project/upload-multiple-files",
    utils: "utils",
    facing: "facing",
    addProjectOrInventory: "lo-inventory/add-with-LoInventory",
    getAllProjects: "lo-inventory/getAllLoProject",
    getAllProperty: "lo-inventory/getAll/LoInventory",
    addProjectInventory: "lo-inventory/addNew-inventory",
    getAllProjectInventories: "lo-inventory/getAllLoInventoryBy",
    getInventoryById: "lo-inventory/getLoInventoryById",
    editInventoryDetails: "lo-inventory/editLoInventoryDetail",
    deleteProjectPhoto: "lo-inventory/deleteLoInventoryPhoto",
    deleteProjectDocuments: "lo-inventory/removeDocumentByloinventory",
    updateProjectPhotos: "lo-inventory/addLoInventoryPhoto",
    updateProjectDocuments: "lo-inventory/updateDocumentByloinventory",
    editFeatures: "lo-inventory/editLoFeatures",
    editUtils: "lo-inventory/editLoUtilities",
    editFacing: "lo-inventory/editLofacing",
    getAllPWInventoryByLounges: "lounge/getAll/PWInventoryByLounges",
    getAllInterestedInventories:
      "lo-inventory/getAll/interestedLoInventoryByLoInventoryIdForWeb",
    getAllPWInventoryByLounges: "pw-lo-inventory/getAll/PWInventoryByLounges",
    getProjectDetails: "pw-lo-inventory/getAll/PWInventoryCommission",
  },
  lounge: {
    getAllLoungesForOwner: "lounge/getAll/LoungesForOwner",
    getAllLoungeAssignReq: "lounge/allLounge/assignReq",
    getAllAssignedStaffByUser: "lounge/getAll/AssignedLoungeUser",
    postStaffAssignLounge: "lounge/staffAssignLounge",
    deleteStaffLeaveLounge: "lounge/staffLeaveLoungeForPortal",
    loungeOwnerUpdateLoungeCommission: "lounge-user/update/LoungeCommission",
    assignManagerToLounge: "lounge/assign/ManagerToLounge",
    getAllManagersForOwner: "lounge-user/getAll/ManagersForOwner",
    getAllManagersForTable: "lounge-user/getAll/ManagersForOwnerPagination",
    addNewManager: "lounge-user/lounge-manager/SignUp",
    editManager: "lounge-user/update/LoungeManager",
    deleteManager: "lounge-user/deleteManager",
    activeManager: "lounge-user/activateManager",
    getAnnouncements: "announcements",
    addNewLoungeAnnouncemet: "announcements/addNewLoungeAnnouncemet",
    paymentTransaction: "payment-transaction/lounge-user",
    attendanceCheck: "lounge/attendanceCheck/byLoungeId",
    getAllAgenciesByManagerId: "lounge/getAll/AssignedStaffByUser",
    getAllManagersByManagerId:
      "lounge-user/getAll/ManagersExceptSelectedManager",
    transferAgency: "lounge-user/lounge/agencyTransfer",
    deleteAnnouncement: "announcements/deleteAnnouncement",
    getAllStaffByAgencyId: "lounge/getAll/AssignedStaff/ByAgencyId",
    getLoungesByProjId: "lounge/getAllLoungesForOwnerBy",
  },
  earning: {
    earningTransaction: "lounge-user-wallet/earningTransaction",
    paymentTransaction: "payment-transaction/lounge-user",
    getSubscriptionAction: "lounge/getSubscription/Amount",
  },
  manageAssignedInventories: {
    createAssignInventoryForLounge: "lo-inventory/assignInventory/ForLounge",
    getAllAssignLoProject: "lo-inventory/getAll/AssignLoProject",
  },
  forgetPassword: {
    withEmail: "elounge-user/forgotPasswordForEloungeUser",
    verifyOtp: "elounge-user/fpCodeVerficationForEloungeUser",
    change: "elounge-user/changePasswordForEloungeUser",
  },
  currentSubscribers: {
    subscriberList: "lounge-user/getall/subscribers/forlounge",
  },
  packages: {
    packagesList: "pwpackages/public/getAll",
    discount: "pwpackages/purchase/public/discount",
    checkout: "voucher-redeem/purchase",
    checkoutwithpaymob: "voucher-redeem/purchase/by-paymob",
    getAllCustomPackages: "pwpackages/getAllCustomPackages/forUser",
    createPackage: "pwpackages/createCustomPackage",
  },
  profile: {
    updateProfile: "lounge-user/update/LoungeManager",
    changePassword: "elounge-user/changePasswordForEloungeUserInApp",
  },
  earningHistory: {
    subscribers: "elounge-user/getAll/Subscribers/ForELounge",
    signups: "elounge-user/getAll/Signups/ForELounge",
    transaction: "elounge-user/getAll/TransactionSaleUser/ELounge",
    getPwInventory: "elounge-user/getAll/InventoriesSaleUser/ELounge",
    getSaleOrderById: "elounge-user/get/SaleOrderById/ELounge",
    getTokenById: "elounge-user/get/TokenInventoryById/ELounge",
    // getAllTransactionHistory:
    //   "elounge-user/getAllTransactionHistory/ForEachUserOfELounge",
    getAllTransactionHistory:
      "elounge-user/getAllTransactionHistory/ForSingleELoungeUser",
    getAllTaget: "elounge/GetAllTaget/Counts",
  },
  loungeWallet: {
    poolDivision: "elounge-user/PoolDivision",
  },
  visitManager: {
    getAllEloungeVisitForManagement:
      "elounge-visit/getAllEloungeVisitFor/Management",
    // "elounge-visit/getAllEloungeVisitForManagement",
    getAssignEloungeSaleUser: "elounge-user/getAssignEloungeSaleUser",
    getAssignEloungeSaleUserLead:
      "elounge-user/getAllAssignSaleUserByLeadIdByToken",
  },

  visits: {
    getAll: "elounge-visit/getAllEloungeVisit",
    editVisit: "elounge-visit/editEloungeVisit",
    addNewVisit: "elounge-visit/createEloungeVisit",
    deleteVisit: "elounge-visit/deleteEloungeVisit",
    uploadAtachments: "project/upload-multiple-files",
  },
  monitoring: {
    getSignUpCountsForLead: "elounge/getSignUpCountsForLead",
    getSubscriberCountsForLead: "elounge/getSubscriberCountsForLead",
    getAllSaleUserInventoriesForLead:
      "elounge-user/getAllSaleUserInventoriesForLead",
    getAllTransactionHistory: "elounge-user/getAll/Transaction/ForLeadUser",
  },
  leadVisit: {
    getVisitedSalesUserForLead: "elounge-user/getVisitedSalesUserForLead",
    getVisitedUserForLead: "elounge-visit/getAllEloungeVisitForLead",
  },

  tracking: {
    saleUserInventoriesByELounge:
      "elounge-user/getAll/SaleUserInventoriesByELounge/ELounge",
    signUpCounts: "elounge/get/SignUpCounts",
    subscriberCounts: "elounge/get/SubscriberCounts",
    getAllTransactionHistoryForManagement:
      "elounge-user/getAllTransactionHistory/ForManagement",
    getAllMyTransaction:
      "elounge-user/getAllTransactionHistory/ForEachUserOfELounge",
    getLeadListForDropDown: "elounge-user/getLeadListForDropDown",
    getAllAssignSaleUserByLeadIdForEloungeUsers:
      "elounge-user/getAllAssignSaleUserByLeadIdForEloungeUsers",
  },
  marketingRequirementForSale: {
    requirementForm: "requirement-form",
  },
  marketingRequirementForManagement: {
    getAllRequirementForms:
      "requirement-form/getAllRequirementForms/Management",
  },
  marketingRequirementForLead: {
    getAllRequirementFormsForLead:
      "requirement-form/getAllRequirementForms/Lead",
  },
  otherRoles: {
    walletBalance: "elounge-user-wallet/getUser/WalletAmount",
    withdrawAmount: "elounge-user-wallet/add-new-withdrawRequest",
    walletList: "elounge-user-wallet/getWithdrawRequests/forUser",
  },
  assignedAgencies: {
    sale: "elounge/getAssignedAgenciesForSales",
    lead: "elounge/getAssignedAgenciesForLead",
    manager: "elounge/getAssignedAgenciesForManagement"
  }
};
export { API };
