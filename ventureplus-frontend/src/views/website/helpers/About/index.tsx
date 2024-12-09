import { NavBar } from "../ReusableComponent";
import FooterForWebSite from "../ReusableComponent/helpers/Footer";
import AboutVenturePlus from "./helpers/AboutVenturePlus";
import SuccessfulBusinessPlan from "./helpers/successfulBusinessPlan";
import "./helpers/style.css";
import HowWeStarted from "./helpers/HowWeStarted";
import CompaniesThatWorkWithUs from "./helpers/CompaniesThatWorkWithUs";
import ContactUs from "./helpers/ContactUs";

const About = () => {
  return (
    <>
      <NavBar />
      <AboutVenturePlus />
      <SuccessfulBusinessPlan />
      <HowWeStarted />
      <ContactUs />
      <FooterForWebSite />
    </>
  );
};
export default About;
