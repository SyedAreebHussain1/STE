import { PageLoading } from "../../components";
import LazySuspense from "./LazySuspense";

export const LoginPage = LazySuspense(() => import("./Auth/SignInPage"), {
  fallback: <PageLoading fullPage />,
});

export const UserManagementPage = LazySuspense(
  () => import("./Dashboard/UserManagementPage/UserManagementPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const CategoryPage = LazySuspense(
  () => import("./Dashboard/CategoryPage/CategoryPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const CustomerPage = LazySuspense(
  () => import("./Dashboard/CustomerPage/CustomerPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const CustomerDetailPage = LazySuspense(
  () => import("./Dashboard/CustomerPage/CustomerDetailPage"),

  {
    fallback: <PageLoading fullPage />,
  }
);
export const ServicesPage = LazySuspense(
  () => import("./Dashboard/ServicesPage/ServicesPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const PackagePage = LazySuspense(
  () => import("./Dashboard/PacakagePage/PacakagePage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const OrderPage = LazySuspense(
  () => import("./Dashboard/OrderPage/OrderPage"),
  {
    fallback: <PageLoading fullPage />,
  }
);
export const RatingPage = LazySuspense(
  () => import("./Dashboard/Rating/RatingPage/RatingPage"),
  {
    fallback: <PageLoading fullPage />,
  }
)
export const WalletPage = LazySuspense(
  () => import("./Dashboard/WalletPage/WalletPage"),
  {
    fallback: <PageLoading fullPage />,
  }
)

