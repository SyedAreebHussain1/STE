import { Col, Row } from "antd";
import image1 from "../../../assets/aboutUsImage1.svg";
import image2 from "../../../assets/aboutUsimage2.svg";
import image3 from "../../../assets/aboutUsimage3.svg";
import image4 from "../../../assets/aboutUsImage4.svg";

const AboutUs = () => {
  return (
    <div className="mt-[65px]">
      <h1 className="text-[3.861rem] text-white">About us</h1>
      <div className="pt-[36px] text-white text-[1.7rem] font-normal leading-[2.25rem]">
        <p>
          The About Us page of your website is an essential source of
          information for anyone who wants to know more about your business. It
          is where you showcase your history, the unique value of your work,
          your mission and vision, and the audiences you serve. Together, the
          design, written content, and visual elements of an About Us page tell
          an important story about who you are and what matters to you.
        </p>
      </div>
      <div className="mt-[66px]">
        <Row>
          <Col xs={24} sm={12} lg={6}>
            <div className="border-[1px] border-[#C2A3FF] rounded-full flex  items-center justify-center w-[280px] h-[280px]">
              <div className="w-[153px] flex flex-col items-center">
                <img
                  src={image1}
                  alt="about us"
                  className="w-[111px] h-[75px]"
                />
                <p className="mt-[13px] text-[1.3rem] leading-[1.721rem] font-normal text-white w-[153px]">
                  Fact about your company here.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div className="border-[1px] border-[#C2A3FF] rounded-full flex  items-center justify-center w-[280px] h-[280px]">
              <div className="w-[153px] flex flex-col items-center">
                <img
                  src={image2}
                  alt="about us"
                  className="w-[111px] h-[75px]"
                />
                <p className="mt-[13px] text-[1.3rem] leading-[1.721rem] font-normal text-white w-[153px]">
                  Fact about your company here.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div className="border-[1px] border-[#C2A3FF] rounded-full flex  items-center justify-center w-[280px] h-[280px]">
              <div className="w-[153px] flex flex-col items-center">
                <img
                  src={image3}
                  alt="about us"
                  className="w-[111px] h-[75px]"
                />
                <p className="mt-[13px] text-[1.3rem] leading-[1.721rem] font-normal text-white w-[153px]">
                  Fact about your company here.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <div className="border-[1px] border-[#C2A3FF] rounded-full flex  items-center justify-center w-[280px] h-[280px]">
              <div className="w-[153px] flex flex-col items-center">
                <img
                  src={image4}
                  alt="about us"
                  className="w-[111px] h-[75px]"
                />
                <p className="mt-[13px] text-[1.3rem] leading-[1.721rem] font-normal text-white w-[153px]">
                  Fact about your company here.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
