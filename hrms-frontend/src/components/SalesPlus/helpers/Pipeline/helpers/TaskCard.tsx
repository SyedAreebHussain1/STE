import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { Id } from "./types";
import arrowRight from "../../../../../assets/rightArrowIcon.svg";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import Tag from "../../../../../helpers/tag/tag";
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
        relative opacity-30 mx-[16px] "
      >
        <div className="invisible ">
          <div className=" pt-[16px] ">
            <h1 className="text-[#344054] text-[1rem] font-medium ">
              {task.lead?.name}
            </h1>
            <p className="text-[0.813rem] text-[#667085]">{task.lead?.email}</p>
          </div>
          <div className="mt-[10px] ">
            <div className="flex gap-[8px] mt-[6px]">
              {/* <img src={phoneIcon} width={12.92} height={15.67} /> */}
              <p className="text-[0.813rem] text-[#667085]">
                {task?.lead?.description}
              </p>
            </div>
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
      className="bg-[#FCFCFD] p-[12px]   
    items-center  text-left rounded-md ring-2
    ring-inset ring-[#FCFCFD] cursor-grab
     mx-[16px] dark:bg-dark-grayLight dark:text-white dark:ring-dark-grayLight"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <div className="flex gap-4 items-center">
        <Avatar size={60}>
          {task?.lead?.name?.toUpperCase()?.slice(0, 1)}
        </Avatar>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#344054] dark:text-white text-[1rem] text-lg font-bold">
            {task?.lead?.name}{" "}
          </h1>
          <div className="flex gap-2 items-center">
            <Tag
              title={task?.lead?.tag}
              bgColor={"dark-secondary"}
              bold
              borderColor={"border-dark-secondary"}
              className={"text-sm"}
            />
            <Tag
              title={task?.lead?.leadStatus}
              bgColor={"[#3ED0D6]"}
              bold
              borderColor={"border-dark-borderColor"}
              className={"text-sm"}
            />
          </div>
        </div>
      </div>
      <hr className="bg-gray-500 dark:bg-white my-4" />
      <div className="flex justify-between items-center">
        <RoundedButton
          title={
            <span>
              Assigned Staff <ArrowRightOutlined className="ml-1" />{" "}
            </span>
          }
          icon={arrowRight}
          sm
          className="dark:bg-transparent dark:text-white"
        />
      </div>
    </div>
  );
};

export default TaskCard;
