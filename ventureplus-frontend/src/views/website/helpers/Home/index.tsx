import PricingPlansCards from "../../../SubscriptionPlan/helpers/PricingPlansCards";
import { NavBar } from "../ReusableComponent";
import FooterForWebSite from "../ReusableComponent/helpers/Footer";
import AimForTheTop from "./helpers/AimForTheTop";
import Banner from "./helpers/Banner";
import Banner2 from "./helpers/Banner2";
import PricingPlan from "./helpers/PricingPlan";
import Review from "./helpers/Review";
import SmartBusiness from "./helpers/SmartBusiness";
import SmartFuture from "./helpers/SmartFuture";
import "./helpers/style.css";

const Home = () => {
  return (
    <div className="scroll-smooth ">
      <NavBar />
      {/* <Banner /> */}
      <Banner2 />
      <SmartBusiness />
      <AimForTheTop />
      <Review />
      <PricingPlan />
      <SmartFuture />
      <FooterForWebSite />
    </div>
  );
};
export default Home;
