import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import {
  AccountSettingsPage,
  BusinessAccSettingsPage,
  BusinessSettingsPage,
  CommunicationAccSettingsPage,
  FilledPlanSetupPage,
  MainDashboardPage,
  ProfileAccSettingsPage,
  SecurityAccSettingsPage,
  SubscriptionAccSettingsPage,
  ViewPlanPage,
  QuestionsPage,
  BlogPage,
  ProductPromotionsPage,
  ProductDetailPage,
  ProductUpdatePage,
  PromoteYourProductPage,
  CreateProductPage,
  AddNewIdeaPage,
  IdeaEvaluationPage,
  ViewPlanAndDownloadPdfPage,
  OnBoardingFinalPage,
  BusinessPlanSetupPage,
  AddProductPage,
  AddServicePage,
  AddEquityPage,
  AddStaffPage,
  EditProductPage,
  EditEquityPage,
  EditStaffPage,
  EditServicePage,
  BusinessToolkitPage,
  CriticalAnalysisPage,
  CompanyProfilePage,
  BusinessModelCanvasPage,
  DownloadCanvasPage,
  PitchDeckPage,
  SubscriptionPlanPage,
  WebsiteHomePage,
  CheckOutPage,
  InitialBusinessPlanPage,
  PitchDeckQuestionnairePage,
  PitchQuestionPage,
  ChatBotPage,
  ViewAllBlogsPage,
  BlogsDetailsPage,
  FAQsPage,
  RequestSupportPage,
  PitchDeckEditorPage,
} from "../pages/PageListAsync";
import UpdateNewIdea from "../pages/UpdateNewIdea";
import AllDone from "../views/CheckOut/helpers/AllDone";

const AppRoutes: React.FC<any> = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path="/dashboard" element={<MainDashboardPage />} />
        <Route path="/edit-plan" element={<FilledPlanSetupPage />} />
        <Route path="/business-settings" element={<BusinessSettingsPage />} />
        <Route path="/edit-plan/:id" element={<ViewPlanPage />} />
        <Route path="/questions/:id" element={<QuestionsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/allblogs/:id" element={<ViewAllBlogsPage />} />
        <Route path="/blogs-details/:id" element={<BlogsDetailsPage />} />
        <Route path="/add-new-idea" element={<AddNewIdeaPage />} />
        <Route path="/idea-evaluation" element={<IdeaEvaluationPage />} />
        <Route path="/update-new-idea/:id" element={<UpdateNewIdea />} />
        <Route path="/idea-evaluation/:id" element={<IdeaEvaluationPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        <Route
          path="/account-settings/profile"
          element={<ProfileAccSettingsPage />}
        />
        <Route
          path="/account-settings/security"
          element={<SecurityAccSettingsPage />}
        />
        <Route
          path="/account-settings/business"
          element={<BusinessAccSettingsPage />}
        />
        <Route
          path="/account-settings/communication"
          element={<CommunicationAccSettingsPage />}
        />
        <Route
          path="/account-settings/subscription"
          element={<SubscriptionAccSettingsPage />}
        />
        <Route path="/product-promotions" element={<ProductPromotionsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/product/update/:id" element={<ProductUpdatePage />} />
        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/promote-product" element={<PromoteYourProductPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/view-plan" element={<ViewPlanAndDownloadPdfPage />} />
        <Route
          path="/business-plan-setups"
          element={<BusinessPlanSetupPage />}
        />
        <Route
          path="/business-plan-setup/add-product"
          element={<AddProductPage />}
        />
        <Route
          path="/business-plan-setup/product/:id"
          element={<EditProductPage />}
        />
        <Route
          path="/business-plan-setup/equity/:id"
          element={<EditEquityPage />}
        />
        <Route
          path="/business-plan-setup/staff/:id"
          element={<EditStaffPage />}
        />
        <Route
          path="/business-plan-setup/service/:id"
          element={<EditServicePage />}
        />
        <Route
          path="/business-plan-setup/add-service"
          element={<AddServicePage />}
        />
        <Route
          path="/business-plan-setup/add-equity"
          element={<AddEquityPage />}
        />
        <Route
          path="/business-plan-setup/add-staff"
          element={<AddStaffPage />}
        />
        <Route
          path="/business-plan-setup/add-staff"
          element={<AddStaffPage />}
        />
        <Route path="/business-toolkit" element={<BusinessToolkitPage />} />
        <Route
          path="/business-toolkit/critical-analysis"
          element={<CriticalAnalysisPage />}
        />
        <Route
          path="/business-toolkit/company-profile"
          element={<CompanyProfilePage />}
        />
        <Route
          path="/business-toolkit/model-canvas"
          element={<BusinessModelCanvasPage />}
        />
        <Route
          path="/business-toolkit/model-canvas/download"
          element={<DownloadCanvasPage />}
        />
        <Route
          path="/business-toolkit/pitch-deck"
          element={<PitchDeckPage />}
        />
        <Route
          path="/business-toolkit/pitch-deck-editor"
          element={<PitchDeckEditorPage />}
        />
        <Route path="/on-boarding-final" element={<OnBoardingFinalPage />} />
        <Route path="/subscription-plan" element={<SubscriptionPlanPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/check-out/:id" element={<CheckOutPage />} />
        <Route
          path="/initial-business-plan"
          element={<InitialBusinessPlanPage />}
        />
        <Route path="/all-done" element={<AllDone />} />
        <Route
          path="/pitch-questionnaire"
          element={<PitchDeckQuestionnairePage />}
        />
        <Route path="/pitchQuestion/:id" element={<PitchQuestionPage />} />
        <Route path="/consultant" element={<ChatBotPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/request-support" element={<RequestSupportPage />} />
      </Routes>
    </Sidebar>
  );
};

export default AppRoutes;
