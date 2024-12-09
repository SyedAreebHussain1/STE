import { Col, Row } from "antd";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ToolCards from "./helpers/ToolCards";

const MarketingTools = () => {
  const navigate = useNavigate()
  return (
    <PageContainer>
      <PageHeader
        title={
          <>
            <div
              className="text-[1rem] flex gap-1 items-center font-semibold text-[#27A3A3] cursor-pointer "
              onClick={() => navigate(-1)}
            >
              <span>
                <IoIosArrowBack />
              </span>
              Back to Home
            </div>
          </>
        }
        subTitle={`Marketing Tools`}
      />
      <ToolCards/>
      {/* <Row gutter={16} className="mt-4">
        <Col xs={24} lg={8}>
          <WebEstateAddSection />
        </Col>
        <Col xs={24} lg={16}>
          <WebEstateOverview />
        </Col>
      </Row> */}
    </PageContainer>
  );
};

export default MarketingTools;
