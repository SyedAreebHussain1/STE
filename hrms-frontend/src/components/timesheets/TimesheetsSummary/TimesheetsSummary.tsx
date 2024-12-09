import { Row, Col } from "antd";
import Summary from "./Summary";
import TimeEntries from "./TimeEntries";
import { useLocation } from "react-router-dom";

const TimesheetsSummary = () => {
  const { state } = useLocation();
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={6} xl={4}>
        <Summary stateData={state} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={18} xl={20}>
        <TimeEntries stateData={state} />
      </Col>
    </Row>
  );
};

export default TimesheetsSummary;
