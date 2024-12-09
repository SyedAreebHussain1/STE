import { useEffect, useState } from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import Button from "../../helpers/inputs/Button";
import { Col, Row } from "antd";
import ProjectDetails from "./helpers/Main/ProjectDetails";
import ProjectDetailsSidebar from "./helpers/Sidebar/ProjectDetailsSidebar";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectDetailsApi } from "../../redux/api/InventoryManagement";
import { useDispatch, useSelector } from "react-redux";
import ViewDetailsOfProjectInventory from "./helpers/Main/ViewDetailsOfProjectInventory";

const ProjectViewDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const [catagory, setCatagory] = useState<any>([]);

  const getProjectDetails = useSelector(
    (state: any) => state.getProjectDetails
  );
  useEffect(() => {
    getProjectDetailsApi(param?.id, dispatch);
  }, [param.id]);

  const navigate = useNavigate();

  useEffect(() => {
    const array: any = [];
    if (getProjectDetails?.data?.inventory?.length > 0) {
      for (let i = 0; i < getProjectDetails?.data?.inventory?.length; i++) {
        const existingIndex = array.findIndex(
          (e: any) =>
            e?.title ===
            getProjectDetails?.data?.inventory[i]?.projectType?.title
        );
        if (existingIndex === -1) {
          array.push({
            title: getProjectDetails?.data?.inventory[i].projectType?.title,
            inventories: [getProjectDetails?.data?.inventory[i]],
          });
        } else {
          array[existingIndex]?.inventories?.push(
            getProjectDetails?.data?.inventory[i]
          );
        }
      }
      setCatagory([...array]);
    }
  }, [getProjectDetails.data]);

  return (
    <PageContainer>
      <PageHeader
        title={getProjectDetails?.data?.projectName}
        extra={
          <div className="flex gap-3 flex-wrap">
            <Button
              label="Add New Inventory"
              variant="filled"
              onClick={() =>
                navigate(
                  `/inventory-management/add-inventory?type=existing&projectId=${getProjectDetails?.data?.id}`,
                  {
                    state: getProjectDetails?.data,
                  }
                )
              }
            />
          </div>
        }
      />
      <Row gutter={16}>
        <Col sm={24} lg={24} xxl={18}>
          <ProjectDetails data={getProjectDetails?.data} />
          {catagory?.map((e: any, i: number) => (
            <ViewDetailsOfProjectInventory
              key={i}
              data={e?.inventories}
              title={e?.title}
            />
          ))}
        </Col>
        <Col sm={24} lg={24} xxl={6}>
          <ProjectDetailsSidebar data={getProjectDetails?.data} />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ProjectViewDetails;
