import { Col, Input, Row } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import OnBoardingRoleAndName from "./helpers/OnBoardingRoleAndName";
import OnBoardingCurrencyAndLanguage from "./helpers/OnBoardingCurrencyAndLanguage";
import OnBoardingCategory from "./helpers/OnBoardingCategory";

const YourRoleAndGoal = ({ state, setState }: any) => {
  const [customRole, setCustomRole] = useState(false);
  return (
    <div>
      <Row>
        <Col sm={24} md={24} lg={24} className=" mt-6 w-full">
          <OnBoardingRoleAndName
            custom={customRole}
            setCustom={setCustomRole}
            state={state}
            setState={setState}
          />
        </Col>
        <Col sm={24} md={24} lg={24} className="mt-5 w-full">
          <OnBoardingCurrencyAndLanguage setState={setState} state={state} />
        </Col>
        <Col sm={24} md={24} lg={24} className="mt-5 w-full">
          <OnBoardingCategory setState={setState} state={state} />
        </Col>
      </Row>
    </div>
  );
};

export default YourRoleAndGoal;
