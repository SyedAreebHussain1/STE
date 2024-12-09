import PricingPlan from "../Home/helpers/PricingPlan";
import Review from "../Home/helpers/Review";
import { NavBar } from "../ReusableComponent";
import FooterForWebSite from "../ReusableComponent/helpers/Footer";
import AffordablePricingPlan from "./helpers/AffordablePricingPlan";
import NextGenBusinessPlan from "./helpers/NextGenBusinessPlan";
import "./helpers/style.css";
import WinningStrategy from "./helpers/WinningStrategy";

const Pricing = () => {
  return (
    <>
      <NavBar />
      <AffordablePricingPlan />
      <PricingPlan />
      <NextGenBusinessPlan />
      <Review />
      <WinningStrategy />
      <FooterForWebSite />
    </>
  );
};
export default Pricing;
