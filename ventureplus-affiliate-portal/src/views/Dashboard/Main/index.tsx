import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import SignupsTable from "./helpers/SignupsTable";
import StatisticCards from "./helpers/StatisticCards";
import SubscribersTable from "./helpers/SubscribersTable";

type Props = {};

const dashboard = (props: Props) => {
  return (
    <PageContainer>
      <div className="flex flex-col w-full gap-5">
        <StatisticCards />
        <SubscribersTable />
        <SignupsTable />
      </div>
    </PageContainer>
  );
};

export default dashboard;
