import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import JobOpenings from "./helpers/JobOpenings/helpers/JobOpenings";

const Recruitment = () => {
  const navigate = useNavigate();

  return (
    <>
      <Row className="p-4">
        <Col span={24} className="mb-4">
          <Button
            onClick={() => navigate("/recruitment/create-job-posting")}
            className="bg-white text-black text-[.975rem] font-medium rounded-full h-[34px] flex items-center gap-2"
          >
            <span className="text-[24px]">+</span>
            Create Opening
          </Button>
        </Col>
        <Col span={24}>
          <JobOpenings />
        </Col>
      </Row>
    </>
  );
};

export default Recruitment;
