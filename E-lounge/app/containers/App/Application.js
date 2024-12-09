import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeWrapper";
import Dashboard from "../Templates/Dashboard";
import {
  // PersonalDashboard,
  NotFound,
  // LoungeTabs,
  // ManageLounge,
  // AllInventories,
  // Management,
  Wallet,
  // Earnings,
  // Support,
  // AddInventory,
  // EditInventory,
  // AllProjectInventories,
  // LoungeScreen,
  // AllAgencies,
  // InterestedInventories,
  // CurrentSubscribers,
  Packages,
  Checkout,
  ProfilePage,
  Division,
  // SalesHistory,
  Visit,
  VisitManager,
  Subscribers,
  SignUps,
  Transactions,
  PwInventory,
  SaleOrder,
  Token,
  SaleQuotation,
  PwInventoryTracking,
  SaleOrderTracking,
  SaleQuotationTracking,
  TokenTracking,
  SignUpsTracking,
  SubscribersTracking,
  TransactionsTracking,
  LeadWallet,
  LeadVisit,
  LeadPwInventory,
  LeadSignUps,
  LeadSubscribers,
  LeadTransactions,
  LeadToken,
  LeadSaleQuotation,
  LeadSaleOrder,
  WalletNotForSalesUser,
  MarketingRequirement,
  MarketingRequirementManagement,
  MarketingRequirementLead,
  AssignedAgencies,
  AssignedAgenciesLead,
  AssignedAgenciesManager,
} from "../pageListAsync";
import { useSelector } from "react-redux";
import OwnTransactionsTracking from "../Pages/Tracking/Owntransactions";
function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  const { isAuth, userData } = useSelector((state) => state.getIn(["auth"]));
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        <Route
          exact
          path="/app"
          component={
            userData?.roleType === "sale" ? Wallet : WalletNotForSalesUser
            // : userData?.roleType === "other"
            // ? SignUps
            // : userData?.roleType === "leaduser"
            // ? LeadSignUps
            // : Division
            // : SignUpsTracking
          }
        />
        <Route
          exact
          path="/app/pages/marketing-requirement"
          component={
            userData?.roleType === "sale"
              ? MarketingRequirement
              : userData?.roleType === "leaduser"
              ? MarketingRequirementLead
              : MarketingRequirementManagement
          }
        />
        <Route
          exact
          path="/app/pages/visit"
          component={
            userData?.roleType === "sale"
              ? Visit
              : userData?.roleType === "leaduser"
              ? LeadVisit
              : VisitManager
          }
        />
        <Route exact path="/app/pages/profile" component={ProfilePage} />
        <Route exact path="/app/pages/Wallet" component={Wallet} />
        <Route exact path="/app/page/division" component={Division} />
        <Route exact path="/app/pages/packages" component={Packages} />
        <Route exact path="/app/pages/checkout/:title" component={Checkout} />
        <Route
          exact
          path="/app/pages/subscription"
          component={
            userData?.roleType === "sale"
              ? Subscribers
              : userData?.roleType === "leaduser"
              ? LeadSubscribers
              : SubscribersTracking
          }
        />
        <Route
          exact
          path="/app/pages/sign-up"
          component={
            userData?.roleType === "sale"
              ? SignUps
              : userData?.roleType === "leaduser"
              ? LeadSignUps
              : SignUpsTracking
          }
        />
        <Route
          exact
          path="/app/pages/transactions"
          component={
            userData?.roleType === "sale"
              ? Transactions
              : userData?.roleType === "leaduser"
              ? LeadTransactions
              : TransactionsTracking
          }
        />
        <Route
          exact
          path="/app/pages/owntransactions"
          component={OwnTransactionsTracking}
        />
        <Route
          exact
          path="/app/pages/pw-inventory"
          component={
            userData?.roleType === "sale"
              ? PwInventory
              : userData?.roleType === "leaduser"
              ? LeadPwInventory
              : PwInventoryTracking
          }
        />
        <Route
          exact
          path="/app/pages/pw-inventory/sale-order/:id"
          component={
            userData?.roleType === "sale"
              ? SaleOrder
              : userData?.roleType === "leaduser"
              ? LeadSaleOrder
              : SaleOrderTracking
          }
        />
        <Route
          exact
          path="/app/pages/pw-inventory/sale-quotation/:id"
          component={
            userData?.roleType === "sale"
              ? SaleQuotation
              : userData?.roleType === "leaduser"
              ? LeadSaleQuotation
              : SaleQuotationTracking
          }
        />
        <Route
          exact
          path="/app/pages/pw-inventory/token/:id"
          component={
            userData?.roleType === "sale"
              ? Token
              : userData?.roleType === "leaduser"
              ? LeadToken
              : TokenTracking
          }
        />
        <Route
          exact
          path="/app/pages/assigned-agencies"
          component={
            userData?.roleType === "sale"
              ? AssignedAgencies
              : userData?.roleType === "leaduser"
              ? AssignedAgenciesLead
              : AssignedAgenciesManager
          }
        />
        {/* <Route
          exact
          path="/app"
          component={userData?.role === "manager" ? LoungeScreen : SalesHistory}
        />
        <Route
          exact
          path="/app/pages/sales-history/:id"
          component={PersonalDashboard}
        />
        <Route exact path="/app/pages/lounge" component={LoungeScreen} />
        <Route exact path="/app/pages/lounge/:id" component={LoungeTabs} />
        <Route
          exact
          path="/app/pages/all-agencies/:id"
          component={AllAgencies}
        />

        <Route
          exact
          path="/app/pages/pw-inventories"
          component={ManageLounge}
        />
        <Route
          exact
          path="/app/pages/subscriber"
          component={CurrentSubscribers}
        />

        <Route exact path="/app/pages/packages" component={Packages} />
        <Route exact path="/app/pages/checkout/:title" component={Checkout} />
        <Route
          exact
          path="/app/pages/all-inventories"
          component={AllInventories}
        />
        <Route
          exact
          path="/app/pages/interested-inventories/:id"
          component={InterestedInventories}
        />
        <Route exact path="/app/pages/add-inventory" component={AddInventory} />
        <Route
          exact
          path="/app/pages/edit-inventory/:id"
          component={EditInventory}
        />
        <Route
          exact
          path="/app/pages/all-project-inventory/:id"
          component={AllProjectInventories}
        />
        <Route exact path="/app/pages/Management" component={Management} />
        <Route exact path="/app/pages/Wallet" component={Wallet} />
        <Route exact path="/app/pages/earnings" component={Earnings} />
        <Route exact path="/app/pages/support" component={Support} /> */}

        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
