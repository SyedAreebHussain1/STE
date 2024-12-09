import React, { useEffect, useState, useCallback } from "react";
import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { RootState } from "../../../../store/store";
import businessColumns from "../../../../utils/tableColumns/businessColumns.json";
import { getBusinessesApi } from "../../../../services/api/Dashboard/Businesses";
import { debounce } from "lodash";

const BusinessesTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const users = useSelector((state: RootState) => state?.getBusinesses);

  const fetchBusinesses = useCallback(
    debounce((pageLimit, industrySearch, searchTerm) => {
      getBusinessesApi(dispatch, { ...pageLimit }, industrySearch, searchTerm);
    }, 1000),
    [dispatch]
  );

  useEffect(() => {
    fetchBusinesses(pageLimit, industrySearch, searchTerm);
    return fetchBusinesses.cancel;
  }, [pageLimit, industrySearch, searchTerm, fetchBusinesses]);

  useEffect(() => {
    const items = users?.data?.data?.items || [];
    if (items.length > 0) {
      const data = items.map((item: any) => ({
        key: item.id || "-",
        name: (
          <span className="font-normal text-[.75rem] flex items-center gap-1">
            {item.name || "-"}
          </span>
        ),
        user: (
          <span className="font-normal text-[.75rem]">{item.user || "-"}</span>
        ),
        description: (
          <span className="font-normal text-[.75rem]">
            {item.description || "-"}
          </span>
        ),
        industry: (
          <span className="font-normal text-[.75rem]">
            {item.industry || "-"}
          </span>
        ),
        businessPlansCount: (
          <span className="font-normal text-[.75rem]">
            {item.businessPlansCount || "-"}
          </span>
        ),
      }));

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [users?.data]);

  useEffect(() => {
    setPageLimit((prev) => ({ ...prev, page: 1 }));
  }, [searchTerm, industrySearch]);
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-start">
          <h1 className="flex text-xl font-semibold">Businesses</h1>
        </div>
        <div className="flex justify-end gap-4">
          <Input
            placeholder="Search by Businesses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 20, width: 300 }}
            prefix={<SearchOutlined />}
            size="large"
          />
          <Input
            placeholder="Search by Industry"
            value={industrySearch}
            onChange={(e) => setIndustrySearch(e.target.value)}
            style={{ marginBottom: 20, width: 300 }}
            prefix={<SearchOutlined />}
            size="large"
          />
        </div>
      </div>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <div className="p-3">
          <div className="flex gap-2 items-center">
            <div className="shrink-0">
              <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                All Businesses
              </h3>
            </div>
            <div className="h-[23px] w-[23px] bg-[#147ad60d] rounded-[100%] inline-block ">
              {" "}
              <span className="text-[#147AD6] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[32px]">
                {users?.data?.data?.meta?.totalItems || 0}
              </span>
            </div>
          </div>
        </div>
        <Table
          scroll={{ x: 900 }}
          columns={businessColumns}
          loading={users?.loading || false}
          dataSource={dataSource}
          pagination={{
            total: users?.data?.data?.meta?.totalItems || 0,
            current: pageLimit.page,
            pageSize: pageLimit.limit,
            onChange: (page: number, limit: number) => {
              setPageLimit({
                page,
                limit,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default BusinessesTable;
