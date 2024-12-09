import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
import { AppDispatch } from "../../../../../redux/store";
import deleteIcon from "../../../../../assets/deleteIcon.png";
import editPenIcon from "../../../../../assets/editPenIcon.png";
import {
  deleteTaskApi,
  getTaskApi,
  getTaskByEnumApi,
} from "../../../../../redux/api/TaskOverview";
import dayjs from "dayjs";
import { getFromStorage } from "../../../../../utils/storage";
import EditTaskSDrawer from "./EditTaskSDrawer";
import ViewTaskDetails from "./ViewTaskDetails";

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
    title: "Task",
    dataIndex: "task",
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Assign To",
    dataIndex: "assignTo",
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Priority",
    dataIndex: "priority",
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    sorter: {
      multiple: 3,
    },
  },
];
const columnsForMana: TableColumnsType<any> = [
  {
    title: "Task",
    dataIndex: "task",
  },

  {
    title: "Due Date",
    dataIndex: "dueDate",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Priority",
    dataIndex: "priority",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const columnsForStaff: TableColumnsType<any> = [
  {
    title: "Task",
    dataIndex: "task",
  },

  {
    title: "Due Date",
    dataIndex: "dueDate",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Priority",
    dataIndex: "priority",
  },
];

const TaskOverviewTable: React.FC<any> = ({ enumValue }) => {
  const [selectedId, setSelectedId] = useState<any>([]);
  const [toggleId, setToggleId] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  let user = getFromStorage("user");
  const dispatch: AppDispatch = useDispatch();
  const getTask = useSelector((state: any) => state?.getTask);
  const createTask = useSelector((state: any) => state?.createTask);
  const deleteTask = useSelector((state: any) => state?.deleteTask);
  const getTaskByEnum = useSelector((state: any) => state?.getTaskByEnum);
  const updateTask = useSelector((state: any) => state?.updateTask);

  const [dataSource, setDataSource] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [taskValue, setTaskValue] = useState({});

  useEffect(() => {
    if (user.role === "agentManager") {
      getTaskByEnumApi(
        dispatch,
        pageLimit,
        enumValue === 0 ? "MyTasks" : "StaffTasks"
      );
    } else {
      getTaskApi(dispatch, pageLimit);
    }
  }, [
    dispatch,
    pageLimit,
    deleteTask.data,
    createTask.data,
    enumValue,
    updateTask.data,
    user.role,
  ]);
  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }

  useEffect(() => {
    if (user.role === "agentManager") {
      const data = getTaskByEnum?.data?.items?.map((item: any) => {
        const currentDate = dayjs();
        const dueDate = dayjs(item.dueDate);
        return {
          key: item?.id,
          task: (
            <div
              className="flex items-center gap-1"
              onClick={() => {
                setTaskValue(item);
                setOpenModal(true);
              }}
            >
              <div>
                <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                  <a className="">{item?.title}</a>
                </p>
              </div>
            </div>
          ),
          assignTo: (
            <span className="font-medium text-[.8125rem] text-[#344054]">
              {item?.assignedToUser?.profile?.fullName || "-"}
            </span>
          ),
          dueDate: (
            <span className="font-medium text-[.8125rem] text-[#344054]">
              {dayjs(item?.dueDate).format("MM-DD-YYYY")}
            </span>
          ),
          status: (
            <div className="mt-1 mb-1 h-[26px]">
              <span className=" text-[.8125rem] font-medium rounded-[34px]  ">
                {item.isCompleted
                  ? "Complete"
                  : dueDate?.isAfter(currentDate)
                  ? "Pending"
                  : "Overdue"}
              </span>
            </div>
          ),
          priority: (
            <div className="mt-1 mb-1 w-full h-[26px]">
              <span className="bg-[#F0F1F3] w-full text-[.8125rem] font-medium p-[8px] rounded-[34px] text-[#292D35]">
                {item.priority}
              </span>
            </div>
          ),
          action: (
            <div className="flex gap-1">
              <button onClick={() => setToggleId(item)}>
                <img src={editPenIcon} alt="" />
              </button>
              <button onClick={() => deleteTaskApi(dispatch, item.id)}>
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          ),
        };
      });
      setDataSource(data);
    } else {
      const data = getTask?.data?.items?.map((item: any) => {
        const currentDate = dayjs();
        const dueDate = dayjs(item.dueDate);
        return {
          key: item?.id,
          task: (
            <div
              className="flex items-center gap-1"
              onClick={() => {
                setTaskValue(item);
                setOpenModal(true);
              }}
            >
              <div>
                <p className="font-medium text-[.8125rem] text-[#344054] cursor-pointer flex items-center gap-1">
                  {item?.title}
                </p>
              </div>
            </div>
          ),
          assignTo: (
            <span className="font-medium text-[.8125rem] text-[#344054]">
              {item?.assignedToUser?.profile?.fullName || "-"}
            </span>
          ),
          designation: (
            <span className="font-medium text-[.8125rem] text-[#344054]">
              {item?.designation || "-"}
            </span>
          ),
          dueDate: (
            <span className="font-medium text-[.8125rem] text-[#344054]">
              {dayjs(item?.dueDate).format("MM-DD-YYYY")}
            </span>
          ),
          status: (
            <div className="mt-1 mb-1 h-[26px]">
              <span className=" text-[.8125rem] font-medium text-[#147AD6] rounded-[34px]  ">
                {item.isCompleted ? (
                  <span className="bg-[#f3f8fd] border-none  p-2 rounded-full">
                    Completed
                  </span>
                ) : dueDate?.isAfter(currentDate) ? (
                  <span className="bg-[#f3f8fd] border-none p-2 rounded-full">
                    Pending
                  </span>
                ) : (
                  <span className="bg-[#f3f8fd] border-none border-2  p-2 rounded-full">
                    Overdue
                  </span>
                )}
              </span>
            </div>
          ),
          priority: (
            <div className="mt-1 mb-1 w-full h-[26px] flex justify-center items-center">
              <span className=" w-full text-[.8125rem]   font-medium ">
                {item.priority === "High" ? (
                  <span className="text-purple-900  p-2 border-[#7A5AF8] rounded-full">
                    {item.priority}
                  </span>
                ) : item.priority === "Medium" ? (
                  <span className=" bg-[##ED870B] text-[#ED870B] p-2 rounded-full">
                    {item.priority}
                  </span>
                ) : (
                  <span className="bg-green-200 text-green-900 p-2 rounded-full">
                    {item.priority}
                  </span>
                )}
              </span>
            </div>
          ),
          action: (
            <div className="flex gap-1">
              <button onClick={() => setToggleId(item)}>
                <img src={editPenIcon} alt="" />
              </button>
              <button onClick={() => deleteTaskApi(dispatch, item.id)}>
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          ),
        };
      });
      setDataSource(data);
    }
  }, [getTask, getTaskByEnum]);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && (
        <ViewTaskDetails
          open={openModal}
          close={closeModal}
          task={taskValue}
          enumValue={enumValue}
        />
      )}
      {toggleId !== null && (
        <EditTaskSDrawer toggle={toggleId} setToggle={setToggleId} />
      )}
      <div className="mt-6">
        <Table
          columns={
            enumValue === 1
              ? columnsForMana
              : user.role === "agentStaff"
              ? columnsForStaff
              : columns
          }
          dataSource={dataSource}
          pagination={{
            total:
              getTaskByEnum.data?.meta?.totalItems ||
              getTask.data?.meta?.totalItems,
            onChange: showTotal,
          }}
          scroll={{ x: 1300 }}
          loading={getTaskByEnum.loading || getTask.loading}
        />
      </div>
    </>
  );
};

export default TaskOverviewTable;
