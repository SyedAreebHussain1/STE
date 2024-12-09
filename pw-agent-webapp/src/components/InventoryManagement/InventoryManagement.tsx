import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import { Col, Row } from "antd";
import Button from "../../helpers/inputs/Button";
import ProjectsSlider from "./helpers/ProjectsSlider";
import PropertySlider from "./helpers/PropertySlider";
import useToggle from "../../hooks/useToggle";
import ChoosePropertyTypeModal from "../ChoosePropertyTypeModal/ChoosePropertyTypeModal";

const InventoryManagement = () => {
  const [open, toggle] = useToggle();
  return (
    <PageContainer>
      {open && <ChoosePropertyTypeModal open={open} close={toggle} />}
      <PageHeader
        title="Inventory Management"
        extra={
          <div className="flex gap-3 flex-col sm:flex-row">
            <Button label="New Inventory" variant="outlined" onClick={toggle} className="md:py-3 py-0"/>
            <Button label="Add To Listing" variant="filled" className="md:py-3 py-0" />
          </div>
        }
      />
      <Row gutter={16}>
        <Col sm={24} lg={24} md={24}>
          <ProjectsSlider />
          <PropertySlider />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default InventoryManagement;
