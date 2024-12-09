import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Pagination, Row, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvaluationsApi,
  getAllInterviewsApi,
} from "../../../../redux/api/Recruitment";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import { useNavigate } from "react-router-dom";
import Evaluations from "./helpers/Evaluations";

const EvaluationList = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const [searchValue, setSearchValue] = useState("");
  const [isRated, setIsRated] = useState(true);
  const evaluations = useSelector((state: any) => state?.getAllEvaluations);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllEvaluationsApi(dispatch, { page: 1, limit: 10 });
  }, []);

  const handlePageChange = (e: any) => {
    getAllEvaluationsApi(dispatch, { page: e, limit: 10 }, searchValue);
  };

  function onSearch(value: any) {
    setSearchValue(value);
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      getAllEvaluationsApi(dispatch, { page: 1, limit: 10 }, value);
    }, 500);
  }

  const onSuccess = () => {
    getAllEvaluationsApi(dispatch, { page: 1, limit: 10 }, searchValue);
  };

  return (
    <Row className="p-4" gutter={[0, 20]}>
      <Col span={24}>
        <h1 className="dark:text-dark-secondary font-semibold text-2xl mb-2">
          Evaluations
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
      </div>
      <Evaluations
        evaluations={evaluations?.data}
        loading={evaluations.loading}
        isRated={isRated}
        onSuccess={onSuccess}
      />
      <Col span={24} className="flex justify-end">
        <Pagination
          current={evaluations?.data?.data?.meta?.currentPage}
          hideOnSinglePage
          pageSize={evaluations?.data?.data?.meta?.itemsPerPage}
          total={evaluations?.data?.data?.meta?.totalItems}
          onChange={handlePageChange}
          responsive={true}
          simple
        ></Pagination>
      </Col>
    </Row>
  );
};

export default EvaluationList;
