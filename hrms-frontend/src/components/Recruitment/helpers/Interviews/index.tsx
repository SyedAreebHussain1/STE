import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Pagination, Row, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import { getAllInterviewsApi } from "../../../../redux/api/Recruitment";
import InterviewList from "./helpers/InterviewList";

const UpcomingInterviews = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const [searchValue, setSearchValue] = useState("");
  const [interviewsFind, setInterviewsFind] = useState("");
  const [isUpcoming, setIsUpcoming] = useState(true);
  const interviews = useSelector((state: any) => state?.getAllInterviews);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllInterviewsApi(
      dispatch,
      { page: 1, limit: 10 },
      isUpcoming ? "UpComing" : "Past",
      searchValue
    );
  }, []);

  const handlePageChange = (e: any) => {
    getAllInterviewsApi(
      dispatch,
      { page: e, limit: 10 },
      isUpcoming ? "UpComing" : "Past",
      searchValue
    );
  };

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getAllInterviewsApi(
        dispatch,
        { page: 1, limit: 10 },
        isUpcoming ? "UpComing" : "Past",
        value
      );
    }, 500);
  }

  const handleInterviewType = (e: any) => {
    setInterviewsFind(e);
    setIsUpcoming(!isUpcoming);
  };
  useEffect(() => {
    getAllInterviewsApi(
      dispatch,
      { page: 1, limit: 10 },
      isUpcoming ? "UpComing" : "Past",
      searchValue
    );
  }, [interviewsFind]);

  return (
    <Row className="p-4" gutter={[0, 20]}>
      <Col span={24}>
        <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-2">
          Interviews
        </h1>
      </Col>
      <div className="flex justify-center items-center gap-2 w-[90%] mx-auto">
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
            onChange={handleInterviewType}
            defaultValue={"UpComing"}
            placeholder={
              <p className="dark:text-gray-500">Select Upcoming/Past</p>
            }
            className="h-[48px] dark-input w-full"
          >
            <Select.Option value="UpComing">UpComing</Select.Option>
            <Select.Option value="Past">Past</Select.Option>
          </Select>
        </div>
      </div>

      <Col span={24}>
        <div className=" overflow-x-auto">
          <InterviewList
            interviews={interviews?.data}
            loading={interviews.loading}
            isUpcoming={isUpcoming}
          />
        </div>
      </Col>

      <Col span={24} className="flex justify-end">
        <Pagination
          current={interviews?.data?.data?.meta?.currentPage}
          hideOnSinglePage
          pageSize={interviews?.data?.data?.meta?.itemsPerPage}
          total={interviews?.data?.data?.meta?.totalItems}
          onChange={handlePageChange}
          responsive={true}
          simple
        ></Pagination>
      </Col>
      <Col>
        <RoundedButton
          title={"View Evaluations"}
          className="dark:bg-dark-primary dark:text-white"
          onClick={() => navigate("/recruitment/evaluations")}
        />
      </Col>
    </Row>
  );
};

export default UpcomingInterviews;
