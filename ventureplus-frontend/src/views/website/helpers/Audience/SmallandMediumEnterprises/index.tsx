import {
  AudiencesCardImage1,
  YoungManStarting,
  TailoredGrowth,
  ScalableFinance,
  ExecutionSME,
  Enterprises,
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

const SmallandMediumEnterprises = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <OurBlueprint
        Tagline="Drive growth for your SME with smart planning and AI insights."
        StatsBoxes={[
          {
            // percentage: "70%",
            title:
              "70% of SMEs improved their growth strategy with Venture Plus",
          },
          {
            // percentage: "50%",
            title: "50% faster financial planning for SMEs using our platform",
          },
        ]}
        AudienceImage={Enterprises}
      />
      <FreelancersAreSelfEmployed title="Running an SME requires effective planning and smart financial management. Venture Plus provides small and medium enterprises with comprehensive business plans, scalable financial projections, and market strategies to fuel long-term growth. Let our AI tools guide your business to its next phase of success." />
      <WhyChoseVenturePlus
        cardArr={[
          {
            heading: "Tailored Growth Strategies",
            image: TailoredGrowth,
          },
          {
            heading: "Scalable Financial Planning",
            image: ScalableFinance,
          },
          {
            heading: "Execution Support for SMEs",
            image: ExecutionSME,
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
export default SmallandMediumEnterprises;
