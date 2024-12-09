import { Col, Row } from "antd";

const ReadyToWork = () => {
  return (
    <div
      className="h-[465px] w-full bg-[#1E1E1E] "
      style={{
        boxShadow: " 0px 8px 8px 0px rgb(204 254 6 / 30%) ",
      }}
    >
      <Row gutter={[0, 20]} className="h-full">
        <Col xs={24} lg={14} className=" w-full h-full">
          <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[500px] text-white">
              <h1 className="text-[3.278rem] font-semibold leading-[3.4rem]">
                Ready to work with Daftar Plus?
              </h1>
              <p className="text-[1.147rem] font-medium mt-[10px]">
                Join us now and become a part of this amazing journey with
                Daftar Plus.
              </p>
              <button
                className={`buttonborderAnimation px-[65px] py-[14] text-[1.044rem] font-normal mt-[40px] `}
              >
                {/* change this text from css */}
                Apply now
              </button>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={10} className="bg-[#3ED0D6] w-full h-full"></Col>
      </Row>
    </div>
  );
};

export default ReadyToWork;
