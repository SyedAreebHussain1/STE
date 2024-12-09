import { Col, Row } from "antd";
import overdueIcon from "../../../../../assets/overdueIcon.png";
import completedIcon from "../../../../../assets/completedIcon.png";
import pendingIcon from "../../../../../assets/pendingIcon.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasksApi } from "../../../../../redux/api/TaskOverview";
import dayjs from "dayjs";
import AddNewTaskDrawer from "./AddNewTaskDrawer";
import { getFromStorage } from "../../../../../utils/storage";

const TasksOverviewHead = ({ setEnumValue, enumValue, items }: any) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  let user = getFromStorage("user");
  const getAllTasks = useSelector((state: any) => state?.getAllTasks);
  const [priority, setPriority] = useState([
    {
      color: "#F79009",
      count: 0,
      type: "Medium",
    },
    {
      color: "#F04438",
      count: 0,
      type: "High",
    },
    {
      color: "#12B76A",
      count: 0,
      type: "Low",
    },
  ]);
  const [status, setStatus] = useState([
    { lead: "Completed", count: 0, img: completedIcon },
    { lead: "Pending", count: 0, img: pendingIcon },
    { lead: "Overdue", count: 0, img: overdueIcon },
  ]);

  useEffect(() => {
    getAllTasksApi(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (getAllTasks?.data) {
      const {
        pendingCount,
        completedCount,
        overdueCount,
        highCount,
        mediumCount,
        lowCount,
      } = getAllTasks?.data;
      const updatedArray = status.map((item, i) => {
        return {
          ...item,
          count: [completedCount, pendingCount, overdueCount][i],
        };
      });

      const priorityArray = priority.map((item, i) => {
        return { ...item, count: [mediumCount, highCount, lowCount][i] };
      });
      setStatus(updatedArray);
      setPriority(priorityArray);
    }
  }, [getAllTasks?.data]);

  return (
    <>
      {toggle && <AddNewTaskDrawer toggle={toggle} setToggle={setToggle} />}
      <div className={`bg-[#FFFFFF] p-[15px] rounded-xl`}>
        <div className={`flex justify-between items-center`}>
          <div>
            <h2 className="text-[#1D2939] text-[1rem] font-semibold">
              Tasks Overview
            </h2>
            <p className="text-[#667085] text-[.8125rem] font-medium">
              Monitoring your task management
            </p>
          </div>

          {user.role !== "agentStaff" && (
            <div className="flex gap-2">
              {user.role === "agentManager" && (
                <div className="border gap-2 bg-[rgb(249,250,251)] flex justify-between items-center rounded-[5px] text-[.75rem] font-medium border-[#EAECF0] border-solid h-[36px] p-1  ">
                  {items.map((item: string, i: number) => {
                    return (
                      <button
                        key={i}
                        className={
                          enumValue === i
                            ? `text-[#27A3A3] !h-[30px] ml-[3px]  mr-[3px] `
                            : `text-[#667085] !h-[30px] ml-[3px]  mr-[3px] `
                        }
                        onClick={() => setEnumValue(i)}
                      >
                        <span
                          className={
                            enumValue === i
                              ? `!bg-[#FFFFFF] p-[5px] rounded-sm `
                              : "p-[5px] rounded-sm"
                          }
                        >
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}

              <button
                className="h-[36px] border rounded-lg flex justify-center items-center cursor-pointer p-[10px]"
                onClick={() => setToggle(true)}
              >
                <span className="text-[#27A3A3] text-[.8125rem] font-medium flex items-center gap-1">
                  <span className="font-normal text-[1.4375rem]">+</span> Add
                  New Task
                </span>
              </button>
            </div>
          )}
        </div>
        <div>
          <Row gutter={16} className="mt-6">
            <Col xs={24} lg={8} sm={24} md={8} xl={8}>
              <div className="bg-[#FFFFFF] h-[179px] rounded-[10px] p-[20px] border">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-[#1D2939] text-[1rem] font-semibold">
                      Priority Tasks
                    </h1>
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-[.8125rem]">
                  <h5 className="text-[#344054] font-semibold">Status</h5>
                  <p className="text-[#475467]  font-medium">
                    {priority.reduce((a: any, b: any) => a + b.count, 0)}
                  </p>
                </div>
                <div>
                  <div className="w-full flex h-[7px] rounded-lg border">
                    {priority.map((item: any, i: number) => (
                      <div
                        key={i}
                        style={{
                          width: `${
                            (item.count /
                              priority.reduce(
                                (a: any, b: any) => a + b.count,
                                0
                              )) *
                            100
                          }%`,
                          backgroundColor: item.color,
                          color: item.color,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between">
                    {priority.map((item, i) => {
                      return (
                        <div key={i}>
                          <h2 className="text-[.8125rem] text-[#667085] font-medium">
                            <span
                              style={{
                                backgroundColor: item.color,
                              }}
                              className={`w-[8px] h-[8px]  rounded-[50%] inline-block`}
                            ></span>{" "}
                            {item.type}
                          </h2>
                          <p className="text-[#344054] text-[1rem] font-medium">
                            {item?.count}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
            {status.map((item: any, i: any) => {
              return (
                <Col xs={24} lg={5} sm={24} md={5} xl={5} key={i}>
                  <div className="bg-[#FFFFFF] h-[179px] rounded-[10px] p-[15px] border">
                    <img src={item?.img} alt="" />
                    <h4 className="text-[#667085] text-[1rem] font-medium">
                      {item.lead}
                    </h4>
                    <p className="text-[#104141] text-[1.44rem] font-medium mt-3 ">
                      {item.count}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default TasksOverviewHead;
