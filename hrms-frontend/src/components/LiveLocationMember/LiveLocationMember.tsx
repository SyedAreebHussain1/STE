import { Col, Row } from "antd";
import CheckInAndOutData from "./helpers/CheckInAndOutData";
import { useEffect, useState } from "react";
import LiveLocationInMap from "./helpers/LiveLocationInMap";

const LiveLocationMember = () => {
  const [activeUserID, setActiveUserID] = useState<any>(0);
  const [filter, setFilter] = useState<any>({ search: "", date: null });

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <LiveLocationInMap id={activeUserID} date={filter?.date} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <CheckInAndOutData
          setActiveUserId={setActiveUserID}
          activeUserId={activeUserID}
          filter={filter}
          setFilter={setFilter}
        />
      </Col>
    </Row>
  );
};

export default LiveLocationMember;
