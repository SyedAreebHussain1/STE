import { PageContainer } from "../../components/PageContainer/PageContainer";
import { LeftSection, RequestSupportHeader, RightSection } from "./helpers";

const RequestSupport = () => {
  return (
    <PageContainer classList="bg-[white]" >
      <RequestSupportHeader />
      <div className="flex gap-10 mt-4 relative">
        <LeftSection />
        <RightSection />
      </div>
    </PageContainer>
  );
};

export default RequestSupport;
