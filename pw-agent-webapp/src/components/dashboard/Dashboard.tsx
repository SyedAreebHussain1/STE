import { Col, Row } from "antd";
import Activities from "./Activities/Activities";
import BookDemo from "./BookDemo/BookDemo";
import HelloAndHolidays from "./HelloAndHolidays";
import TrackedHours from "./TrackedHours/TrackedHours";
import InAndOut from "./InAndOut/InAndOut";
import Location from "./DashboardLocation/DashboardLocation";
import Projects from "./Projects/Projects";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={16} xxl={19}>
        <div className='flex flex-col gap-[2.5rem]'>
          <BookDemo />
          <HelloAndHolidays />
          <TrackedHours />
          <Activities />
          <Projects />
          <Location />
        </div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xxl={5}
        className='sticky top-0 h-[100vh]'
      >
        <InAndOut />
      </Col>
    </Row>
  );
};

export default Dashboard;
