import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getPackageAddOnAdminApi } from "../../../../services/api/Dashboard/CreatePackage";

import { RootState } from "../../../../store/store";
import addOnColumns from "../../../../utils/tableColumns/addOnColumns.json";
import { EditOutlined } from "@ant-design/icons";
import AddOnModal from "./AddOnModal";

const AddOnTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  const chapter = useSelector((state: RootState) => state?.createPackage);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    getPackageAddOnAdminApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (chapter?.data?.data?.length > 0) {
      const data = chapter?.data?.data?.map((item: any) => {
        return {
          key: item.id,
          title: (
            <span className="font-normal text-[.75rem]  flex items-center gap-1">
              {item.title}
            </span>
          ),
          description: (
            <span className="font-normal text-[.75rem]"> {item.interval}</span>
          ),
          noOfBusinesses: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.noOfBusinesses}
            </span>
          ),
          noOfBusinessPlans: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.noOfBusinessPlans}
            </span>
          ),
          noOfchapters: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.noOfchapters}
            </span>
          ),
          creditCounts: (
            <span className="font-normal text-[.75rem] ">
              {item?.creditCounts ? item?.creditCounts : "none"}
            </span>
          ),
          createdAt: (
            <span className="font-normal text-[.75rem] ">
              {item.createdAt
                ? moment(item.createdAt).format("MMM Do YYYY")
                : "-"}
            </span>
          ),
          price: (
            <span className="font-normal text-[.75rem]"> {item.price}</span>
          ),
          isSubscriptionPlan: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.isSubscriptionPlan ? "Yes" : "No"}
            </span>
          ),
          isFree: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.isFree ? "Yes" : "No"}
            </span>
          ),
          action: (
            <div className="flex gap-2">
              <EditOutlined
                className="text-[20px]"
                onClick={() => setModalData(item)}
              />
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [chapter?.data]);
  return (
    <>
      {modalData && (
        <AddOnModal open={modalData} type={"update"} close={setModalData} />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={addOnColumns}
          loading={chapter?.loading}
          dataSource={dataSource}
          pagination={{
            total: chapter?.data?.data?.meta?.totalItems,
            onChange: (total: number, range: number) => {
              setPageLimit({
                page: total,
                limit: range,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default AddOnTable;
