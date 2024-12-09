import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Pagination, Row } from "antd";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import JobOpening from "./JobOpening";

import { useForm } from "antd/es/form/Form";
import { useDispatch, useSelector } from "react-redux";
import RoundedButton from "../../../../../helpers/button/RoundedButton";
import SelectFieldComponent from "../../../../../helpers/inputs/SelectFieldComponent";
import PageLoading from "../../../../../helpers/loaders/PageLoading";
import {
  getCompanyDepartmentsDropdownApi,
  getJobOpeningsApi,
} from "../../../../../redux/api/Recruitment";
import { RootState } from "../../../../../redux/store";
const JobOpenings = () => {
  const [form] = useForm();
  const ref = useRef<any>();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const dispatch = useDispatch();
  const getJobOpenings = useSelector((state: any) => state?.getJobOpenings);
  const getCompanyDepartmentDropdown = useSelector(
    (state: RootState) => state.getCompanyDepartmentsDropdown
  );

  useEffect(() => {
    getJobOpeningsApi(dispatch, { page: 1, limit: 10 });
  }, []);

  const handleSelectDepartment = (e: any) => {
    setSelectedDepartment(e);
  };

  useEffect(() => {
    if (selectedDepartment)
      getJobOpeningsApi(
        dispatch,
        { page: 1, limit: 10 },
        { departmentId: selectedDepartment, jobOpeningTitle: searchValue }
      );
  }, [selectedDepartment]);

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getJobOpeningsApi(
        dispatch,
        { page: 1, limit: 10 },
        { departmentId: selectedDepartment, jobOpeningTitle: value }
      );
    }, 500);
  }

  const handlePageChange = (e: any) => {
    getJobOpeningsApi(
      dispatch,
      { page: e, limit: 10 },
      { departmentId: selectedDepartment, jobOpeningTitle: searchValue }
    );
  };
  return (
    <>
      <Row className="p-4" gutter={[0, 20]}>
        <Col span={24}>
          <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-2">
            Job Openings
          </h1>
        </Col>

        <div className="flex justify-center items-center gap-2 w-[80%] mx-auto">
          <div className="w-full">
            <Input
              className="h-[48px] dark-input"
              placeholder="Search"
              value={searchValue || ""}
              onChange={(e) => onSearch(e.target.value)}
              prefix={<SearchOutlined className="h-[13.51px] w-[13.51px]" />}
            />
          </div>

          <div className="w-full mt-6">
            <SelectFieldComponent
              onChange={(e) => handleSelectDepartment(e)}
              placeholder={<p className="text-gray-500">Select department</p>}
              apiwithoutId={getCompanyDepartmentsDropdownApi}
              name={"departmentId"}
              loading={getCompanyDepartmentDropdown.loading}
            />
          </div>
        </div>

        <Col span={24} className="h-[350px] overflow-auto custom-scrollbar p-2">
          {getJobOpenings?.loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <PageLoading />
            </div>
          ) : getJobOpenings?.data?.data?.items?.length > 0 ? (
            getJobOpenings?.data?.data?.items?.map((job: any) => (
              <JobOpening key={job?.id} jobDetails={job} />
            ))
          ) : (
            <div className="dark:text-white">No Job Openings</div>
          )}
        </Col>
        <Col span={24}>
          <Pagination
            current={getJobOpenings?.data?.data?.meta?.currentPage}
            hideOnSinglePage
            pageSize={getJobOpenings?.data?.data?.meta?.itemsPerPage}
            total={getJobOpenings?.data?.data?.meta?.totalItems}
            onChange={handlePageChange}
            responsive={true}
            simple
          ></Pagination>
        </Col>
        <Col span={24} className="flex gap-2">
          <RoundedButton
            onClick={() => navigate(`/recruitment/create-job-posting`)}
            title={"Add a new job opening"}
            className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
          />
          <RoundedButton
            onClick={() => navigate("/recruitment/upcoming-interviews")}
            title={"Upcoming Interviews"}
            className="dark:bg-dark-primary dark:text-white"
          />
        </Col>
      </Row>
    </>
  );
};

export default JobOpenings;
