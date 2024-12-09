import { Col, Row } from "antd";
import WebEstateFeaturesCard from "./WebEstateFeaturesCard";
import announcements from "../../../assets/announcements.png";
import reviewsManagement from "../../../assets/AgentCalendar.png";
import agentCalendar from "../../../assets/ReviewsManagement.png";
type Props = {};

const WebEstateFeatures = (props: Props) => {
  const cards = [
    {
      title: "Announcements",
      pera: "Empower your Agency with our intuitive Website Catalogue featuring customizable website.",
      img: announcements,
      url: "/webestate/announcements",
    },
    {
      title: "Reviews Management",
      pera: "Empower your Agency with our intuitive Website Catalogue featuring customizable website.",
      img: reviewsManagement,
      url: "/webestate/reviews",
    },
    {
      title: "Agent Calendar",
      pera: "Empower your Agency with our intuitive Website Catalogue featuring customizable website.",
      img: agentCalendar,
      url: "/appointment",
    },
  ];
  return (
    <Row gutter={16}>
      {cards.map((item: any, i) => {
        return (
          <Col xs={24} lg={8} xl={8} md={12} sm={24} key={i}>
            <WebEstateFeaturesCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default WebEstateFeatures;
