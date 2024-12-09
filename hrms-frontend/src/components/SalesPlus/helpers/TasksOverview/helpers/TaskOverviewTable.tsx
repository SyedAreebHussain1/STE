import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
import { AppDispatch } from "../../../../../redux/store";
import deleteIcon from "../../../../../assets/deleteIcon.png";
import editPenIcon from "../../../../../assets/editPenIcon.png";
import dayjs from "dayjs";
import { getFromStorage } from "../../../../../utils/storage";
import EditTaskSDrawer from "./EditTaskSDrawer";
import ViewTaskDetails from "./ViewTaskDetails";
import { deleteTaskApi, getAllTasksApi } from "../../../../../redux/api/SalesPlus/TasksOverview";
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
    title: "Task",
    dataIndex: "task",
  },
  {
    title: "Assign To",
    dataIndex: "assignTo",
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

const TaskOverviewTable: React.FC<any> = ({ enumValue }) => {
  const [toggleId, setToggleId] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const getTask = useSelector((state: any) => state?.getAllTasks);
  const createTask = useSelector((state: any) => state?.createTask);
  const deleteTask = useSelector((state: any) => state?.deleteTask);
  const updateTask = useSelector((state: any) => state?.editTask);
  const markAsComplete = useSelector((state: any) => state?.markAsComplete);

  const [dataSource, setDataSource] = useState<any>([]);
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [taskValue, setTaskValue] = useState({});

  useEffect(() => {
    getAllTasksApi(dispatch, pageLimit);
  }, [
    dispatch,
    pageLimit,
    deleteTask?.data,
    createTask?.data,
    updateTask?.data,
    markAsComplete,
  ]);

  function showTotal(total: number, range: number) {
    setPageLimit({
      page: total,
      limit: range,
    });
  }

  useEffect(() => {
    if (getTask?.data) {
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
                <p className="font-medium text-[.8125rem] text-[#344054] dark:text-white cursor-pointer flex items-center gap-1">
                  <a className="">{item?.title}</a>
                </p>
              </div>
            </div>
          ),
          assignTo: (
            <span className="font-medium text-[.8125rem] dark:text-white text-[#344054]">
              {item?.assignedToUser?.profile?.fullName || "-"}
            </span>
          ),
          dueDate: (
            <span className="font-medium text-[.8125rem] dark:text-white text-[#344054]">
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
            <div className="mt-1 mb-1 min-w-[120px]">
            <span className="bg-[#F0F1F3] dark:bg-transparent  flex justify-center items-center dark:text-white border-2 w-[120px] border-white dark:border-purple-600  text-[0.813rem] font-medium p-[5px] rounded-full text-[#292D35] px-[10px]">
              {item.priority}
            </span>
          </div>
          ),
          action: (
            <div className="flex gap-1">
              <button onClick={() => setToggleId(item)}>
                <img src={editPenIcon} alt="" />
              </button>
              <button
                onClick={() => deleteTaskApi(dispatch, item.id)}
              >
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          ),
        };
      });
      setDataSource(data);
    }
  }, [getTask.data]);
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
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total:
              getTask?.data?.meta?.totalItems,
            onChange: showTotal,
          }}
          scroll={{ x: 1300 }}
          loading={getTask?.loading}
        />
      </div>
    </>
  );
};

export default TaskOverviewTable;
