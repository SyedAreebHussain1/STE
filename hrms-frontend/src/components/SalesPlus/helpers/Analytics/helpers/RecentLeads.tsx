import { Button, Form, Select, Table, TableColumnsType } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { errorMessage } from "../../../../../utils/message";
import AnalyticsTableFilter from "./AnalyticsTableFilter";
import { getFromStorage } from "../../../../../utils/storage";
import { getAllLeadApi } from "../../../../../redux/api/SalesPlus/Analytics";
import { assignUserNewApi } from "../../../../../redux/api/SalesPlus/LeadDetails";
import Tag from "../../../../../helpers/tag/tag";
import { getDepartmentUsersApi } from "../../../../../redux/api/SalesPlus/Campaigns";

export interface DataType {
  key?: React.Key;
  name?: string;
  email?: string;
  owner?: string;
  status?: string;
  leadsSource?: string;
}
const RecentLeads = () => {
  const [pageLimit, setPageLimit] = useState<any>({ page: 1, limit: 10 });
  const [selectedId, setSelectedId] = useState<any>([]);
  const [dataSource, setDataSource] = useState<any>([]);
  const [userId, setUserId] = useState<any>([]);
  const [assignToStaff, setAssignToStaff] = useState(false);
  const getAllLead = useSelector((state: any) => state?.getAllLead);
  const getLeadsAssignUsersOrnotAssignUsers = useSelector(
    (state: any) => state?.getDepartmentUsers
  );
  const assignUserNew = useSelector((state: any) => state?.assignUserNew);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllLeadApi(dispatch, pageLimit);
  }, [assignUserNew?.data, pageLimit]);
  const navigate = useNavigate();
  let rowSelection: any = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setSelectedId([...selectedRowKeys]);
    },
  };

  useEffect(() => {
    setSelectedId([]);
    if (getAllLead?.data?.data?.items?.length > 0) {
      const data = getAllLead?.data?.data?.items?.map((item: any, i: any) => ({
        key: item?.id,
        name: (
          <div
            className="font-medium cursor-pointer flex items-center gap-2"
            onClick={() => navigate(`/sales-plus/${item?.id}`)}
          >
            <div className="w-[32px] h-[32px] text-[0.728rem] rounded-full bg-[#EFE3FF] text-center text-[#000000] align-middle pt-[6px] font-medium ">
              {item?.client?.name
                ?.split(" ")
                ?.map((words: any) => words.substring(0, 1))
                ?.join("")
                ?.toUpperCase()}
            </div>
            <div className="h-22px">
              <h1 className="text-[0.813rem]  dark:text-white text-[#344054] leading-3 w-max">
                {item?.client?.name}
              </h1>
              <p className="text-[#98A2B3] text-[0.75rem]  w-max leading-4 mt-[2px]">
                Created At:{" "}
                {item?.createdAt
                  ? moment(item?.createdAt).format("MMMM Do YYYY hh:mm:ss A")
                  : ""}
              </p>
            </div>
          </div>
        ),
        phoneNo: (
          <span className="font-medium text-[0.813rem] dark:text-white text-[#344054] w-max">
            {item?.client?.phone}
          </span>
        ),
        email: (
          <div className="font-medium text-[0.813rem] dark:text-white text-[#344054] w-max">
            {item?.client?.email || "-"}
          </div>
        ),
        campaignName: (
          <div className="font-medium text-[0.813rem]   dark:text-white text-[#344054] w-max">
            {item?.campaign?.title || "-"}
          </div>
        ),
        status: (
          <div className="mt-1 mb-1 w-max">
            <Tag
              title={item?.leadStatus}
              color={"[#147AD6] dark:text-white"}
              bgColor={"[rgb(243,248,253)] dark:bg-transparent"}
              borderColorDark={"dark:border-purple-600"}
            />
          </div>
        ),
        leadsSource: (
          <div className="mt-1 mb-1 min-w-[120px]">
            <span className="bg-[#F0F1F3] dark:bg-transparent  flex justify-center items-center dark:text-white border-2 w-[120px] border-white dark:border-purple-600  text-[0.813rem] font-medium p-[5px] rounded-full text-[#292D35] px-[10px]">
              {item?.leadSource == "WEB" ? "WEBAPP" : item?.leadSource}
            </span>
          </div>
        ),
      }));

      setDataSource(data);
    } else {
      setDataSource([]);
    }
  }, [getAllLead?.data]);
  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }
  const userRole = getFromStorage("user")?.role;

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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Campaign Name",
      dataIndex: "campaignName",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Leads source",
      dataIndex: "leadsSource",
    },
  ];

  function handleSubmit() {
    if (selectedId.length > 0) {
      const body = {
        userId: userId,
        leadId: selectedId,
      };
      assignUserNewApi(dispatch, body, onSuccess);
    } else {
      errorMessage("Select atleast one user");
    }
  }
  function onSuccess() {
    setAssignToStaff(false);
    setSelectedId(() => {
      return [];
    });
  }
  useEffect(() => {
    getDepartmentUsersApi(dispatch);
  }, [selectedId]);

  return (
    <>
      <div className="bg-white rounded-xl p-[20px] w-full dark:bg-dark-grayprimary  ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-neutral-800 font-semibold text-[1rem] dark:text-[#D0D5DD]">
              Recent Leads
            </h1>
            <p className="text-[0.813rem] text-[#667085] font-medium dark:text-[#b0b1b4e0]">
              List of the recent leads generated
            </p>
          </div>
        </div>
        <AnalyticsTableFilter
          pageLimit={pageLimit}
          setPageLimit={setPageLimit}
        />
        <div className="mt-[20px] flex justify-center  ">
          <Table
            columns={columns}
            dataSource={dataSource}
            scroll={{ x: 1300 }}
            loading={getAllLead?.loading}
            rowSelection={
              userRole !== "agentStaff"
                ? {
                  selectedRowKeys: selectedId,
                  ...rowSelection,
                }
                : null
            }
            pagination={{
              pageSize: pageLimit.limit,
              current: pageLimit.page,
              total: getAllLead?.data?.data?.meta?.totalItems,
              onChange: showTotal,
              showSizeChanger: false,
            }}
          />
        </div>
      </div>
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
                    loading={assignUserNew.loading}
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
    </>
  );
};

export default RecentLeads;
