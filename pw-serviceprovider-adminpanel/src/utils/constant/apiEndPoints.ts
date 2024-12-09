const ENDPOINT = {
  auth: {
    login: "system-user/login",
    getProfile: "profile",
  },
  userManagement: {
    getAllSystemRoles: "system-user/getAll/SystemRoles",
    systemRole: "system-user/create/update/systemRole",
    getAllModules: "system-user/getAll/Modules",
    registration: "system-user/user/registration",
    getAllSystemUsers: "system-user/system/users",
    updateSystemUsers: "system-user/user/update",
    getAllModulesSideBar: "system-user/assigned/modules",
    updateStatus: "system-user/update/status",
    getModuleBYRoleId: "system-user/assigned/modules",
  },
  category: {
    categoryAndServices: "system-user/create/categoryAndServices",
    getAllCategories: "system-user/getAll/Categories",
    updateCategory: "system-user/updateCategory",
  },
  services: {
    createServiceWithCategoryId: "system-user/create/serviceWithCategoryId",
    getCategories: "system-user/get/categories",
    getAllServices: "system-user/getAll/services",
  },
  customers: {
    customers: "system-user/getAll/customers",
    customerById: "system-user/customer",
  },
  serviceProviders: {
    getServiceProviders: "system-user/service/providers",
    approveRejectSP: "system-user/approve/reject/SP",
  },
  package: {
    getServicePackages: "sp-packages/service/packages",
    deleteServicePackages: "sp-packages/service/package",
    createPackage: "sp-packages/create/update/package",
  },
  order: {
    getServiceOrders: "customer-auth/service/orders/ForAdmin",
    ordersRequests: "system-user/service/orders/requests",
  },
  rating: {
    getServiceProviderRating: "system-user/get/serviceProvider/rating",
    getCustomerRating: "system-user/get/customer/rating",
  },
  wallet: {
    getWithdrawRequest: "system-user/WithdrawRequest",
    requestApprovalForWallet: "service-provider/RequestApprovalForWallet",
  },
};
export { ENDPOINT };
