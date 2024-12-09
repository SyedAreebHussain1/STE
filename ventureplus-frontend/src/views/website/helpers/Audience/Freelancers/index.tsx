import {
  AudiencesCardImage1,
  WhyChoseVentureImage,
  YoungManStarting,
  Streamlined,
  SimplifiedFinance,
  GrowthDriven,
  Freelancer,
} from "../../../../../assets/website";
import ContactUs from "../../About/helpers/ContactUs";
import Review from "../../Home/helpers/Review";
import { NavBar } from "../../ReusableComponent";
import FooterForWebSite from "../../ReusableComponent/helpers/Footer";
import FreelancersAreSelfEmployed from "../ReusableComponent/helpers/FreelancersAreSelfEmployed";
import LatestInsights from "../ReusableComponent/helpers/LatestInsights";
import OurBlueprint from "../ReusableComponent/helpers/OurBlueprint";
import TailoredServicesforYou from "../ReusableComponent/helpers/TailoredServicesforYou";
import WhyChoseVenturePlus from "../ReusableComponent/helpers/WhyChoseVenturePlus";

const Freelancers = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <OurBlueprint
        Tagline="Build and grow your solo business with strategic, AI-driven planning."
        StatsBoxes={[
          {
            // percentage: "90%",
            title:
              "Freelancers using Venture Plus are 60% more likely to achieve financial stability",
          },
          {
            // percentage: "85%",
            title:
              "85% of solopreneurs improved their business structure with our tools",
          },
        ]}
        AudienceImage={Freelancer}
      />
      <FreelancersAreSelfEmployed title="Freelancers and solopreneurs often juggle everything themselves. Venture Plus simplifies business planning with AI-powered tools that handle financial forecasting, strategic growth plans, and market research—helping you build a successful solo business without the overwhelm." />
      <WhyChoseVenturePlus
        cardArr={[
          {
            heading: " Streamlined Business Planning",
            image: Streamlined,
          },
          {
            heading: "Simplified Financial Projections",
            image: SimplifiedFinance,
          },
          {
            heading: "Growth-Driven Strategies",
            image: GrowthDriven,
          },
        ]}
      />
      {/* will be enabled after blogs testing is complete! */}
      {/* 
      <LatestInsights
        cardArr={[
          {
            heading: "5 Essential Tips for Freelancers to Scale Their Business",
            image: YoungManStarting,
            title: "Freelance",
            by: "By John Doe",
          },
          {
            heading: "How to Build a Solid Business Plan from Scratch",
            image: DataAnalyzingImg,
            title: "Business",
            by: "By John Doe",
          },
          {
            heading: "5 Essential Tips for Freelancers to Scale Their Business",
            image: Building,
            title: "Freelance",
            by: "By John Doe",
          },
        ]}
      /> */}
      <Review />
      <TailoredServicesforYou
        cardArr={[
          {
            heading: "Aspiring Entrepreneurs",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/aspiring-entrepreneurs",
          },
          {
            heading: "Startup Founders",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/startups",
          },
          {
            heading: "Small and Medium Enterprises",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/small-and-medium-enterprises",
          },
          {
            heading: "Students",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/students",
          },
        ]}
      />
      <ContactUs />
      <FooterForWebSite />
    </div>
  );
};
export default Freelancers;
