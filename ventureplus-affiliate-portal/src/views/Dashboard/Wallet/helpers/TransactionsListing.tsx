import { DatePicker, Table, TableColumnsType } from "antd";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { rightArrowGreenIcon } from "../../../../assets";
import { transactionGreenIcon } from "../../../../assets/WalletAssets";
import { ButtonWithSvg } from "../../../../components";
import { getTransactionHistoryApi } from "../../../../services/api/Dashboard/Wallet";
import { RootState } from "../../../../store/store";
import { PageContainer } from "../../../../utils/helpers/PageContainer/PageContainer";
import dayjs from "dayjs";

export interface DataType {
  key?: React.Key;
  id?: string;
  type?: string;
  accountNo?: string;
  date?: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "randomUniqueId",
  },
  {
    title: "Type",
    dataIndex: "tType",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "createdAt",
  },
];

const TransactionsListing = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const [name, setName] = useState("");
  const getTransactionHistory = useSelector(
    (state: RootState) => state?.transactionHistory
  );
  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    getTransactionHistoryApi(dispatch, pageLimit);
  }, []);

  useEffect(() => {
    if (getTransactionHistory?.data?.data?.items?.length > 0) {
      setDataSource(
        getTransactionHistory?.data?.data?.items?.map(
          (item: any, key: number) => ({
            key,
            ...item,
            tType:
              item?.tType?.toLowerCase() === "credit" ? (
                <span className="text-red-500 !font-bold">{"Credit"}</span>
              ) : (
                <span className="text-blue-500 !font-bold">{"Debit"}</span>
              ),
            createdAt: (
              <span>{moment(item.createdAt).format("MMMM Do YYYY")}</span>
            ),
            randomUniqueId: (
              <span>{item?.randomUniqueId ? item?.randomUniqueId : "-"}</span>
            ),
          })
        )
      );
    } else {
      setDataSource([])
    }
  }, [getTransactionHistory]);

  const fetchRecords = (page: any, pageSize: any) => {
    setPageLimit({ ...pageLimit, page });
    getTransactionHistoryApi(dispatch, pageLimit);
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
      getTransactionHistoryApi(dispatch, pageLimit, search);
    } else {
      getTransactionHistoryApi(dispatch, pageLimit);
    }
  };

  return (
    <PageContainer>
      <div className="flex flex-col w-full bg-[white] rounded-xl overflow-hidden border">
        <div className="flex justify-between items-center p-4 ">
          <div className="flex gap-2 items-center">
            <img src={transactionGreenIcon} alt="" />
            <p className="text-primary text-lg font-semibold">
              Transaction History
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              className="input-styles"
              placeholder="Search By ID"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={getTransactionHistory?.loading}
          pagination={{
            pageSize: pageLimit.limit,
            current: getTransactionHistory?.data?.data?.meta?.currentPage,
            total: getTransactionHistory?.data?.data?.meta?.totalItems,
            onChange: (page, pageSize) => {
              fetchRecords(page, pageSize);
            },
          }}
        />
      </div>
    </PageContainer>
  );
};

export default TransactionsListing;
