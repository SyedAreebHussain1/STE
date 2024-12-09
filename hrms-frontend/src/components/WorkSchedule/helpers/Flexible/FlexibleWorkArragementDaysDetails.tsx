import { Col, Row } from "antd";

type Props = {
  data?: any;
  name: string;
};

const FlexibleWorkArragementDaysDetails = ({ data, name }: Props) => {
  return (
    <div className="my-[10px]">
      <Row>
        <Col xs={8}>
          <h1 className="text-[1rem] text-[#667085] dark:text-[#D0D5DD]">
            {name}
          </h1>
        </Col>
        {data && (data?.hour || data.minute) ? (
          <>
            <div className="flex gap-[10px]">
              <span className="text-[1rem] text-[#344054] dark:text-white">
                {data.hour}h
              </span>

              <span className="text-[1rem] text-[#344054] dark:text-white">
                {data.minute}m
              </span>
            </div>
          </>
        ) : (
          <Col xs={16}>
            <span className="text-[1rem] text-[#344054] font-bold dark:text-[#D0D5DD]">
              Rest Day
            </span>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default FlexibleWorkArragementDaysDetails;
