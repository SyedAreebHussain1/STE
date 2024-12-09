import { Col, Row } from "antd";
import CardOfOfferOfServices from "./CardOfOfferOfServices";
import image1 from "../../../assets/servicesweofferImage1.svg";
import image2 from "../../../assets/serviceweofferImage2.svg";
import image3 from "../../../assets/serviceweofferimage3.svg";
import bgimage1 from "../../../assets/servicesweofferbgimage1.svg";
import bgimage2 from "../../../assets/servicesweofferbgimage2.svg";
import bgimage3 from "../../../assets/servicesweofferbgimage3.svg";

const OfferOfServices = () => {
  return (
    <div className="mt-[66px]">
      <span className="text-[3.378rem] text-[#FFFFFF] font-semibold ">
        Services we Offer
      </span>
      <div className="w-[450px] h-[4px] p-0 m-0 flex gap-10">
        <div className="w-[70%] bg-[#CCFE06] h-full" />
        <div className="w-[15%] bg-[#CCFE06] h-full" />
      </div>
      <div className="mt-[67px]">
        <Row>
          <Col xs={24} sm={12} lg={8}>
            <CardOfOfferOfServices
              count={"01"}
              title={"Hr+"}
              image={image1}
              backgroundImage={bgimage1}
              styling={{
                CircleBorder: "border-[#7C4BDE]",
                backColor: "serviceProvideFirstBackgroundColor",
              }}
              explanation={
                "A brief explanation for what hr plus does along with some bullet points"
              }
              bulletPoints={["Bullet point no. 1", "Bullet point no. 2"]}
            />
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardOfOfferOfServices
              count={"02"}
              title={"Sales+"}
              image={image2}
              backgroundImage={bgimage2}
              styling={{
                CircleBorder: "border-[#B6DA29]",
                backColor: "serviceProvideSecondBackgroundColor",
              }}
              explanation={
                "A brief explanation for what hr plus does along with some bullet points"
              }
              bulletPoints={[
                "Bullet point no. 1",
                "Bullet point no. 2",
                "Bullet point no. 3",
              ]}
            />
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <CardOfOfferOfServices
              count={"03"}
              title={"Venture+"}
              image={image3}
              backgroundImage={bgimage3}
              styling={{
                CircleBorder: "border-[#48B8BC]",
                backColor: "serviceProvidethiredBackgroundColor",
              }}
              explanation={
                "A brief explanation for what hr plus does along with some bullet points"
              }
              bulletPoints={[
                "Bullet point no. 1",
                "Bullet point no. 2",
                "Bullet point no. 3",
              ]}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default OfferOfServices;
