import {
  AiDriven,
  RealTime,
  CompleteBusinessSvg,
  AudiencesCardImage1,
  YoungManStarting,
  DataAnalyzingImg,
  Building,
  OurBlueprintBgImage,
  FreelanceImg,
  EntrepreneursImg,
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

const AspiringEntrepreneurs = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <OurBlueprint
        Tagline="Turn your business idea into reality with AI-driven planning and expert guidance."
        StatsBoxes={[
          {
            // percentage: "90%",
            title:
              "90% faster business plan creation for aspiring entrepreneurs",
          },
          {
            // percentage: "Over 70%",
            title:
              "Over 70% of successful entrepreneurs started with a well-structured plan",
          },
        ]}
        AudienceImage={OurBlueprintBgImage}
      />
      <FreelancersAreSelfEmployed title="Aspiring entrepreneurs have great ideas, but turning those ideas into action can be overwhelming. Venture Plus helps new business owners build a strong foundation by offering AI-powered business planning, financial forecasting, and market research. Get personalized guidance and turn your idea into a thriving business." />
      <WhyChoseVenturePlus
        cardArr={[
          {
            heading: "AI-Driven Idea Validation",
            image: AiDriven,
          },
          {
            heading: "Real-Time Business Insights",
            image: RealTime,
          },
          {
            heading: "Complete Business Roadmap",
            image: CompleteBusinessSvg,
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
            heading: "Freelancers/Solopreneurs",
            para: " Launch your startup with the right tools and resources.",
            image: FreelanceImg,
            url: "/freelancers",
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
export default AspiringEntrepreneurs;
