import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TableColumnsType } from "antd";
import { Button, Form, Spin, Table } from "antd";
import { Select, } from "antd";
import { AppDispatch, RootState } from "../../../../../redux/store";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { errorMessage } from "../../../../../utils/message";
import CompaignsFilter from "./CompaignsFilter";
import { assignUserNewApi } from "../../../../../redux/api/SalesPlus/LeadDetails";
import {
  createFinalLeadsApi,
  getDepartmentUsersApi,
} from "../../../../../redux/api/SalesPlus/Campaigns";
import Tag from "../../../../../helpers/tag/tag";
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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Created By",
    dataIndex: "createdBy",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Pipeline",
    dataIndex: "pipeline",
  },
];
type Props = {
  selectCampaign: any;
};
const CompaignsTable = ({ selectCampaign }: Props) => {
  const [selectedId, setSelectedId] = useState<any>([]);
  const [userId, setUserId] = useState<any>([]);
  const [assignToStaff, setAssignToStaff] = useState(false);
  const navigate: any = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const getLeadsAssignUsersOrnotAssignUsers = useSelector(
    (state: any) => state?.getDepartmentUsers
  );
  const createFinalLead = useSelector((state: any) => state?.createFinalLead);
  const assignUserNew = useSelector((state: any) => state?.assignUserNew);
  const [dataSource, setDataSource] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const getLeadByCampaignId = useSelector(
    (state: RootState) => state.getLeadByCampaignId
  );

  let rowSelection: any = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectedId([...selectedRowKeys]);
    },
  };

  useEffect(() => {
    getDepartmentUsersApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setSelectedId([]);
    if (getLeadByCampaignId?.data?.items) {
      const data = getLeadByCampaignId?.data?.items?.map((item: any) => {
        return {
          key: item?.id,
          name: (
            <div
              className="flex items-center gap-1"
              onClick={() => navigate(`/sales-plus/${item?.id}`)}
            >
              <div className="flex justify-center text-center items-center">
                <span
                  className={`w-[32px] bg-[#EFE3FF] h-[32px]  flex justify-center items-center rounded-[50%] `}
                >
                  {item?.client?.name?.[0].toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-medium text-[.8125rem]  dark:text-white text-[#344054] cursor-pointer flex items-center gap-1">
                  {item?.client?.name}
                </p>
                <p className="text-[#98A2B3] text-[.75rem] font-medium">
                  Created At:{" "}
                  {dayjs(item?.createdAt).format("ddd, DD YYYY hh:mm A")}
                </p>
              </div>
            </div>
          ),
          email: (
            <span className="font-medium text-[.8125rem]  dark:text-white text-[#344054]">
              {item?.client?.email || "-"}
            </span>
          ),
          createdBy: (
            <span className="font-medium text-[.8125rem]  dark:text-white text-[#344054]">
              {item?.createdByUser?.companyUserProfile?.name}
            </span>
          ),
          status: (
            <div className="mt-1 mb-1 w-max">
              <Tag
                title={item?.leadStatus}
                color={"[#147AD6] dark:text-white"}
                bgColor={"[rgb(243,248,253)] dark:bg-transparent"}
                borderColorDark={" dark:border-purple-600"}
              />
            </div>
          ),
          pipeline: item?.finalLead ? (
            <div className="mt-1 mb-1 w-full h-[26px]">
              <span className="bg-[#F0F1F3] w-full text-[.8125rem] font-medium p-[8px] rounded-[34px]  dark:text-white text-[#344054]">
                {item?.finalLead?.pipelineStages?.title}
              </span>
            </div>
          ) : (
            "-"
          ),
        };
      });
      setDataSource(data);
      setAssignToStaff(false);
      setSelectedId(() => {
        return [];
      });
      rowSelection = {};
    } else {
      setDataSource([]);
    }
  }, [getLeadByCampaignId?.data?.items]);

  function handleSubmit() {
    if (selectedId.length > 0) {
      const body = {
        userId: userId,
        leadId: selectedId,
      };
      assignUserNewApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Select at least one user");
    }
  }
  function onSuccess(msg: any) {
    setAssignToStaff(false);
    if (selectCampaign?.id && msg === "Create final lead") {
      navigate(`/sales-plus/pipline/${selectCampaign?.id}`, {
        state: selectCampaign,
      });
    }
    setAssignToStaff(false);
    setSelectedId(() => {
      return [];
    });
    rowSelection = [];
    setPageLimit((pre) => ({ page: 1, limit: pre.limit }));
  }
  return (
    <div>
      <div className="mb-6">
        <CompaignsFilter
          selectCampaign={selectCampaign}
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
        />
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={getLeadByCampaignId?.loading}
        pagination={{
          pageSize: pageLimit.limit,
          total: getLeadByCampaignId?.data?.meta?.totalItems,
          current: pageLimit.page,
          onChange: (total: number) => {
            setPageLimit((pre: any) => ({
              page: total,
              limit: pre.limit,
            }));
          },
        }}
        rowSelection={{
          selectedRowKeys: selectedId,
          ...rowSelection,
        }}
        scroll={{ x: 1300 }}
      />
      {selectedId.length > 0 && (
        <>
          <div className="fixed bottom-10 shadow-lg shadow-black-500/50 z-20 w-[318px] left-[50%] translate-x-[-50%] bg-white  p-[10px] rounded-xl">
            {assignToStaff ? (
              <p
                onClick={() => setAssignToStaff(false)}
                className="text-[#667085] text-[.8125rem] font-medium flex items-center cursor-pointer"
              >
                <LeftOutlined className="text-[10px]" /> Back
              </p>
            ) : (
              <></>
            )}
            <div className="flex justify-between items-center font-semibold">
              <div className="flex items-center p-2">
                <span className="text-[1rem] text-[#344054]">
                  {selectedId.length} leads Selected
                </span>
              </div>
            </div>
            <hr />
            {assignToStaff && (
              <div className="mt-3">
                <Form.Item name="userId">
                  <Select
                    mode="multiple"
                    onChange={(e) => setUserId(e)}
                    placeholder="Select"
                    className="w-full"
                    placement={"topLeft"}
                    options={getLeadsAssignUsersOrnotAssignUsers?.data?.map(
                      (item: any) => {
                        return {
                          value: item?.id,
                          label: item?.companyUserProfile?.name,
                        };
                      }
                    )}
                  />
                  <Button
                    type="primary"
                    loading={assignUserNew?.loading}
                    onClick={handleSubmit}
                    className="bg-[#27A3A3] h-[36px] border-none rounded-lg w-full flex justify-center items-center cursor-pointer mt-4"
                  >
                    Done
                  </Button>
                </Form.Item>
              </div>
            )}
            {!assignToStaff && (
              <div>
                <div
                  onClick={() =>
                    createFinalLeadsApi(
                      dispatch,
                      { leadId: selectedId },
                      onSuccess
                    )
                  }
                  className="flex justify-between p-2 cursor-pointer text-[.8125rem] font-medium text-[#1D2939]"
                >
                  <span>Move to Pipepline</span>
                  {createFinalLead?.loading ? (
                    <Spin size="small" />
                  ) : (
                    <span>
                      <RightOutlined />
                    </span>
                  )}
                </div>
                <hr />
                <div
                  onClick={() => setAssignToStaff(true)}
                  className="flex justify-between p-2 cursor-pointer text-[.8125rem] font-medium text-[#1D2939]"
                >
                  <span>Assign to Staff</span>
                  <span>
                    <RightOutlined />
                  </span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CompaignsTable;
