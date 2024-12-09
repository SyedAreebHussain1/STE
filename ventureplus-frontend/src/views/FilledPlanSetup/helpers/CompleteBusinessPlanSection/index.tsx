import { Col, Row } from "antd";
import SectionHeading from "../../../../components/SectionHeading";
import SectionWrapper from "../../../../components/SectionWrapper";
import CompleteBusinessPlanCards from "./helpers/CompleteBusinessPlanCards";

const CompleteBusinessPlan = () => {
  return (
    <SectionWrapper>
      <Row>
        <Col sm={12} xs={24}>
          <SectionHeading
            mainHeading="Complete Business Plan"
            subHeading="STEP 2"
          />
        </Col>
        <Col sm={12} xs={24}>
          <p className="paragraph text-black">
            Answer questions based on chapters and edit the plan based on your
            liking.
          </p>
          <p className="para paragraph">
            Note: you can only access the next chapter after completing the
            previous one.
          </p>
        </Col>
        <Col sm={24}>
          <CompleteBusinessPlanCards />
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default CompleteBusinessPlan;
