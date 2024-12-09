import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  StaffManagementPage,
  StaffDetailsPage,
  InventoryManagement,
  AllProjects,
  AllProperties,
  PropertyViewDetails,
  ProjectViewDetails,
  AddInventoryPage,
  LeadManagementPage,
  EditInventoryPage,
  LeadsDetailsPage,
  WalletPage,
  WebEstatePage,
  AddNewWebEstatePage,
  AppointmentPage,
  AgencyProfilePage,
  WebEstateReviewsPage,
  AllWebEstateReviewsPage,
  AnnouncementPage,
  NewLeadManagementPage,
  LeadPipelinePage,
  PackagesAgencyPage,
  MarketingToolsPage,
  BusinessCardPage,
  ActivePackagePage,
} from "../pages/PageListAsync";
import Sidebar from "../components/sidebar/Sidebar";
import { getFromStorage } from "../utils/storage";
import Profile from "../components/Profile";

const AppRoutes: React.FC<any> = () => {
  let user = getFromStorage("user");

  return (
    <Sidebar>
      <Routes>
        <Route path="/" element={<NewLeadManagementPage />} />
        <Route
          path="/lead-management/detail/:id"
          element={<LeadsDetailsPage />}
        />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route
          path="/inventory-management/projects"
          element={<AllProjects />}
        />
        <Route
          path="/inventory-management/projects/:id"
          element={<ProjectViewDetails />}
        />
        <Route
          path="/inventory-management/properties"
          element={<AllProperties />}
        />
        <Route
          path="/inventory-management/properties/:id"
          element={<PropertyViewDetails />}
        />
        <Route
          path="/inventory-management/add-inventory"
          element={<AddInventoryPage />}
        />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/webestate" element={<WebEstatePage />} />
        <Route path="/webestate/add-new" element={<AddNewWebEstatePage />} />
        <Route
          path="/inventory-management/edit-inventory/:id"
          element={<EditInventoryPage />}
        />
        <Route path="/webestate" element={<WebEstatePage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/agency-profile" element={<AgencyProfilePage />} />
        <Route path="/webestate/reviews" element={<WebEstateReviewsPage />} />
        <Route
          path="/webestate/reviews/all"
          element={<AllWebEstateReviewsPage />}
        />
        <Route path="/webestate/announcements" element={<AnnouncementPage />} />
        <Route path="/pipeline/:id" element={<LeadPipelinePage />} />
        <Route path="/profile" element={<Profile />} />

        {user.role === "agentOwner" && (
          <Route path="/package" element={<PackagesAgencyPage />} />
        )}
        {user.role !== "agentStaff" && (
          <Route path="/staff-management" element={<StaffManagementPage />} />
        )}
        {user.role !== "agentStaff" && (
          <Route path="/staff-management/:id" element={<StaffDetailsPage />} />
        )}
        {user.role === "agentOwner" && (
          <Route path="/agency-profile" element={<AgencyProfilePage />} />
        )}
        <Route path="/marketing-tools" element={<MarketingToolsPage />} />
        <Route path="/active-package" element={<ActivePackagePage />} />

        <Route
          path="/marketing-tools/business-card"
          element={<BusinessCardPage />}
        />
        <Route path="*" element={<NewLeadManagementPage />} />
      </Routes>
    </Sidebar>
  );
};

export default AppRoutes;
