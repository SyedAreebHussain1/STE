import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  UserManagementPage,
  CategoryPage,
  CustomerPage,
  CustomerDetailPage,
  ServicesPage,
  PackagePage,
  OrderPage,
  RatingPage, WalletPage
} from "./views/Pages/PageListAsync";
import { useSelector } from "react-redux";
import Sidebar from "./layout/sidebar";
const AppRoutes: React.FC<any> = () => {
  const [routeComponent, setRouteComponent] = useState<any>([]);
  const getAllModulesSideBar = useSelector(
    (state: any) => state?.getAllModulesSideBar
  );
  useEffect(() => {
    let routes: any[] = [];
    if (getAllModulesSideBar?.data?.data?.length > 0) {
      for (let i = 0; i < getAllModulesSideBar?.data?.data?.length; i++) {
        const { title } = getAllModulesSideBar?.data?.data?.[i]?.systemModule;
        if (title === "order") {
          routes.push({ path: "", element: <OrderPage /> });
        } else if (title === "service_provider") {
          routes.push({ path: "service_provider", element: <ServicesPage /> });
        } else if (title === "customer") {
          routes.push({ path: "customer", element: <CustomerPage /> },
            {
              path: "customer/customer-detail/:id",
              element: <CustomerDetailPage />,
            }
          );

        } else if (title === "package") {
          routes.push({ path: "package", element: <PackagePage /> });
        } else if (title === "claim") {
        } else if (title === "target") {
        } else if (title === "rating") {
          routes.push({ path: "rating", element: <RatingPage /> })
        } else if (title === "wallet") {
          routes.push({ path: "wallet", element: <WalletPage /> })
        } else if (title === "category") {
          routes.push({ path: "category", element: <CategoryPage /> })
        } else if (title === "user_management") {
          routes.push({
            path: "user_management",
            element: <UserManagementPage />,
          });
        }
      }
      setRouteComponent(routes);
    } else {
      setRouteComponent(routes);
    }
  }, [getAllModulesSideBar?.data?.data]);

  return (
    <Sidebar>
      <Routes>
        {routeComponent.map((item: any, i: number) => {
          return (
            <Route key={i} path={`/${item.path}`} element={item.element} />
          );
        })}
      </Routes>
    </Sidebar>
  );
};

export default AppRoutes;
