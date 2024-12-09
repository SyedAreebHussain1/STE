import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllLeadsFollowUpApi } from "../../../redux/api/LeadManagement";
import { AppDispatch } from "../../../redux/store";
import FilterLead from "./FilterLead";
import { PageContainer } from "../../../helpers/PageContainer/PageContainer";

export interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  phoneNo?: string;
  status?: string;
  leadsSource?: string;
  img?: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone No",
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
    title: "Follow-up days",
    dataIndex: "followUpDays",
  },
];

const FollowUpTable: React.FC<DataType> = () => {
  const navigate: any = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [dataSource, setDataSource] = useState<any | boolean | string>([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getAllLeadsFollowUp = useSelector(
    (state: any) => state?.getAllLeadsFollowUp
  );
  useEffect(() => {
    getAllLeadsFollowUpApi(dispatch, pageLimit);
  }, [dispatch, pageLimit]);
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
              onClick={() =>
                navigate(`/lead-management/detail/${item?.leadId}`)
              }
              className="font-medium text-[1rem] text-[#344054] cursor-pointer flex items-center gap-1"
            >
              {item?.lead?.client?.name}
            </span>
          ),
          phoneNo: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item?.lead?.client?.phone}
            </span>
          ),
          status: (
            <div className="mt-1 mb-1">
              <span className="bg-[rgb(243,248,253)] p-[7px] text-[.8125rem] font-medium rounded-full text-[#147AD6] ">
                {item?.lead?.tags}
              </span>
            </div>
          ),
          campaignName: (
            <span className="font-medium text-[1rem] text-[#344054]">
              {item?.lead.campaign?.title}
            </span>
          ),
          followUpDays: (
            <span className="font-medium text-[1rem] text-[#344054] flex justify-content-center">
              {item?.remainingDays}
            </span>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllLeadsFollowUp?.data, navigate]);

  return (
    <PageContainer>
      <div className="bg-[#FFFFFF] p-[15px] rounded-xl mr-2">
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={getAllLeadsFollowUp?.loading}
          pagination={{
            total: getAllLeadsFollowUp?.data?.meta?.totalItems,
            onChange: showTotal,
          }}
          scroll={{ x: true }}
        />
      </div>
    </PageContainer>
  );
};

export default FollowUpTable;
