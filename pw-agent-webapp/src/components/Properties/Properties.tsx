import { useEffect, useState } from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import Button from "../../helpers/inputs/Button";
import PropertiesList from "./helpers/PropertiesList";
import { Col, Row } from "antd";
import InventoriesFilteration from "../InventoriesFilteration/InventoriesFilteration";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesApi } from "../../redux/api/InventoryManagement";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const navigate = useNavigate();

  const getPropertiesInventory = useSelector(
    (state: any) => state.getPropertiesInventory
  );

  const dispatch = useDispatch();

  const pageChangeHandler = (page: number, limit: number) => {
    getPropertiesApi(dispatch, { page: page, limit: limit });
    setPageLimit({ page: page, limit: limit });
  };

  useEffect(() => {
    getPropertiesApi(dispatch, pageLimit);
  }, []);
  const filterHandler = (val: any) => {
    getPropertiesApi(dispatch, { page: 1, limit: 10 }, val);
    setPageLimit({ page: 1, limit: 10 });
  };
  return (
    <PageContainer>
      <PageHeader
        title="All Properties"
        extra={
          <div className="flex gap-3 flex-wrap">
            <Button
              label="Add New Property"
              variant="filled"
              onClick={() =>
                navigate(`/inventory-management/add-inventory?type=property`)
              }
            />
          </div>
        }
      />
      <Row gutter={16}>
        <Col xs={24} lg={8} xl={6} xxl={5}>
          <InventoriesFilteration filterHandler={filterHandler} />
        </Col>
        <Col xs={24} lg={16} xl={18} xxl={19}>
          <PropertiesList
            data={getPropertiesInventory.data}
            pageLimit={pageLimit}
            changeHandler={pageChangeHandler}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Properties;
