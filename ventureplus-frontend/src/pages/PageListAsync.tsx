import PageLoading from "../components/loaders/PageLoading";
import LazySuspense from "./LazySuspense";

export const LoginPage = LazySuspense(() => import("./Login"), {
  fallback: <PageLoading fullPage />,
});

export const MainDashboardPage = LazySuspense(
  () => import("./Dashboard/Main"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ForgetPassword = LazySuspense(() => import("./ForgetPassword"), {
  fallback: <PageLoading fullPage />,
});
export const ResetNewPassword = LazySuspense(
  () => import("./ResetNewPassword"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const FilledPlanSetupPage = LazySuspense(
  () => import("./FilledPlanSetup"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BusinessSettingsPage = LazySuspense(
  () => import("./BusinessSettings"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ViewPlanPage = LazySuspense(() => import("./ViewPlan"), {
  fallback: <PageLoading fullPage />,
});
export const QuestionsPage = LazySuspense(() => import("./Questions"), {
  fallback: <PageLoading fullPage />,
});
export const AccountSettingsPage = LazySuspense(
  () => import("./AccountSettings"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const ViewAllBlogsPage = LazySuspense(() => import("./ViewAllBlogs"), {
  fallback: <PageLoading fullPage />,
});
export const BlogsDetailsPage = LazySuspense(() => import("./BlogsDetails"), {
  fallback: <PageLoading fullPage />,
});

export const ProfileAccSettingsPage = LazySuspense(
  () => import("./AccountSettings/helpers/Profile"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const SecurityAccSettingsPage = LazySuspense(
  () => import("./AccountSettings/helpers/Security"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const CommunicationAccSettingsPage = LazySuspense(
  () => import("./AccountSettings/helpers/Communication"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BusinessAccSettingsPage = LazySuspense(
  () => import("./AccountSettings/helpers/Business"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const SubscriptionAccSettingsPage = LazySuspense(
  () => import("./AccountSettings/helpers/Subscription"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BlogPage = LazySuspense(() => import("./Blogs"), {
  fallback: <PageLoading fullPage />,
});

export const ComingSoonPage = LazySuspense(() => import("./ComingSoon"), {
  fallback: <PageLoading fullPage />,
});

export const ProductPromotionsPage = LazySuspense(
  () => import("./ProductPromotions"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const WebsiteHomePage = LazySuspense(
  () => import("../views/website/helpers/Home"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const BusinessPlannerUnavailablePage = LazySuspense(
  () => import("../views/BusinessPlannerUnavailable"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const WebsiteAboutPage = LazySuspense(
  () => import("../views/website/helpers/About"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const WebsiteFeaturePage = LazySuspense(
  () => import("../views/website/helpers/Features"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const WebsitePricingPage = LazySuspense(
  () => import("../views/website/helpers/Pricing"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const WebsiteStartUpPage = LazySuspense(
  () => import("../views/website/helpers/Audience/StartUp")
);
export const AspiringEntrepreneursPage = LazySuspense(
  () => import("../views/website/helpers/Audience/AspiringEntrepreneurs")
);
export const FreelancersPage = LazySuspense(
  () => import("../views/website/helpers/Audience/Freelancers")
);
export const SmallandMediumEnterprisesPage = LazySuspense(
  () => import("../views/website/helpers/Audience/SmallandMediumEnterprises")
);
export const StudentsPage = LazySuspense(
  () => import("../views/website/helpers/Audience/Students")
);
export const AddNewIdeaPage = LazySuspense(() => import("./AddNewIdea"), {
  fallback: <PageLoading fullPage />,
});

export const IdeaEvaluationPage = LazySuspense(
  () => import("./IdeaEvaluation"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ProductDetailPage = LazySuspense(
  () => import("./ProductPromotions/ProductDetail"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ViewPlanAndDownloadPdfPage = LazySuspense(
  () => import("./ViewPlanAndDownloadPdf"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ProductUpdatePage = LazySuspense(
  () => import("./ProductPromotions/ProductUpdate"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const OnBoardingIdeaPage = LazySuspense(
  () => import("./OnBoardingIdea"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const CreateProductPage = LazySuspense(
  () => import("./ProductPromotions/CreateProduct"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const PromoteYourProductPage = LazySuspense(
  () => import("./PromoteYourProduct"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const OnBoardingProceedPage = LazySuspense(
  () => import("./OnBoardingProceed"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BusinessPlanSetupPage = LazySuspense(
  () => import("./BusinessPlanSetup"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const AddProductPage = LazySuspense(
  () => import("./BusinessPlanSetup/AddProduct"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const OnBoardingQuestionWithIdeaPage = LazySuspense(
  () => import("./OnBoardingQuestionsWithIdea"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const OnBoardingFinalPage = LazySuspense(
  () => import("./OnBoardingFinal/index"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EditProductPage = LazySuspense(
  () => import("./BusinessPlanSetup/EditProduct"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EditEquityPage = LazySuspense(
  () => import("./BusinessPlanSetup/EditEquity"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EditStaffPage = LazySuspense(
  () => import("./BusinessPlanSetup/EditStaff"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const EditServicePage = LazySuspense(
  () => import("./BusinessPlanSetup/EditService"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const AddEquityPage = LazySuspense(
  () => import("./BusinessPlanSetup/AddEquity"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const AddServicePage = LazySuspense(
  () => import("./BusinessPlanSetup/AddService"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const AddStaffPage = LazySuspense(
  () => import("./BusinessPlanSetup/AddStaff"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const UpdateNewIdeaPage = LazySuspense(() => import("./UpdateNewIdea"), {
  fallback: <PageLoading fullPage />,
});

export const CheckOutPage = LazySuspense(() => import("./CheckOut/index"), {
  fallback: <PageLoading fullPage />,
});

export const BusinessToolkitPage = LazySuspense(
  () => import("./BusinessToolkit"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const CriticalAnalysisPage = LazySuspense(
  () => import("./BusinessToolkit/CriticalAnalysis"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const BusinessModelCanvasPage = LazySuspense(
  () => import("./BusinessToolkit/BusinessModelCanvas"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const DownloadCanvasPage = LazySuspense(
  () => import("./BusinessToolkit/DownloadCanvas"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const CompanyProfilePage = LazySuspense(
  () => import("./BusinessToolkit/CompanyProfile"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const PitchDeckPage = LazySuspense(
  () => import("./BusinessToolkit/PitchDeck"),
  {
    fallback: <PageLoading fullPage />,
  }
);


export const PitchDeckEditorPage = LazySuspense(
  () => import("./BusinessToolkit/PitchDeckEditor"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const SubscriptionPlanPage = LazySuspense(
  () => import("./SubscriptionPlan"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const InitialBusinessPlanPage = LazySuspense(
  () => import("./InitialBusinessPlanPage/InitialBusinessPlanPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const PitchDeckQuestionnairePage = LazySuspense(
  () => import("./PitchDeckQuestionnaire"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const PitchQuestionPage = LazySuspense(
  () => import("./PitchDeckQuestionnaire/PitchQuestion"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const ChatBotPage = LazySuspense(() => import("./ChatBot"), {
  fallback: <PageLoading fullPage />,
});

export const FAQsPage = LazySuspense(() => import("./FAQs"), {
  fallback: <PageLoading fullPage />,
});

export const RequestSupportPage = LazySuspense(
  () => import("./RequestSupport"),
  {
    fallback: <PageLoading fullPage />,
  }
);
