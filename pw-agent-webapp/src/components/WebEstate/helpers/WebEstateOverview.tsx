import { Row } from "antd";
import WebEstateStatistics from "./WebEstateStatistics";
import WebEstateFeatures from "./WebEstateFeatures";

const WebEstateOverview = () => {
  return (
    <div>
      <Row gutter={16}>
        <WebEstateStatistics />
        <WebEstateFeatures />
      </Row>
    </div>
  );
};

export default WebEstateOverview;
