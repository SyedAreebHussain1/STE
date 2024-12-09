import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import StatisticCards from "./helpers/StatisticCards";
import TransactionHistoryTable from "./helpers/TransactionHistoryTable";

type Props = {};

const Wallet = (props: Props) => {
  return (
    <PageContainer>
      <StatisticCards />
      <TransactionHistoryTable />
    </PageContainer>
  );
};

export default Wallet;
