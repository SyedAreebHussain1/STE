import {
  AudiencesCardImage1,
  WhyChoseVentureImage,
  YoungManStarting,
  AiPoweredSvg,
  DetailFinanceSvg,
  InvestorReadySvg,
  StartUpImg,
  FreelanceImg,
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

const StartUp = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <OurBlueprint
        Tagline="Scale your startup with AI-powered planning and strategic insights."
        StatsBoxes={[
          {
            // percentage: "80%",
            title:
              "80% of startups fail due to poor planning—change your odds with Venture Plus",
          },
          {
            // percentage: "75%",
            title:
              "75% of Venture Plus users successfully launched their startup with our business tools",
          },
        ]}
        AudienceImage={StartUpImg}
      />
      <FreelancersAreSelfEmployed title="Startups face fast-paced growth and constant challenges. Venture Plus equips founders with AI-driven tools for building business plans, creating financial projections, and strategizing market entry. Whether you're preparing for launch or seeking funding, Venture Plus helps streamline every stage of your startup’s journey." />
      <WhyChoseVenturePlus
        cardArr={[
          {
            heading: "AI-Powered Business Planning",
            image: AiPoweredSvg,
          },
          {
            heading: "Detailed Financial Forecasting",
            image: DetailFinanceSvg,
          },
          {
            heading: "Investor-Ready Pitch Decks",
            image: InvestorReadySvg,
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
            heading: "Small and Medium Enterprises",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/small-and-medium-enterprises",
          },
          {
            heading: "Aspiring Entrepreneurs",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/aspiring-entrepreneurs",
          },
          {
            heading: "Freelancers/Solopreneurs",
            para: " Launch your startup with the right tools and resources.",
            image: FreelanceImg,
            url: "/freelancers",
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
export default StartUp;
