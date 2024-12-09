import LazySuspense from "./LazySuspense";
import PageLoading from "../helpers/loaders/PageLoading";
import Profile from "../components/Profile";

//authModule
export const LoginPage = LazySuspense(() => import("./Login/Login"), {
  fallback: <PageLoading />,
});
export const SignUpPage = LazySuspense(() => import("./Signup/SignUp"), {
  fallback: <PageLoading />,
});

export const MainDashboardPage = LazySuspense(
  () => import("./Dashboard/Main"),
  {
    fallback: <PageLoading />,
  }
);

export const ForgetPassword = LazySuspense(
  () => import("./ForgetPassword/ForgetPassword"),
  {
    fallback: <PageLoading />,
  }
);
export const SetupAgency = LazySuspense(
  () => import("./OnBoarding/SetupAgency"),
  {
    fallback: <PageLoading />,
  }
);
export const JoinAsAgent = LazySuspense(
  () => import("./OnBoarding/JoinAsAgent"),
  {
    fallback: <PageLoading />,
  }
);
export const JoinAsFreelancer = LazySuspense(
  () => import("./OnBoarding/JoinAsFreelancer"),
  {
    fallback: <PageLoading />,
  }
);
export const CreateAgency = LazySuspense(
  () => import("./OnBoarding/CreateAgency"),
  {
    fallback: <PageLoading />,
  }
);
export const StaffManagementPage = LazySuspense(
  () => import("./Dashboard/StaffManagement/index"),
  {
    fallback: <PageLoading />,
  }
);

export const StaffDetailsPage = LazySuspense(
  () => import("./Dashboard/StaffDetails"),
  {
    fallback: <PageLoading />,
  }
);
export const LeadManagementPage = LazySuspense(
  () => import("./Dashboard/LeadManagement"),
  {
    fallback: <PageLoading />,
  }
);
export const AddNewWebEstatePage = LazySuspense(
  () => import("./Dashboard/WebEstate/AddNew"),
  {
    fallback: <PageLoading />,
  }
);

export const InventoryManagement = LazySuspense(
  () => import("./Dashboard/InventoryManagement"),
  {
    fallback: <PageLoading />,
  }
);
export const LeadsDetailsPage = LazySuspense(
  () => import("../components/LeadManagement/helpers/LeadsDetails"),
  {
    fallback: <PageLoading />,
  }
);

export const AllProjects = LazySuspense(
  () => import("./Dashboard/InventoryManagement/Projects"),
  {
    fallback: <PageLoading />,
  }
);
export const AllProperties = LazySuspense(
  () => import("./Dashboard/InventoryManagement/Properties"),
  {
    fallback: <PageLoading />,
  }
);
export const ProjectViewDetails = LazySuspense(
  () => import("./Dashboard/InventoryManagement/Projects/ViewDetails"),
  {
    fallback: <PageLoading />,
  }
);
export const PropertyViewDetails = LazySuspense(
  () => import("./Dashboard/InventoryManagement/Properties/ViewDetails"),
  {
    fallback: <PageLoading />,
  }
);
export const AddInventoryPage = LazySuspense(
  () => import("./Dashboard/InventoryManagement/AddInventory"),
  {
    fallback: <PageLoading />,
  }
);

export const EditInventoryPage = LazySuspense(
  () => import("./Dashboard/InventoryManagement/EditInventory"),
  {
    fallback: <PageLoading />,
  }
);
export const WalletPage = LazySuspense(
  () => import("./Dashboard/Wallet/index"),
  {
    fallback: <PageLoading />,
  }
);

export const WebEstatePage = LazySuspense(
  () => import("./Dashboard/WebEstate/index"),
  {
    fallback: <PageLoading />,
  }
);
export const AppointmentPage = LazySuspense(
  () =>
    import(
      "../components/LeadManagement/helpers/LeadsDetails/helpers/Appointment/index"
    ),
  {
    fallback: <PageLoading />,
  }
);

export const AgencyProfilePage = LazySuspense(
  () => import("./Dashboard/WebEstate/AgencyProfile/index"),
  {
    fallback: <PageLoading />,
  }
);

export const MarketingToolsPage = LazySuspense(
  () => import("./Dashboard/MarketingTools/index"),
  {
    fallback: <PageLoading />,
  }
);

export const BusinessCardPage = LazySuspense(
  () => import("./Dashboard/MarketingToolsBusinessCard/index"),
  {
    fallback: <PageLoading />,
  }
);

export const WebEstateReviewsPage = LazySuspense(
  () => import("./Dashboard/WebEstate/Reviews/index"),
  {
    fallback: <PageLoading />,
  }
);

export const AllWebEstateReviewsPage = LazySuspense(
  () => import("./Dashboard/WebEstate/Reviews/AllReviews"),
  {
    fallback: <PageLoading />,
  }
);

export const AnnouncementPage = LazySuspense(
  () => import("./Dashboard/WebEstate/Announcement"),
  {
    fallback: <PageLoading />,
  }
);

export const NewLeadManagementPage = LazySuspense(
  () => import("./Dashboard/newLeadManagement/NewLeadManagement"),
  {
    fallback: <PageLoading />,
  }
);
export const LeadPipelinePage = LazySuspense(
  () => import("../components/newLeadManagement/helpers/Pipeline"),
  {
    fallback: <PageLoading />,
  }
);
export const ProfilePage = LazySuspense(
  () => import("../pages/Profile/Profile"),
  {
    fallback: <Profile />,
  }
);
export const PackagesAgencyPage = LazySuspense(
  () => import("../pages/PackagesAgency/PackagesAgencyPage"),
  {
    fallback: <PageLoading />,
  }
);

export const ActivePackagePage = LazySuspense(
  () => import("../components/ActivePackage"),
  {
    fallback: <PageLoading />,
  }
);
