import { DatePicker, Table, TableColumnsType } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupsGreenIcon } from "../../../../assets/DashboardAssets";
import { getAllSignupsApi } from "../../../../services/api/Dashboard/Main";
import { RootState } from "../../../../store/store";
import { PageContainer } from "../../../../utils/helpers/PageContainer/PageContainer";

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

const SignupsListing = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const getAllSignups = useSelector((state: RootState) => state?.allSignups);
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

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
    } else {
      setDataSource([])
    }
  }, [getAllSignups]);

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      onSearch(name);
    }, 1000);
  }, [name]);

  const onSearch = (search: any) => {
    setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    if (search) {
      getAllSignupsApi(dispatch, pageLimit, search, date);
    } else {
      getAllSignupsApi(dispatch, pageLimit, "", date);
    }
  };

  const dateSearching = (value: any) => {
    let date = "";
    if (value) {
      date = dayjs(value)?.format("YYYY-MM-DD");
      setDate(date);
    }
    getAllSignupsApi(dispatch, { page: 1, limit: pageLimit.limit }, name, date);
  };

  const fetchRecords = (page: any, pageSize: any) => {
    getAllSignupsApi(dispatch, { page: page, limit: pageSize });
  };

  return (
    <PageContainer>
      <div className="flex flex-col w-full bg-[white] rounded-xl overflow-hidden border">
        <div className="flex justify-between items-center p-4 ">
          <div className="flex gap-2 items-center">
            <img src={signupsGreenIcon} alt="" />
            <p className="text-primary text-lg font-semibold">Signups</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="input-styles"
              placeholder="Search user"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <div>
              <DatePicker
                className={"dark-input !h-[39px]"}
                onChange={(e) => dateSearching(e)}
              />
            </div>
          </div>
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
    </PageContainer>
  );
};

export default SignupsListing;
