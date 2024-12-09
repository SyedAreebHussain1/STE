import { Col } from "antd";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Tag from "../../../../helpers/tag/tag";
import {
  deleteProjectApi,
  getAllProjectsApi,
} from "../../../../redux/api/ProjectAndActivities/Project";
import { RootState } from "../../../../redux/store";
import deleteIcon from "./../../../../assets/delete.svg";
import editIcon from "./../../../../assets/editIcon.svg";
import editWhiteIcon from "./../../../../assets/editWhiteIcon.svg";
import EditProjectDrawer from "./EditProjectDrawer";

interface DataType {
  projectDetails: any;
}

const ProjectCard = ({ projectDetails }: DataType) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id: any) => {
    deleteProjectApi(dispatch, id, onDelete);
  };

  const onDelete = () => {
    getAllProjectsApi(dispatch, { page: 1, limit: 10 });
  };
  return (
    <>
      {isEditMode && (
        <EditProjectDrawer
          id={selectedProject}
          toggle={isEditMode}
          setToggle={setIsEditMode}
        />
      )}
      <Col
        xs={24}
        md={10}
        xl={7}
        className="light:border p-4 rounded-md bg-white dark:bg-dark-grayLight h-[200px] m-4 cursor-pointer"
      >
        <div
          className="w-full"
          onClick={() =>
            navigate(`/project-activies/tasks/${projectDetails?.id}`)
          }
        >
          <Tag
            title={projectDetails?.companyDepartment?.title}
            className={
              "mb-3 dark:bg-[#F0F1F3] dark:bg-opacity-50 dark:border-none dark:text-black"
            }
            bold
          />
        </div>

        <div className="flex justify-between items-center mb-3">
          <h1
            className="font-bold text-md text-graySecondary dark:text-white flex-1 "
            onClick={() =>
              navigate(`/project-activies/tasks/${projectDetails?.id}`)
            }
          >
            {projectDetails?.name}
          </h1>
          <div className="flex gap-2 items-center">
            <img
              src={darkMode === "dark" ? editWhiteIcon : editIcon}
              alt=""
              onClick={() => {
                setSelectedProject(projectDetails?.id);
                setIsEditMode(true);
              }}
            />
            <img
              src={deleteIcon}
              alt=""
              onClick={() => handleDelete(projectDetails?.id)}
            />
          </div>
        </div>
        <p
          className="line-clamp-3 text-grayPrimary dark:text-lightGray"
          onClick={() =>
            navigate(`/project-activies/tasks/${projectDetails?.id}`)
          }
        >
          {projectDetails?.description}
        </p>
        <hr className="dark:bg-[#F2F4F7] my-3" />
        <p
          className="text-grayPrimary dark:text-lightGray"
          onClick={() =>
            navigate(`/project-activies/tasks/${projectDetails?.id}`)
          }
        >
          Starts on: {moment(projectDetails?.createdAt).format("YYYY-MM-DD")}
        </p>
      </Col>
    </>
  );
};
export default ProjectCard;
