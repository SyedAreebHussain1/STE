import PricingPlan from "../Home/helpers/PricingPlan";
import { NavBar } from "../ReusableComponent";
import FooterForWebSite from "../ReusableComponent/helpers/Footer";
import BuildProductsBetter from "./helpers/buildProductsBetter";
import DiscoverTheFeature from "./helpers/DiscoverTheFeature";
import Solutions from "./helpers/Solutions";
import StartYourBusiness from "./helpers/startYourBusiness";
import "./helpers/style.css";

const Features = () => {
  return (
    <>
      <NavBar />
      <DiscoverTheFeature />
      <BuildProductsBetter />
      <Solutions />
      <PricingPlan />
      <StartYourBusiness />
      <FooterForWebSite />
    </>
  );
};
export default Features;
