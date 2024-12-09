import { DatePicker, Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rightArrowGreenIcon } from "../../../../assets";
import { subscribersIcon } from "../../../../assets/DashboardAssets";
import { ButtonWithSvg } from "../../../../components";
import { getAllSubscribersApi } from "../../../../services/api/Dashboard/Main";
import { RootState } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../../../../utils/helpers/PageContainer/PageContainer";
import dayjs from "dayjs";
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

const SubscribersListing = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
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

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      onSearch(name);
    }, 1000);
  }, [name]);

  const onSearch = (search: any) => {
    setPageLimit((pre: any) => ({ ...pre, page: 1 }));
    if (search) {
      getAllSubscribersApi(dispatch, pageLimit, search, date);
    } else {
      getAllSubscribersApi(dispatch, pageLimit, "", date);
    }
  };

  const dateSearching = (value: any) => {
    let date = "";
    if (value) {
      date = dayjs(value)?.format("YYYY-MM-DD");
      setDate(date);
    }
    getAllSubscribersApi(
      dispatch,
      { page: 1, limit: pageLimit.limit },
      name,
      date
    );
  };

  return (
    <PageContainer>
      <div className="flex flex-col w-full bg-[white] rounded-xl overflow-hidden border">
        <div className="flex justify-between items-center p-4 ">
          <div className="flex gap-2 items-center">
            <img src={subscribersIcon} alt="" />
            <p className="text-primary text-lg font-semibold">
              Subscriber List
            </p>
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
    </PageContainer>
  );
};

export default SubscribersListing;
