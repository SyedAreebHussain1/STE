import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  MarketingPage, EbookPage,
  MainPage,
  SignupsListingPage,
  SubscribersListingPage,
  TransactionsListingPage,
  WalletPage,
  ProfilePage
} from "./views/Pages/PageListAsync";
import Sidebar from "./layout/sidebar";
const AppRoutes: React.FC<any> = () => {

  return (
    <Sidebar>
      <Routes>
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/profile`} element={<ProfilePage />} />
        <Route path={`/marketing`} element={<MarketingPage />} />
        <Route path={`/ebooks-guides`} element={<EbookPage />} />
        <Route path={`/wallet`} element={<WalletPage />} />
        <Route
          path={`/transaction-history`}
          element={<TransactionsListingPage />}
        />
        <Route path={`/subscribers`} element={<SubscribersListingPage />} />
        <Route path={`/signups`} element={<SignupsListingPage />} />
      </Routes>
    </Sidebar>
  );
};
export default AppRoutes;
