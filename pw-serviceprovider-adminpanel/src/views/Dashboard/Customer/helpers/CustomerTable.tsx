import { Button, Col, Row, Table } from "antd";
import { useNavigate } from "react-router-dom";
import getallcustomersColumn from "../../../../utils/tableColumns/getallcustomersColumn.json";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../../../store/store";
import { getAllCustomersApi } from "../../../../services/api/Dashboard/Customers";
interface DataSourceItem {
  key: number;
  id: JSX.Element;
  fullName: JSX.Element;
  email: JSX.Element;
  action: JSX.Element;
  phone: JSX.Element;
}
type DataSource = DataSourceItem[];
const CustomerTable = () => {
  const [dataSource, setDataSource] = useState<DataSource>([]);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getAllCustomers = useSelector((state: any) => state.getAllCustomers);

  useEffect(() => {
    getAllCustomersApi(dispatch, pageLimit);
  }, [dispatch, pageLimit]);

  useEffect(() => {
    if (getAllCustomers?.data?.data?.items?.length > 0) {
      const data: DataSource = getAllCustomers?.data?.data?.items?.map(
        (item: any, i: number) => {
          return {
            key: i,
            id: <span className="font-medium text-[.975rem]  ">{item.id}</span>,
            fullName: (
              <span className="font-medium text-[.975rem] ">
                {item?.fullName}
              </span>
            ),
            email: (
              <span className="font-medium text-[.975rem] ">
                {item?.customer?.email}
              </span>
            ),
            phone: (
              <span className="font-medium text-[.975rem] ">
                {item?.customer?.phone}
              </span>
            ),

            action: (
              <div className={`flex  gap-2 items-center`}>
                <Button
                  onClick={() =>
                    navigate(`/customer/customer-detail/${item.id}`)
                  }
                >
                  View Detail
                </Button>
              </div>
            ),
          };
        }
      );
      setDataSource(data);
    }
  }, [getAllCustomers?.data]);
  return (
    <>
      <Row className="bg-white">
        <Col lg={24} xs={24}>
          <Table
            dataSource={dataSource}
            columns={getallcustomersColumn}
            scroll={{ x: true }}
            loading={getAllCustomers?.loading}
            pagination={{
              total: getAllCustomers?.data?.data?.meta?.totalItems,
              onChange: (total: number, range: number) => {
                setPageLimit({
                  page: total,
                  limit: range,
                });
              },
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default CustomerTable;
