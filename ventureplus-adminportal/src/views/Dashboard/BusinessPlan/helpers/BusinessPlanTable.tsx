import React, { useEffect, useState } from "react";
import { Table, Form, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import businessPlanColumns from "../../../../utils/tableColumns/businessPlanColumns.json";
import { getBusinessPlanApi } from "../../../../services/api/Dashboard/Businesses";
import type { CheckboxProps } from "antd";

const BusinessPlanTable: React.FC = () => {
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({ page: 1, limit: 10 });
  const businessPlan = useSelector(
    (state: RootState) => state?.getBusinessPlan
  );

  useEffect(() => {
    getBusinessPlanApi(dispatch, { ...pageLimit }, isComplete);
  }, [pageLimit, isComplete]);

  useEffect(() => {
    if (businessPlan?.data?.data?.data?.items.length > 0) {
      const data = businessPlan?.data?.data?.data?.items?.map((item: any) => ({
        key: item.id,
        createdByUser: (
          <span className="font-normal text-[.75rem]">
            {item?.createdByUser?.name || "-"}
          </span>
        ),
        name: (
          <span className="font-normal text-[.75rem] flex items-center gap-1">
            {item.title || "-"}
          </span>
        ),
        businessName: (
          <span className="font-normal text-[.75rem]">
            {item?.createdByUser?.name || "-"}
          </span>
        ),
        description: (
          <span className="font-normal text-[.75rem]">
            {item?.description || "-"}
          </span>
        ),
        completedChapterCount: (
          <span className="font-normal text-[.75rem]">
            {item?.completedChapterCount || "-"}
          </span>
        ),
        CompletedTopics: (
          <span className="font-normal text-[.75rem]">
            {item?.CompletedTopics}
          </span>
        ),
      }));

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [businessPlan?.data]);

const onChange: CheckboxProps["onChange"] = (e) => {
  const checked = e.target.checked;

  setIsComplete(checked);
};


  return (
    <>
      <div className="flex justify-end">
<div className="flex justify-end">
        <Checkbox onChange={onChange}>Complete</Checkbox>
     </div>
      </div>
      <div className="mt-4 bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          scroll={{ x: 900 }}
          columns={businessPlanColumns}
          loading={businessPlan?.loading}
          dataSource={dataSource}
          pagination={{
            total: businessPlan?.data?.data?.data?.meta?.totalItems || 0,
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

export default BusinessPlanTable;