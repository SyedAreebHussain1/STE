import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import paymentPlanIcon from "./../../../assets/payment-plan-icon.svg";
import brochureIcon from "./../../../assets/brochure-icon.svg";
import quotationIcon from "./../../../assets/quatation-maker-icon.svg";
import postIcon from "./../../../assets/post-icon.svg";
import letterHeadIcon from "./../../../assets/letter-head-icon.svg";
import bCardIcon from "./../../../assets/bcard-icon.svg";

import ToolCard from "./ToolCard";

const ToolCards = () => {
  const navigate = useNavigate();

  const tools = [
    {
      icon: paymentPlanIcon,
      title: "Payment Plan Creator And Calculator",
      bgColor: "#147AD614",
      link: "/marketing-tools/",
      comingSoon: true
    },
    {
      icon: brochureIcon,
      title: "Brochure Generator",
      bgColor: "#7A00000D",
      link: "/marketing-tools/",
      comingSoon: true
    },
    {
      icon: quotationIcon,
      title: "Sales and Quotation Maker",
      bgColor: "#9747FF0D",
      link: "/marketing-tools/",
      comingSoon: true
    },
    {
      icon: postIcon,
      title: "Post Creator",
      bgColor: "#27A3A314",
      link: "/marketing-tools/",
      comingSoon: true
    },
    {
      icon: bCardIcon,
      title: "Business Card Creator",
      bgColor: "#0BBC640D",
      link: "/marketing-tools/business-card",
      comingSoon: false
    },
    {
      icon: letterHeadIcon,
      title: "Letter Head Creator",
      bgColor: "#F1DC9321",
      link: "/marketing-tools/",
      comingSoon: true
    },
  ];

  return (
    <Row gutter={16} className="mt-6">
      {tools.map((item: any) => {
        return (
          <ToolCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            link={item.link}
            bgColor={item.bgColor}
            comingSoon={item.comingSoon}
          />
        );
      })}
    </Row>
  );
};

export default ToolCards;

{
  /*  */
}
