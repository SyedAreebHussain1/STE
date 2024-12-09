import { useEffect, useState } from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import Button from "../../helpers/inputs/Button";
import ProjectList from "./helpers/ProjectList";
import { Col, Row } from "antd";
import InventoriesFilteration from "../InventoriesFilteration/InventoriesFilteration";
import { useDispatch, useSelector } from "react-redux";
import { getProjectApi } from "../../redux/api/InventoryManagement";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const navigate = useNavigate();
  const getProjectInventory = useSelector(
    (state: any) => state.getProjectInventory
  );

  const dispatch = useDispatch();

  const pageChangeHandler = (page: number, limit: number) => {
    getProjectApi(dispatch, { page: page, limit: limit });
    setPageLimit({ page: page, limit: limit });
  };

  useEffect(() => {
    getProjectApi(dispatch, pageLimit);
  }, []);
  const filterHandler = (val: any) => {
    getProjectApi(dispatch, { page: 1, limit: 10 }, val);
    setPageLimit({ page: 1, limit: 10 });
  };
  return (
    <PageContainer>
      <PageHeader
        title="All Projects"
        extra={
          <div className="flex gap-3 flex-wrap">
            <Button
              label="Add New Project"
              variant="filled"
              onClick={() =>
                navigate(`/inventory-management/add-inventory?type=project`)
              }
            />
          </div>
        }
      />
      <Row gutter={16}>
        <Col sm={24} lg={8} xl={6} xxl={5}>
          <InventoriesFilteration filterHandler={filterHandler} />
        </Col>
        <Col sm={24} lg={16} xl={18} xxl={19}>
          <ProjectList
            data={getProjectInventory?.data}
            pageLimit={pageLimit}
            changeHandler={pageChangeHandler}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Projects;
