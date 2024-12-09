import { useState } from "react";
import { Id, Task } from "./types";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import TageOnTopTaskCard from "./TageOnTopTaskCard";
import phoneIcon from "../../../../../assets/phoneicon.png";
import locationIcon from "../../../../../assets/locationIcon.png";
import { ArrowRightOutlined } from "@ant-design/icons";
interface Props {
  task: any;
  taskDelete: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
  onClick?: any;
}

const TaskCard = ({ task, taskDelete, updateTask, onClick }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });
  const style = { transition, transform: CSS.Transform.toString(transform) };

  const toggleEditMode = () => {
    setEditMode((pre) => !pre);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-[#FCFCFD] p-[12px]   
        items-center  text-left rounded-md ring-2
        ring-inset ring-[#FCFCFD] cursor-grab
        relative opacity-30 mx-[16px]"
      >
        <div className="invisible">
          <div className="flex gap-2">
            <TageOnTopTaskCard title={task?.lead?.status} color="#ED870B" />
            <TageOnTopTaskCard title={task?.lead?.tags} color="#706FD3" />
          </div>
          <div className=" pt-[16px]">
            <h1 className="text-[#344054] text-[1rem] font-medium">
              {task?.lead?.client?.name}
            </h1>
            <p className="text-[0.813rem] text-[#667085]">
              {task?.lead?.client?.email}
            </p>
          </div>
          <div className="mt-[10px] ">
            <div className="flex gap-[8px] mt-[6px]">
              <img src={phoneIcon} width={12.92} height={15.67} />
              <p className="text-[0.813rem] text-[#667085]">
                {task?.lead?.client?.phone}
              </p>
            </div>
          </div>
          <div className="mt-[16px] border border-[#F2F4F7] flex pt-[12px] justify-between">
            <h2 className="text-[0.813rem] font-medium text-[#344054]">
              Assigned Leads
            </h2>
            <div className=" flex"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className="bg-[#FCFCFD] p-[12px]   
    items-center  text-left rounded-md ring-2
    ring-inset ring-[#FCFCFD] cursor-grab
     mx-[16px] "
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className="flex gap-2">
        <TageOnTopTaskCard title={task?.lead?.status} color="#ED870B" />
        <TageOnTopTaskCard title={task?.lead?.tags} color="#706FD3" />
      </div>
      <div className=" pt-[16px]">
        <h1 className="text-[#344054] text-[1rem] font-medium">
          {task?.lead?.client?.name}
        </h1>
        <p className="text-[0.813rem] text-[#667085]">
          {task?.lead?.client?.email}
        </p>
      </div>
      <div className="mt-[10px] ">
        <div className="flex gap-[8px] mt-[6px]">
          <img src={phoneIcon} width={12.92} height={15.67} />
          <p className="text-[0.813rem] text-[#667085]">
            {task?.lead?.client?.phone}
          </p>
        </div>
      </div>
      <div className="mt-[16px] border-t border-[#F2F4F7] flex pt-[12px] justify-between items-center">
        <h2 className="text-[0.813rem] font-medium text-[#344054]">
          Assigned Staff
        </h2>
        <div className=" flex">
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
