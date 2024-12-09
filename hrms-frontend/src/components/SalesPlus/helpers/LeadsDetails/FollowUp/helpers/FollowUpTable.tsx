import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
import { AppDispatch } from "../../../../../../redux/store";
import { getAllLeadsFollowUpApi } from "../../../../../../redux/api/SalesPlus/LeadDetails";
import { useNavigate } from "react-router-dom";

export interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  ownerName?: string;
  status?: string;
  pipeline?: string;
  action?: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone no",
    dataIndex: "phoneNo",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Campaign Name",
    dataIndex: "campaignName",
  },
  {
    title: "Follow up days",
    dataIndex: "followUpDays",
  },
];

const FollowUpTable: React.FC<any> = () => {
  const dispatch: AppDispatch = useDispatch();
  const getAllLeadsFollowUp = useSelector(
    (state: any) => state?.getAllLeadsFollowUp
  );
  const [dataSource, setDataSource] = useState<any>([]);
  const navigate = useNavigate();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    getAllLeadsFollowUpApi(dispatch, pageLimit);
  }, [dispatch]);

  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }

  useEffect(() => {
    if (getAllLeadsFollowUp?.data?.items?.length > 0) {
      const data = getAllLeadsFollowUp?.data?.items?.map((item: any) => {
        return {
          key: item.key,
          name: (
            <span
              onClick={() => navigate(`/sales-plus/${item?.lead?.id}`)}
              className="font-medium text-[1rem]  dark:text-white text-[#344054] cursor-pointer flex items-center gap-1"
            >
              {item?.lead?.client?.name}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[1rem]  dark:text-white text-[#344054]">
              {item?.lead?.client?.phone}
            </span>
          ),
          status: (
            <div className="mt-1 mb-1">
              <span className="bg-[#F0F1F3] dark:bg-transparent  flex justify-center items-center dark:text-white border-2 w-[120px] border-white dark:border-purple-600  text-[0.813rem] font-medium p-[5px] rounded-full text-[#292D35] px-[10px] ">
                {item?.lead?.leadStatus}
              </span>
            </div>
          ),
          campaignName: (
            <span className="font-medium text-[1rem]   dark:text-white text-[#344054]">
              {item?.lead.campaign?.title}
            </span>
          ),
          followUpDays: (
            <span className="font-medium text-[1rem]  dark:text-white text-[#344054] flex justify-content-center">
              {item?.remainingDays}
            </span>
          ),
        };
      });
      setDataSource(data);
    }
  }, [getAllLeadsFollowUp.data]);

  return (
    <>
      <div className="mt-6 px-8 md:px-[20px]">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total: getAllLeadsFollowUp?.data?.meta?.totalItems,
            onChange: showTotal,
          }}
          scroll={{ x: 1300 }}
          loading={getAllLeadsFollowUp?.loading}
        />
      </div>
    </>
  );
};

export default FollowUpTable;
