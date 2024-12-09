import { Col, Input, Pagination, Row, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../helpers/button/RoundedButton";
import {
  getAllDepartmentsForProjectApi,
  getAllProjectsApi,
} from "../../redux/api/ProjectAndActivities/Project";
import { RootState } from "../../redux/store";
import CreateProjectDrawer from "./helpers/Projects/CreateProjectDrawer";
import ProjectCard from "./helpers/Projects/ProjectCard";
import { SearchOutlined } from "@ant-design/icons";

const ProjectAndActivities = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<any>();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const getAllProjects = useSelector(
    (state: RootState) => state.getAllProjects?.data
  );
  const getAllDepartmentsForProject = useSelector(
    (state: RootState) => state.getAllDepartmentsForProject
  );

  const handlePageChange = (e: any) => {
    getAllProjectsApi(
      dispatch,
      { page: e, limit: 10 },
      { departmentId: selectedDepartment, searchValue }
    );
  };

  useEffect(() => {
    getAllProjectsApi(dispatch, { page: 1, limit: 10 });
  }, []);

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getAllProjectsApi(
        dispatch,
        { page: 1, limit: 10 },
        { departmentId: selectedDepartment, searchValue }
      );
    }, 500);
  }

  useEffect(() => {
    getAllDepartmentsForProjectApi(dispatch);
  }, []);

  useEffect(() => {
    getAllProjectsApi(
      dispatch,
      { page: 1, limit: 10 },
      { departmentId: selectedDepartment, searchValue }
    );
  }, [selectedDepartment]);

  return (
    <>
      {open && <CreateProjectDrawer toggle={open} setToggle={setOpen} />}

      <div className="p-4">
        <div className="flex justify-between items-center w-full my-2 px-4">
          <h1 className="mb-4 font-bold text-graySecondary text-xl dark:text-white">
            All Projects
          </h1>
          <RoundedButton
            title={"+ Add New Project"}
            sm
            bold
            onClick={() => setOpen(true)}
            className="mb-4 bg-transparent text-light-primary dark:text-dark-secondary border-light-primary dark:border-dark-secondary"
          />
        </div>
        <div className="flex justify-evenly items-center gap-2 w-[80%] mx-auto mb-2">
          <div className="w-full">
            <Input
              className="h-[48px] dark-input"
              placeholder="Search"
              value={searchValue || ""}
              onChange={(e) => onSearch(e.target.value)}
              prefix={<SearchOutlined className="h-[13.51px] w-[13.51px]" />}
            />
          </div>

          <div className="w-full">
            <Select
              loading={getAllDepartmentsForProject?.loading}
              placeholder={<p className="text-gray-500">Select department</p>}
              className="h-[48px] dark-input w-full"
              onChange={(e) => setSelectedDepartment(e)}
            >
              {getAllDepartmentsForProject?.data?.data?.map((deprt: any) => (
                <Select.Option value={deprt?.id}>{deprt?.title}</Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <Row>
          {getAllProjects?.data?.items?.map((project: any) => (
            <ProjectCard key={project?.id} projectDetails={project} />
          ))}
          <Col span={24} className="flex justify-center mt-4">
            <Pagination
              current={getAllProjects?.data?.meta?.currentPage}
              hideOnSinglePage
              pageSize={getAllProjects?.data?.meta?.itemsPerPage}
              total={getAllProjects?.data?.meta?.totalItems}
              onChange={handlePageChange}
              responsive={true}
              simple
            ></Pagination>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ProjectAndActivities;
