import {
  AudiencesCardImage1,
  WhyChoseVentureImage,
  YoungManStarting,
  SimpleCreation,
  FinanceProject,
  ProfessionalPitch,
  StudentsImg,
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

const Students = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <OurBlueprint
        Tagline="Start your entrepreneurial journey as a student with AI-powered planning tools."
        StatsBoxes={[
          {
            // percentage: "90%",
            title:
              "60% of student-led businesses using Venture Plus secured their first investment",
          },
          {
            // percentage: "Over 70%",
            title:
              "Students create professional business plans 3x faster with our platform",
          },
        ]}
        AudienceImage={StudentsImg}
      />
      <FreelancersAreSelfEmployed title="Students with entrepreneurial ambitions can turn their ideas into reality using Venture Plus. Our platform helps you create a professional business plan, run financial forecasts, and develop a clear roadmap for launching your venture—all with the support of AI-driven insights." />
      <WhyChoseVenturePlus
        cardArr={[
          {
            heading: " Simplified Business Creation",
            image: SimpleCreation,
          },
          {
            heading: "AI-Driven Financial Projections",
            image: FinanceProject,
          },
          {
            heading: "Professional Pitch Decks",
            image: ProfessionalPitch,
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
            heading: "Startup Founders",
            para: " Launch your startup with the right tools and resources.",
            image: AudiencesCardImage1,
            url: "/startups",
          },
        ]}
      />
      <ContactUs />
      <FooterForWebSite />
    </div>
  );
};
export default Students;
