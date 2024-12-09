import { Col, Pagination, Row, Segmented } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PageContainer } from "../../../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../../helpers/PageHeader/PageHeader";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import useToggle from "../../../../hooks/useToggle";
import { getTasksByProjectIdApi } from "../../../../redux/api/ProjectAndActivities/Task";
import { RootState } from "../../../../redux/store";
import taskBanner from "./../../../../assets/taskBanner.jpg";
import CreateTaskModal from "./CreateTaskModal";
import TaskCard from "./TaskCard";
import TaskFilters from "./TaskFilters";
import { useForm } from "antd/es/form/Form";

type Align = "Card View" | "Calender" | "Timeline";

const ProjectTasks = () => {
  const { id: projectId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [createTask, toggleCreateTask] = useToggle();
  const [searchValue, setSearchValue] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const ref = useRef<any>();
  const [form] = useForm();
  const [alignValue, setAlignValue] = useState<Align>("Card View");
  const getTasksByProjectId = useSelector(
    (state: RootState) => state.getTasksByProjectId?.data
  );

  const handlePageChange = (e: any) => {
    getTasksByProjectIdApi(dispatch, projectId, { page: e, limit: 10 });
  };

  useEffect(() => {
    if (projectId)
      getTasksByProjectIdApi(dispatch, projectId, { page: 1, limit: 10 });
  }, []);

  useEffect(() => {
    getTasksByProjectIdApi(
      dispatch,
      projectId,
      { page: 1, limit: 10 },
      searchValue,
      priority,
      status,
      dueDate
    );
  }, [priority, status, dueDate]);

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getTasksByProjectIdApi(
        dispatch,
        projectId,
        { page: 1, limit: 10 },
        value,
        priority,
        status,
        dueDate
      );
    }, 500);
  }

  const onDeleteTask = () => {
    getTasksByProjectIdApi(
      dispatch,
      projectId,
      { page: 1, limit: 10 },
      searchValue,
      priority,
      status,
      dueDate
    );
  };

  const onReset = () => {
    setSearchValue("");
    setPriority("");
    setStatus("");
    setDueDate("");
    form.resetFields();
  };

  return (
    <>
      {createTask && (
        <CreateTaskModal
          open={createTask}
          close={toggleCreateTask}
          projectId={projectId}
        />
      )}
      <PageContainer>
        <PageHeader
          title={
            <div className="text-[18px] font-medium">
              <div className="text-[0.975rem] flex  items-center font-medium text-light-primary dark:text-dark-secondary cursor-pointer ">
                <span onClick={() => navigate(-1)}>
                  <IoIosArrowBack className="px-[1px] text-[1rem]" size={25} />
                </span>
                <span onClick={() => navigate(-1)}>Back to Projects</span>
              </div>
              <p className="ml-6 mt-4 text-sm">Tasks</p>
            </div>
          }
          className={` dark:text-dark-secondary`}
          bgImg={taskBanner}
        />

        <div className="flex items-center justify-between my-4">
          <Segmented
            defaultValue="Card View"
            onChange={(value) => setAlignValue(value as Align)}
            options={["Card View", "Calender", "Timeline"]}
            size="middle"
          />
          <RoundedButton
            sm
            title={
              <span className="flex items-center ">
                <span className="text-[16px] pr-2">+</span>
                Add New Task
              </span>
            }
            onClick={toggleCreateTask}
            className="bg-transparent dark:border-dark-secondary dark:text-dark-secondary border-light-primary text-light-primary "
          />
        </div>

        <TaskFilters
          onSearch={onSearch}
          searchValue={searchValue}
          priority={priority}
          setPriority={setPriority}
          status={status}
          setStatus={setStatus}
          dueDate={dueDate}
          setDueDate={setDueDate}
          onReset={onReset}
          form={form}
        />
        <Row>
          {getTasksByProjectId?.data?.items?.map((item: any) => (
            <TaskCard
              key={item?.task?.id}
              task={item?.task}
              totalTime={item?.totalTime}
              onDelete={onDeleteTask}
              onReset={onReset}
            />
          ))}
          <Col span={24} className="flex justify-center mt-4">
            <Pagination
              current={getTasksByProjectId?.data?.meta?.currentPage}
              hideOnSinglePage
              pageSize={getTasksByProjectId?.data?.meta?.itemsPerPage}
              total={getTasksByProjectId?.data?.meta?.totalItems}
              onChange={handlePageChange}
              responsive={true}
              simple
            ></Pagination>
          </Col>
        </Row>
      </PageContainer>
    </>
  );
};
export default ProjectTasks;
