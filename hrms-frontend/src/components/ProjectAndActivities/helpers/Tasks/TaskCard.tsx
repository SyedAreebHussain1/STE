import { Col } from "antd";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Tag from "../../../../helpers/tag/tag";
import useToggle from "../../../../hooks/useToggle";
import { RootState } from "../../../../redux/store";
import deleteIcon from "./../../../../assets/delete.svg";
import editIcon from "./../../../../assets/editIcon.svg";
import editWhiteIcon from "./../../../../assets/editWhiteIcon.svg";
import EditTaskModal from "./EditTaskModal";
import { deleteProjectTaskApi } from "../../../../redux/api/ProjectAndActivities/Task";

interface DataType {
  task: any;
  totalTime: any;
  onDelete: any;
  onReset: any;
}

const TaskCard = ({ task, totalTime, onDelete, onReset }: DataType) => {
  const { id: projectId } = useParams();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [editTask, toggleEditTask] = useToggle();
  const dispatch = useDispatch();
  const [selectedTaskProjectId, setSelectedTaskProjectId] = useState("");

  return (
    <>
      {editTask && (
        <EditTaskModal
          id={task?.id}
          open={editTask}
          close={toggleEditTask}
          projectId={projectId}
          onReset={onReset}
        />
      )}
      <Col
        xs={24}
        md={10}
        xl={7}
        className="light:border p-4 rounded-md bg-white dark:bg-dark-grayLight m-4 cursor-pointer"
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1">
            <Tag
              title={task?.priority}
              type={
                task?.priority === "High"
                  ? "danger"
                  : task?.priority === "Low"
                  ? "success"
                  : task?.priority === "Medium"
                  ? "info"
                  : ""
              }
              bold
            />

            <Tag
              title={
                task?.status === "Inprogress" ? "In Progress" : task?.status
              }
              type={"default"}
              bold
            />
          </div>

          <div className="flex gap-2 items-center">
            <img
              src={darkMode === "dark" ? editWhiteIcon : editIcon}
              alt=""
              onClick={() => {
                toggleEditTask();
                setSelectedTaskProjectId(task?.projectId);
              }}
            />
            <img
              src={deleteIcon}
              alt=""
              onClick={() => deleteProjectTaskApi(dispatch, task?.id, onDelete)}
            />
          </div>
        </div>
        <h1 className="font-bold text-md text-graySecondary dark:text-white mb-3">
          {task?.name}
        </h1>
        <p className="line-clamp-3 text-grayPrimary dark:text-lightGray mb-2">
          {task?.description}
        </p>
        <h1 className="font-semibold text-md text-graySecondary dark:text-white mb-1">
          Track Time
        </h1>

        <Tag
          title={totalTime ? totalTime : "00:00"}
          bold
          className={
            "rounded-md text-graySecondary dark:text-white dark:border-grayPrimary mb-4"
          }
        />

        <hr className="dark:bg-[#F2F4F7] mb-2" />

        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-graySecondary dark:text-white">Due Date</h1>
            <p className="text-grayPrimary dark:text-lightGray">
              {moment(task?.createdAt).format("ll")}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-graySecondary dark:text-white">Assigned to</h1>
            <p className="text-grayPrimary dark:text-lightGray">
              {task?.assignProjectTasks
                ? task?.assignProjectTasks?.assignedToUser?.companyUserProfile
                    ?.name
                : "None"}
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};
export default TaskCard;
