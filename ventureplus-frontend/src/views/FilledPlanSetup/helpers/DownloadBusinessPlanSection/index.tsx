import { Col, Row } from "antd";
import SectionHeading from "../../../../components/SectionHeading";
import SectionWrapper from "../../../../components/SectionWrapper";
import ButtonWithSvg from "../../../../components/button/ButtonWithSvg";
import { downloadIcon } from "../../../../assets";
import dayjs from "dayjs";

const DownloadBusinessPlan = () => {
  return (
    <SectionWrapper>
      <Row>
        <Col xl={12} lg={10} md={11} sm={24}>
          <SectionHeading
            mainHeading="Download Business Plan"
            subHeading="STEP 3"
          />
          <ButtonWithSvg
            title={"Download"}
            type="primary"
            sm
            icon={downloadIcon}
          />
        </Col>
        <Col span={1}></Col>
        <Col xl={11} lg={13} md={14} sm={24}>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <div
                key={i}
                className="border border-strokes rounded-lg flex flex-col justify-center items-center gap-1 bg-[#fff] p-4 w-[200px] h-[131px] text-title"
              >
                <h1 className="font-medium leading-[19.58px] text-lg ">
                  Plan One
                </h1>
                <h1 className="font-medium leading-[19.58px] ">PDF</h1>
                <p>{dayjs(new Date())?.format("YYYY-MM-DD")}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default DownloadBusinessPlan;
