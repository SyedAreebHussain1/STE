import { PageLoading } from "../../components";
import LazySuspense from "./LazySuspense";

export const LoginPage = LazySuspense(() => import("./Auth/SignInPage"), {
  fallback: <PageLoading fullPage />,
});
export const SignupPage = LazySuspense(() => import("./Auth/SignupPage"), {
  fallback: <PageLoading fullPage />,
});
export const ForgotPasswordPage = LazySuspense(() => import("./Auth/ForgotPasswordPage"), {
  fallback: <PageLoading fullPage />,
});
export const ResetPasswordPage = LazySuspense(() => import("./Auth/ResetPasswordPage"), {
  fallback: <PageLoading fullPage />,
});
export const MainPage = LazySuspense(() => import("./Dashboard/Main"), {
  fallback: <PageLoading fullPage />,
});
export const MarketingPage = LazySuspense(() => import("./Dashboard/MarketingPage"), {
  fallback: <PageLoading fullPage />,
});
export const EbookPage = LazySuspense(() => import("./Dashboard/EbookPage"), {
  fallback: <PageLoading fullPage />,
});
export const WalletPage = LazySuspense(() => import("./Dashboard/Wallet"), {
  fallback: <PageLoading fullPage />,
});

export const TransactionsListingPage = LazySuspense(
  () => import("./Dashboard/TransactionsListing"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const SubscribersListingPage = LazySuspense(
  () => import("./Dashboard/SubscribersListing"),
  {
    fallback: <PageLoading fullPage />,
  }
);

export const SignupsListingPage = LazySuspense(
  () => import("./Dashboard/SignupsListing"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const ProfilePage = LazySuspense(
  () => import("./Dashboard/ProfilePage"),
  {
    fallback: <PageLoading fullPage />,
  }
);