import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getCreatePackageAdminApi } from "../../../../services/api/Dashboard/CreatePackage";
import { RootState } from "../../../../store/store";
import packageColumns from "../../../../utils/tableColumns/packageColumns.json";
import { EditOutlined } from "@ant-design/icons";
import CreatePackageCard from "./CreatePackageCard";

const CreatePackageTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  const createPackage = useSelector((state: RootState) => state?.createPackage);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    getCreatePackageAdminApi(dispatch);
  }, []);

  useEffect(() => {
    if (createPackage?.data?.data?.length > 0) {
      const data = createPackage?.data?.data?.map((item: any) => {
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
          creditCounts: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item?.creditCounts ? item?.creditCounts : "none"}
            </span>
          ),
          noOfchapters: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.noOfchapters}
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
          isFree: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.isFree ? "Yes" : "No"}
            </span>
          ),
          isSubscriptionPlan: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.isSubscriptionPlan ? "Yes" : "No"}
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
  }, [createPackage?.data]);
  return (
    <>
      {modalData && (
        <CreatePackageCard
          open={modalData}
          type={"update"}
          close={setModalData}
        />
      )}
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={packageColumns}
          loading={createPackage?.loading}
          dataSource={dataSource}
          pagination={{
            total: createPackage?.data?.data?.meta?.totalItems,
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

export default CreatePackageTable;
