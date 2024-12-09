import { Col } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  icon: any;
  title: string;
  bgColor: string;
  link: string;
  comingSoon: boolean;
};
const ToolCard = ({ icon, title, bgColor, link, comingSoon }: Props) => {
  const navigate = useNavigate();
  return (
    <Col xs={24} lg={6} sm={24} md={8} xl={5} className="mb-4 cursor-pointer">
      <div
        className={`h-[179px] rounded-[10px] p-[15px] border flex flex-col gap-4 flex-start items-start justify-center`}
        onClick={() => {
          navigate(link);
        }}
        style={{
          background: comingSoon ? "#E5E7EB" : bgColor,
          cursor: comingSoon ? "not-allowed" : "pointer"
        }}
      >
        <img src={icon} alt="" className=" rounded-[6px] max-h-14 not" />
        <h4 className="text-[#667085] text-[1rem] font-medium">{title}</h4>
      </div>
    </Col>
  );
};

export default ToolCard;
