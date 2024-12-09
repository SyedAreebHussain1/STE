import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import Button from "../../helpers/inputs/Button";
import { Col, Row } from "antd";
import ProjectDetails from "./helpers/Main/ProjectDetails";
import ProjectDetailsSidebar from "./helpers/Sidebar/ProjectDetailsSidebar";
import { getPropertyDetailsApi } from "../../redux/api/InventoryManagement";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PropertyViewDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const getPropertyDetails = useSelector(
    (state: any) => state.getPropertyDetails
  );
  useEffect(() => {
    getPropertyDetailsApi(param?.id, dispatch);
  }, [param.id]);
  return (
    <PageContainer>
      <PageHeader title={getPropertyDetails?.data?.projectName} />
      <Row gutter={16}>
        <Col sm={24} lg={24} xxl={18}>
          <ProjectDetails data={getPropertyDetails?.data} />
        </Col>
        <Col sm={24} lg={24} xxl={6}>
          <ProjectDetailsSidebar
            data={getPropertyDetails?.data}
            id={param?.id}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default PropertyViewDetails;
