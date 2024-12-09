import { Column, Id, Task } from "./types";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import penIcon from "../../../../../assets/editIcon.png";
import UpdateStageTitleModal from "./UpdateStageTitleModal";
import { Navigate, useNavigate } from "react-router-dom";
import EmptyPipeline from "./EmptyPipeline";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { editPipelineStageApi } from "../../../../../redux/api/Campaigns";
import { errorMessage } from "../../../../../utils/message";
import { getFromStorage } from "../../../../../utils/storage";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  tasks: Task[];
  taskDelete: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}
function ColumnContaier(props: Props) {
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    taskDelete,
    updateTask,
  } = props;
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState(column?.title || "");
  const navigate = useNavigate();
  let user = getFromStorage("user");
  const dispatch = useDispatch();
  const tasksIds = useMemo(() => {
    return tasks?.map((task) => task.id);
  }, [tasks]);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });
  const style = { transition, transform: CSS.Transform.toString(transform) };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className=" bg-[#F2F4F7] w-[360px] max-h-[600px]  rounded-md flex flex-col opacity-40 mt-[32px] border-2 "
      ></div>
    );
  }

  const handleInputChange = (e: any) => {
    setTitle(e.target.value);
  };

  const editColumnTitle = () => {
    if (!title) {
      errorMessage("Please provide a title")
      return
    }
    editPipelineStageApi(dispatch, { title }, column?.id, onSuccess);
  };

  const onSuccess = () => {
    setEditMode(false);
  };
  return (
    <>
      {modalOpen && column && (
        <UpdateStageTitleModal
          open={modalOpen}
          close={() => setModalOpen(false)}
          column={column}
        />
      )}
      <div
        ref={setNodeRef}
        style={style}
        className=" bg-[#F2F4F7] w-[360px] h-[600px]  rounded-md flex flex-col text-[1.2rem] mt-[32px] pb-[20px]"
      >
        <div
          {...attributes}
          {...listeners}
          className="text-md h-[32px] cursor-grab rounded-md rounded-b-none  font-medium flex items-center justify-between mt-[17.5px] mb-[16px] px-[16px]"
        >
          <div className="flex gap-2 items-center ">
            {editMode ? (
              <Input name={title} value={title} onChange={handleInputChange} />
            ) : (
              <p className="cursor-pointer" onClick={() =>{ user.role !== "agentStaff" && setEditMode(true)}}>{column.title}</p>
            )}
            {/* {editMode && (
              <input
                className="bg-[#F2F4F7] focus:border-[#2E90FA] border rounded outline-none px-2 py-[.5px] w-40"
                value={column.title}
                onChange={(e) => updateColumn(column.id, e?.target?.value)}
                autoFocus
                onBlur={() => setEditMode(false)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setEditMode(false);
                }}
              />
            )} */}
            <div className="flex justify-center bg-[#F5FAFF] px-3 h-[32px] rounded-md text-[1rem] border border-[#2E90FA] text-[#2E90FA] py-1">
              {tasks?.length && tasks?.length}
            </div>
          </div>

          {user.role !== "agentStaff" && <>
            <button
              onClick={() => {
                setEditMode(false);
              }}
            >
              {editMode && <CloseOutlined />}
            </button>

            <button
              onClick={() => {
                setEditMode(true);
              }}
            >
              {editMode ? <CheckOutlined onClick={editColumnTitle} /> : <img src={penIcon} alt="" />}
            </button>
          </>
          }

        </div>
        <div className="flex flex-grow flex-col gap-4 mt-[16px] overflow-x-hidden overflow-y-auto">

          {
            <SortableContext items={tasksIds}>
              {tasks?.length > 0 ?
                tasks?.map((task: any) => (
                  <TaskCard
                    key={task.id}
                    onClick={() => navigate(`/lead-management/detail/${task?.leadId}`)}
                    task={task}
                    taskDelete={taskDelete}
                    updateTask={updateTask}
                  />
                )) : <EmptyPipeline />}
            </SortableContext>
          }
        </div>
      </div >
    </>
  );
}
export default ColumnContaier;
