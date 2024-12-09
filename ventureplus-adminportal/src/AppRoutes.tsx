import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ChatperPage,
  QuestionPage,
  TopicPage,
  CreatePackagePage,
  AddOnPage,
  UserPage,
  AffiliateUsersPage,
  IdeaValidationsPage,
  BusinessesPage,
  BusinessPlanPage,
  BlogsPage,
  LeadsPage,
  NewBlogPage,
  UpdateBlogPage,
  CouponPage
} from "./views/Pages/PageListAsync";
import Sidebar from "./layout/sidebar";
const AppRoutes: React.FC<any> = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path={`/question`} element={<QuestionPage />} />
        <Route path={`/chapter`} element={<ChatperPage />} />
        <Route path={`/topic`} element={<TopicPage />} />
        <Route path={`/create-package`} element={<CreatePackagePage />} />
        <Route path={`/add-on`} element={<AddOnPage />} />
        <Route path={`/affiliateUsers`} element={<AffiliateUsersPage />} />
        <Route
          path={`/ideaValidationsPage`}
          element={<IdeaValidationsPage />}
        />
        <Route path={`/businesses`} element={<BusinessesPage />} />
        <Route path={`/business-plan`} element={<BusinessPlanPage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path={`/`} element={<UserPage />} />
        <Route path={`/blogs`} element={<BlogsPage />} />
        <Route path={`/new-blog`} element={<NewBlogPage />} />
        <Route path={`/update-blog/:id`} element={<UpdateBlogPage />} />
        <Route path={`/coupons`} element={<CouponPage />} />
      </Routes>
    </Sidebar>
  );
};
export default AppRoutes;
