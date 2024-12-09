import KanbanBoard from "./helpers/KanbanBoard";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";

const LeadPipeline = ({ selectCampaign }: any) => {
  return (
    <PageContainer>
      <KanbanBoard />
    </PageContainer>
  );
};

export default LeadPipeline;
