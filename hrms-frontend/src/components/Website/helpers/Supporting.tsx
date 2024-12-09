import { Col, Row } from "antd";
import linkedinIcon from "../../../assets/linkedinicon.svg";
import facebookIcon from "../../../assets/facebookicon.svg";
import instagramIcon from "../../../assets/instagramicon.svg";

const Supporting = () => {
  return (
    <div
      className="h-[463px] w-full bg-[#1E1E1E] "
      style={{
        boxShadow: " 0px 8px 8px 0px rgb(204 254 6 / 30%) ",
      }}
    >
      <Row gutter={[0, 20]} className="h-full">
        <Col xs={24} lg={10} className="bg-[#CCFE06] w-full h-full"></Col>
        <Col xs={24} lg={14} className=" w-full h-full">
          <div className=" w-full h-full flex justify-center items-center">
            <div className="w-[500px] text-white">
              <h1 className="text-[3.356rem] font-semibold leading-[3.3rem]">
                Supporting your growth every step of the way.
              </h1>
              <p className="text-[0.994rem] font-normal mt-[10px]">
                Join us now and become a part of this amazing journey
              </p>
              <div className={` mt-[40px] flex items-center gap-4`}>
                <div className="flex  items-center gap-[3px]">
                  <img
                    src={linkedinIcon}
                    alt="linkedin"
                    className="w-[24px] h-[24px]"
                  />
                  <span className="text-[1.011] font-normal text-[#6A6A6B]">
                    Linkedin
                  </span>
                </div>
                <div className="flex  items-center gap-[3px]">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-[24px] h-[24px]"
                  />
                  <span className="text-[1.011] font-normal text-[#6A6A6B]">
                    Facebook
                  </span>
                </div>
                <div className="flex  items-center gap-[3px]">
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-[24px] h-[24px]"
                  />
                  <span className="text-[1.011] font-normal text-[#6A6A6B]">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Supporting;
