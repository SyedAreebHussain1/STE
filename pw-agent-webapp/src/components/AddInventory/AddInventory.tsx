import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import InventorySteps from "./helpers/InventorySteps";

type Props = {
  current?: number;
  next?: () => void;
  prev?: () => void;
};

const AddInventory = (props: Props) => {
  return (
    <PageContainer>
      <PageHeader title="Add Inventory" />
      <InventorySteps />
    </PageContainer>
  );
};

export default AddInventory;
