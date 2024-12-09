import { Store, combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import chapterSlice from "./slices/Dashboard/Chatper/chapterSlice";
import topicSlice from "./slices/Dashboard/Topic/topicSlice";
import getAllQuestionSlice from "./slices/Dashboard/Question/getAllQuestionSlice";
import questionSlice from "./slices/Dashboard/Question/questionSlice";
import createPackageSlice from "./slices/Dashboard/CreatePackage/createPackageSlice";
import usersSlice from "./slices/Dashboard/Users/usersSlice";
import getIdeaValidationsSlice from "./slices/Dashboard/IdeaValidations/getIdeaValidations";
import getBusinessesSlice from "./slices/Dashboard/Businesses/getBusinesses";
import getBusinessPlanSlice from "./slices/Dashboard/Businesses/getBusinessPlan";
import blogsCategorySlice from "./slices/Dashboard/Blogs/blogsCategory";
import allBlogsSlice from "./slices/Dashboard/Blogs/allBlogs";
import leadsSlice from "./slices/Dashboard/Leads/leadsSlice";
import topicsSlice from "./slices/Dashboard/Topic/topicsSlice";
import couponsSlice from "./slices/Dashboard/Coupons/index"

const rootSlices = combineReducers({
  user: authSlice,
  chapter: chapterSlice,
  topic: topicSlice,
  getAllQuestion: getAllQuestionSlice,
  question: questionSlice,
  createPackage: createPackageSlice,
  users: usersSlice,
  getIdeaValidations: getIdeaValidationsSlice,
  getBusinesses: getBusinessesSlice,
  getBusinessPlan: getBusinessPlanSlice,
  blogsCategory: blogsCategorySlice,
  allBlogs : allBlogsSlice,
  leads: leadsSlice,
  allTopics: topicsSlice,
  coupons :couponsSlice
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
