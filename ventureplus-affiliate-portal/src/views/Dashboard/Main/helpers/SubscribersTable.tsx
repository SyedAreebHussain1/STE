import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rightArrowGreenIcon } from "../../../../assets";
import { subscribersIcon } from "../../../../assets/DashboardAssets";
import { ButtonWithSvg } from "../../../../components";
import { getAllSubscribersApi } from "../../../../services/api/Dashboard/Main";
import { RootState } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
export interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  subscriptionDate?: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Subscription Date",
    dataIndex: "subscriptionDate",
  },
];

const SubscribersTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const getAllSubscribers = useSelector(
    (state: RootState) => state?.allSubscribers
  );
  const [dataSource, setDataSource] = useState<any[]>();

  useEffect(() => {
    getAllSubscribersApi(dispatch, pageLimit);
  }, []);

  useEffect(() => {
    if (getAllSubscribers?.data?.data?.items?.length > 0) {
      setDataSource(
        getAllSubscribers?.data?.data?.items?.map((item: any, key: number) => ({
          key,
          ...item,
          subscriptionDate: (
            <span>
              {moment(item?.company?.assignPackage?.[0]?.createdAt).format(
                "MMMM Do YYYY"
              )}
            </span>
          ),
        }))
      );
    } else {
      setDataSource([])
    }
  }, [getAllSubscribers]);

  const fetchRecords = (page: any, pageSize: any) => {
    getAllSubscribersApi(dispatch, { page: page, limit: pageSize });
  };

  return (
    <div className="flex flex-col w-full bg-[white] rounded-xl overflow-hidden border">
      <div className="flex justify-between items-center p-4 ">
        <div className="flex gap-2 items-center">
          <img src={subscribersIcon} alt="" />
          <p className="text-primary text-lg font-semibold">Subscriber List</p>
        </div>
        <ButtonWithSvg
          title={"View All"}
          className="!text-primary"
          icon={rightArrowGreenIcon}
          bold
          sm
          onClick={() => navigate("/subscribers")}
        />
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={getAllSubscribers?.loading}
        pagination={{
          pageSize: pageLimit.limit,
          current: getAllSubscribers?.data?.data?.meta?.currentPage,
          total: getAllSubscribers?.data?.data?.meta?.totalItems,
          onChange: (page, pageSize) => {
            fetchRecords(page, pageSize);
          },
        }}
      />
    </div>
  );
};

export default SubscribersTable;
