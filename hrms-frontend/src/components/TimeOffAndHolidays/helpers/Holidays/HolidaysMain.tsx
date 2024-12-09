import { useState } from "react";
import { Col, Row } from "antd";
import ImortedCalender from "./ImortedCalender";
import HolidaysCalender from "./HolidaysCalender";
import HolidaysTables from "./HolidaysTables";
import AddNewCalender from "./AddNewCalender";

const HolidaysMain = () => {
  const [addNewCalender, setAddNewCalender] = useState<boolean>(false);

  return (
    <div>
      <Row>
        <Col sm={24} lg={4} md={24}>
          <AddNewCalender setIsTrue={setAddNewCalender} />
          <ImortedCalender />
        </Col>

        <Col sm={24} lg={20} md={24}>
          <div>
            <HolidaysCalender
              isTrue={addNewCalender}
              setIsTrue={setAddNewCalender}
            />
            <HolidaysTables />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HolidaysMain;
