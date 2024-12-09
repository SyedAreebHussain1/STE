import { Col, Row } from "antd";
import SectionHeading from "../../../../components/SectionHeading";
import SectionWrapper from "../../../../components/SectionWrapper";
import SetupBusinessPlanCards from "./helpers/SetupBusinessPlanCards";
import ButtonWithSvg from "../../../../components/button/ButtonWithSvg";
import { useNavigate } from "react-router-dom";
import {
  briefcaseBgImg,
  infoIcon,
} from "../../../../assets/filledPlanSetupAssets";
import { rightArrowGreenIcon } from "../../../../assets";

const SetupBusinessPlan = () => {
  const navigate = useNavigate();
  return (
    <SectionWrapper>
      {" "}
      <Row>
        <Col>
          <SectionHeading
            mainHeading="Setup Business Plan"
            subHeading="STEP 1"
          />
        </Col>
        <Col></Col>
        <SetupBusinessPlanCards />
      </Row>
    </SectionWrapper>
  );
};

export default SetupBusinessPlan;
