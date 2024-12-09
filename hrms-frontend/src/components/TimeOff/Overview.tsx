import { Button, DrawerProps, Table } from "antd";
import moment, { MomentInput } from "moment";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { OverViewDrawer } from "./OverViewDrawer";
import { CiSearch } from "react-icons/ci";
import { theme } from "antd";
import {
  approveOrRejectLeaveApi,
  getAllLeavesApi,
} from "../../redux/api/TimeOffAndHoliday/Leaves";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";
import { RemarksDrawer } from "./RemarksDrawer";

interface DataType {
  key: React.Key;
  member: string;
  duration: string;
  name: string;
  status: string;
  timeOfPolicy: string;
  endDate: MomentInput;
  startDate: MomentInput;
  img: string;
}
const dataValue: DataType[] = [
  {
    key: "1",
    member: "Member",
    name: "Aly",
    duration: "12 days",
    status: "Rejected",
    timeOfPolicy: "Vacation Leave",
    startDate: "2023-09-04T05:56:28.382Z",
    endDate: "2023-09-04T05:56:28.382Z",
    img: "https://jibble-prod-storage.s3.amazonaws.com/b77ce1f1-4086-4b9e-8cd2-bb2db980212f",
  },
  {
    key: "2",
    member: "Member",
    name: "Areeb",
    startDate: "2023-09-04T05:56:28.382Z",
    endDate: "2023-09-04T05:56:28.382Z",
    duration: "12 days",
    status: "Approve",
    timeOfPolicy: "Vacation Leave",
    img: "https://jibble-prod-storage.s3.amazonaws.com/b77ce1f1-4086-4b9e-8cd2-bb2db980212f",
  },
];
const rowSelection = {
  getCheckboxProps: (record: DataType) => {
    const filterData = dataValue.filter((val) => val.key == record.key);
    const checkDisable = filterData[0]?.status === "Rejected";
    return {
      disabled: checkDisable,
    };
  },
};
export enum LeaveStatusEnum {
  Pending = "Pending",
  Approved = "Approved",
  Reject = "Reject",
}
const OverView: React.FC<any> = ({ tabChange }) => {
  const approveOrRejectLeave = useSelector(
    (state: RootState) => state.approveOrRejectLeave
  );
  const [remarksDrawer, toggleRemarksDrawer] = useToggle();
  const dispatch: AppDispatch = useDispatch();
  const [data, setData] = useState<any>(null);
  const getAllLeaves = useSelector((state: RootState) => state.getAllLeaves);
  const themeAnt = theme.getDesignToken();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [, setSize] = useState<DrawerProps["size"]>();
  const [drawerData, setDrawerData] = useState<DataType>();
  const [, setSelectedRowKey] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const handleRowClick = (record: any) => {
    setSelectedRowKey(record);
    setOpen(true);
  };
  const [focused, setFocused] = useState(false);

  function onInputFocus() {
    setFocused(true);
  }
  function onInputBlur() {
    setFocused(false);
  }
  const onClose = () => {
    setOpen(false);
  };
  function handleApproval(
    status: string,
    item: any,
    remarks?: string,
    onSuccess?: () => void
  ) {
    const body: { status: string; remarks?: string } = {
      status: status,
    };
    if (status === LeaveStatusEnum.Reject) {
      body.remarks = remarks;
    }
    if (onSuccess) {
      approveOrRejectLeaveApi(dispatch, body, item.id, onSuccess);
    } else {
      approveOrRejectLeaveApi(dispatch, body, item.id);
    }
  }

  const onStatusChange = () => {
    getAllLeavesApi(
      dispatch,
      { page: pageLimit.page, limit: pageLimit.limit },
      name
    );
  };

  const onPageChange = (page: any, pageSize: any) => {
    setPageLimit({ page: page, limit: pageSize });
    getAllLeavesApi(dispatch, { page: page, limit: pageSize });
  };

  
  useEffect(() => {
    if (tabChange === "1" || tabChange === "") {
      getAllLeavesApi(dispatch, pageLimit, name);
    }
  }, [pageLimit, approveOrRejectLeave.loading, tabChange, dispatch, name]);
  useEffect(() => {
    if (getAllLeaves.data) {
      const data: any = getAllLeaves.data?.data?.items?.map((item: any) => {
        return {
          key: item.id,
          member: (
            <div className="flex items-center">
              <div>
                <img
                  className="w-[35px] h-[35px] rounded-full"
                  src={item.profilePhoto}
                  alt=""
                />
              </div>
              <div className="p-[10px]">
                <span className="font-bold ">
                  {item?.companyUser?.companyUserProfile?.name}
                </span>
              </div>
            </div>
          ),
          timeOfPolicy: (
            <span className=" text-[.875rem] tracking-tighter leading-5">
              {item.AssignCUleavePolicies?.companyLeavePolicies?.title}
            </span>
          ),
          date: (
            <span className=" text-[.875rem] tracking-tighter leading-5">
              {item?.createdAt
                ? moment(item?.createdAt).format("ddd, DD MMM")
                : "-"}
            </span>
          ),
          duration: (
            <span className="text-[.875rem] tracking-tighter leading-5">
              {item.cALeaveRequestDays.length <= 1
                ? item.cALeaveRequestDays.length + " Day"
                : item.cALeaveRequestDays.length + " Days"}
            </span>
          ),
          status: (
            <div>
              {item.leaveStatusEnum == LeaveStatusEnum.Approved ? (
                <span className="text-[#35b435] text-[.875rem] tracking-tighter leading-5 flex items-center gap-1">
                  <FaCheckCircle /> Approved
                </span>
              ) : item.leaveStatusEnum == LeaveStatusEnum.Reject ? (
                <span className="text-[#c41446] text-[.875rem] tracking-tighter leading-5 flex items-center gap-1">
                  <MdCancel />
                  Rejected
                </span>
              ) : (
                <div className="flex gap-2 items-center">
                  <Button
                    onClick={() => {
                      setData(item);
                      toggleRemarksDrawer();
                    }}
                    className="border border-[#c41446] text-[#c41446] rounded-full h-[41px] px-5 text-[.875rem] tracking-tighter leading-5 flex items-center gap-1"
                  >
                    <MdCancel /> Reject
                  </Button>
                  <Button
                    onClick={() => {
                      handleApproval(
                        LeaveStatusEnum.Approved,
                        item,
                        "",
                        onStatusChange
                      );
                    }}
                    className="border-[#35b435] text-[#35b435]  rounded-full h-[41px] px-5 text-[.875rem] tracking-tighter leading-5 flex items-center gap-1"
                  >
                    <MdCancel /> Approve
                  </Button>
                </div>
              )}
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      setDataSource([]);
    }
    setSize("large");
  }, [getAllLeaves.data]);

  return (
    <>
      {remarksDrawer && (
        <RemarksDrawer
          open={remarksDrawer}
          onClose={toggleRemarksDrawer}
          data={data}
          handleApproval={handleApproval}
          onStatusChange={onStatusChange}
        />
      )}
      <div className="w-[100%] overflow-x-auto mt-5 text-[#00000099] dark:text-white">
        <Table
          className={`OverViewTable  `}
          pagination={{
            total: getAllLeaves?.data?.data?.meta?.totalItems,
            pageSize: pageLimit.limit,
            responsive: true,
            simple: true,
            showSizeChanger: false,
            onChange: (page, pageSize) => {
              onPageChange(page, pageSize);
            },
          }}
          loading={getAllLeaves?.loading}
          columns={[
            {
              title: (
                <div className="flex  py-3 items-center gap-3  w-[250px] pl-[20px]">
                  <CiSearch
                    size={"20"}
                    color={focused ? themeAnt.colorPrimary : "#000"}
                  />
                  <input
                    placeholder="Search Members"
                    className="flex-grow focus-visible:outline-none bg-transparent"
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              ),
              dataIndex: "member",
            },
            {
              title: "Date",
              dataIndex: "date",
            },
            {
              title: "Duration",
              dataIndex: "duration",
            },
            {
              title: "Time Off Policy",
              dataIndex: "timeOfPolicy",
            },
            {
              title: "Status",
              dataIndex: "status",
            },
          ]}
          dataSource={dataSource}
        />
      </div>
    </>
  );
};
export default OverView;
