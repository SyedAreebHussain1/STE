import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import createSystemRoleSlice from "./slices/Dashboard/UserManagment/CreateSystemRoleSlice";
import getAllCustomersSlice from "./slices/Dashboard/Customers/GetAllCustomersSlice";
import getCustomerByIdSlice from "./slices/Dashboard/Customers/GetCustomerByIdSlice";
import categoryAndServicesSlice from "./slices/Dashboard/Category/categoryAndServicesSlice";
import getAllCategoriesSlice from "./slices/Dashboard/Category/getAllCategoriesSlice";
import updateCategorySlice from "./slices/Dashboard/Category/updateCategorySlice";
import createServiceWithCategoryIdSlice from "./slices/Dashboard/Services/createServiceWithCategoryIdSlice";
import getCategoriesSlice from "./slices/Dashboard/Services/getCategoriesSlice";
import getAllServicesSlice from "./slices/Dashboard/Services/getAllServicesSlice";
import getSystemRoleSlice from "./slices/Dashboard/UserManagment/GetSystemRoleSlice";
import getAllModulesSlice from "./slices/Dashboard/UserManagment/GetAllModulesSlice";
import getAllSystemUsersSlice from "./slices/Dashboard/UserManagment/getAllSystemUsersSlice";
import updateSystemUserSlice from "./slices/Dashboard/UserManagment/updateSystemUserSlice";
import getAllModulesSideBarSlice from "./slices/Dashboard/UserManagment/getAllModulesSideBarSlice";
import getServiceProvidersSlice from "./slices/Dashboard/ServiceProviders/getServiceProvidersSlice";
import getServicePackagesSlice from "./slices/Dashboard/Package/getServicePackagesSlice";
import deleteServicePackagesSlice from "./slices/Dashboard/Package/deleteServicePackagesSlice";
import getServiceOrdersSlice from "./slices/Dashboard/Order/getServiceOrdersSlice";
import createPackageSlice from "./slices/Dashboard/Package/createPackageSlice";
import getServiceProviderRatingSlice from "./slices/Dashboard/Rating/ServiceProviderRating/getServiceProviderRatingSlice";
import getCustomerRatingSlice from "./slices/Dashboard/Rating/CustomerRating/getCustomerRatingSlice";
import getWithdrawRequestSlice from "./slices/Dashboard/Wallet/getWithdrawRequestSlice";
import requestApprovalForWalletSlice from "./slices/Dashboard/Wallet/requestApprovalForWalletSlice";
import ordersRequestsSlice from "./slices/Dashboard/Order/ordersRequestsSlice";
import createUserSlice from "./slices/Dashboard/UserManagment/CreateUserSlice";
import updateStatusSlice from "./slices/Dashboard/UserManagment/updateStatusSlice";
import approveRejectSPSlice from "./slices/Dashboard/ServiceProviders/approveRejectSPSlice";
import getModuleBYRoleIdSlice from "./slices/Dashboard/UserManagment/getModuleBYRoleIdSlice";
const rootSlices = combineReducers({
  user: authSlice,
  createSystemRole: createSystemRoleSlice,
  getSystemRole: getSystemRoleSlice,
  getAllModule: getAllModulesSlice,
  getAllCustomers: getAllCustomersSlice,
  getCustomerById: getCustomerByIdSlice,
  categoryAndServices: categoryAndServicesSlice,
  getAllCategories: getAllCategoriesSlice,
  updateCategory: updateCategorySlice,
  createServiceWithCategoryId: createServiceWithCategoryIdSlice,
  getCategories: getCategoriesSlice,
  getAllServices: getAllServicesSlice,
  createUser: createUserSlice,
  getAllSystemUsers: getAllSystemUsersSlice,
  updateSystemUser: updateSystemUserSlice,
  getAllModulesSideBar: getAllModulesSideBarSlice,
  getServiceProviders: getServiceProvidersSlice,
  getServicePackages: getServicePackagesSlice,
  deleteServicePackages: deleteServicePackagesSlice,
  getServiceOrders: getServiceOrdersSlice,
  createPackage: createPackageSlice,
  getServiceProviderRating: getServiceProviderRatingSlice,
  getCustomerRating: getCustomerRatingSlice,
  getWithdrawRequest: getWithdrawRequestSlice,
  requestApprovalForWallet: requestApprovalForWalletSlice,
  ordersRequests: ordersRequestsSlice,
  updateStatus: updateStatusSlice,
  approveRejectSP: approveRejectSPSlice,
  getModuleBYRoleId: getModuleBYRoleIdSlice,
});
export const store: Store = configureStore({
  middleware: (serialData) =>
    serialData({
      serializableCheck: false,
    }),
  reducer: rootSlices,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
