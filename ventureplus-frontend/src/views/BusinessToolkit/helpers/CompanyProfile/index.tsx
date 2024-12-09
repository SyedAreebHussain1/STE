import { PageContainer } from "../../../../components/PageContainer/PageContainer";
import BusinessToolkitLayout from "../BusinessToolkitLayout";

interface Props {}

const CompanyProfile = (props: Props) => {
  return (
    <PageContainer>
      <BusinessToolkitLayout />
      <h1 className="text-body font-semibold heading-s my-4">Company Profile</h1>
    </PageContainer>
  );
};

export default CompanyProfile;
