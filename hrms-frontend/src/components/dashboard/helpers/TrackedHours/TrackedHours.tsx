import SectionTitle from "../../../SectionTitle";
import { Row, Col, Button } from "antd";
import HourSummary from "./HourSummary";
import HoursChart from "./HoursChart";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../../helpers/button/RoundedButton";
interface Props {
  data: any;
}

const TrackedHours = ({ data }: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/timesheets");
  };

  return (
    <Row className="dark:bg-dark-grayprimary   dark:text-white bg-white rounded-md shadow-sm p-6 h-full">
      <Col
        md={24}
        lg={24}
        sm={24}
        className="flex justify-between h-[25px] mb-[40px]"
      >
        <div className="flex gap-2 h-full">
          <SectionTitle title={"Tracking hours"} />
          <p className="text-gray-400 text-[13px]">(Current Week)</p>
        </div>
        <RoundedButton
          onClick={() => handleButtonClick()}
          title={"View Timesheets"}
          className="dark:bg-dark-primary dark:text-white "
          sm
        />
      </Col>
      <Col md={24} sm={24} lg={24}>
        <Row gutter={4}>
          <Col xs={24} sm={24} md={4}>
            <HourSummary
              label="Worked Hours"
              value={data?.overallWorkedHours}
            />
            <HourSummary label="Break Hours" value={data?.overallBreakHours} />
            <HourSummary
              label="Overtime hours"
              value={data?.overallOverTimeHours}
            />
          </Col>
          <Col style={{ width: "100%" }} xs={24} md={20}>
            <HoursChart Hoursdata={data} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TrackedHours;
