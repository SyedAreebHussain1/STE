import { Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rightArrowGreenIcon } from "../../../../assets";
import { signupsGreenIcon } from "../../../../assets/DashboardAssets";
import { ButtonWithSvg } from "../../../../components";
import { getAllSignupsApi } from "../../../../services/api/Dashboard/Main";
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

const SignupsTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 3 });
  const getAllSignups = useSelector((state: RootState) => state?.allSignups);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  useEffect(() => {
    getAllSignupsApi(dispatch, pageLimit);
  }, []);

  useEffect(() => {
    if (getAllSignups?.data?.data?.items?.length > 0) {
      setDataSource(
        getAllSignups?.data?.data?.items?.map((item: any, key: number) => ({
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
    }
  }, [getAllSignups]);

  const fetchRecords = (page: any, pageSize: any) => {
    getAllSignupsApi(dispatch, { page: page, limit: pageSize });
  };

  return (
    <div className="flex flex-col w-full bg-[white] rounded-xl overflow-hidden border">
      <div className="flex justify-between items-center p-4 ">
        <div className="flex gap-2 items-center">
          <img src={signupsGreenIcon} alt="" />
          <p className="text-primary text-lg font-semibold">Signups</p>
        </div>
        <ButtonWithSvg
          title={"View All"}
          className="!text-primary"
          icon={rightArrowGreenIcon}
          bold
          sm
          onClick={() => navigate("/signups")}
        />
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={getAllSignups?.loading}
        pagination={{
          pageSize: pageLimit.limit,
          current: getAllSignups?.data?.data?.meta?.currentPage,
          total: getAllSignups?.data?.data?.meta?.totalItems,
          onChange: (page, pageSize) => {
            fetchRecords(page, pageSize);
          },
        }}
      />
    </div>
  );
};

export default SignupsTable;
