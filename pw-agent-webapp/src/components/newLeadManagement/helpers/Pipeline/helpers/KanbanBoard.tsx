import { useEffect, useMemo, useState } from "react";
import { Column, Id, Task } from "./types";
import ColumnContaier from "./ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import {
  editFinalLeadApi,
  getPipelinesStagesLeadApi,
  getStagesByCampaignIdApi,
} from "../../../../../redux/api/Campaigns";
import { AppDispatch } from "../../../../../redux/store";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spin } from "antd";
import { socket } from "../../../../../utils/socket";
import CreateStagModal from "./CreateStagModal";
import { IoIosArrowBack } from "react-icons/io";
import { getFromStorage } from "../../../../../utils/storage";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const location: any = useLocation();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const getStagesByCampaignId = useSelector(
    (state: any) => state?.getStagesByCampaignId
  );
  const getPipelinesStagesLead = useSelector(
    (state: any) => state?.getPipelinesStagesLead
  );
  const addPipeLineStage = useSelector((state: any) => state?.addPipeLineStage);
  const editPipelineStage = useSelector(
    (state: any) => state?.editPipelineStage
  );
  const editFinalLead = useSelector((state: any) => state?.editFinalLead);
  const dispatch: AppDispatch = useDispatch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksTwo, setTasksTwo] = useState<Task[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [leadId, setLeadId] = useState<any>(null);
  const navigate = useNavigate();
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  let user = getFromStorage("user");
  const params = useParams();
  const columnsId = useMemo(() => columns.map((col: any) => col.id), [columns]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  useEffect(() => {
    setTasks([]);
    setTasksTwo([]);
    getStagesByCampaignIdApi(dispatch, Number(params?.id), onSccess);
  }, [params.id, addPipeLineStage.data, editPipelineStage]);
  function onSccess(res: any) {
    for (let i = 0; i < res.length; i++) {
      const element = res[i].id;
      if (element) {
        getPipelinesStagesLeadApi(
          dispatch,
          Number(element),
          onSccessByPipeline
        );
      }
    }
  }
  function onSccessByPipeline(res: any) {
    if (res?.finalLead.length > 0) {
      const data = res?.finalLead?.map((item: any) => {
        return item;
      });
      setTasksTwo((pre: any) => [...pre, ...data]);
    }
  }
  useEffect(() => {
    if (tasksTwo.length > 0) {
      const uniqueArray = tasksTwo.filter(
        (item: any, index: any, self: any) =>
          self.findIndex((t: any) => t.id === item.id) === index
      );
      setTasks(uniqueArray);
    }
  }, [tasksTwo]);

  useEffect(() => {
    if (editFinalLead?.data || socket || leadId) {
      const eventListenerName = `newleadUpdate-${leadId}`;
      socket.on(eventListenerName, onConnect);
      return () => {
        socket.off(eventListenerName, onConnect);
      };
    }
  }, [socket, editFinalLead?.data, leadId]);

  function onConnect(dataValue: any) { }
  return (
    <>
      {modalOpen && <CreateStagModal open={modalOpen} close={() => setModalOpen(false)} />}
      <div className=" mb-4 ">
        <div className={`bg-[#FFFFFF] p-[15px] rounded-xl`}>
          <div>
            <div className="text-[18px] font-medium">
              <div className="text-[0.975rem] flex  items-center font-medium text-[#27A3A3] cursor-pointer ">
                <span onClick={() => navigate(-1)}>
                  <IoIosArrowBack className="px-[1px] text-[1rem]" size={25} />
                </span>
                <span onClick={() => navigate(-1)}>Back to Lead</span>
              </div>
            </div>
            <p className="text-[#1D2939] text-[0.813rem] font-medium">
              <span className="text-[#667085]" onClick={() => navigate(-1)}>
                Lead Management{" "}
              </span>{" "}
              / {location.state.title}
            </p>
          </div>

          <div className={`flex justify-between items-center mt-[24px]`}>
            <div className="flex items-center gap-1">
              <div>
                <h2 className="text-[#344054] text-[1.44rem] font-semibold">
                  {location.state.title}
                </h2>
              </div>
            </div>
            <div className="flex gap-2">
              {user.role !== "agentStaff" && (
                <button className="h-[36px] border rounded-lg flex justify-center items-center cursor-pointer  p-[10px]" onClick={() => setModalOpen(true)}>
                  <span className="text-[#27A3A3] text-[0.813rem] font-medium flex items-center gap-1">
                    <span className="font-normal text-[1.4375rem]">+</span>{" "}
                    Create New Stage
                  </span>
                </button>
              )}
            </div>
          </div>
          <div>
            <div className="h-[720px] ">
              <div className="w-full flex  overflow-x-auto overflow-y-hidden items-center  mt-3 pb-[20px]">
                <DndContext
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  sensors={sensors}
                  onDragOver={onDragover}
                >
                  {getStagesByCampaignId?.data?.length > 0 ? (
                    <div className="flex gap-4">
                      <SortableContext items={columnsId}>
                        {getStagesByCampaignId?.data?.map((col: any) => (
                          <ColumnContaier
                            key={col.id}
                            column={col}
                            deleteColumn={deleteColumn}
                            updateColumn={updateColumn}
                            createTask={createTask}
                            tasks={tasks.filter(
                              (task: any) => task?.pipelineStageId === col?.id
                            )}
                            taskDelete={taskDelete}
                            updateTask={updateTask}
                          />
                        ))}
                      </SortableContext>
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <div className="flex w-full py-5 !justify-center ">
                        <Spin size="large" />
                      </div>
                    </div>
                  )}

                  {createPortal(
                    <DragOverlay>
                      {activeColumn && (
                        <ColumnContaier
                          column={activeColumn}
                          deleteColumn={deleteColumn}
                          updateColumn={updateColumn}
                          createTask={createTask}
                          tasks={tasks.filter(
                            (task) => task.pipelineStageId == activeColumn?.id
                          )}
                          taskDelete={taskDelete}
                          updateTask={updateTask}
                        />
                      )}
                      {activeTask && (
                        <TaskCard
                          task={activeTask}
                          taskDelete={taskDelete}
                          updateTask={updateTask}
                        />
                      )}
                    </DragOverlay>,
                    document.body
                  )}
                </DndContext>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `task ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  }

  function taskDelete(id: Id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function updateTask(id: Id, content: string) {
    const newTasks = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  }

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns((pre) => [...pre, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col: any) => col.id !== id);
    setColumns(filteredColumns);
    const newTasks = tasks.filter((t) => t.columnId !== id);
    setTasks(newTasks);
  }

  function updateColumn(id: Id, title: string) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
    setColumns(newColumns);
  }

  function onDragStart(event: DragStartEvent) {
    if (event?.active?.data?.current?.type === "Task") {
      setActiveTask(event?.active?.data?.current?.task);
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveTask(null);
  }

  function onDragover(event: DragOverEvent) {
    let { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    const isActiveATask = active.data.current?.type == "Task";
    const isOverATask = over.data.current?.type == "Task";

    if (!isActiveATask) return;
    // In dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      const activeIndex = tasks.findIndex((t) => t.id === activeId);
      const overIndex = tasks.findIndex((t) => t.id === overId);
      return;
    }

    const isOverAColumn = over.data.current?.type === "Column";
    //In dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        let copy = JSON.parse(JSON.stringify(tasks[activeIndex]));
        editFinalLeadApi(dispatch, {
          pipelineStageId: event?.over?.id,
          leadId: event.active.data.current
            ? event.active.data.current.task.leadId
            : 0,
        });
        if (event.active.data.current) {
          setLeadId(event.active.data.current.task.leadId);
        }
        copy.pipelineStageId = event?.over?.id;
        tasks[activeIndex] = copy;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }
};

function generateId() {
  // generate a random number between 0 and 10000
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
