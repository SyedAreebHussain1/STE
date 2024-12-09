import { Col, Row } from "antd";
import moment from "moment";

type Props = {
  data?: any;
  name: string;
};

const FixedWorkArragementDaysDetails = ({ data, name }: Props) => {
  return (
    <div className="my-[10px]">
      <Row>
        <Col xs={8}>
          <h1 className="text-[1rem] text-[#667085] dark:text-[#D0D5DD]">
            {name}
          </h1>
        </Col>
        {data && data?.workStartTime && data?.workEndTime ? (
          <>
            <Col xs={8}>
              <span className="text-[1rem] text-[#344054] dark:text-white">
                {moment(data.workStartTime).format("h:mm A")}
              </span>
            </Col>

            <Col xs={8}>
              <span className="text-[1rem] text-[#344054] dark:text-white">
                {moment(data.workEndTime).format("h:mm A")}
              </span>
            </Col>
          </>
        ) : (
          <Col xs={16}>
            <span className="text-[1rem] text-[#344054] dark:text-[#D0D5DD] font-bold">
              Rest Day
            </span>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default FixedWorkArragementDaysDetails;
