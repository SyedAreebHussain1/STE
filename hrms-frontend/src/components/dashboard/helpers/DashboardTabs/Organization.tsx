import { Col, Row } from "antd";
import BirthdaysAnniversaries from "../BirthdaysAnniversaries/BithdaysAnniversaries";
import TrackedHours from "../TrackedHours/TrackedHours";
import InAndOut from "../InAndOut/InAndOut";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { getHoursChartApi } from "../../../../redux/api/Dashboard";
const Organization = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getHoursChartApi(dispatch);
  }, []);
  const HoursChart = useSelector((state: RootState) => state.HoursChart);
  const HoursChartData = HoursChart?.data?.data;
  return (
    <div className="w-full overflow-auto">
      <Row gutter={16} className="h-[700px] md:h-auto w-full overflow-hidden">
        <Col xs={24} lg={12} className="h-full">
          <TrackedHours data={HoursChartData} />
        </Col>
        <Col xs={24} lg={12} className="h-full">
          <InAndOut />
        </Col>
      </Row>
      <div className="w-full overflow-hidden mt-[20px]">
        <BirthdaysAnniversaries />
      </div>
    </div>
  );
};

export default Organization;
