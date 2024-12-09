import { Col, Row, Tabs } from "antd";
import { TabsProps } from "antd/lib";
import { useParams } from "react-router-dom";
import LiveLocation from "./helpers/LiveLocation";
import StopHistory from "./helpers/StopHistory";

const LiveLocationAndStopHistory = () => {
  const { id } = useParams();
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: <b>Stop History</b>,
      children: <StopHistory id={id} />,
    },
    {
      key: "2",
      label: <b>Live Location</b>,
      children: <LiveLocation id={id} />,
    },
  ];
  return (
    <Row>
      <Col span={24}>
        <Tabs
          defaultActiveKey="1"
          items={tabs}
          size="large"
          tabBarStyle={{ padding: "0px 20px", margin: 0 }}
        />
      </Col>
    </Row>
  );
};

export default LiveLocationAndStopHistory;
