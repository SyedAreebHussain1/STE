import { Navigate } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer/PageContainer";

type Props = {};

const BusinessToolkit = (props: Props) => {
  return (
    <PageContainer>
      <Navigate to={"/business-toolkit/model-canvas"} />
    </PageContainer>
  );
};

export default BusinessToolkit;
