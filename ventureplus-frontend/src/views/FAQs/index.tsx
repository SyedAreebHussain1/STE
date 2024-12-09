import { PageContainer } from "../../components/PageContainer/PageContainer";
import { Footer } from "../dashboard/helpers";
import { FAQsHeader, LeftSection, RightSection } from "./helpers";

const FAQs = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full bg-[white]">
      <PageContainer>
        <FAQsHeader />
        <div className="flex gap-10 mt-4 relative">
          <LeftSection />
          <RightSection />
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default FAQs;
