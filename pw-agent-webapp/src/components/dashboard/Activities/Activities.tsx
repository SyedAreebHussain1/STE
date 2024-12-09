import SectionTitle from "../../SectionTitle";
import { Row, Col } from "antd";
import ActivitiesChart from "./ActivitiesChart";
type Props = {};

const Activities = (props: Props) => {
  return (
    <div className="bg-white rounded-[.5rem] shadow-sm p-6">
      <SectionTitle title={"ACTIVITIES"} />
      <Row gutter={40}>
        <Col xs={24} sm={24} md={10}>
          <div className="w-[210px] h-[150px] md:w-[300px] md:h-[210px]">
            <ActivitiesChart />
          </div>
        </Col>
        <Col xs={24} sm={24} md={14}>
          <h4 className="text-[#d0d2d8] mb-4 text-base font-bold">
            Top 10 activities
          </h4>
          <Row>
            <Col xs={24} sm={24} md={12}>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
                <div className="flex items-center gap-2 p-[.75rem]">
                  <div className="bg-[#424b63] w-[12px] h-[12px] rounded-[.125rem]" />
                  <div className="h-[8px] w-[114px] bg-[#ecedef] border border-[#ecedef] rounded-[.125rem]" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Activities;
