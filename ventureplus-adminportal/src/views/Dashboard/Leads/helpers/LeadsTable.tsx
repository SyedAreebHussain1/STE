import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { RootState } from "../../../../store/store";
import leadsColumns from "../../../../utils/tableColumns/leadsColumns.json";
import { getLeadsApi } from "../../../../services/api/Dashboard/Leads";

const ChatperTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [searchTerm] = useState("");
  const leads = useSelector((state: RootState) => state?.leads);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    getLeadsApi(dispatch, { ...pageLimit });
  }, [pageLimit]);

  useEffect(() => {
    if (searchTerm) {
      getLeadsApi(dispatch, { page: 1, limit: 10 }, searchTerm);
    }
  }, [pageLimit, searchTerm]);

  useEffect(() => {
    if (leads?.data?.data?.items?.length > 0) {
      const data = leads?.data?.data?.items?.map((item: any) => {
        return {
          key: item.id,
          firstName: (
            <span className="font-normal text-[.75rem]  flex items-center gap-1">
              {item.firstName ?? "-"}
            </span>
          ),
          email: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.email ?? "-"}
            </span>
          ),
          message: (
            <span className="font-normal text-[.75rem]">
              {" "}
              {item.message ?? "-"}
            </span>
          ),
          leadSource: (
            <span className="font-normal text-[.75rem] ">
              {" "}
              {item.leadSource ?? "-"}
            </span>
          ),
          createdAt: (
            <span className="font-normal text-[.75rem] ">
              {item.createdAt
                ? moment(item.createdAt).local().format("LLL")
                : "-"}
            </span>
          ),
        };
      });

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [leads?.data, searchTerm]);

  return (
    <>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: true }}
          columns={leadsColumns}
          loading={leads?.loading}
          dataSource={dataSource}
          pagination={{
            total: leads?.data?.data?.meta?.totalItems,
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

export default ChatperTable;
