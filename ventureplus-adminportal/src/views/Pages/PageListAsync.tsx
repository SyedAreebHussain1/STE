import { PageLoading } from "../../components";
import LazySuspense from "./LazySuspense";

export const LoginPage = LazySuspense(() => import("./Auth/SignInPage"), {
  fallback: <PageLoading fullPage />,
});
export const ChatperPage = LazySuspense(() => import("./Dashboard/Chatper"), {
  fallback: <PageLoading fullPage />,
});
export const QuestionPage = LazySuspense(() => import("./Dashboard/Question"), {
  fallback: <PageLoading fullPage />,
});
export const TopicPage = LazySuspense(() => import("./Dashboard/Topic"), {
  fallback: <PageLoading fullPage />,
});

export const CreatePackagePage = LazySuspense(
  () => import("./Dashboard/CreatePackage"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const AddOnPage = LazySuspense(() => import("./Dashboard/AddOn"), {
  fallback: <PageLoading fullPage />,
});

export const UserPage = LazySuspense(() => import("./Dashboard/User"), {
  fallback: <PageLoading fullPage />,
});

export const AffiliateUsersPage = LazySuspense(
  () => import("./Dashboard/AffiliateUser"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const IdeaValidationsPage = LazySuspense(
  () => import("./Dashboard/IdeaValidations"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BusinessesPage = LazySuspense(
  () => import("./Dashboard/Businesses"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BusinessPlanPage = LazySuspense(
  () => import("./Dashboard/BusinessPlan"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const BlogsPage = LazySuspense(() => import("./Dashboard/Blogs"), {
  fallback: <PageLoading fullPage />,
});
export const LeadsPage = LazySuspense(() => import("./Dashboard/Leads"), {
  fallback: <PageLoading fullPage />,
});
export const NewBlogPage = LazySuspense(() => import("./Dashboard/Blogs/NewBlogPage"), {
  fallback: <PageLoading fullPage />,
});
export const UpdateBlogPage = LazySuspense(() => import("./Dashboard/Blogs/UpdateBlogPage"), {
  fallback: <PageLoading fullPage />,
});


export const CouponPage = LazySuspense(() => import("./Dashboard/Coupon"), {
  fallback: <PageLoading fullPage />,
});
