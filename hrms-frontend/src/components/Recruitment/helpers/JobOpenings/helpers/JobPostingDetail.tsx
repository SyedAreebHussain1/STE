import { EditOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../../../../helpers/button/AnimateButton";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import { RootState } from "../../../../../redux/store";
import {
  getJobOpeningByIdApi,
  updateJobOpeningActiveStatusApi,
} from "../../../../../redux/api/Recruitment";

const JobPostingDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobDetails = useSelector(
    (state: RootState) => state.getJobOpeningById?.data
  );
  const onSuccess = () => {
    getJobOpeningByIdApi(dispatch, id);
  };

  const toggleActive = (e: any, id: any) => {
    updateJobOpeningActiveStatusApi(
      dispatch,
      id,
      {
        isJobOpening: e,
      },
      onSuccess
    );
  };

  useEffect(() => {
    if (id) getJobOpeningByIdApi(dispatch, id);
  }, [id]);

  const viewApplicants = () => {
    navigate(`/recruitment/candidate-details/${id}`);
  };
  const viewPipelines = () => {
    navigate(`/recruitment/pipeline/${id}`, {
      state: jobDetails?.data?.title,
    });
  };

  return (
    <>
      <Row className="p-4" gutter={[0, 20]}>
        <Col span={24} className="flex gap-4 items-center mb-2">
          <h1 className="dark:text-dark-secondary font-semibold text-2xl">
            Job Posting Details
          </h1>
          <AnimateButton
            icon={<EditOutlined />}
            title={"Edit"}
            onClick={() =>
              navigate(`/recruitment/edit-job-posting-details/${id}`)
            }
          />
        </Col>
        <Col span={24}>
          <Row>
            <Col sm={12}>
              <h1 className="text-2xl mb-2 font-extrabold text-light-primary dark:text-white">
                {jobDetails?.data?.title}
              </h1>
              <p className="dark:text-white">
                {" "}
                {jobDetails?.data?.workspaceType} |{" "}
                {jobDetails?.data?.companyDepartment?.title}{" "}
              </p>
              <p className="dark:text-white">
                Posted on:{" "}
                {moment(jobDetails?.data?.createdAt).format("MMM. D, YYYY")}
              </p>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="mb-2">
          <h1 className="dark:text-dark-secondary font-semibold text-lg text-light-primary">
            Job Description
          </h1>
          <p className="mb-2 dark:text-white">
            {jobDetails?.data?.jobDescription}
          </p>
        </Col>
        <Col span={24}>
          <Row gutter={[0, 10]}>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <h1 className="dark:text-dark-secondary font-semibold text-lg text-light-primary">
               Expected Salery
              </h1>
              <p className="dark:text-white">
                Rs. {jobDetails?.data?.startSalaryRange} - Rs.{" "}
                {jobDetails?.data?.endSalaryRange}
              </p>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <h1 className="dark:text-dark-secondary font-semibold text-lg text-light-primary">
                Employment Type
              </h1>
              <p className="dark:text-white">
                {jobDetails?.data?.employeeType}
              </p>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8}>
              <h1 className="dark:text-dark-secondary font-semibold text-lg text-light-primary">
                Workplace Type
              </h1>
              <p className="dark:text-white">
                {jobDetails?.data?.workspaceType}
              </p>
            </Col>
            <Col sm={24}>
              <h1 className="dark:text-dark-secondary font-semibold text-lg text-light-primary">
                Link ( {jobDetails?.data?.isActive ? "Active" : "Inactive"} )
              </h1>
              <Typography.Link href={jobDetails?.data?.linkUrl} target="_blank">
                {jobDetails?.data?.linkUrl}
              </Typography.Link>
            </Col>
          </Row>
        </Col>
        <Col sm={24}>
          <div className="flex gap-4 w-full">
            <RoundedButton
              title={"View Applicants"}
              onClick={viewApplicants}
              className="bg-light-primary text-white dark:bg-white dark:text-dark-primary"
            />
            <RoundedButton
              title={"View Pipelines"}
              onClick={viewPipelines}
              className="text-dark-primary dark:bg-dark-primary dark:text-white"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default JobPostingDetail;
