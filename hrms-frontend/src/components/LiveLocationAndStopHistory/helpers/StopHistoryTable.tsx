import { Table, TableColumnsType } from "antd";
import { TableProps } from "antd/lib";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getStopHistoryApi } from "../../../redux/api/LiveLocationandStopHistory";
import { IoIosInformationCircleOutline } from "react-icons/io";
import StopHistoryModal from "./StopHistoryModal";

type Props = {
  id: number;
};
interface DataType {
  key: "1";
  id: number;
  name: string;
  email: string;
  phoneNo: string;
  disignation: string;
  roles: string;
}
const columns: TableColumnsType<DataType> = [
  {
    title: "S.No",
    dataIndex: "sno",
  },
  {
    title: "Latitude",
    dataIndex: "latitude",
  },
  {
    title: "Longitude",
    dataIndex: "longitude",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const StopHistoryTable = ({ id }: Props) => {
  const [dataSource, setDataSource] = useState([]);
  const [pageLimit] = useState({ page: 1, limit: 10 });
  const [modalData, setModalData] = useState();
  const [open, setOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const getStopHistory = useSelector(
    (state: RootState) => state.getStopHistory
  );

  useEffect(() => {
    getStopHistoryApi(id, dispatch, pageLimit);
  }, []);

  const modalHandler = (item: any) => {
    setModalData(item);
    setOpen(true);
  };

  useEffect(() => {
    if (getStopHistory?.data) {
      const data = getStopHistory?.data?.items?.map((item: any, i: number) => {
        return {
          key: i,
          sno: (
            <span className="font-medium text-[.975rem] text-[#344054] ">
              {i + 1}
            </span>
          ),
          latitude: (
            <span className="font-medium text-[.975rem] text-[#344054]">
              {item.latitude}
            </span>
          ),
          longitude: (
            <span className="font-medium text-[.975rem] text-[#344054]">
              {item.longitude}
            </span>
          ),
          action: (
            <span
              className="cursor-pointer "
              onClick={() => modalHandler(item)}
            >
              <IoIosInformationCircleOutline fontSize={35} />
            </span>
          ),
        };
      });
      setDataSource(data);
    }
  }, [getStopHistory]);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
  };
  return (
    <div>
      {open && (
        <StopHistoryModal open={open} setOpen={setOpen} data={modalData} />
      )}
      <Table
        scroll={{ x: true }}
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        loading={getStopHistory?.loading}
        pagination={{
          total: getStopHistory?.data?.meta?.totalItems,
        }}
      />
    </div>
  );
};

export default StopHistoryTable;
