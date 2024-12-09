import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Home from "./components/V2/Home/Home";
import SmartPoint from "./components/V2/SmartPoint/SmartPoint";
import About from "./components/about";
import Pricing from "./components/V2/Pricing/Pricing";
import Service from "./components/service";
import Faq from "./components/faq";
import Contact from "./components/contact";
import PrivacyPolicy from "./components/shop-components/privacy-policy";
import GetAdemo from "./components/shop-components/getademo";
import TOS from "./components/shop-components/termsofservices";
import InventoryManagement from "./components/V2/service-module/Inventory/inventory-management.js";
import CommissionManagement from "./components/V2/service-module/Commision/commision-management.js";
import PaymentPlan from "./components//V2/service-module/PaymentPlan/payment-plan.js";
import StaffManagement from "./components//V2/service-module/StaffMangement/staff-mangement.js";
import ReportManagement from "./components//V2/service-module/ReportManagment/report-managment";
import SalesTarget from "./components/V2/service-module/SalesTarget/sales-target.js";
import SellWithUs from "./components/V2/Sellwithus/sell-with-us";
import VirtualAgency from "./components/V2/VirtualAgency/VirtualAgency";
import CustomerVerificationAppService from "./components/CustomerVerificationAppService";
import { Provider } from "react-redux";
import store from "./store";
import Lead from "./components/Lead/Lead";
import Index from "./components/Dashboard";
import Login from "./components/section-components/login";
import BillingPayment from "./components/BillingPayment/BillingPayment";
import Invoice from "./components/Invoice/Invoice";
import PwForm from "./components/ApplicationForm/PwForm";
import Chat from "./components/Chat/Chat";
import Confirmation from "./components/V2/Pricing/helpers/Confirmation";
import CheckoutV2 from "./components/V2/Pricing/helpers/CheckoutV2";
import Sucess from "./components/Sucess/Sucess";
import Packages from "./components/Packages/index.js";
import "./App.css";
import SelectType from "./components/Packages/SelectType/index.js";
import PackagesFreelancer from "./components/PackagesFreelancer/index.js";

const root = document.documentElement;
root.style.setProperty("--primary-color", "#0E9272");
const Root = (props) => {
  const [isChatBot, setIsChatBot] = useState(true);
  const AgencyCatalogue = lazy(() =>
    import("./components/AgencyCatalogue/AgencyCatalogue.js")
  );
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/smart-point" component={SmartPoint} />
          <Route
            path="/verification-app"
            component={CustomerVerificationAppService}
          />
          <Route path="/pricing" component={SelectType} />
          <Route path="/pricing-agency" component={Packages} />
          <Route path="/pricing-freelancer" component={PackagesFreelancer} />
          <Route path="/property-wallet-app" component={VirtualAgency} />
          <Route path="/lead" component={Lead} />
          <Route path="/service" component={Service} />
          <Route path="/inventory-management" component={InventoryManagement} />
          <Route
            path="/commission-management"
            component={CommissionManagement}
          />
          <Route path="/blinq-payment" component={BillingPayment} />
          <Route path="/digital-tools" component={PaymentPlan} />
          <Route path="/staff-management" component={StaffManagement} />
          <Route path="/report-management" component={ReportManagement} />
          <Route path="/sales-target" component={SalesTarget} />
          <Route path="/faq" component={Faq} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/how-to-use" component={GetAdemo} />
          <Route path="/contact" component={Contact} />
          <Route path="/terms" component={TOS} />
          <Route path="/crm" component={SellWithUs} />
          <Route path="/dashboard" render={(props) => <Index {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/invoice" render={(props) => <Invoice {...props} />} />
          <Route path="/pwform" render={(props) => <PwForm {...props} />} />
          <Route
            path="/confirmation/:name"
            render={(props) => <Confirmation {...props} />}
          />
          <Route
            path="/checkout/:name"
            render={(props) => <CheckoutV2 {...props} />}
          />
          <Route path="/sucess" render={(props) => <Sucess {...props} />} />
          <Route
            exact
            path="/:name/*"
            render={(props) => (
              <>
                <Suspense fallback={<></>}>
                  <AgencyCatalogue {...props} setIsChatBot={setIsChatBot} />
                </Suspense>
              </>
            )}
          />
        </Switch>
      </Router>
      <Chat isChatBot={isChatBot} />
    </>
  );
};

export default Root;

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("quarter")
);
