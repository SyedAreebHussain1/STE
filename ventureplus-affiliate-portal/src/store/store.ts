import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import getMarketingSlice from "../store/slices/Dashboard/Marketing/getMarketingSlice";
import getEbooksSlice from "../store/slices/Dashboard/Ebooks/getEbooksSlice";
import forgetPasswordSlice from "./slices/auth/forgetPasswordSlice";
import allSubscribersSlice from "./slices/Dashboard/Main/AllSubscribersSlice";
import allSignupsSlice from "./slices/Dashboard/Main/AllSignupsSlice";
import transactionHistorySlice from "./slices/Dashboard/Wallet/TransactionHistorySlice";
import affilateUserProfileSlice from "./slices/Dashboard/Profile/affilateUserProfileSlice";
import affilateBankDetailsSlice from "./slices/Dashboard/Bank/affilateBankDetailsSlice";

const rootSlices = combineReducers({
  user: authSlice,
  getMarketingSlice: getMarketingSlice,
  getEbooksSlice: getEbooksSlice,
  forgetPasswordSlice: forgetPasswordSlice,
  allSubscribers: allSubscribersSlice,
  allSignups: allSignupsSlice,
  transactionHistory: transactionHistorySlice,
  affilateUserProfile: affilateUserProfileSlice,
  affilateBankDetails: affilateBankDetailsSlice,
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
