import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Divider, Switch } from "antd";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import Tag from "../../../../../helpers/tag/tag";
import {
  deleteJobOpeningApi,
  getJobOpeningsApi,
  updateJobOpeningActiveStatusApi,
} from "../../../../../redux/api/Recruitment";

interface PropType {
  jobDetails: any;
}

const JobOpening: React.FC<PropType> = ({ jobDetails }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const onSuccess = () => {
    getJobOpeningsApi(dispatch, { page: 1, limit: 10 });
  };

  const handlelDeleteJobOpening = (id: any) => {
    if (id) deleteJobOpeningApi(dispatch, id, onSuccess);
  };

  const toggleActive = (e: any, id: any) => {
    updateJobOpeningActiveStatusApi(
      dispatch,
      id,
      {
        isJobOpening: !jobDetails?.isActive,
      },
      onSuccess
    );
  };

  return (
    <div className="flex gap-2 mb-2">
      <div className="w-full rounded-md bg-white flex p-4 mb-2 gap-2">
        <div className="min-w-auto sm:min-w-[160px]">
          <h1 className="font-bold text-lg w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {jobDetails?.title?.charAt(0)?.toUpperCase() +
              jobDetails?.title?.slice(1)}
          </h1>
          <Tag
            title={moment(jobDetails?.createdAt).format("MMM D YYYY")}
            color={"text-white"}
            bgColor={"light-primary"}
            bgColorDark={"dark-purple"}
          />
        </div>
        <div className="flex-1 flex w-full justify-evenly">
          <div className="flex items-center">
            <div>
              <h1 className="font-bold text-md">Department</h1>
              <p>{jobDetails?.companyDepartment?.title}</p>
            </div>
          </div>
          <Divider
            type="vertical"
            className="dark:bg-dark-borderColor bg-light-primary h-full w-[1px]"
          />
          <div className="flex items-center">
            <div>
              <h1 className="font-bold text-md">Location</h1>
              <p>{jobDetails?.workspaceType}</p>
            </div>
          </div>
          <Divider
            type="vertical"
            className="dark:bg-dark-borderColor bg-light-primary h-full w-[1px]"
          />
          <div className="flex items-center">
            <div>
              <h1 className="font-bold text-md">Type</h1>
              <p>{jobDetails?.employeeType}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <h1 className="font-bold text-md">
                {jobDetails?.isActive ? "Active" : "Inactive"}
              </h1>
              <Switch
                value={jobDetails?.isActive}
                className={`${
                  jobDetails?.isActive ? "dark:bg-dark-purple" : "bg-gray-300"
                } `}
                onChange={(e: any) => toggleActive(e, jobDetails?.id)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <AnimateButton
          title={"Edit"}
          icon={<EditOutlined />}
          sm
          onClick={() =>
            navigate(`/recruitment/edit-job-posting-details/${jobDetails?.id}`)
          }
        />
        <AnimateButton
          title={"View"}
          icon={<EyeOutlined />}
          sm
          onClick={() =>
            navigate(`/recruitment/job-posting-details/${jobDetails?.id}`)
          }
        />
      </div>
    </div>
  );
};

export default JobOpening;
